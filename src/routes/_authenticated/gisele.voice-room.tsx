import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { toast } from "sonner";
import { Loader2, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CONVERSATION_CONTEXTS } from "@/lib/gisele-contexts";
import { createGiseleThread } from "@/lib/gisele.functions";
import { AiVoiceDisclosure } from "@/components/AiVoiceDisclosure";
import { isBrandVoice, useVoiceSettings } from "@/lib/use-voice-settings";

export const Route = createFileRoute("/_authenticated/gisele/voice-room")({
  component: VoiceRoomPage,
});

function VoiceRoomPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const createFn = useServerFn(createGiseleThread);
  const { settings: voice } = useVoiceSettings();
  const [loading, setLoading] = useState<string | null>(null);

  async function start(id: string) {
    const ctx = CONVERSATION_CONTEXTS.find((c) => c.id === id);
    if (!ctx) return;
    try {
      setLoading(id);
      const thread = await createFn({
        data: { focus: ctx.focus, title: ctx.titleEn, contextId: ctx.id },
      });
      await queryClient.invalidateQueries({ queryKey: ["gisele-threads"] });
      navigate({ to: "/gisele/voice-session/$threadId", params: { threadId: thread.id } });

    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Não foi possível abrir a sala.");
    } finally {
      setLoading(null);
    }
  }

  return (
    <main className="mx-auto w-full max-w-4xl flex-1 space-y-6 px-6 py-10">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold text-foreground">Voice Room</h1>
        <p className="text-sm italic text-muted-foreground">
          Escolha uma situação e fale em inglês: use o botão de microfone dentro da sessão.
        </p>
      </header>

      <AiVoiceDisclosure />
      {isBrandVoice(voice.voice) ? (
        <p className="text-[11px] text-muted-foreground">
          Authorized brand voice active · Voz autorizada da marca ativa (síntese licenciada pela
          Speak2Co).
        </p>
      ) : null}

      <div className="grid gap-3 sm:grid-cols-2">
        {CONVERSATION_CONTEXTS.map((c) => (
          <Card key={c.id} className="flex flex-col gap-2 p-4">
            <p className="text-sm font-semibold text-foreground">{c.titleEn}</p>
            <p className="text-xs italic text-muted-foreground">{c.titlePt}</p>
            <p className="text-xs text-muted-foreground">{c.scenarioEn}</p>
            <Button
              size="sm"
              onClick={() => start(c.id)}
              disabled={loading !== null}
              className="mt-auto w-fit gap-1 rounded-full bg-gold text-xs font-semibold text-primary-foreground hover:opacity-90"
            >
              {loading === c.id ? (
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
              ) : (
                <Mic className="h-3.5 w-3.5" />
              )}
              Enter voice room
            </Button>
          </Card>
        ))}
      </div>

      <p className="text-[11px] text-muted-foreground">
        A voz da Gisele é gerada por inteligência artificial.
      </p>
    </main>
  );
}
