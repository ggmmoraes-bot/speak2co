import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { z } from "zod";

export type ChatPart = { type: string; text?: string };

export type ChatMessageDTO = {
  id: string;
  role: "user" | "assistant" | "system";
  parts: ChatPart[];
};

export type ChatThread = {
  id: string;
  title: string;
  created_at: string;
  updated_at: string;
};

export const getThreads = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data, error } = await context.supabase
      .from("chat_threads")
      .select("id, title, created_at, updated_at")
      .eq("user_id", context.userId)
      .order("updated_at", { ascending: false });
    if (error) throw new Error(error.message);
    return (data ?? []) as ChatThread[];
  });

export const getThread = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z.object({ threadId: z.string() }).parse(input),
  )
  .handler(async ({ context, data }) => {
    const { data: thread, error } = await context.supabase
      .from("chat_threads")
      .select("id, title, created_at, updated_at")
      .eq("id", data.threadId)
      .eq("user_id", context.userId)
      .maybeSingle();
    if (error) throw new Error(error.message);
    return (thread ?? null) as ChatThread | null;
  });

export const getThreadMessages = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z.object({ threadId: z.string() }).parse(input),
  )
  .handler(async ({ context, data }) => {
    // Verify the thread belongs to the user before returning messages.
    const { data: thread } = await context.supabase
      .from("chat_threads")
      .select("id")
      .eq("id", data.threadId)
      .eq("user_id", context.userId)
      .maybeSingle();
    if (!thread) return [] as ChatMessageDTO[];

    const { data: rows, error } = await context.supabase
      .from("chat_messages")
      .select("id, role, parts")
      .eq("thread_id", data.threadId)
      .order("created_at", { ascending: true });
    if (error) throw new Error(error.message);

    return (rows ?? []).map((row) => ({
      id: String(row.id),
      role: row.role as ChatMessageDTO["role"],
      parts: Array.isArray(row.parts) ? (row.parts as ChatPart[]) : [{ type: "text", text: "" }],
    })) as ChatMessageDTO[];
  });

export const createThread = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z.object({ title: z.string().optional() }).parse(input),
  )
  .handler(async ({ context, data }) => {
    const { data: thread, error } = await context.supabase
      .from("chat_threads")
      .insert({
        user_id: context.userId,
        title: data.title?.trim() || "Nova conversa",
      })
      .select("id, title, created_at, updated_at")
      .single();
    if (error) throw new Error(error.message);
    return thread as ChatThread;
  });

export const renameThread = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z.object({ threadId: z.string(), title: z.string() }).parse(input),
  )
  .handler(async ({ context, data }) => {
    const { error } = await context.supabase
      .from("chat_threads")
      .update({ title: data.title.trim() })
      .eq("id", data.threadId)
      .eq("user_id", context.userId);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const deleteThread = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z.object({ threadId: z.string() }).parse(input),
  )
  .handler(async ({ context, data }) => {
    const { error } = await context.supabase
      .from("chat_threads")
      .delete()
      .eq("id", data.threadId)
      .eq("user_id", context.userId);
    if (error) throw new Error(error.message);
    return { ok: true };
  });
