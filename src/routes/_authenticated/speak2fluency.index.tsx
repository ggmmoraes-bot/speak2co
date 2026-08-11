import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useState } from "react";
import { ArrowLeft, CheckCircle2, Flame, Sparkles, Target, Timer } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { BrandText } from "@/components/BrandText";
import { BilingualLine } from "@/components/BilingualLine";
import logo from "@/assets/speak2fluency.png.asset.json";
import {
  DAILY_BLOCKS,
  FLUENCY_MODULES,
  FLUENCY_SKILL_LABELS,
} from "@/lib/speak2fluency-content";
import { getFluencyOverview, saveDailyMission } from "@/lib/speak2fluency.functions";
import { siteUrl } from "@/lib/site";

export const Route = createFileRoute("/_authenticated/speak2fluency/")({
  head: () => ({
    meta: [
      { title: "Speak2Fluency — do inglês funcional à fala espontânea" },
      {
        name: "description",
        content:
          "8 módulos de fluência, rotina diária de 25 minutos e feedback da IA em pronunciation, stress, intonation e fluency. Disponível a partir do plano Premium.",
      },
      { property: "og:title", content: "Speak2Fluency — Speak without translating" },
      {
        property: "og:description",
        content:
          "Destrave a fala espontânea com missões diárias, desafios reais e feedback da IA da Speak2Co.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: siteUrl("/speak2fluency") },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: siteUrl("/speak2fluency") }],
  }),
  component: Speak2FluencyHub,
});

function Speak2FluencyHub() {
  const loadOverview = useServerFn(getFluencyOverview);
  const saveMission = useServerFn(saveDailyMission);

  const [progress, setProgress] = useState<Record<string, { completed: boolean; score: number | null }>>(
    {},
  );
  const [streak, setStreak] = useState(0);
  const [blocks, setBlocks] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    loadOverview()
      .then((data) => {
        if (!active) return;
        const map: Record<string, { completed: boolean; score: number | null }> = {};
        for (const row of data.progress) {
          map[row.moduleId] = { completed: row.completed, score: row.score };
        }
        setProgress(map);
        setStreak(data.streak);
        const today = new Date().toISOString().slice(0, 10);
        const mission = data.missions.find((m) => m.date === today);
        setBlocks(mission?.blocks ?? {});
      })
      .catch(() => undefined)
      .finally(() => active && setLoading(false));
    return () => {
      active = false;
    };
  }, [loadOverview]);

  async function toggleBlock(blockId: string) {
    const next = { ...blocks, [blockId]: !blocks[blockId] };
    setBlocks(next);
    const minutes = DAILY_BLOCKS.filter((b) => next[b.id]).reduce((sum, b) => sum + b.minutes, 0);
    try {
      const res = await saveMission({ data: { blocks: next, minutes } });
      if (res.completed) {
        toast.success("Missão diária concluída! 🔥");
        const already = ["listening", "speaking", "vocabulary"].every((b) => blocks[b] === true);
        setStreak((s) => (already ? s : s + 1));
      }
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Não foi possível salvar sua missão.");
    }
  }

  const completedCount = FLUENCY_MODULES.filter((m) => progress[m.id]?.completed).length;
  const doneMinutes = DAILY_BLOCKS.filter((b) => blocks[b.id]).reduce((s, b) => s + b.minutes, 0);
  const totalMinutes = DAILY_BLOCKS.reduce((s, b) => s + b.minutes, 0);

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <Button asChild variant="ghost" size="sm" className="mb-6 -ml-2 rounded-full">
          <Link to="/painel">
            <ArrowLeft className="mr-1 h-4 w-4" /> Voltar ao painel
          </Link>
        </Button>

        <header className="flex flex-wrap items-center gap-5">
          <img src={logo.url} alt="Speak2Fluency" className="h-20 w-20 rounded-2xl object-cover" />
          <div>
            <h1 className="text-3xl font-semibold">
              <BrandText text="Speak2Fluency" />
            </h1>
            <p className="text-sm text-muted-foreground">
              Speak naturally. Think in English. Live the language.
            </p>
          </div>
        </header>

        <p className="mt-6 max-w-2xl text-sm text-foreground/80">
          O Speak2Fluency leva você do inglês funcional à comunicação espontânea. São 8 módulos com
          escuta contextualizada, chunks de fala real, desafios gravados e feedback da IA em{" "}
          <span className="text-gold">pronunciation, stress, intonation e fluency</span>.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <StatCard
            icon={<Flame className="h-5 w-5" />}
            label="Sequência atual"
            value={`${streak} ${streak === 1 ? "dia" : "dias"}`}
          />
          <StatCard
            icon={<Target className="h-5 w-5" />}
            label="Módulos concluídos"
            value={`${completedCount} de ${FLUENCY_MODULES.length}`}
          />
          <StatCard
            icon={<Timer className="h-5 w-5" />}
            label="Rotina de hoje"
            value={`${doneMinutes} / ${totalMinutes} min`}
          />
        </div>

        <section className="mt-12">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-gold">
            <Timer className="h-5 w-5" /> Daily Mission — 25 minutes
          </h2>
          <p className="text-xs tracking-widest text-muted-foreground uppercase">
            Missão diária de 25 minutos
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Consistency beats volume. Tick each block when you finish it.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {DAILY_BLOCKS.map((block) => {
              const done = blocks[block.id] === true;
              return (
                <button
                  key={block.id}
                  type="button"
                  disabled={loading}
                  onClick={() => toggleBlock(block.id)}
                  className={`rounded-2xl border p-4 text-left backdrop-blur transition ${
                    done
                      ? "border-gold/70 bg-gold/10"
                      : "border-border bg-card/60 hover:border-gold/60"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-foreground">{block.labelEn}</p>
                    {done && <CheckCircle2 className="h-4 w-4 text-gold" />}
                  </div>
                  <p className="text-xs tracking-wide text-muted-foreground uppercase">
                    {block.labelPt} · {block.minutes} min
                  </p>
                  <p className="mt-2 text-sm text-foreground/80">{block.goalEn}</p>
                  <p className="text-xs text-muted-foreground italic">{block.goalPt}</p>
                </button>
              );
            })}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-gold">
            <Sparkles className="h-5 w-5" /> The 8 modules
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {FLUENCY_MODULES.map((module) => {
              const state = progress[module.id];
              return (
                <div
                  key={module.id}
                  className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur transition hover:border-gold/60"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs tracking-widest text-muted-foreground uppercase">
                      Module {module.order}
                    </p>
                    {state?.completed ? (
                      <span className="flex items-center gap-1 text-xs text-primary">
                        <CheckCircle2 className="h-4 w-4" /> Completed
                        {state.score != null ? ` · ${state.score}` : ""}
                      </span>
                    ) : null}
                  </div>
                  <Link
                    to="/speak2fluency/modulo/$moduleId"
                    params={{ moduleId: module.id }}
                    className="mt-2 block text-lg font-semibold text-gold"
                  >
                    {module.titleEn}
                  </Link>
                  <p className="text-xs tracking-wide text-muted-foreground uppercase">
                    {module.titlePt} · {module.minutes} min
                  </p>
                  <div className="mt-3">
                    <BilingualLine value={module.objective} className="text-sm text-foreground/80" />
                  </div>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {module.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full border border-primary/30 px-2.5 py-0.5 text-xs text-muted-foreground"
                      >
                        {FLUENCY_SKILL_LABELS[skill].en}

                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/speak2fluency/modulo/$moduleId"
                    params={{ moduleId: module.id }}
                    className="mt-4 inline-flex rounded-full bg-gold px-4 py-1.5 text-xs font-semibold text-primary-foreground hover:opacity-90"
                  >
                    {state?.completed ? "Refazer módulo" : "Começar módulo"}
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}

function StatCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur">
      <p className="flex items-center gap-2 text-xs tracking-widest text-muted-foreground uppercase">
        <span className="text-gold">{icon}</span> {label}
      </p>
      <p className="mt-2 text-2xl font-semibold text-foreground">{value}</p>
    </div>
  );
}
