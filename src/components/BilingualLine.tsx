import type { Bilingual } from "@/lib/speak2fluency-content";

/**
 * Enunciado bilíngue: inglês em destaque e tradução (quando existir) abaixo.
 */
export function BilingualLine({
  value,
  className = "",
  ptClassName = "",
}: {
  value: Bilingual;
  className?: string;
  ptClassName?: string;
}) {
  return (
    <span className="block">
      <span className={className}>{value.en}</span>
      {value.pt ? (
        <span className={`mt-0.5 block text-xs text-muted-foreground italic ${ptClassName}`}>
          {value.pt}
        </span>
      ) : null}
    </span>
  );
}
