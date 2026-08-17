/** Tipos de atividade da GiseleAI (client-safe, sem código de servidor). */
export const ACTIVITY_KINDS = [
  "listening",
  "writing",
  "review",
  "reallife",
  "weakness",
  "challenge",
  "practice",
] as const;

export type ActivityKind = (typeof ACTIVITY_KINDS)[number];
