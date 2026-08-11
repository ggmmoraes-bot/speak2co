-- AIProfile
CREATE TABLE public.ai_profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  objective text,
  level text,
  preferences jsonb NOT NULL DEFAULT '{}'::jsonb,
  preferred_voice text,
  onboarding_completed boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.ai_profiles TO authenticated;
GRANT ALL ON public.ai_profiles TO service_role;
ALTER TABLE public.ai_profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "ai_profiles_own" ON public.ai_profiles FOR ALL TO authenticated
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE TRIGGER ai_profiles_set_updated_at BEFORE UPDATE ON public.ai_profiles
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- AIConversation: reaproveita chat_threads
ALTER TABLE public.chat_threads
  ADD COLUMN IF NOT EXISTS context text,
  ADD COLUMN IF NOT EXISTS started_at timestamptz NOT NULL DEFAULT now(),
  ADD COLUMN IF NOT EXISTS ended_at timestamptz;

-- AISession: reaproveita gisele_sessions
ALTER TABLE public.gisele_sessions
  ADD COLUMN IF NOT EXISTS session_type text NOT NULL DEFAULT 'chat',
  ADD COLUMN IF NOT EXISTS score integer,
  ADD COLUMN IF NOT EXISTS session_date date NOT NULL DEFAULT current_date;

-- AIFeedback
CREATE TABLE public.ai_feedback (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  session_id uuid REFERENCES public.gisele_sessions(id) ON DELETE CASCADE,
  category text NOT NULL,
  observation text NOT NULL,
  priority integer NOT NULL DEFAULT 2,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX ai_feedback_user_idx ON public.ai_feedback (user_id, created_at DESC);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.ai_feedback TO authenticated;
GRANT ALL ON public.ai_feedback TO service_role;
ALTER TABLE public.ai_feedback ENABLE ROW LEVEL SECURITY;
CREATE POLICY "ai_feedback_own" ON public.ai_feedback FOR ALL TO authenticated
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- AIRecommendation
CREATE TABLE public.ai_recommendations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  session_id uuid REFERENCES public.gisele_sessions(id) ON DELETE SET NULL,
  type text NOT NULL,
  content text NOT NULL,
  route text,
  priority integer NOT NULL DEFAULT 2,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX ai_recommendations_user_idx ON public.ai_recommendations (user_id, status, priority);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.ai_recommendations TO authenticated;
GRANT ALL ON public.ai_recommendations TO service_role;
ALTER TABLE public.ai_recommendations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "ai_recommendations_own" ON public.ai_recommendations FOR ALL TO authenticated
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE TRIGGER ai_recommendations_set_updated_at BEFORE UPDATE ON public.ai_recommendations
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- VoiceSettings
CREATE TABLE public.ai_voice_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  provider text NOT NULL DEFAULT 'openai',
  voice_id text NOT NULL DEFAULT 'alloy',
  consent_status text NOT NULL DEFAULT 'pending',
  support_language text NOT NULL DEFAULT 'bilingual',
  rate numeric NOT NULL DEFAULT 1,
  volume numeric NOT NULL DEFAULT 1,
  auto_speak boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.ai_voice_settings TO authenticated;
GRANT ALL ON public.ai_voice_settings TO service_role;
ALTER TABLE public.ai_voice_settings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "ai_voice_settings_own" ON public.ai_voice_settings FOR ALL TO authenticated
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE TRIGGER ai_voice_settings_set_updated_at BEFORE UPDATE ON public.ai_voice_settings
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- Mission (catálogo)
CREATE TABLE public.ai_missions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  key text NOT NULL UNIQUE,
  title text NOT NULL,
  context text NOT NULL,
  objective text NOT NULL,
  level text NOT NULL DEFAULT 'B1',
  criteria jsonb NOT NULL DEFAULT '[]'::jsonb,
  focus text NOT NULL DEFAULT 'conversation',
  minutes integer NOT NULL DEFAULT 10,
  is_active boolean NOT NULL DEFAULT true,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.ai_missions TO authenticated;
GRANT ALL ON public.ai_missions TO service_role;
ALTER TABLE public.ai_missions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "ai_missions_read" ON public.ai_missions FOR SELECT TO authenticated USING (is_active);
CREATE POLICY "ai_missions_admin" ON public.ai_missions FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE TRIGGER ai_missions_set_updated_at BEFORE UPDATE ON public.ai_missions
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- AIUsage: custo estimado
ALTER TABLE public.ai_usage_daily
  ADD COLUMN IF NOT EXISTS estimated_cost numeric NOT NULL DEFAULT 0;

INSERT INTO public.ai_missions (key, title, context, objective, level, criteria, focus, minutes, sort_order) VALUES
('job-interview-intro', 'Introduce yourself in a job interview', 'You are in the first five minutes of an interview for an international company.', 'Deliver a clear 60-second professional introduction.', 'B1', '["Uses past and present tenses correctly","Mentions one measurable achievement","Speaks for at least 45 seconds"]'::jsonb, 'interview', 10, 1),
('airport-checkin', 'Check in at the airport', 'You are at the check-in counter with one bag to drop off.', 'Handle the whole check-in conversation without switching to Portuguese.', 'A2', '["Asks for a seat preference","Understands and answers security questions","Uses polite requests"]'::jsonb, 'travel', 8, 2),
('small-talk-coffee', 'Small talk with a colleague', 'You meet an international colleague in the office kitchen.', 'Keep a natural three-minute small talk exchange going.', 'B1', '["Asks two follow-up questions","Uses natural connectors","Avoids one-word answers"]'::jsonb, 'conversation', 8, 3),
('hotel-problem', 'Solve a problem at the hotel', 'The air conditioning in your room is not working.', 'Explain the problem and negotiate a solution politely.', 'B1', '["Describes the problem clearly","Uses polite complaint language","Confirms the agreed solution"]'::jsonb, 'travel', 10, 4),
('pronunciation-th', 'Master the /th/ sounds', 'Pronunciation lab focused on voiced and unvoiced /th/.', 'Produce /th/ accurately in ten target words and three sentences.', 'A2', '["Distinguishes think vs this","Keeps the tongue position","Reads three sentences fluently"]'::jsonb, 'pronunciation', 7, 5),
('meeting-opinion', 'Give your opinion in a meeting', 'A weekly team meeting where your opinion is requested.', 'Agree, disagree and justify with professional language.', 'B2', '["Uses hedging language","Justifies with one reason","Invites another opinion"]'::jsonb, 'conversation', 10, 6);