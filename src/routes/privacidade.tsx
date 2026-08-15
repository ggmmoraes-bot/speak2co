import { createFileRoute, Link } from "@tanstack/react-router";
import { AltHeading } from "@/components/AltHeading";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Aviso de Privacidade | Speak2Co" },
      {
        name: "description",
        content:
          "Como a Speak2Co coleta, usa, compartilha e protege os dados dos alunos, e quais direitos você tem sobre eles.",
      },
      { property: "og:title", content: "Aviso de Privacidade | Speak2Co" },
      {
        property: "og:description",
        content: "Tratamento de dados pessoais dos alunos da plataforma Speak2Co.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrivacyPage,
});

const SECTIONS: Array<{ title: string; items: string[] }> = [
  {
    title: "1. Controlador dos dados",
    items: [
      "A Speak2Co (nome legal a confirmar pela titular do negócio) é a controladora dos dados pessoais tratados na plataforma e decide como e por que eles são usados.",
    ],
  },
  {
    title: "2. Dados que tratamos",
    items: [
      "Cadastro: nome, e-mail, foto de perfil e credenciais de acesso.",
      "Aprendizagem: nível CEFR, respostas de exercícios, progresso nos cursos, gravações de voz enviadas para correção de pronúncia, conversas com a IA e preferências de estudo.",
      "Suporte: mensagens enviadas nos canais de atendimento e à fundadora.",
      "Técnicos: endereço IP, identificadores de dispositivo, registros de acesso e uso de recursos.",
      "Assinatura: plano contratado, situação do pagamento e datas de vigência. Dados de cartão nunca passam pelos nossos servidores — são tratados diretamente pelo provedor de pagamento.",
    ],
  },
  {
    title: "3. Finalidades e bases legais",
    items: [
      "Criar e manter a conta, entregar o curso e gerar certificados — execução do contrato.",
      "Personalizar o plano de estudos e o retorno da IA — execução do contrato.",
      "Segurança, prevenção a fraude e melhoria do produto — legítimo interesse.",
      "Comunicações de marketing — consentimento, revogável a qualquer momento.",
      "Obrigações fiscais e legais — cumprimento de obrigação legal.",
      "Uso da voz sintética autorizada da fundadora nas respostas faladas — consentimento explícito, registrado nas configurações e revogável quando você quiser.",
    ],
  },
  {
    title: "4. Compartilhamento",
    items: [
      "Provedores de infraestrutura, banco de dados e hospedagem.",
      "Provedores de inteligência artificial e de voz, para gerar correções, respostas e áudios.",
      "Paddle.com, como Merchant of Record, para venda, gestão da assinatura, cobrança, impostos e emissão de faturas; e Mercado Pago para pagamentos em reais.",
      "Assessores profissionais (contábeis e jurídicos) e autoridades, quando exigido por lei.",
      "Não vendemos dados pessoais.",
    ],
  },
  {
    title: "5. Retenção",
    items: [
      "Mantemos os dados enquanto sua conta existir e pelo prazo necessário ao cumprimento de obrigações legais e fiscais. Depois disso, eles são apagados ou anonimizados.",
      "Gravações de voz usadas para correção são mantidas apenas pelo tempo necessário à avaliação e ao seu histórico de progresso.",
    ],
  },
  {
    title: "6. Seus direitos",
    items: [
      "Você pode solicitar acesso, correção, exclusão, portabilidade, anonimização, informação sobre compartilhamentos e revogação do consentimento.",
      "Pedidos podem ser feitos pelos canais de atendimento da Speak2Co; respondemos no prazo previsto na LGPD.",
      "Você também pode reclamar à Autoridade Nacional de Proteção de Dados (ANPD).",
    ],
  },
  {
    title: "7. Segurança e cookies",
    items: [
      "Adotamos medidas técnicas e organizacionais adequadas, como criptografia em trânsito, controle de acesso e políticas de segurança no banco de dados.",
      "Usamos cookies essenciais para manter a sessão de login e o funcionamento da plataforma; cookies opcionais só são usados com o seu consentimento.",
    ],
  },
];

function PrivacyPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16">
      <p className="text-sm tracking-[0.3em] text-accent uppercase">Speak2Co</p>
      <h1 className="mt-3 text-3xl font-bold md:text-4xl">
        <AltHeading text="Aviso de Privacidade" />
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">
        Última atualização: agosto de 2026. Veja também os{" "}
        <Link to="/termos" className="text-accent underline">
          Termos de Uso
        </Link>{" "}
        e a{" "}
        <Link to="/reembolso" className="text-accent underline">
          Política de Reembolso
        </Link>
        .
      </p>

      <div className="mt-10 space-y-8">
        {SECTIONS.map((section) => (
          <section key={section.title}>
            <h2 className="text-lg font-semibold text-foreground">{section.title}</h2>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
              {section.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
