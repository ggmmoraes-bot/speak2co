import { Bot } from "lucide-react";

/**
 * Texto fixo de transparência: a voz é gerada por IA e o aluno nunca está
 * falando com uma pessoa humana em tempo real.
 */
export const AI_VOICE_DISCLOSURE_EN =
  "AI-generated voice. You are talking to Gisele AI, a synthetic voice licensed by Speak2Co — not to a human being in real time.";

export const AI_VOICE_DISCLOSURE_PT =
  "Voz gerada por IA. Você conversa com a Gisele AI, uma voz sintética autorizada pela Speak2Co — nunca com uma pessoa humana em tempo real.";

export function AiVoiceDisclosure({ className = "" }: { className?: string }) {
  return (
    <div
      role="note"
      className={`flex items-start gap-2 rounded-xl border border-gold/30 bg-secondary/40 px-4 py-3 ${className}`}
    >
      <Bot className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
      <div className="space-y-0.5">
        <p className="text-xs font-medium text-foreground">{AI_VOICE_DISCLOSURE_EN}</p>
        <p className="text-[11px] italic text-muted-foreground">{AI_VOICE_DISCLOSURE_PT}</p>
      </div>
    </div>
  );
}
