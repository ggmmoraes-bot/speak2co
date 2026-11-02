import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import { AltHeading } from "@/components/AltHeading";

export const Route = createFileRoute("/_authenticated/gisele/privacidade")({
  head: () => ({
    meta: [
      {"title": "Privacy | GiseleAI | Speak2Co"},
      {"name": "description", "content": "Privacy on Speak2Co: personalized English learning and practice."},
      {"property": "og:title", "content": "Privacy | GiseleAI | Speak2Co"},
      {"property": "og:description", "content": "Privacy on Speak2Co: personalized English learning and practice."},
      {"property": "og:type", "content": "website"},
      {"name": "twitter:card", "content": "summary_large_image"},
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
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
          <p className="text-sm font-semibold text-foreground">Microfone</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Nas sessões de voz o próprio navegador pede permissão de microfone. Você pode revogar
            essa permissão a qualquer momento nas configurações do navegador — a GiseleAI continua
            disponível por texto.
          </p>
        </div>

      </Card>
    </main>
  );
}
