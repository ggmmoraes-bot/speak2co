import { createFileRoute, Link } from "@tanstack/react-router";
import { LifeBuoy, HelpCircle, MessageSquare } from "lucide-react";
import { AltHeading } from "@/components/AltHeading";
import { HELP_GUIDE } from "@/lib/support-content";

export const Route = createFileRoute("/_authenticated/ajuda")({
  head: () => {
    const title = "Help Center | Speak2Co";
    const description =
      "Guia de uso da plataforma Speak2Co e suporte técnico: primeiros passos, cursos, prática com IA e solução de problemas.";
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
  component: HelpCenterPage,
});

function HelpCenterPage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-10">
      <header>
        <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1 text-xs font-semibold text-gold">
          <LifeBuoy className="h-3.5 w-3.5" /> Support &amp; Community
        </span>
        <AltHeading text="Help Center" className="mt-4 text-3xl font-bold sm:text-4xl" />
        <p className="mt-2 text-sm text-muted-foreground">
          How to use the platform and how to solve the most common issues.
          <span className="block">Como usar a plataforma e resolver os problemas mais comuns.</span>
        </p>
      </header>

      <div className="mt-8 space-y-4">
        {HELP_GUIDE.map((article) => (
          <section key={article.id} className="rounded-3xl border border-border bg-card/60 p-6">
            <h2 className="text-lg font-semibold text-foreground">
              {article.title}{" "}
              <span className="text-sm font-normal text-muted-foreground">
                ({article.titlePt})
              </span>
            </h2>
            <ol className="mt-3 space-y-2">
              {article.steps.map((step, i) => (
                <li key={step} className="flex gap-3 text-sm text-foreground/85">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-xs font-bold text-gold">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          to="/faq"
          className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-5 py-2 text-sm font-semibold text-gold transition hover:bg-gold/10"
        >
          <HelpCircle className="h-4 w-4" /> Go to FAQ
        </Link>
        <Link
          to="/central-de-mensagens"
          className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
        >
          <MessageSquare className="h-4 w-4" /> Talk to the Founder
        </Link>
      </div>
    </main>
  );
}
