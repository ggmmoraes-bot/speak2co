import { createFileRoute } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { NotebookPen, Target } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { GiseleActivityScreen } from "@/components/gisele/GiseleActivityScreen";
import {
  addGiseleNote,
  getGiseleFocusAreas,
  getGiseleNotes,
} from "@/lib/gisele-activities.functions";

export const Route = createFileRoute("/_authenticated/gisele/pontos-fracos")({
  component: WeaknessPage,
});

function WeaknessPage() {
  const queryClient = useQueryClient();
  const focusFn = useServerFn(getGiseleFocusAreas);
  const notesFn = useServerFn(getGiseleNotes);
  const addNoteFn = useServerFn(addGiseleNote);

  const { data: focus } = useQuery({ queryKey: ["gisele-focus"], queryFn: () => focusFn() });
  const { data: notes } = useQuery({ queryKey: ["gisele-notes"], queryFn: () => notesFn() });

  async function saveNote() {
    try {
      const note = await addNoteFn();
      if (!note) {
        toast.info("Pratique um pouco mais e eu escrevo a próxima anotação.");
        return;
      }
      await queryClient.invalidateQueries({ queryKey: ["gisele-notes"] });
      toast.success("Anotação salva no seu caderno da GiseleAI.");
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Não consegui salvar a anotação.");
    }
  }

  return (
    <div className="flex-1">
      <section className="mx-auto w-full max-w-3xl space-y-4 px-6 pt-10">
        <div className="rounded-2xl border border-gold/25 bg-secondary/25 p-5">
          <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-gold">
            <Target className="h-4 w-4" /> My Focus
          </h2>
          {focus && focus.areas.length > 0 ? (
            <ul className="mt-3 space-y-2">
              {focus.areas.map((a) => (
                <li key={a.area} className="rounded-xl border border-border/60 bg-background/40 p-3">
                  <p className="text-sm font-semibold text-foreground">{a.area}</p>
                  <p className="text-xs text-muted-foreground">{a.evidence}</p>
                  <p className="text-[11px] text-gold">{a.count} observations from your sessions</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-2 text-sm text-muted-foreground">
              Practice with me and your real focus areas appear here.
            </p>
          )}
        </div>

        <div className="rounded-2xl border border-gold/25 bg-secondary/25 p-5">
          <div className="flex items-center justify-between gap-3">
            <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-gold">
              <NotebookPen className="h-4 w-4" /> My Notes
            </h2>
            <Button size="sm" variant="outline" onClick={saveNote} className="rounded-full text-xs">
              Save a note from my practice
            </Button>
          </div>
          {notes && notes.length > 0 ? (
            <ul className="mt-3 space-y-2">
              {notes.map((n) => (
                <li key={n.id} className="rounded-xl border border-border/60 bg-background/40 p-3">
                  <p className="text-sm text-foreground">{n.content}</p>
                  <p className="text-[11px] text-muted-foreground">
                    {new Date(n.created_at).toLocaleDateString("pt-BR")}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-2 text-sm text-muted-foreground">No notes yet.</p>
          )}
        </div>
      </section>

      <GiseleActivityScreen
        kind="weakness"
        titleEn="Work on my weak points"
        titlePt="Trabalhar meus pontos fracos"
        intro="I'll pick the exact point that is holding your English back right now."
        ctaLabel="Work on my weak points"
      />
    </div>
  );
}
