import { useState } from "react";
import { Mic, Square } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { MicRecorder } from "@/lib/audio-recorder";
import { transcribeAudio } from "@/lib/voice-client";

/** Gravação de fala do aluno com transcrição automática. */
export function VoiceRecorder({ onTranscript }: { onTranscript: (text: string) => void }) {
  const [recorder, setRecorder] = useState<MicRecorder | null>(null);
  const [busy, setBusy] = useState(false);

  async function toggle() {
    if (recorder) {
      try {
        setBusy(true);
        const rec = await recorder.stop();
        setRecorder(null);
        onTranscript(await transcribeAudio(rec.blob));
      } catch (e) {
        setRecorder(null);
        toast.error(e instanceof Error ? e.message : "Não consegui ouvir sua fala.");
      } finally {
        setBusy(false);
      }
      return;
    }
    try {
      const mic = new MicRecorder();
      await mic.start();
      setRecorder(mic);
    } catch {
      toast.error("Permita o acesso ao microfone no navegador para falar.");
    }
  }

  return (
    <Button
      size="sm"
      variant={recorder ? "destructive" : "outline"}
      onClick={toggle}
      disabled={busy}
      className="gap-1 rounded-full text-xs"
    >
      {recorder ? <Square className="h-3.5 w-3.5" /> : <Mic className="h-3.5 w-3.5" />}
      {recorder ? "Stop and send" : busy ? "Listening…" : "Speak"}
    </Button>
  );
}
