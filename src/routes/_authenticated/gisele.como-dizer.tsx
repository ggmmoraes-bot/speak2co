import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Loader2, Sparkles, Wand2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  giseleCorrectMe,
  giseleRephrase,
  type CorrectionResult,
  type RephraseResult,
} from "@/lib/gisele-activities.functions";

export const Route = createFileRoute("/_authenticated/gisele/como-dizer")({
  component: HowWouldGiseleSayIt,
});

function Line({ label, value }: { label: string; value: string | null }) {
  if (!value) return null;
  return (
    <div className="rounded-xl border border-border/60 bg-background/40 p-3">
      <p className="text-xs font-semibold uppercase tracking-wide text-gold">{label}</p>
      <p className="text-sm text-foreground">{value}</p>
    </div>
  );
}

function HowWouldGiseleSayIt() {
  const rephraseFn = useServerFn(giseleRephrase);
  const correctFn = useServerFn(giseleCorrectMe);

  const [text, setText] = useState("");
  const [rephrased, setRephrased] = useState<RephraseResult | null>(null);
  const [correction, setCorrection] = useState<CorrectionResult | null>(null);
  const [busy, setBusy] = useState<"say" | "correct" | null>(null);

  async function run(mode: "say" | "correct") {
    if (!text.trim()) {
      toast.error("Escreva o que você quer dizer.");
      return;
    }
    try {
      setBusy(mode);
      if (mode === "say") {
        setCorrection(null);
        setRephrased(await rephraseFn({ data: { text: text.trim() } }));
      } else {
        setRephrased(null);
        setCorrection(await correctFn({ data: { text: text.trim() } }));
      }
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Não consegui responder agora.");
    } finally {
      setBusy(null);
    }
  }

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 space-y-6 px-6 py-10">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold text-foreground">How Would Gisele Say It?</h1>
        <p className="text-sm italic text-muted-foreground">
          Escreva o que você quer expressar — eu mostro a versão natural em inglês.
        </p>
        <p className="text-sm text-muted-foreground">
          Você também pode pedir <span className="font-semibold text-gold">Correct me</span> para
          revisar algo que disse.
        </p>
      </header>

      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Ex.: Quero dizer que vou atrasar cinco minutos na reunião."
        className="min-h-28"
      />

      <div className="flex flex-wrap gap-2">
        <Button onClick={() => run("say")} disabled={busy !== null} className="btn-gold gap-2 rounded-full font-semibold">
          {busy === "say" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
          How would Gisele say it?
        </Button>
        <Button
          variant="outline"
          onClick={() => run("correct")}
          disabled={busy !== null}
          className="gap-2 rounded-full"
        >
          {busy === "correct" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Wand2 className="h-4 w-4" />}
          Correct me
        </Button>
      </div>

      {rephrased && (
        <section className="space-y-3 rounded-2xl border border-gold/25 bg-secondary/25 p-5">
          <Line label="Natural English" value={rephrased.naturalEnglish} />
          <Line label="Casual English" value={rephrased.casualEnglish} />
          <Line label="Professional English" value={rephrased.professionalEnglish} />
          <Line label="More natural English" value={rephrased.moreNaturalEnglish} />
          <p className="text-sm text-muted-foreground">{rephrased.note}</p>
        </section>
      )}

      {correction && (
        <section className="space-y-3 rounded-2xl border border-gold/25 bg-secondary/25 p-5">
          {correction.worthCorrecting ? (
            <>
              <Line label="You said" value={correction.youSaid} />
              <Line label="A more natural way" value={correction.betterWay} />
              <Line label="Why" value={correction.why} />
            </>
          ) : (
            <p className="text-sm text-foreground">{correction.why}</p>
          )}
        </section>
      )}
    </main>
  );
}
