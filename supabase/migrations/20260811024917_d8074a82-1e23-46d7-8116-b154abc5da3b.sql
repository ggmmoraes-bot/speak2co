INSERT INTO public.features (key, name, description, category, route, is_active, sort_order)
VALUES ('product_line_fluency', 'Speak2Fluency', 'Jornada de fluência com missões diárias, simulações e feedback da IA', 'product_lines', '/speak2fluency', true, 12)
ON CONFLICT (key) DO UPDATE SET name = EXCLUDED.name, description = EXCLUDED.description, category = EXCLUDED.category, route = EXCLUDED.route, is_active = true;

INSERT INTO public.plan_features (plan_key, feature_key, enabled)
VALUES ('free','product_line_fluency',false),
       ('essential','product_line_fluency',false),
       ('premium','product_line_fluency',true),
       ('signature','product_line_fluency',true)
ON CONFLICT (plan_key, feature_key) DO UPDATE SET enabled = EXCLUDED.enabled;

CREATE TABLE public.fluency_progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  module_id text NOT NULL,
  sections_done jsonb NOT NULL DEFAULT '[]'::jsonb,
  answers jsonb NOT NULL DEFAULT '{}'::jsonb,
  feedback jsonb,
  score integer,
  attempts integer NOT NULL DEFAULT 0,
  completed boolean NOT NULL DEFAULT false,
  completed_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, module_id)
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.fluency_progress TO authenticated;
GRANT ALL ON public.fluency_progress TO service_role;
ALTER TABLE public.fluency_progress ENABLE ROW LEVEL SECURITY;
CREATE POLICY "fluency_progress_select" ON public.fluency_progress FOR SELECT TO authenticated USING (user_id = auth.uid());
CREATE POLICY "fluency_progress_insert" ON public.fluency_progress FOR INSERT TO authenticated WITH CHECK (user_id = auth.uid());
CREATE POLICY "fluency_progress_update" ON public.fluency_progress FOR UPDATE TO authenticated USING (user_id = auth.uid()) WITH CHECK (user_id = auth.uid());
CREATE POLICY "fluency_progress_delete" ON public.fluency_progress FOR DELETE TO authenticated USING (user_id = auth.uid());
CREATE TRIGGER fluency_progress_set_updated_at BEFORE UPDATE ON public.fluency_progress FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE TABLE public.fluency_missions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  mission_date date NOT NULL DEFAULT (now() AT TIME ZONE 'America/Sao_Paulo')::date,
  blocks jsonb NOT NULL DEFAULT '{}'::jsonb,
  minutes integer NOT NULL DEFAULT 0,
  completed boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, mission_date)
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.fluency_missions TO authenticated;
GRANT ALL ON public.fluency_missions TO service_role;
ALTER TABLE public.fluency_missions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "fluency_missions_select" ON public.fluency_missions FOR SELECT TO authenticated USING (user_id = auth.uid());
CREATE POLICY "fluency_missions_insert" ON public.fluency_missions FOR INSERT TO authenticated WITH CHECK (user_id = auth.uid());
CREATE POLICY "fluency_missions_update" ON public.fluency_missions FOR UPDATE TO authenticated USING (user_id = auth.uid()) WITH CHECK (user_id = auth.uid());
CREATE POLICY "fluency_missions_delete" ON public.fluency_missions FOR DELETE TO authenticated USING (user_id = auth.uid());
CREATE TRIGGER fluency_missions_set_updated_at BEFORE UPDATE ON public.fluency_missions FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();