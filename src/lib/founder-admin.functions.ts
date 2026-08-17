import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

export type EscalatedItem = {
  /** Mensagem escalada (a resposta automática que pediu a Gisele). */
  id: string;
  userId: string;
  studentName: string;
  plan: string;
  /** Pergunta original do aluno que gerou a escalada. */
  question: string;
  /** O que a IA respondeu ao aluno. */
  aiReply: string;
  answered: boolean;
  createdAt: string;
};

async function assertAdmin(context: { supabase: unknown; userId: string }) {
  const { assertAdmin: guard } = await import("@/lib/admin-guard.server");
  await guard(context as never);
}

/** Caixa de entrada da fundadora: mensagens que a IA não resolveu. */
export const listEscalatedMessages = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z
      .object({ onlyPending: z.boolean().optional() })
      .default({})
      .parse(input ?? {}),
  )
  .handler(async ({ data, context }): Promise<EscalatedItem[]> => {
    await assertAdmin(context);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    let query = supabaseAdmin
      .from("founder_messages")
      .select("id, user_id, content, answered, created_at")
      .eq("needs_founder", true)
      .eq("role", "ai")
      .order("created_at", { ascending: false })
      .limit(200);
    if (data.onlyPending) query = query.eq("answered", false);

    const { data: rows, error } = await query;
    if (error) throw new Error(error.message);
    const items = rows ?? [];
    if (items.length === 0) return [];

    const userIds = [...new Set(items.map((r) => r.user_id))];
    const { data: profiles } = await supabaseAdmin
      .from("profiles")
      .select("id, full_name, plan")
      .in("id", userIds);
    const profileById = new Map((profiles ?? []).map((p) => [p.id, p]));

    // Pergunta que originou cada escalada: última mensagem do aluno antes dela.
    const { data: studentMsgs } = await supabaseAdmin
      .from("founder_messages")
      .select("user_id, content, created_at")
      .eq("role", "student")
      .in("user_id", userIds)
      .order("created_at", { ascending: true });

    function questionFor(userId: string, before: string) {
      const list = (studentMsgs ?? []).filter(
        (m) => m.user_id === userId && m.created_at <= before,
      );
      return list.length > 0 ? (list[list.length - 1]?.content ?? "") : "";
    }

    return items.map((row) => {
      const profile = profileById.get(row.user_id);
      return {
        id: row.id,
        userId: row.user_id,
        studentName: profile?.full_name?.trim() || "Aluno Speak2Co",
        plan: (profile?.plan as string) ?? "free",
        question: questionFor(row.user_id, row.created_at),
        aiReply: row.content,
        answered: row.answered,
        createdAt: row.created_at,
      };
    });
  });

/** Quantidade de mensagens aguardando a fundadora (badge do painel). */
export const countPendingFounderMessages = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }): Promise<{ pending: number }> => {
    const { isAdminUser } = await import("@/lib/admin-guard.server");
    const isAdmin = await isAdminUser(context.supabase as never, context.userId);
    if (!isAdmin) return { pending: 0 };

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { count, error } = await supabaseAdmin
      .from("founder_messages")
      .select("id", { count: "exact", head: true })
      .eq("needs_founder", true)
      .eq("role", "ai")
      .eq("answered", false);
    if (error) throw new Error(error.message);
    return { pending: count ?? 0 };
  });

/** Responde o aluno como Gisele Moraes e marca a escalada como resolvida. */
export const replyAsFounder = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z
      .object({
        messageId: z.string().uuid(),
        userId: z.string().uuid(),
        content: z.string().trim().min(2).max(3000),
      })
      .parse(input),
  )
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { error: insertError } = await supabaseAdmin.from("founder_messages").insert({
      user_id: data.userId,
      role: "founder",
      content: data.content,
    });
    if (insertError) throw new Error(insertError.message);

    const { error } = await supabaseAdmin
      .from("founder_messages")
      .update({ answered: true })
      .eq("id", data.messageId);
    if (error) throw new Error(error.message);
    return { ok: true as const };
  });

/** Marca a escalada como resolvida sem enviar resposta escrita. */
export const resolveFounderMessage = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) => z.object({ messageId: z.string().uuid() }).parse(input))
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin
      .from("founder_messages")
      .update({ answered: true })
      .eq("id", data.messageId);
    if (error) throw new Error(error.message);
    return { ok: true as const };
  });
