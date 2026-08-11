import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/checklist")({
  head: () => ({
    meta: [
      { title: "Checklist de telas — Speak2Co" },
      {
        name: "description",
        content:
          "Acompanhe o status de cada tela do Speak2Co: telas visíveis a todos, telas protegidas por login e funcionalidades ainda pendentes.",
      },
      { property: "og:title", content: "Checklist de telas — Speak2Co" },
      {
        property: "og:description",
        content: "Status de cada rota do Speak2Co: visível, protegida ou pendente.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ChecklistPage,
});

type Status = "public" | "protected" | "pending";

const STATUS_META: Record<Status, { label: string; icon: string; className: string }> = {
  public: {
    label: "Visível",
    icon: "🌐",
    className: "border-accent/40 bg-accent/10 text-accent",
  },
  protected: {
    label: "Protegido",
    icon: "🔒",
    className: "border-border bg-muted/40 text-foreground",
  },
  pending: {
    label: "Pendente",
    icon: "🚧",
    className: "border-destructive/40 bg-destructive/10 text-destructive",
  },
};

type RouteItem = {
  path: string;
  title: string;
  description: string;
  status: Status;
  linkable?: boolean;
};

const ROUTES: RouteItem[] = [
  {
    path: "/",
    title: "Tela inicial",
    description: "Logo, slogan, botões Começar/Entrar e cards dos subprodutos.",
    status: "public",
    linkable: true,
  },
  {
    path: "/auth",
    title: "Login e cadastro",
    description: "Entrada por e-mail e senha, Google e Apple.",
    status: "public",
    linkable: true,
  },
  {
    path: "/checklist",
    title: "Checklist de telas",
    description: "Esta página: status de cada rota do aplicativo.",
    status: "public",
    linkable: true,
  },
  {
    path: "/painel",
    title: "Painel do aluno",
    description:
      "Plano de estudos por IA, exercícios diários, histórico, versões do plano e exportação em PDF.",
    status: "protected",
  },
  {
    path: "/perfil",
    title: "Perfil do aluno",
    description: "Nome, objetivo e nível desejado usados para personalizar o conteúdo.",
    status: "protected",
  },
  {
    path: "/professor",
    title: "Professor IA",
    description: "Conversas de prática de inglês em threads, com histórico salvo na nuvem.",
    status: "protected",
  },
  {
    path: "/premium",
    title: "Assinar Premium",
    description: "Planos anuais com checkout do Mercado Pago e parcelamento em até 12x.",
    status: "protected",
  },
  {
    path: "/assinatura",
    title: "Minha assinatura",
    description:
      "Situação, valor, próxima renovação, recursos liberados e histórico de eventos do webhook.",
    status: "protected",
  },
  {
    path: "/teste-de-nivel",
    title: "Teste de nivelamento",
    description:
      "Telas 2 e 3 do roteiro: 20 questões (A1 a C1) mais redação avaliada pela IA, resultado CEFR salvo no perfil e histórico de testes.",
    status: "protected",
  },

  {
    path: "/speak2hire",
    title: "Speak2Hire",
    description:
      "Materiais de entrada (Blueprint, STAR, Mock Interview, S.O.S.), simulador de entrevistas com temporizador, feedback da IA e histórico das sessões.",
    status: "protected",
  },

  {
    path: "/speak2travel",
    title: "Speak2Travel",
    description: "Simulações de viagem: aeroporto, hotel, restaurante e passeios.",
    status: "pending",
  },
  {
    path: "/ranking",
    title: "Ranking de fluência",
    description:
      "Classificação entre alunos com pontos do teste de nivelamento, do Professor de IA, das entrevistas do Speak2Hire e dos exercícios diários.",
    status: "protected",
  },
  {
    path: "/certificados",
    title: "Certificados",
    description:
      "Certificados de nível CEFR, Speak2Hire, prática diária e conversação — com progresso, código de verificação e download em PDF.",
    status: "protected",
  },
];

const LEGEND: { status: Status; description: string }[] = [
  { status: "public", description: "Qualquer pessoa acessa, mesmo sem login." },
  { status: "protected", description: "Exige login — redireciona para /auth." },
  { status: "pending", description: "Ainda não construída." },
];

function StatusBadge({ status }: { status: Status }) {
  const meta = STATUS_META[status];
  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${meta.className}`}
    >
      <span aria-hidden="true">{meta.icon}</span>
      {meta.label}
    </span>
  );
}

function ChecklistPage() {
  const counts = ROUTES.reduce<Record<Status, number>>(
    (acc, route) => ({ ...acc, [route.status]: acc[route.status] + 1 }),
    { public: 0, protected: 0, pending: 0 },
  );

  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-14">
      <header>
        <p className="text-sm uppercase tracking-[0.3em] text-accent">Speak2Co</p>
        <h1 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">Checklist de telas</h1>
        <p className="mt-3 text-muted-foreground">
          Status de cada rota do aplicativo — o que já está no ar, o que exige login e o que ainda
          falta construir.
        </p>
      </header>

      <section className="mt-8 grid gap-3 sm:grid-cols-3">
        {LEGEND.map((item) => (
          <div key={item.status} className="rounded-xl border border-border bg-card p-4">
            <div className="flex items-center justify-between gap-2">
              <StatusBadge status={item.status} />
              <span className="text-lg font-bold text-foreground">{counts[item.status]}</span>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </section>

      <ul className="mt-10 space-y-3">
        {ROUTES.map((route) => (
          <li key={route.path} className="rounded-xl border border-border bg-card p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="font-semibold text-foreground">{route.title}</p>
                <code className="text-xs text-muted-foreground">{route.path}</code>
              </div>
              <div className="flex items-center gap-3">
                {route.linkable && (
                  <Link
                    to={route.path}
                    className="text-xs font-semibold text-accent underline underline-offset-4"
                  >
                    Abrir
                  </Link>
                )}
                <StatusBadge status={route.status} />
              </div>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{route.description}</p>
          </li>
        ))}
      </ul>

      <p className="mt-10 text-sm text-muted-foreground">
        As telas protegidas ficam disponíveis depois de entrar em{" "}
        <Link to="/auth" className="font-semibold text-accent underline underline-offset-4">
          /auth
        </Link>
        .
      </p>
    </main>
  );
}
