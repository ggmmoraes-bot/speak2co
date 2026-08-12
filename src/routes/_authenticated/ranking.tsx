import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { Button } from "@/components/ui/button";
import { getFluencyLeaderboard, type LeaderboardRow } from "@/lib/ranking.functions";

export const Route = createFileRoute("/_authenticated/ranking")({
  component: RankingPage,
  head: () => ({
    meta: [
      { title: "Ranking de fluência | Speak2Co" },
      {
        name: "description",
        content:
          "Veja a classificação de fluência da Speak2Co com pontos do teste de nivelamento, das conversas com o AI Teacher e das simulações de entrevista.",
      },
      { property: "og:title", content: "Ranking de fluência | Speak2Co" },
      {
        property: "og:description",
        content: "Sua pontuação de fluência somando teste, AI Teacher, entrevistas e exercícios.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const MEDALS = ["🥇", "🥈", "🥉"];

function Points({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-xl border border-border bg-background/40 px-3 py-2 text-center">
      <p className="text-[10px] tracking-widest text-muted-foreground uppercase">{label}</p>
      <p className="text-sm font-semibold text-foreground">{value}</p>
    </div>
  );
}

function Row({ row, position, isMe }: { row: LeaderboardRow; position: number; isMe: boolean }) {
  return (
    <li
      className={`flex flex-wrap items-center gap-4 rounded-2xl border p-4 ${
        isMe ? "border-accent bg-accent/10" : "border-border bg-card/60"
      }`}
    >
      <span className="w-10 text-center text-lg font-bold text-accent">
        {MEDALS[position - 1] ?? position}
      </span>
      <div className="min-w-40 flex-1">
        <p className="font-semibold text-foreground">
          {row.display_name}
          {isMe && <span className="ml-2 text-xs text-accent">você</span>}
        </p>
        <p className="text-xs text-muted-foreground">
          Nível {row.english_level ?? "—"} · {row.total_points} pontos
        </p>
      </div>
      <div className="grid grid-cols-4 gap-2">
        <Points label="Teste" value={row.placement_points} />
        <Points label="Professor" value={row.chat_points} />
        <Points label="Entrevistas" value={row.interview_points} />
        <Points label="Exercícios" value={row.exercise_points} />
      </div>
    </li>
  );
}

function RankingPage() {
  const fetchLeaderboard = useServerFn(getFluencyLeaderboard);
  const { data, isLoading } = useQuery({
    queryKey: ["fluency-leaderboard"],
    queryFn: () => fetchLeaderboard(),
  });

  return (
    <main className="min-h-screen px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs tracking-widest text-muted-foreground uppercase">Speak2Co</p>
        <h1 className="mt-2 text-3xl font-bold text-foreground">Ranking de fluência</h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          A pontuação soma o seu melhor resultado no teste de nivelamento, a prática com o Professor
          de IA, as simulações do Speak2Hire e os exercícios diários concluídos.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild variant="outline" className="rounded-full font-semibold">
            <Link to="/painel">Voltar ao painel</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full font-semibold">
            <Link to="/teste-de-nivel">Fazer o teste</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full font-semibold">
            <Link to="/professor">Praticar com o AI Teacher</Link>
          </Button>
        </div>

        {data?.me && (
          <div className="glow-gold mt-8 rounded-2xl border border-accent bg-card/80 p-6">
            <p className="text-xs tracking-widest text-muted-foreground uppercase">Sua posição</p>
            <p className="mt-1 text-2xl font-bold text-foreground">
              #{data.me.position} · {data.me.total_points} pontos
            </p>
          </div>
        )}

        <div className="mt-8">
          {isLoading && <p className="text-sm text-muted-foreground">Carregando ranking…</p>}

          {!isLoading && (data?.rows.length ?? 0) === 0 && (
            <p className="rounded-2xl border border-border bg-card/60 p-6 text-sm text-muted-foreground">
              Ainda não há pontuação registrada. Faça o teste de nivelamento ou converse com o
              AI Teacher para entrar no ranking.
            </p>
          )}

          <ul className="space-y-3">
            {data?.rows.map((row, i) => (
              <Row
                key={row.user_id}
                row={row}
                position={i + 1}
                isMe={row.user_id === data.me?.user_id}
              />
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
