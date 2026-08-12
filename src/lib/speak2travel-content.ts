/**
 * Speak2Travel — estrutura do produto (10 módulos + material complementar).
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
  /** Número do módulo (1 a 10). */
  module: number;
  title: string;
  subtitle: string;
  description: string;
  /** Palavras essenciais do módulo (en → pt). */
  vocabulary: { term: string; meaning: string }[];
  /** Frases-modelo do módulo. */
  phrases: string[];
  /** Marca o módulo prioritário de segurança. */
  priority?: boolean;
  prompts: TravelPrompt[];
};

export const TRAVEL_BRIEFING = {
  title: "Briefing da trilha",
  intro:
    "Speak2Travel treina o inglês que você realmente usa em viagem: do planejamento ao retorno para casa. Não é decorar frases — é responder rápido, com clareza e confiança.",
  steps: [
    {
      title: "1. Leia a situação",
      text: "Cada prática apresenta o contexto e a fala do interlocutor (agente, recepcionista, guia). Imagine-se ali.",
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

export const TRAVEL_TOOLS = [
  "Vocabulary",
  "Expressions",
  "Dialogue",
  "Pronunciation",
  "Quiz",
  "Flashcards",
  "AI Role Play",
  "PDF",

];

export const TRAVEL_TRACKS: TravelTrack[] = [
  {
    id: "before-the-trip",
    module: 1,
    title: "Before the Trip",
    subtitle: "Antes da viagem",
    description:
      "Documentos, reservas, passagens e check-in online: o inglês do planejamento, antes de sair de casa.",
    vocabulary: [
      { term: "booking reference", meaning: "código da reserva" },
      { term: "round trip", meaning: "ida e volta" },
      { term: "refundable", meaning: "reembolsável" },
      { term: "carry-on", meaning: "bagagem de mão" },
      { term: "travel insurance", meaning: "seguro viagem" },
    ],
    phrases: [
      "I'd like to book a double room for three nights.",
      "Is breakfast included?",
      "Can I check in online?",
      "Is this ticket refundable?",
    ],
    prompts: [
      {
        id: "hotel-booking",
        situation: "Reserva de hotel por telefone",
        cue: "Thank you for calling. How can I help you with your reservation?",
        task: "Reserve um quarto de casal por três noites e pergunte se o café da manhã está incluído.",
        keyPhrases: [
          "I'd like to book a double room.",
          "From the 10th to the 13th.",
          "Is breakfast included?",
        ],
        tip: "Diga datas com 'from... to...' — é o formato que o recepcionista espera.",
        seconds: 60,
      },
      {
        id: "buying-tickets",
        situation: "Comprando passagens no site/telefone",
        cue: "We have two options: a direct flight at 9 a.m. or one with a stopover at 2 p.m.",
        task: "Escolha o voo direto, pergunte o preço e se a passagem é reembolsável.",
        keyPhrases: [
          "I'll take the direct flight.",
          "How much is it?",
          "Is it refundable?",
        ],
        tip: "'Direct flight' (sem parada) e 'stopover' (conexão) são as duas palavras que resolvem essa conversa.",
        seconds: 60,
      },
      {
        id: "online-check-in",
        situation: "Suporte do check-in online",
        cue: "It looks like your booking reference isn't going through. Could you confirm it?",
        task: "Confirme o código, explique o erro que aparece e peça ajuda para escolher o assento.",
        keyPhrases: [
          "My booking reference is...",
          "It says the code is invalid.",
          "Could you help me choose a seat?",
        ],
        tip: "Descreva o erro com 'It says...' — é como nativos relatam mensagens de tela.",
        seconds: 75,
      },
    ],
  },
  {
    id: "airport-essentials",
    module: 2,
    title: "Airport Essentials",
    subtitle: "Check-in, segurança, embarque e bagagem",
    description:
      "Do balcão de check-in ao portão de embarque, respondendo com segurança às perguntas mais comuns do aeroporto.",
    vocabulary: [
      { term: "boarding pass", meaning: "cartão de embarque" },
      { term: "gate", meaning: "portão de embarque" },
      { term: "aisle seat", meaning: "assento no corredor" },
      { term: "delayed", meaning: "atrasado" },
      { term: "baggage claim", meaning: "esteira de bagagem" },
    ],
    phrases: [
      "Where is Gate 32?",
      "I'd like a window seat.",
      "My luggage didn't arrive.",
      "I have a connecting flight.",
    ],
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
        id: "lost-luggage",
        situation: "Balcão de bagagem extraviada",
        cue: "I'm sorry to hear that. Can you describe your suitcase and give me your baggage tag number?",
        task: "Descreva a mala, informe o número da etiqueta e pergunte quando ela chega.",
        keyPhrases: [
          "It's a large black suitcase.",
          "Here's my baggage tag.",
          "When do you think it will arrive?",
        ],
        tip: "Cor + tamanho + material já bastam para descrever a mala.",
        seconds: 75,
      },
    ],
  },
  {
    id: "on-the-plane",
    module: 3,
    title: "On the Plane",
    subtitle: "A bordo",
    description:
      "Pedir água, cobertor, comida, trocar de assento e lidar com imprevistos durante o voo.",
    vocabulary: [
      { term: "blanket", meaning: "cobertor" },
      { term: "tray table", meaning: "mesinha" },
      { term: "seat belt", meaning: "cinto de segurança" },
      { term: "turbulence", meaning: "turbulência" },
      { term: "flight attendant", meaning: "comissário(a)" },
    ],
    phrases: [
      "Could I have some water, please?",
      "Would it be possible to change seats?",
      "I'm not feeling well.",
      "What time do we land?",
    ],
    prompts: [
      {
        id: "asking-service",
        situation: "Serviço de bordo",
        cue: "Would you like chicken or pasta? Anything to drink?",
        task: "Escolha uma opção, peça água e pergunte se pode ganhar um cobertor.",
        keyPhrases: [
          "The pasta, please.",
          "Just water, thank you.",
          "Could I also have a blanket?",
        ],
        tip: "'Could I have...?' é o pedido educado padrão a bordo.",
        seconds: 45,
      },
      {
        id: "seat-change",
        situation: "Trocando de assento",
        cue: "I'm afraid the flight is quite full today. Is there a problem with your seat?",
        task: "Explique que quer sentar perto de quem viaja com você e pergunte se há assentos livres.",
        keyPhrases: [
          "I'd like to sit next to my family.",
          "Would it be possible to change seats?",
          "Are there any free seats?",
        ],
        tip: "Explique o motivo antes do pedido: aumenta muito a chance de um sim.",
        seconds: 60,
      },
      {
        id: "onboard-issue",
        situation: "Mal-estar durante o voo",
        cue: "Are you okay? You look pale. Do you need any assistance?",
        task: "Diga que não está se sentindo bem, peça água e pergunte se há remédio para enjoo.",
        keyPhrases: [
          "I'm not feeling well.",
          "Could I have some water?",
          "Do you have anything for motion sickness?",
        ],
        tip: "'I feel dizzy / nauseous' descreve tontura e enjoo com precisão.",
        seconds: 60,
      },
    ],
  },
  {
    id: "immigration",
    module: 4,
    title: "Immigration",
    subtitle: "Simulação completa com o officer",
    description:
      "A conversa mais temida da viagem: motivo, duração, hospedagem e perguntas de acompanhamento.",
    vocabulary: [
      { term: "purpose of your trip", meaning: "motivo da viagem" },
      { term: "return ticket", meaning: "passagem de volta" },
      { term: "customs", meaning: "alfândega" },
      { term: "to declare", meaning: "declarar" },
      { term: "length of stay", meaning: "tempo de permanência" },
    ],
    phrases: [
      "I'm here on vacation.",
      "I'm staying for ten days.",
      "I'll be staying at a hotel downtown.",
      "I have nothing to declare.",
    ],
    prompts: [
      {
        id: "immigration-basics",
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
      {
        id: "immigration-followup",
        situation: "Perguntas de acompanhamento",
        cue: "Do you have a return ticket? Are you traveling alone? What do you do for a living?",
        task: "Responda as três perguntas em frases curtas e diretas.",
        keyPhrases: [
          "Yes, I'm flying back on the 20th.",
          "I'm traveling with my wife.",
          "I work as a...",
        ],
        tip: "Datas e profissões: treine dizer as suas com naturalidade, sem pensar.",
        seconds: 60,
      },
      {
        id: "customs",
        situation: "Alfândega",
        cue: "Do you have anything to declare? Any food, plants, or large amounts of cash?",
        task: "Diga que não tem nada a declarar e mencione que leva apenas itens pessoais.",
        keyPhrases: [
          "No, I have nothing to declare.",
          "Just personal belongings.",
          "Only some snacks for the trip.",
        ],
        tip: "Nunca minta na alfândega: se levar comida, declare — é normal e resolvido na hora.",
        seconds: 45,
      },
    ],
  },
  {
    id: "hotel",
    module: 5,
    title: "Hotel",
    subtitle: "Check-in, check-out, room service e reclamações",
    description:
      "Role play completo na recepção: da chegada ao acerto da conta, incluindo problemas no quarto.",
    vocabulary: [
      { term: "front desk", meaning: "recepção" },
      { term: "housekeeping", meaning: "camareira/limpeza" },
      { term: "late check-out", meaning: "saída tardia" },
      { term: "extra charge", meaning: "cobrança extra" },
      { term: "spare key", meaning: "chave extra" },
    ],
    phrases: [
      "I have a reservation under...",
      "The air conditioning isn't working.",
      "Could I have a late check-out?",
      "There's a charge I don't recognize.",
    ],
    prompts: [
      {
        id: "hotel-check-in",
        situation: "Check-in no hotel",
        cue: "Good evening! Do you have a reservation with us?",
        task: "Confirme a reserva no seu nome, pergunte o horário do café e a senha do Wi-Fi.",
        keyPhrases: [
          "I have a reservation under...",
          "What time is breakfast?",
          "Could I have the Wi-Fi password?",
        ],
        tip: "'Under + seu nome' é a forma natural de dizer 'no nome de'.",
        seconds: 60,
      },
      {
        id: "room-problem",
        situation: "Problema no quarto",
        cue: "Front desk, how can I help you?",
        task: "Explique que o ar-condicionado não funciona e peça para resolverem ou trocarem o quarto.",
        keyPhrases: [
          "The air conditioning isn't working.",
          "Could someone come and take a look?",
          "Otherwise, could I change rooms?",
        ],
        tip: "Reclame do problema, não da pessoa: 'isn't working' resolve mais que 'you didn't...'.",
        seconds: 60,
      },
      {
        id: "room-service",
        situation: "Room service",
        cue: "Room service, what would you like to order tonight?",
        task: "Peça um prato, pergunte quanto tempo demora e peça para colocar na conta do quarto.",
        keyPhrases: [
          "I'd like a club sandwich, please.",
          "How long will it take?",
          "Could you charge it to my room?",
        ],
        tip: "'Charge it to my room' evita pagar na porta.",
        seconds: 60,
      },
      {
        id: "hotel-check-out",
        situation: "Check-out",
        cue: "Here's your bill. Everything looks correct?",
        task: "Peça para explicarem uma cobrança extra e pergunte se pode deixar as malas na recepção.",
        keyPhrases: [
          "There's a charge I don't recognize.",
          "Could you explain this one?",
          "Can I leave my bags here until 6 p.m.?",
        ],
        tip: "Questione a conta com calma: 'Could you explain this charge?' é firme e educado.",
        seconds: 75,
      },
    ],
  },
  {
    id: "transportation",
    module: 6,
    title: "Transportation",
    subtitle: "Uber, táxi, ônibus, trem, metrô e aluguel de carro",
    description: "Chegar aonde você quer, pelo preço certo, sem depender de mímica.",
    vocabulary: [
      { term: "fare", meaning: "tarifa" },
      { term: "one-way ticket", meaning: "passagem só de ida" },
      { term: "platform", meaning: "plataforma" },
      { term: "to drop off", meaning: "deixar (passageiro)" },
      { term: "rental car", meaning: "carro alugado" },
    ],
    phrases: [
      "Could you take me to this address?",
      "How much is the fare?",
      "Which platform does it leave from?",
      "Does this bus go downtown?",
    ],
    prompts: [
      {
        id: "taxi",
        situation: "Táxi na saída do aeroporto",
        cue: "Where to?",
        task: "Informe o endereço, pergunte o valor aproximado e se aceitam cartão.",
        keyPhrases: [
          "Could you take me to this address?",
          "How much will it be, more or less?",
          "Do you take cards?",
        ],
        tip: "Mostrar o endereço na tela + falar a frase é a combinação que nunca falha.",
        seconds: 60,
      },
      {
        id: "subway",
        situation: "Bilheteria do metrô",
        cue: "Single ride or day pass?",
        task: "Peça um passe do dia, pergunte qual linha vai ao centro e onde trocar de linha.",
        keyPhrases: [
          "A day pass, please.",
          "Which line goes downtown?",
          "Where do I transfer?",
        ],
        tip: "'Transfer' é a palavra para baldeação — 'change train' também funciona.",
        seconds: 60,
      },
      {
        id: "car-rental",
        situation: "Locadora de carros",
        cue: "Do you want the basic insurance or full coverage? Are you returning the car here?",
        task: "Escolha a cobertura completa, confirme a devolução e pergunte sobre a política de combustível.",
        keyPhrases: [
          "I'll take full coverage.",
          "Yes, I'm returning it here.",
          "What's the fuel policy?",
        ],
        tip: "'Full coverage' e 'fuel policy' evitam 90% dos problemas na devolução.",
        seconds: 75,
      },
    ],
  },
  {
    id: "restaurant",
    module: 7,
    title: "Restaurant",
    subtitle: "Pedir, perguntar ingredientes, reservar e pagar",
    description:
      "Comer bem em inglês: reservas, restrições alimentares, pedidos e a conta.",
    vocabulary: [
      { term: "appetizer", meaning: "entrada" },
      { term: "main course", meaning: "prato principal" },
      { term: "the check / the bill", meaning: "a conta" },
      { term: "allergic to", meaning: "alérgico a" },
      { term: "to split the bill", meaning: "dividir a conta" },
    ],
    phrases: [
      "I'd like to make a reservation for two.",
      "Does this contain nuts?",
      "Could we have the check, please?",
      "I'm allergic to shellfish.",
    ],
    prompts: [
      {
        id: "reservation",
        situation: "Reserva por telefone",
        cue: "Good afternoon! For how many people and what time?",
        task: "Reserve para duas pessoas às 20h e peça uma mesa perto da janela.",
        keyPhrases: [
          "A table for two at 8 p.m., please.",
          "Under the name...",
          "Could we have a table by the window?",
        ],
        tip: "Horários em inglês: prefira '8 p.m.' a 'twenty o'clock' (não existe).",
        seconds: 60,
      },
      {
        id: "ordering",
        situation: "Fazendo o pedido",
        cue: "Are you ready to order? Can I get you anything to start?",
        task: "Peça uma entrada e um prato principal, e pergunte se o prato leva castanhas.",
        keyPhrases: [
          "I'll have the soup to start.",
          "And the steak for the main course.",
          "Does this contain nuts?",
        ],
        tip: "'I'll have...' é o jeito mais natural de pedir — mais que 'I want'.",
        seconds: 60,
      },
      {
        id: "the-bill",
        situation: "Pedindo a conta",
        cue: "How was everything? Anything else for you tonight?",
        task: "Peça a conta, pergunte se o serviço já está incluído e peça para dividir.",
        keyPhrases: [
          "Could we have the check, please?",
          "Is the tip included?",
          "Could we split the bill?",
        ],
        tip: "Nos EUA, 'tip' geralmente não está incluída — perguntar é normal.",
        seconds: 60,
      },
    ],
  },
  {
    id: "shopping",
    module: 8,
    title: "Shopping",
    subtitle: "Tamanhos, trocas, pagamentos e promoções",
    description: "Comprar, provar, trocar e pagar sem mal-entendidos.",
    vocabulary: [
      { term: "fitting room", meaning: "provador" },
      { term: "receipt", meaning: "recibo/nota" },
      { term: "on sale", meaning: "em promoção" },
      { term: "refund", meaning: "reembolso" },
      { term: "size", meaning: "tamanho" },
    ],
    phrases: [
      "Do you have this in a medium?",
      "Can I try it on?",
      "Is this on sale?",
      "I'd like to return this.",
    ],
    prompts: [
      {
        id: "trying-on",
        situation: "Loja de roupas",
        cue: "Hi there! Can I help you find anything?",
        task: "Peça outro tamanho, pergunte onde é o provador e se tem outra cor.",
        keyPhrases: [
          "Do you have this in a medium?",
          "Where's the fitting room?",
          "Do you have it in another color?",
        ],
        tip: "Tamanhos: small / medium / large — nunca 'P, M, G'.",
        seconds: 45,
      },
      {
        id: "paying",
        situation: "No caixa",
        cue: "That'll be forty-five dollars. Cash or card?",
        task: "Pague com cartão, pergunte se há desconto e peça o recibo.",
        keyPhrases: [
          "Card, please.",
          "Is this item on sale?",
          "Could I have the receipt?",
        ],
        tip: "Guarde o 'receipt': sem ele, trocas ficam quase impossíveis.",
        seconds: 45,
      },
      {
        id: "returning",
        situation: "Trocando um produto",
        cue: "Is there anything wrong with it? Do you have your receipt?",
        task: "Explique que o tamanho não serviu, mostre o recibo e peça troca ou reembolso.",
        keyPhrases: [
          "It doesn't fit.",
          "Here's the receipt.",
          "Could I exchange it or get a refund?",
        ],
        tip: "'It doesn't fit' (não serviu) é diferente de 'I don't like it' — o primeiro facilita a troca.",
        seconds: 60,
      },
    ],
  },
  {
    id: "sightseeing",
    module: 9,
    title: "Sightseeing",
    subtitle: "Ingressos, museus, guias e excursões",
    description: "Aproveitar os passeios: comprar ingressos, entender horários e pedir informações.",
    vocabulary: [
      { term: "admission", meaning: "entrada/ingresso" },
      { term: "guided tour", meaning: "visita guiada" },
      { term: "audio guide", meaning: "audioguia" },
      { term: "landmark", meaning: "ponto turístico" },
      { term: "sold out", meaning: "esgotado" },
    ],
    phrases: [
      "Two tickets, please.",
      "What time does the tour start?",
      "Is there a discount for students?",
      "Where's the entrance?",
    ],
    prompts: [
      {
        id: "tickets",
        situation: "Bilheteria do museu",
        cue: "Hi! How many tickets would you like?",
        task: "Compre dois ingressos, pergunte se há desconto e até que horas fica aberto.",
        keyPhrases: [
          "Two tickets, please.",
          "Is there a discount for students?",
          "What time do you close?",
        ],
        tip: "Preços e horários: treine ouvir números — é aí que a maioria trava.",
        seconds: 60,
      },
      {
        id: "guided-tour",
        situation: "Excursão guiada",
        cue: "The next English tour starts in twenty minutes. Have you joined us before?",
        task: "Confirme que quer entrar nessa visita, pergunte a duração e onde é o ponto de encontro.",
        keyPhrases: [
          "I'd like to join that one.",
          "How long does it take?",
          "Where's the meeting point?",
        ],
        tip: "'How long does it take?' serve para qualquer duração — memorize.",
        seconds: 60,
      },
      {
        id: "asking-directions",
        situation: "Perdido na rua",
        cue: "Sorry, are you looking for something?",
        task: "Peça direções para o ponto turístico e pergunte se dá para ir a pé.",
        keyPhrases: [
          "Excuse me, how do I get to...?",
          "Is it within walking distance?",
          "Could you show me on the map?",
        ],
        tip: "'How do I get to...?' é mais eficiente que 'Where is...?' porque pede o caminho.",
        seconds: 60,
      },
    ],
  },
  {
    id: "emergencies",
    module: 10,
    title: "Emergencies",
    subtitle: "Hospital, farmácia, polícia e imprevistos",
    description:
      "Módulo prioritário de segurança: o inglês que você precisa ter na ponta da língua quando algo dá errado.",
    priority: true,
    vocabulary: [
      { term: "emergency room", meaning: "pronto-socorro" },
      { term: "painkiller", meaning: "analgésico" },
      { term: "to report a theft", meaning: "registrar um roubo" },
      { term: "travel insurance claim", meaning: "acionamento do seguro" },
      { term: "embassy", meaning: "embaixada" },
    ],
    phrases: [
      "I need help.",
      "Call an ambulance, please.",
      "My passport was stolen.",
      "My card has been blocked.",
    ],
    prompts: [
      {
        id: "pharmacy",
        situation: "Farmácia",
        cue: "Hi, how can I help you today?",
        task: "Explique o sintoma, peça um analgésico e pergunte a dosagem.",
        keyPhrases: [
          "I have a headache and a sore throat.",
          "Do you have anything for that?",
          "How often should I take it?",
        ],
        tip: "Sintomas com 'I have a...' cobrem quase tudo: headache, fever, cough.",
        seconds: 60,
      },
      {
        id: "hospital",
        situation: "Pronto-socorro",
        cue: "What seems to be the problem? Do you have insurance?",
        task: "Descreva a dor, diga desde quando e informe que tem seguro viagem.",
        keyPhrases: [
          "I have a strong pain in my stomach.",
          "It started last night.",
          "I have travel insurance.",
        ],
        tip: "Localize a dor com 'pain in my + parte do corpo' e diga desde quando.",
        seconds: 75,
      },
      {
        id: "police",
        situation: "Delegacia — roubo de passaporte",
        cue: "Okay, let's file a report. When and where did it happen?",
        task: "Registre o roubo do passaporte, diga onde e quando ocorreu e peça o boletim.",
        keyPhrases: [
          "My passport was stolen.",
          "It happened this morning near the station.",
          "I need a copy of the police report.",
        ],
        tip: "Sem o 'police report' a embaixada não emite documento novo — sempre peça.",
        seconds: 75,
      },
      {
        id: "blocked-card",
        situation: "Banco — cartão bloqueado",
        cue: "For security reasons, we blocked your card. Can you confirm your recent transactions?",
        task: "Confirme que está viajando, valide as compras e peça para desbloquear.",
        keyPhrases: [
          "I'm traveling abroad right now.",
          "Yes, those charges are mine.",
          "Could you unblock my card, please?",
        ],
        tip: "Avise o banco antes de viajar — e saiba dizer 'I'm traveling abroad'.",
        seconds: 60,
      },
    ],
  },
];

export type TravelResource = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  items: string[];
};

export const TRAVEL_RESOURCES: TravelResource[] = [
  {
    id: "travel-vocabulary",
    title: "Travel Vocabulary",
    subtitle: "500 palavras em contexto",
    description: "As palavras mais usadas em viagem, sempre apresentadas dentro de uma frase real.",
    items: ["Aeroporto", "Hotel", "Transporte", "Restaurante", "Compras", "Saúde"],
  },
  {
    id: "travel-grammar",
    title: "Travel Grammar",
    subtitle: "Só a gramática necessária",
    description: "Nada de conteúdo extenso: apenas as estruturas que aparecem em toda viagem.",
    items: ["Can", "Could", "Would", "How much", "Where is..."],
  },
  {
    id: "pronunciation-lab",
    title: "Pronunciation Lab",
    subtitle: "Áudios, shadowing e repetição",
    description:
      "Ouça, repita e compare sua pronúncia com o modelo — integrado ao corretor de pronúncia do AI Teacher.",
    items: ["Áudios nativos", "Shadowing", "Repetição guiada"],
  },
  {
    id: "survival-english",
    title: "Survival English",
    subtitle: "100 frases que salvam qualquer viagem",
    description: "O kit mínimo de sobrevivência: se você só puder aprender uma coisa, aprenda isto.",
    items: ["Pedidos", "Emergências", "Direções", "Números e preços"],
  },
  {
    id: "culture-tips",
    title: "Culture Tips",
    subtitle: "Diferenças culturais por destino",
    description: "Gorjeta, formalidade, filas e pequenos gestos que mudam a percepção sobre você.",
    items: ["Estados Unidos", "Canadá", "Inglaterra", "Austrália"],
  },
  {
    id: "mini-dictionary",
    title: "Pocket Dictionary",
    subtitle: "Organizado por tema",
    description: "Consulta rápida durante a viagem, agrupada pelos temas dos 10 módulos.",
    items: ["Hotel", "Aeroporto", "Compras", "Saúde", "Emergências", "Restaurantes"],
  },
];

/** Frases rápidas para mostrar ao atendente durante a viagem. */
export const SURVIVAL_PHRASES = [
  { en: "I need help.", pt: "Preciso de ajuda." },
  { en: "I don't speak much English. Could you speak slowly?", pt: "Não falo muito inglês. Pode falar devagar?" },
  { en: "Could you write it down, please?", pt: "Pode escrever, por favor?" },
  { en: "How much does it cost?", pt: "Quanto custa?" },
  { en: "Where is the bathroom?", pt: "Onde fica o banheiro?" },
  { en: "Call an ambulance, please.", pt: "Chame uma ambulância, por favor." },
  { en: "I'm allergic to...", pt: "Sou alérgico(a) a..." },
  { en: "My passport was stolen.", pt: "Meu passaporte foi roubado." },
  { en: "Could you help me? I'm lost.", pt: "Pode me ajudar? Estou perdido(a)." },
  { en: "I have travel insurance.", pt: "Tenho seguro viagem." },
];

export function getTravelTrack(id: string): TravelTrack | undefined {
  return TRAVEL_TRACKS.find((track) => track.id === id);
}
