import { createFileRoute } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { toast } from "sonner";
import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getVoiceSettings, saveVoiceSettings } from "@/lib/gisele-data.functions";
import { AltHeading } from "@/components/AltHeading";

export const Route = createFileRoute("/_authenticated/gisele/privacidade")({
  component: PrivacyPage,
});

function PrivacyPage() {
  const queryClient = useQueryClient();
  const fetchFn = useServerFn(getVoiceSettings);
  const saveFn = useServerFn(saveVoiceSettings);
  const [saving, setSaving] = useState(false);

  const { data } = useQuery({ queryKey: ["gisele-voice-settings"], queryFn: () => fetchFn() });
  const consent = data?.consent_status ?? "pending";

  async function setConsent(status: "granted" | "revoked") {
    try {
      setSaving(true);
      await saveFn({ data: { consent_status: status } });
      await queryClient.invalidateQueries({ queryKey: ["gisele-voice-settings"] });
      toast.success(
        status === "granted"
          ? "Consentimento registrado."
          : "Consentimento revogado. O áudio deixa de ser processado.",
      );
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Não foi possível salvar.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <main className="mx-auto w-full max-w-2xl flex-1 space-y-6 px-6 py-10">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold"><AltHeading text={"Privacy"} /></h1>
        <p className="text-sm italic text-muted-foreground">
          Você controla como sua voz e suas conversas são usadas.
        </p>
      </header>

      <Card className="space-y-4 p-6">
        <div className="flex items-start gap-3">
          <ShieldCheck className="mt-0.5 h-5 w-5 text-gold" />
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>
              O áudio que você grava é enviado para transcrição e análise de pronúncia e não é usado
              para treinar modelos. As respostas e a voz da Gisele são geradas por inteligência
              artificial.
            </p>
            <p>
              Suas conversas ficam salvas na sua conta para que a mentoria acompanhe sua evolução.
              Você pode excluir uma sessão a qualquer momento pela barra lateral.
            </p>
          </div>
        </div>

        <div className="rounded-lg border border-border p-4">
          <p className="text-sm font-semibold text-foreground">
            Consentimento para processamento de voz
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Status atual:{" "}
            <span className="font-semibold text-gold">
              {consent === "granted" ? "concedido" : consent === "revoked" ? "revogado" : "pendente"}
            </span>
          </p>
          <div className="mt-3 flex gap-2">
            <Button
              size="sm"
              disabled={saving}
              onClick={() => setConsent("granted")}
              className="rounded-full bg-gold text-xs font-semibold text-primary-foreground hover:opacity-90"
            >
              Autorizar
            </Button>
            <Button
              size="sm"
              variant="outline"
              disabled={saving}
              onClick={() => setConsent("revoked")}
              className="rounded-full text-xs"
            >
              Revogar
            </Button>
          </div>
        </div>
      </Card>
    </main>
  );
}
