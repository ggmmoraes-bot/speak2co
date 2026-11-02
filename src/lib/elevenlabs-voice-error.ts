/** Preserve provider failure categories instead of treating every 401 as exhausted credits. */
export function classifyElevenLabsVoiceError(status: number, body: string) {
  let code = "";
  let providerStatus = "";
  try {
    const parsed = JSON.parse(body) as { detail?: { code?: string; status?: string } };
    code = parsed?.detail?.code ?? "";
    providerStatus = parsed?.detail?.status ?? "";
  } catch {
    // Non-JSON provider errors retain their HTTP status below.
  }

  if (code === "subscription_required" || providerStatus === "ivc_not_permitted") {
    return {
      status: 503,
      message: "A voz oficial está temporariamente indisponível: o plano da ElevenLabs não permite esta voz clonada. A equipe Speak2Co precisa ajustar o plano de voz.",
    };
  }
  if (code === "quota_exceeded" || status === 402) {
    return {
      status: 402,
      message: "Créditos de voz esgotados — o áudio volta assim que os créditos forem adicionados.",
    };
  }
  if (status === 401 || status === 403) {
    return { status: 503, message: "O serviço de voz está indisponível por um problema de autorização. A equipe Speak2Co precisa verificar a conexão com a ElevenLabs." };
  }
  return { status, message: "Não foi possível gerar o áudio." };
}