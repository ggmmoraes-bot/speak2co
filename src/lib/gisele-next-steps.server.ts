import type { StudentSnapshot } from "@/lib/gisele-context.server";
import type { NextStep } from "@/lib/gisele.functions";

/**
 * Próximos passos calculados a partir do progresso REAL do aluno.
 * REGRA: a GiseleAI é autossuficiente — todo passo acontece dentro dela mesma,
 * nunca aponta para outros produtos, Learning Tools ou AI Teacher.
 */
export function buildNextSteps(s: StudentSnapshot): NextStep[] {
  const steps: NextStep[] = [];

  // Lacuna recorrente vira prioridade máxima de correção.
  const topIssue = [...s.recurringIssues].sort((a, b) => a.priority - b.priority)[0];
  if (topIssue) {
    steps.push({
      id: "issue",
      titleEn: `Fix a recurring issue: ${topIssue.category}`,
      titlePt: topIssue.observation,
      to: null,
      focus: "grammar",
    });
  }

  if (!s.placement) {
    steps.push({
      id: "diagnosis",
      titleEn: "Let me diagnose your level in a short conversation",
      titlePt: "Vamos conversar um pouco para eu calibrar a sua mentoria",
      to: null,
      focus: "conversation",
    });
  }

  steps.push({
    id: "pronunciation",
    titleEn: "Polish your pronunciation with me",
    titlePt: "Treine pronúncia comigo, com correção em tempo real",
    to: null,
    focus: "pronunciation",
  });

  steps.push({
    id: "speaking",
    titleEn: `Speak with me for ${Math.max(5, Math.min(30, s.preferences.minutesPerDay))} minutes today`,
    titlePt: "Prática ativa de fala é o que gera fluência",
    to: null,
    focus: "conversation",
  });

  return steps.slice(0, 3);
}
