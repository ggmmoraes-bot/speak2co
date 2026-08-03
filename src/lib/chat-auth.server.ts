import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";

function isNewSupabaseApiKey(value: string) {
  return value.startsWith("sb_publishable_") || value.startsWith("sb_secret_");
}

function createSupabaseFetch(supabaseKey: string): typeof fetch {
  return (input, init) => {
    const headers = new Headers(
      typeof Request !== "undefined" && input instanceof Request
        ? input.headers
        : undefined,
    );
    if (init?.headers) {
      new Headers(init.headers).forEach((v, k) => headers.set(k, v));
    }
    if (
      isNewSupabaseApiKey(supabaseKey) &&
      headers.get("Authorization") === `Bearer ${supabaseKey}`
    ) {
      headers.delete("Authorization");
    }
    headers.set("apikey", supabaseKey);
    return fetch(input, { ...init, headers });
  };
}

type Verified =
  | { ok: true; supabase: ReturnType<typeof createClient<Database>>; userId: string }
  | { ok: false; status: number; message: string };

export async function verifyChatRequest(request: Request): Promise<Verified> {
  const SUPABASE_URL = process.env["SUPABASE_URL"];
  const SUPABASE_PUBLISHABLE_KEY = process.env["SUPABASE_PUBLISHABLE_KEY"];
  if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
    return { ok: false, status: 500, message: "Backend não configurado" };
  }

  const authHeader = request.headers.get("authorization");
  if (!authHeader?.startsWith("Bearer ")) {
    return { ok: false, status: 401, message: "Não autorizado" };
  }
  const token = authHeader.replace("Bearer ", "");
  if (!token || token.split(".").length !== 3) {
    return { ok: false, status: 401, message: "Não autorizado" };
  }

  const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
    global: {
      fetch: createSupabaseFetch(SUPABASE_PUBLISHABLE_KEY),
      headers: { Authorization: `Bearer ${token}` },
    },
    auth: {
      storage: undefined,
      persistSession: false,
      autoRefreshToken: false,
    },
  });

  const { data, error } = await supabase.auth.getClaims(token);
  if (error || !data?.claims?.sub) {
    return { ok: false, status: 401, message: "Não autorizado" };
  }

  return { ok: true, supabase, userId: data.claims.sub };
}
