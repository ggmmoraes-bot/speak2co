/** Conversão da precisão (0-100) em nota automática do Pronunciation Lab. */
export type PronunciationGrade = {
  letter: string;
  label: string;
  score10: number;
  tone: "gold" | "good" | "warn" | "bad";
};

export function gradePronunciation(score: number): PronunciationGrade {
  const s = Math.max(0, Math.min(100, Math.round(score)));
  const score10 = Math.round(s / 10);
  if (s >= 90) return { letter: "A", label: "Excelente", score10, tone: "gold" };
  if (s >= 80) return { letter: "B", label: "Muito bom", score10, tone: "good" };
  if (s >= 70) return { letter: "C", label: "Bom, com ajustes", score10, tone: "good" };
  if (s >= 55) return { letter: "D", label: "Precisa treinar", score10, tone: "warn" };
  return { letter: "E", label: "Repita com calma", score10, tone: "bad" };
}

export const GRADE_TONE_CLASS: Record<PronunciationGrade["tone"], string> = {
  gold: "border-gold/60 bg-gold/15 text-gold",
  good: "border-primary/50 bg-primary/15 text-foreground",
  warn: "border-amber-500/50 bg-amber-500/10 text-amber-400",
  bad: "border-destructive/50 bg-destructive/10 text-destructive",
};

export type PronunciationAttempt = {
  id: string;
  phrase: string;
  score: number;
  transcript: string;
  issues: { sound: string; tip: string }[];
  at: number;
};

/** Agrupa os sons que mais se repetiram nas tentativas para o resumo de erros comuns. */
export function summarizeCommonIssues(attempts: PronunciationAttempt[]) {
  const map = new Map<string, { sound: string; tip: string; count: number; phrases: Set<string> }>();
  for (const attempt of attempts) {
    for (const issue of attempt.issues) {
      const key = issue.sound.trim().toLowerCase();
      if (!key) continue;
      const entry = map.get(key) ?? {
        sound: issue.sound,
        tip: issue.tip,
        count: 0,
        phrases: new Set<string>(),
      };
      entry.count += 1;
      entry.tip = issue.tip || entry.tip;
      entry.phrases.add(attempt.phrase);
      map.set(key, entry);
    }
  }
  return [...map.values()]
    .sort((a, b) => b.count - a.count)
    .map((e) => ({ sound: e.sound, tip: e.tip, count: e.count, phrases: [...e.phrases] }));
}

export function averageScore(attempts: PronunciationAttempt[]) {
  if (!attempts.length) return 0;
  return Math.round(attempts.reduce((sum, a) => sum + a.score, 0) / attempts.length);
}
