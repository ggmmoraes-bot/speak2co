/**
 * Learning Tools — Listening Practice (biblioteca geral).
 * Conteúdo próprio e independente: nenhuma relação com Speak2Travel.
 * O listening de viagens continua integralmente dentro de Speak2Travel.
 */

export type ListeningQuestion = {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

export type ListeningWord = {
  term: string;
  pt: string;
};

export type ListeningActivity = {
  id: string;
  title: string;
  titlePt: string;
  theme: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  intro: string;
  transcript: { speaker: string; line: string }[];
  vocabulary: ListeningWord[];
  questions: ListeningQuestion[];
};

export const LISTENING_LEVELS = ["Beginner", "Intermediate", "Advanced"] as const;

export const GENERAL_LISTENING: ListeningActivity[] = [
  {
    id: "morning-routine",
    title: "A typical morning",
    titlePt: "Uma manhã típica",
    theme: "Daily routines",
    level: "Beginner",
    intro: "Anna describes what she does before work. Listen for times and daily verbs.",
    transcript: [
      { speaker: "Anna", line: "I usually wake up at six thirty in the morning." },
      { speaker: "Anna", line: "First, I drink a glass of water and take a quick shower." },
      { speaker: "Anna", line: "Then I have breakfast with my sister. We normally eat toast and fruit." },
      { speaker: "Anna", line: "I leave home at seven forty-five and take the bus to work." },
      { speaker: "Anna", line: "On Fridays I work from home, so I start a little later." },
    ],
    vocabulary: [
      { term: "wake up", pt: "acordar" },
      { term: "take a shower", pt: "tomar banho" },
      { term: "leave home", pt: "sair de casa" },
      { term: "normally", pt: "normalmente" },
    ],
    questions: [
      {
        question: "What time does Anna wake up?",
        options: ["At six o'clock", "At six thirty", "At seven forty-five"],
        answer: 1,
        explanation: "She says “I usually wake up at six thirty”.",
      },
      {
        question: "Who does she have breakfast with?",
        options: ["Her sister", "Her colleague", "Alone"],
        answer: 0,
        explanation: "“I have breakfast with my sister.”",
      },
      {
        question: "What is different on Fridays?",
        options: ["She takes the bus", "She works from home", "She skips breakfast"],
        answer: 1,
        explanation: "“On Fridays I work from home.”",
      },
    ],
  },
  {
    id: "family-weekend",
    title: "Weekend with the family",
    titlePt: "Fim de semana em família",
    theme: "Family",
    level: "Beginner",
    intro: "Two friends talk about their weekend plans with family.",
    transcript: [
      { speaker: "Paul", line: "What are you doing this weekend?" },
      { speaker: "Mia", line: "My parents are coming to visit, so we're having lunch together on Sunday." },
      { speaker: "Paul", line: "That sounds nice. Are your brothers coming too?" },
      { speaker: "Mia", line: "Only my younger brother. The other one lives abroad now." },
      { speaker: "Paul", line: "Well, say hello to everyone for me." },
    ],
    vocabulary: [
      { term: "visit", pt: "visitar" },
      { term: "together", pt: "juntos" },
      { term: "younger brother", pt: "irmão mais novo" },
      { term: "abroad", pt: "no exterior" },
    ],
    questions: [
      {
        question: "When is the family lunch?",
        options: ["On Saturday", "On Sunday", "On Friday"],
        answer: 1,
        explanation: "“We're having lunch together on Sunday.”",
      },
      {
        question: "Why is one brother not coming?",
        options: ["He is working", "He lives abroad", "He is sick"],
        answer: 1,
        explanation: "“The other one lives abroad now.”",
      },
    ],
  },
  {
    id: "supermarket",
    title: "At the supermarket",
    titlePt: "No supermercado",
    theme: "Shopping · Food",
    level: "Beginner",
    intro: "A short exchange between a customer and a shop assistant.",
    transcript: [
      { speaker: "Customer", line: "Excuse me, where can I find the rice?" },
      { speaker: "Assistant", line: "It's in aisle four, next to the pasta." },
      { speaker: "Customer", line: "Thanks. And do you have fresh bread today?" },
      { speaker: "Assistant", line: "Yes, but only until six. The bakery closes early on Mondays." },
      { speaker: "Customer", line: "Perfect. I'll take a loaf now, then." },
    ],
    vocabulary: [
      { term: "aisle", pt: "corredor (do mercado)" },
      { term: "fresh bread", pt: "pão fresco" },
      { term: "loaf", pt: "pão (unidade)" },
      { term: "close early", pt: "fechar mais cedo" },
    ],
    questions: [
      {
        question: "Where is the rice?",
        options: ["Aisle two", "Aisle four", "At the bakery"],
        answer: 1,
        explanation: "“It's in aisle four, next to the pasta.”",
      },
      {
        question: "Until what time is fresh bread available?",
        options: ["Until five", "Until six", "All day"],
        answer: 1,
        explanation: "“Yes, but only until six.”",
      },
    ],
  },
  {
    id: "job-interview-small-talk",
    title: "First day at a new job",
    titlePt: "Primeiro dia no novo emprego",
    theme: "Work",
    level: "Intermediate",
    intro: "A new employee meets a colleague. Notice the polite questions and the present perfect.",
    transcript: [
      { speaker: "Chris", line: "Hi, you must be the new analyst. I'm Chris, from operations." },
      { speaker: "Dana", line: "Nice to meet you, Chris. I started this morning, so everything is still new." },
      { speaker: "Chris", line: "Have you met the rest of the team yet?" },
      { speaker: "Dana", line: "Not everyone. I've met my manager and two people from finance." },
      { speaker: "Chris", line: "We usually have a quick stand-up at nine. It's a good way to catch up." },
      { speaker: "Dana", line: "Good to know. I'll make sure I'm there tomorrow." },
    ],
    vocabulary: [
      { term: "stand-up", pt: "reunião rápida diária" },
      { term: "catch up", pt: "colocar o assunto em dia" },
      { term: "the rest of the team", pt: "o restante da equipe" },
      { term: "make sure", pt: "garantir" },
    ],
    questions: [
      {
        question: "When did Dana start working there?",
        options: ["Last week", "This morning", "Yesterday"],
        answer: 1,
        explanation: "“I started this morning.”",
      },
      {
        question: "Who has Dana already met?",
        options: [
          "Her manager and two people from finance",
          "The whole team",
          "Nobody yet",
        ],
        answer: 0,
        explanation: "“I've met my manager and two people from finance.”",
      },
      {
        question: "What happens at nine?",
        options: ["Lunch", "A quick stand-up meeting", "A training session"],
        answer: 1,
        explanation: "“We usually have a quick stand-up at nine.”",
      },
    ],
  },
  {
    id: "doctor-appointment",
    title: "Booking a doctor's appointment",
    titlePt: "Marcando uma consulta médica",
    theme: "Health",
    level: "Intermediate",
    intro: "A phone call to a clinic. Focus on dates, symptoms and polite requests.",
    transcript: [
      { speaker: "Receptionist", line: "Good morning, Riverside Clinic. How can I help you?" },
      { speaker: "Patient", line: "Hi, I'd like to book an appointment with Dr Ellis, please." },
      { speaker: "Receptionist", line: "Of course. Is it urgent, or a routine check-up?" },
      { speaker: "Patient", line: "It's not urgent, but I've had a sore throat for about a week." },
      { speaker: "Receptionist", line: "We have a slot on Thursday at two fifteen. Does that work for you?" },
      { speaker: "Patient", line: "Thursday is fine. Should I bring anything?" },
      { speaker: "Receptionist", line: "Just your ID and any medication you're currently taking." },
    ],
    vocabulary: [
      { term: "book an appointment", pt: "marcar uma consulta" },
      { term: "check-up", pt: "consulta de rotina" },
      { term: "sore throat", pt: "dor de garganta" },
      { term: "slot", pt: "horário disponível" },
    ],
    questions: [
      {
        question: "What is the patient's symptom?",
        options: ["A headache", "A sore throat", "Back pain"],
        answer: 1,
        explanation: "“I've had a sore throat for about a week.”",
      },
      {
        question: "When is the appointment?",
        options: ["Thursday at two fifteen", "Tuesday at two", "Thursday at ten"],
        answer: 0,
        explanation: "“We have a slot on Thursday at two fifteen.”",
      },
      {
        question: "What should the patient bring?",
        options: ["Only money", "ID and current medication", "Nothing"],
        answer: 1,
        explanation: "“Just your ID and any medication you're currently taking.”",
      },
    ],
  },
  {
    id: "study-plans",
    title: "Choosing a course",
    titlePt: "Escolhendo um curso",
    theme: "Education",
    level: "Intermediate",
    intro: "Two students compare options. Listen for reasons and comparatives.",
    transcript: [
      { speaker: "Leo", line: "Have you decided which course you're going to take next term?" },
      { speaker: "Sara", line: "I'm between data analysis and public speaking." },
      { speaker: "Leo", line: "Data analysis is harder, but it's probably more useful for your job." },
      { speaker: "Sara", line: "True. On the other hand, presenting well would help me right now." },
      { speaker: "Leo", line: "Why not do the short one first and the longer one in the summer?" },
      { speaker: "Sara", line: "That's a good compromise. I'll check the schedule tonight." },
    ],
    vocabulary: [
      { term: "next term", pt: "no próximo semestre" },
      { term: "on the other hand", pt: "por outro lado" },
      { term: "compromise", pt: "meio-termo" },
      { term: "schedule", pt: "cronograma / horário" },
    ],
    questions: [
      {
        question: "Which two courses is Sara considering?",
        options: [
          "Data analysis and public speaking",
          "Marketing and finance",
          "English and design",
        ],
        answer: 0,
        explanation: "“I'm between data analysis and public speaking.”",
      },
      {
        question: "What does Leo suggest?",
        options: [
          "Taking the short course first",
          "Dropping both courses",
          "Taking both at the same time",
        ],
        answer: 0,
        explanation: "“Why not do the short one first…”",
      },
    ],
  },
  {
    id: "tech-support",
    title: "A call to tech support",
    titlePt: "Uma ligação para o suporte técnico",
    theme: "Technology",
    level: "Intermediate",
    intro: "Problem-solving language and step-by-step instructions.",
    transcript: [
      { speaker: "Agent", line: "Tech support, this is Omar speaking. What seems to be the problem?" },
      { speaker: "Caller", line: "My laptop keeps disconnecting from the Wi-Fi every few minutes." },
      { speaker: "Agent", line: "Have you tried restarting the router?" },
      { speaker: "Caller", line: "I have, twice. It works for a while and then drops again." },
      { speaker: "Agent", line: "Right. Let's update the network driver. Can you open the settings menu?" },
      { speaker: "Caller", line: "It's open. I can see 'Network and Internet'." },
      { speaker: "Agent", line: "Perfect. Click that, and I'll guide you through the rest." },
    ],
    vocabulary: [
      { term: "disconnect", pt: "desconectar" },
      { term: "restart", pt: "reiniciar" },
      { term: "driver", pt: "driver (software do dispositivo)" },
      { term: "guide you through", pt: "orientar você passo a passo" },
    ],
    questions: [
      {
        question: "What is the caller's problem?",
        options: [
          "The laptop won't turn on",
          "The Wi-Fi keeps disconnecting",
          "The screen is broken",
        ],
        answer: 1,
        explanation: "“My laptop keeps disconnecting from the Wi-Fi.”",
      },
      {
        question: "What has the caller already tried?",
        options: ["Updating the driver", "Restarting the router", "Buying a new laptop"],
        answer: 1,
        explanation: "“I have, twice.” — referring to restarting the router.",
      },
    ],
  },
  {
    id: "podcast-hobbies",
    title: "Podcast: why hobbies matter",
    titlePt: "Podcast: por que os hobbies importam",
    theme: "Hobbies · Wellbeing",
    level: "Advanced",
    intro: "A short monologue with linking words and abstract vocabulary.",
    transcript: [
      { speaker: "Host", line: "We tend to treat hobbies as something optional — a reward for finishing the real work." },
      { speaker: "Host", line: "Research suggests the opposite: people who protect time for a hobby recover from stress faster." },
      { speaker: "Host", line: "What matters is not the activity itself, but the fact that you choose it freely." },
      { speaker: "Host", line: "In other words, a hobby you feel obliged to do stops working as a hobby." },
      { speaker: "Host", line: "So instead of asking whether you have time, ask what you'd genuinely miss if you stopped." },
    ],
    vocabulary: [
      { term: "optional", pt: "opcional" },
      { term: "recover from stress", pt: "se recuperar do estresse" },
      { term: "freely", pt: "livremente" },
      { term: "feel obliged to", pt: "sentir-se obrigado a" },
    ],
    questions: [
      {
        question: "What is the host's main point?",
        options: [
          "Hobbies are a reward for finishing work",
          "Hobbies help people recover from stress",
          "Hobbies waste valuable time",
        ],
        answer: 1,
        explanation: "“People who protect time for a hobby recover from stress faster.”",
      },
      {
        question: "According to the host, what makes a hobby effective?",
        options: [
          "Choosing it freely",
          "Doing it every day",
          "Being good at it",
        ],
        answer: 0,
        explanation: "“The fact that you choose it freely.”",
      },
    ],
  },
  {
    id: "meeting-disagreement",
    title: "Disagreeing politely in a meeting",
    titlePt: "Discordando com educação em uma reunião",
    theme: "Communication · Social situations",
    level: "Advanced",
    intro: "Advanced functional language: softening, hedging and rephrasing.",
    transcript: [
      { speaker: "Ellen", line: "If I understand correctly, you're suggesting we postpone the launch." },
      { speaker: "Victor", line: "Not exactly. I'd rather we launch on time, but with a reduced scope." },
      { speaker: "Ellen", line: "I see the logic, although I'm not entirely convinced customers would notice the difference." },
      { speaker: "Victor", line: "That's a fair point. Perhaps we could test it with a small group first." },
      { speaker: "Ellen", line: "That I could support, provided we agree on the criteria beforehand." },
    ],
    vocabulary: [
      { term: "postpone", pt: "adiar" },
      { term: "reduced scope", pt: "escopo reduzido" },
      { term: "a fair point", pt: "um argumento justo" },
      { term: "provided that", pt: "desde que" },
    ],
    questions: [
      {
        question: "What does Victor actually propose?",
        options: [
          "Postponing the launch",
          "Launching on time with less scope",
          "Cancelling the project",
        ],
        answer: 1,
        explanation: "“I'd rather we launch on time, but with a reduced scope.”",
      },
      {
        question: "What condition does Ellen set?",
        options: [
          "Agreeing on the criteria beforehand",
          "Hiring more people",
          "Doubling the budget",
        ],
        answer: 0,
        explanation: "“Provided we agree on the criteria beforehand.”",
      },
    ],
  },
];

export const GENERAL_LISTENING_TOTAL = GENERAL_LISTENING.length;
