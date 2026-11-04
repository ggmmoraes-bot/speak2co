CREATE TABLE public.kids_profiles (
  user_id uuid PRIMARY KEY,
  nickname text NOT NULL DEFAULT 'Super Kid' CHECK (char_length(nickname) BETWEEN 1 AND 20),
  avatar text NOT NULL DEFAULT '🦁' CHECK (char_length(avatar) <= 8),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.kids_profiles TO authenticated;
GRANT ALL ON public.kids_profiles TO service_role;
ALTER TABLE public.kids_profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "own kids profile" ON public.kids_profiles FOR ALL TO authenticated
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE TABLE public.kids_progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  unit_number integer NOT NULL CHECK (unit_number BETWEEN 1 AND 20),
  part integer NOT NULL CHECK (part IN (1,2)),
  quick_check_score integer,
  activities_done text[] NOT NULL DEFAULT '{}',
  completed boolean NOT NULL DEFAULT false,
  completed_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, unit_number, part)
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.kids_progress TO authenticated;
GRANT ALL ON public.kids_progress TO service_role;
ALTER TABLE public.kids_progress ENABLE ROW LEVEL SECURITY;
CREATE POLICY "own kids progress" ON public.kids_progress FOR ALL TO authenticated
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE TRIGGER kids_profiles_updated BEFORE UPDATE ON public.kids_profiles FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER kids_progress_updated BEFORE UPDATE ON public.kids_progress FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();