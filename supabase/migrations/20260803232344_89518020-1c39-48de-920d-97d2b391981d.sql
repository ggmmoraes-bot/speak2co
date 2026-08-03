CREATE OR REPLACE FUNCTION public.fluency_leaderboard(_limit integer DEFAULT 50)
RETURNS TABLE (
  user_id uuid,
  display_name text,
  avatar_url text,
  english_level text,
  placement_points integer,
  chat_points integer,
  interview_points integer,
  exercise_points integer,
  total_points integer
)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  WITH placement AS (
    SELECT p.user_id, COALESCE(MAX(p.score), 0) * 2 AS pts
    FROM public.placement_tests p
    WHERE p.completed
    GROUP BY p.user_id
  ),
  chat AS (
    SELECT c.user_id, LEAST(COUNT(*) * 3, 300) AS pts
    FROM public.chat_messages c
    WHERE c.role = 'user'
    GROUP BY c.user_id
  ),
  interviews AS (
    SELECT i.user_id, LEAST(COALESCE(SUM(i.score), 0) * 3 / 2, 400) AS pts
    FROM public.interview_sessions i
    WHERE i.completed
    GROUP BY i.user_id
  ),
  exercises AS (
    SELECT d.user_id, LEAST(COALESCE(SUM(d.score), 0), 300) AS pts
    FROM public.daily_exercises d
    WHERE d.completed
    GROUP BY d.user_id
  )
  SELECT
    pr.id AS user_id,
    COALESCE(NULLIF(split_part(trim(pr.full_name), ' ', 1), ''), 'Aluno') AS display_name,
    pr.avatar_url,
    pr.english_level,
    COALESCE(placement.pts, 0)::integer AS placement_points,
    COALESCE(chat.pts, 0)::integer AS chat_points,
    COALESCE(interviews.pts, 0)::integer AS interview_points,
    COALESCE(exercises.pts, 0)::integer AS exercise_points,
    (COALESCE(placement.pts, 0) + COALESCE(chat.pts, 0) + COALESCE(interviews.pts, 0) + COALESCE(exercises.pts, 0))::integer AS total_points
  FROM public.profiles pr
  LEFT JOIN placement ON placement.user_id = pr.id
  LEFT JOIN chat ON chat.user_id = pr.id
  LEFT JOIN interviews ON interviews.user_id = pr.id
  LEFT JOIN exercises ON exercises.user_id = pr.id
  ORDER BY total_points DESC, display_name ASC
  LIMIT GREATEST(1, LEAST(_limit, 100));
$$;

REVOKE ALL ON FUNCTION public.fluency_leaderboard(integer) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.fluency_leaderboard(integer) TO authenticated;
GRANT EXECUTE ON FUNCTION public.fluency_leaderboard(integer) TO service_role;