/**
 * Validação de administrador no SERVIDOR (fonte da verdade).
 *
 * O modo "Ver como" (pré-visualização de planos) existe apenas no cliente —
 * ele nunca é enviado ao servidor e nunca concede privilégios. Toda tela ou
 * função administrativa precisa passar por `assertAdmin`, que consulta a
 * role real do usuário autenticado no banco.
 */
type Client = {
  rpc: (fn: string, args: Record<string, unknown>) => Promise<{ data: unknown; error: unknown }>;
};

export async function isAdminUser(supabase: Client, userId: string): Promise<boolean> {
  const { data, error } = await supabase.rpc("has_role", {
    _user_id: userId,
    _role: "admin",
  });
  if (error) return false;
  return data === true;
}

/** Lança 403 quando o usuário autenticado não é administrador. */
export async function assertAdmin(context: { supabase: Client; userId: string }): Promise<void> {
  const ok = await isAdminUser(context.supabase, context.userId);
  if (!ok) {
    throw new Response("Acesso restrito ao administrador.", { status: 403 });
  }
}
