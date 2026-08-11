/**
 * Títulos no padrão da logomarca Speak2Co: alternância de branco e dourado
 * palavra a palavra (primeira em branco, seguinte em dourado, e assim por diante).
 * Títulos de uma única palavra ficam em dourado, como acento da marca.
 */
export function AltHeading({ text, className }: { text: string; className?: string }) {
  const words = text.split(" ").filter(Boolean);

  if (words.length <= 1) {
    return <span className={className ? `${className} text-gold` : "text-gold"}>{text}</span>;
  }

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className={i % 2 === 0 ? "text-foreground" : "text-gold"}>
          {word}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}
