/**
 * Speak2Travel — conteúdo de porta de entrada do módulo.
 * Your passport to confidence. Anywhere in the world.
 */

export type TravelPrompt = {
  id: string;
  situation: string;
  /** Fala do interlocutor (em inglês). */
  cue: string;
  /** O que o aluno precisa fazer. */
  task: string;
  /** Expressões-chave para usar. */
  keyPhrases: string[];
  /** Dica do coach (em português). */
  tip: string;
  seconds: number;
};

export type TravelTrack = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  prompts: TravelPrompt[];
};

export const TRAVEL_BRIEFING = {
  title: "Briefing da trilha",
  intro:
    "Speak2Travel treina o inglês que você realmente usa em viagem: aeroporto, imigração, hotel, transporte e passeios. Não é decorar frases — é responder rápido, com clareza e confiança.",
  steps: [
    {
      title: "1. Leia a situação",
      text: "Cada prática apresenta o contexto e a fala do funcionário (agente, recepcionista, guia). Imagine-se ali.",
    },
    {
      title: "2. Responda em inglês",
      text: "Escreva sua resposta como se estivesse falando. Frases curtas e naturais valem mais que frases longas e traduzidas.",
    },
    {
      title: "3. Use as expressões-chave",
      text: "Cada situação traz expressões que soam nativas. Tente encaixar pelo menos uma em cada resposta.",
    },
    {
      title: "4. Receba o feedback da IA",
      text: "Ao final, a IA avalia clareza, naturalidade e gramática, e devolve uma versão modelo da sua resposta em inglês.",
    },
  ],
  rules: [
    "Responda em inglês, mesmo com erros — errar aqui é mais barato do que errar no balcão.",
    "Cronômetro é referência, não prova: o objetivo é responder sem travar.",
    "Prefira ser educado e direto: 'Could you...?', 'I'd like to...', 'Sorry, could you repeat that?'.",
  ],
};

export const TRAVEL_TRACKS: TravelTrack[] = [
  {
    id: "airport-essentials",
    title: "Airport Essentials",
    subtitle: "Check-in, embarque e imigração",
    description:
      "A primeira trilha do Speak2Travel: do balcão de check-in até a fila da imigração, respondendo com segurança às perguntas mais comuns.",
    prompts: [
      {
        id: "check-in",
        situation: "Balcão de check-in da companhia aérea",
        cue: "Good morning! May I have your passport and booking reference, please? Are you checking any bags today?",
        task: "Entregue os documentos, diga quantas malas vai despachar e peça um assento no corredor.",
        keyPhrases: [
          "Here you are.",
          "I'm checking in one bag.",
          "Could I get an aisle seat, please?",
        ],
        tip: "Não traduza 'despachar mala' literalmente — use 'check a bag'.",
        seconds: 60,
      },
      {
        id: "security",
        situation: "Raio-X da segurança",
        cue: "Please remove your laptop and any liquids from your bag. Do you have anything in your pockets?",
        task: "Confirme o que está levando e pergunte se precisa tirar os sapatos.",
        keyPhrases: [
          "Sure, one second.",
          "I only have my phone and keys.",
          "Do I need to take off my shoes?",
        ],
        tip: "Frases curtas e cooperativas resolvem: aqui ninguém espera um discurso.",
        seconds: 45,
      },
      {
        id: "boarding-problem",
        situation: "Portão de embarque — voo atrasado",
        cue: "I'm sorry, your flight has been delayed by three hours. Your connection may be affected.",
        task: "Explique que você tem uma conexão e pergunte quais são as opções.",
        keyPhrases: [
          "I have a connecting flight to...",
          "What are my options?",
          "Could you rebook me on the next available flight?",
        ],
        tip: "Comece pelo problema em uma frase e só depois faça o pedido.",
        seconds: 75,
      },
      {
        id: "immigration",
        situation: "Fila da imigração",
        cue: "What's the purpose of your visit? How long are you staying, and where will you be staying?",
        task: "Responda objetivamente: motivo, duração e endereço da hospedagem.",
        keyPhrases: [
          "I'm here on vacation.",
          "I'm staying for ten days.",
          "I'll be staying at a hotel in downtown...",
        ],
        tip: "Na imigração, responda só o que foi perguntado — clareza é confiança.",
        seconds: 60,
      },
    ],
  },
];

export function getTravelTrack(id: string): TravelTrack | undefined {
  return TRAVEL_TRACKS.find((track) => track.id === id);
}
