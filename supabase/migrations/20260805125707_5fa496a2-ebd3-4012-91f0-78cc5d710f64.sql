CREATE TABLE public.founder_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role TEXT NOT NULL CHECK (role IN ('student','ai','founder')),
  content TEXT NOT NULL,
  needs_founder BOOLEAN NOT NULL DEFAULT false,
  answered BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE ON public.founder_messages TO authenticated;
GRANT ALL ON public.founder_messages TO service_role;

ALTER TABLE public.founder_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Students read their own founder messages"
ON public.founder_messages FOR SELECT TO authenticated
USING (auth.uid() = user_id OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Students write their own founder messages"
ON public.founder_messages FOR INSERT TO authenticated
WITH CHECK (auth.uid() = user_id OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins update founder messages"
ON public.founder_messages FOR UPDATE TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE INDEX founder_messages_user_created_idx ON public.founder_messages (user_id, created_at);