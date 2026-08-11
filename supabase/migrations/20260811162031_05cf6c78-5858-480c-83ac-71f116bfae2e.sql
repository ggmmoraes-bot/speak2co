-- Memória de mentoria da Gisele AI (produto Signature)
CREATE TABLE public.gisele_memory (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  kind TEXT NOT NULL CHECK (kind IN ('strength','weakness','goal','review')),
  content TEXT NOT NULL,
  review_at TIMESTAMP WITH TIME ZONE,
  source TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.gisele_memory TO authenticated;
GRANT ALL ON public.gisele_memory TO service_role;
ALTER TABLE public.gisele_memory ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users manage own gisele memory" ON public.gisele_memory FOR ALL TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE INDEX idx_gisele_memory_user ON public.gisele_memory(user_id, kind);
CREATE TRIGGER gisele_memory_set_updated_at BEFORE UPDATE ON public.gisele_memory FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- Sessões de mentoria
CREATE TABLE public.gisele_sessions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  thread_id UUID REFERENCES public.chat_threads(id) ON DELETE CASCADE,
  focus TEXT NOT NULL DEFAULT 'conversation',
  summary TEXT,
  corrections JSONB NOT NULL DEFAULT '[]'::jsonb,
  minutes INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.gisele_sessions TO authenticated;
GRANT ALL ON public.gisele_sessions TO service_role;
ALTER TABLE public.gisele_sessions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users manage own gisele sessions" ON public.gisele_sessions FOR ALL TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE INDEX idx_gisele_sessions_user ON public.gisele_sessions(user_id, created_at DESC);
CREATE TRIGGER gisele_sessions_set_updated_at BEFORE UPDATE ON public.gisele_sessions FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- Separar as conversas da Gisele AI das conversas do Professor IA
ALTER TABLE public.chat_threads ADD COLUMN product TEXT NOT NULL DEFAULT 'professor';