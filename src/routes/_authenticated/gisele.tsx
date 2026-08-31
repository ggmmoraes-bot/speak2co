import { BrandText } from "@/components/BrandText";
import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { FeatureGate } from "@/components/FeatureGate";
import giseleAvatar from "@/assets/giseleai-avatar.jpg.asset.json";

export const Route = createFileRoute("/_authenticated/gisele")({
  head: () => ({
    meta: [
      { title: "GiseleAI — Your Personal English Mentor | Speak2Co" },
      {
        name: "description",
        content:
          "Powered by AI. Guided by Gisele. Practice, speak, learn and improve with a personal English mentor — exclusive to the Signature plan.",
      },
      { property: "og:title", content: "GiseleAI — Your Personal English Mentor" },
      {
        property: "og:description",
        content: "Powered by AI. Guided by Gisele. Your English journey, personalized around you.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <FeatureGate
      feature="gisele_ai"
      title="GiseleAI é exclusiva do Signature"
      benefit="Mentoria contínua com IA que conhece seu nível, seu progresso e seus objetivos: prática diária, correções priorizadas e revisão espaçada — tudo dentro da GiseleAI."
      requiredPlan="Signature"
    >
      <GiseleLayout />
    </FeatureGate>
  ),
});

const GISELE_NAV = [
  { to: "/gisele", label: "Overview" },
  { to: "/gisele/missao-do-dia", label: "Today" },
  { to: "/gisele/voice-room", label: "Voice Room" },
  { to: "/gisele/real-life", label: "Real-Life" },
  { to: "/gisele/como-dizer", label: "Say It" },
  { to: "/gisele/minha-aula", label: "My Lesson" },
  { to: "/gisele/pontos-fracos", label: "My Focus" },
  { to: "/gisele/meu-progresso", label: "Progress" },
  { to: "/gisele/feedback", label: "Feedback" },
  { to: "/gisele/meu-plano", label: "Goals" },
  { to: "/gisele/historico", label: "History" },
  { to: "/gisele/onboarding", label: "Profile" },
  { to: "/gisele/configuracoes", label: "Settings" },

] as const;

function GiseleLayout() {
  return (
    <div className="surface-navy relative flex min-h-screen flex-col">
      {/* Aura dourada exclusiva da GiseleAI */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] opacity-70"
        style={{
          background:
            "radial-gradient(60% 100% at 20% 0%, color-mix(in oklab, var(--gold) 18%, transparent), transparent 70%)",
        }}
      />

      <header className="relative z-10 border-b border-gold/20 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-5">
          <div className="flex items-center gap-4">
            <img
              src={giseleAvatar.url}
              alt="GiseleAI by speak2co — AI English Coach"
              className="h-12 w-12 rounded-full object-cover ring-1 ring-gold/50"
            />
            <div className="min-w-0">
              <p className="text-lg font-semibold leading-tight">
                <BrandText text="GiseleAI" />{" "}
                <span className="text-sm font-normal text-muted-foreground">
                  · Your Personal English Mentor
                </span>
              </p>
              <p className="text-xs text-gold">Powered by AI. Guided by Gisele.</p>
            </div>
            <Link
              to="/painel"
              aria-label="Voltar ao painel"
              className="ml-auto inline-flex items-center gap-2 rounded-full border border-border/70 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-gold/50 hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Painel
            </Link>
          </div>

          <nav className="-mx-1 flex gap-1 overflow-x-auto pb-1">
            {GISELE_NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/gisele" }}
                activeProps={{
                  className:
                    "border-gold/60 bg-gold/10 text-gold shrink-0 rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors",
                }}
                inactiveProps={{
                  className:
                    "shrink-0 rounded-full border border-transparent px-4 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-border hover:text-foreground",
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <div className="relative z-10 flex min-h-0 flex-1 flex-col">
        <Outlet />
      </div>
    </div>
  );
}
