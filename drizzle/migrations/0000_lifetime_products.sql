ALTER TYPE public.plan_tier ADD VALUE IF NOT EXISTS 'complete';

CREATE OR REPLACE FUNCTION public.owned_product_features(_user_id uuid)
RETURNS text[]
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path TO 'public'
AS $$
  SELECT COALESCE(array_agg(DISTINCT f), ARRAY[]::text[])
  FROM (
    SELECT CASE s.plan_key
      WHEN 'speak2hire_lifetime' THEN 'product_line_hire'
      WHEN 'speak2fluency_lifetime' THEN 'product_line_fluency'
      WHEN 'speak2travel_lifetime' THEN 'product_line_travel'
    END AS f
    FROM public.subscriptions s
    WHERE s.user_id = _user_id
      AND s.status IN ('active','authorized')
      AND (s.environment = 'live' OR public.has_role(_user_id, 'admin'))
      AND s.plan_key IN ('speak2hire_lifetime','speak2fluency_lifetime','speak2travel_lifetime')
  ) x
  WHERE f IS NOT NULL;
$$;

REVOKE ALL ON FUNCTION public.owned_product_features(uuid) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.owned_product_features(uuid) TO authenticated, service_role;

CREATE OR REPLACE FUNCTION public.has_feature(_user_id uuid, _feature_key text)
RETURNS boolean
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path TO 'public'
AS $$
  SELECT public.has_role(_user_id, 'admin')
      OR EXISTS (
        SELECT 1
        FROM public.profiles p
        JOIN public.plan_features pf
          ON pf.plan_key::text = COALESCE(p.plan::text, 'free')
        WHERE p.id = _user_id
          AND pf.feature_key::text = _feature_key
          AND pf.enabled = true
      )
      OR _feature_key = ANY (public.owned_product_features(_user_id));
$$;