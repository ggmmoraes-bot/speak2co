/**
 * Speak2Fluency — arquitetura curricular do PRD v1.0.
 * 8 módulos, cada um com a estrutura de 10 etapas: opening, warm-up, input,
 * notice, practice, challenge, AI feedback, retry, reflection e checkpoint.
 *
 * Padrão bilíngue: o enunciado principal é sempre em inglês (`en`) e a
 * tradução (`pt`) é opcional — só entra quando o inglês não for óbvio.
 */

export type FluencySkill = "listening" | "speaking" | "vocabulary" | "pronunciation" | "confidence";

/** Enunciado bilíngue: inglês em destaque, tradução opcional abaixo. */
export type Bilingual = { en: string; pt?: string };

export type FluencyChunk = { en: string; pt: string };
export type FluencyDialogueLine = { who: string; line: string };
export type FluencyPractice = { prompt: Bilingual; hint: Bilingual };
export type FluencyCheckpoint = { question: string; options: string[]; answer: string };

export type FluencyModule = {
  id: string;
  order: number;
  titleEn: string;
  titlePt: string;
  objective: Bilingual;
  application: Bilingual;
  skills: FluencySkill[];
  minutes: number;
  opening: Bilingual;
  warmUp: Bilingual[];
  input: { context: Bilingual; dialogue: FluencyDialogueLine[] };
  notice: Bilingual[];
  chunks: FluencyChunk[];
  practice: FluencyPractice[];
  challenge: { context: Bilingual; goal: Bilingual; seconds: number };
  reflection: Bilingual[];
  checkpoint: FluencyCheckpoint[];
  passportBadge: string;
};

export const FLUENCY_STEPS = [
  { id: "opening", labelEn: "Opening", labelPt: "Abertura" },
  { id: "warmup", labelEn: "Warm-up", labelPt: "Aquecimento" },
  { id: "input", labelEn: "Listening & Reading", labelPt: "Escuta e leitura" },
  { id: "notice", labelEn: "Notice the Patterns", labelPt: "Padrões observados" },
  { id: "practice", labelEn: "Guided Practice", labelPt: "Prática guiada" },
  { id: "challenge", labelEn: "Speaking Challenge", labelPt: "Desafio de fala" },
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
    objective: {
      en: "Reduce your dependence on mental translation.",
      pt: "Reduzir a dependência de tradução mental.",
    },
    application: { en: "Fast answers and direct idea association." },
    skills: ["speaking", "vocabulary"],
    minutes: 25,
    opening: {
      en: "In this module you train answering without translating. The goal is not the perfect answer — it's the immediate one.",
      pt: "Aqui você treina responder sem traduzir. O objetivo não é a resposta perfeita: é a resposta imediata.",
    },
    warmUp: [
      { en: "Say out loud 5 objects you can see right now — in English, no translating." },
      { en: "Describe your day yesterday in 3 short sentences." },
      { en: "Answer in 3 seconds: What did you have for breakfast?" },
    ],
    input: {
      context: { en: "Two colleagues meet in the office hallway." },
      dialogue: [
        { who: "Ana", line: "Hey, how's it going?" },
        { who: "Beth", line: "Pretty good, actually. Busy morning, but I'm getting there." },
        { who: "Ana", line: "Same here. Did you manage to finish the report?" },
        { who: "Beth", line: "Almost. I just need to double-check a couple of numbers." },
        { who: "Ana", line: "Nice. Let me know if you need a hand." },
      ],
    },
    notice: [
      {
        en: '"Pretty good, actually" — natural answers are rarely just "fine".',
        pt: 'Respostas naturais raramente são só "fine".',
      },
      { en: '"I\'m getting there" is a ready-made chunk.', pt: 'Significa "estou chegando lá".' },
      {
        en: '"Did you manage to…" sounds more natural than "Did you finish".',
      },
    ],
    chunks: [
      { en: "I'm getting there.", pt: "Estou chegando lá." },
      { en: "Pretty good, actually.", pt: "Bem bom, na verdade." },
      { en: "Let me know if you need a hand.", pt: "Me avise se precisar de ajuda." },
      { en: "I just need to double-check something.", pt: "Só preciso conferir uma coisa." },
      { en: "Off the top of my head…", pt: "Assim de cabeça…" },
    ],
    practice: [
      {
        prompt: { en: "How's your week going?" },
        hint: { en: "Answer in 10 seconds using one chunk from this module." },
      },
      {
        prompt: { en: "What are you working on right now?" },
        hint: { en: "Use the present continuous — no translating." },
      },
      {
        prompt: { en: "Describe your desk in English." },
        hint: { en: "5 short sentences, without stopping to think." },
      },
    ],
    challenge: {
      context: { en: "An international colleague asks about your work routine." },
      goal: {
        en: "Speak for 60 seconds about your routine using at least 2 chunks from this module.",
        pt: "Fale 60 segundos sobre sua rotina usando pelo menos 2 chunks do módulo.",
      },
      seconds: 60,
    },
    reflection: [
      { en: "Did you translate in your head at any point?" },
      { en: "Which chunk came out automatically, and which one still blocked you?" },
    ],
    checkpoint: [
      { question: "\"I'm getting ___.\" (estou chegando lá)", options: ["there", "here", "it"], answer: "there" },
      {
        question: 'Most natural answer to "How\'s it going?"',
        options: ["I am fine, thank you.", "Pretty good, actually.", "Yes, it goes."],
        answer: "Pretty good, actually.",
      },
      {
        question: '"Did you ___ to finish the report?"',
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
    objective: { en: "Make your speech sound more natural.", pt: "Aumentar a naturalidade da fala." },
    application: { en: "Chunks, connectors and rephrasing." },
    skills: ["speaking", "pronunciation", "vocabulary"],
    minutes: 25,
    opening: {
      en: "Natural speech comes from ready-made blocks and connectors. You'll replace translated sentences with expressions native speakers really use.",
      pt: "Naturalidade vem de blocos prontos e conectores: troque frases traduzidas por expressões reais.",
    },
    warmUp: [
      { en: 'Rephrase "I think that is a good idea" in 3 different ways.' },
      { en: 'Link two of your own ideas with "that\'s why" and "even though".' },
    ],
    input: {
      context: { en: "A short alignment meeting between the team and the client." },
      dialogue: [
        { who: "Client", line: "So, where are we with the launch?" },
        { who: "Lead", line: "We're on track, more or less. The design is done, and we're wrapping up the copy." },
        { who: "Client", line: "Any blockers I should know about?" },
        { who: "Lead", line: "Nothing major. That said, we might need one extra day for testing." },
        { who: "Client", line: "That works for me." },
      ],
    },
    notice: [
      { en: '"More or less" and "nothing major" soften the answer.' },
      { en: '"That said" adds a caveat without sounding negative.' },
      { en: '"That works for me" is the natural way to agree.' },
    ],
    chunks: [
      { en: "We're on track.", pt: "Estamos no prazo." },
      { en: "That said, …", pt: "Dito isso, …" },
      { en: "Nothing major.", pt: "Nada sério." },
      { en: "That works for me.", pt: "Por mim, tudo bem." },
      { en: "We're wrapping up…", pt: "Estamos finalizando…" },
    ],
    practice: [
      {
        prompt: { en: 'Rephrase: "I not agree with this idea."' },
        hint: { en: 'Use "I\'m not sure I agree…".' },
      },
      {
        prompt: { en: "Give a project update in 3 sentences." },
        hint: { en: 'Use "on track" and "that said".' },
      },
      {
        prompt: { en: "Disagree politely with a suggestion." },
        hint: { en: 'Start with "I see your point, but…".' },
      },
    ],
    challenge: {
      context: { en: "You need to give a status update to an international client." },
      goal: { en: "Record 60 to 90 seconds using 3 connectors and 2 chunks from this module." },
      seconds: 90,
    },
    reflection: [
      { en: "Did your speech sound more fluid or more 'translated'?" },
      { en: "Which connectors did you overuse?" },
    ],
    checkpoint: [
      { question: '"___ said, we might need more time."', options: ["That", "This", "It"], answer: "That" },
      {
        question: "Natural way to agree:",
        options: ["That works for me.", "It works to me.", "That work for me."],
        answer: "That works for me.",
      },
      { question: '"We\'re ___ up the copy."', options: ["wrapping", "wrap", "wrapped"], answer: "wrapping" },
    ],
    passportBadge: "Speak Naturally",
  },
  {
    id: "everyday-conversations",
    order: 3,
    titleEn: "Everyday Conversations",
    titlePt: "Conversas do dia a dia",
    objective: { en: "Keep conversations going for longer.", pt: "Sustentar conversas por mais tempo." },
    application: { en: "Questions and follow-ups." },
    skills: ["speaking", "listening", "confidence"],
    minutes: 25,
    opening: {
      en: "Conversation survives on questions. You'll train follow-ups that keep the other person talking.",
      pt: "Conversa se sustenta com perguntas: treine follow-ups que mantêm o outro falando.",
    },
    warmUp: [
      { en: 'Create a follow-up for each answer: "I went to the beach." → ?' },
      { en: "Practise 5 open questions starting with How and What." },
    ],
    input: {
      context: { en: "Two neighbours chat in the elevator." },
      dialogue: [
        { who: "Sam", line: "Long weekend, huh? Did you go anywhere?" },
        { who: "Rita", line: "We drove up to the mountains. It was freezing." },
        { who: "Sam", line: "Really? How cold was it?" },
        { who: "Rita", line: "Close to zero at night. Worth it, though — the view was unreal." },
        { who: "Sam", line: "Sounds amazing. Would you go back?" },
      ],
    },
    notice: [
      { en: '"Really? How cold was it?" — reaction + specific question.' },
      { en: '"Worth it, though" adds an opinion without changing the subject.' },
      { en: "Closed questions kill the conversation; open ones extend it." },
    ],
    chunks: [
      { en: "Did you go anywhere?", pt: "Você foi a algum lugar?" },
      { en: "Worth it, though.", pt: "Mas valeu a pena." },
      { en: "Sounds amazing.", pt: "Parece incrível." },
      { en: "What was it like?", pt: "Como foi?" },
      { en: "How did that go?", pt: "E como foi isso?" },
    ],
    practice: [
      {
        prompt: { en: '"I started a new job last month."' },
        hint: { en: "React and ask 2 follow-up questions." },
      },
      {
        prompt: { en: '"I don\'t really like cooking."' },
        hint: { en: "Keep the conversation alive without judging." },
      },
      {
        prompt: { en: "Tell me about your weekend and finish with a question." },
        hint: { en: "Pass the ball back to your partner." },
      },
    ],
    challenge: {
      context: { en: "Small talk with a new colleague before a meeting." },
      goal: { en: "Sustain 6 turns: react, ask and share something about yourself." },
      seconds: 90,
    },
    reflection: [
      { en: "Did you ask open questions?" },
      { en: "Was the conversation balanced between both speakers?" },
    ],
    checkpoint: [
      {
        question: "Most natural follow-up:",
        options: ["What was it like?", "What is it?", "How is like?"],
        answer: "What was it like?",
      },
      { question: '"Worth it, ___."', options: ["though", "although", "thought"], answer: "though" },
      {
        question: "Open question:",
        options: ["Did you like it?", "How did that go?", "Is it good?"],
        answer: "How did that go?",
      },
    ],
    passportBadge: "Conversation",
  },
  {
    id: "storytelling",
    order: 4,
    titleEn: "Storytelling",
    titlePt: "Contar histórias",
    objective: {
      en: "Tell experiences with a beginning, middle and end.",
      pt: "Contar experiências com começo, meio e fim.",
    },
    application: { en: "Narrative and opinion." },
    skills: ["speaking", "vocabulary"],
    minutes: 25,
    opening: {
      en: "Stories organise your speech. With structure, you speak for longer without freezing.",
      pt: "Histórias organizam a fala: com estrutura, você fala mais tempo sem travar.",
    },
    warmUp: [
      { en: "Tell something that happened yesterday in 3 sentences: setup, event, result." },
      { en: "Practise the markers: first, then, at that point, in the end." },
    ],
    input: {
      context: { en: "A friend tells a travel disaster story." },
      dialogue: [
        { who: "Léo", line: "So, we got to the airport two hours early, right?" },
        { who: "Friend", line: "Okay…" },
        { who: "Léo", line: "Then they announced the flight was delayed. Three hours." },
        { who: "Friend", line: "Oh no." },
        { who: "Léo", line: "At that point I just grabbed a coffee and gave up. In the end, we landed at 2 a.m." },
      ],
    },
    notice: [
      { en: '"So, …, right?" opens the story and pulls the listener in.' },
      { en: '"At that point" marks the turning point.' },
      { en: '"In the end" closes the story.' },
    ],
    chunks: [
      { en: "So, long story short…", pt: "Resumindo a história…" },
      { en: "At that point…", pt: "Nesse momento…" },
      { en: "In the end…", pt: "No fim das contas…" },
      { en: "You won't believe what happened.", pt: "Você não vai acreditar no que aconteceu." },
      { en: "It turned out fine.", pt: "No fim deu tudo certo." },
    ],
    practice: [
      {
        prompt: { en: "Tell the story of the last time you were late." },
        hint: { en: "Use first / then / in the end." },
      },
      {
        prompt: { en: "Tell something funny that happened at work." },
        hint: { en: 'Start with "So, …, right?".' },
      },
      {
        prompt: { en: "Give your opinion about the story you just told." },
        hint: { en: 'Use "Looking back, I think…".' },
      },
    ],
    challenge: {
      context: { en: "Dinner with international friends." },
      goal: { en: "Tell a real 90-second story with an opening, a turning point and an ending." },
      seconds: 90,
    },
    reflection: [
      { en: "Did your story have a clear structure?" },
      { en: "Did you use time markers?" },
    ],
    checkpoint: [
      { question: '"___ the end, we landed at 2 a.m."', options: ["In", "On", "At"], answer: "In" },
      {
        question: "Turning-point marker:",
        options: ["At that point", "By the way", "In case"],
        answer: "At that point",
      },
      { question: '"Long story ___."', options: ["short", "small", "quick"], answer: "short" },
    ],
    passportBadge: "Storytelling",
  },
  {
    id: "listening-real-life",
    order: 5,
    titleEn: "Listening in Real Life",
    titlePt: "Escuta na vida real",
    objective: {
      en: "Understand natural speech at real speed.",
      pt: "Compreender fala natural em velocidade real.",
    },
    application: { en: "Speed, context and accents." },
    skills: ["listening", "pronunciation"],
    minutes: 25,
    opening: {
      en: "You'll train your ear for connected speech — when words blend into each other.",
      pt: "Treine a escuta com fala conectada, quando as palavras se juntam.",
    },
    warmUp: [
      { en: 'Listen and repeat: "What are you doing?" → "Whatcha doin\'?"' },
      { en: 'Listen and repeat: "I\'m going to call you" → "I\'m gonna call ya".' },
    ],
    input: {
      context: { en: "A boarding announcement and a quick chat with the gate agent." },
      dialogue: [
        { who: "Announcement", line: "Ladies and gentlemen, we'll begin boarding in about ten minutes at gate twelve." },
        { who: "Agent", line: "Do you have any carry-on you'd like to check?" },
        { who: "Traveler", line: "No, I'm good, thanks. Is the flight still on time?" },
        { who: "Agent", line: "It is, yeah. Boarding starts shortly." },
      ],
    },
    notice: [
      { en: '"We\'ll begin" sounds like "we\'ll-begin" — no pause between the words.' },
      { en: '"I\'m good" here means "no, thank you".', pt: 'Significa "não, obrigado".' },
      { en: '"It is, yeah" — a short confirmation, very common.' },
    ],
    chunks: [
      { en: "I'm good, thanks.", pt: "Estou bem assim, obrigado." },
      { en: "Sorry, could you repeat that?", pt: "Desculpe, pode repetir?" },
      { en: "I didn't catch that.", pt: "Não entendi o que você disse." },
      { en: "Shortly.", pt: "Em breve." },
      { en: "Say that again, please?", pt: "Pode falar de novo, por favor?" },
    ],
    practice: [
      {
        prompt: { en: "Listen to the dialogue and summarise it in English in 2 sentences." },
        hint: { en: "Don't translate — summarise." },
      },
      {
        prompt: { en: "Ask for repetition in 3 different ways." },
        hint: { en: "Use the chunks from this module." },
      },
      {
        prompt: { en: "Repeat the announcement imitating the rhythm." },
        hint: { en: "Shadowing: speak along with the AI voice." },
      },
    ],
    challenge: {
      context: { en: "You didn't understand an instruction at the airport." },
      goal: { en: "Ask for clarification and confirm what you understood, in 45 seconds." },
      seconds: 45,
    },
    reflection: [
      { en: "Did you get the general meaning without translating?" },
      { en: "Which sounds blended together and confused you?" },
    ],
    checkpoint: [
      { question: '"I didn\'t ___ that."', options: ["catch", "hear of", "listen"], answer: "catch" },
      {
        question: '"I\'m good, thanks" means:',
        options: ["No, thank you.", "I am a good person.", "It is great."],
        answer: "No, thank you.",
      },
      { question: '"Boarding starts ___."', options: ["shortly", "short", "shorter"], answer: "shortly" },
    ],
    passportBadge: "Listening",
  },
  {
    id: "confidence-conversation",
    order: 6,
    titleEn: "Confidence & Conversation",
    titlePt: "Confiança e conversa",
    objective: {
      en: "Keep the conversation going when something goes wrong.",
      pt: "Manter a conversa mesmo diante de imprevistos.",
    },
    application: { en: "Workaround strategies and buying time." },
    skills: ["speaking", "confidence"],
    minutes: 25,
    opening: {
      en: "Freezing is normal. What changes everything is having ready-made strategies to keep speaking.",
      pt: "Travar é normal: o que muda tudo é ter estratégias prontas para continuar falando.",
    },
    warmUp: [
      { en: 'Explain "keychain" without using the word.' },
      { en: 'Buy time with: "Let me think for a second…".' },
    ],
    input: {
      context: { en: "A meeting where the speaker forgets a word." },
      dialogue: [
        { who: "Manager", line: "Could you walk me through the process?" },
        { who: "You", line: "Sure. First we collect the… sorry, what's the word… the feedback forms." },
        { who: "Manager", line: "Got it." },
        { who: "You", line: "Right, and then we go over them together — kind of like a review meeting." },
      ],
    },
    notice: [
      { en: '"Sorry, what\'s the word…" is acceptable and natural.' },
      { en: '"Kind of like…" lets you explain by approximation.' },
      { en: "Filled pauses keep your speaking turn." },
    ],
    chunks: [
      { en: "Let me think for a second.", pt: "Deixa eu pensar um segundo." },
      { en: "It's kind of like…", pt: "É meio como…" },
      { en: "How do I put this…", pt: "Como eu digo isso…" },
      { en: "What I mean is…", pt: "O que eu quero dizer é…" },
      { en: "Sorry, I lost my train of thought.", pt: "Desculpe, perdi o raciocínio." },
    ],
    practice: [
      {
        prompt: { en: 'Explain "power outlet" without saying the word "socket".' },
        hint: { en: 'Use "it\'s kind of like…".' },
      },
      {
        prompt: { en: "Answer a difficult question while buying time." },
        hint: { en: "Use 2 different strategies." },
      },
      {
        prompt: { en: "Correct yourself mid-sentence and move on." },
        hint: { en: 'Use "What I mean is…".' },
      },
    ],
    challenge: {
      context: { en: "An unexpected client question about a topic you don't master." },
      goal: { en: "Speak for 60 seconds without freezing, using 2 workaround strategies." },
      seconds: 60,
    },
    reflection: [
      { en: "Did you freeze and recover?" },
      { en: "Which strategy worked best for you?" },
    ],
    checkpoint: [
      { question: '"It\'s kind ___ like a review meeting."', options: ["of", "to", "as"], answer: "of" },
      {
        question: "Buying time:",
        options: ["Let me think for a second.", "Wait me.", "I think second."],
        answer: "Let me think for a second.",
      },
      { question: '"What I ___ is…"', options: ["mean", "means", "meaning"], answer: "mean" },
    ],
    passportBadge: "Confidence",
  },
  {
    id: "real-world-fluency",
    order: 7,
    titleEn: "Real-World Fluency",
    titlePt: "Fluência no mundo real",
    objective: {
      en: "Combine every skill in complex real-life missions.",
      pt: "Integrar todas as habilidades em missões complexas.",
    },
    application: { en: "Multi-step missions." },
    skills: ["listening", "speaking", "vocabulary", "confidence"],
    minutes: 30,
    opening: {
      en: "Now everything together: listen, react, negotiate and complete a real task in English.",
      pt: "Agora tudo junto: ouvir, reagir, negociar e concluir uma tarefa real em inglês.",
    },
    warmUp: [
      { en: "Review 5 favourite chunks from the previous modules." },
      { en: "Speak freely about your day for 1 minute." },
    ],
    input: {
      context: { en: "You need to solve a hotel booking problem over the phone." },
      dialogue: [
        { who: "Hotel", line: "Thanks for calling. How can I help you today?" },
        { who: "You", line: "Hi, I have a reservation for tonight, but I need to change the dates." },
        { who: "Hotel", line: "Let me pull that up. Can I get your confirmation number?" },
        { who: "You", line: "Sure, it's BR4409. Would there be a change fee?" },
        { who: "Hotel", line: "There's a small difference in rate, but no fee." },
      ],
    },
    notice: [
      { en: "Open with context + a clear request." },
      { en: '"Would there be…" sounds more polite than "Is there…".' },
      { en: "Confirm numbers by repeating them out loud." },
    ],
    chunks: [
      { en: "I'd like to change my reservation.", pt: "Eu gostaria de alterar minha reserva." },
      { en: "Would there be an extra charge?", pt: "Haveria alguma cobrança extra?" },
      { en: "Just to confirm, …", pt: "Só para confirmar, …" },
      { en: "Could you send that in writing?", pt: "Você poderia enviar isso por escrito?" },
      { en: "That should be all, thanks.", pt: "Acho que é isso, obrigado." },
    ],
    practice: [
      {
        prompt: { en: "Solve a wrong order at a restaurant." },
        hint: { en: "Polite and objective." },
      },
      {
        prompt: { en: "Negotiate a new time for a meeting." },
        hint: { en: "Offer two alternatives." },
      },
      {
        prompt: { en: "Confirm contract details over the phone." },
        hint: { en: 'Use "just to confirm".' },
      },
    ],
    challenge: {
      context: { en: "Full mission: rebook a flight, confirm baggage and ask for an email receipt." },
      goal: { en: "Complete the 3 tasks in a single turn of up to 2 minutes." },
      seconds: 120,
    },
    reflection: [
      { en: "Did you complete all the tasks?" },
      { en: "What would you do differently next time?" },
    ],
    checkpoint: [
      { question: '"Would there ___ an extra charge?"', options: ["be", "is", "has"], answer: "be" },
      {
        question: '"Just to ___, my flight leaves at 8."',
        options: ["confirm", "confirmation", "confirmed"],
        answer: "confirm",
      },
      {
        question: "Polite request:",
        options: ["Send me the email.", "Could you send that in writing?", "You send writing."],
        answer: "Could you send that in writing?",
      },
    ],
    passportBadge: "Real-World Fluency",
  },
  {
    id: "personal-fluency-path",
    order: 8,
    titleEn: "Personal Fluency Path",
    titlePt: "Trilha pessoal de fluência",
    objective: {
      en: "Close your individual gaps with an adaptive path.",
      pt: "Corrigir lacunas individuais com trilha adaptativa.",
    },
    application: { en: "Practice driven by the AI's priorities for you." },
    skills: ["listening", "speaking", "vocabulary", "pronunciation", "confidence"],
    minutes: 30,
    opening: {
      en: "The AI reviews your previous attempts and builds practice around what still blocks you. Every round is different.",
      pt: "A IA analisa suas tentativas e monta a prática do que ainda trava. Cada rodada é diferente.",
    },
    warmUp: [
      { en: "Read the feedback from your last module again." },
      { en: "Choose 1 priority for this session." },
    ],
    input: {
      context: { en: "Coaching session: the AI describes your speech and proposes the next step." },
      dialogue: [
        { who: "Coach", line: "Your grammar is solid, but you pause a lot before verbs." },
        { who: "You", line: "Yeah, I translate first." },
        { who: "Coach", line: "Let's fix that with chunk drills. Short sentences, no pauses." },
        { who: "You", line: "Sounds good. Let's do it." },
      ],
    },
    notice: [
      { en: "One priority per session produces more progress than fixing everything at once." },
      { en: "Spaced repetition is what makes chunks stick." },
    ],
    chunks: [
      { en: "Let's do it.", pt: "Vamos nessa." },
      { en: "I'll work on that.", pt: "Vou trabalhar nisso." },
      { en: "That's my weak spot.", pt: "Esse é meu ponto fraco." },
      { en: "One step at a time.", pt: "Um passo de cada vez." },
      { en: "I'm getting more comfortable with…", pt: "Estou ficando mais à vontade com…" },
    ],
    practice: [
      {
        prompt: { en: "Speak for 60 seconds about your current priority." },
        hint: { en: "Short sentences, no long pauses." },
      },
      {
        prompt: { en: "Redo the challenge from the module with your lowest score." },
        hint: { en: "Compare it with your previous attempt." },
      },
      {
        prompt: { en: "Record a weekly summary of what improved." },
        hint: { en: "3 sentences, no script." },
      },
    ],
    challenge: {
      context: { en: "Integrated fluency assessment." },
      goal: { en: "Speak for 2 minutes on a free topic showing the skills from the previous 7 modules." },
      seconds: 120,
    },
    reflection: [
      { en: "Which skill improved the most?" },
      { en: "What is your next priority?" },
    ],
    checkpoint: [
      { question: '"I\'ll ___ on that."', options: ["work", "works", "working"], answer: "work" },
      { question: '"One step ___ a time."', options: ["at", "in", "on"], answer: "at" },
      { question: '"That\'s my weak ___."', options: ["spot", "point", "side"], answer: "spot" },
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
    goalEn: "Understand contextualised input",
    goalPt: "Compreender input contextualizado",
  },
  {
    id: "speaking",
    labelEn: "Speaking",
    labelPt: "Fala",
    minutes: 10,
    goalEn: "Produce speech and answer prompts",
    goalPt: "Produzir fala e responder prompts",
  },
  {
    id: "vocabulary",
    labelEn: "Vocabulary & Review",
    labelPt: "Vocabulário e revisão",
    minutes: 5,
    goalEn: "Activate and consolidate your repertoire",
    goalPt: "Ativar e consolidar repertório",
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
