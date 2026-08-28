import type { GrammarPoint } from "@/lib/curriculum/types";

/** Gramática da unidade (conteúdo oficial) — exemplos antes da regra. */
export function GrammarCard({ points }: { points: GrammarPoint[] }) {
  if (points.length === 0) return null;
  return (
    <section className="rounded-2xl border border-border/60 bg-background/40 p-5">
      <h3 className="text-sm font-semibold text-foreground">Grammar in use</h3>
      <p className="mb-3 text-xs italic text-muted-foreground">Gramática desta unidade</p>
      <div className="space-y-3">
        {points.map((g) => (
          <div key={g.title.en} className="rounded-xl border border-border/50 p-3">
            <p className="text-sm font-semibold text-foreground">{g.title.en}</p>
            <p className="text-xs italic text-muted-foreground">{g.title.pt}</p>
            <ul className="mt-2 list-inside list-disc text-sm text-foreground">
              {g.examples.slice(0, 3).map((e) => (
                <li key={e.en}>{e.en}</li>
              ))}
            </ul>
            <p className="mt-2 text-sm text-gold">{g.rule.en}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
