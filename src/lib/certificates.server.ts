export type Certificate = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  unlocked: boolean;
  progress: number;
  goalLabel: string;
  detail: string | null;
  issuedAt: string | null;
  code: string;
};

type Input = {
  userId: string;
  placements: { level: string | null; score: number | null; completed_at: string | null }[];
  interviews: { score: number | null; completed_at: string | null }[];
  exercises: { score: number | null; updated_at: string | null }[];
  chatMessages: number;
  beginnerLessonsCompleted: number;
  beginnerLessonsTotal: number;
  beginnerAssessmentScore: number | null;
  beginnerAssessmentAt: string | null;
  beginnerPassScore: number;
  intermediateLessonsCompleted: number;
  intermediateLessonsTotal: number;
  intermediateAssessmentScore: number | null;
  intermediateAssessmentAt: string | null;
  intermediatePassScore: number;
  upperLessonsCompleted: number;
  upperLessonsTotal: number;
  upperAssessmentScore: number | null;
  upperAssessmentAt: string | null;
  upperPassScore: number;
};

function code(userId: string, id: string) {
  let hash = 0;
  const source = `${userId}:${id}`;
  for (let i = 0; i < source.length; i += 1) {
    hash = (hash * 31 + source.charCodeAt(i)) >>> 0;
  }
  return `S2C-${id.slice(0, 3).toUpperCase()}-${hash.toString(36).toUpperCase().padStart(7, "0").slice(0, 7)}`;
}

function clamp(value: number) {
  return Math.max(0, Math.min(1, value));
}

export function buildCertificates(input: Input): Certificate[] {
  const { userId } = input;
  const placement = input.placements[0] ?? null;
  const interviewCount = input.interviews.length;
  const interviewAvg = interviewCount
    ? Math.round(input.interviews.reduce((sum, i) => sum + (i.score ?? 0), 0) / interviewCount)
    : 0;
  const exerciseCount = input.exercises.length;
  const lastDate = (list: { [k: string]: any }[], key: string) =>
    list
      .map((row) => row[key] as string | null)
      .filter(Boolean)
      .sort()
      .pop() ?? null;

  return [
    {
      id: "nivel",
      title: "Certificado de Nível CEFR",
      subtitle: "Teste de nivelamento Speak2Co",
      description: "Conclua o teste de nivelamento para receber seu certificado com o nível CEFR.",
      unlocked: Boolean(placement?.level),
      progress: placement?.level ? 1 : 0,
      goalLabel: "1 teste de nivelamento concluído",
      detail: placement?.level ? `Nível ${placement.level} · ${placement.score ?? 0}% de acerto` : null,
      issuedAt: placement?.completed_at ?? null,
      code: code(userId, "nivel"),
    },
    {
      id: "hire",
      title: "Certificado Speak2Hire",
      subtitle: "Entrevistas em inglês",
      description: "Conclua 3 simulações de entrevista no Speak2Hire.",
      unlocked: interviewCount >= 3,
      progress: clamp(interviewCount / 3),
      goalLabel: "3 entrevistas concluídas",
      detail: interviewCount ? `${interviewCount} entrevistas · nota média ${interviewAvg}` : null,
      issuedAt: lastDate(input.interviews, "completed_at"),
      code: code(userId, "hire"),
    },
    {
      id: "pratica",
      title: "Certificado de Prática Diária",
      subtitle: "Exercícios do plano personalizado",
      description: "Conclua 10 conjuntos de exercícios diários.",
      unlocked: exerciseCount >= 10,
      progress: clamp(exerciseCount / 10),
      goalLabel: "10 exercícios concluídos",
      detail: exerciseCount ? `${exerciseCount} exercícios concluídos` : null,
      issuedAt: lastDate(input.exercises, "updated_at"),
      code: code(userId, "pratica"),
    },
    {
      id: "conversa",
      title: "Certificado de Conversação",
      subtitle: "AI Teacher",
      description: "Envie 50 mensagens em conversas com o AI Teacher.",
      unlocked: input.chatMessages >= 50,
      progress: clamp(input.chatMessages / 50),
      goalLabel: "50 mensagens no AI Teacher",
      detail: input.chatMessages ? `${input.chatMessages} mensagens enviadas` : null,
      issuedAt: null,
      code: code(userId, "conversa"),
    },
    (() => {
      const lessonsOk = input.beginnerLessonsCompleted >= input.beginnerLessonsTotal;
      const score = input.beginnerAssessmentScore;
      const passed = score != null && score >= input.beginnerPassScore;
      // Metade do progresso vem das lições, metade do assessment final.
      const progress = clamp(
        (input.beginnerLessonsCompleted / Math.max(1, input.beginnerLessonsTotal)) * 0.5 +
          (passed ? 0.5 : score != null ? (score / 100) * 0.5 * 0.5 : 0),
      );
      return {
        id: "beginner",
        title: "Certificado Beginner English Course",
        subtitle: "Método Speak2Co · All Access",
        description: `Conclua as ${input.beginnerLessonsTotal} lições do curso Beginner e seja aprovado no assessment final (mínimo ${input.beginnerPassScore}%).`,
        unlocked: lessonsOk && passed,
        progress,
        goalLabel: `${input.beginnerLessonsTotal} lições + assessment final`,
        detail:
          score != null
            ? `${input.beginnerLessonsCompleted}/${input.beginnerLessonsTotal} lições · assessment ${score}%`
            : input.beginnerLessonsCompleted
              ? `${input.beginnerLessonsCompleted}/${input.beginnerLessonsTotal} lições concluídas`
              : null,
        issuedAt: lessonsOk && passed ? input.beginnerAssessmentAt : null,
        code: code(userId, "beginner"),
      } satisfies Certificate;
    })(),
    (() => {
      const lessonsOk = input.intermediateLessonsCompleted >= input.intermediateLessonsTotal;
      const score = input.intermediateAssessmentScore;
      const passed = score != null && score >= input.intermediatePassScore;
      const progress = clamp(
        (input.intermediateLessonsCompleted / Math.max(1, input.intermediateLessonsTotal)) * 0.5 +
          (passed ? 0.5 : score != null ? (score / 100) * 0.5 * 0.5 : 0),
      );
      return {
        id: "intermediate",
        title: "Certificado Intermediate English Course",
        subtitle: "Método Speak2Co · All Access",
        description: `Conclua as ${input.intermediateLessonsTotal} lições do curso Intermediate e seja aprovado no assessment final (mínimo ${input.intermediatePassScore}%).`,
        unlocked: lessonsOk && passed,
        progress,
        goalLabel: `${input.intermediateLessonsTotal} lições + assessment final`,
        detail:
          score != null
            ? `${input.intermediateLessonsCompleted}/${input.intermediateLessonsTotal} lições · assessment ${score}%`
            : input.intermediateLessonsCompleted
              ? `${input.intermediateLessonsCompleted}/${input.intermediateLessonsTotal} lições concluídas`
              : null,
        issuedAt: lessonsOk && passed ? input.intermediateAssessmentAt : null,
        code: code(userId, "intermediate"),
      } satisfies Certificate;
    })(),
    (() => {
      const lessonsOk = input.upperLessonsCompleted >= input.upperLessonsTotal;
      const score = input.upperAssessmentScore;
      const passed = score != null && score >= input.upperPassScore;
      const progress = clamp(
        (input.upperLessonsCompleted / Math.max(1, input.upperLessonsTotal)) * 0.5 +
          (passed ? 0.5 : score != null ? (score / 100) * 0.5 * 0.5 : 0),
      );
      return {
        id: "upper",
        title: "Certificado Upper Intermediate English Course",
        subtitle: "Método Speak2Co · Nível B2",
        description: `Conclua as ${input.upperLessonsTotal} lições do curso Upper Intermediate e seja aprovado no assessment final (mínimo ${input.upperPassScore}%).`,
        unlocked: lessonsOk && passed,
        progress,
        goalLabel: `${input.upperLessonsTotal} lições + assessment final`,
        detail:
          score != null
            ? `${input.upperLessonsCompleted}/${input.upperLessonsTotal} lições · assessment ${score}%`
            : input.upperLessonsCompleted
              ? `${input.upperLessonsCompleted}/${input.upperLessonsTotal} lições concluídas`
              : null,
        issuedAt: lessonsOk && passed ? input.upperAssessmentAt : null,
        code: code(userId, "upper"),
      } satisfies Certificate;
    })(),
  ];
}
