import type { CourseUnit } from "./types";

/**
 * Intermediate — Unit 31 (Tech Innovation). Conteúdo autoral Speak2Co.
 * Foco: collocations de verbo+substantivo para conquistas (overcome a
 * challenge, achieve a goal, make progress, reach a target) em contexto de
 * inovação tecnológica, com vocabulário de tecnologia e expressões de
 * storytelling para contar a história de um projeto.
 */
export const INTERMEDIATE_U31: CourseUnit = {
  code: "INTERMEDIATE-U31",
  number: 31,
  title: "Tech Innovation — Verb + noun collocations for talking about achievements",
  titlePt: "Inovação Tecnológica — Collocations de verbo + substantivo para falar de conquistas",
  cefr: "B2",
  objective: {
    en: "To teach technology vocabulary and verb + noun collocations for describing achievements (overcome a challenge, achieve a goal, make progress, reach a target), in a contextualized way.",
    pt: "Ensinar vocabulário de tecnologia e collocations de verbo + substantivo para descrever conquistas (superar um desafio, alcançar um objetivo, fazer progresso, atingir uma meta), de forma contextualizada.",
  },
  communicationGoal: {
    en: "Students will be able to use 'storytelling' expressions and technology vocabulary to describe how a team overcame challenges and achieved its goals.",
    pt: "O aluno será capaz de usar expressões de 'storytelling' e o vocabulário de tecnologia para descrever como uma equipe superou desafios e alcançou seus objetivos.",
  },
  prerequisites: { en: "Grammar: Complex sentence structures combining clauses fluently. Vocabulary: Workplace.", pt: "Estrutura: Frases complexas combinando orações fluentemente. Vocabulário: Ambiente de trabalho." },
  newContent: { en: "Grammar: Verb + noun collocations for achievements (overcome a challenge, achieve a goal, make progress, reach a target). Vocabulary: Technology (10 lexical items). Expressions: Storytelling.", pt: "Grammar: Collocations de verbo + substantivo para conquistas (overcome a challenge, achieve a goal, make progress, reach a target). Vocabulário: Tecnologia (10 itens lexicais). Expressões: Storytelling." },
  reviewContent: { en: "Spiral review: Complex sentence structures combining clauses fluently (Unit 30). Vocabulary review: Workplace (Unit 30).", pt: "Revisão em espiral: Estruturas de frases complexas combinando orações fluentemente (Unidade 30). Revisão de vocabulário: Ambiente de trabalho (Unidade 30)." },
  discover: {
    id: "INTERMEDIATE-U31-DISCOVER",
    warmUp: { prompt: { en: "Look at the images. What do you see? What do these images have in common?", pt: "Olhe as imagens. O que você vê? O que essas imagens têm em comum?" }, phrases: [{ en: "I see people working on a new app.", pt: "Eu vejo pessoas trabalhando em um novo aplicativo." }, { en: "They are all related to technology and innovation.", pt: "Todos estão relacionados à tecnologia e inovação." }] },
    context: {
      situation: { en: "Maria is a software developer at a startup. Today, she is telling her friend Tom the story of how her team built their new app.", pt: "Maria é desenvolvedora de software em uma startup. Hoje, ela está contando ao amigo Tom a história de como a equipe dela criou o novo aplicativo." },
      dialogue: [
        { who: "Tom", en: "So, how did your team manage to launch the app so fast? Tell me the whole story!", pt: "Então, como sua equipe conseguiu lançar o aplicativo tão rápido? Me conta a história toda!" },
        { who: "Maria", en: "It all started when we realized our old platform was too slow and the network kept crashing.", pt: "Tudo começou quando percebemos que nossa plataforma antiga era muito lenta e a rede vivia caindo." },
        { who: "Tom", en: "That sounds like a big challenge. How did you overcome it?", pt: "Isso parece um grande desafio. Como vocês superaram isso?" },
        { who: "Maria", en: "We had to overcome a lot of technical problems, but we made progress every week by testing a new algorithm.", pt: "Tivemos que superar muitos problemas técnicos, mas fizemos progresso toda semana testando um novo algoritmo." },
        { who: "Tom", en: "To make a long story short, did you achieve your goal in the end?", pt: "Para encurtar a história, vocês alcançaram o objetivo no final?" },
        { who: "Maria", en: "Yes! In the end, we reached our target and launched a device that collects data much faster.", pt: "Sim! No final, atingimos nossa meta e lançamos um dispositivo que coleta dados muito mais rápido." },
      ],
    },
    vocabulary: [
      { term: "smartphone", pt: "smartphone", ipa: "/ˈsmɑːrtfoʊn/", definition: "A mobile phone that performs many functions of a computer.", example: "My new smartphone is a very powerful device.", examplePt: "Meu novo smartphone é um dispositivo muito poderoso." },
      { term: "app", pt: "aplicativo", ipa: "/æp/", definition: "A software application, especially for a mobile device.", example: "There's an app for almost everything.", examplePt: "Existe um aplicativo para quase tudo." },
      { term: "software", pt: "software", ipa: "/ˈsɔːftwer/", definition: "The programs used to operate computers and related devices.", example: "We need to install new software.", examplePt: "Precisamos instalar um novo software." },
      { term: "device", pt: "dispositivo", ipa: "/dɪˈvaɪs/", definition: "An object or piece of equipment made for a specific purpose.", example: "This is a very useful device.", examplePt: "Este é um dispositivo muito útil." },
      { term: "network", pt: "rede", ipa: "/ˈnetwɜːrk/", definition: "A system of interconnected computers or devices.", example: "Our office network went down.", examplePt: "Nossa rede do escritório caiu." },
      { term: "data", pt: "dados", ipa: "/ˈdeɪtə/", definition: "Facts and statistics collected for analysis.", example: "The company collects a lot of data.", examplePt: "A empresa coleta muitos dados." },
      { term: "artificial intelligence", pt: "inteligência artificial", ipa: "/ˌɑːrtɪˈfɪʃəl ɪnˈtelɪdʒəns/", definition: "The simulation of human intelligence by machines.", example: "Artificial intelligence is changing technology.", examplePt: "A inteligência artificial está mudando a tecnologia." },
      { term: "platform", pt: "plataforma", ipa: "/ˈplætfɔːrm/", definition: "A software or hardware system used as a base for other applications.", example: "This new platform offers many features.", examplePt: "Essa nova plataforma oferece muitos recursos." },
      { term: "innovation", pt: "inovação", ipa: "/ˌɪnəˈveɪʃən/", definition: "The introduction of new ideas, methods, or products.", example: "Innovation is key to staying competitive.", examplePt: "A inovação é fundamental para se manter competitivo." },
      { term: "algorithm", pt: "algoritmo", ipa: "/ˈælɡərɪðəm/", definition: "A set of rules a computer follows to solve a problem.", example: "The algorithm determines the order of results.", examplePt: "O algoritmo determina a ordem dos resultados." },
    ],
    expressions: [{ en: "It all started when...", pt: "Tudo começou quando..." }, { en: "To make a long story short...", pt: "Para encurtar a história..." }, { en: "In the end...", pt: "No final..." }],
    grammar: [
      {
        title: { en: "Verb + noun collocations for achievements", pt: "Collocations de verbo + substantivo para conquistas" },
        examples: [{ en: "We had to overcome a major challenge.", pt: "Tivemos que superar um grande desafio." }, { en: "She achieved her goal last year.", pt: "Ela alcançou seu objetivo ano passado." }, { en: "The team is making progress on the new app.", pt: "A equipe está fazendo progresso no novo aplicativo." }, { en: "The company managed to reach its targets.", pt: "A empresa conseguiu atingir suas metas." }],
        rule: { en: "Certain verbs naturally combine with certain nouns when we talk about achievements — these are called collocations. We 'overcome' a challenge, 'achieve' a goal, 'make' progress, and 'reach' a target. Using the correct verb with the correct noun makes your English sound natural and fluent, instead of just grammatically correct.", pt: "Certos verbos se combinam naturalmente com certos substantivos quando falamos de conquistas — chamamos isso de collocations. Nós 'overcome' (superamos) um challenge, 'achieve' (alcançamos) um goal, 'make' (fazemos) progress e 'reach' (atingimos) um target. Usar o verbo correto com o substantivo correto faz seu inglês soar natural e fluente, e não apenas gramaticalmente correto." },
        mistakes: [{ en: "Saying 'do a challenge' instead of 'face' or 'overcome' a challenge.", pt: "Dizer 'do a challenge' em vez de 'face' ou 'overcome' a challenge." }, { en: "Saying 'get a goal' instead of 'achieve' or 'reach' a goal.", pt: "Dizer 'get a goal' em vez de 'achieve' ou 'reach' a goal." }],
      },
    ],
    controlledPractice: [
      { id: "i31d-cp1", prompt: { en: "Choose the correct collocation: 'We need to ___ this challenge together.'", pt: "Escolha a collocation correta: 'Precisamos ___ esse desafio juntos.'" }, options: ["do", "overcome", "get"], answer: "overcome", explanation: { en: "'Overcome' is the correct verb to use with 'challenge'.", pt: "'Overcome' é o verbo correto para usar com 'challenge'." } },
      { id: "i31d-cp2", prompt: { en: "Choose the correct collocation: 'She worked hard to ___ her goal.'", pt: "Escolha a collocation correta: 'Ela trabalhou duro para ___ seu objetivo.'" }, options: ["achieve", "make", "get"], answer: "achieve", explanation: { en: "'Achieve' is the correct verb to use with 'goal'.", pt: "'Achieve' é o verbo correto para usar com 'goal'." } },
      { id: "i31d-cp3", prompt: { en: "Choose the correct collocation: 'The team is ___ progress every week.'", pt: "Escolha a collocation correta: 'A equipe está ___ progresso toda semana.'" }, options: ["making", "doing", "achieving"], answer: "making", explanation: { en: "'Make progress' is the correct collocation.", pt: "'Make progress' é a collocation correta." } },
      { id: "i31d-cp4", prompt: { en: "Which sentence uses 'reach' correctly?", pt: "Qual frase usa 'reach' corretamente?" }, options: ["We reached our targets this month.", "We reached a challenge this month.", "We made our targets this month."], answer: "We reached our targets this month.", explanation: { en: "'Reach a target' is the correct collocation for achieving a specific goal.", pt: "'Reach a target' é a collocation correta para alcançar uma meta específica." } },
    ],
    input: {
      kind: "reading",
      title: { en: "From Idea to App", pt: "Da Ideia ao Aplicativo" },
      lines: [
        { en: "It all started when a small team of engineers imagined a smarter way to collect data using artificial intelligence.", pt: "Tudo começou quando um pequeno time de engenheiros imaginou uma forma mais inteligente de coletar dados usando inteligência artificial." },
        { en: "They had to overcome many challenges, such as an unstable network and an old algorithm that was too slow.", pt: "Eles tiveram que superar muitos desafios, como uma rede instável e um algoritmo antigo que era muito lento." },
        { en: "To make a long story short, the team made progress every month and finally built a new platform for their app.", pt: "Para encurtar a história, a equipe fez progresso todo mês e finalmente construiu uma nova plataforma para o aplicativo." },
        { en: "In the end, they reached their target: a fast, reliable device that thousands of users could enjoy every day.", pt: "No final, eles atingiram sua meta: um dispositivo rápido e confiável que milhares de usuários poderiam aproveitar todos os dias." },
      ],
      questions: [
        { id: "i31d-lq1", prompt: { en: "What did the team use to collect data more smartly?", pt: "O que a equipe usou para coletar dados de forma mais inteligente?" }, options: ["A new smartphone", "Artificial intelligence", "A new network"], answer: "Artificial intelligence", explanation: { en: "The text says they imagined a smarter way to collect data using artificial intelligence.", pt: "O texto diz que eles imaginaram uma forma mais inteligente de coletar dados usando inteligência artificial." } },
        { id: "i31d-lq2", prompt: { en: "What did the team achieve in the end?", pt: "O que a equipe alcançou no final?" }, options: ["They overcame a challenge but didn't finish the app.", "They reached their target and built a fast, reliable device.", "They made progress but stopped the project."], answer: "They reached their target and built a fast, reliable device.", explanation: { en: "The text says, 'In the end, they reached their target: a fast, reliable device...'", pt: "O texto diz: 'No final, eles atingiram sua meta: um dispositivo rápido e confiável...'" } },
      ],
    },
    quickCheck: [
      { id: "i31d-qc1", prompt: { en: "Which word means 'a program used on a phone or computer'?", pt: "Qual palavra significa 'um programa usado em um telefone ou computador'?" }, options: ["network", "app", "device"], answer: "app", explanation: { en: "An 'app' is a software application, especially for a mobile device.", pt: "Um 'app' é uma aplicação de software, especialmente para um dispositivo móvel." } },
      { id: "i31d-qc2", prompt: { en: "Complete the collocation: 'We finally ___ our goal after months of work.'", pt: "Complete a collocation: 'Finalmente ___ nosso objetivo depois de meses de trabalho.'" }, options: ["achieved", "did", "made"], answer: "achieved", explanation: { en: "'Achieve a goal' is the correct collocation.", pt: "'Achieve a goal' é a collocation correta." } },
      { id: "i31d-qc3", prompt: { en: "Which expression is used to start telling a story?", pt: "Qual expressão é usada para começar a contar uma história?" }, options: ["In the end...", "It all started when...", "To make a long story short..."], answer: "It all started when...", explanation: { en: "This expression is typically used to introduce the beginning of a story.", pt: "Esta expressão é tipicamente usada para introduzir o início de uma história." } },
      { id: "i31d-qc4", prompt: { en: "Which expression is used to summarize a story quickly?", pt: "Qual expressão é usada para resumir uma história rapidamente?" }, options: ["It all started when...", "To make a long story short...", "In the end..."], answer: "To make a long story short...", explanation: { en: "This expression signals that the speaker is skipping details to get to the main point.", pt: "Esta expressão sinaliza que o falante está pulando detalhes para chegar ao ponto principal." } },
    ],
  },
  communicate: {
    id: "INTERMEDIATE-U31-COMMUNICATE",
    review: [{ en: "We reviewed technology vocabulary (smartphone, app, software, network, data, algorithm, etc.).", pt: "Revisamos o vocabulário de tecnologia (smartphone, aplicativo, software, rede, dados, algoritmo, etc.)." }, { en: "We learned verb + noun collocations for achievements: overcome a challenge, achieve a goal, make progress, reach a target.", pt: "Aprendemos collocations de verbo + substantivo para conquistas: overcome a challenge, achieve a goal, make progress, reach a target." }, { en: "We practiced storytelling expressions: 'It all started when...', 'To make a long story short...', 'In the end...'", pt: "Praticamos expressões de storytelling: 'It all started when...', 'To make a long story short...', 'In the end...'" }],
    activities: [
      {
        id: "i31c-a1",
        title: { en: "Summarize", pt: "Resumir" },
        instruction: { en: "Read a short text about a startup's journey. Then, summarize the main challenge and how the team achieved its goal, using at least two verb + noun collocations.", pt: "Leia um texto curto sobre a jornada de uma startup. Em seguida, resuma o principal desafio e como a equipe alcançou seu objetivo, usando pelo menos duas collocations de verbo + substantivo." },
        phrases: [{ en: "The team had to overcome a major challenge.", pt: "A equipe teve que superar um grande desafio." }, { en: "They made progress every week.", pt: "Eles fizeram progresso toda semana." }, { en: "In the end, they achieved their goal.", pt: "No final, eles alcançaram seu objetivo." }],
        check: [
          { id: "i31c-a1q1", prompt: { en: "Which sentence correctly summarizes a challenge using a collocation?", pt: "Qual frase resume corretamente um desafio usando uma collocation?" }, options: ["The team did a challenge with the old platform.", "The team overcame a challenge with the old platform.", "The team got a challenge with the old platform."], answer: "The team overcame a challenge with the old platform.", explanation: { en: "'Overcome a challenge' is the correct collocation.", pt: "'Overcome a challenge' é a collocation correta." } },
          { id: "i31c-a1q2", prompt: { en: "Which sentence correctly summarizes an achievement using a collocation?", pt: "Qual frase resume corretamente uma conquista usando uma collocation?" }, options: ["In the end, they reached their target.", "In the end, they did their target.", "In the end, they got their target."], answer: "In the end, they reached their target.", explanation: { en: "'Reach a target' is the correct collocation.", pt: "'Reach a target' é a collocation correta." } },
        ],
      },
      {
        id: "i31c-a2",
        title: { en: "Discuss a Reading", pt: "Discutir uma Leitura" },
        instruction: { en: "Read a short article about a new piece of technology. Discuss with a partner what challenges the inventors probably overcame and what goals they achieved, using storytelling expressions.", pt: "Leia um artigo curto sobre uma nova tecnologia. Discuta com um parceiro quais desafios os inventores provavelmente superaram e quais objetivos alcançaram, usando expressões de storytelling." },
        phrases: [{ en: "It all started when they had an idea for a new device.", pt: "Tudo começou quando eles tiveram uma ideia para um novo dispositivo." }, { en: "To make a long story short, they built a working prototype.", pt: "Para encurtar a história, eles construíram um protótipo funcional." }, { en: "In the end, the app became very popular.", pt: "No final, o aplicativo se tornou muito popular." }],
        check: [
          { id: "i31c-a2q1", prompt: { en: "Which response correctly uses a storytelling expression and a collocation?", pt: "Qual resposta usa corretamente uma expressão de storytelling e uma collocation?" }, options: ["It all started when they overcame a challenge with the network.", "They had a network problem.", "The network was a problem for them."], answer: "It all started when they overcame a challenge with the network.", explanation: { en: "This option uses both a storytelling expression and a collocation with 'challenge'.", pt: "Esta opção usa tanto uma expressão de storytelling quanto uma collocation com 'challenge'." } },
          { id: "i31c-a2q2", prompt: { en: "If a team is discussing a project's success, which response uses storytelling language correctly?", pt: "Se uma equipe está discutindo o sucesso de um projeto, qual resposta usa a linguagem de storytelling corretamente?" }, options: ["The project was a success.", "In the end, they achieved their goal after making progress for months.", "They achieved a goal."], answer: "In the end, they achieved their goal after making progress for months.", explanation: { en: "This response uses 'in the end' and combines two collocations, 'achieve a goal' and 'make progress'.", pt: "Esta resposta usa 'in the end' e combina duas collocations, 'achieve a goal' e 'make progress'." } },
        ],
      },
      {
        id: "i31c-a3",
        title: { en: "Explain", pt: "Explicar" },
        instruction: { en: "Choose one of the technology vocabulary words and explain its importance to a classmate, using at least one storytelling expression and one collocation for achievement.", pt: "Escolha uma das palavras do vocabulário de tecnologia e explique sua importância para um colega, usando pelo menos uma expressão de storytelling e uma collocation para conquistas." },
        phrases: [{ en: "Artificial intelligence is important because it helps companies make progress faster.", pt: "A inteligência artificial é importante porque ajuda as empresas a fazer progresso mais rápido." }, { en: "It all started when engineers wanted to overcome the challenge of slow networks.", pt: "Tudo começou quando engenheiros quiseram superar o desafio de redes lentas." }, { en: "To make a long story short, algorithms help us reach our targets more easily.", pt: "Para encurtar a história, algoritmos nos ajudam a atingir nossas metas mais facilmente." }],
        check: [
          { id: "i31c-a3q1", prompt: { en: "How would you explain the importance of 'algorithm' using a collocation?", pt: "Como você explicaria a importância de 'algorithm' usando uma collocation?" }, options: ["An algorithm is a set of rules. It is important.", "A good algorithm helps a team make progress on a project.", "Algorithms are used by companies."], answer: "A good algorithm helps a team make progress on a project.", explanation: { en: "This sentence explains the term and uses the collocation 'make progress'.", pt: "Esta frase explica o termo e usa a collocation 'make progress'." } },
          { id: "i31c-a3q2", prompt: { en: "Which statement best explains 'innovation' with a storytelling expression?", pt: "Qual afirmação melhor explica 'innovation' com uma expressão de storytelling?" }, options: ["Innovation means new ideas.", "It all started when a company decided that innovation was the key to overcoming its challenges.", "Companies need innovation."], answer: "It all started when a company decided that innovation was the key to overcoming its challenges.", explanation: { en: "This option uses the storytelling expression 'it all started when' and the collocation 'overcome a challenge'.", pt: "Esta opção usa a expressão de storytelling 'it all started when' e a collocation 'overcome a challenge'." } },
        ],
      },
    ],
    challenge: {
      id: "i31c-cc1",
      title: { en: "Tech Scenario: Launching a New App", pt: "Cenário de Tecnologia: Lançando um Novo Aplicativo" },
      instruction: { en: "Imagine you and a partner are members of a startup team telling investors the story of how you built your new app. In pairs, role-play a pitch where you: 1. Describe how it all started. 2. Use collocations to describe the challenges you overcame. 3. Explain the progress you made. 4. Use 'to make a long story short' and 'in the end' to describe the goals you achieved.", pt: "Imagine que você e um parceiro são membros de uma equipe de startup contando aos investidores a história de como criaram o novo aplicativo. Em pares, simulem um pitch onde vocês: 1. Descrevem como tudo começou. 2. Usam collocations para descrever os desafios que superaram. 3. Explicam o progresso que fizeram. 4. Usam 'to make a long story short' e 'in the end' para descrever os objetivos que alcançaram." },
      phrases: [{ en: "It all started when we noticed a problem with existing apps.", pt: "Tudo começou quando percebemos um problema com os aplicativos existentes." }, { en: "We had to overcome several technical challenges with our platform.", pt: "Tivemos que superar vários desafios técnicos com nossa plataforma." }, { en: "To make a long story short, in the end we reached our target of one million users.", pt: "Para encurtar a história, no final atingimos nossa meta de um milhão de usuários." }],
      check: [
        { id: "i31c-cc1q1", prompt: { en: "Which statement effectively begins the pitch using a storytelling expression?", pt: "Qual afirmação inicia efetivamente o pitch usando uma expressão de storytelling?" }, options: ["We made an app.", "It all started when we noticed that people needed a faster way to share data.", "Our app is very good."], answer: "It all started when we noticed that people needed a faster way to share data.", explanation: { en: "This uses 'it all started when' to introduce the origin of the idea.", pt: "Esta usa 'it all started when' para introduzir a origem da ideia." } },
        { id: "i31c-cc1q2", prompt: { en: "How would you describe overcoming a technical problem, using a collocation?", pt: "Como você descreveria a superação de um problema técnico, usando uma collocation?" }, options: ["We did a challenge with the network.", "We overcame a challenge with the network by building a new algorithm.", "The network was a challenge."], answer: "We overcame a challenge with the network by building a new algorithm.", explanation: { en: "This sentence correctly uses the collocation 'overcome a challenge'.", pt: "Esta frase usa corretamente a collocation 'overcome a challenge'." } },
      ],
    },
    lessonReview: {
      summary: { en: "In this unit, we explored technology vocabulary and learned verb + noun collocations to describe achievements: overcome a challenge, achieve a goal, make progress, and reach a target. We practiced storytelling expressions and applied our new skills to tell the story of a tech project.", pt: "Nesta unidade, exploramos o vocabulário de tecnologia e aprendemos collocations de verbo + substantivo para descrever conquistas: overcome a challenge, achieve a goal, make progress e reach a target. Praticamos expressões de storytelling e aplicamos nossas novas habilidades para contar a história de um projeto de tecnologia." },
      canDo: [{ en: "I can use technology vocabulary to talk about apps, devices, and innovation.", pt: "Consigo usar o vocabulário de tecnologia para falar sobre aplicativos, dispositivos e inovação." }, { en: "I can use verb + noun collocations to describe achievements.", pt: "Consigo usar collocations de verbo + substantivo para descrever conquistas." }, { en: "I can use storytelling expressions to tell the story of a project.", pt: "Consigo usar expressões de storytelling para contar a história de um projeto." }],
      next: { en: "Next, we will move to Unit 32, 'Best of the Best — Superlative adjectives'.", pt: "Em seguida, passaremos para a Unidade 32, 'Melhor dos Melhores — Adjetivos superlativos'." },
    },
  },
};
