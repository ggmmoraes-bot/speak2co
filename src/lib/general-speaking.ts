/**
 * Learning Tools — Speaking Practice (biblioteca geral).
 * Conteúdo próprio e independente: nenhuma relação com o Pronunciation Lab
 * do Speak2Travel, que continua integralmente dentro do produto.
 */

export type SpeakingPrompt = {
  en: string;
  pt: string;
  note?: string;
};

export type SpeakingScenario = {
  id: string;
  title: string;
  titlePt: string;
  theme: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  goal: string;
  goalPt: string;
  usefulPhrases: SpeakingPrompt[];
  freeTalk: { en: string; pt: string }[];
};

export const SPEAKING_LEVELS = ["Beginner", "Intermediate", "Advanced"] as const;

export const GENERAL_SPEAKING: SpeakingScenario[] = [
  {
    id: "introduce-yourself",
    title: "Introducing yourself",
    titlePt: "Apresentando-se",
    theme: "Everyday conversations",
    level: "Beginner",
    goal: "Say who you are, where you live and what you do, clearly and naturally.",
    goalPt: "Dizer quem você é, onde mora e o que faz, com clareza e naturalidade.",
    usefulPhrases: [
      { en: "Hi, my name is Ana. Nice to meet you.", pt: "Oi, meu nome é Ana. Prazer em conhecê-lo." },
      { en: "I live in São Paulo, but I'm originally from Recife.", pt: "Moro em São Paulo, mas sou originalmente de Recife." },
      { en: "I work as a project analyst at a logistics company.", pt: "Trabalho como analista de projetos numa empresa de logística." },
      { en: "In my free time, I like running and cooking.", pt: "No meu tempo livre, gosto de correr e cozinhar.", note: "Linking: 'free time' /friː taɪm/" },
      { en: "I'm learning English to grow in my career.", pt: "Estou aprendendo inglês para crescer na carreira." },
    ],
    freeTalk: [
      { en: "Introduce yourself in 30 seconds.", pt: "Apresente-se em 30 segundos." },
      { en: "Describe the city where you live.", pt: "Descreva a cidade onde você mora." },
    ],
  },
  {
    id: "small-talk",
    title: "Small talk",
    titlePt: "Conversa informal",
    theme: "Everyday conversations",
    level: "Beginner",
    goal: "Start and keep a short, friendly conversation going.",
    goalPt: "Iniciar e manter uma conversa curta e amigável.",
    usefulPhrases: [
      { en: "How's your day going so far?", pt: "Como está indo o seu dia?" },
      { en: "The weather has been really nice this week.", pt: "O tempo está muito bom esta semana." },
      { en: "Did you do anything special over the weekend?", pt: "Você fez algo especial no fim de semana?" },
      { en: "That sounds great! Tell me more about it.", pt: "Que legal! Me conte mais sobre isso." },
      { en: "It was good talking to you. See you soon!", pt: "Foi bom falar com você. Até logo!" },
    ],
    freeTalk: [
      { en: "Talk about your last weekend for one minute.", pt: "Fale sobre o seu último fim de semana por um minuto." },
      { en: "Ask three friendly questions to a new colleague.", pt: "Faça três perguntas simpáticas a um colega novo." },
    ],
  },
  {
    id: "ordering-food",
    title: "Ordering food and drinks",
    titlePt: "Pedindo comida e bebida",
    theme: "Everyday conversations",
    level: "Beginner",
    goal: "Order confidently and ask about the menu.",
    goalPt: "Pedir com confiança e perguntar sobre o cardápio.",
    usefulPhrases: [
      { en: "Could I see the menu, please?", pt: "Posso ver o cardápio, por favor?" },
      { en: "I'll have the grilled chicken with a side salad.", pt: "Vou querer o frango grelhado com salada." },
      { en: "Does this dish contain nuts?", pt: "Este prato contém oleaginosas?" },
      { en: "Can we have the bill, please?", pt: "Pode trazer a conta, por favor?", note: "British: bill · American: check" },
    ],
    freeTalk: [
      { en: "Order a full meal for two people.", pt: "Peça uma refeição completa para duas pessoas." },
      { en: "Describe your favourite dish and how it is made.", pt: "Descreva seu prato favorito e como é feito." },
    ],
  },
  {
    id: "phone-calls",
    title: "Making a phone call",
    titlePt: "Fazendo uma ligação",
    theme: "Everyday conversations",
    level: "Intermediate",
    goal: "Handle a call politely when you cannot see the other person.",
    goalPt: "Conduzir uma ligação com educação, sem ver a outra pessoa.",
    usefulPhrases: [
      { en: "Hello, this is Marcos speaking. Could I talk to Ms Reed?", pt: "Alô, aqui é o Marcos. Poderia falar com a Sra. Reed?" },
      { en: "Sorry, the line is breaking up. Could you repeat that?", pt: "Desculpe, a ligação está falhando. Pode repetir?" },
      { en: "Would you mind holding for a moment?", pt: "Você se importaria de aguardar um momento?" },
      { en: "I'll send you an email to confirm the details.", pt: "Vou enviar um e-mail confirmando os detalhes." },
    ],
    freeTalk: [
      { en: "Call a clinic and reschedule an appointment.", pt: "Ligue para uma clínica e remarque uma consulta." },
      { en: "Leave a voicemail asking someone to call you back.", pt: "Deixe um recado pedindo que liguem de volta." },
    ],
  },
  {
    id: "opinions",
    title: "Giving your opinion",
    titlePt: "Dando sua opinião",
    theme: "Discussion",
    level: "Intermediate",
    goal: "Express and support an opinion with reasons and examples.",
    goalPt: "Expressar e sustentar uma opinião com razões e exemplos.",
    usefulPhrases: [
      { en: "In my opinion, working from home improves focus.", pt: "Na minha opinião, trabalhar de casa melhora o foco." },
      { en: "I see your point, but I'd look at it differently.", pt: "Entendo seu ponto, mas eu veria de outra forma." },
      { en: "The main reason is that people lose less time commuting.", pt: "A razão principal é que as pessoas perdem menos tempo no trânsito." },
      { en: "For example, my team became more productive last year.", pt: "Por exemplo, minha equipe ficou mais produtiva no ano passado." },
    ],
    freeTalk: [
      { en: "Should companies allow fully remote work? Explain why.", pt: "Empresas deveriam permitir trabalho 100% remoto? Explique." },
      { en: "Talk about a decision you disagreed with and why.", pt: "Fale sobre uma decisão da qual você discordou e por quê." },
    ],
  },
  {
    id: "meetings",
    title: "Speaking up in a meeting",
    titlePt: "Falando em uma reunião",
    theme: "Work",
    level: "Intermediate",
    goal: "Contribute clearly, interrupt politely and summarise decisions.",
    goalPt: "Contribuir com clareza, interromper com educação e resumir decisões.",
    usefulPhrases: [
      { en: "Can I add something here?", pt: "Posso acrescentar algo aqui?" },
      { en: "Just to clarify, are we moving the deadline to Friday?", pt: "Só para esclarecer, vamos mover o prazo para sexta?" },
      { en: "From my side, the main risk is the delivery time.", pt: "Do meu lado, o principal risco é o prazo de entrega." },
      { en: "So, to summarise: I'll send the report by Wednesday.", pt: "Então, resumindo: envio o relatório até quarta." },
    ],
    freeTalk: [
      { en: "Give a one-minute status update on a current project.", pt: "Dê uma atualização de um minuto sobre um projeto atual." },
      { en: "Politely disagree with a proposal and suggest an alternative.", pt: "Discorde educadamente de uma proposta e sugira uma alternativa." },
    ],
  },
  {
    id: "storytelling",
    title: "Telling a story",
    titlePt: "Contando uma história",
    theme: "Fluency",
    level: "Advanced",
    goal: "Narrate an experience with rhythm, tenses and natural connectors.",
    goalPt: "Narrar uma experiência com ritmo, tempos verbais e conectores naturais.",
    usefulPhrases: [
      { en: "It all started when I decided to change careers.", pt: "Tudo começou quando decidi mudar de carreira." },
      { en: "At first, everything went smoothly — then things got complicated.", pt: "No início, tudo correu bem — depois complicou." },
      { en: "What I hadn't realised was that the client had changed the brief.", pt: "O que eu não tinha percebido é que o cliente havia mudado o briefing." },
      { en: "In the end, it turned out to be the best decision I've made.", pt: "No fim, foi a melhor decisão que já tomei." },
    ],
    freeTalk: [
      { en: "Tell the story of a challenge you overcame at work.", pt: "Conte a história de um desafio que você superou no trabalho." },
      { en: "Describe a trip that did not go according to plan.", pt: "Descreva uma viagem que não saiu como planejado." },
    ],
  },
  {
    id: "persuading",
    title: "Persuading and negotiating",
    titlePt: "Persuadindo e negociando",
    theme: "High performance",
    level: "Advanced",
    goal: "Present a case, handle objections and close an agreement.",
    goalPt: "Apresentar um argumento, lidar com objeções e fechar um acordo.",
    usefulPhrases: [
      { en: "What I'm proposing would cut costs by roughly fifteen percent.", pt: "O que estou propondo reduziria custos em cerca de quinze por cento." },
      { en: "I appreciate the concern — let me address it directly.", pt: "Entendo a preocupação — deixe-me respondê-la diretamente." },
      { en: "Would you be open to a three-month pilot instead?", pt: "Você estaria aberto a um piloto de três meses?" },
      { en: "If we agree on the scope today, we can start next Monday.", pt: "Se acordarmos o escopo hoje, começamos na próxima segunda." },
    ],
    freeTalk: [
      { en: "Convince your manager to approve a training budget.", pt: "Convença seu gestor a aprovar um orçamento de treinamento." },
      { en: "Negotiate a deadline extension with a demanding client.", pt: "Negocie uma extensão de prazo com um cliente exigente." },
    ],
  },
];

export const GENERAL_SPEAKING_TOTAL = GENERAL_SPEAKING.length;
