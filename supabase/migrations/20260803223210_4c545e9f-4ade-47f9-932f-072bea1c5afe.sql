CREATE TABLE public.chat_threads (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title text NOT NULL DEFAULT 'Nova conversa',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.chat_threads TO authenticated;
GRANT ALL ON public.chat_threads TO service_role;

ALTER TABLE public.chat_threads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own chat threads"
  ON public.chat_threads FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own chat threads"
  ON public.chat_threads FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own chat threads"
  ON public.chat_threads FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own chat threads"
  ON public.chat_threads FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

CREATE TABLE public.chat_messages (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  thread_id uuid NOT NULL REFERENCES public.chat_threads(id) ON DELETE CASCADE,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role text NOT NULL,
  parts jsonb NOT NULL DEFAULT '[]'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT ON public.chat_messages TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.chat_messages TO service_role;

ALTER TABLE public.chat_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own chat messages"
  ON public.chat_messages FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own chat messages"
  ON public.chat_messages FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE TRIGGER chat_threads_set_updated_at
  BEFORE UPDATE ON public.chat_threads
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();