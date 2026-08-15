import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";
import { assertFeatureAccess, checkFeatureAccess } from "@/lib/entitlements-access.server";

type Client = SupabaseClient<Database>;

/** Voz sintética autorizada da fundadora (gerada por IA). */
export const BRAND_VOICE_ID = "SNzYVXmQuMTz1nLfEfJE";

export function isBrandVoiceId(voiceId: string | undefined | null) {
  return (voiceId ?? "").trim() === BRAND_VOICE_ID;
}

/**
 * Escopo completo da Gisele AI (chat completo, Voice Room, memória, relatórios).
 * Exclusivo do plano Signature — checagem real no servidor.
 */
export async function assertGiseleScope(supabase: Client, userId: string) {
  return assertFeatureAccess(supabase, userId, "gisele_ai");
}

export type BrandVoiceCheck = {
  allowed: boolean;
  planAllowed: boolean;
  consentStatus: string;
  reason?: string;
};

/**
 * A voz autorizada da marca só pode ser sintetizada quando:
 * 1) o aluno tem o escopo completo da Gisele AI (Signature) e
 * 2) o consentimento/autorização está registrado em ai_voice_settings.consent_status.
 */
export async function checkBrandVoiceAccess(
  supabase: Client,
  userId: string,
): Promise<BrandVoiceCheck> {
  const [access, settings] = await Promise.all([
    checkFeatureAccess(supabase, userId, "gisele_ai"),
    supabase
      .from("ai_voice_settings")
      .select("consent_status")
      .eq("user_id", userId)
      .maybeSingle(),
  ]);

  const consentStatus = (settings.data?.consent_status as string | undefined) ?? "pending";
  if (!access.allowed) {
    return {
      allowed: false,
      planAllowed: false,
      consentStatus,
      reason: "A voz autorizada da Speak2Co faz parte do plano Signature.",
    };
  }
  if (consentStatus !== "granted") {
    return {
      allowed: false,
      planAllowed: true,
      consentStatus,
      reason:
        "Ative a voz autorizada (gerada por IA) em Configurações de voz para usar esta opção.",
    };
  }
  return { allowed: true, planAllowed: true, consentStatus };
}
