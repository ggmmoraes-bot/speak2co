CREATE TABLE public.subscription_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  subscription_id uuid REFERENCES public.subscriptions(id) ON DELETE SET NULL,
  preapproval_id text,
  event_type text NOT NULL,
  status text,
  amount numeric,
  currency text,
  next_payment_date timestamptz,
  message text,
  raw jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.subscription_events TO authenticated;
GRANT ALL ON public.subscription_events TO service_role;

ALTER TABLE public.subscription_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own subscription events"
ON public.subscription_events FOR SELECT TO authenticated
USING (auth.uid() = user_id);

CREATE INDEX subscription_events_user_created_idx
ON public.subscription_events (user_id, created_at DESC);