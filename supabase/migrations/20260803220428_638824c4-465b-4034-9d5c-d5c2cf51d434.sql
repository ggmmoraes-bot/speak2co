-- Remove column-level UPDATE privilege on plan for regular users
REVOKE UPDATE ON public.profiles FROM authenticated;
GRANT UPDATE (full_name, avatar_url, english_level, goal, target_level, updated_at) ON public.profiles TO authenticated;
GRANT ALL ON public.profiles TO service_role;

-- Defense in depth: block plan changes from any non-privileged role
CREATE OR REPLACE FUNCTION public.prevent_plan_self_update()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NEW.plan IS DISTINCT FROM OLD.plan
     AND current_setting('role', true) IS DISTINCT FROM 'service_role'
     AND auth.uid() IS NOT NULL THEN
    RAISE EXCEPTION 'plan changes are not allowed';
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS profiles_prevent_plan_self_update ON public.profiles;
CREATE TRIGGER profiles_prevent_plan_self_update
BEFORE UPDATE ON public.profiles
FOR EACH ROW EXECUTE FUNCTION public.prevent_plan_self_update();