import { createFileRoute, Link } from "@tanstack/react-router";
import { AltHeading } from "@/components/AltHeading";

export const Route = createFileRoute("/termos")({
  head: () => ({
    meta: [
      { title: "Termos de Uso | Speak2Co" },
      {
        name: "description",
        content:
          "Termos de uso das assinaturas anuais Speak2Co: acesso à plataforma, pagamentos, renovação, cancelamento e responsabilidades.",
      },
      { property: "og:title", content: "Termos de Uso | Speak2Co" },
      {
        property: "og:description",
        content: "Condições de uso e de assinatura da plataforma de inglês Speak2Co.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TermsPage,
});

const SECTIONS: Array<{ title: string; items: string[] }> = [
  {
    title: "1. Quem somos",
    items: [
      "A Speak2Co é a plataforma de ensino de inglês operada por Speak2Co (nome legal a confirmar pela titular do negócio), responsável pelo conteúdo pedagógico e pelo funcionamento do serviço.",
      "Ao criar uma conta ou continuar usando a plataforma, você concorda com estes termos.",
      "Você declara ter idade legal para contratar ou possuir autorização de responsável, e, se contratar em nome de uma empresa, ter poderes para representá-la.",
    ],
  },
  {
    title: "2. O serviço",
    items: [
      "A Speak2Co oferece cursos de inglês (Beginner, Intermediate e Upper-Intermediate), prática com inteligência artificial, simuladores (Speak2Hire, Speak2Travel, Speak2Fluency), plano de estudos, painel de evolução, ranking e certificados, conforme o plano contratado.",
      "Os recursos disponíveis variam por plano e podem ser ajustados, ampliados ou substituídos por versões equivalentes ao longo do período de acesso.",
      "Não garantimos funcionamento ininterrupto ou livre de erros: manutenções, atualizações e indisponibilidades pontuais podem ocorrer.",
      "As respostas geradas por inteligência artificial são apoio pedagógico e podem conter imprecisões; você é responsável por conferir informações antes de usá-las em contextos profissionais ou oficiais.",
    ],
  },
  {
    title: "3. Uso adequado",
    items: [
      "É proibido usar a plataforma para fins ilegais, fraude, spam, violação de direitos de terceiros ou envio de conteúdo ofensivo, discriminatório ou ilícito.",
      "É proibido tentar burlar limites técnicos, extrair conteúdo em massa, aplicar engenharia reversa, revender ou redistribuir o material do curso.",
      "Suas credenciais são pessoais e intransferíveis; você responde pelas atividades realizadas na sua conta.",
      "Você deve fornecer informações verdadeiras e mantê-las atualizadas.",
    ],
  },
  {
    title: "4. Propriedade intelectual",
    items: [
      "Todo o conteúdo, software, marca, materiais em PDF, áudios e identidade visual da Speak2Co pertencem à Speak2Co.",
      "Você recebe uma licença limitada, pessoal, não exclusiva e intransferível de uso durante a vigência da assinatura.",
      "A voz sintética autorizada da fundadora é um ativo da marca e não pode ser gravada, extraída ou reutilizada fora da plataforma.",
    ],
  },
  {
    title: "5. Pagamentos, renovação e cancelamento",
    items: [
      "Todos os planos são anuais: o acesso vale por 12 meses a partir da confirmação do pagamento, à vista ou parcelado conforme a forma de pagamento escolhida.",
      "Os pedidos com cartão internacional são processados pela Paddle.com, que atua como revendedora e Merchant of Record: 'Our order process is conducted by our online reseller Paddle.com. Paddle.com is the Merchant of Record for all our orders. Paddle provides all customer service inquiries and handles returns.'",
      "Condições de cobrança, impostos, faturas, cancelamento e reembolso seguem os Termos do Comprador da Paddle (paddle.com/legal/checkout-buyer-terms) e a nossa Política de Reembolso.",
      "Ao cancelar, o acesso permanece ativo até o fim do período já pago e a renovação automática é desligada.",
      "Upgrades entram em vigor imediatamente com cobrança proporcional; downgrades passam a valer na renovação seguinte.",
    ],
  },
  {
    title: "6. Suspensão e encerramento",
    items: [
      "Podemos suspender ou encerrar o acesso em caso de descumprimento grave destes termos, falta de pagamento, risco de fraude ou de segurança, ou violações repetidas das regras de uso.",
      "Encerrada a conta, o conteúdo do curso deixa de ficar acessível; certificados e PDFs já emitidos permanecem com você.",
    ],
  },
  {
    title: "7. Responsabilidade",
    items: [
      "Na máxima extensão permitida por lei, não respondemos por danos indiretos, lucros cessantes ou perda de dados.",
      "Nossa responsabilidade total fica limitada ao valor pago por você nos 12 meses anteriores ao evento.",
      "Nada aqui exclui responsabilidades que a lei não permite excluir.",
    ],
  },
  {
    title: "8. Disposições gerais",
    items: [
      "Estes termos são regidos pela legislação brasileira, no foro do domicílio do consumidor.",
      "Podemos atualizar estes termos; mudanças relevantes serão comunicadas na plataforma.",
      "Dúvidas sobre a assinatura podem ser tratadas em Minha assinatura ou pelos canais de atendimento da Speak2Co.",
    ],
  },
];

function TermsPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16">
      <p className="text-sm tracking-[0.3em] text-accent uppercase">Speak2Co</p>
      <h1 className="mt-3 text-3xl font-bold md:text-4xl">
        <AltHeading text="Termos de Uso" />
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">
        Última atualização: agosto de 2026. Leia também a{" "}
        <Link to="/reembolso" className="text-accent underline">
          Política de Reembolso
        </Link>{" "}
        e o{" "}
        <Link to="/privacidade" className="text-accent underline">
          Aviso de Privacidade
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
