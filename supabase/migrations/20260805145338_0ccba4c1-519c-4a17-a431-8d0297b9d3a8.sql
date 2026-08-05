-- 1. Unique constraint (partial index cannot be used by ON CONFLICT)
DROP INDEX IF EXISTS public.subscriptions_paddle_subscription_id_key;
ALTER TABLE public.subscriptions
  ADD CONSTRAINT subscriptions_paddle_subscription_id_key UNIQUE (paddle_subscription_id);

-- 2. Source of truth for a user's current tier, derived from subscription validity
CREATE OR REPLACE FUNCTION public.current_plan_tier(user_uuid uuid)
RETURNS text
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path = public
AS $$
  SELECT COALESCE((
    SELECT p.key
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
  ), 'free');
$$;

REVOKE ALL ON FUNCTION public.current_plan_tier(uuid) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.current_plan_tier(uuid) TO authenticated, service_role;

-- 3. Hourly reconciliation: expired subscriptions fall back to Gratuito
CREATE EXTENSION IF NOT EXISTS pg_cron;

CREATE OR REPLACE FUNCTION public.sync_expired_plans()
RETURNS void
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  UPDATE public.profiles p
  SET plan = public.current_plan_tier(p.id)::plan_tier
  WHERE p.plan::text IS DISTINCT FROM public.current_plan_tier(p.id);
$$;

REVOKE ALL ON FUNCTION public.sync_expired_plans() FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.sync_expired_plans() TO service_role;

SELECT cron.unschedule('sync-expired-plans')
WHERE EXISTS (SELECT 1 FROM cron.job WHERE jobname = 'sync-expired-plans');

SELECT cron.schedule(
  'sync-expired-plans',
  '5 * * * *',
  $$SELECT public.sync_expired_plans();$$
);