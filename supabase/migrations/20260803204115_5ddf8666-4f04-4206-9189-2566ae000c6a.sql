CREATE TABLE public.daily_exercises (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  exercise_date date NOT NULL DEFAULT (now() AT TIME ZONE 'utc')::date,
  week_number integer,
  title text NOT NULL,
  instructions text,
  items jsonb NOT NULL DEFAULT '[]'::jsonb,
  answers jsonb NOT NULL DEFAULT '{}'::jsonb,
  score integer,
  completed boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, exercise_date)
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.daily_exercises TO authenticated;
GRANT ALL ON public.daily_exercises TO service_role;

ALTER TABLE public.daily_exercises ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own daily exercises" ON public.daily_exercises FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own daily exercises" ON public.daily_exercises FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own daily exercises" ON public.daily_exercises FOR UPDATE TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can delete own daily exercises" ON public.daily_exercises FOR DELETE TO authenticated USING (auth.uid() = user_id);

CREATE TRIGGER daily_exercises_set_updated_at BEFORE UPDATE ON public.daily_exercises FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();