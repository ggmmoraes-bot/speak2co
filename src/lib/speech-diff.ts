/** Comparação palavra a palavra entre a frase-modelo da IA e a fala transcrita do aluno. */
export type DiffWord = { word: string; status: "match" | "wrong" | "missing" | "extra" };

const normalize = (w: string) => w.toLowerCase().replace(/[^a-z0-9']/g, "");

function tokenize(text: string) {
  return text.trim().split(/\s+/).filter(Boolean);
}

/** Alinha as duas frases com LCS e marca acertos, trocas, faltas e palavras extras. */
export function diffSpeech(target: string, spoken: string) {
  const a = tokenize(target);
  const b = tokenize(spoken);
  const na = a.map(normalize);
  const nb = b.map(normalize);

  const lcs: number[][] = Array.from({ length: na.length + 1 }, () =>
    new Array<number>(nb.length + 1).fill(0),
  );
  for (let i = na.length - 1; i >= 0; i--) {
    for (let j = nb.length - 1; j >= 0; j--) {
      lcs[i]![j] = na[i] === nb[j] ? lcs[i + 1]![j + 1]! + 1 : Math.max(lcs[i + 1]![j]!, lcs[i]![j + 1]!);
    }
  }

  const model: DiffWord[] = [];
  const student: DiffWord[] = [];
  let i = 0;
  let j = 0;
  while (i < na.length && j < nb.length) {
    if (na[i] === nb[j]) {
      model.push({ word: a[i]!, status: "match" });
      student.push({ word: b[j]!, status: "match" });
      i++;
      j++;
    } else if (lcs[i + 1]![j]! >= lcs[i]![j + 1]!) {
      model.push({ word: a[i]!, status: "missing" });
      i++;
    } else {
      student.push({ word: b[j]!, status: "extra" });
      j++;
    }
  }
  while (i < na.length) model.push({ word: a[i++]!, status: "missing" });
  while (j < nb.length) student.push({ word: b[j++]!, status: "extra" });

  const matched = model.filter((w) => w.status === "match").length;
  return {
    model,
    student,
    matched,
    total: a.length,
    missing: model.filter((w) => w.status === "missing").map((w) => w.word),
    extra: student.filter((w) => w.status === "extra").map((w) => w.word),
    wordAccuracy: a.length ? Math.round((matched / a.length) * 100) : 0,
  };
}
