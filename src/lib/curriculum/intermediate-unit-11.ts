import type { CourseUnit } from "./types";

/**
 * Intermediate — Unit 11 (Business Economy — First Conditional). Conteúdo autoral Speak2Co.
 * Foco: First Conditional para situações futuras reais e prováveis, vocabulário de
 * economia de negócios e expressões para descrever pessoas.
 * Personagens: Maria e Lucas, colegas em uma startup de tecnologia.
 */
export const INTERMEDIATE_U11: CourseUnit = {
  code: "INTERMEDIATE-U11",
  number: 11,
  title: "Business Economy – First Conditional",
  titlePt: "Economia de Negócios – Primeiro Condicional",
  cefr: "B1",
  objective: { en: "To teach business economy and first Conditional for real, likely future situations in a contextualized way.", pt: "Ensinar economia de negócios e o Primeiro Condicional para situações futuras reais e prováveis de forma contextualizada." },
  communicationGoal: { en: "The student will be able to use 'describing people' and business economy vocabulary to communicate in real situations.", pt: "O aluno será capaz de usar 'describing people' e o vocabulário de business economy para se comunicar em situações reais." },
  prerequisites: { en: "Functional language for meetings and professional exchanges. Vocabulary: Culture Society.", pt: "Estrutura: Linguagem funcional para reuniões e trocas profissionais. Vocabulário: Cultura e Sociedade." },
  newContent: { en: "Grammar: First Conditional for real, likely future situations. | Vocabulary: Business Economy (10 lexical items) | Expressions: Describing People", pt: "Gramática: Primeiro Condicional para situações futuras reais e prováveis. | Vocabulário: Economia de Negócios (10 itens lexicais) | Expressões: Descrevendo Pessoas" },
  reviewContent: { en: "Spiral review: Past Continuous for actions in progress interrupted by another action (Unit 5).", pt: "Revisão em espiral: Past Continuous para ações em andamento interrompidas por outra ação (Unidade 5)." },
  discover: {
    id: "INTERMEDIATE-U11-DISCOVER",
    warmUp: { prompt: { en: "Look at the images. What do you think about when you hear 'business economy'?", pt: "Observe as imagens. O que você pensa quando ouve 'economia de negócios'?" }, phrases: [{ en: "I think of money and companies.", pt: "Penso em dinheiro e empresas." }, { en: "It's about how businesses work.", pt: "É sobre como os negócios funcionam." }] },
    context: {
      situation: { en: "Maria and Lucas work for a new tech startup. They are discussing the company's future and new hires.", pt: "Maria e Lucas trabalham para uma nova startup de tecnologia. Eles estão discutindo o futuro da empresa e novas contratações." },
      dialogue: [
        { who: "Maria", en: "Lucas, if our new product launch goes well, we'll see a huge increase in revenue.", pt: "Lucas, se o lançamento do nosso novo produto correr bem, veremos um enorme aumento na receita." },
        { who: "Lucas", en: "That's true, Maria. If the market reacts positively, we'll need to expand our team. How's John doing with the new investment pitch?", pt: "É verdade, Maria. Se o mercado reagir positivamente, precisaremos expandir nossa equipe. Como está o John com a nova proposta de investimento?" },
        { who: "Maria", en: "He's very reliable. If he secures that investment, our growth will accelerate significantly. He's known for being reliable.", pt: "Ele é muito confiável. Se ele conseguir esse investimento, nosso crescimento vai acelerar significativamente. Ele é conhecido por ser confiável." },
        { who: "Lucas", en: "Good to hear. What about our supply chain? If we can optimize it, our costs will go down.", pt: "Bom saber. E a nossa cadeia de suprimentos? Se pudermos otimizá-la, nossos custos cairão." },
        { who: "Maria", en: "Exactly! And if we hire Ana, our marketing strategy will improve. She's very easygoing and creative.", pt: "Exatamente! E se contratarmos a Ana, nossa estratégia de marketing vai melhorar. Ela é muito tranquila e criativa." },
        { who: "Lucas", en: "Sounds like a plan. If we focus on these trends, our startup will definitely succeed.", pt: "Parece um plano. Se focarmos nessas tendências, nossa startup definitivamente terá sucesso." },
      ],
    },
    vocabulary: [
      { term: "investment", pt: "investimento", ipa: "/ɪnˈvɛstmənt/", definition: "The act of putting money or effort into something to make a profit or achieve a result.", example: "His investment in education paid off when he got a great job.", examplePt: "O investimento dele em educação valeu a pena quando ele conseguiu um ótimo emprego." },
      { term: "market", pt: "mercado", ipa: "/ˈmɑːrkɪt/", definition: "A place or system where goods and services are bought and sold.", example: "The real estate market is very competitive right now.", examplePt: "O mercado imobiliário está muito competitivo agora." },
      { term: "revenue", pt: "receita", ipa: "/ˈrɛvənuː/", definition: "The income that a business generates from its sales of goods or services.", example: "The company increased its revenue by 20% this quarter.", examplePt: "A empresa aumentou sua receita em 20% neste trimestre." },
      { term: "startup", pt: "startup", ipa: "/ˈstɑːrtʌp/", definition: "A newly established business, often one involving technology.", example: "Many young entrepreneurs want to create their own startup.", examplePt: "Muitos jovens empreendedores querem criar sua própria startup." },
      { term: "competition", pt: "concorrência", ipa: "/ˌkɒmpɪˈtɪʃən/", definition: "The rivalry among businesses trying to win customers.", example: "There is strong competition among smartphone manufacturers.", examplePt: "Existe uma forte concorrência entre os fabricantes de smartphones." },
      { term: "growth", pt: "crescimento", ipa: "/ɡroʊθ/", definition: "The process of increasing in size, amount, or stage of development.", example: "Economic growth is important for a country's development.", examplePt: "O crescimento econômico é importante para o desenvolvimento de um país." },
      { term: "strategy", pt: "estratégia", ipa: "/ˈstrætədʒi/", definition: "A plan of action designed to achieve a long-term or overall aim.", example: "Our marketing strategy focuses on social media engagement.", examplePt: "Nossa estratégia de marketing foca no engajamento em redes sociais." },
      { term: "supply chain", pt: "cadeia de suprimentos", ipa: "/səˈplaɪ tʃeɪn/", definition: "The sequence of processes involved in the production and distribution of a commodity.", example: "Problems in the supply chain caused delays in product delivery.", examplePt: "Problemas na cadeia de suprimentos causaram atrasos na entrega do produto." },
      { term: "consumer", pt: "consumidor", ipa: "/kənˈsuːmər/", definition: "A person who buys goods and services for personal use.", example: "The company tries to understand what the consumer wants.", examplePt: "A empresa tenta entender o que o consumidor quer." },
      { term: "trend", pt: "tendência", ipa: "/trɛnd/", definition: "A general direction in which something is developing or changing.", example: "Sustainable fashion is a growing trend in the industry.", examplePt: "Moda sustentável é uma tendência crescente na indústria." },
    ],
    expressions: [{ en: "She's very easygoing.", pt: "Ela é muito tranquila." }, { en: "He's known for being reliable.", pt: "Ele é conhecido por ser confiável." }, { en: "They get along really well.", pt: "Eles se dão muito bem." }],
    grammar: [
      {
        title: { en: "First Conditional for real, likely future situations", pt: "Primeiro Condicional para situações futuras reais e prováveis" },
        examples: [{ en: "If I have time, I'll call you.", pt: "Se eu tiver tempo, eu te ligo." }, { en: "If it rains, we won't go out.", pt: "Se chover, não sairemos." }, { en: "If they invest now, their company will grow.", pt: "Se eles investirem agora, a empresa deles crescerá." }],
        rule: { en: "We use the First Conditional to talk about future situations that are real or very likely to happen. The structure is: 'If + Present Simple, Future Simple (will + base verb)'. We can also use 'unless' meaning 'if not'.", pt: "Usamos o Primeiro Condicional para falar sobre situações futuras que são reais ou muito prováveis de acontecer. A estrutura é: 'If + Present Simple, Future Simple (will + verbo base)'. Também podemos usar 'unless' significando 'se não'." },
        mistakes: [{ en: "Incorrect: If I will have time, I will call you. (Don't use 'will' in the 'if' clause).", pt: "Incorreto: If I will have time, I will call you. (Não use 'will' na oração com 'if')." }, { en: "Incorrect: If he gets that investment, his company grow. (The main clause needs 'will').", pt: "Incorreto: If he gets that investment, his company grow. (A oração principal precisa de 'will')." }],
      },
    ],
    controlledPractice: [
      { id: "i11d-cp1", prompt: { en: "Complete the sentence: If she ___ (study) hard, she ___ (pass) the exam.", pt: "Complete a frase: Se ela ___ (estudar) muito, ela ___ (passar) no exame." }, options: ["studies, will pass", "will study, passes", "study, pass"], answer: "studies, will pass", explanation: { en: "In the First Conditional, use Present Simple after 'if' and Future Simple in the main clause.", pt: "No Primeiro Condicional, use Present Simple depois de 'if' e Future Simple na oração principal." } },
      { id: "i11d-cp2", prompt: { en: "Choose the correct option: If they launch the new product, their ___ will increase.", pt: "Escolha a opção correta: Se eles lançarem o novo produto, a ___ deles aumentará." }, options: ["revenue", "competition", "supply chain"], answer: "revenue", explanation: { en: "Revenue is the income a business gets from sales.", pt: "Receita é o rendimento que uma empresa obtém com as vendas." } },
      { id: "i11d-cp3", prompt: { en: "Which sentence uses the First Conditional correctly?", pt: "Qual frase usa o Primeiro Condicional corretamente?" }, options: ["If he saves money, he will buy a car.", "If he will save money, he buys a car.", "If he saves money, he buys a car."], answer: "If he saves money, he will buy a car.", explanation: { en: "The correct structure is 'If + Present Simple, Future Simple'.", pt: "A estrutura correta é 'If + Present Simple, Future Simple'." } },
      { id: "i11d-cp4", prompt: { en: "If she is always positive and easy to work with, what can you say about her?", pt: "Se ela é sempre positiva e fácil de trabalhar, o que você pode dizer sobre ela?" }, options: ["She's very easygoing.", "She's known for being reliable.", "She gets along well."], answer: "She's very easygoing.", explanation: { en: "Easygoing describes someone who is relaxed and not easily upset.", pt: "Easygoing descreve alguém que é relaxado e não se irrita facilmente." } },
    ],
    input: {
      kind: "reading",
      title: { en: "The Future of Our Startup", pt: "O Futuro da Nossa Startup" },
      lines: [
        { en: "Our startup, 'Bright Ideas Inc.', faces a crucial year. If we get the new investment, our growth will be exponential. We also need to monitor the market trends closely. If we understand the consumer's needs, we will develop better products.", pt: "Nossa startup, 'Bright Ideas Inc.', enfrenta um ano crucial. Se conseguirmos o novo investimento, nosso crescimento será exponencial. Também precisamos monitorar de perto as tendências do mercado. Se entendermos as necessidades do consumidor, desenvolveremos produtos melhores." },
        { en: "Our current marketing strategy focuses on digital presence. If our digital campaign succeeds, our revenue will definitely increase. But competition is tough. If we don't innovate, we won't stay ahead.", pt: "Nossa estratégia de marketing atual foca na presença digital. Se nossa campanha digital for bem-sucedida, nossa receita definitivamente aumentará. Mas a concorrência é forte. Se não inovarmos, não ficaremos à frente." },
        { en: "John, our head of logistics, is working on the supply chain. He's known for being reliable. If he optimizes our supply chain, our costs will go down. We believe in our team. If everyone works hard, Bright Ideas Inc. will achieve its goals.", pt: "John, nosso chefe de logística, está trabalhando na cadeia de suprimentos. Ele é conhecido por ser confiável. Se ele otimizar nossa cadeia de suprimentos, nossos custos diminuirão. Acreditamos em nossa equipe. Se todos trabalharem duro, a Bright Ideas Inc. alcançará seus objetivos." },
        { en: "We are also considering hiring a new designer, Ana. She is very easygoing and creative, and we think she will get along well with the team.", pt: "Também estamos considerando contratar uma nova designer, Ana. Ela é muito tranquila e criativa, e acreditamos que ela se dará bem com a equipe." },
      ],
      questions: [
        { id: "i11d-iq1", prompt: { en: "What will happen if 'Bright Ideas Inc.' gets the new investment?", pt: "O que acontecerá se a 'Bright Ideas Inc.' conseguir o novo investimento?" }, options: ["Their growth will be exponential.", "Their costs will go down.", "Their revenue will decrease."], answer: "Their growth will be exponential.", explanation: { en: "The text states: 'If we get the new investment, our growth will be exponential.'", pt: "O texto afirma: 'Se conseguirmos o novo investimento, nosso crescimento será exponencial.'" } },
        { id: "i11d-iq2", prompt: { en: "According to the text, what is John known for?", pt: "De acordo com o texto, pelo que John é conhecido?" }, options: ["Being easygoing.", "Being reliable.", "Being creative."], answer: "Being reliable.", explanation: { en: "The text mentions: 'He's known for being reliable.'", pt: "O texto menciona: 'Ele é conhecido por ser confiável.'" } },
      ],
    },
    quickCheck: [
      { id: "i11d-qc1", prompt: { en: "If we launch this product, what will happen to our sales?", pt: "Se lançarmos este produto, o que acontecerá com nossas vendas?" }, options: ["They will increase.", "They increased.", "They increase."], answer: "They will increase.", explanation: { en: "This is a First Conditional sentence, so the main clause needs 'will'.", pt: "Esta é uma frase no Primeiro Condicional, então a oração principal precisa de 'will'." } },
      { id: "i11d-qc2", prompt: { en: "Which word describes the process of making money from sales?", pt: "Qual palavra descreve o processo de fazer dinheiro com as vendas?" }, options: ["investment", "revenue", "startup"], answer: "revenue", explanation: { en: "Revenue is the income a business generates.", pt: "Receita é o rendimento que uma empresa gera." } },
      { id: "i11d-qc3", prompt: { en: "Complete: 'If they ______ (not arrive) soon, we ______ (start) without them.'", pt: "Complete: 'Se eles ______ (não chegar) logo, nós ______ (começar) sem eles.'" }, options: ["don't arrive, will start", "won't arrive, start", "didn't arrive, started"], answer: "don't arrive, will start", explanation: { en: "Use Present Simple negative in the 'if' clause and Future Simple in the main clause.", pt: "Use Present Simple negativo na oração com 'if' e Future Simple na oração principal." } },
      { id: "i11d-qc4", prompt: { en: "Which expression describes someone who is always on time and trustworthy?", pt: "Qual expressão descreve alguém que é sempre pontual e confiável?" }, options: ["She's very easygoing.", "He's known for being reliable.", "They get along really well."], answer: "He's known for being reliable.", explanation: { en: "Reliable means consistently good in quality or performance; able to be trusted.", pt: "Confiável significa consistentemente bom em qualidade ou desempenho; digno de confiança." } },
    ],
  },
  communicate: {
    id: "INTERMEDIATE-U11-COMMUNICATE",
    review: [{ en: "We learned about the First Conditional for future real possibilities.", pt: "Aprendemos sobre o Primeiro Condicional para possibilidades futuras reais." }, { en: "We practiced vocabulary related to business economy.", pt: "Praticamos vocabulário relacionado à economia de negócios." }, { en: "We used expressions for describing people.", pt: "Usamos expressões para descrever pessoas." }],
    activities: [
      {
        id: "i11c-a1",
        title: { en: "Answer the Questions", pt: "Responda às Perguntas" },
        instruction: { en: "Think about a business you know. Answer the questions using the First Conditional and business economy vocabulary.", pt: "Pense em um negócio que você conhece. Responda às perguntas usando o Primeiro Condicional e o vocabulário de economia de negócios." },
        phrases: [{ en: "If their investment is successful...", pt: "Se o investimento deles for bem-sucedido..." }, { en: "If the market changes...", pt: "Se o mercado mudar..." }, { en: "Their revenue will increase if...", pt: "A receita deles aumentará se..." }],
        check: [
          { id: "i11c-a1q1", prompt: { en: "If a startup gets a lot of investment, what will probably happen?", pt: "Se uma startup conseguir muito investimento, o que provavelmente acontecerá?" }, options: ["It will experience growth.", "It will lose customers.", "It will decrease its revenue."], answer: "It will experience growth.", explanation: { en: "Investment often leads to company growth.", pt: "Investimento geralmente leva ao crescimento da empresa." } },
          { id: "i11c-a1q2", prompt: { en: "If a company has strong competition, what should its strategy focus on?", pt: "Se uma empresa tem forte concorrência, em que sua estratégia deve focar?" }, options: ["Reducing prices.", "Innovation and differentiation.", "Ignoring the market."], answer: "Innovation and differentiation.", explanation: { en: "Strong competition demands innovation to stand out.", pt: "Concorrência forte exige inovação para se destacar." } },
        ],
      },
      {
        id: "i11c-a2",
        title: { en: "Discuss", pt: "Discuta" },
        instruction: { en: "Discuss these situations with a partner. Use First Conditional and expressions for describing people.", pt: "Discuta estas situações com um parceiro. Use o Primeiro Condicional e expressões para descrever pessoas." },
        phrases: [{ en: "If our new team member is easygoing...", pt: "Se nosso novo membro da equipe for tranquilo..." }, { en: "If he's known for being reliable...", pt: "Se ele é conhecido por ser confiável..." }, { en: "If they don't get along well, it will be a problem.", pt: "Se eles não se derem bem, será um problema." }],
        check: [
          { id: "i11c-a2q1", prompt: { en: "If you need a team leader for a big project, what kind of person would you choose?", pt: "Se você precisar de um líder de equipe para um grande projeto, que tipo de pessoa você escolheria?" }, options: ["Someone who is very quiet.", "Someone known for being reliable.", "Someone who is not easygoing."], answer: "Someone known for being reliable.", explanation: { en: "Reliability is key for a project leader.", pt: "Confiabilidade é fundamental para um líder de projeto." } },
          { id: "i11c-a2q2", prompt: { en: "If two colleagues don't get along really well, what might happen?", pt: "Se dois colegas não se dão muito bem, o que pode acontecer?" }, options: ["Their team will become stronger.", "They will collaborate more efficiently.", "Their productivity might decrease."], answer: "Their productivity might decrease.", explanation: { en: "Poor team dynamics can negatively impact productivity.", pt: "Dinâmicas de equipe ruins podem impactar negativamente a produtividade." } },
        ],
      },
      {
        id: "i11c-a3",
        title: { en: "Describe", pt: "Descreva" },
        instruction: { en: "Imagine you are hiring for a new business. Describe the ideal candidate for different roles using vocabulary and expressions from this unit. What will happen if you hire them?", pt: "Imagine que você está contratando para um novo negócio. Descreva o candidato ideal para diferentes funções usando o vocabulário e as expressões desta unidade. O que acontecerá se você contratá-los?" },
        phrases: [{ en: "If we hire someone easygoing, the team will integrate faster.", pt: "Se contratarmos alguém tranquilo, a equipe se integrará mais rápido." }, { en: "If she is reliable, she will manage the supply chain effectively.", pt: "Se ela for confiável, ela gerenciará a cadeia de suprimentos de forma eficaz." }, { en: "If they get along really well, our department will be more productive.", pt: "Se eles se derem muito bem, nosso departamento será mais produtivo." }],
        check: [
          { id: "i11c-a3q1", prompt: { en: "If you need someone to manage the company's financial investment, which characteristic is most important?", pt: "Se você precisa de alguém para gerenciar o investimento financeiro da empresa, qual característica é mais importante?" }, options: ["Being very easygoing.", "Being known for being reliable.", "Getting along well with everyone."], answer: "Being known for being reliable.", explanation: { en: "Financial management requires reliability and trustworthiness.", pt: "Gerenciamento financeiro exige confiabilidade e fidedignidade." } },
          { id: "i11c-a3q2", prompt: { en: "If your marketing team needs a creative person who connects well with consumers, what qualities are best?", pt: "Se sua equipe de marketing precisa de uma pessoa criativa que se conecta bem com os consumidores, quais qualidades são as melhores?" }, options: ["Reliable and quiet.", "Easygoing and understands market trends.", "Strict and focused only on revenue."], answer: "Easygoing and understands market trends.", explanation: { en: "Easygoing for team integration and understanding trends for effective marketing.", pt: "Tranquilo para integração da equipe e entender tendências para marketing eficaz." } },
        ],
      },
    ],
    challenge: {
      id: "i11c-chal",
      title: { en: "Startup Pitch", pt: "Apresentação de Startup" },
      instruction: { en: "Imagine you are presenting your new startup idea to potential investors. Describe your business, your strategy, and what will happen if you get the investment. Also, describe the key people in your team using the expressions learned.", pt: "Imagine que você está apresentando sua nova ideia de startup para investidores em potencial. Descreva seu negócio, sua estratégia e o que acontecerá se você conseguir o investimento. Além disso, descreva as pessoas chave em sua equipe usando as expressões aprendidas." },
      phrases: [{ en: "If we secure this investment, our growth will be remarkable.", pt: "Se garantirmos este investimento, nosso crescimento será notável." }, { en: "Our CEO is known for being reliable, and she gets along really well with the whole team.", pt: "Nossa CEO é conhecida por ser confiável, e ela se dá muito bem com toda a equipe." }, { en: "If we analyze the market trends, our revenue will definitely increase.", pt: "Se analisarmos as tendências do mercado, nossa receita definitivamente aumentará." }],
      check: [
        { id: "i11c-chalq1", prompt: { en: "What is the main purpose of a startup pitch to investors?", pt: "Qual é o principal objetivo de uma apresentação de startup para investidores?" }, options: ["To get a job.", "To secure investment.", "To sell products immediately."], answer: "To secure investment.", explanation: { en: "Investors provide capital for the startup's growth.", pt: "Investidores fornecem capital para o crescimento da startup." } },
        { id: "i11c-chalq2", prompt: { en: "If an investor hears that your team leader is easygoing and reliable, how might they feel?", pt: "Se um investidor ouvir que seu líder de equipe é tranquilo e confiável, como ele pode se sentir?" }, options: ["Worried about the project.", "More confident in the team.", "Uninterested in the business."], answer: "More confident in the team.", explanation: { en: "Positive descriptions of team members build investor confidence.", pt: "Descrições positivas dos membros da equipe constroem confiança nos investidores." } },
      ],
    },
    lessonReview: { summary: { en: "In this unit, we explored business economy vocabulary and learned how to use the First Conditional to talk about future possibilities. We also practiced describing people using new expressions.", pt: "Nesta unidade, exploramos o vocabulário de economia de negócios e aprendemos a usar o Primeiro Condicional para falar sobre possibilidades futuras. Também praticamos descrever pessoas usando novas expressões." }, canDo: [{ en: "Use the First Conditional to discuss future business outcomes.", pt: "Usar o Primeiro Condicional para discutir resultados futuros de negócios." }, { en: "Identify and use key vocabulary related to business and economy.", pt: "Identificar e usar vocabulário chave relacionado a negócios e economia." }, { en: "Describe personal qualities using expressions like 'easygoing' and 'reliable'.", pt: "Descrever qualidades pessoais usando expressões como 'easygoing' e 'reliable'." }], next: { en: "Next, we will look at 'Business Ethics' and 'Second Conditional'.", pt: "Em seguida, veremos 'Ética nos Negócios' e 'Segundo Condicional'." } },
  },
};
