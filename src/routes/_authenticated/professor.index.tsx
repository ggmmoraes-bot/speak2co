import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/speak2co-logo.asset.json";
import { createThread } from "@/lib/chat.functions";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/professor/")({
  component: ProfessorIndex,
});

function ProfessorIndex() {
  const navigate = useNavigate();
  const createThreadFn = useServerFn(createThread);

  async function handleNewThread() {
    try {
      const thread = await createThreadFn({ data: {} });
      navigate({ to: "/professor/$threadId", search: { prompt: undefined }, params: { threadId: thread.id } });
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Não foi possível criar a conversa.");
    }
  }

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 p-8 text-center">
      <img src={logo.url} alt="Speak2Co" className="h-20 w-20 rounded-full" />
      <div className="space-y-2">
        <h1 className="flex items-center gap-2 text-2xl font-semibold text-gold">
          <Sparkles className="h-6 w-6" /> AI Teacher
        </h1>
        <p className="max-w-md text-sm text-muted-foreground">
          Converse em inglês com seu professor particular de IA. Ele adapta ao seu nível,
          corrige gramática e pronúncia, e simula entrevistas e situações de viagem.
        </p>
      </div>
      <Button
        onClick={handleNewThread}
        className="rounded-full bg-gold text-primary-foreground font-semibold hover:opacity-90"
      >
        Start conversation
      </Button>
    </div>
  );
}
