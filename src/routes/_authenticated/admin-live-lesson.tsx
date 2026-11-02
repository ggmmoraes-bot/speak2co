import { useMemo, useState } from "react";
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
  ANY,
  MEDIA_SCOPE_LABEL,
  MEDIA_STATUS_LABEL,
  mediaScope,
  mediaStatus,
  type LiveLessonMedia,
  type MediaStatus,
} from "@/lib/live-lesson/shared";
import {
  deleteLiveLessonMedia,
  listLiveLessonMedia,
  upsertLiveLessonMedia,
} from "@/lib/live-lesson.functions";

export const Route = createFileRoute("/_authenticated/admin-live-lesson")({
  head: () => ({
    meta: [
      { title: "Vídeos da Guided Lesson — Speak2Co" },
      { name: "description", content: "Cadastro opcional dos vídeos da instrutora usados nas aulas ao vivo." },
      { property: "og:title", content: "Vídeos da Guided Lesson — Speak2Co" },
      {
        property: "og:description",
        content: "Cadastro opcional dos vídeos da instrutora usados nas aulas ao vivo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AdminLiveLessonMedia,
});

const STATUS_CLASS: Record<MediaStatus, string> = {
  video: "border-gold/50 bg-gold/10 text-gold",
  portrait: "border-border bg-secondary/40 text-muted-foreground",
  missing: "border-border/60 bg-transparent text-muted-foreground",
};

function StatusBadge({ status }: { status: MediaStatus }) {
  return (
    <span
      className={`rounded-full border px-2.5 py-0.5 text-[10px] font-semibold tracking-wide ${STATUS_CLASS[status]}`}
    >
      {MEDIA_STATUS_LABEL[status]}
    </span>
  );
}

type Scope = "global" | "lesson" | "stage";

function AdminLiveLessonMedia() {
  const list = useServerFn(listLiveLessonMedia);
  const upsert = useServerFn(upsertLiveLessonMedia);
  const remove = useServerFn(deleteLiveLessonMedia);
  const qc = useQueryClient();

  const [form, setForm] = useState({
    scope: "stage" as Scope,
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

  const globals = useMemo(
    () => (data ?? []).filter((m: LiveLessonMedia) => m.unitCode === ANY),
    [data],
  );
  const globalIntro = globals.find((m) => m.stage === "welcome");
  const globalClosing = globals.find((m) => m.stage === "wrapup");

  const saveMutation = useMutation({
    mutationFn: () =>
      upsert({
        data: {
          course: form.course as "beginner" | "intermediate" | "upper",
          unitCode: form.scope === "global" ? ANY : form.unitCode.trim(),
          part: form.scope === "global" ? ANY : (form.part as "discover" | "communicate"),
          stage: form.scope === "lesson" ? ANY : form.stage,
          videoUrl: form.videoUrl.trim(),
          posterUrl: form.posterUrl.trim() || null,
          caption: form.caption.trim() || null,
        },
      }),
    onSuccess: () => {
      toast.success(form.videoUrl.trim() ? "Vídeo salvo." : "Etapa salva em modo retrato + voz.");
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

  const needsUnit = form.scope !== "global";

  return (
    <main className="mx-auto w-full max-w-4xl flex-1 space-y-6 px-6 py-8">
      <Link to="/admin" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> Back to admin dashboard
      </Link>

      <header>
        <h1 className="text-2xl font-bold text-foreground">Vídeos da Guided Lesson</h1>
        <p className="text-sm text-muted-foreground">
          O upload de vídeo é <strong>opcional</strong>. Sem vídeo, a aula roda normalmente com o retrato oficial da
          Gisele, a voz clonada aprovada e o roteiro gerado a partir do conteúdo oficial da unidade. Você pode ir
          adicionando vídeos reais aos poucos, sem quebrar nenhuma aula.
        </p>
      </header>

      <section className="grid gap-3 rounded-2xl border border-border bg-card p-6 md:grid-cols-2">
        <h2 className="md:col-span-2 text-lg font-semibold text-foreground">Global Gisele Intro &amp; Closing</h2>
        <div className="flex items-center justify-between gap-3 rounded-xl border border-border/60 p-3 text-sm">
          <span className="text-foreground">Global Gisele Intro (Welcome)</span>
          <StatusBadge status={mediaStatus(globalIntro)} />
        </div>
        <div className="flex items-center justify-between gap-3 rounded-xl border border-border/60 p-3 text-sm">
          <span className="text-foreground">Global Gisele Closing (Wrap-up)</span>
          <StatusBadge status={mediaStatus(globalClosing)} />
        </div>
        <p className="md:col-span-2 text-xs text-muted-foreground">
          Vídeos globais são reutilizados em todas as aulas que não tiverem vídeo próprio para aquela etapa.
        </p>
      </section>

      <section className="grid gap-3 rounded-2xl border border-border bg-card p-6 md:grid-cols-2">
        <label className="text-xs font-semibold text-muted-foreground md:col-span-2">
          Abrangência do vídeo
          <select
            value={form.scope}
            onChange={(e) => setForm({ ...form, scope: e.target.value as Scope })}
            className="mt-1 w-full rounded-md border border-border bg-background p-2 text-sm text-foreground"
          >
            <option value="global">{MEDIA_SCOPE_LABEL.global} — vale para todas as aulas</option>
            <option value="lesson">{MEDIA_SCOPE_LABEL.lesson} — uma aula inteira</option>
            <option value="stage">{MEDIA_SCOPE_LABEL.stage} — uma etapa de uma aula</option>
          </select>
        </label>

        {needsUnit && (
          <>
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
          </>
        )}

        {form.scope !== "lesson" && (
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
        )}

        <label className="text-xs font-semibold text-muted-foreground md:col-span-2">
          URL do vídeo (https) — opcional
          <Input
            value={form.videoUrl}
            onChange={(e) => setForm({ ...form, videoUrl: e.target.value })}
            placeholder="Deixe vazio para usar retrato + voz clonada"
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
        <div className="md:col-span-2 flex items-center gap-3">
          <Button
            onClick={() => saveMutation.mutate()}
            disabled={saveMutation.isPending || (needsUnit && !form.unitCode.trim())}
            className="btn-gold rounded-full font-semibold"
          >
            {saveMutation.isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            Save
          </Button>
          <StatusBadge status={form.videoUrl.trim() ? "video" : "portrait"} />
        </div>
      </section>

      <section className="rounded-2xl border border-border bg-card p-6">
        <h2 className="text-lg font-semibold text-foreground">Vídeos e etapas cadastradas</h2>
        {isPending ? (
          <p className="mt-3 text-sm text-muted-foreground">Carregando…</p>
        ) : (data?.length ?? 0) === 0 ? (
          <p className="mt-3 text-sm text-muted-foreground">
            Nada cadastrado ainda — todas as aulas rodam em VOICE + PORTRAIT MODE.
          </p>
        ) : (
          <ul className="mt-3 space-y-2">
            {data!.map((m) => (
              <li
                key={m.id}
                className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-border/60 p-3 text-sm"
              >
                <span className="text-foreground">
                  {m.unitCode === ANY
                    ? `Global · ${m.stage === ANY ? "todas as etapas" : m.stage}`
                    : `${m.courseId} · ${m.unitCode} · ${m.part} · ${m.stage === ANY ? "todas as etapas" : m.stage}`}
                </span>
                <span className="text-[11px] text-muted-foreground">{MEDIA_SCOPE_LABEL[mediaScope(m)]}</span>
                <StatusBadge status={mediaStatus(m)} />
                <span className="max-w-full truncate text-xs text-muted-foreground">{m.videoUrl || "—"}</span>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => deleteMutation.mutate(m.id)}
                  className="gap-1 text-xs"
                >
                  <Trash2 className="h-3.5 w-3.5" /> Remove
                </Button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
