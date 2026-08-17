import { z } from "zod";

/**
 * Feedback estruturado da GiseleAI, exibido depois de qualquer prática
 * (conversa, simulação, desafio, escrita, listening).
 * Tom pedagógico e encorajador — nunca apenas uma nota.
 */
export const GiseleFeedbackSchema = z.object({
  whatYouDidWell: z.string(),
  letsImprove: z.string(),
  pronunciation: z.string(),
  fluency: z.string(),
  grammar: z.string(),
  vocabulary: z.string(),
  naturalness: z.string(),
  nextStep: z.string(),
  category: z.enum(["grammar", "vocabulary", "pronunciation", "fluency", "strategy"]),
  priority: z.number().int().min(1).max(3),
  recommendations: z
    .array(
      z.object({
        type: z.enum(["practice", "lesson", "review", "mission"]),
        content: z.string(),
        priority: z.number().int().min(1).max(3),
      }),
    )
    .max(3),
});

export type GiseleFeedback = z.infer<typeof GiseleFeedbackSchema>;

/** Instruções comuns de feedback usadas em todos os prompts da GiseleAI. */
export const FEEDBACK_PROMPT_RULES = `Gere o FEEDBACK estruturado da GiseleAI com estas seções, sempre em tom pedagógico e encorajador (nunca apenas nota):
- whatYouDidWell: o que o aluno fez bem, concreto.
- letsImprove: UMA prioridade principal.
- pronunciation / fluency / grammar / vocabulary: observação curta de cada dimensão (se não houver evidência, diga isso com honestidade).
- naturalness: se as frases soam naturais em inglês, com uma versão mais natural quando útil.
- nextStep: sugestão personalizada da próxima prática, sempre dentro da própria GiseleAI.
Não corrija tudo: priorize o que impacta a comunicação. Inglês em destaque, tradução curta em português só quando ajudar.
NUNCA cite ou recomende Speak2Travel, Speak2Hire, Speak2Fluency, Learning Tools, AI Teacher, cursos ou qualquer outra área da plataforma: tudo acontece dentro da GiseleAI.`;
