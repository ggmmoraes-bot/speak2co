import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { ArrowLeft, CheckCircle2, Loader2, Mic } from "lucide-react";
import { toast } from "sonner";
import { AltHeading } from "@/components/AltHeading";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { getMeetingRoom, finishMeetingRoom } from "@/lib/practice-meetings.functions";
import type { MeetingFeedback } from "@/lib/practice-meetings.server";

export const Route = createFileRoute("/_authenticated/comunidade/encontro/$meetingId")({
  head: () => ({
    meta: [
      { title: "Practice Meeting Room | Speak2Co" },
      {
        name: "description",
        content:
          "Sala guiada do encontro de prática Speak2Co: etapas cronometradas, fala do aluno e feedback da IA.",
      },
      { property: "og:title", content: "Practice Meeting Room | Speak2Co" },
      {
        property: "og:description",
        content: "Participe do encontro guiado da Speak2Co com correção da IA.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MeetingRoomPage,
});

function MeetingRoomPage() {
  const { meetingId } = useParams({ from: "/_authenticated/comunidade/encontro/$meetingId" });
  const loadRoom = useServerFn(getMeetingRoom);
  const finish = useServerFn(finishMeetingRoom);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [feedback, setFeedback] = useState<MeetingFeedback | null>(null);

  const { data, isPending, error } = useQuery({
    queryKey: ["meeting-room", meetingId],
    queryFn: () => loadRoom({ data: { meetingId } }),
    retry: false,
  });

  const steps = useMemo(() => data?.script ?? [], [data]);

  const finishMutation = useMutation({
    mutationFn: () =>
      finish({
        data: {
          meetingId,
          answers: steps.map((s) => ({ prompt: s.prompt, answer: answers[s.id] ?? "" })),
        },
      }),
    onSuccess: (result) => {
      setFeedback(result);
      toast.success("Encontro concluído. Veja seu feedback abaixo.");
    },
    onError: (e) => toast.error(e instanceof Error ? e.message : "Não foi possível finalizar."),
  });

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Button variant="ghost" size="sm" asChild className="mb-4">
        <Link to="/comunidade">
          <ArrowLeft className="mr-2 h-4 w-4" /> Community
        </Link>
      </Button>

      {isPending && (
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin" /> Preparando a sala…
        </p>
      )}

      {error && (
        <p className="rounded-3xl border border-border bg-card/60 p-6 text-sm text-muted-foreground">
          {error instanceof Error ? error.message : "Não foi possível abrir a sala."}
        </p>
      )}

      {data && (
        <>
          <AltHeading text={data.meeting.title} className="text-2xl" />
          <p className="mt-1 text-sm text-muted-foreground">
            {data.meeting.titlePt} · Level {data.meeting.level} · {data.meeting.durationMinutes} min
          </p>

          <ol className="mt-6 space-y-4">
            {steps.map((step, index) => (
              <li key={step.id} className="rounded-3xl border border-border bg-card/60 p-6">
                <p className="text-xs font-semibold uppercase text-gold">
                  {index + 1}. {step.label} · {step.minutes} min
                </p>
                <p className="text-[11px] text-muted-foreground">{step.labelPt}</p>
                <p className="mt-3 text-base font-medium text-foreground">{step.prompt}</p>
                {step.promptPt && (
                  <p className="text-xs text-muted-foreground">{step.promptPt}</p>
                )}
                {step.support.length > 0 && (
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {step.support.map((s) => (
                      <li
                        key={s}
                        className="rounded-full border border-gold/40 px-3 py-1 text-[11px] text-foreground"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                )}
                <Textarea
                  className="mt-4"
                  rows={3}
                  placeholder="Write or dictate your answer in English"
                  value={answers[step.id] ?? ""}
                  onChange={(e) =>
                    setAnswers((prev) => ({ ...prev, [step.id]: e.target.value }))
                  }
                />
                <p className="mt-2 flex items-center gap-1 text-[11px] text-muted-foreground">
                  <Mic className="h-3.5 w-3.5" /> Speak out loud first, then write what you said.
                </p>
              </li>
            ))}
          </ol>

          <Button
            className="mt-6 w-full"
            disabled={finishMutation.isPending}
            onClick={() => {
              if (!steps.some((s) => (answers[s.id] ?? "").trim())) {
                toast.error("Responda pelo menos uma etapa antes de finalizar.");
                return;
              }
              finishMutation.mutate();
            }}
          >
            {finishMutation.isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Gerando feedback…
              </>
            ) : (
              "Finish meeting and get feedback"
            )}
          </Button>

          {feedback && (
            <section className="mt-6 rounded-3xl border border-gold/40 bg-gold/5 p-6">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                <CheckCircle2 className="h-5 w-5 text-gold" /> Your feedback
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">{feedback.summary}</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase text-gold">Strengths</p>
                  <ul className="mt-1 list-disc pl-4 text-sm text-muted-foreground">
                    {feedback.strengths.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase text-gold">To improve</p>
                  <ul className="mt-1 list-disc pl-4 text-sm text-muted-foreground">
                    {feedback.improvements.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="mt-4 text-sm font-medium text-foreground">{feedback.nextStep}</p>
            </section>
          )}
        </>
      )}
    </div>
  );
}
