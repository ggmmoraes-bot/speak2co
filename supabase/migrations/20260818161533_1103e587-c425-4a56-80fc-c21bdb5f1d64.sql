REVOKE EXECUTE ON FUNCTION public.active_courtesy_plan(uuid) FROM anon, authenticated, public;
GRANT EXECUTE ON FUNCTION public.active_courtesy_plan(uuid) TO service_role;