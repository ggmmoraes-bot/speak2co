CREATE TABLE public.travel_progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  track_id text NOT NULL DEFAULT 'airport-essentials',
  briefing_completed boolean NOT NULL DEFAULT false,
  current_index integer NOT NULL DEFAULT 0,
  answers jsonb NOT NULL DEFAULT '{}'::jsonb,
  feedback jsonb,
  completed boolean NOT NULL DEFAULT false,
  completed_at timestamp with time zone,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now(),
  UNIQUE (user_id, track_id)
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.travel_progress TO authenticated;
GRANT ALL ON public.travel_progress TO service_role;

ALTER TABLE public.travel_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own travel progress" ON public.travel_progress FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own travel progress" ON public.travel_progress FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own travel progress" ON public.travel_progress FOR UPDATE TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can delete own travel progress" ON public.travel_progress FOR DELETE TO authenticated USING (auth.uid() = user_id);

CREATE TRIGGER travel_progress_set_updated_at BEFORE UPDATE ON public.travel_progress FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();