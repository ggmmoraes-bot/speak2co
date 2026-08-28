CREATE TABLE public.live_lesson_progress (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users ON DELETE CASCADE,
  course_id TEXT NOT NULL,
  unit_code TEXT NOT NULL,
  part TEXT NOT NULL,
  stages_done TEXT[] NOT NULL DEFAULT '{}',
  speaking_attempts INTEGER NOT NULL DEFAULT 0,
  vocabulary_practiced TEXT[] NOT NULL DEFAULT '{}',
  grammar_practiced TEXT[] NOT NULL DEFAULT '{}',
  pronunciation_score INTEGER,
  fluency_note TEXT,
  challenge_result JSONB,
  confidence INTEGER,
  summary JSONB,
  completed BOOLEAN NOT NULL DEFAULT false,
  completed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE (user_id, course_id, unit_code, part)
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.live_lesson_progress TO authenticated;
GRANT ALL ON public.live_lesson_progress TO service_role;
ALTER TABLE public.live_lesson_progress ENABLE ROW LEVEL SECURITY;
CREATE POLICY "own live lesson progress" ON public.live_lesson_progress FOR ALL TO authenticated
USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE TABLE public.live_lesson_media (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  course_id TEXT NOT NULL,
  unit_code TEXT NOT NULL,
  part TEXT NOT NULL,
  stage TEXT NOT NULL,
  video_url TEXT NOT NULL,
  poster_url TEXT,
  caption TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE (course_id, unit_code, part, stage)
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.live_lesson_media TO authenticated;
GRANT ALL ON public.live_lesson_media TO service_role;
ALTER TABLE public.live_lesson_media ENABLE ROW LEVEL SECURITY;
CREATE POLICY "students watch live lesson media" ON public.live_lesson_media FOR SELECT TO authenticated USING (true);
CREATE POLICY "admins manage live lesson media" ON public.live_lesson_media FOR ALL TO authenticated
USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE TABLE public.live_lesson_script_cache (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  cache_key TEXT NOT NULL UNIQUE,
  course_id TEXT NOT NULL,
  unit_code TEXT NOT NULL,
  part TEXT NOT NULL,
  script JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT ON public.live_lesson_script_cache TO authenticated;
GRANT ALL ON public.live_lesson_script_cache TO service_role;
ALTER TABLE public.live_lesson_script_cache ENABLE ROW LEVEL SECURITY;
CREATE POLICY "students read live lesson script" ON public.live_lesson_script_cache FOR SELECT TO authenticated USING (true);
CREATE POLICY "students cache live lesson script" ON public.live_lesson_script_cache FOR INSERT TO authenticated WITH CHECK (true);

CREATE TRIGGER update_live_lesson_progress_updated_at BEFORE UPDATE ON public.live_lesson_progress
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER update_live_lesson_media_updated_at BEFORE UPDATE ON public.live_lesson_media
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();