import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { GraduationCap, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createGiseleLesson, type GiseleLesson } from "@/lib/gisele-activities.functions";

export const Route = createFileRoute("/_authenticated/gisele/minha-aula")({
  component: CreateMyLesson,
});

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-xl border border-border/60 bg-background/40 p-4">
      <h3 className="mb-1 text-xs font-semibold uppercase tracking-wide text-gold">{title}</h3>
      <div className="space-y-1 text-sm text-foreground">{children}</div>
    </section>
  );
}

function CreateMyLesson() {
  const createFn = useServerFn(createGiseleLesson);
  const [topic, setTopic] = useState("");
  const [lesson, setLesson] = useState<GiseleLesson | null>(null);
  const [loading, setLoading] = useState(false);

  async function generate() {
    try {
      setLoading(true);
      setLesson(await createFn({ data: topic.trim() ? { topic: topic.trim() } : {} }));
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Não consegui criar a aula agora.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 space-y-6 px-6 py-10">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold text-foreground">Create My Lesson</h1>
        <p className="text-sm italic text-muted-foreground">
          Uma mini aula feita por mim, a partir do seu perfil — do warm-up à revisão.
        </p>
      </header>

      <div className="flex flex-wrap gap-2">
        <Input
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Topic (optional) — ex.: talking about my career"
          className="max-w-sm"
        />
        <Button onClick={generate} disabled={loading} className="btn-gold gap-2 rounded-full font-semibold">
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <GraduationCap className="h-4 w-4" />}
          Create a lesson for me
        </Button>
      </div>

      {lesson && (
        <div className="space-y-3 rounded-2xl border border-gold/25 bg-secondary/25 p-5">
          <div>
            <h2 className="text-lg font-semibold text-foreground">{lesson.titleEn}</h2>
            <p className="text-xs italic text-muted-foreground">{lesson.titlePt}</p>
          </div>
          <Block title="Warm-up">{lesson.warmUp}</Block>
          <Block title="Vocabulary">
            <ul className="space-y-1">
              {lesson.vocabulary.map((v) => (
                <li key={v.term}>
                  <span className="font-semibold">{v.term}</span> — {v.meaning}
                  <span className="block text-xs italic text-muted-foreground">{v.example}</span>
                </li>
              ))}
            </ul>
          </Block>
          <Block title="Expressions">
            <ul className="list-inside list-disc">
              {lesson.expressions.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </Block>
          <Block title="Grammar">{lesson.grammar}</Block>
          <Block title="Speaking">{lesson.speaking}</Block>
          <Block title="Practice">{lesson.practice}</Block>
          <Block title="Feedback focus">{lesson.feedbackFocus}</Block>
          <Block title="Review">{lesson.review}</Block>
        </div>
      )}
    </main>
  );
}
