import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Loader2, Mic, RefreshCw, Send, Square } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { GiseleFeedbackCard } from "@/components/gisele/GiseleFeedbackCard";
import { ListenToGiseleButton } from "@/components/gisele/ListenToGiseleButton";
import { MicRecorder } from "@/lib/audio-recorder";
import { transcribeAudio } from "@/lib/voice-client";
import type { ActivityKind } from "@/lib/gisele-activity-kinds";
import {
  evaluateGiseleAnswer,
  generateGiseleActivity,
  type GiseleActivity,
} from "@/lib/gisele-activities.functions";
import type { GiseleFeedback } from "@/lib/gisele-feedback-types";

/**
 * Tela genérica de prática da GiseleAI: gera a atividade, ouve a voz da mentora,
 * recebe a resposta (texto ou fala) e devolve o feedback estruturado.
 * Toda a experiência acontece dentro da GiseleAI.
 */
export function GiseleActivityScreen({
  kind,
  titleEn,
  titlePt,
  intro,
  topic,
  ctaLabel = "Give me an activity",
}: {
  kind: ActivityKind;
  titleEn: string;
  titlePt: string;
  intro: string;
  topic?: string;
  ctaLabel?: string;
}) {
  const generateFn = useServerFn(generateGiseleActivity);
  const evaluateFn = useServerFn(evaluateGiseleAnswer);

  const [activity, setActivity] = useState<GiseleActivity | null>(null);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState<GiseleFeedback | null>(null);
  const [loading, setLoading] = useState(false);
  const [evaluating, setEvaluating] = useState(false);
  const [recorder, setRecorder] = useState<MicRecorder | null>(null);

  async function generate() {
    try {
      setLoading(true);
      setFeedback(null);
      setAnswer("");
      const result = await generateFn({ data: { kind, ...(topic ? { topic } : {}) } });
      setActivity(result);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Não foi possível criar a atividade.");
    } finally {
      setLoading(false);
    }
  }


  async function toggleRecording() {
    if (recorder) {
      try {
        const rec = await recorder.stop();
        setRecorder(null);
        const text = await transcribeAudio(rec.blob);
        setAnswer((prev) => `${prev} ${text}`.trim());
      } catch (e) {
        setRecorder(null);
        toast.error(e instanceof Error ? e.message : "Não consegui ouvir sua fala.");
      }
      return;
    }
    try {
      const mic = new MicRecorder();
      await mic.start();
      setRecorder(mic);
    } catch {
      toast.error("Permita o acesso ao microfone no navegador para falar.");
    }
  }

  async function submit() {
    if (!activity || !answer.trim()) {
      toast.error("Escreva ou fale sua resposta antes de enviar.");
      return;
    }
    try {
      setEvaluating(true);
      const result = await evaluateFn({
        data: {
          activityTitle: activity.titleEn,
          question: activity.prompts.join(" | ") || activity.instructionsEn,
          answer: answer.trim(),
          mode: kind,
        },
      });
      setFeedback(result);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Não foi possível gerar o feedback.");
    } finally {
      setEvaluating(false);
    }
  }

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 space-y-6 px-6 py-10">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold text-foreground">{titleEn}</h1>
        <p className="text-sm italic text-muted-foreground">{titlePt}</p>
        <p className="text-sm text-muted-foreground">{intro}</p>
      </header>

      {!activity && (
        <Button onClick={generate} disabled={loading} className="btn-gold rounded-full font-semibold">
          {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
          {ctaLabel}
        </Button>
      )}

      {activity && (
        <section className="space-y-4 rounded-2xl border border-gold/25 bg-secondary/25 p-6">
          <div>
            <h2 className="text-lg font-semibold text-foreground">{activity.titleEn}</h2>
            <p className="text-xs italic text-muted-foreground">{activity.titlePt}</p>
          </div>
          <p className="text-sm text-gold">{activity.whyThis}</p>
          <div>
            <p className="text-sm text-foreground">{activity.instructionsEn}</p>
            <p className="text-xs italic text-muted-foreground">{activity.instructionsPt}</p>
          </div>

          {activity.spokenText && kind !== "listening" && (
            <p className="rounded-xl border border-border/60 bg-background/40 p-3 text-sm text-foreground">
              {activity.spokenText}
            </p>
          )}

          {activity.prompts.length > 0 && (
            <ul className="list-inside list-disc space-y-1 text-sm text-foreground">
              {activity.prompts.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          )}

          <div className="flex flex-wrap items-center gap-2">
            <ListenToGiseleButton
              size="sm"
              text={activity.spokenText || activity.prompts.join(" ") || activity.instructionsEn}
            />
            <Button size="sm" variant="ghost" onClick={generate} className="gap-1 rounded-full text-xs">

              <RefreshCw className="h-3.5 w-3.5" /> New activity
            </Button>
          </div>

          <div className="space-y-2">
            <Textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Your answer in English…"
              className="min-h-32"
            />
            <div className="flex flex-wrap gap-2">
              <Button
                size="sm"
                variant={recorder ? "destructive" : "outline"}
                onClick={toggleRecording}
                className="gap-1 rounded-full text-xs"
              >
                {recorder ? <Square className="h-3.5 w-3.5" /> : <Mic className="h-3.5 w-3.5" />}
                {recorder ? "Stop and transcribe" : "Speak your answer"}
              </Button>
              <Button
                size="sm"
                onClick={submit}
                disabled={evaluating}
                className="btn-gold gap-1 rounded-full text-xs font-semibold"
              >
                {evaluating ? (
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                ) : (
                  <Send className="h-3.5 w-3.5" />
                )}
                Send to GiseleAI
              </Button>
            </div>
          </div>
        </section>
      )}

      {feedback && <GiseleFeedbackCard feedback={feedback} />}

      <p className="text-[11px] text-muted-foreground">
        As respostas e o áudio da GiseleAI são gerados por inteligência artificial.
      </p>
    </main>
  );
}
