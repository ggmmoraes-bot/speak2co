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

export type DrillKind =
  | "affirmative"
  | "negative"
  | "question"
  | "short answer"
  | "negative question";

export type DrillItem = {
  id: string;
  /** Frase-base completa (em inglês). */
  base: string;
  /** Tradução da frase de origem, quando disponível. */
  basePt: string;
  kind: DrillKind;
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

const WH = new Set(["what", "where", "when", "who", "why", "how", "which", "whose"]);

const clean = (s: string) => s.replace(/\s+/g, " ").trim();
const capitalize = (s: string) => (s ? s[0]!.toUpperCase() + s.slice(1) : s);

/** Separa a frase em palavras + pontuação final. */
function parse(s: string): { body: string[]; mark: string } {
  const c = clean(s);
  const m = /[.!?]$/.exec(c);
  const mark = m ? m[0] : ".";
  const core = m ? c.slice(0, -1) : c;
  return { body: clean(core).split(" "), mark };
}

const join = (body: string[], mark: string) => `${capitalize(body.join(" ").trim())}${mark}`;

const isQuestion = (s: string) => clean(s).endsWith("?");
const isNegative = (s: string) => /(\bnot\b|n't|\bnever\b)/i.test(s);

/** Índice da primeira palavra auxiliar da frase. */
function auxIndex(body: string[]): number {
  for (let i = 0; i < body.length; i += 1) {
    const w = body[i]!.toLowerCase().replace(/n't$/, "");
    // "have to / has to" é semi-modal: não serve para inversão simples.
    if (["have", "has", "had"].includes(w) && (body[i + 1] ?? "").toLowerCase() === "to") return -1;
    if (AUX.has(w)) return i;
  }
  return -1;
}

export function classify(s: string): DrillKind {
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
  if (classify(s) === "short answer") {
    const { body } = parse(s);
    const idx = auxIndex(body);
    if (idx < 0) return null;
    const subject = subjectPronoun(body[1]);
    const agreed = agree(body[idx]!, subject);
    return `No, ${subject} ${agreed === "am" ? "am not" : `${agreed}n't`}.`;
  }
  const { body, mark } = parse(s);
  const idx = auxIndex(body);
  if (idx < 0 || idx > 2) return null;
  const out = [...body];
  out.splice(idx + 1, 0, "not");
  return join(out, mark);
}

const COMMON_FIRST = new Set([
  "i","you","he","she","it","we","they","my","your","his","her","our","their","the","a","an",
  "this","that","these","those","there","people","students","everyone",
]);

/** Deixa a primeira palavra em minúscula quando não for nome próprio. */
function uncapFirst(word: string): string {
  if (word === "I") return word;
  if (/ing$/i.test(word)) return word.toLowerCase();
  return COMMON_FIRST.has(word.toLowerCase()) ? word.toLowerCase() : word;
}

function toQuestion(s: string): string | null {
  if (isQuestion(s)) return null;
  const { body } = parse(s);
  const idx = auxIndex(body);
  if (idx <= 0 || idx > 2) return null;
  const out = [...body];
  let aux = out.splice(idx, 1)[0]!;
  if ((out[idx] ?? "").toLowerCase() === "not") {
    out.splice(idx, 1);
    aux = aux.toLowerCase() === "am" ? "aren't" : `${aux.toLowerCase()}n't`;
  }
  out[0] = uncapFirst(out[0] ?? "");
  return `${capitalize(aux)} ${out.join(" ")}?`;
}

function toNegativeQuestion(s: string): string | null {
  const q = isQuestion(s) ? clean(s) : toQuestion(s);
  if (!q || isNegative(q)) return null;
  const { body } = parse(q);
  const aux = body[0]!;
  const contracted = aux.toLowerCase() === "am" ? "Aren't" : `${capitalize(aux)}n't`;
  return `${contracted} ${body.slice(1).join(" ")}?`;
}

function subjectPronoun(word: string | undefined): string {
  if (!word) return "it";
  if (word.toLowerCase() === "there") return "there";
  const w = word.replace(/[^A-Za-z']/g, "");
  if (w === "I") return "I";
  const lower = w.toLowerCase();
  if (PRONOUNS.includes(lower) || lower === "it") return lower;
  return "it";
}

function toShortAnswer(s: string): string | null {
  const { body } = parse(s);
  const idx = auxIndex(body);
  if (idx < 0) return null;
  const aux = body[idx]!.toLowerCase();
  const subject = subjectPronoun(isQuestion(s) ? body[idx + 1] : body[0]);
  const agreed = agree(aux, subject);
  if (isNegative(s)) {
    const neg = agreed === "am" ? "am not" : `${agreed}n't`;
    return `No, ${subject} ${neg}.`;
  }
  return `Yes, ${subject} ${agreed}.`;
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

function agree(auxRaw: string, subject: string): string {
  const a = auxRaw.toLowerCase().replace(/n't$/, "");
  const s = subject === "I" ? "I" : subject.toLowerCase();
  if (s === "there") return a;
  if (["am", "is", "are"].includes(a)) return BE[s] ?? a;
  if (["do", "does"].includes(a)) return DO[s] ?? a;
  if (["have", "has"].includes(a)) return HAVE[s] ?? a;
  if (a === "was" || a === "were") return s === "you" || s === "we" || s === "they" ? "were" : "was";
  return a; // modais não mudam
}

const DETERMINERS = new Set([
  "my","your","his","her","its","our","their","the","a","an","this","that","these","those",
]);

const SINGULAR_ONLY = ["I", "you", "he", "she"];
const PLURAL_ONLY = ["you", "we", "they"];

/** Sujeitos compatíveis com o complemento (singular "a/an" x plural). */
export function subjectOptions(sentence: string): string[] {
  if (/\b(an?|my|his|her)\s+\w+/i.test(sentence) && !/\b(are|were|have)\b/i.test(sentence))
    return SINGULAR_ONLY;
  if (/\b(are|were)\b/i.test(sentence) && /\b\w+s\b/.test(sentence)) return PLURAL_ONLY;
  return PRONOUNS;
}

/** Troca o sujeito da frase, ajustando o auxiliar (concordância). */
function swapSubject(s: string, newSubject: string): string | null {
  const { body, mark } = parse(s);
  const idx = auxIndex(body);
  if (idx < 0) return null;
  if (WH.has((body[0] ?? "").toLowerCase())) return null;
  // Estruturas existenciais ("There is / There are") não trocam de sujeito.
  if ((body[0] ?? "").toLowerCase() === "there" || (body[1] ?? "").toLowerCase() === "there")
    return null;
  const out = [...body];
  if (classify(s) === "short answer") {
    const aux = out[idx]!.toLowerCase();
    const negative = isNegative(s);
    const agreed = agree(aux.replace(/n't$/, ""), newSubject);
    if (subjectPronoun(out[1]) === newSubject) return null;
    return negative
      ? `No, ${newSubject} ${agreed === "am" ? "am not" : `${agreed}n't`}.`
      : `Yes, ${newSubject} ${agreed}.`;
  }
  if (isQuestion(s) && idx === 0) {
    if (!out[1]) return null;
    if (subjectPronoun(out[1]) === newSubject) return null;
    const neg = /n't$/i.test(out[0]!);
    if (neg && newSubject === "I") return null;
    // Sujeito: pronome (1 palavra) ou "determinante + substantivo" em frase curta.
    const first = out[1]!.toLowerCase();
    const isPronoun = PRONOUNS.includes(first) || first === "it";
    let span = 1;
    if (!isPronoun) {
      if (DETERMINERS.has(first) && out.length <= 4) span = 2;
      else if (out.length <= 3) span = 1;
      else return null;
    }
    const agreed = agree(out[0]!.replace(/n't$/i, ""), newSubject);
    out[0] = neg ? (agreed === "am" ? "aren't" : `${agreed}n't`) : agreed;
    out.splice(1, span, newSubject);
    return `${capitalize(out[0]!)} ${out.slice(1).join(" ")}${mark}`;
  }
  if (idx === 0) return null;
  if (subjectPronoun(out[0]) === newSubject && idx === 1) return null;
  const rest = out.slice(idx);
  rest[0] = agree(rest[0]!, newSubject);
  return join([newSubject, ...rest], mark);
}

/** Substitui um termo do vocabulário da unidade por outro termo da unidade. */
function swapTerm(s: string, from: string, to: string): string | null {
  const re = new RegExp(`\\b${from.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i");
  if (!re.test(s)) return null;
  return capitalize(clean(s.replace(re, to)));
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
  const simple: Candidate[] = [];
  const other: Candidate[] = [];
  for (const item of list) {
    const en = clean(item.en ?? "");
    if (!en) continue;
    const key = en.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    const size = en.split(" ").length;
    if (size < 3 || size > 12) continue;
    const pt = clean(item.pt ?? "");
    // Uma oração só: sem pontuação interna e com auxiliar transformável.
    const oneClause = !/[.,;:!?]/.test(en.slice(0, -1)) && !/\b(and|but|because)\b/i.test(en);
    const { body } = parse(en);
    const wh = WH.has((body[0] ?? "").toLowerCase());
    const idxAux = auxIndex(body);
    if (oneClause && !wh && idxAux >= 0 && idxAux <= 2) simple.push({ en, pt });
    else other.push({ en, pt });
  }
  return simple.length > 0 ? simple : other;
}

const KIND_CYCLE: DrillKind[] = [
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

function shapeTo(sentence: string, kind: DrillKind): string | null {
  const current = classify(sentence);
  if (current === kind) return clean(sentence);
  switch (kind) {
    case "negative":
      return toNegative(sentence);
    case "question":
      return toQuestion(sentence);
    case "short answer":
      return toShortAnswer(sentence);
    case "negative question":
      return toNegativeQuestion(sentence);
    default:
      return current === "affirmative" ? clean(sentence) : null;
  }
}

/** Gera os 20 exercícios do Speak2Drill de uma unidade. */
export function buildUnitDrills(unit: CourseUnit): DrillItem[] {
  const pool = unitSentences(unit);
  const terms = unit.discover.vocabulary.map((v) => v.term).filter(Boolean);
  const items: DrillItem[] = [];
  if (pool.length === 0) return items;

  for (let i = 0; i < SPEAK2DRILL_TOTAL; i += 1) {
    const targetKind = KIND_CYCLE[i % KIND_CYCLE.length]!;
    // Escolhe a frase de origem que aceita o tipo pedido.
    let source = pool[i % pool.length]!;
    let base = shapeTo(source.en, targetKind);
    for (let k = 1; k < pool.length && !base; k += 1) {
      source = pool[(i + k) % pool.length]!;
      base = shapeTo(source.en, targetKind);
    }
    if (!base) {
      source = pool[i % pool.length]!;
      base = clean(source.en);
    }
    const kind = classify(base);
    const drills: Drill[] = [];

    // Drill 1 — substituição simples: troca de sujeito (concordância).
    const options = subjectOptions(base);
    let d1: Drill | null = null;
    for (let k = 0; k < options.length && !d1; k += 1) {
      const subject = options[(i + k) % options.length]!;
      const answer = swapSubject(base, subject);
      if (answer) d1 = { level: 1, cue: subject, answer };
    }
    if (!d1) {
      const from = terms.find((t) => swapTerm(base, t, t)) ?? "";
      const to = terms[(i + 1) % Math.max(1, terms.length)] ?? "";
      const answer = from && to ? swapTerm(base, from, to) : null;
      d1 = answer ? { level: 1, cue: to, answer } : { level: 1, cue: "say it again", answer: base };
    }
    drills.push(d1);

    // Drill 2 — substituição intermediária: troca de palavra do vocabulário.
    let d2: Drill | null = null;
    for (let t = 0; t < terms.length && !d2; t += 1) {
      const from = terms[t]!;
      const to = terms[(t + 1 + i) % terms.length]!;
      if (from.toLowerCase() === to.toLowerCase()) continue;
      const answer = swapTerm(d1.answer, from, to);
      if (answer) d2 = { level: 2, cue: to, answer };
    }
    if (!d2) {
      const opts2 = subjectOptions(d1.answer).filter((p) => p !== d1!.cue);
      for (let k = 0; k < opts2.length && !d2; k += 1) {
        const subject = opts2[(i + k) % opts2.length]!;
        const answer = swapSubject(d1.answer, subject);
        if (answer) d2 = { level: 2, cue: subject, answer };
      }
    }
    drills.push(d2 ?? { level: 2, cue: "say it again", answer: d1.answer });


    // Drill 3 — mudança mais desafiadora: muda o tipo de frase.
    const previous = drills[1]!.answer;
    const order: DrillKind[] =
      kind === "affirmative"
        ? ["negative", "question", "negative question"]
        : kind === "negative"
          ? ["question", "short answer", "affirmative"]
          : kind === "question"
            ? ["short answer", "negative question", "negative"]
            : kind === "short answer"
              ? ["negative", "question", "affirmative"]
              : ["short answer", "question", "negative"];
    let d3: Drill | null = null;
    for (const nextKind of order) {
      const answer = shapeTo(previous, nextKind);
      if (answer && answer !== clean(previous)) {
        d3 = { level: 3, cue: `${nextKind} form`, answer };
        break;
      }
    }
    drills.push(d3 ?? { level: 3, cue: "say it again", answer: previous });

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
