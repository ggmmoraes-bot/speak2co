/** Objetivos possíveis do aluno dentro da GiseleAI (My English Goal). */
export const GISELE_GOALS = [
  { id: "confidence", en: "Speak English confidently", pt: "Falar inglês com confiança" },
  { id: "travel", en: "Travel", pt: "Viajar" },
  { id: "career", en: "Career", pt: "Carreira" },
  { id: "interviews", en: "Job interviews", pt: "Entrevistas de emprego" },
  { id: "international", en: "Work internationally", pt: "Trabalhar internacionalmente" },
  { id: "study", en: "Study", pt: "Estudos" },
  { id: "pronunciation", en: "Improve pronunciation", pt: "Melhorar a pronúncia" },
  { id: "fluency", en: "Become fluent", pt: "Ser fluente" },
  { id: "overall", en: "Improve overall English", pt: "Melhorar o inglês em geral" },
] as const;

export type GiseleGoalId = (typeof GISELE_GOALS)[number]["id"];
