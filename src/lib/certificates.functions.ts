import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { buildCertificates, type Certificate } from "./certificates.server";

export type { Certificate };

export const getCertificates = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }): Promise<{ studentName: string; certificates: Certificate[] }> => {
    const supabase = context.supabase as any;
    const userId = context.userId as string;

    const [profileRes, placementRes, interviewsRes, exercisesRes, chatRes] = await Promise.all([
      supabase.from("profiles").select("full_name, english_level").eq("id", userId).maybeSingle(),
      supabase
        .from("placement_tests")
        .select("level, score, completed_at")
        .eq("completed", true)
        .order("completed_at", { ascending: false }),
      supabase.from("interview_sessions").select("score, completed_at").eq("completed", true),
      supabase.from("daily_exercises").select("score, updated_at").eq("completed", true),
      supabase.from("chat_messages").select("id", { count: "exact", head: true }).eq("role", "user"),
    ]);

    return {
      studentName: (profileRes.data?.full_name as string | null) ?? "Aluno Speak2Co",
      certificates: buildCertificates({
        userId,
        placements: placementRes.data ?? [],
        interviews: interviewsRes.data ?? [],
        exercises: exercisesRes.data ?? [],
        chatMessages: chatRes.count ?? 0,
      }),
    };
  });
