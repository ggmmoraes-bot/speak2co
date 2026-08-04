-- 1. plan tier enum extension
ALTER TYPE public.plan_tier ADD VALUE IF NOT EXISTS 'essential';
ALTER TYPE public.plan_tier ADD VALUE IF NOT EXISTS 'signature';

-- 2. roles
DO $$ BEGIN
  CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

CREATE TABLE IF NOT EXISTS public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role);
$$;

CREATE POLICY "Users can view own roles" ON public.user_roles
  FOR SELECT TO authenticated USING (auth.uid() = user_id OR public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins manage roles" ON public.user_roles
  FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- 3. plans catalog
CREATE TABLE IF NOT EXISTS public.plans (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  key text NOT NULL UNIQUE,
  name text NOT NULL,
  tagline text,
  description text,
  access_level integer NOT NULL DEFAULT 0,
  monthly_price numeric,
  yearly_price numeric,
  currency text NOT NULL DEFAULT 'BRL',
  monthly_checkout_key text,
  yearly_checkout_key text,
  ai_daily_minutes integer,
  highlight boolean NOT NULL DEFAULT false,
  is_active boolean NOT NULL DEFAULT true,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.plans TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.plans TO authenticated;
GRANT ALL ON public.plans TO service_role;
ALTER TABLE public.plans ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view plans" ON public.plans FOR SELECT USING (true);
CREATE POLICY "Admins manage plans" ON public.plans
  FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE TRIGGER plans_set_updated_at BEFORE UPDATE ON public.plans FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- 4. features catalog
CREATE TABLE IF NOT EXISTS public.features (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  key text NOT NULL UNIQUE,
  name text NOT NULL,
  description text,
  category text NOT NULL DEFAULT 'geral',
  route text,
  is_active boolean NOT NULL DEFAULT true,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.features TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.features TO authenticated;
GRANT ALL ON public.features TO service_role;
ALTER TABLE public.features ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view features" ON public.features FOR SELECT USING (true);
CREATE POLICY "Admins manage features" ON public.features
  FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE TRIGGER features_set_updated_at BEFORE UPDATE ON public.features FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- 5. plan <-> feature mapping
CREATE TABLE IF NOT EXISTS public.plan_features (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  plan_key text NOT NULL REFERENCES public.plans(key) ON DELETE CASCADE,
  feature_key text NOT NULL REFERENCES public.features(key) ON DELETE CASCADE,
  enabled boolean NOT NULL DEFAULT true,
  note text,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (plan_key, feature_key)
);
GRANT SELECT ON public.plan_features TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.plan_features TO authenticated;
GRANT ALL ON public.plan_features TO service_role;
ALTER TABLE public.plan_features ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view plan features" ON public.plan_features FOR SELECT USING (true);
CREATE POLICY "Admins manage plan features" ON public.plan_features
  FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- 6. daily AI usage
CREATE TABLE IF NOT EXISTS public.ai_usage_daily (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  usage_date date NOT NULL DEFAULT ((now() AT TIME ZONE 'utc')::date),
  feature_key text NOT NULL DEFAULT 'ai_teacher',
  seconds_used integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, usage_date, feature_key)
);
GRANT SELECT, INSERT, UPDATE ON public.ai_usage_daily TO authenticated;
GRANT ALL ON public.ai_usage_daily TO service_role;
ALTER TABLE public.ai_usage_daily ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users view own ai usage" ON public.ai_usage_daily
  FOR SELECT TO authenticated USING (auth.uid() = user_id OR public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Users insert own ai usage" ON public.ai_usage_daily
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users update own ai usage" ON public.ai_usage_daily
  FOR UPDATE TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE TRIGGER ai_usage_daily_set_updated_at BEFORE UPDATE ON public.ai_usage_daily FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- 7. subscriptions plan key
ALTER TABLE public.subscriptions ADD COLUMN IF NOT EXISTS plan_key text;

-- 8. seed plans
INSERT INTO public.plans (key, name, tagline, description, access_level, monthly_price, yearly_price, monthly_checkout_key, yearly_checkout_key, ai_daily_minutes, highlight, sort_order)
VALUES
  ('free', 'Free', 'Conheça a Speak2Co', 'Teste de nivelamento, plano de estudos e Professor IA com limite diário.', 0, 0, 0, NULL, NULL, 20, false, 1),
  ('essential', 'Essential', 'Cursos completos de inglês', 'Cursos Beginner e Intermediate com 20 lições cada, além de tudo do Free.', 10, 19.90, 199.00, 'essential_monthly', 'essential_yearly', 20, false, 2),
  ('premium', 'Premium', 'Todas as Product Lines', 'Speak2Travel, Speak2Hire e Professor IA ilimitado.', 20, 49.90, 499.00, 'premium_monthly', 'premium_yearly', NULL, true, 3),
  ('signature', 'Signature', 'GiseleAI by Speak2Co', 'Mentoria VIP com a GiseleAI, memória de longo prazo e acompanhamento semanal.', 30, 59.90, 599.00, 'signature_monthly', 'signature_yearly', NULL, false, 4)
ON CONFLICT (key) DO NOTHING;

-- 9. seed features
INSERT INTO public.features (key, name, description, category, route, sort_order) VALUES
  ('placement_test', 'Teste de nivelamento (CEFR)', 'Teste adaptativo de inglês com IA.', 'base', '/teste-de-nivel', 1),
  ('cefr_certificate', 'Certificado de nível CEFR', 'Certificado em PDF do nível alcançado.', 'base', '/certificados', 2),
  ('study_plan', 'Plano de estudos personalizado', 'Plano gerado por IA a partir do teste de nivelamento.', 'base', '/painel', 3),
  ('pronunciation_checker', 'Checagem de pronúncia com IA', 'Correção de pronúncia por áudio.', 'base', NULL, 4),
  ('progress_dashboard', 'Painel de evolução', 'Acompanhamento de progresso do aluno.', 'base', '/painel', 5),
  ('ai_teacher', 'Professor IA', 'Conversação em inglês com o professor de IA.', 'ai', '/professor', 6),
  ('courses_beginner', 'Curso Beginner (20 lições)', 'Curso completo de inglês iniciante.', 'cursos', NULL, 7),
  ('courses_intermediate', 'Curso Intermediate (20 lições)', 'Curso completo de inglês intermediário.', 'cursos', NULL, 8),
  ('premium_materials', 'Materiais premium para download', 'PDFs e materiais complementares.', 'cursos', NULL, 9),
  ('product_line_travel', 'Speak2Travel', 'Product Line de inglês para viagens.', 'product_lines', '/speak2travel', 10),
  ('product_line_hire', 'Speak2Hire', 'Product Line de entrevistas em inglês.', 'product_lines', '/speak2hire', 11),
  ('gisele_ai', 'GiseleAI by Speak2Co', 'Mentora de IA exclusiva com memória de longo prazo.', 'signature', '/giseleai', 12)
ON CONFLICT (key) DO NOTHING;

-- 10. seed plan features
INSERT INTO public.plan_features (plan_key, feature_key, enabled)
SELECT p.key, f.key,
  CASE
    WHEN f.category = 'base' THEN true
    WHEN f.key = 'ai_teacher' THEN true
    WHEN f.category = 'cursos' THEN p.access_level >= 10
    WHEN f.category = 'product_lines' THEN p.access_level >= 20
    WHEN f.key = 'gisele_ai' THEN p.access_level >= 30
    ELSE false
  END
FROM public.plans p CROSS JOIN public.features f
ON CONFLICT (plan_key, feature_key) DO NOTHING;