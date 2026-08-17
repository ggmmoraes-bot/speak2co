ALTER TABLE public.founder_messages ADD COLUMN IF NOT EXISTS notified_at timestamptz;

CREATE POLICY "Admins can read all founder messages"
  ON public.founder_messages FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert founder replies"
  ON public.founder_messages FOR INSERT TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update founder messages"
  ON public.founder_messages FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE TABLE public.practice_meetings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  title_pt text,
  description text NOT NULL DEFAULT '',
  topic text NOT NULL DEFAULT '',
  level text NOT NULL DEFAULT 'B1',
  min_plan text NOT NULL DEFAULT 'free',
  starts_at timestamptz NOT NULL,
  duration_minutes integer NOT NULL DEFAULT 30,
  capacity integer NOT NULL DEFAULT 30,
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.practice_meetings TO authenticated;
GRANT ALL ON public.practice_meetings TO service_role;
ALTER TABLE public.practice_meetings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Students can read active meetings"
  ON public.practice_meetings FOR SELECT TO authenticated
  USING (is_active OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins manage meetings insert"
  ON public.practice_meetings FOR INSERT TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins manage meetings update"
  ON public.practice_meetings FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins manage meetings delete"
  ON public.practice_meetings FOR DELETE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE TRIGGER practice_meetings_set_updated_at
  BEFORE UPDATE ON public.practice_meetings
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE TABLE public.practice_meeting_signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  meeting_id uuid NOT NULL REFERENCES public.practice_meetings(id) ON DELETE CASCADE,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  status text NOT NULL DEFAULT 'registered',
  reminded_24h boolean NOT NULL DEFAULT false,
  reminded_15m boolean NOT NULL DEFAULT false,
  completed_at timestamptz,
  feedback jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (meeting_id, user_id)
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.practice_meeting_signups TO authenticated;
GRANT ALL ON public.practice_meeting_signups TO service_role;
ALTER TABLE public.practice_meeting_signups ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Students read own signups"
  ON public.practice_meeting_signups FOR SELECT TO authenticated
  USING (auth.uid() = user_id OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Students create own signups"
  ON public.practice_meeting_signups FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Students update own signups"
  ON public.practice_meeting_signups FOR UPDATE TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Students delete own signups"
  ON public.practice_meeting_signups FOR DELETE TO authenticated
  USING (auth.uid() = user_id);

CREATE TRIGGER practice_meeting_signups_set_updated_at
  BEFORE UPDATE ON public.practice_meeting_signups
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();