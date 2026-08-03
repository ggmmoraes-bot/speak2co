CREATE TABLE public.study_plan_versions (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  summary text NOT NULL,
  weekly_focus jsonb NOT NULL DEFAULT '[]'::jsonb,
  milestones jsonb NOT NULL DEFAULT '[]'::jsonb,
  locked_weeks integer[] NOT NULL DEFAULT '{}'::integer[],
  reason text NOT NULL DEFAULT 'generated',
  refined_weeks integer[] NOT NULL DEFAULT '{}'::integer[],
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.study_plan_versions TO authenticated;
GRANT ALL ON public.study_plan_versions TO service_role;

ALTER TABLE public.study_plan_versions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own plan versions" ON public.study_plan_versions FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own plan versions" ON public.study_plan_versions FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own plan versions" ON public.study_plan_versions FOR UPDATE TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can delete own plan versions" ON public.study_plan_versions FOR DELETE TO authenticated USING (auth.uid() = user_id);

CREATE INDEX study_plan_versions_user_created_idx ON public.study_plan_versions (user_id, created_at DESC);