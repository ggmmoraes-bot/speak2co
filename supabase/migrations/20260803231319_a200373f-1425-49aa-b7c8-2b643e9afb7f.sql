CREATE TABLE public.placement_tests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  questions jsonb NOT NULL DEFAULT '[]'::jsonb,
  answers jsonb NOT NULL DEFAULT '{}'::jsonb,
  writing_prompt text,
  writing_answer text,
  correct_count integer NOT NULL DEFAULT 0,
  total_questions integer NOT NULL DEFAULT 0,
  score integer,
  level text,
  feedback jsonb,
  completed boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  completed_at timestamptz
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.placement_tests TO authenticated;
GRANT ALL ON public.placement_tests TO service_role;

ALTER TABLE public.placement_tests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own placement tests" ON public.placement_tests
  FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own placement tests" ON public.placement_tests
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own placement tests" ON public.placement_tests
  FOR UPDATE TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can delete own placement tests" ON public.placement_tests
  FOR DELETE TO authenticated USING (auth.uid() = user_id);

CREATE INDEX placement_tests_user_created_idx ON public.placement_tests (user_id, created_at DESC);

CREATE TRIGGER placement_tests_set_updated_at
  BEFORE UPDATE ON public.placement_tests
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();