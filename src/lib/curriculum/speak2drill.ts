import type { CourseUnit } from "./types";

/**
 * Speak2Drill — treinamento de fluência por substituição estruturada.
 *
 * Regra de ouro: NADA de conteúdo novo. Todas as frases-base e todas as
 * substituições (drills) são derivadas exclusivamente do conteúdo já estudado
 * na própria unidade — vocabulário, expressões, verbos, gramática e diálogo.
 *
 * Cada unidade gera exatamente 20 frases-base; cada frase-base tem 3 drills
 * com dificuldade crescente:
 *   1) substituição simples (uma palavra do vocabulário da unidade)
 *   2) substituição intermediária (troca de sujeito com concordância)
 *   3) mudança mais desafiadora (negativa, pergunta, resposta curta ou
 *      pergunta negativa) — sempre dentro do que foi ensinado.
 */

export type DrillLevel = 1 | 2 | 3;

export type Drill = {
  level: DrillLevel;
  /** Pista mostrada ao aluno (palavra, verbo, expressão ou forma). */
  cue: string;
  /** Frase completa esperada após a substituição. */
  answer: string;
};

export type DrillItem = {
  id: string;
  /** Frase-base completa (em inglês). */
  base: string;
  /** Tradução da frase de origem, quando disponível. */
  basePt: string;
  kind: "affirmative" | "negative" | "question" | "short answer" | "negative question";
  drills: Drill[];
};

export const SPEAK2DRILL_TOTAL = 20;

/* ------------------------------------------------------------------ */
/* Utilidades de frase                                                 */
/* ------------------------------------------------------------------ */

const AUX = new Set([
  "am",
  "is",
  "are",
  "was",
  "were",
  "have",
  "has",
  "had",
  "can",
  "could",
  "will",
  "would",
  "should",
  "must",
  "may",
  "might",
  "do",
  "does",
  "did",
]);

const PRONOUNS = ["I", "you", "he", "she", "we", "they"];

const clean = (s: string) => s.replace(/\s+/g, " ").trim();

const words = (s: string) => clean(s).split(" ");

const strip = (w: string) => w.replace(/[.,!?;:]+$/g, "");

const endMark = (s: string) => (/[.!?]$/.test(clean(s)) ? clean(s).slice(-1) : ".");

const capitalize = (s: string) => (s ? s[0]!.toUpperCase() + s.slice(1) : s);

const lowerFirst = (s: string) => {
  const w = words(s);
  const first = w[0] ?? "";
  if (first === "I") return s;
  if (/^[A-Z][a-z]+$/.test(first) && !PRONOUNS.includes(first.toLowerCase())) return s; // nome próprio
  return s;
};

function isQuestion(s: string) {
  return clean(s).endsWith("?");
}

function isNegative(s: string) {
  return /\b(not|n't|never|no)\b/i.test(s);
}

/** Índice da primeira palavra auxiliar da frase (ignorando pontuação). */
function auxIndex(s: string): number {
  const w = words(s);
  for (let i = 0; i < w.length; i += 1) {
    if (AUX.has(strip(w[i]!).toLowerCase())) return i;
  }
  return -1;
}

function classify(s: string): DrillItem["kind"] {
  const c = clean(s);
  if (/^(yes|no),/i.test(c)) return "short answer";
  if (isQuestion(c)) return isNegative(c) ? "negative question" : "question";
  return isNegative(c) ? "negative" : "affirmative";
}

/* ------------------------------------------------------------------ */
/* Transformações (só com auxiliares já estudados)                     */
/* ------------------------------------------------------------------ */

function toNegative(s: string): string | null {
  if (isNegative(s)) return null;
  const w = words(s);
  const idx = auxIndex(s);
  if (idx < 0 || idx > 3) return null;
  const mark = endMark(s);
  const body = w.map((x) => strip(x));
  body.splice(idx + 1, 0, "not");
  return capitalize(body.join(" ")) + mark;
}

function toQuestion(s: string): string | null {
  if (isQuestion(s)) return null;
  const idx = auxIndex(s);
  if (idx <= 0 || idx > 3) return null;
  const body = words(s).map((x) => strip(x));
  const aux = body.splice(idx, 1)[0]!;
  const subject = body.slice(0, idx).join(" ");
  const rest = body.slice(idx).join(" ");
  const subj = subject === "I" ? "I" : lowerFirst(subject);
  return `${capitalize(aux)} ${subj}${rest ? ` ${rest}` : ""}?`;
}

function toNegativeQuestion(s: string): string | null {
  const q = isQuestion(s) ? clean(s) : toQuestion(s);
  if (!q || isNegative(q)) return null;
  const body = words(q).map((x) => strip(x));
  const aux = body[0]!;
  const rest = body.slice(1);
  const contracted = aux.toLowerCase() === "am" ? "Aren't" : `${capitalize(aux)}n't`;
  return `${contracted} ${rest.join(" ")}?`;
}

function toShortAnswer(s: string): string | null {
  const idx = auxIndex(s);
  if (idx < 0) return null;
  const body = words(s).map((x) => strip(x));
  const aux = strip(body[idx]!).toLowerCase();
  let subject = isQuestion(s) ? (body[idx + 1] ?? "") : (body[0] ?? "");
  if (!subject) return null;
  if (subject === "I") subject = "I";
  else subject = subject.toLowerCase();
  if (!PRONOUNS.includes(subject) && subject !== "it") subject = "it";
  if (isNegative(s)) {
    const neg = aux === "am" ? "am not" : `${aux}n't`;
    return `No, ${subject} ${neg}.`;
  }
  return `Yes, ${subject} ${aux}.`;
}

const BE: Record<string, string> = {
  I: "am",
  you: "are",
  he: "is",
  she: "is",
  it: "is",
  we: "are",
  they: "are",
};
const DO: Record<string, string> = {
  I: "do",
  you: "do",
  he: "does",
  she: "does",
  it: "does",
  we: "do",
  they: "do",
};
const HAVE: Record<string, string> = {
  I: "have",
  you: "have",
  he: "has",
  she: "has",
  it: "has",
  we: "have",
  they: "have",
};

function agree(aux: string, subject: string): string {
  const a = aux.toLowerCase();
  const s = subject === "I" ? "I" : subject.toLowerCase();
  if (["am", "is", "are"].includes(a)) return BE[s] ?? a;
  if (["do", "does"].includes(a)) return DO[s] ?? a;
  if (["have", "has"].includes(a)) return HAVE[s] ?? a;
  if (a === "was" || a === "were") return s === "you" || s === "we" || s === "they" ? "were" : "was";
  return a; // modais não mudam
}

/** Troca o sujeito da frase, ajustando o auxiliar (concordância). */
function swapSubject(s: string, newSubject: string): string | null {
  const body = words(s).map((x) => strip(x));
  const mark = endMark(s);
  const idx = auxIndex(s);
  if (idx < 0) return null;
  if (isQuestion(s) && idx === 0) {
    const subjPos = 1;
    if (!body[subjPos]) return null;
    body[0] = agree(body[0]!, newSubject);
    body[subjPos] = newSubject;
    return `${capitalize(body[0]!)} ${body.slice(1).join(" ")}${mark}`;
  }
  if (idx === 0) return null;
  const subject = body.slice(0, idx).join(" ");
  if (!subject) return null;
  body.splice(0, idx, newSubject);
  const newIdx = 1;
  body[newIdx] = agree(body[newIdx]!, newSubject);
  return capitalize(body.join(" ")) + mark;
}

/** Substitui um termo do vocabulário da unidade por outro termo da unidade. */
function swapTerm(s: string, from: string, to: string): string | null {
  const re = new RegExp(`\\b${from.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i");
  if (!re.test(s)) return null;
  return clean(s.replace(re, to));
}

/* ------------------------------------------------------------------ */
/* Geração                                                             */
/* ------------------------------------------------------------------ */

type Candidate = { en: string; pt: string };

/** Todo o material em inglês já estudado na unidade (as duas partes). */
function unitSentences(unit: CourseUnit): Candidate[] {
  const d = unit.discover;
  const c = unit.communicate;
  const list: Candidate[] = [
    ...d.context.dialogue.map((l) => ({ en: l.en, pt: l.pt })),
    ...d.grammar.flatMap((g) => g.examples.map((e) => ({ en: e.en, pt: e.pt }))),
    ...d.vocabulary.map((v) => ({ en: v.example, pt: v.examplePt })),
    ...d.expressions,
    ...d.warmUp.phrases,
    ...d.input.lines,
    ...c.activities.flatMap((a) => a.phrases),
    ...c.challenge.phrases,
    ...c.review,
  ];
  const seen = new Set<string>();
  const out: Candidate[] = [];
  for (const item of list) {
    const en = clean(item.en ?? "");
    const size = words(en).length;
    if (!en || size < 3 || size > 16) continue;
    const key = en.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push({ en, pt: clean(item.pt ?? "") });
  }
  return out;
}

const KIND_CYCLE: DrillItem["kind"][] = [
  "affirmative",
  "affirmative",
  "negative",
  "question",
  "short answer",
  "affirmative",
  "negative",
  "question",
  "negative question",
  "short answer",
];

function shapeTo(sentence: string, kind: DrillItem["kind"]): string {
  switch (kind) {
    case "negative":
      return toNegative(sentence) ?? sentence;
    case "question":
      return toQuestion(sentence) ?? sentence;
    case "short answer":
      return toShortAnswer(sentence) ?? sentence;
    case "negative question":
      return toNegativeQuestion(sentence) ?? sentence;
    default:
      return clean(sentence);
  }
}

function fallbackDrill(level: DrillLevel, base: string, cue: string): Drill {
  return { level, cue, answer: clean(base) };
}

/** Gera os 20 exercícios do Speak2Drill de uma unidade. */
export function buildUnitDrills(unit: CourseUnit): DrillItem[] {
  const pool = unitSentences(unit);
  const terms = unit.discover.vocabulary.map((v) => v.term);
  const items: DrillItem[] = [];
  if (pool.length === 0) return items;

  for (let i = 0; i < SPEAK2DRILL_TOTAL; i += 1) {
    const source = pool[i % pool.length]!;
    const targetKind = KIND_CYCLE[i % KIND_CYCLE.length]!;
    const base = shapeTo(source.en, targetKind);
    const kind = classify(base);
    const drills: Drill[] = [];

    // Drill 1 — substituição simples: troca de um termo do vocabulário.
    let d1: Drill | null = null;
    for (let t = 0; t < terms.length && !d1; t += 1) {
      const from = terms[(i + t) % terms.length]!;
      const to = terms[(i + t + 1) % terms.length]!;
      if (from.toLowerCase() === to.toLowerCase()) continue;
      const answer = swapTerm(base, from, to);
      if (answer) d1 = { level: 1, cue: to, answer };
    }
    if (!d1) {
      const cue = terms[i % Math.max(1, terms.length)] ?? "again";
      const alt = pool[(i + 1) % pool.length]!;
      d1 = fallbackDrill(1, alt.en, cue);
    }
    drills.push(d1);

    // Drill 2 — substituição intermediária: troca de sujeito com concordância.
    const subject = PRONOUNS[(i + 2) % PRONOUNS.length]!;
    const swapped = swapSubject(drills[0]!.answer, subject) ?? swapSubject(base, subject);
    drills.push(
      swapped
        ? { level: 2, cue: subject, answer: swapped }
        : fallbackDrill(2, drills[0]!.answer, subject),
    );

    // Drill 3 — mudança mais desafiadora: muda o tipo de frase.
    const previous = drills[1]!.answer;
    const nextKind: DrillItem["kind"] =
      kind === "affirmative"
        ? "negative"
        : kind === "negative"
          ? "question"
          : kind === "question"
            ? "short answer"
            : kind === "short answer"
              ? "negative"
              : "question";
    const cue3 =
      nextKind === "negative"
        ? "negative form"
        : nextKind === "question"
          ? "question form"
          : nextKind === "short answer"
            ? "short answer"
            : "negative question";
    const answer3 = shapeTo(previous, nextKind);
    drills.push({
      level: 3,
      cue: cue3,
      answer: answer3 === clean(previous) ? (toNegativeQuestion(previous) ?? answer3) : answer3,
    });

    items.push({
      id: `${unit.code}-DRILL-${String(i + 1).padStart(2, "0")}`,
      base,
      basePt: base === clean(source.en) ? source.pt : "",
      kind,
      drills,
    });
  }
  return items;
}
