/**
 * Configuração interna da voz da GiseleAI (ElevenLabs).
 *
 * ESTE É O ÚNICO LUGAR onde o Voice ID deve ser alterado.
 * É um valor interno, invisível para o aluno — não tem relação nenhuma com a
 * permissão de microfone do navegador e nunca deve virar uma tela de
 * "autorizar voz" para o estudante.
 *
 * TODO: substituir pelo Voice ID definitivo quando for informado.
 */
export const GISELE_ELEVENLABS_VOICE_ID = "SNzYVXmQuMTz1nLfEfJE";

/** Voice IDs antigos salvos em contas existentes — remapeados para o atual. */
export const GISELE_LEGACY_VOICE_IDS = ["m3m72XeqSLA8AEuQecN0"];

/** Rótulo exibido quando a voz oficial da GiseleAI está selecionada. */
export const GISELE_VOICE_LABEL = "GiseleAI voice · AI-generated";

export function isGiseleVoiceId(voiceId: string | undefined | null) {
  const id = (voiceId ?? "").trim();
  return id === GISELE_ELEVENLABS_VOICE_ID || GISELE_LEGACY_VOICE_IDS.includes(id);
}

/** Normaliza qualquer ID legado para a voz oficial atual. */
export function resolveGiseleVoiceId(voiceId: string | undefined | null) {
  return isGiseleVoiceId(voiceId) ? GISELE_ELEVENLABS_VOICE_ID : (voiceId ?? "").trim();
}
