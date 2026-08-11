import type { StudentSnapshot } from "@/lib/gisele-context.server";
import type { NextStep } from "@/lib/gisele.functions";
import { fluencyModuleRoute } from "@/lib/gisele-fluency-link";

/**
 * Próximos passos calculados a partir do progresso REAL do aluno.
 * Nunca inventa conteúdo: só aponta para produtos que existem na plataforma.
 */
export function buildNextSteps(s: StudentSnapshot): NextStep[] {
  const steps: NextStep[] = [];

  if (!s.placement) {
    steps.push({
      id: "placement",
      titleEn: "Take your placement test",
      titlePt: "Faça o teste de nivelamento para eu calibrar a mentoria",
      to: "/teste-de-nivel",
      focus: null,
    });
  }

  // Lacuna recorrente vira prioridade máxima de correção.
  const topIssue = [...s.recurringIssues].sort((a, b) => a.priority - b.priority)[0];
  if (topIssue) {
    steps.push({
      id: "issue",
      titleEn: `Fix a recurring issue: ${topIssue.category}`,
      titlePt: topIssue.observation,
      to: null,
      focus: null,
    });
  }

  // Speak2Fluency: módulo que ataca a lacuna identificada.
  if (s.fluency.nextModule) {
    steps.push({
      id: "fluency-module",
      titleEn: `Speak2Fluency: ${s.fluency.nextModule.titleEn} (${s.fluency.nextModule.minutes} min)`,
      titlePt: s.fluency.nextModule.objectiveEn,
      to: fluencyModuleRoute(s.fluency.nextModule.id),
      focus: null,
    });
  }

  if (s.courses.beginnerDone < 20) {
    steps.push({
      id: "beginner",
      titleEn: `Continue the Beginner course (${s.courses.beginnerDone}/20)`,
      titlePt: "Continue o curso Beginner de onde você parou",
      to: "/curso-beginner",
      focus: null,
    });
  } else if (s.courses.intermediateDone < 20) {
    steps.push({
      id: "intermediate",
      titleEn: `Continue the Intermediate course (${s.courses.intermediateDone}/20)`,
      titlePt: "Continue o curso Intermediate de onde você parou",
      to: "/curso-intermediate",
      focus: null,
    });
  }

  const today = new Date().toISOString().slice(0, 10);
  if (s.fluency.lastMissionDate !== today) {
    steps.push({
      id: "fluency",
      titleEn: "Do today's Speak2Fluency mission",
      titlePt: `Faça a missão diária do Speak2Fluency (${s.preferences.minutesPerDay} min disponíveis)`,
      to: "/speak2fluency",
      focus: null,
    });
  }

  if (s.hire.sessions === 0) {
    steps.push({
      id: "hire",
      titleEn: "Run your first interview simulation",
      titlePt: "Faça sua primeira simulação de entrevista no Speak2Hire",
      to: "/speak2hire",
      focus: "interview",
    });
  }

  if (s.travel.completedTracks === 0) {
    steps.push({
      id: "travel",
      titleEn: "Practice a real travel situation",
      titlePt: "Pratique uma situação real de viagem no Speak2Travel",
      to: "/speak2travel",
      focus: "travel",
    });
  }

  steps.push({
    id: "speaking",
    titleEn: `Speak with me for ${Math.max(5, Math.min(30, s.preferences.minutesPerDay))} minutes today`,
    titlePt: "Prática ativa de fala é o que gera fluência",
    to: null,
    focus: "conversation",
  });

  return steps.slice(0, 3);
}
