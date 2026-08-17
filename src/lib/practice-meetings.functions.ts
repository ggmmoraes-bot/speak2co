import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

export type PracticeMeeting = {
  id: string;
  title: string;
  titlePt: string | null;
  description: string;
  topic: string;
  level: string;
  minPlan: string;
  startsAt: string;
  durationMinutes: number;
  capacity: number;
  isActive: boolean;
  seatsTaken: number;
  /** O aluno logado está inscrito? */
  joined: boolean;
  /** Já concluiu a sala guiada deste encontro? */
  completed: boolean;
};

const SELECT =
  "id, title, title_pt, description, topic, level, min_plan, starts_at, duration_minutes, capacity, is_active";

/** Janela em que a sala guiada fica aberta: 10 min antes até o fim do encontro. */
export function meetingRoomWindow(startsAt: string, durationMinutes: number) {
  const start = new Date(startsAt).getTime();
  return { opensAt: start - 10 * 60_000, closesAt: start + durationMinutes * 60_000 };
}

export function isRoomOpen(startsAt: string, durationMinutes: number, now = Date.now()) {
  const { opensAt, closesAt } = meetingRoomWindow(startsAt, durationMinutes);
  return now >= opensAt && now <= closesAt;
}

/** Encontros ativos futuros (ou em andamento) com o estado do aluno logado. */
export const listPracticeMeetings = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }): Promise<PracticeMeeting[]> => {
    const { supabase, userId } = context;
    const cutoff = new Date(Date.now() - 6 * 60 * 60_000).toISOString();

    const { data: meetings, error } = await supabase
      .from("practice_meetings")
      .select(SELECT)
      .eq("is_active", true)
      .gte("starts_at", cutoff)
      .order("starts_at", { ascending: true })
      .limit(40);
    if (error) throw new Error(error.message);
    const rows = meetings ?? [];
    if (rows.length === 0) return [];

    const ids = rows.map((r) => r.id);
    const { data: signups } = await supabase
      .from("practice_meeting_signups")
      .select("meeting_id, user_id, status, completed_at")
      .in("meeting_id", ids);

    const all = signups ?? [];
    return rows.map((r) => {
      const mine = all.find((s) => s.meeting_id === r.id && s.user_id === userId);
      return {
        id: r.id,
        title: r.title,
        titlePt: r.title_pt,
        description: r.description,
        topic: r.topic,
        level: r.level,
        minPlan: r.min_plan,
        startsAt: r.starts_at,
        durationMinutes: r.duration_minutes,
        capacity: r.capacity,
        isActive: r.is_active,
        seatsTaken: all.filter((s) => s.meeting_id === r.id && s.status !== "cancelled").length,
        joined: Boolean(mine && mine.status !== "cancelled"),
        completed: Boolean(mine?.completed_at),
      };
    });
  });

/** Inscreve o aluno no encontro, respeitando o limite de vagas. */
export const joinPracticeMeeting = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) => z.object({ meetingId: z.string().uuid() }).parse(input))
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context;

    const { data: meeting, error: meetingError } = await supabase
      .from("practice_meetings")
      .select("id, capacity, is_active")
      .eq("id", data.meetingId)
      .maybeSingle();
    if (meetingError) throw new Error(meetingError.message);
    if (!meeting || !meeting.is_active) throw new Error("Este encontro não está disponível.");

    const { count } = await supabase
      .from("practice_meeting_signups")
      .select("id", { count: "exact", head: true })
      .eq("meeting_id", data.meetingId)
      .neq("status", "cancelled");
    if ((count ?? 0) >= meeting.capacity) throw new Error("As vagas deste encontro acabaram.");

    const { error } = await supabase
      .from("practice_meeting_signups")
      .upsert(
        { meeting_id: data.meetingId, user_id: userId, status: "registered" },
        { onConflict: "meeting_id,user_id" },
      );
    if (error) throw new Error(error.message);
    return { ok: true as const };
  });

/** Cancela a inscrição do aluno. */
export const leavePracticeMeeting = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) => z.object({ meetingId: z.string().uuid() }).parse(input))
  .handler(async ({ data, context }) => {
    const { error } = await context.supabase
      .from("practice_meeting_signups")
      .update({ status: "cancelled" })
      .eq("meeting_id", data.meetingId)
      .eq("user_id", context.userId);
    if (error) throw new Error(error.message);
    return { ok: true as const };
  });

/** Roteiro da sala guiada, gerado a partir do tema do encontro. */
export const getMeetingRoom = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) => z.object({ meetingId: z.string().uuid() }).parse(input))
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context;
    const { data: meeting, error } = await supabase
      .from("practice_meetings")
      .select(SELECT)
      .eq("id", data.meetingId)
      .maybeSingle();
    if (error) throw new Error(error.message);
    if (!meeting) throw new Error("Encontro não encontrado.");

    const { data: signup } = await supabase
      .from("practice_meeting_signups")
      .select("status, completed_at")
      .eq("meeting_id", data.meetingId)
      .eq("user_id", userId)
      .maybeSingle();
    if (!signup || signup.status === "cancelled") {
      throw new Error("Inscreva-se no encontro para entrar na sala.");
    }
    if (!isRoomOpen(meeting.starts_at, meeting.duration_minutes)) {
      throw new Error("A sala abre 10 minutos antes do horário do encontro.");
    }

    const { buildMeetingScript } = await import("@/lib/practice-meetings.server");
    const script = await buildMeetingScript({
      title: meeting.title,
      topic: meeting.topic || meeting.title,
      level: meeting.level,
      durationMinutes: meeting.duration_minutes,
    });

    return {
      meeting: {
        id: meeting.id,
        title: meeting.title,
        titlePt: meeting.title_pt,
        topic: meeting.topic,
        level: meeting.level,
        durationMinutes: meeting.duration_minutes,
      },
      script,
      completed: Boolean(signup.completed_at),
    };
  });

/** Fecha a sessão do aluno no encontro e guarda o feedback final. */
export const finishMeetingRoom = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z
      .object({
        meetingId: z.string().uuid(),
        answers: z.array(z.object({ prompt: z.string(), answer: z.string() })).max(20),
      })
      .parse(input),
  )
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context;
    const { buildMeetingFeedback } = await import("@/lib/practice-meetings.server");
    const feedback = await buildMeetingFeedback(data.answers);

    const { error } = await supabase
      .from("practice_meeting_signups")
      .update({ status: "completed", completed_at: new Date().toISOString(), feedback })
      .eq("meeting_id", data.meetingId)
      .eq("user_id", userId);
    if (error) throw new Error(error.message);
    return feedback;
  });

const meetingInput = z.object({
  id: z.string().uuid().optional(),
  title: z.string().trim().min(2).max(120),
  title_pt: z.string().trim().max(120).nullable().optional(),
  description: z.string().trim().max(600).optional(),
  topic: z.string().trim().max(200).optional(),
  level: z.string().trim().max(10).optional(),
  min_plan: z.string().trim().max(20).optional(),
  starts_at: z.string().min(8),
  duration_minutes: z.number().int().min(10).max(180).optional(),
  capacity: z.number().int().min(1).max(500).optional(),
  is_active: z.boolean().optional(),
});

/** Cadastro dos encontros (somente administradora). */
export const upsertPracticeMeeting = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) => meetingInput.parse(input))
  .handler(async ({ data, context }) => {
    const { assertAdmin } = await import("@/lib/admin-guard.server");
    await assertAdmin(context as never);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const payload = Object.fromEntries(
      Object.entries({ ...data, starts_at: new Date(data.starts_at).toISOString() }).filter(
        ([, v]) => v !== undefined,
      ),
    ) as { title: string; starts_at: string };
    const { error } = await supabaseAdmin.from("practice_meetings").upsert(payload);

    if (error) throw new Error(error.message);
    return { ok: true as const };
  });

/** Lista completa para a administradora (inclui inativos e passados). */
export const listAllPracticeMeetings = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { assertAdmin } = await import("@/lib/admin-guard.server");
    await assertAdmin(context as never);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data, error } = await supabaseAdmin
      .from("practice_meetings")
      .select(SELECT)
      .order("starts_at", { ascending: false })
      .limit(100);
    if (error) throw new Error(error.message);
    return data ?? [];
  });

/** Remove um encontro (somente administradora). */
export const deletePracticeMeeting = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) => z.object({ id: z.string().uuid() }).parse(input))
  .handler(async ({ data, context }) => {
    const { assertAdmin } = await import("@/lib/admin-guard.server");
    await assertAdmin(context as never);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("practice_meetings").delete().eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true as const };
  });
