CREATE TABLE public.benefit_grants (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  email_snapshot text,
  kind text NOT NULL CHECK (kind IN ('courtesy','discount')),
  plan_key text NOT NULL DEFAULT 'signature',
  discount_percent numeric NOT NULL DEFAULT 0 CHECK (discount_percent >= 0 AND discount_percent <= 100),
  code text,
  starts_at timestamptz NOT NULL DEFAULT now(),
  ends_at timestamptz,
  usage_limit integer,
  usage_count integer NOT NULL DEFAULT 0,
  status text NOT NULL DEFAULT 'active' CHECK (status IN ('active','inactive','revoked','expired')),
  granted_by uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  note text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX benefit_grants_code_unique ON public.benefit_grants (lower(code)) WHERE code IS NOT NULL;
CREATE INDEX benefit_grants_user_idx ON public.benefit_grants (user_id, status);

CREATE TABLE public.benefit_grant_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  grant_id uuid NOT NULL REFERENCES public.benefit_grants(id) ON DELETE CASCADE,
  action text NOT NULL,
  payload jsonb NOT NULL DEFAULT '{}'::jsonb,
  actor_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX benefit_grant_events_grant_idx ON public.benefit_grant_events (grant_id, created_at DESC);

GRANT ALL ON public.benefit_grants TO service_role;
GRANT ALL ON public.benefit_grant_events TO service_role;

ALTER TABLE public.benefit_grants ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.benefit_grant_events ENABLE ROW LEVEL SECURITY;

CREATE TRIGGER benefit_grants_set_updated_at
BEFORE UPDATE ON public.benefit_grants
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE OR REPLACE FUNCTION public.active_courtesy_plan(user_uuid uuid)
RETURNS text
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path TO 'public'
AS $$
  SELECT p.key
  FROM public.benefit_grants g
  JOIN public.plans p ON p.key = g.plan_key
  WHERE g.user_id = user_uuid
    AND g.kind = 'courtesy'
    AND g.status = 'active'
    AND g.starts_at <= now()
    AND (g.ends_at IS NULL OR g.ends_at > now())
  ORDER BY p.access_level DESC
  LIMIT 1;
$$;

CREATE OR REPLACE FUNCTION public.current_plan_tier(user_uuid uuid)
RETURNS text
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path TO 'public'
AS $$
  WITH paid AS (
    SELECT p.key, p.access_level
    FROM public.subscriptions s
    JOIN public.plans p
      ON (p.monthly_checkout_key = s.plan_key OR p.yearly_checkout_key = s.plan_key)
    WHERE s.user_id = user_uuid
      AND (s.environment = 'live' OR public.has_role(user_uuid, 'admin'))
      AND (
        (s.status IN ('active','trialing','authorized','past_due')
          AND (COALESCE(s.current_period_end, s.next_payment_date) IS NULL
               OR COALESCE(s.current_period_end, s.next_payment_date) > now()))
        OR (s.status IN ('canceled','cancelled','paused')
          AND COALESCE(s.current_period_end, s.next_payment_date) > now())
      )
    ORDER BY p.access_level DESC
    LIMIT 1
  ),
  courtesy AS (
    SELECT p.key, p.access_level
    FROM public.plans p
    WHERE p.key = public.active_courtesy_plan(user_uuid)
  )
  SELECT COALESCE((
    SELECT key FROM (
      SELECT key, access_level FROM paid
      UNION ALL
      SELECT key, access_level FROM courtesy
    ) best
    ORDER BY access_level DESC
    LIMIT 1
  ), 'free');
$$;

CREATE OR REPLACE FUNCTION public.sync_expired_plans()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  UPDATE public.subscriptions s
  SET plan_key = s.scheduled_plan_key,
      scheduled_plan_key = NULL,
      updated_at = now()
  WHERE s.scheduled_plan_key IS NOT NULL
    AND COALESCE(s.current_period_end, s.next_payment_date) IS NOT NULL
    AND COALESCE(s.current_period_end, s.next_payment_date) <= now();

  UPDATE public.benefit_grants g
  SET status = 'expired', updated_at = now()
  WHERE g.status = 'active'
    AND g.ends_at IS NOT NULL
    AND g.ends_at <= now();

  UPDATE public.profiles p
  SET plan = public.current_plan_tier(p.id)::plan_tier
  WHERE p.plan::text IS DISTINCT FROM public.current_plan_tier(p.id);
END;
$$;