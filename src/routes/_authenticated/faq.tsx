import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { AltHeading } from "@/components/AltHeading";
import { FAQ_ITEMS } from "@/lib/support-content";

export const Route = createFileRoute("/_authenticated/faq")({
  head: () => {
    const title = "FAQ | Speak2Co";
    const description =
      "Perguntas frequentes da Speak2Co: planos, cursos, certificados, recursos de IA e linhas de produto.";
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
  component: FaqPage,
});

function FaqPage() {
  const [group, setGroup] = useState("all");
  const [open, setOpen] = useState<string | null>(null);

  const groups = useMemo(() => Array.from(new Set(FAQ_ITEMS.map((i) => i.group))), []);
  const items = FAQ_ITEMS.filter((i) => group === "all" || i.group === group);

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-10">
      <header>
        <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1 text-xs font-semibold text-gold">
          <HelpCircle className="h-3.5 w-3.5" /> Support &amp; Community
        </span>
        <AltHeading text="FAQ" className="mt-4 text-3xl font-bold sm:text-4xl" />
        <p className="mt-2 text-sm text-muted-foreground">
          Quick answers about plans, courses, certificates, AI and product lines.
          <span className="block">
            Respostas rápidas sobre planos, cursos, certificados, IA e linhas de produto.
          </span>
        </p>
      </header>

      <div className="mt-6 flex flex-wrap gap-2">
        {["all", ...groups].map((g) => (
          <button
            key={g}
            onClick={() => setGroup(g)}
            className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
              group === g
                ? "border-gold bg-gold/15 text-gold"
                : "border-border text-muted-foreground hover:border-gold/40"
            }`}
          >
            {g === "all" ? "All topics" : g}
          </button>
        ))}
      </div>

      <div className="mt-6 space-y-3">
        {items.map((item) => {
          const isOpen = open === item.q;
          return (
            <article key={item.q} className="overflow-hidden rounded-2xl border border-border bg-card/60">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : item.q)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="text-sm font-semibold text-foreground">{item.q}</span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-gold transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isOpen && (
                <p className="border-t border-border px-5 py-4 text-sm text-foreground/85">
                  {item.a}
                </p>
              )}
            </article>
          );
        })}
      </div>
    </main>
  );
}
