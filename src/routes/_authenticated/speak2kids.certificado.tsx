import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { KIDS_UNITS_TOTAL } from "@/lib/speak2kids/curriculum";
import { unitStatus } from "@/lib/speak2kids/progress";
import { useKidsProfile, useKidsProgress } from "@/lib/speak2kids/use-kids";

export const Route = createFileRoute("/_authenticated/speak2kids/certificado")({
  head: () => ({
    meta: [
      { title: "Super Speaker Certificate — Speak2Kids" },
      { name: "description", content: "Certificado de conclusão do Speak2Kids Beginner Kids English." },
      { property: "og:title", content: "Super Speaker Certificate — Speak2Kids" },
      { property: "og:description", content: "Certificado de conclusão das 20 unidades do Speak2Kids Beginner." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: KidsCertificate,
});

function KidsCertificate() {
  const { data: rows, isLoading } = useKidsProgress();
  const { data: profile } = useKidsProfile();
  if (isLoading || !rows) return <main className="p-10 text-center text-muted-foreground">Loading…</main>;
  const finished = Array.from({ length: KIDS_UNITS_TOTAL }, (_, i) => i + 1).every((n) => unitStatus(rows, n) === "completed");
  const completedAt = rows.find((r) => r.unit_number === 20 && r.part === 2)?.completed_at;
  const date = completedAt ? new Date(completedAt).toLocaleDateString("pt-BR") : "";
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-8">
      <Link to="/speak2kids" className="inline-flex items-center gap-1 text-sm text-muted-foreground print:hidden"><ArrowLeft className="h-4 w-4" /> Back to Speak2Kids</Link>
      {!finished ? (
        <div className="mt-10 rounded-3xl border-2 border-kids-sun/60 bg-card p-8 text-center">
          <p className="text-5xl">🏆</p>
          <h1 className="mt-3 text-2xl font-extrabold">Your certificate is waiting!</h1>
          <p className="mt-2 text-muted-foreground">Conclua a Unit 20 — Super Speaker Show! para receber o certificado.</p>
        </div>
      ) : (
        <>
          <section className="mt-6 rounded-[2rem] border-4 border-gold bg-gradient-to-br from-kids-sky/20 via-card to-kids-sun/25 p-8 text-center sm:p-12">
            <p className="text-xs font-bold  text-muted-foreground uppercase">Speak2Kids · Speak2Co</p>
            <h1 className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">Super Speaker Certificate 🌟</h1>
            <p className="mt-6 text-muted-foreground">This certificate is proudly given to</p>
            <p className="mt-2 break-words text-3xl font-extrabold text-gold">{profile?.avatar} {profile?.nickname ?? "Super Kid"}</p>
            <p className="mt-6 text-lg">for completing all {KIDS_UNITS_TOTAL} units of <strong>Beginner Kids English</strong> (Pre-A1 → A1).</p>
            <p className="mt-2 text-2xl">I am a Super Speaker! 🎤🏆</p>
            <p className="mt-6 text-sm text-muted-foreground">{date}</p>
          </section>
          <Button onClick={() => window.print()} className="mt-6 rounded-full bg-gold font-bold text-primary-foreground print:hidden"><Printer className="mr-2 h-4 w-4" /> Print certificate</Button>
        </>
      )}
    </main>
  );
}
