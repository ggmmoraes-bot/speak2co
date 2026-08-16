import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Users, Trophy, CalendarDays, Share2, Check } from "lucide-react";
import { toast } from "sonner";
import { AltHeading } from "@/components/AltHeading";
import { COMMUNITY_CHALLENGES, PRACTICE_MEETINGS } from "@/lib/support-content";

export const Route = createFileRoute("/_authenticated/comunidade")({
  head: () => {
    const title = "Community | Speak2Co";
    const description =
      "Comunidade Speak2Co: desafios de fala, vocabulário e escuta, compartilhamento de conquistas e encontros de prática.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: CommunityPage,
});

function CommunityPage() {
  const [joined, setJoined] = useState<string[]>([]);

  async function share(title: string) {
    const text = `Estou no ${title} da Speak2Co — English for Every Opportunity!`;
    try {
      if (typeof navigator !== "undefined" && navigator.share) {
        await navigator.share({ title: "Speak2Co", text, url: "https://speak2co.lovable.app" });
        return;
      }
      await navigator.clipboard.writeText(`${text} https://speak2co.lovable.app`);
      toast.success("Conquista copiada! Cole onde quiser compartilhar.");
    } catch {
      toast.error("Não foi possível compartilhar agora.");
    }
  }

  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-10">
      <header>
        <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1 text-xs font-semibold text-gold">
          <Users className="h-3.5 w-3.5" /> Support &amp; Community
        </span>
        <AltHeading text="Community" className="mt-4 text-3xl font-bold sm:text-4xl" />
        <p className="mt-2 text-sm text-muted-foreground">
          Challenges, achievements and live practice with other Speak2Co students.
          <span className="block">
            Desafios, conquistas e prática ao vivo com outros alunos da Speak2Co.
          </span>
        </p>
      </header>

      <section className="mt-8">
        <h2 className="flex items-center gap-2 text-xl font-semibold text-foreground">
          <Trophy className="h-5 w-5 text-gold" /> Challenges
        </h2>
        <div className="mt-4 space-y-4">
          {COMMUNITY_CHALLENGES.map((c) => {
            const isJoined = joined.includes(c.id);
            return (
              <article key={c.id} className="rounded-3xl border border-border bg-card/60 p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold tracking-wide text-gold uppercase">
                      {c.days} days
                    </p>
                    <h3 className="text-lg font-semibold text-foreground">
                      {c.title}{" "}
                      <span className="text-sm font-normal text-muted-foreground">
                        ({c.titlePt})
                      </span>
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{c.description}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        setJoined((j) => (j.includes(c.id) ? j.filter((x) => x !== c.id) : [...j, c.id]))
                      }
                      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition ${
                        isJoined
                          ? "border border-gold/60 bg-gold/10 text-gold"
                          : "bg-gold text-primary-foreground hover:opacity-90"
                      }`}
                    >
                      {isJoined ? <Check className="h-3.5 w-3.5" /> : null}
                      {isJoined ? "Joined" : "Join challenge"}
                    </button>
                    <button
                      type="button"
                      onClick={() => share(c.title)}
                      className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold text-muted-foreground transition hover:border-gold/40"
                    >
                      <Share2 className="h-3.5 w-3.5" /> Share
                    </button>
                  </div>
                </div>
                <ul className="mt-4 space-y-1">
                  {c.tasks.map((t) => (
                    <li key={t} className="text-xs text-foreground/80">
                      · {t}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="flex items-center gap-2 text-xl font-semibold text-foreground">
          <CalendarDays className="h-5 w-5 text-gold" /> Practice meetings
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {PRACTICE_MEETINGS.map((m) => (
            <article key={m.id} className="rounded-3xl border border-border bg-card/60 p-6">
              <h3 className="text-base font-semibold text-foreground">
                {m.title}{" "}
                <span className="text-xs font-normal text-muted-foreground">({m.titlePt})</span>
              </h3>
              <p className="mt-1 text-xs font-semibold text-gold">{m.when}</p>
              <p className="mt-2 text-sm text-muted-foreground">{m.description}</p>
            </article>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Os convites dos encontros são enviados na{" "}
          <Link to="/central-de-mensagens" className="link-gold font-semibold">
            Central de mensagens
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
