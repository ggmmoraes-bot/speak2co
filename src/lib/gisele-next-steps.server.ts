import type { StudentSnapshot } from "@/lib/gisele-context.server";
import type { NextStep } from "@/lib/gisele.functions";

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
      titlePt: "Faça a missão diária do Speak2Fluency (25 min)",
      to: "/speak2fluency",
      focus: null,
    });
  }

  const weakness = s.memory.find((m) => m.kind === "weakness");
  if (weakness) {
    steps.push({
      id: "weakness",
      titleEn: `Fix a recurring mistake: ${weakness.content}`,
      titlePt: "Vamos treinar um erro que se repete nas suas sessões",
      to: null,
      focus: "grammar",
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
    titleEn: "Speak with me for 10 minutes today",
    titlePt: "Fale comigo por 10 minutos hoje — prática ativa é o que gera fluência",
    to: null,
    focus: "conversation",
  });

  return steps.slice(0, 3);
}
