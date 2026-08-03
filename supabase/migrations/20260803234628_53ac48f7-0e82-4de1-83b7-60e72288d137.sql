-- Trigger-only functions: not meant to be callable through the API
REVOKE ALL ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.prevent_plan_self_update() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.set_updated_at() FROM PUBLIC, anon, authenticated;

-- Leaderboard: signed-in students only
REVOKE ALL ON FUNCTION public.fluency_leaderboard(integer) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.fluency_leaderboard(integer) TO authenticated;
GRANT EXECUTE ON FUNCTION public.fluency_leaderboard(integer) TO service_role;