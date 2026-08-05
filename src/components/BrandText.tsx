/**
 * Renderiza títulos seguindo o padrão das logomarcas Speak2Co:
 * "Speak" em branco e "2Co / 2Hire / 2Travel / 2Fluency" em dourado.
 * "GiseleAI" segue a arte oficial: "Gisele" dourado e "AI" branco.
 */
export function BrandText({ text, className }: { text: string; className?: string }) {
  const parts = text.split(/(Speak2[A-Za-z]*|GiseleAI)/g).filter(Boolean);

  return (
    <span className={className}>
      {parts.map((part, i) => {
        if (/^Speak2[A-Za-z]*$/.test(part)) {
          return (
            <span key={i}>
              <span className="text-foreground">Speak</span>
              <span className="text-gold">{part.slice(5)}</span>
            </span>
          );
        }
        if (part === "GiseleAI") {
          return (
            <span key={i}>
              <span className="text-gold">Gisele</span>
              <span className="text-foreground">AI</span>
            </span>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </span>
  );
}
