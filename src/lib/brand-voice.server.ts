import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";
import { assertFeatureAccess, checkFeatureAccess } from "@/lib/entitlements-access.server";
import { GISELE_ELEVENLABS_VOICE_ID, isGiseleVoiceId } from "@/lib/gisele-voice-config";

type Client = SupabaseClient<Database>;

/** Voz oficial da GiseleAI (gerada por IA). Configuração interna. */
export const BRAND_VOICE_ID = GISELE_ELEVENLABS_VOICE_ID;

export function isBrandVoiceId(voiceId: string | undefined | null) {
  return isGiseleVoiceId(voiceId);
}

/**
 * Escopo completo da GiseleAI (chat, Voice Room, memória, relatórios).
 * Exclusivo do Speak2Co All Access — checagem real no servidor.
 */
export async function assertGiseleScope(supabase: Client, userId: string) {
  return assertFeatureAccess(supabase, userId, "gisele_ai");
}

export type BrandVoiceCheck = {
  allowed: boolean;
  planAllowed: boolean;
  reason?: string;
};

/**
 * A voz da GiseleAI depende SOMENTE do acesso à GiseleAI (All Access).
 * Não existe etapa de ativação/autorização de voz para o aluno.
 */
export async function checkBrandVoiceAccess(
  supabase: Client,
  userId: string,
): Promise<BrandVoiceCheck> {
  const access = await checkFeatureAccess(supabase, userId, "gisele_ai");
  if (!access.allowed) {
    return {
      allowed: false,
      planAllowed: false,
      reason: "A GiseleAI faz parte do Speak2Co All Access.",
    };
  }
  return { allowed: true, planAllowed: true };
}
