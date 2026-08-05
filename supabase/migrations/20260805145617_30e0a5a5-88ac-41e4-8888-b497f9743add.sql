ALTER TABLE public.subscriptions
  ADD COLUMN IF NOT EXISTS scheduled_plan_key text;

CREATE OR REPLACE FUNCTION public.sync_expired_plans()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Downgrades agendados entram em vigor quando o período pago termina.
  UPDATE public.subscriptions s
  SET plan_key = s.scheduled_plan_key,
      scheduled_plan_key = NULL,
      updated_at = now()
  WHERE s.scheduled_plan_key IS NOT NULL
    AND COALESCE(s.current_period_end, s.next_payment_date) IS NOT NULL
    AND COALESCE(s.current_period_end, s.next_payment_date) <= now();

  UPDATE public.profiles p
  SET plan = public.current_plan_tier(p.id)::plan_tier
  WHERE p.plan::text IS DISTINCT FROM public.current_plan_tier(p.id);
END;
$$;

REVOKE ALL ON FUNCTION public.sync_expired_plans() FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.sync_expired_plans() TO service_role;