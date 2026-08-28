import { Play } from "lucide-react";
import type { VocabEntry } from "@/lib/curriculum/types";

/** Vocabulário da unidade (conteúdo oficial) apresentado dentro da aula ao vivo. */
export function VocabularyCard({
  items,
  onListen,
}: {
  items: VocabEntry[];
  onListen: (text: string) => void;
}) {
  if (items.length === 0) return null;
  return (
    <section className="rounded-2xl border border-border/60 bg-background/40 p-5">
      <h3 className="text-sm font-semibold text-foreground">Vocabulary</h3>
      <p className="mb-3 text-xs italic text-muted-foreground">Vocabulário desta unidade</p>
      <ul className="space-y-2">
        {items.map((v) => (
          <li key={v.term} className="rounded-xl border border-border/50 p-3">
            <div className="flex items-center justify-between gap-2">
              <p className="text-sm font-semibold text-foreground">
                {v.term} <span className="text-xs font-normal text-gold">{v.ipa}</span>
              </p>
              <button type="button" onClick={() => onListen(v.term)} aria-label={`Listen: ${v.term}`}>
                <Play className="h-3.5 w-3.5 text-gold" />
              </button>
            </div>
            <p className="text-xs italic text-muted-foreground">{v.pt}</p>
            <p className="mt-1 text-sm text-foreground">{v.example}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
