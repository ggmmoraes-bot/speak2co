import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { ArrowLeft, Loader2, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LIVE_STAGES, STAGE_LABEL } from "@/lib/live-lesson/script";
import { COURSE_LEVELS } from "@/lib/live-lesson/units";
import {
  deleteLiveLessonMedia,
  listLiveLessonMedia,
  upsertLiveLessonMedia,
} from "@/lib/live-lesson.functions";

export const Route = createFileRoute("/_authenticated/admin-live-lesson")({
  head: () => ({
    meta: [
      { title: "Vídeos da Live Lesson — Speak2Co" },
      { name: "description", content: "Cadastro dos vídeos da instrutora usados nas aulas ao vivo." },
      { property: "og:title", content: "Vídeos da Live Lesson — Speak2Co" },
      { property: "og:description", content: "Cadastro dos vídeos da instrutora usados nas aulas ao vivo." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AdminLiveLessonMedia,
});

function AdminLiveLessonMedia() {
  const list = useServerFn(listLiveLessonMedia);
  const upsert = useServerFn(upsertLiveLessonMedia);
  const remove = useServerFn(deleteLiveLessonMedia);
  const qc = useQueryClient();

  const [form, setForm] = useState({
    course: "beginner",
    unitCode: "",
    part: "discover",
    stage: "welcome",
    videoUrl: "",
    posterUrl: "",
    caption: "",
  });

  const { data, isPending, error } = useQuery({
    queryKey: ["live-lesson-media"],
    queryFn: () => list({ data: {} }),
  });

  const saveMutation = useMutation({
    mutationFn: () =>
      upsert({
        data: {
          course: form.course as "beginner" | "intermediate" | "upper",
          unitCode: form.unitCode.trim(),
          part: form.part as "discover" | "communicate",
          stage: form.stage,
          videoUrl: form.videoUrl.trim(),
          posterUrl: form.posterUrl.trim() || null,
          caption: form.caption.trim() || null,
        },
      }),
    onSuccess: () => {
      toast.success("Vídeo salvo.");
      setForm((f) => ({ ...f, videoUrl: "", posterUrl: "", caption: "" }));
      void qc.invalidateQueries({ queryKey: ["live-lesson-media"] });
    },
    onError: (e) => toast.error(e instanceof Error ? e.message : "Não foi possível salvar."),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => remove({ data: { id } }),
    onSuccess: () => void qc.invalidateQueries({ queryKey: ["live-lesson-media"] }),
    onError: () => toast.error("Não foi possível remover."),
  });

  if (error) {
    return (
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16 text-center text-sm text-muted-foreground">
        Acesso restrito à administradora.
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-4xl flex-1 space-y-6 px-6 py-8">
      <Link to="/admin" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> Voltar ao painel administrativo
      </Link>

      <header>
        <h1 className="text-2xl font-bold text-foreground">Vídeos da Live Lesson</h1>
        <p className="text-sm text-muted-foreground">
          Cadastre o vídeo gravado por você para cada etapa da aula. Onde não houver vídeo, a aula usa o retrato
          oficial com a voz da GiseleAI.
        </p>
      </header>

      <section className="grid gap-3 rounded-2xl border border-border bg-card p-6 md:grid-cols-2">
        <label className="text-xs font-semibold text-muted-foreground">
          Curso
          <select
            value={form.course}
            onChange={(e) => setForm({ ...form, course: e.target.value })}
            className="mt-1 w-full rounded-md border border-border bg-background p-2 text-sm text-foreground"
          >
            {COURSE_LEVELS.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
        <label className="text-xs font-semibold text-muted-foreground">
          Código da unidade (ex.: BEGINNER-U01)
          <Input
            value={form.unitCode}
            onChange={(e) => setForm({ ...form, unitCode: e.target.value })}
            className="mt-1"
          />
        </label>
        <label className="text-xs font-semibold text-muted-foreground">
          Parte
          <select
            value={form.part}
            onChange={(e) => setForm({ ...form, part: e.target.value })}
            className="mt-1 w-full rounded-md border border-border bg-background p-2 text-sm text-foreground"
          >
            <option value="discover">Part 1 — Discover</option>
            <option value="communicate">Part 2 — Communicate</option>
          </select>
        </label>
        <label className="text-xs font-semibold text-muted-foreground">
          Etapa
          <select
            value={form.stage}
            onChange={(e) => setForm({ ...form, stage: e.target.value })}
            className="mt-1 w-full rounded-md border border-border bg-background p-2 text-sm text-foreground"
          >
            {LIVE_STAGES.map((s) => (
              <option key={s} value={s}>
                {STAGE_LABEL[s].en}
              </option>
            ))}
          </select>
        </label>
        <label className="text-xs font-semibold text-muted-foreground md:col-span-2">
          URL do vídeo (https)
          <Input
            value={form.videoUrl}
            onChange={(e) => setForm({ ...form, videoUrl: e.target.value })}
            placeholder="https://…/aula.mp4"
            className="mt-1"
          />
        </label>
        <label className="text-xs font-semibold text-muted-foreground">
          Imagem de capa (opcional)
          <Input
            value={form.posterUrl}
            onChange={(e) => setForm({ ...form, posterUrl: e.target.value })}
            className="mt-1"
          />
        </label>
        <label className="text-xs font-semibold text-muted-foreground">
          Legenda (opcional)
          <Input
            value={form.caption}
            onChange={(e) => setForm({ ...form, caption: e.target.value })}
            className="mt-1"
          />
        </label>
        <div className="md:col-span-2">
          <Button
            onClick={() => saveMutation.mutate()}
            disabled={saveMutation.isPending || !form.unitCode.trim() || !form.videoUrl.trim()}
            className="btn-gold rounded-full font-semibold"
          >
            {saveMutation.isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            Salvar vídeo
          </Button>
        </div>
      </section>

      <section className="rounded-2xl border border-border bg-card p-6">
        <h2 className="text-lg font-semibold text-foreground">Vídeos cadastrados</h2>
        {isPending ? (
          <p className="mt-3 text-sm text-muted-foreground">Carregando…</p>
        ) : (data?.length ?? 0) === 0 ? (
          <p className="mt-3 text-sm text-muted-foreground">Nenhum vídeo cadastrado ainda.</p>
        ) : (
          <ul className="mt-3 space-y-2">
            {data!.map((m) => (
              <li
                key={m.id}
                className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-border/60 p-3 text-sm"
              >
                <span className="text-foreground">
                  {m.courseId} · {m.unitCode} · {m.part} · {m.stage}
                </span>
                <span className="max-w-full truncate text-xs text-muted-foreground">{m.videoUrl}</span>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => deleteMutation.mutate(m.id)}
                  className="gap-1 text-xs"
                >
                  <Trash2 className="h-3.5 w-3.5" /> Remover
                </Button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
