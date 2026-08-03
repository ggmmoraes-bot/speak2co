import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

export type LeaderboardRow = {
  user_id: string;
  display_name: string;
  avatar_url: string | null;
  english_level: string | null;
  placement_points: number;
  chat_points: number;
  interview_points: number;
  exercise_points: number;
  total_points: number;
};

export type Leaderboard = {
  rows: LeaderboardRow[];
  me: (LeaderboardRow & { position: number }) | null;
};

export const getFluencyLeaderboard = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }): Promise<Leaderboard> => {
    const { data, error } = await (context.supabase as any).rpc("fluency_leaderboard", {
      _limit: 50,
    });
    if (error) throw new Error(error.message);

    const rows = ((data ?? []) as LeaderboardRow[]).filter((r) => r.total_points > 0);
    const index = rows.findIndex((r) => r.user_id === context.userId);
    const me = index >= 0 ? { ...rows[index]!, position: index + 1 } : null;

    return { rows, me };
  });
