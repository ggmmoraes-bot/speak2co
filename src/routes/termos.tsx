import { createFileRoute, Link } from "@tanstack/react-router";
import { AltHeading } from "@/components/AltHeading";
import { BrandText } from "@/components/BrandText";

export const Route = createFileRoute("/termos")({
  head: () => ({
    meta: [
      { title: "Speak2Co — Terms of Use" },
      {
        name: "description",
        content:
          "Termos de Uso da Speak2Co: plataforma digital de inglês fundada por Gisele Gomes de Moraes. Serviços, planos, GiseleAI, pagamentos, privacidade e responsabilidades.",
      },
      { property: "og:title", content: "Speak2Co — Terms of Use" },
      {
        property: "og:description",
        content: "Condições de uso da plataforma de inglês Speak2Co, atualizadas em agosto de 2026.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TermsPage,
});

type Section = { title: string; paragraphs?: string[]; items?: string[]; after?: string[] };

const SECTIONS: Section[] = [
  {
    title: "1. Sobre a Speak2Co",
    paragraphs: [
      "A Speak2Co é uma plataforma digital de aprendizagem de inglês idealizada e fundada por Gisele Gomes de Moraes — Founder, Project Creator & English Mentor.",
      "A Speak2Co reúne cursos, experiências de aprendizagem, ferramentas digitais, inteligência artificial, práticas de comunicação e produtos especializados destinados ao desenvolvimento do inglês para diferentes objetivos e contextos.",
      "A plataforma é construída com base em uma proposta de aprendizagem prática, progressiva e orientada à aplicação real da língua inglesa.",
      "A marca, identidade, metodologia, conteúdos e experiências da Speak2Co são desenvolvidos sob a direção de sua fundadora e English Mentor.",
    ],
  },
  {
    title: "2. O serviço",
    paragraphs: ["A Speak2Co oferece, conforme o plano contratado e a disponibilidade de cada recurso:"],
    items: [
      "Cursos de inglês: Beginner English, Intermediate English e Upper-Intermediate English;",
      "Ferramentas de aprendizagem;",
      "Prática de speaking, listening, reading e writing;",
      "Vocabulário e expressões;",
      "Exercícios e atividades interativas;",
      "Plano de estudos personalizado;",
      "Acompanhamento de progresso;",
      "Certificados;",
      "Recursos baseados em inteligência artificial;",
      "Product Lines especializados;",
      "Recursos de conversação e prática;",
      "Experiências educacionais personalizadas.",
    ],
    after: [
      "Os Product Lines da Speak2Co representam linhas de produtos especializadas desenvolvidas para diferentes objetivos e situações de uso do inglês. Entre os Product Lines atualmente disponíveis ou em desenvolvimento estão: Speak2Hire, Speak2Travel, Speak2Fluency, Speak2Kids e Speak2Teens.",
      "A lista de Product Lines não é definitiva. Novos produtos e experiências poderão ser acrescentados futuramente à plataforma.",
    ],
  },
  {
    title: "3. GiseleAI by Speak2Co",
    paragraphs: [
      "A GiseleAI by Speak2Co é uma experiência exclusiva do Signature Plan.",
      "A GiseleAI foi concebida como uma experiência de Personal English Mentoring, utilizando inteligência artificial para oferecer ao aluno prática personalizada, orientação, feedback, acompanhamento e atividades adaptadas à sua jornada de aprendizagem.",
      "A GiseleAI poderá utilizar recursos de inteligência artificial e tecnologia de voz para proporcionar experiências de conversação e orientação em inglês. A disponibilidade, funcionalidades e tecnologias utilizadas poderão ser aprimoradas ao longo do tempo.",
      "A voz utilizada na GiseleAI é um recurso autorizado e integrado à experiência da Speak2Co e não poderá ser copiada, extraída, gravada, reproduzida, distribuída ou utilizada fora da plataforma sem autorização expressa da titular.",
    ],
  },
  {
    title: "4. Planos e funcionalidades",
    paragraphs: [
      "A Speak2Co oferece diferentes planos de assinatura, com funcionalidades e níveis de acesso específicos. Os recursos disponíveis em cada plano são apresentados na plataforma no momento da contratação.",
      "A Speak2Co poderá:",
    ],
    items: [
      "ampliar funcionalidades;",
      "aprimorar recursos existentes;",
      "adicionar novos produtos;",
      "desenvolver novas experiências;",
      "substituir recursos por versões aprimoradas ou equivalentes.",
    ],
    after: [
      "Alterações relevantes que afetem materialmente a experiência contratada serão comunicadas aos usuários quando aplicável.",
      "A disponibilidade de determinados recursos poderá depender de tecnologia de terceiros, integrações, disponibilidade técnica ou atualizações da plataforma.",
    ],
  },
  {
    title: "5. Inteligência artificial",
    paragraphs: [
      "A Speak2Co utiliza tecnologias de inteligência artificial como apoio ao processo de aprendizagem. Os recursos de IA podem auxiliar em:",
    ],
    items: [
      "conversação;",
      "prática de inglês;",
      "feedback;",
      "geração de exercícios;",
      "pronúncia;",
      "vocabulário;",
      "gramática;",
      "planejamento de estudos;",
      "personalização da experiência;",
      "acompanhamento da aprendizagem.",
    ],
    after: [
      "As respostas produzidas por inteligência artificial podem eventualmente apresentar imprecisões ou limitações.",
      "Os recursos de IA possuem finalidade educacional e não substituem avaliação profissional, orientação oficial ou validação humana quando estas forem necessárias.",
      "O usuário é responsável por verificar informações antes de utilizá-las em contextos profissionais, acadêmicos, oficiais ou que possam gerar consequências relevantes.",
    ],
  },
  {
    title: "6. Conta do usuário",
    paragraphs: [
      "Para utilizar determinados recursos da Speak2Co, o usuário deverá criar uma conta. O usuário declara que:",
    ],
    items: [
      "fornecerá informações verdadeiras;",
      "manterá seus dados atualizados;",
      "protegerá suas credenciais de acesso;",
      "não compartilhará sua conta com terceiros;",
      "será responsável pelas atividades realizadas em sua conta.",
    ],
    after: ["As credenciais são pessoais e intransferíveis."],
  },
  {
    title: "7. Uso adequado da plataforma",
    paragraphs: ["É proibido utilizar a Speak2Co para:"],
    items: [
      "atividades ilegais;",
      "fraude;",
      "spam;",
      "violação de direitos de terceiros;",
      "distribuição de conteúdo ilícito;",
      "envio de conteúdo ofensivo ou discriminatório;",
      "tentativa de invasão ou comprometimento da plataforma;",
      "engenharia reversa;",
      "exploração de vulnerabilidades;",
      "extração automatizada de conteúdo;",
      "cópia ou reprodução não autorizada dos materiais;",
      "revenda ou redistribuição dos conteúdos;",
      "compartilhamento indevido de credenciais;",
      "tentativa de burlar limitações ou regras de acesso.",
    ],
    after: [
      "A utilização da plataforma deve respeitar estes Termos, a legislação aplicável e os direitos de terceiros.",
    ],
  },
  {
    title: "8. Propriedade intelectual",
    paragraphs: ["Todos os elementos da Speak2Co, incluindo, mas não se limitando a:"],
    items: [
      "marca, logotipos e identidade visual;",
      "metodologia;",
      "textos, cursos e aulas;",
      "materiais didáticos e PDFs;",
      "exercícios;",
      "áudios e vídeos;",
      "interfaces, designs e sistemas;",
      "conteúdos digitais e experiências educacionais;",
      "conteúdos produzidos para os Product Lines;",
      "conteúdos relacionados à GiseleAI;",
    ],
    after: [
      "são protegidos pela legislação aplicável de propriedade intelectual.",
      "A marca Speak2Co, sua identidade visual e seus conteúdos constituem ativos da plataforma e/ou de seus respectivos titulares.",
      "O usuário recebe apenas uma licença limitada, pessoal, não exclusiva e intransferível para utilizar os conteúdos durante o período de acesso contratado. Essa licença não permite copiar, reproduzir, distribuir, comercializar, revender, sublicenciar, publicar, disponibilizar a terceiros, modificar para fins comerciais ou criar produtos concorrentes utilizando os materiais da Speak2Co.",
    ],
  },
  {
    title: "9. Conteúdos da GiseleAI e voz da fundadora",
    paragraphs: [
      "A voz utilizada pela GiseleAI, quando aplicável, constitui elemento da experiência e identidade da GiseleAI by Speak2Co.",
      "O usuário não recebe qualquer direito sobre a voz, identidade, imagem ou representação da fundadora. É proibido:",
    ],
    items: [
      "gravar sistematicamente a voz para reutilização externa;",
      "extrair a voz;",
      "tentar clonar a voz;",
      "utilizar a voz para treinamento de outros sistemas;",
      "reproduzir a voz fora da Speak2Co;",
      "utilizar a voz comercialmente;",
      "criar conteúdo que simule a fundadora sem autorização.",
    ],
  },
  {
    title: "10. Pagamentos, assinaturas e renovação",
    paragraphs: [
      "Os planos da Speak2Co são contratados conforme as condições apresentadas no momento da compra.",
      "Quando o plano contratado possuir período anual, o acesso corresponderá ao período de 12 meses, contado a partir da confirmação do pagamento, observadas as condições de parcelamento escolhidas.",
      "As condições específicas de:",
    ],
    items: [
      "cobrança;",
      "parcelamento;",
      "impostos;",
      "emissão de comprovantes;",
      "cancelamento;",
      "reembolso;",
      "renovação;",
    ],
    after: [
      "serão apresentadas durante o processo de contratação e/ou estabelecidas na Política de Reembolso aplicável.",
      "Quando determinada transação for processada por uma empresa terceira, como a Paddle, poderão também ser aplicados os termos e condições dessa empresa, conforme informado no momento da compra.",
    ],
  },
  {
    title: "11. Cancelamento e reembolso",
    paragraphs: [
      "O cancelamento da assinatura deverá seguir as condições apresentadas na plataforma e na Política de Reembolso da Speak2Co.",
      "Quando aplicável, o cancelamento da renovação automática não implica necessariamente encerramento imediato do período já contratado.",
      "O acesso poderá permanecer disponível até o final do período já pago, conforme as condições da contratação e da política de reembolso.",
    ],
  },
  {
    title: "12. Upgrades e downgrades",
    paragraphs: [
      "Quando disponíveis, os upgrades e downgrades seguirão as condições apresentadas na plataforma.",
      "Um upgrade poderá proporcionar acesso imediato às funcionalidades do novo plano, conforme as regras de cobrança aplicáveis.",
      "Um downgrade poderá entrar em vigor no próximo ciclo de assinatura, conforme as condições apresentadas no momento da alteração.",
    ],
  },
  {
    title: "13. Disponibilidade da plataforma",
    paragraphs: [
      "A Speak2Co busca manter seus serviços disponíveis e funcionais, mas não garante funcionamento ininterrupto ou completamente livre de erros. Podem ocorrer:",
    ],
    items: [
      "manutenção;",
      "atualizações;",
      "indisponibilidade temporária;",
      "falhas técnicas;",
      "interrupções de serviços de terceiros;",
      "alterações ou atualizações de integrações.",
    ],
    after: [
      "A Speak2Co buscará restabelecer os serviços e corrigir problemas técnicos dentro de suas possibilidades.",
    ],
  },
  {
    title: "14. Suspensão ou encerramento da conta",
    paragraphs: ["A Speak2Co poderá suspender ou encerrar uma conta quando houver:"],
    items: [
      "violação grave destes Termos;",
      "fraude;",
      "uso indevido da plataforma;",
      "risco de segurança;",
      "tentativa de comprometimento do sistema;",
      "violação de propriedade intelectual;",
      "compartilhamento indevido de conta;",
      "inadimplência, quando aplicável;",
      "descumprimentos reiterados das regras de utilização.",
    ],
    after: [
      "Quando legalmente exigido, serão observados os direitos do consumidor e demais direitos aplicáveis.",
    ],
  },
  {
    title: "15. Certificados",
    paragraphs: [
      "Quando disponibilizados, os certificados serão emitidos de acordo com os critérios e condições definidos pela Speak2Co para cada curso ou experiência.",
      "A emissão de um certificado da Speak2Co não equivale, por si só, a diploma, graduação, pós-graduação ou certificação oficial de instituição de ensino reconhecida pelo Ministério da Educação.",
    ],
  },
  {
    title: "16. Privacidade e proteção de dados",
    paragraphs: [
      "O tratamento de dados pessoais realizado pela Speak2Co seguirá a Política de Privacidade da plataforma e a legislação brasileira aplicável, incluindo a Lei Geral de Proteção de Dados Pessoais — LGPD, quando aplicável.",
      "O usuário deverá consultar a Política de Privacidade para compreender como seus dados são coletados, utilizados, armazenados e protegidos.",
    ],
  },
  {
    title: "17. Responsabilidade",
    paragraphs: [
      "Na máxima extensão permitida pela legislação aplicável, a Speak2Co não será responsável por danos indiretos, lucros cessantes ou prejuízos decorrentes de situações que estejam fora de seu controle razoável.",
      "Nada nestes Termos deverá ser interpretado como exclusão ou limitação de responsabilidade que não possa ser afastada ou limitada pela legislação brasileira.",
    ],
  },
  {
    title: "18. Alterações dos Termos",
    paragraphs: ["A Speak2Co poderá atualizar estes Termos de Uso para refletir:"],
    items: [
      "mudanças na legislação;",
      "alterações na plataforma;",
      "novos produtos;",
      "novas funcionalidades;",
      "mudanças operacionais;",
      "melhorias de segurança;",
      "evolução dos serviços.",
    ],
    after: [
      "Quando houver alterações relevantes, estas poderão ser comunicadas ao usuário por meio da plataforma ou de outros canais adequados.",
      "A versão vigente será sempre aquela disponibilizada na plataforma.",
    ],
  },
  {
    title: "19. Legislação e foro",
    paragraphs: [
      "Estes Termos são regidos pela legislação brasileira.",
      "Quando aplicável às relações de consumo, serão respeitados os direitos assegurados pela legislação brasileira, inclusive aqueles previstos no Código de Defesa do Consumidor.",
      "Eventuais controvérsias serão submetidas ao foro competente, observadas as regras legais aplicáveis ao consumidor.",
    ],
  },
  {
    title: "20. Contato",
    paragraphs: [
      "Dúvidas sobre a plataforma, conta, assinatura, cursos ou funcionalidades poderão ser encaminhadas pelos canais oficiais de atendimento da Speak2Co ou pela área Help Center da plataforma.",
    ],
  },
];

function TermsPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16">
      <p className="text-sm tracking-[0.3em] text-accent uppercase">
        <BrandText text="Speak2Co" />
      </p>
      <h1 className="mt-3 text-3xl font-bold md:text-4xl">
        <AltHeading text="Terms of Use" />
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Última atualização: August 2026.</p>

      <div className="mt-6 rounded-2xl border border-gold/30 bg-secondary/40 px-5 py-4">
        <p className="text-sm font-semibold text-foreground">Gisele Gomes de Moraes</p>
        <p className="text-xs tracking-wide text-gold">Founder • Project Creator • English Mentor</p>
        <p className="mt-2 text-xs text-muted-foreground">
          A Speak2Co é um projeto idealizado e desenvolvido por Gisele Gomes de Moraes, que atua como
          fundadora e English Mentor.
        </p>
      </div>

      <div className="mt-8 space-y-3 text-sm leading-relaxed text-muted-foreground">
        <p>
          Bem-vindo à Speak2Co, uma plataforma digital de aprendizagem de inglês criada para oferecer uma
          experiência integrada de estudo, prática e desenvolvimento da comunicação em inglês.
        </p>
        <p>
          Leia atentamente estes Termos de Uso, juntamente com o{" "}
          <Link to="/privacidade" className="text-accent underline">
            Aviso de Privacidade
          </Link>
          , a{" "}
          <Link to="/reembolso" className="text-accent underline">
            Política de Reembolso
          </Link>{" "}
          e o{" "}
          <Link to="/ajuda" className="text-accent underline">
            Help Center
          </Link>
          .
        </p>
        <p>
          Ao criar uma conta, contratar um plano ou continuar utilizando a Speak2Co, você declara que leu,
          compreendeu e concorda com estes Termos.
        </p>
      </div>

      <div className="mt-10 space-y-8">
        {SECTIONS.map((section) => (
          <section key={section.title}>
            <h2 className="text-lg font-semibold text-foreground">{section.title}</h2>
            {section.paragraphs?.map((p) => (
              <p key={p} className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
            {section.items ? (
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                {section.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            ) : null}
            {section.after?.map((p) => (
              <p key={p} className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </section>
        ))}
      </div>

      <footer className="mt-12 border-t border-border pt-6 text-sm">
        <p className="font-semibold">
          <BrandText text="Speak2Co" />
        </p>
        <p className="mt-1 text-muted-foreground">Gisele Gomes de Moraes</p>
        <p className="text-xs text-gold">Founder • Project Creator • English Mentor</p>
        <p className="mt-2 text-xs text-muted-foreground italic">
          Speak2Co — English for Every Opportunity.
        </p>
      </footer>
    </main>
  );
}
