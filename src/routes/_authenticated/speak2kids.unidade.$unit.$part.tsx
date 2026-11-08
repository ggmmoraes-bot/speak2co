import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Award, CheckCircle2, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildQuickCheck, getKidsUnit, KIDS_UNITS_TOTAL, type KidsUnit } from "@/lib/speak2kids/curriculum";
import { partStatus } from "@/lib/speak2kids/progress";
import { useKidsProgress, useSavePart } from "@/lib/speak2kids/use-kids";
import {
  AudioNotice, CountGame, DrawDescribe, Flashcards, ListenButton, MatchGame, PointQuiz,
  QuickCheck, RolePlay, SequenceGame, SingAlong, SortGame, TprGame,
} from "@/components/speak2kids/KidsActivities";
import { KidsArtwork } from "@/components/speak2kids/KidsArtwork";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_authenticated/speak2kids/unidade/$unit/$part")({
  loader: ({ params }) => {
    const unit = getKidsUnit(Number(params.unit));
    if (!unit || (params.part !== "discover" && params.part !== "communicate")) throw notFound();
    return { unit, part: params.part as "discover" | "communicate" };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Unavailable — Speak2Kids" }, { name: "robots", content: "noindex" }] };
    const { unit, part } = loaderData;
    const title = `Unit ${unit.n} · ${part === "discover" ? "Discover" : "Communicate"} — ${unit.title} | Speak2Kids`;
    return {
      meta: [
        { title },
        { name: "description", content: unit.objective },
        { property: "og:title", content: title },
        { property: "og:description", content: unit.goal },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary" },
      ],
    };
  },
  component: KidsLesson,
});

function Block({ n, title, children, tone = "sky" }: { n?: number | string; title: string; children: React.ReactNode; tone?: "sky" | "pink" | "mint" | "sun" }) {
  const border = { sky: "border-kids-sky/50", pink: "border-kids-pink/50", mint: "border-kids-mint/60", sun: "border-kids-sun/60" }[tone];
  return (
    <section className={cn("border-t-2 py-5 sm:py-6", border)}>
      <h2 className="mb-3 text-lg font-extrabold text-foreground">{n !== undefined && <span className="mr-2 text-gold">{n}.</span>}{title}</h2>
      {children}
    </section>
  );
}

function KidsLesson() {
  const { unit, part } = Route.useLoaderData();
  const { data: rows, isLoading, error } = useKidsProgress();
  const p = part === "discover" ? 1 : 2;
  if (error) return <main className="p-8 text-center">Não foi possível carregar a aula. Atualize e tente novamente.</main>;
  if (isLoading || !rows) return <main className="p-10 text-center text-muted-foreground">Loading…</main>;
  const status = partStatus(rows, unit.n, p);
  if (status === "locked") {
    return (
      <main className="mx-auto max-w-xl px-6 py-20 text-center">
        <Lock className="mx-auto h-10 w-10 text-gold" />
        <h1 className="mt-4 text-2xl font-extrabold">This part is locked 🔒</h1>
        <p className="mt-2 text-muted-foreground">{p === 2 ? "Termine a Part 1 — Discover e o Quick Check para liberar." : "Termine a unidade anterior para liberar esta."}</p>
        <Button asChild className="mt-6 rounded-full bg-gold font-bold text-primary-foreground"><Link to="/speak2kids">Back to Speak2Kids</Link></Button>
      </main>
    );
  }
  const row = rows.find((r) => r.unit_number === unit.n && r.part === p);
  return (
    <main className="mx-auto w-full max-w-4xl space-y-5 px-4 py-8 sm:px-6">
      <Link to="/speak2kids" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"><ArrowLeft className="h-4 w-4" /> Back to Speak2Kids</Link>
      <header className="py-4">
        <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Unit {unit.n} · Part {p} — {p === 1 ? "Discover" : "Communicate"} {status === "completed" && "· ✅ Done"}</p>
        <h1 className="mt-1 flex items-start gap-3 text-3xl font-extrabold text-foreground"><span aria-hidden>{unit.emoji}</span>{unit.title}</h1>
        <p className="mt-1 text-sm text-muted-foreground">{unit.topic}</p>
        <div className="mt-5 max-w-sm"><KidsArtwork unit={unit.n} theme={unit.imageTheme} /></div>
      </header>
      {p === 1 ? <Discover key={`discover-${unit.n}`} unit={unit} done={status === "completed"} /> : <Communicate key={`communicate-${unit.n}`} unit={unit} done={status === "completed"} doneList={row?.activities_done ?? []} />}
    </main>
  );
}

/* ---------------- Part 1 ---------------- */

function Discover({ unit, done }: { unit: KidsUnit; done: boolean }) {
  const save = useSavePart();
  const questions = useMemo(() => buildQuickCheck(unit), [unit]);
  const [started, setStarted] = useState(false);
  const startOnce = () => { if (!done && !started) { setStarted(true); save.mutate({ unit: unit.n, part: 1 }); } };
  return (
    <>
      <Block title="🎯 Objetivo da aula" tone="sun">
        <p className="font-semibold">{unit.objective}</p>
        <p className="mt-1 text-sm text-muted-foreground">Meta de comunicação: {unit.goal}</p>
        <p className="mt-1 text-xs text-muted-foreground">Pré-requisitos: {unit.prerequisites} · Revisão: {unit.review}</p>
      </Block>
      <Block n={1} title="Warm-up"><p className="text-lg">{unit.warmUp}</p></Block>
      <Block n={2} title="Context"><p>{unit.context}</p></Block>
      <Block n={3} title="Vocabulary" tone="pink">
        <div className="mb-3"><AudioNotice /></div>
        <Flashcards words={unit.vocab} />
      </Block>
      <Block n={4} title="Expressions">
        <ul className="space-y-2">{unit.expressions.map((e) => <li key={e} className="flex items-center gap-2 text-lg font-bold">💬 {e} <ListenButton text={e} /></li>)}</ul>
      </Block>
      <Block n={5} title={`Grammar · ${unit.grammarFocus}`} tone="mint">
        <p className="text-sm text-muted-foreground">{unit.grammar}</p>
        <ul className="mt-2 space-y-1">{unit.examples.map((e) => <li key={e} className="flex items-center gap-2 font-bold">⭐ {e} <ListenButton text={e} /></li>)}</ul>
      </Block>
      <Block n={6} title={`Controlled Practice · ${unit.practice.label}`} tone="sun">
        <div onPointerDown={startOnce}><Practice unit={unit} /></div>
      </Block>
      <Block n={7} title={`Reading / Listening · ${unit.readingListening.kind === "song" ? "🎵 Song" : "📖 Story"}: ${unit.readingListening.title}`}>
        <ul className="space-y-1">{unit.readingListening.lines.map((l) => <li key={l} className="flex items-center gap-2 font-semibold">{l} <ListenButton text={l} /></li>)}</ul>
      </Block>
      <Block title="Writing" tone="mint"><WritingPractice unit={unit} /></Block>
      <Block title="Move & Say"><TprGame prompts={unit.tpr ?? unit.vocab.slice(0, 3).map((w) => `Point to: ${w.en}!`)} /></Block>
      <Block n={8} title={`Quick Check (${questions.length} perguntas)`} tone="pink">
        {done ? (
          <p className="font-bold">✅ Quick Check concluído. Você pode refazer quando quiser:</p>
        ) : <p className="mb-3 text-sm text-muted-foreground">Acerte pelo menos 75% para liberar a Part 2.</p>}
        <div className="mt-3"><QuickCheck key={unit.n} questions={questions} onPass={(c) => save.mutate({ unit: unit.n, part: 1, quick_check_score: c, completed: true })} /></div>
      </Block>
      {done && (
        <Button asChild size="lg" className="w-full rounded-full bg-gold font-extrabold text-primary-foreground">
          <Link to="/speak2kids/unidade/$unit/$part" params={{ unit: String(unit.n), part: "communicate" }}>Go to Part 2 · Communicate <ArrowRight className="ml-2 h-5 w-5" /></Link>
        </Button>
      )}
    </>
  );
}

function Practice({ unit }: { unit: KidsUnit }) {
  const t = unit.practice.type;
  if (t === "count") return <CountGame unit={unit} />;
  if (t === "sequence") return <SequenceGame words={unit.vocab} />;
  if (t === "tpr") return <TprGame prompts={unit.tpr ?? unit.expressions} />;
  if (t === "sort") return <SortGame bins={unit.practice.bins ?? []} pool={unit.vocab.slice(0, 6).map((w) => w.en)} />;
  return <MatchGame words={unit.vocab} seed={unit.n} />;
}

/* ---------------- Part 2 ---------------- */

function activityKind(name: string) {
  const n = name.toLowerCase();
  if (n.includes("certificate")) return "certificate";
  if (n.includes("sing") || n.includes("song")) return "sing";
  if (n.includes("point")) return "point";
  if (n.includes("bingo")) return "bingo";
  if (n.includes("sequence")) return "sequence";
  if (n.includes("draw")) return "draw";
  if (n.includes("simon") || n.includes("command") || n.includes("charades") || n.includes("mime") || n.includes("sounds") || n.includes("olympics") || n.includes("relay") || n.includes("hunt")) return "tpr";
  if (n.includes("count") || n.includes("number")) return "count";
  if (n.includes("match") || n.includes("cards") || n.includes("toy box") || n.includes("tree") || n.includes("check") || n.includes("dress")) return "match";
  return "roleplay";
}

function tprFor(unit: KidsUnit, name: string) {
  if (unit.tpr && /simon|command/i.test(name)) return unit.tpr;
  return unit.vocab.slice(0, 5).map((w) => `Show me: ${w.en}! ${w.emoji}`);
}

function Communicate({ unit, done, doneList }: { unit: KidsUnit; done: boolean; doneList: string[] }) {
  const save = useSavePart();
  const all = [...unit.activities, "Communication Challenge"];
  const finished = all.every((a) => doneList.includes(a));
  const mark = (a: string) => {
    if (doneList.includes(a)) return;
    save.mutate({ unit: unit.n, part: 2, activities_done: [...doneList, a] });
  };
  return (
    <>
      <Block title="🔁 Review" tone="sun">
        <p className="mb-3 text-sm text-muted-foreground">Retomada rápida da Part 1:</p>
        <div className="flex flex-wrap gap-2">{unit.vocab.map((w) => <span key={w.en} className="rounded-lg bg-muted/50 px-3 py-1 font-bold">{w.emoji} {w.en}</span>)}</div>
        <p className="mt-3 font-semibold">⭐ {unit.examples.join(" · ")}</p>
        <div className="mt-3"><AudioNotice /></div>
      </Block>
      {unit.activities.map((a, k) => {
        const kind = activityKind(a);
        const ok = doneList.includes(a);
        return (
          <Block key={a} n={k + 1} title={`${a} ${ok ? "✅" : ""}`} tone={(["sky", "pink", "mint", "sun"] as const)[k % 4] ?? "sky"}>
            {kind === "sing" && <SingAlong lines={unit.readingListening.lines} onDone={() => mark(a)} />}
            {kind === "point" && <PointQuiz words={unit.vocab} mode="point" seed={unit.n + k} onDone={() => mark(a)} />}
            {kind === "bingo" && <PointQuiz words={unit.vocab} mode="bingo" seed={unit.n + k} onDone={() => mark(a)} />}
            {kind === "sequence" && <SequenceGame words={unit.vocab} onDone={() => mark(a)} />}
            {kind === "draw" && <DrawDescribe unit={unit} onDone={() => mark(a)} />}
            {kind === "tpr" && <TprGame prompts={tprFor(unit, a)} onDone={() => mark(a)} />}
            {kind === "count" && <CountGame unit={unit} onDone={() => mark(a)} />}
            {kind === "match" && <MatchGame words={unit.vocab} seed={unit.n * 3 + k} onDone={() => mark(a)} />}
            {kind === "roleplay" && <RolePlay unit={unit} onDone={() => mark(a)} />}
            {kind === "certificate" && (
              finished || done ? (
                <Button asChild className="rounded-full bg-gold font-bold text-primary-foreground"><Link to="/speak2kids/certificado"><Award className="mr-2 h-4 w-4" /> View certificate</Link></Button>
              ) : (
                <div><p className="mb-2 text-sm">Complete as outras atividades e o desafio final para celebrar! 🎉</p>
                  <Button variant="outline" className="rounded-full" onClick={() => mark(a)} disabled={ok}>{ok ? "Ready! 🎉" : "I'm ready to celebrate!"}</Button></div>
              )
            )}
          </Block>
        );
      })}
      <Block title="🏅 Communication Challenge" tone="pink">
        <p className="text-lg font-bold">{unit.challenge}</p>
        <ChallengeChecklist unit={unit} done={doneList.includes("Communication Challenge")} onDone={() => mark("Communication Challenge")} />
      </Block>
      <Block title="📋 Lesson Review" tone="mint">
        <p>Hoje você aprendeu: <strong>{unit.vocab.slice(0, 5).map((w) => w.en).join(", ")}...</strong> e <strong>{unit.grammarFocus}</strong>.</p>
        {done ? (
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-kids-sun/40 px-4 py-2 text-lg font-extrabold">🌟 Sticker: {unit.title}</span>
            {unit.n < KIDS_UNITS_TOTAL ? (
              <Button asChild className="rounded-full bg-gold font-bold text-primary-foreground">
                <Link to="/speak2kids/unidade/$unit/$part" params={{ unit: String(unit.n + 1), part: "discover" }}>Next: Unit {unit.n + 1} <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            ) : (
              <Button asChild className="rounded-full bg-gold font-bold text-primary-foreground"><Link to="/speak2kids/certificado"><Award className="mr-2 h-4 w-4" /> Super Speaker certificate</Link></Button>
            )}
          </div>
        ) : (
          <div className="mt-3">
            <p className="text-sm text-muted-foreground">Atividades concluídas: {all.filter((a) => doneList.includes(a)).length}/{all.length}</p>
            <Button disabled={!finished || save.isPending} className="mt-2 rounded-full bg-gold font-extrabold text-primary-foreground"
              onClick={() => save.mutate({ unit: unit.n, part: 2, completed: true })}>
              <CheckCircle2 className="mr-2 h-4 w-4" /> Finish unit & get my sticker
            </Button>
          </div>
        )}
      </Block>
    </>
  );
}

function ChallengeChecklist({ unit, done, onDone }: { unit: KidsUnit; done: boolean; onDone: () => void }) {
  return (
    <div className="mt-3 space-y-2">
      <p className="text-sm text-muted-foreground">Fale cada frase em voz alta para um adulto ou boneco. Não gravamos a voz — marque quando terminar.</p>
      <ul className="space-y-1">{unit.challengeFrames.map((f) => <li key={f} className="flex items-center gap-2 font-bold">🗣️ {f} <ListenButton text={f.replace(/_+/g, "")} /></li>)}</ul>
      <Button disabled={done} onClick={onDone} className="rounded-full bg-kids-sun font-bold text-foreground">{done ? "Challenge done! ✅" : "I did the challenge! ✅"}</Button>
    </div>
  );
}

function WritingPractice({ unit }: { unit: KidsUnit }) {
  const target = unit.n === 20 ? "I can swim." : unit.examples[0] ?? unit.expressions[0] ?? "Hello!";
  const [answer, setAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const correct = answer.trim().toLowerCase().replace(/[.!?]/g, "") === target.toLowerCase().replace(/[.!?]/g, "");
  return <div className="space-y-3"><p className="text-sm text-muted-foreground">Leia e escreva a frase. Um adulto pode ajudar.</p><p className="font-bold">{target}</p><Input aria-label="Write the sentence" value={answer} maxLength={160} onChange={(e) => { setAnswer(e.target.value); setChecked(false); }} /><Button variant="outline" disabled={!answer.trim()} onClick={() => setChecked(true)}>Check writing</Button>{checked && <p role="status">{correct ? "Great writing! 🌟" : "Confira as palavras e tente novamente 🙂"}</p>}</div>;
}
