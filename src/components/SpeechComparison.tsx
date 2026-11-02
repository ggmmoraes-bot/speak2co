import { Volume2 } from "lucide-react";
import { diffSpeech, type DiffWord } from "@/lib/speech-diff";

const WORD_CLASS: Record<DiffWord["status"], string> = {
  match: "text-foreground",
  wrong: "text-amber-400",
  missing: "text-destructive underline decoration-dotted underline-offset-4",
  extra: "text-amber-400 line-through decoration-amber-400/60",
};

/** Mostra a frase sugerida pela IA e a transcrição da fala do aluno, palavra a palavra. */
export function SpeechComparison({
  target,
  transcript,
  onPlayModel,
}: {
  target: string;
  transcript: string;
  onPlayModel?: (() => void) | undefined;
}) {
  const diff = diffSpeech(target, transcript);

  return (
    <div className="space-y-2 rounded-xl border border-border bg-background/40 p-3">
      <div className="flex items-center justify-between gap-2">
        <p className="text-[11px] font-semibold tracking-wide text-muted-foreground uppercase">
          Comparação da fala
        </p>
        <span className="text-[11px] text-muted-foreground">
          {diff.matched}/{diff.total} palavras · {diff.wordAccuracy}%
        </span>
      </div>

      <div>
        <p className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
          Pronúncia sugerida pela IA
          {onPlayModel && (
            <button
              type="button"
              onClick={onPlayModel}
              className="text-gold hover:opacity-80"
              aria-label="Listen to the suggested pronunciation"
            >
              <Volume2 className="h-3.5 w-3.5" />
            </button>
          )}
        </p>
        <p className="mt-0.5 text-sm">
          {diff.model.map((w, i) => (
            <span key={`m-${i}`} className={`${WORD_CLASS[w.status]} mr-1`}>
              {w.word}
            </span>
          ))}
        </p>
      </div>

      <div>
        <p className="text-[11px] text-muted-foreground">Sua fala (transcrição)</p>
        <p className="mt-0.5 text-sm italic">
          {diff.student.length === 0 ? (
            <span className="text-muted-foreground not-italic">
              Não consegui entender nenhuma palavra — tente gravar de novo.
            </span>
          ) : (
            diff.student.map((w, i) => (
              <span key={`s-${i}`} className={`${WORD_CLASS[w.status]} mr-1`}>
                {w.word}
              </span>
            ))
          )}
        </p>
      </div>

      {(diff.missing.length > 0 || diff.extra.length > 0) && (
        <p className="text-[11px] text-muted-foreground">
          {diff.missing.length > 0 && <>Faltou dizer: {diff.missing.join(", ")}. </>}
          {diff.extra.length > 0 && <>Palavras a mais: {diff.extra.join(", ")}.</>}
        </p>
      )}
    </div>
  );
}
