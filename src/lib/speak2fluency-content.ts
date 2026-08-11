/**
 * Speak2Fluency — arquitetura curricular do PRD v1.0.
 * 8 módulos, cada um com a estrutura de 10 etapas: opening, warm-up, input,
 * notice, practice, challenge, AI feedback, retry, reflection e checkpoint.
 */

export type FluencySkill = "listening" | "speaking" | "vocabulary" | "pronunciation" | "confidence";

export type FluencyChunk = { en: string; pt: string };
export type FluencyDialogueLine = { who: string; line: string };
export type FluencyPractice = { prompt: string; hint: string };
export type FluencyCheckpoint = { question: string; options: string[]; answer: string };

export type FluencyModule = {
  id: string;
  order: number;
  titleEn: string;
  titlePt: string;
  objective: string;
  application: string;
  skills: FluencySkill[];
  minutes: number;
  opening: string;
  warmUp: string[];
  input: { context: string; dialogue: FluencyDialogueLine[] };
  notice: string[];
  chunks: FluencyChunk[];
  practice: FluencyPractice[];
  challenge: { context: string; goal: string; seconds: number };
  reflection: string[];
  checkpoint: FluencyCheckpoint[];
  passportBadge: string;
};

export const FLUENCY_STEPS = [
  { id: "opening", labelEn: "Opening", labelPt: "Abertura" },
  { id: "warmup", labelEn: "Warm-up", labelPt: "Aquecimento" },
  { id: "input", labelEn: "Input", labelPt: "Escuta e leitura" },
  { id: "notice", labelEn: "Notice", labelPt: "Padrões" },
  { id: "practice", labelEn: "Practice", labelPt: "Prática" },
  { id: "challenge", labelEn: "Challenge", labelPt: "Desafio" },
  { id: "feedback", labelEn: "AI Feedback", labelPt: "Feedback da IA" },
  { id: "reflection", labelEn: "Reflection", labelPt: "Reflexão" },
  { id: "checkpoint", labelEn: "Checkpoint", labelPt: "Checkpoint" },
] as const;

export type FluencyStepId = (typeof FLUENCY_STEPS)[number]["id"];

export const FLUENCY_MODULES: FluencyModule[] = [
  {
    id: "think-in-english",
    order: 1,
    titleEn: "Think in English",
    titlePt: "Pensar em inglês",
    objective: "Reduzir a dependência de tradução mental.",
    application: "Resposta rápida e associação direta de ideias.",
    skills: ["speaking", "vocabulary"],
    minutes: 25,
    opening:
      "Nesta etapa você treina responder sem traduzir. O objetivo não é a resposta perfeita: é a resposta imediata.",
    warmUp: [
      "Diga em voz alta 5 objetos que você vê agora, em inglês, sem traduzir.",
      "Descreva seu dia de ontem em 3 frases curtas.",
      "Responda em 3 segundos: What did you have for breakfast?",
    ],
    input: {
      context: "Duas colegas se encontram no corredor do escritório.",
      dialogue: [
        { who: "Ana", line: "Hey, how's it going?" },
        { who: "Beth", line: "Pretty good, actually. Busy morning, but I'm getting there." },
        { who: "Ana", line: "Same here. Did you manage to finish the report?" },
        { who: "Beth", line: "Almost. I just need to double-check a couple of numbers." },
        { who: "Ana", line: "Nice. Let me know if you need a hand." },
      ],
    },
    notice: [
      "\"Pretty good, actually\" — respostas naturais raramente são só \"fine\".",
      "\"I'm getting there\" é um chunk pronto: significa \"estou chegando lá\".",
      "\"Did you manage to…\" substitui \"Did you finish\" com mais naturalidade.",
    ],
    chunks: [
      { en: "I'm getting there.", pt: "Estou chegando lá." },
      { en: "Pretty good, actually.", pt: "Bem bom, na verdade." },
      { en: "Let me know if you need a hand.", pt: "Me avise se precisar de ajuda." },
      { en: "I just need to double-check something.", pt: "Só preciso conferir uma coisa." },
      { en: "Off the top of my head…", pt: "Assim de cabeça…" },
    ],
    practice: [
      { prompt: "How's your week going?", hint: "Responda em 10 segundos usando um chunk do módulo." },
      { prompt: "What are you working on right now?", hint: "Use o presente contínuo, sem traduzir." },
      { prompt: "Describe your desk in English.", hint: "5 frases curtas, sem parar para pensar." },
    ],
    challenge: {
      context: "Um colega estrangeiro pergunta sobre sua rotina de trabalho.",
      goal: "Fale por 60 segundos sobre sua rotina usando pelo menos 2 chunks do módulo.",
      seconds: 60,
    },
    reflection: [
      "Você traduziu mentalmente em algum momento?",
      "Qual chunk saiu automático e qual ainda travou?",
    ],
    checkpoint: [
      { question: "\"I'm getting ___\" (estou chegando lá).", options: ["there", "here", "it"], answer: "there" },
      {
        question: "Resposta mais natural para \"How's it going?\":",
        options: ["I am fine, thank you.", "Pretty good, actually.", "Yes, it goes."],
        answer: "Pretty good, actually.",
      },
      {
        question: "\"Did you ___ to finish the report?\"",
        options: ["manage", "managed", "managing"],
        answer: "manage",
      },
    ],
    passportBadge: "Think in English",
  },
  {
    id: "speak-naturally",
    order: 2,
    titleEn: "Speak Naturally",
    titlePt: "Falar com naturalidade",
    objective: "Aumentar a naturalidade da fala.",
    application: "Chunks, conectores e reformulação.",
    skills: ["speaking", "pronunciation", "vocabulary"],
    minutes: 25,
    opening:
      "Naturalidade vem de blocos prontos e conectores. Você vai trocar frases traduzidas por expressões que nativos realmente usam.",
    warmUp: [
      "Reformule: \"I think that is a good idea\" em 3 versões diferentes.",
      "Ligue duas ideias suas com \"that's why\" e \"even though\".",
    ],
    input: {
      context: "Reunião curta de alinhamento entre time e cliente.",
      dialogue: [
        { who: "Client", line: "So, where are we with the launch?" },
        { who: "Lead", line: "We're on track, more or less. The design is done, and we're wrapping up the copy." },
        { who: "Client", line: "Any blockers I should know about?" },
        { who: "Lead", line: "Nothing major. That said, we might need one extra day for testing." },
        { who: "Client", line: "That works for me." },
      ],
    },
    notice: [
      "\"More or less\" e \"nothing major\" suavizam a resposta.",
      "\"That said\" introduz uma ressalva sem soar negativo.",
      "\"That works for me\" é a forma natural de concordar.",
    ],
    chunks: [
      { en: "We're on track.", pt: "Estamos no prazo." },
      { en: "That said, …", pt: "Dito isso, …" },
      { en: "Nothing major.", pt: "Nada sério." },
      { en: "That works for me.", pt: "Por mim, tudo bem." },
      { en: "We're wrapping up…", pt: "Estamos finalizando…" },
    ],
    practice: [
      { prompt: "Reformule: \"I not agree with this idea.\"", hint: "Use \"I'm not sure I agree…\"." },
      { prompt: "Dê uma atualização de projeto em 3 frases.", hint: "Use \"on track\" e \"that said\"." },
      { prompt: "Discorde com educação de uma sugestão.", hint: "Comece com \"I see your point, but…\"." },
    ],
    challenge: {
      context: "Você precisa dar um status update para um cliente internacional.",
      goal: "Grave 60 a 90 segundos com 3 conectores e 2 chunks do módulo.",
      seconds: 90,
    },
    reflection: ["Sua fala soou mais fluida ou mais 'traduzida'?", "Quais conectores você repetiu demais?"],
    checkpoint: [
      { question: "\"___ said, we might need more time.\"", options: ["That", "This", "It"], answer: "That" },
      { question: "Concordância natural:", options: ["That works for me.", "It works to me.", "That work for me."], answer: "That works for me." },
      { question: "\"We're ___ up the copy.\"", options: ["wrapping", "wrap", "wrapped"], answer: "wrapping" },
    ],
    passportBadge: "Speak Naturally",
  },
  {
    id: "everyday-conversations",
    order: 3,
    titleEn: "Everyday Conversations",
    titlePt: "Conversas do dia a dia",
    objective: "Sustentar conversas por mais tempo.",
    application: "Perguntas e follow-ups.",
    skills: ["speaking", "listening", "confidence"],
    minutes: 25,
    opening: "Conversa se sustenta com perguntas. Você vai treinar follow-ups que mantêm o outro falando.",
    warmUp: [
      "Para cada resposta, crie um follow-up: \"I went to the beach.\" → ?",
      "Pratique 5 perguntas abertas começando com How e What.",
    ],
    input: {
      context: "Dois vizinhos conversam no elevador.",
      dialogue: [
        { who: "Sam", line: "Long weekend, huh? Did you go anywhere?" },
        { who: "Rita", line: "We drove up to the mountains. It was freezing." },
        { who: "Sam", line: "Really? How cold was it?" },
        { who: "Rita", line: "Close to zero at night. Worth it, though — the view was unreal." },
        { who: "Sam", line: "Sounds amazing. Would you go back?" },
      ],
    },
    notice: [
      "\"Really? How cold was it?\" — reação + pergunta específica.",
      "\"Worth it, though\" adiciona opinião sem mudar de assunto.",
      "Perguntas fechadas matam a conversa; abertas prolongam.",
    ],
    chunks: [
      { en: "Did you go anywhere?", pt: "Você foi a algum lugar?" },
      { en: "Worth it, though.", pt: "Mas valeu a pena." },
      { en: "Sounds amazing.", pt: "Parece incrível." },
      { en: "What was it like?", pt: "Como foi?" },
      { en: "How did that go?", pt: "E como foi isso?" },
    ],
    practice: [
      { prompt: "\"I started a new job last month.\"", hint: "Reaja e faça 2 follow-ups." },
      { prompt: "\"I don't really like cooking.\"", hint: "Mantenha a conversa viva sem julgar." },
      { prompt: "Conte um fim de semana e termine com uma pergunta.", hint: "Devolva a bola." },
    ],
    challenge: {
      context: "Small talk com um colega novo antes da reunião.",
      goal: "Sustente 6 turnos: reaja, pergunte e conte algo seu.",
      seconds: 90,
    },
    reflection: ["Você fez perguntas abertas?", "A conversa ficou equilibrada entre os dois?"],
    checkpoint: [
      { question: "Follow-up mais natural:", options: ["What was it like?", "What is it?", "How is like?"], answer: "What was it like?" },
      { question: "\"Worth it, ___.\"", options: ["though", "although", "thought"], answer: "though" },
      { question: "Pergunta aberta:", options: ["Did you like it?", "How did that go?", "Is it good?"], answer: "How did that go?" },
    ],
    passportBadge: "Conversation",
  },
  {
    id: "storytelling",
    order: 4,
    titleEn: "Storytelling",
    titlePt: "Contar histórias",
    objective: "Contar experiências com começo, meio e fim.",
    application: "Narrativa e opinião.",
    skills: ["speaking", "vocabulary"],
    minutes: 25,
    opening: "Histórias organizam a fala. Com estrutura, você fala mais tempo sem travar.",
    warmUp: [
      "Conte um fato de ontem em 3 frases: setup, evento, resultado.",
      "Pratique os marcadores: first, then, at that point, in the end.",
    ],
    input: {
      context: "Um amigo conta um perrengue de viagem.",
      dialogue: [
        { who: "Léo", line: "So, we got to the airport two hours early, right?" },
        { who: "Friend", line: "Okay…" },
        { who: "Léo", line: "Then they announced the flight was delayed. Three hours." },
        { who: "Friend", line: "Oh no." },
        { who: "Léo", line: "At that point I just grabbed a coffee and gave up. In the end, we landed at 2 a.m." },
      ],
    },
    notice: [
      "\"So, …, right?\" abre a história e envolve o ouvinte.",
      "\"At that point\" marca a virada.",
      "\"In the end\" fecha o desfecho.",
    ],
    chunks: [
      { en: "So, long story short…", pt: "Resumindo a história…" },
      { en: "At that point…", pt: "Nesse momento…" },
      { en: "In the end…", pt: "No fim das contas…" },
      { en: "You won't believe what happened.", pt: "Você não vai acreditar no que aconteceu." },
      { en: "It turned out fine.", pt: "No fim deu tudo certo." },
    ],
    practice: [
      { prompt: "Conte a última vez que você se atrasou.", hint: "Use first / then / in the end." },
      { prompt: "Conte algo engraçado do trabalho.", hint: "Comece com \"So, …, right?\"." },
      { prompt: "Dê sua opinião sobre a história que contou.", hint: "\"Looking back, I think…\"." },
    ],
    challenge: {
      context: "Jantar com amigos internacionais.",
      goal: "Conte uma história real de 90 segundos com abertura, virada e desfecho.",
      seconds: 90,
    },
    reflection: ["A história teve estrutura clara?", "Você usou marcadores de tempo?"],
    checkpoint: [
      { question: "\"___ the end, we landed at 2 a.m.\"", options: ["In", "On", "At"], answer: "In" },
      { question: "Marcador de virada:", options: ["At that point", "By the way", "In case"], answer: "At that point" },
      { question: "\"Long story ___.\"", options: ["short", "small", "quick"], answer: "short" },
    ],
    passportBadge: "Storytelling",
  },
  {
    id: "listening-real-life",
    order: 5,
    titleEn: "Listening in Real Life",
    titlePt: "Escuta na vida real",
    objective: "Compreender fala natural em velocidade real.",
    application: "Velocidade, contexto e sotaques.",
    skills: ["listening", "pronunciation"],
    minutes: 25,
    opening: "Você vai treinar a escuta com fala conectada — quando as palavras se juntam.",
    warmUp: [
      "Ouça e repita: \"What are you doing?\" → \"Whatcha doin'?\"",
      "Ouça e repita: \"I'm going to call you\" → \"I'm gonna call ya\".",
    ],
    input: {
      context: "Anúncio de embarque e conversa rápida com o atendente.",
      dialogue: [
        { who: "Announcement", line: "Ladies and gentlemen, we'll begin boarding in about ten minutes at gate twelve." },
        { who: "Agent", line: "Do you have any carry-on you'd like to check?" },
        { who: "Traveler", line: "No, I'm good, thanks. Is the flight still on time?" },
        { who: "Agent", line: "It is, yeah. Boarding starts shortly." },
      ],
    },
    notice: [
      "\"We'll begin\" soa como \"we'll-begin\" — sem pausa entre palavras.",
      "\"I'm good\" significa \"não, obrigado\".",
      "\"It is, yeah\" — confirmação curta, muito comum.",
    ],
    chunks: [
      { en: "I'm good, thanks.", pt: "Estou bem assim, obrigado." },
      { en: "Sorry, could you repeat that?", pt: "Desculpe, pode repetir?" },
      { en: "I didn't catch that.", pt: "Não entendi o que você disse." },
      { en: "Shortly.", pt: "Em breve." },
      { en: "Say that again, please?", pt: "Pode falar de novo, por favor?" },
    ],
    practice: [
      { prompt: "Ouça o diálogo e resuma em inglês em 2 frases.", hint: "Não traduza: resuma." },
      { prompt: "Peça repetição de 3 formas diferentes.", hint: "Use os chunks do módulo." },
      { prompt: "Repita o anúncio imitando o ritmo.", hint: "Shadowing: fale junto com a IA." },
    ],
    challenge: {
      context: "Você não entendeu uma instrução em um aeroporto.",
      goal: "Peça esclarecimento e confirme o que entendeu, em 45 segundos.",
      seconds: 45,
    },
    reflection: ["Você entendeu o sentido geral sem traduzir?", "Quais sons se juntaram e confundiram?"],
    checkpoint: [
      { question: "\"I didn't ___ that.\"", options: ["catch", "hear of", "listen"], answer: "catch" },
      { question: "\"I'm good, thanks\" significa:", options: ["Estou bem assim, obrigado", "Eu sou bom", "Está ótimo"], answer: "Estou bem assim, obrigado" },
      { question: "\"Boarding starts ___.\"", options: ["shortly", "short", "shorter"], answer: "shortly" },
    ],
    passportBadge: "Listening",
  },
  {
    id: "confidence-conversation",
    order: 6,
    titleEn: "Confidence & Conversation",
    titlePt: "Confiança e conversa",
    objective: "Manter a conversa mesmo diante de imprevistos.",
    application: "Estratégias de contorno e ganho de tempo.",
    skills: ["speaking", "confidence"],
    minutes: 25,
    opening: "Travar é normal. O que muda tudo é ter estratégias prontas para continuar falando.",
    warmUp: [
      "Explique \"chaveiro\" sem saber a palavra em inglês.",
      "Ganhe tempo com: \"Let me think for a second…\".",
    ],
    input: {
      context: "Reunião em que o aluno esquece uma palavra.",
      dialogue: [
        { who: "Manager", line: "Could you walk me through the process?" },
        { who: "You", line: "Sure. First we collect the… sorry, what's the word… the feedback forms." },
        { who: "Manager", line: "Got it." },
        { who: "You", line: "Right, and then we go over them together — kind of like a review meeting." },
      ],
    },
    notice: [
      "\"Sorry, what's the word…\" é aceitável e natural.",
      "\"Kind of like…\" permite explicar por aproximação.",
      "Pausas preenchidas mantêm o turno de fala.",
    ],
    chunks: [
      { en: "Let me think for a second.", pt: "Deixa eu pensar um segundo." },
      { en: "It's kind of like…", pt: "É meio como…" },
      { en: "How do I put this…", pt: "Como eu digo isso…" },
      { en: "What I mean is…", pt: "O que eu quero dizer é…" },
      { en: "Sorry, I lost my train of thought.", pt: "Desculpe, perdi o raciocínio." },
    ],
    practice: [
      { prompt: "Explique \"tomada elétrica\" sem dizer 'socket'.", hint: "Use \"it's kind of like…\"." },
      { prompt: "Responda uma pergunta difícil ganhando tempo.", hint: "Use 2 estratégias diferentes." },
      { prompt: "Corrija-se no meio da frase e siga em frente.", hint: "\"What I mean is…\"." },
    ],
    challenge: {
      context: "Pergunta inesperada de um cliente sobre um tema que você não domina.",
      goal: "Responda por 60 segundos sem travar, usando 2 estratégias de contorno.",
      seconds: 60,
    },
    reflection: ["Você travou e recuperou?", "Qual estratégia funcionou melhor?"],
    checkpoint: [
      { question: "\"It's kind ___ like a review meeting.\"", options: ["of", "to", "as"], answer: "of" },
      { question: "Ganhar tempo:", options: ["Let me think for a second.", "Wait me.", "I think second."], answer: "Let me think for a second." },
      { question: "\"What I ___ is…\"", options: ["mean", "means", "meaning"], answer: "mean" },
    ],
    passportBadge: "Confidence",
  },
  {
    id: "real-world-fluency",
    order: 7,
    titleEn: "Real-World Fluency",
    titlePt: "Fluência no mundo real",
    objective: "Integrar todas as habilidades em missões complexas.",
    application: "Missões com múltiplas etapas.",
    skills: ["listening", "speaking", "vocabulary", "confidence"],
    minutes: 30,
    opening: "Agora tudo junto: ouvir, reagir, negociar e concluir uma tarefa real em inglês.",
    warmUp: ["Revise 5 chunks favoritos dos módulos anteriores.", "Faça 1 minuto de fala livre sobre o seu dia."],
    input: {
      context: "Você precisa resolver um problema com uma reserva de hotel por telefone.",
      dialogue: [
        { who: "Hotel", line: "Thanks for calling. How can I help you today?" },
        { who: "You", line: "Hi, I have a reservation for tonight, but I need to change the dates." },
        { who: "Hotel", line: "Let me pull that up. Can I get your confirmation number?" },
        { who: "You", line: "Sure, it's BR4409. Would there be a change fee?" },
        { who: "Hotel", line: "There's a small difference in rate, but no fee." },
      ],
    },
    notice: [
      "Abra com contexto + pedido claro.",
      "\"Would there be…\" soa mais polido que \"Is there…\".",
      "Confirme detalhes numéricos repetindo em voz alta.",
    ],
    chunks: [
      { en: "I'd like to change my reservation.", pt: "Eu gostaria de alterar minha reserva." },
      { en: "Would there be an extra charge?", pt: "Haveria alguma cobrança extra?" },
      { en: "Just to confirm, …", pt: "Só para confirmar, …" },
      { en: "Could you send that in writing?", pt: "Você poderia enviar isso por escrito?" },
      { en: "That should be all, thanks.", pt: "Acho que é isso, obrigado." },
    ],
    practice: [
      { prompt: "Resolva um pedido errado em um restaurante.", hint: "Educado e objetivo." },
      { prompt: "Negocie uma troca de horário de reunião.", hint: "Ofereça duas alternativas." },
      { prompt: "Confirme detalhes de um contrato por telefone.", hint: "Use \"just to confirm\"." },
    ],
    challenge: {
      context: "Missão completa: remarcar um voo, confirmar bagagem e pedir comprovante por e-mail.",
      goal: "Cumpra as 3 tarefas em uma única fala de até 2 minutos.",
      seconds: 120,
    },
    reflection: ["Você concluiu todas as tarefas?", "O que faria diferente na próxima tentativa?"],
    checkpoint: [
      { question: "\"Would there ___ an extra charge?\"", options: ["be", "is", "has"], answer: "be" },
      { question: "\"Just to ___, my flight leaves at 8.\"", options: ["confirm", "confirmation", "confirmed"], answer: "confirm" },
      { question: "Pedido polido:", options: ["Send me the email.", "Could you send that in writing?", "You send writing."], answer: "Could you send that in writing?" },
    ],
    passportBadge: "Real-World Fluency",
  },
  {
    id: "personal-fluency-path",
    order: 8,
    titleEn: "Personal Fluency Path",
    titlePt: "Trilha pessoal de fluência",
    objective: "Corrigir lacunas individuais com trilha adaptativa.",
    application: "Prática dirigida pelas prioridades apontadas pela IA.",
    skills: ["listening", "speaking", "vocabulary", "pronunciation", "confidence"],
    minutes: 30,
    opening:
      "A IA analisa suas tentativas anteriores e monta a prática do que ainda trava. Cada rodada é diferente.",
    warmUp: ["Releia o feedback do último módulo.", "Escolha 1 prioridade para esta sessão."],
    input: {
      context: "Sessão de coaching: a IA devolve o retrato da sua fala e propõe o próximo passo.",
      dialogue: [
        { who: "Coach", line: "Your grammar is solid, but you pause a lot before verbs." },
        { who: "You", line: "Yeah, I translate first." },
        { who: "Coach", line: "Let's fix that with chunk drills. Short sentences, no pauses." },
        { who: "You", line: "Sounds good. Let's do it." },
      ],
    },
    notice: [
      "Prioridade única por sessão gera mais progresso do que corrigir tudo.",
      "Repetição espaçada consolida chunks.",
    ],
    chunks: [
      { en: "Let's do it.", pt: "Vamos nessa." },
      { en: "I'll work on that.", pt: "Vou trabalhar nisso." },
      { en: "That's my weak spot.", pt: "Esse é meu ponto fraco." },
      { en: "One step at a time.", pt: "Um passo de cada vez." },
      { en: "I'm getting more comfortable with…", pt: "Estou ficando mais à vontade com…" },
    ],
    practice: [
      { prompt: "Fale 60 segundos sobre sua prioridade atual.", hint: "Use frases curtas, sem pausa longa." },
      { prompt: "Refaça o desafio do módulo em que teve a menor nota.", hint: "Compare com a tentativa anterior." },
      { prompt: "Grave um resumo semanal do que evoluiu.", hint: "3 frases, sem roteiro." },
    ],
    challenge: {
      context: "Avaliação de fluência integrada.",
      goal: "Fale 2 minutos sobre um tema livre demonstrando as habilidades dos 7 módulos anteriores.",
      seconds: 120,
    },
    reflection: ["Qual habilidade mais evoluiu?", "Qual é a próxima prioridade?"],
    checkpoint: [
      { question: "\"I'll ___ on that.\"", options: ["work", "works", "working"], answer: "work" },
      { question: "\"One step ___ a time.\"", options: ["at", "in", "on"], answer: "at" },
      { question: "\"That's my weak ___.\"", options: ["spot", "point", "side"], answer: "spot" },
    ],
    passportBadge: "Personal Path",
  },
];

export function getFluencyModule(id: string) {
  return FLUENCY_MODULES.find((module) => module.id === id) ?? null;
}

/** Blocos da rotina diária recomendada (PRD §10). */
export const DAILY_BLOCKS = [
  {
    id: "listening",
    labelEn: "Listening",
    labelPt: "Escuta",
    minutes: 10,
    goal: "Compreender input contextualizado",
  },
  {
    id: "speaking",
    labelEn: "Speaking",
    labelPt: "Fala",
    minutes: 10,
    goal: "Produzir fala e responder prompts",
  },
  {
    id: "vocabulary",
    labelEn: "Vocabulary / Review",
    labelPt: "Vocabulário e revisão",
    minutes: 5,
    goal: "Ativar e consolidar repertório",
  },
] as const;

export type DailyBlockId = (typeof DAILY_BLOCKS)[number]["id"];

export const FLUENCY_SKILL_LABELS: Record<FluencySkill, { en: string; pt: string }> = {
  listening: { en: "Listening", pt: "Escuta" },
  speaking: { en: "Speaking", pt: "Fala" },
  vocabulary: { en: "Vocabulary", pt: "Vocabulário" },
  pronunciation: { en: "Pronunciation", pt: "Pronúncia" },
  confidence: { en: "Confidence", pt: "Confiança" },
};
