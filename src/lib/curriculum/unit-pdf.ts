import type { BeginnerLesson } from "@/lib/beginner-course";
import type { CourseUnit } from "./types";

/**
 * Converte uma unidade do currículo oficial (Discover + Communicate) para o
 * formato de lição usado pelo gerador de PDF dos cursos.
 */
export function unitToPdfLesson(unit: CourseUnit): BeginnerLesson {
  const d = unit.discover;
  const c = unit.communicate;
  return {
    id: unit.code,
    number: unit.number,
    title: unit.title,
    titlePt: unit.titlePt,
    goal: `${unit.objective.en} — ${unit.objective.pt}`,
    warmUp: [d.warmUp.prompt.en, ...d.warmUp.phrases.map((p) => `${p.en} (${p.pt})`)],
    vocabulary: d.vocabulary.map((v) => ({
      en: v.term,
      pt: v.pt,
      ipa: v.ipa,
      example: v.example,
      examplePt: v.examplePt,
    })),
    verbs: [],
    grammar: d.grammar.map((g) => ({
      title: `${g.title.en} — ${g.title.pt}`,
      examples: g.examples.map((e) => `${e.en} (${e.pt})`),
      when: g.rule.en,
      structure: g.rule.pt,
      mistakes: g.mistakes.map((m) => `${m.en} — ${m.pt}`),
    })),
    expressions: d.expressions.map((e) => ({ situation: unit.title, en: e.en, pt: e.pt })),
    dialogue: d.context.dialogue,
    pronunciation: [
      {
        sound: "AI pronunciation check",
        tip: "Grave cada frase e receba feedback de pronúncia, ritmo e entonação da IA.",
        words: d.vocabulary.slice(0, 6).map((v) => v.term),
      },
    ],
    written: [
      ...d.controlledPractice.map((q) => ({
        type: "complete" as const,
        prompt: `${q.prompt.en} (${q.options.join(" / ")})`,
        answer: q.answer,
      })),
      ...d.quickCheck.map((q) => ({
        type: "fill" as const,
        prompt: `${q.prompt.en} (${q.options.join(" / ")})`,
        answer: q.answer,
      })),
    ],
    speaking: [
      ...c.activities.flatMap((a) =>
        a.phrases.map((p) => ({ type: "read" as const, prompt: a.title.en, phrase: p.en })),
      ),
      ...c.challenge.phrases.map((p) => ({
        type: "roleplay" as const,
        prompt: c.challenge.title.en,
        phrase: p.en,
      })),
    ],
    quiz: [...d.input.questions, ...c.challenge.check].map((q) => ({
      question: q.prompt.en,
      options: q.options,
      answer: q.answer,
    })),
    review: {
      summary: `${c.lessonReview.summary.en} — ${c.lessonReview.summary.pt}`,
      grammar: d.grammar.map((g) => g.rule.en),
      vocabulary: d.vocabulary.map((v) => `${v.term} — ${v.pt}`),
      mistakes: d.grammar.flatMap((g) => g.mistakes.map((m) => m.en)),
    },
  };
}
