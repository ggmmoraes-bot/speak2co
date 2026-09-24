import type { CourseUnit } from "./types";

/**
 * Intermediate — Unit 23 (Business Economy — Advanced comparison structures).
 * Conteúdo autoral Speak2Co. Foco: as...as, less...than, the more...the more,
 * e vocabulário de negócios. Personagens: Bia e Diego, falando sobre o mundo
 * dos negócios e startups.
 */
export const INTERMEDIATE_U23: CourseUnit = {
  code: "INTERMEDIATE-U23",
  number: 23,
  title: "Business Economy — The More, the Better",
  titlePt: "Economia de Negócios — Quanto Mais, Melhor",
  cefr: "B1",
  objective: {
    en: "Compare things using as...as, less...than, and the more...the more, and talk about business and the economy.",
    pt: "Comparar coisas usando as...as, less...than, e the more...the more, e falar sobre negócios e economia.",
  },
  communicationGoal: {
    en: "Discuss a company's growth, market, and strategy, comparing options and describing people's personalities.",
    pt: "Discutir o crescimento, o mercado e a estratégia de uma empresa, comparando opções e descrevendo personalidades.",
  },
  prerequisites: {
    en: "Intermediate units 1–22: reported speech, past tenses, and basic comparatives (more/less + adjective).",
    pt: "Unidades 1–22 do Intermediate: reported speech, tempos passados, e comparativos básicos (more/less + adjetivo).",
  },
  newContent: {
    en: "Grammar: as...as, not as...as, less...than, the more...the more (double comparatives) | Vocabulary: business and economy (12 items) | Expressions: describing personality (easygoing, known for being, get along)",
    pt: "Gramática: as...as, not as...as, less...than, the more...the more (comparativos duplos) | Vocabulário: negócios e economia (12 itens) | Expressões: descrevendo personalidade (easygoing, known for being, get along)",
  },
  reviewContent: {
    en: "Basic comparatives and superlatives (more/less + adjective + than), used as the foundation for these more advanced structures.",
    pt: "Comparativos e superlativos básicos (more/less + adjetivo + than), usados como base para essas estruturas mais avançadas.",
  },
  discover: {
    id: "INTERMEDIATE-U23-DISCOVER",
    warmUp: {
      prompt: {
        en: "Look at the picture. How do you think a startup's growth compares to a big company's growth?",
        pt: "Observe a imagem. Como você acha que o crescimento de uma startup se compara ao de uma grande empresa?",
      },
      phrases: [
        { en: "Is a startup as risky as a big company?", pt: "Uma startup é tão arriscada quanto uma grande empresa?" },
        { en: "What makes a company successful?", pt: "O que faz uma empresa ter sucesso?" },
        { en: "How important is competition in the market?", pt: "Quão importante é a concorrência no mercado?" },
      ],
    },
    context: {
      situation: {
        en: "Bia started a small business, and Diego, who works for a big company, is asking her about the differences between running a startup and a large company.",
        pt: "Bia abriu um pequeno negócio, e Diego, que trabalha para uma grande empresa, está perguntando a ela sobre as diferenças entre administrar uma startup e uma grande empresa.",
      },
      dialogue: [
        { who: "Diego", en: "How's your startup doing? Is it as stressful as I imagine?", pt: "Como está sua startup? É tão estressante quanto eu imagino?" },
        { who: "Bia", en: "Honestly, it's less stressful than my last job, but there's a lot of competition in the market.", pt: "Sinceramente, é menos estressante que meu último emprego, mas há muita concorrência no mercado." },
        { who: "Diego", en: "What's your growth strategy?", pt: "Qual é sua estratégia de crescimento?" },
        { who: "Bia", en: "The more we invest in marketing, the more consumers we attract. We're also trying to enter the international market.", pt: "Quanto mais investimos em marketing, mais consumidores atraímos. Também estamos tentando entrar no mercado internacional." },
        { who: "Diego", en: "That's smart. Is your revenue as strong as you expected?", pt: "Isso é inteligente. Sua receita está tão forte quanto você esperava?" },
        { who: "Bia", en: "It's growing! Our investor is known for being very detail-oriented, so he helps us optimize our supply chain and reduce costs.", pt: "Está crescendo! Nosso investidor é conhecido por ser muito detalhista, então ele nos ajuda a otimizar a cadeia de suprimentos e reduzir custos." },
        { who: "Diego", en: "Sounds like you get along well with him.", pt: "Parece que vocês se dão bem com ele." },
        { who: "Bia", en: "We do! He's very easygoing, and the more he understands our market, the better his advice.", pt: "Sim! Ele é muito tranquilo, e quanto mais ele entende nosso mercado, melhor o conselho dele." },
      ],
    },
    vocabulary: [
      { term: "investment", pt: "investimento", ipa: "/ɪnˈvestmənt/", definition: "Money put into a business to help it grow.", example: "His new business received a large investment.", examplePt: "O novo negócio dele recebeu um grande investimento." },
      { term: "market", pt: "mercado", ipa: "/ˈmɑːrkɪt/", definition: "The place or system where goods and services are bought and sold.", example: "The company is trying to enter the international market.", examplePt: "A empresa está tentando entrar no mercado internacional." },
      { term: "revenue", pt: "receita", ipa: "/ˈrevənuː/", definition: "The money a company earns from its business.", example: "Our quarterly revenue increased by 15%.", examplePt: "Nossa receita trimestral aumentou 15%." },
      { term: "startup", pt: "startup / empresa iniciante", ipa: "/ˈstɑːrtʌp/", definition: "A new, small company, often in technology.", example: "She works for a tech startup.", examplePt: "Ela trabalha para uma startup de tecnologia." },
      { term: "competition", pt: "concorrência", ipa: "/ˌkɒmpəˈtɪʃən/", definition: "Rivalry between companies trying to win customers.", example: "There is strong competition among smartphone manufacturers.", examplePt: "Há uma forte concorrência entre os fabricantes de smartphones." },
      { term: "growth", pt: "crescimento", ipa: "/ɡroʊθ/", definition: "The process of increasing in size or success.", example: "The company expects significant growth this year.", examplePt: "A empresa espera um crescimento significativo este ano." },
      { term: "strategy", pt: "estratégia", ipa: "/ˈstrætədʒi/", definition: "A plan to achieve a goal.", example: "Their new marketing strategy targets younger consumers.", examplePt: "A nova estratégia de marketing deles visa consumidores mais jovens." },
      { term: "supply chain", pt: "cadeia de suprimentos", ipa: "/səˈplaɪ tʃeɪn/", definition: "The system of producing and delivering a product.", example: "Optimizing the supply chain can reduce costs.", examplePt: "Otimizar a cadeia de suprimentos pode reduzir custos." },
      { term: "consumer", pt: "consumidor(a)", ipa: "/kənˈsuːmər/", definition: "A person who buys goods or services.", example: "The product was designed for the modern consumer.", examplePt: "O produto foi projetado para o consumidor moderno." },
      { term: "trend", pt: "tendência", ipa: "/trend/", definition: "A general direction in which something is changing.", example: "The latest fashion trends change quickly.", examplePt: "As últimas tendências da moda mudam rapidamente." },
      { term: "easygoing", pt: "tranquilo(a) / de trato fácil", ipa: "/ˈiːzɪˌɡoʊɪŋ/", definition: "Relaxed and not easily worried or annoyed.", example: "She's very easygoing.", examplePt: "Ela é muito tranquila." },
      { term: "detail-oriented", pt: "detalhista", ipa: "/ˈdiːteɪl ˈɔːriɛntɪd/", definition: "Careful and thorough about small details.", example: "My investor is known for being very detail-oriented.", examplePt: "Meu investidor é conhecido por ser muito detalhista." },
    ],
    expressions: [
      { en: "She's known for being reliable.", pt: "Ela é conhecida por ser confiável." },
      { en: "They get along really well.", pt: "Eles se dão muito bem." },
      { en: "He's very easygoing.", pt: "Ele é muito tranquilo." },
      { en: "The more you practice, the more confident you become.", pt: "Quanto mais você pratica, mais confiante você fica." },
      { en: "It's not as simple as just selling more.", pt: "Não é tão simples quanto apenas vender mais." },
      { en: "with the result", pt: "com o resultado" },
    ],
    grammar: [
      {
        title: { en: "As...as / not as...as", pt: "As...as / not as...as" },
        examples: [
          { en: "Our growth is as fast as expected.", pt: "Nosso crescimento é tão rápido quanto o esperado." },
          { en: "This job isn't as stressful as my last one.", pt: "Este trabalho não é tão estressante quanto o meu último." },
          { en: "Online sales are as difficult as physical store sales.", pt: "As vendas online são tão difíceis quanto as vendas em loja física." },
        ],
        rule: {
          en: "Use 'as + adjective + as' to say two things are equal, and 'not as + adjective + as' to say the first thing is less than the second (the adjective itself doesn't change).",
          pt: "Use 'as + adjetivo + as' para dizer que duas coisas são iguais, e 'not as + adjetivo + as' para dizer que a primeira coisa é menor/menos do que a segunda (o adjetivo não muda de forma).",
        },
        mistakes: [
          { en: "✗ This job is as stressfuller as my last one. → ✓ This job is as stressful as my last one.", pt: "✗ This job is as stressfuller as my last one. → ✓ This job is as stressful as my last one." },
          { en: "✗ This job isn't stressful as my last one. → ✓ This job isn't as stressful as my last one.", pt: "✗ This job isn't stressful as my last one. → ✓ This job isn't as stressful as my last one." },
        ],
      },
      {
        title: { en: "Less...than", pt: "Less...than" },
        examples: [
          { en: "The new system is less complicated than the old one.", pt: "O novo sistema é menos complicado que o antigo." },
          { en: "Our supply chain is less problematic than before.", pt: "Nossa cadeia de suprimentos é menos problemática que antes." },
          { en: "This startup is less known than its main competitor.", pt: "Esta startup é menos conhecida que seu principal concorrente." },
        ],
        rule: {
          en: "Use 'less + adjective + than' to say the first thing has a smaller amount of a quality than the second. It works with both short and long adjectives.",
          pt: "Use 'less + adjetivo + than' para dizer que a primeira coisa tem menos de uma qualidade do que a segunda. Funciona com adjetivos curtos e longos.",
        },
        mistakes: [
          { en: "✗ The new system is less complicated as the old one. → ✓ The new system is less complicated than the old one.", pt: "✗ The new system is less complicated as the old one. → ✓ The new system is less complicated than the old one." },
        ],
      },
      {
        title: { en: "The more..., the more... (double comparatives)", pt: "The more..., the more... (comparativos duplos)" },
        examples: [
          { en: "The more you practice, the more confident you become.", pt: "Quanto mais você pratica, mais confiante você fica." },
          { en: "The more we invest, the more revenue we expect.", pt: "Quanto mais investimos, mais receita esperamos." },
          { en: "The clearer we communicate, the better our chances.", pt: "Quanto mais clara for nossa comunicação, melhores nossas chances." },
        ],
        rule: {
          en: "Use 'the + comparative..., the + comparative...' to show that two things change together: as one increases (or improves), so does the other.",
          pt: "Use 'the + comparativo..., the + comparativo...' para mostrar que duas coisas mudam juntas: conforme uma aumenta (ou melhora), a outra também aumenta.",
        },
        mistakes: [
          { en: "✗ More you practice, more confident you become. → ✓ The more you practice, the more confident you become.", pt: "✗ More you practice, more confident you become. → ✓ The more you practice, the more confident you become." },
        ],
      },
    ],
    controlledPractice: [
      { id: "i23d-cp1", prompt: { en: "Complete: This product is ___ good ___ the other one.", pt: "Complete: This product is ___ good ___ the other one." }, options: ["as / as", "less / than", "the / the"], answer: "as / as", explanation: { en: "'As...as' compares two equal things.", pt: "'As...as' compara duas coisas iguais." } },
      { id: "i23d-cp2", prompt: { en: "Complete: The new system is ___ complicated ___ the old one.", pt: "Complete: The new system is ___ complicated ___ the old one." }, options: ["as / as", "less / than", "more / more"], answer: "less / than", explanation: { en: "'Less...than' shows a smaller amount of a quality.", pt: "'Less...than' mostra menos de uma qualidade." } },
      { id: "i23d-cp3", prompt: { en: "Complete: ___ we invest, ___ revenue we expect.", pt: "Complete: ___ we invest, ___ revenue we expect." }, options: ["The more / the more", "As / as", "Less / than"], answer: "The more / the more", explanation: { en: "Double comparatives connect two changing things.", pt: "Comparativos duplos conectam duas coisas que mudam juntas." } },
      { id: "i23d-cp4", prompt: { en: "'The money a company earns from its business' = ?", pt: "'The money a company earns from its business' = ?" }, options: ["revenue", "investment", "trend"], answer: "revenue", explanation: { en: "Revenue is the money a company earns.", pt: "Revenue é o dinheiro que a empresa ganha." } },
      { id: "i23d-cp5", prompt: { en: "'Relaxed and not easily worried' = ?", pt: "'Relaxed and not easily worried' = ?" }, options: ["easygoing", "detail-oriented", "reliable"], answer: "easygoing", explanation: { en: "Easygoing describes a relaxed personality.", pt: "Easygoing descreve uma personalidade tranquila." } },
    ],
    input: {
      kind: "reading",
      title: { en: "Understanding growth in business", pt: "Entendendo o crescimento nos negócios" },
      lines: [
        { en: "Every startup needs a clear strategy to succeed in a competitive market.", pt: "Toda startup precisa de uma estratégia clara para ter sucesso em um mercado competitivo." },
        { en: "The more a company understands its consumers, the better its chances of growth.", pt: "Quanto mais uma empresa entende seus consumidores, maiores suas chances de crescimento." },
        { en: "Managing competition is often as challenging as attracting investment.", pt: "Gerenciar a concorrência costuma ser tão desafiador quanto atrair investimento." },
        { en: "A well-managed supply chain is usually less problematic than a disorganized one, and it can help increase revenue.", pt: "Uma cadeia de suprimentos bem gerenciada costuma ser menos problemática que uma desorganizada, e pode ajudar a aumentar a receita." },
      ],
      questions: [
        { id: "i23d-iq1", prompt: { en: "What does every startup need to succeed?", pt: "Do que toda startup precisa para ter sucesso?" }, options: ["A clear strategy", "A large office", "No competition"], answer: "A clear strategy", explanation: { en: "'Every startup needs a clear strategy to succeed.'", pt: "'Toda startup precisa de uma estratégia clara para ter sucesso.'" } },
        { id: "i23d-iq2", prompt: { en: "What is less problematic when the supply chain is well-managed?", pt: "O que é menos problemático quando a cadeia de suprimentos é bem gerenciada?" }, options: ["The supply chain itself", "The market", "The competition"], answer: "The supply chain itself", explanation: { en: "'A well-managed supply chain is usually less problematic than a disorganized one.'", pt: "'Uma cadeia de suprimentos bem gerenciada costuma ser menos problemática que uma desorganizada.'" } },
      ],
    },
    quickCheck: [
      { id: "i23d-qc1", prompt: { en: "'A new, small company, often in technology' = ?", pt: "'A new, small company, often in technology' = ?" }, options: ["startup", "supply chain", "trend"], answer: "startup", explanation: { en: "A startup is a new, small company.", pt: "Startup é uma empresa nova e pequena." } },
      { id: "i23d-qc2", prompt: { en: "Complete: Our revenue is ___ strong ___ our expectations.", pt: "Complete: Our revenue is ___ strong ___ our expectations." }, options: ["as / as", "the / the", "more / than"], answer: "as / as", explanation: { en: "'As...as' compares equal amounts.", pt: "'As...as' compara quantidades iguais." } },
      { id: "i23d-qc3", prompt: { en: "'Careful and thorough about small details' = ?", pt: "'Careful and thorough about small details' = ?" }, options: ["detail-oriented", "easygoing", "reliable"], answer: "detail-oriented", explanation: { en: "Detail-oriented means careful about details.", pt: "Detail-oriented significa cuidadoso com detalhes." } },
      { id: "i23d-qc4", prompt: { en: "Complete: ___ efficient the supply chain, ___ the customer satisfaction.", pt: "Complete: ___ efficient the supply chain, ___ the customer satisfaction." }, options: ["The more, the better", "As, as", "Less, than"], answer: "The more, the better", explanation: { en: "Double comparatives can mix 'more' and other comparatives like 'better'.", pt: "Comparativos duplos podem misturar 'more' e outros comparativos como 'better'." } },
    ],
  },
  communicate: {
    id: "INTERMEDIATE-U23-COMMUNICATE",
    review: [
      { en: "Our growth is as fast as expected. — as...as for equal comparisons.", pt: "Nosso crescimento é tão rápido quanto o esperado. — as...as para comparações iguais." },
      { en: "The new system is less complicated than the old one. — less...than for lower degree.", pt: "O novo sistema é menos complicado que o antigo. — less...than para grau menor." },
      { en: "The more we invest, the more revenue we expect. — double comparatives.", pt: "Quanto mais investimos, mais receita esperamos. — comparativos duplos." },
      { en: "She's known for being reliable, and they get along really well. — describing personality.", pt: "Ela é conhecida por ser confiável, e eles se dão muito bem. — descrevendo personalidade." },
    ],
    activities: [
      {
        id: "i23c-a1",
        title: { en: "Compare Two Companies", pt: "Compare Duas Empresas" },
        instruction: { en: "Compare a startup and a big company using as...as and less...than.", pt: "Compare uma startup e uma grande empresa usando as...as e less...than." },
        phrases: [
          { en: "A startup is often as risky as it is exciting.", pt: "Uma startup costuma ser tão arriscada quanto empolgante." },
          { en: "A big company is usually less flexible than a startup.", pt: "Uma grande empresa geralmente é menos flexível que uma startup." },
          { en: "Growth in a startup can be as fast as the market allows.", pt: "O crescimento em uma startup pode ser tão rápido quanto o mercado permitir." },
        ],
        check: [
          { id: "i23c-a1q1", prompt: { en: "Which sentence correctly uses 'less...than'?", pt: "Qual frase usa 'less...than' corretamente?" }, options: ["A big company is less flexible than a startup.", "A big company is less flexible as a startup.", "A big company is flexible less than a startup."], answer: "A big company is less flexible than a startup.", explanation: { en: "'Less + adjective + than' is the correct pattern.", pt: "'Less + adjetivo + than' é o padrão correto." } },
          { id: "i23c-a1q2", prompt: { en: "Which sentence correctly uses 'as...as'?", pt: "Qual frase usa 'as...as' corretamente?" }, options: ["Growth can be as fast as the market allows.", "Growth can be fast as the market allows.", "Growth can be as faster as the market allows."], answer: "Growth can be as fast as the market allows.", explanation: { en: "'As + adjective + as' keeps the base adjective form.", pt: "'As + adjetivo + as' mantém a forma base do adjetivo." } },
        ],
      },
      {
        id: "i23c-a2",
        title: { en: "The More, the More", pt: "Quanto Mais, Mais" },
        instruction: { en: "Make three sentences about business using the more..., the more/better...", pt: "Crie três frases sobre negócios usando the more..., the more/better..." },
        phrases: [
          { en: "The more we understand the market, the better our strategy.", pt: "Quanto mais entendemos o mercado, melhor nossa estratégia." },
          { en: "The more consumers trust a brand, the more they buy.", pt: "Quanto mais os consumidores confiam em uma marca, mais eles compram." },
          { en: "The more efficient the supply chain, the lower the costs.", pt: "Quanto mais eficiente a cadeia de suprimentos, menores os custos." },
        ],
        check: [
          { id: "i23c-a2q1", prompt: { en: "Complete: The more consumers trust a brand, ___ they buy.", pt: "Complete: The more consumers trust a brand, ___ they buy." }, options: ["the more", "as much as", "less than"], answer: "the more", explanation: { en: "Double comparatives repeat 'the + comparative'.", pt: "Comparativos duplos repetem 'the + comparativo'." } },
          { id: "i23c-a2q2", prompt: { en: "Complete: The more efficient the supply chain, ___ the costs.", pt: "Complete: The more efficient the supply chain, ___ the costs." }, options: ["the lower", "as low as", "less low"], answer: "the lower", explanation: { en: "'The + comparative' works with adjectives like 'low' → 'lower'.", pt: "'The + comparativo' funciona com adjetivos como 'low' → 'lower'." } },
        ],
      },
      {
        id: "i23c-a3",
        title: { en: "Describe a Colleague", pt: "Descreva um Colega" },
        instruction: { en: "Describe a colleague's or business partner's personality.", pt: "Descreva a personalidade de um colega ou sócio." },
        phrases: [
          { en: "My manager is known for being very detail-oriented.", pt: "Meu gerente é conhecido por ser muito detalhista." },
          { en: "My business partner is easygoing, so we always get along well.", pt: "Meu sócio é tranquilo, então sempre nos damos bem." },
          { en: "She's known for being reliable and hardworking.", pt: "Ela é conhecida por ser confiável e trabalhadora." },
        ],
        check: [
          { id: "i23c-a3q1", prompt: { en: "'Known for being detail-oriented' means...", pt: "'Known for being detail-oriented' significa..." }, options: ["Careful about small details", "Relaxed about everything", "Focused only on money"], answer: "Careful about small details", explanation: { en: "Detail-oriented people pay attention to small details.", pt: "Pessoas detalhistas prestam atenção a pequenos detalhes." } },
          { id: "i23c-a3q2", prompt: { en: "'They get along really well' means...", pt: "'They get along really well' significa..." }, options: ["They have a good relationship", "They compete with each other", "They rarely talk"], answer: "They have a good relationship", explanation: { en: "'Get along' describes a good relationship.", pt: "'Get along' descreve um bom relacionamento." } },
        ],
      },
    ],
    challenge: {
      id: "i23c-cc1",
      title: { en: "Present Your Company's Strategy", pt: "Apresente a Estratégia da Sua Empresa" },
      instruction: {
        en: "Talk out loud about a company (real or imaginary): compare it to a competitor using as...as or less...than, explain its growth strategy with the more..., the more..., and describe a colleague's personality.",
        pt: "Fale em voz alta sobre uma empresa (real ou imaginária): compare-a com um concorrente usando as...as ou less...than, explique a estratégia de crescimento com the more..., the more..., e descreva a personalidade de um colega.",
      },
      phrases: [
        { en: "Our product is as good as our main competitor's, but less expensive.", pt: "Nosso produto é tão bom quanto o do nosso principal concorrente, mas menos caro." },
        { en: "The more we invest in innovation, the more competitive we become.", pt: "Quanto mais investimos em inovação, mais competitivos ficamos." },
        { en: "Our investor is known for being detail-oriented, and we get along really well.", pt: "Nosso investidor é conhecido por ser detalhista, e nos damos muito bem." },
        { en: "The more consumers trust our brand, the more our revenue grows.", pt: "Quanto mais os consumidores confiam na nossa marca, mais nossa receita cresce." },
      ],
      check: [
        { id: "i23c-cc1q1", prompt: { en: "Which sentence correctly compares two things as equal?", pt: "Qual frase compara corretamente duas coisas como iguais?" }, options: ["Our product is as good as our competitor's.", "Our product is good as our competitor's.", "Our product is as better as our competitor's."], answer: "Our product is as good as our competitor's.", explanation: { en: "'As + adjective + as' is used for equal comparisons.", pt: "'As + adjetivo + as' é usado para comparações iguais." } },
        { id: "i23c-cc1q2", prompt: { en: "Which sentence correctly uses a double comparative?", pt: "Qual frase usa corretamente um comparativo duplo?" }, options: ["The more we invest, the more competitive we become.", "More we invest, more competitive we become.", "The more we invest, more competitive we become."], answer: "The more we invest, the more competitive we become.", explanation: { en: "Both parts need 'the + comparative'.", pt: "As duas partes precisam de 'the + comparativo'." } },
      ],
    },
    lessonReview: {
      summary: {
        en: "In this unit, you learned to compare things using as...as, less...than, and the more...the more, and talked about business, growth, and personality.",
        pt: "Nesta unidade, você aprendeu a comparar coisas usando as...as, less...than, e the more...the more, e falou sobre negócios, crescimento e personalidade.",
      },
      canDo: [
        { en: "I can compare things as equal using as...as.", pt: "Eu consigo comparar coisas como iguais usando as...as." },
        { en: "I can compare things using less...than.", pt: "Eu consigo comparar coisas usando less...than." },
        { en: "I can use double comparatives like the more..., the more...", pt: "Eu consigo usar comparativos duplos como the more..., the more..." },
        { en: "I can talk about business, the economy, and describe personalities.", pt: "Eu consigo falar sobre negócios, economia, e descrever personalidades." },
      ],
      next: {
        en: "Next unit: more advanced business and economy topics.",
        pt: "Próxima unidade: tópicos mais avançados de negócios e economia.",
      },
    },
  },
};
