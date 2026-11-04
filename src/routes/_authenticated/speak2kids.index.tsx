import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, Award, CheckCircle2, Lock, PlayCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { KIDS_AVATARS, KIDS_UNITS, KIDS_UNITS_TOTAL } from "@/lib/speak2kids/curriculum";
import { nextPart, partStatus, unitStatus, type PartStatus } from "@/lib/speak2kids/progress";
import { useKidsProfile, useKidsProgress, useSaveKidsProfile } from "@/lib/speak2kids/use-kids";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_authenticated/speak2kids/")({
  head: () => ({
    meta: [
      { title: "Speak2Kids — Beginner Kids English (7–10 anos)" },
      { name: "description", content: "20 unidades lúdicas de inglês para crianças de 7 a 10 anos, com jogos, músicas, TPR, stickers e certificado." },
      { property: "og:title", content: "Speak2Kids — Beginner Kids English" },
      { property: "og:description", content: "Inglês para crianças com jogos, músicas e conquistas, do Pre-A1 ao A1." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: KidsDashboard,
});

const STATUS_LABEL: Record<PartStatus, string> = {
  locked: "Locked",
  available: "Start",
  in_progress: "In progress",
  completed: "Done",
};

function KidsDashboard() {
  const { data: rows = [] } = useKidsProgress();
  const { data: profile, isFetched } = useKidsProfile();
  const save = useSaveKidsProfile();
  const [nick, setNick] = useState("");
  const [avatar, setAvatar] = useState(KIDS_AVATARS[0]);
  const [editing, setEditing] = useState(false);
  useEffect(() => {
    if (profile) { setNick(profile.nickname); setAvatar(profile.avatar); }
  }, [profile]);

  const unitsDone = KIDS_UNITS.filter((u) => unitStatus(rows, u.n) === "completed").length;
  const partsDone = rows.filter((r) => r.completed).length;
  const next = nextPart(rows, KIDS_UNITS_TOTAL);
  const showProfileForm = isFetched && (!profile || editing);

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6">
      <Link to="/painel" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> Back to dashboard
      </Link>

      <section className="mt-4 overflow-hidden rounded-[2rem] border-2 border-kids-sun/50 bg-gradient-to-br from-kids-sky/25 via-kids-pink/15 to-kids-sun/25 p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Speak2Kids · 7–10 anos · Pre-A1 → A1</p>
            <h1 className="mt-1 text-3xl font-extrabold text-foreground sm:text-4xl">Beginner Kids English 🎈</h1>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">20 unidades, 40 partes: descubra (Discover) e depois converse (Communicate) com jogos, músicas e muita ação!</p>
          </div>
          {profile && !editing && (
            <button type="button" onClick={() => setEditing(true)} className="flex items-center gap-3 rounded-3xl bg-card/80 px-4 py-3">
              <span className="text-4xl">{profile.avatar}</span>
              <span className="text-left"><span className="block font-extrabold">{profile.nickname}</span><span className="text-xs text-muted-foreground">Edit</span></span>
            </button>
          )}
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <Stat label="Units completed" value={`${unitsDone}/${KIDS_UNITS_TOTAL}`} />
          <Stat label="Parts completed" value={`${partsDone}/40`} />
          <Stat label="Stickers" value={`${unitsDone} 🌟`} />
        </div>
        <div className="mt-4 h-3 overflow-hidden rounded-full bg-card/70">
          <div className="h-full rounded-full bg-gradient-to-r from-kids-mint to-kids-sun" style={{ width: `${(partsDone / 40) * 100}%` }} />
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {next ? (
            <Button asChild size="lg" className="rounded-full bg-gold font-extrabold text-primary-foreground hover:opacity-90">
              <Link to="/speak2kids/unidade/$unit/$part" params={{ unit: String(next.unit), part: next.part === 1 ? "discover" : "communicate" }}>
                <PlayCircle className="mr-2 h-5 w-5" /> Continue · Unit {next.unit} {next.part === 1 ? "Discover" : "Communicate"}
              </Link>
            </Button>
          ) : (
            <Button asChild size="lg" className="rounded-full bg-gold font-extrabold text-primary-foreground">
              <Link to="/speak2kids/certificado"><Award className="mr-2 h-5 w-5" /> View certificate</Link>
            </Button>
          )}
        </div>
      </section>

      {showProfileForm && (
        <section className="mt-6 rounded-3xl border-2 border-kids-sky/40 bg-card p-5">
          <h2 className="text-lg font-extrabold">Crie o perfil da criança</h2>
          <p className="text-sm text-muted-foreground">Só um apelido e um avatar — não pedimos nome completo, idade, escola ou contatos.</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {KIDS_AVATARS.map((a) => (
              <button key={a} type="button" onClick={() => setAvatar(a)} aria-label={`avatar ${a}`}
                className={cn("h-12 w-12 rounded-2xl border-2 text-3xl", avatar === a ? "border-gold bg-gold/20" : "border-border")}>{a}</button>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <Input value={nick} maxLength={20} onChange={(e) => setNick(e.target.value)} placeholder="Nickname (ex.: Super Lu)" className="max-w-xs" />
            <Button disabled={!nick.trim() || save.isPending} className="rounded-full bg-gold font-bold text-primary-foreground"
              onClick={() => save.mutate({ nickname: nick.trim(), avatar }, { onSuccess: () => setEditing(false) })}>Save</Button>
          </div>
        </section>
      )}

      <section className="mt-8">
        <h2 className="mb-4 text-xl font-extrabold">My Units</h2>
        <ol className="grid gap-4 sm:grid-cols-2">
          {KIDS_UNITS.map((u) => {
            const st = unitStatus(rows, u.n);
            return (
              <li key={u.n} className={cn("rounded-3xl border-2 bg-card p-4", st === "completed" ? "border-kids-mint" : st === "locked" ? "border-border opacity-70" : "border-kids-sun/60")}>
                <div className="flex items-start gap-3">
                  <span className="text-4xl" aria-hidden>{u.emoji}</span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold text-muted-foreground">UNIT {u.n} {st === "completed" && "· 🌟 Sticker"}</p>
                    <h3 className="font-extrabold text-foreground">{u.title}</h3>
                    <p className="text-xs text-muted-foreground">{u.topic}</p>
                  </div>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {([1, 2] as const).map((p) => {
                    const ps = partStatus(rows, u.n, p);
                    const label = p === 1 ? "Part 1 · Discover" : "Part 2 · Communicate";
                    if (ps === "locked") return (
                      <span key={p} className="flex items-center gap-1 rounded-2xl bg-muted/50 px-3 py-2 text-xs font-semibold text-muted-foreground"><Lock className="h-3 w-3" /> {label}</span>
                    );
                    return (
                      <Link key={p} to="/speak2kids/unidade/$unit/$part" params={{ unit: String(u.n), part: p === 1 ? "discover" : "communicate" }}
                        className={cn("flex items-center gap-1 rounded-2xl px-3 py-2 text-xs font-bold", ps === "completed" ? "bg-kids-mint/20" : "bg-kids-sun/25")}>
                        {ps === "completed" ? <CheckCircle2 className="h-3 w-3" /> : <PlayCircle className="h-3 w-3" />} {label} · {STATUS_LABEL[ps]}
                      </Link>
                    );
                  })}
                </div>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="mt-8 flex gap-3 rounded-3xl border border-border bg-card/60 p-5 text-sm text-muted-foreground">
        <ShieldCheck className="h-5 w-5 shrink-0 text-gold" />
        <p><strong className="text-foreground">Para pais e responsáveis:</strong> o Speak2Kids não tem chat entre crianças, perfis públicos, ranking, anúncios nem links externos. Guardamos apenas apelido, avatar e progresso. A voz e os desenhos da criança não são gravados nem enviados.</p>
      </section>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl bg-card/80 px-4 py-3">
      <p className="text-xs font-semibold text-muted-foreground">{label}</p>
      <p className="text-2xl font-extrabold text-foreground">{value}</p>
    </div>
  );
}
