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
      AND (auth.uid() IS NULL OR auth.uid() = _user_id OR public.has_role(auth.uid(), 'admin'))
      AND s.status IN ('active','authorized')
      AND (s.environment = 'live' OR public.has_role(_user_id, 'admin'))
      AND s.plan_key IN ('speak2hire_lifetime','speak2fluency_lifetime','speak2travel_lifetime')
  ) x
  WHERE f IS NOT NULL;
$$;