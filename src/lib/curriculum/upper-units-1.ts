import type { CourseUnit } from "./types";

/** Speak2Co — Upper-Intermediate English Course (B2). Units 1–10 do currículo oficial. */
export const UPPER_UNITS_1_10: CourseUnit[] = [
{
  "code": "UPPER-INTERMEDIATE-U01",
  "number": 1,
  "title": "Business Economy & Advanced Collocations",
  "titlePt": "Economia de Negócios e Colocações Avançadas",
  "cefr": "B2",
  "objective": {
    "en": "To teach business economy and advanced collocations for professional and academic contexts in a contextualized manner.",
    "pt": "Ensinar economia de negócios e colocações avançadas para contextos profissionais e acadêmicos de forma contextualizada."
  },
  "communicationGoal": {
    "en": "Students will be able to use 'diplomacy' and business economy vocabulary to communicate in real-life situations.",
    "pt": "O aluno será capaz de usar 'diplomacia' e o vocabulário de economia de negócios para se comunicar em situações reais."
  },
  "prerequisites": {
    "en": "No prerequisites - initial unit of the course.",
    "pt": "Nenhum pré-requisito — unidade inicial do curso."
  },
  "newContent": {
    "en": "Grammar: Advanced collocations for professional and academic contexts. | Vocabulary: Business Economy (10 lexical items) | Expressions: Diplomacy",
    "pt": "Gramática: Colocações avançadas para contextos profissionais e acadêmicos. | Vocabulário: Economia de Negócios (10 itens lexicais) | Expressões: Diplomacia"
  },
  "reviewContent": {
    "en": "Not applicable - initial unit of the course.",
    "pt": "Não aplicável — unidade inicial do curso."
  },
  "discover": {
    "id": "UPPER-INTERMEDIATE-U01-DISCOVER",
    "warmUp": {
      "prompt": {
        "en": "Look at the images. What do you think they represent in the world of business and economy? What are some words that come to mind?",
        "pt": "Observe as imagens. O que você acha que elas representam no mundo dos negócios e da economia? Quais palavras vêm à mente?"
      },
      "phrases": [
        {
          "en": "This image suggests... because...",
          "pt": "Esta imagem sugere... porque..."
        },
        {
          "en": "I associate this with...",
          "pt": "Eu associo isso com..."
        }
      ]
    },
    "context": {
      "situation": {
        "en": "You are a consultant observing a meeting between two company representatives, Mr. Davies from a tech startup and Ms. Chen from a large investment firm. They are discussing a potential partnership.",
        "pt": "Você é um consultor observando uma reunião entre dois representantes de empresas, o Sr. Davies de uma startup de tecnologia e a Sra. Chen de uma grande empresa de investimentos. Eles estão discutindo uma parceria potencial."
      },
      "dialogue": [
        {
          "who": "Mr. Davies",
          "en": "Thank you for meeting, Ms. Chen. We believe our innovative platform offers significant potential for market disruption.",
          "pt": "Obrigado por se encontrar, Sra. Chen. Acreditamos que nossa plataforma inovadora oferece um potencial significativo para a disrupção do mercado."
        },
        {
          "who": "Ms. Chen",
          "en": "Indeed, Mr. Davies. We've been following your startup's growth. Our firm is always looking for sound investment opportunities. However, we've noted some concerns regarding your current revenue streams.",
          "pt": "De fato, Sr. Davies. Temos acompanhado o crescimento da sua startup. Nossa empresa está sempre em busca de oportunidades sólidas de investimento. No entanto, notamos algumas preocupações em relação às suas atuais fontes de receita."
        },
        {
          "who": "Mr. Davies",
          "en": "I take your point, although we foresee a rapid increase in revenue once we scale our operations. Our strategy is focused on long-term value.",
          "pt": "Entendo seu ponto, embora prevemos um rápido aumento na receita assim que escalarmos nossas operações. Nossa estratégia está focada no valor de longo prazo."
        },
        {
          "who": "Ms. Chen",
          "en": "That's a fair assessment, but the competition in this space is intense. We need to be convinced your supply chain can handle accelerated demand.",
          "pt": "Essa é uma avaliação justa, mas a concorrência neste espaço é intensa. Precisamos estar convencidos de que sua cadeia de suprimentos pode lidar com uma demanda acelerada."
        },
        {
          "who": "Mr. Davies",
          "en": "I'd push back slightly on that. We've thoroughly stress-tested our supply chain, and our consumer feedback indicates a strong trend towards our product.",
          "pt": "Eu discordo um pouco disso. Testamos exaustivamente nossa cadeia de suprimentos, e o feedback dos nossos consumidores indica uma forte tendência em relação ao nosso produto."
        },
        {
          "who": "Ms. Chen",
          "en": "Good to know. Perhaps we can explore this further in our next discussion.",
          "pt": "Bom saber. Talvez possamos explorar isso mais a fundo em nossa próxima discussão."
        }
      ]
    },
    "vocabulary": [
      {
        "term": "investment",
        "pt": "investimento",
        "ipa": "/ɪnˈvɛstmənt/",
        "definition": "The act of allocating money or capital in the expectation of deriving a profit or return.",
        "example": "The company made a significant investment in renewable energy projects.",
        "examplePt": "A empresa fez um investimento significativo em projetos de energia renovável."
      },
      {
        "term": "market",
        "pt": "mercado",
        "ipa": "/ˈmɑːrkɪt/",
        "definition": "A place or system where goods and services are bought and sold, or the demand for particular goods or services.",
        "example": "There is a growing market for electric vehicles worldwide.",
        "examplePt": "Existe um mercado crescente para veículos elétricos em todo o mundo."
      },
      {
        "term": "revenue",
        "pt": "receita",
        "ipa": "/ˈrɛvənuː/",
        "definition": "The income a company generates from its normal business activities, usually from the sale of goods or services.",
        "example": "Despite increasing sales, the company's net revenue declined due to higher operating costs.",
        "examplePt": "Apesar do aumento nas vendas, a receita líquida da empresa diminuiu devido a custos operacionais mais altos."
      },
      {
        "term": "startup",
        "pt": "startup",
        "ipa": "/ˈstɑːrtʌp/",
        "definition": "A newly established business, especially one that uses technology and is expected to grow rapidly.",
        "example": "Many young entrepreneurs are launching innovative startups in the tech sector.",
        "examplePt": "Muitos jovens empreendedores estão lançando startups inovadoras no setor de tecnologia."
      },
      {
        "term": "competition",
        "pt": "concorrência",
        "ipa": "/ˌkɑmpəˈtɪʃən/",
        "definition": "The rivalry among businesses that offer similar goods or services, aiming to attract customers.",
        "example": "Intense competition in the smartphone market drives innovation and lower prices.",
        "examplePt": "A intensa concorrência no mercado de smartphones impulsiona a inovação e preços mais baixos."
      },
      {
        "term": "growth",
        "pt": "crescimento",
        "ipa": "/ɡroʊθ/",
        "definition": "An increase in size, development, or prosperity, especially in economic terms.",
        "example": "The country experienced strong economic growth last quarter, driven by exports.",
        "examplePt": "O país experimentou um forte crescimento econômico no último trimestre, impulsionado pelas exportações."
      },
      {
        "term": "strategy",
        "pt": "estratégia",
        "ipa": "/ˈstrætədʒi/",
        "definition": "A plan of action designed to achieve a long-term or overall aim.",
        "example": "The company's new marketing strategy aims to reach a younger demographic.",
        "examplePt": "A nova estratégia de marketing da empresa visa atingir um público demográfico mais jovem."
      },
      {
        "term": "supply chain",
        "pt": "cadeia de suprimentos",
        "ipa": "/səˈplaɪ tʃeɪn/",
        "definition": "The network of all the individuals, organizations, resources, activities, and technology involved in the creation and sale of a product.",
        "example": "Disruptions in the global supply chain led to delays in product delivery.",
        "examplePt": "Interrupções na cadeia de suprimentos global levaram a atrasos na entrega de produtos."
      },
      {
        "term": "consumer",
        "pt": "consumidor",
        "ipa": "/kənˈsuːmər/",
        "definition": "A person who purchases goods and services for personal use.",
        "example": "Consumer confidence is a key indicator of economic health.",
        "examplePt": "A confiança do consumidor é um indicador chave da saúde econômica."
      },
      {
        "term": "trend",
        "pt": "tendência",
        "ipa": "/trɛnd/",
        "definition": "A general direction in which something is developing or changing.",
        "example": "There's a growing trend towards remote work in many industries.",
        "examplePt": "Há uma tendência crescente em direção ao trabalho remoto em muitas indústrias."
      }
    ],
    "expressions": [
      {
        "en": "I take your point, although...",
        "pt": "Eu entendo seu ponto, embora..."
      },
      {
        "en": "That's a fair assessment, but...",
        "pt": "Essa é uma avaliação justa, mas..."
      },
      {
        "en": "I'd push back slightly on that.",
        "pt": "Eu discordo um pouco disso."
      }
    ],
    "grammar": [
      {
        "title": {
          "en": "Advanced Collocations for Professional and Academic Contexts",
          "pt": "Colocações Avançadas para Contextos Profissionais e Acadêmicos"
        },
        "examples": [
          {
            "en": "The team needs to **draw a conclusion** from the market research data.",
            "pt": "A equipe precisa **tirar uma conclusão** dos dados da pesquisa de mercado."
          },
          {
            "en": "It's important to **raise awareness** about sustainable business practices.",
            "pt": "É importante **aumentar a conscientização** sobre práticas de negócios sustentáveis."
          },
          {
            "en": "We must **strike a balance** between profitability and social responsibility.",
            "pt": "Devemos **encontrar um equilíbrio** entre rentabilidade e responsabilidade social."
          }
        ],
        "rule": {
          "en": "Collocations are pairs or groups of words that often go together. Using advanced collocations enhances fluency and makes your language sound more natural and sophisticated in professional and academic settings. Instead of saying 'make a conclusion', use 'draw a conclusion'. Instead of 'increase awareness', use 'raise awareness'. Instead of 'find a balance', use 'strike a balance'. Paying attention to these precise word combinations demonstrates a higher level of linguistic proficiency.",
          "pt": "Colocações são pares ou grupos de palavras que frequentemente aparecem juntas. O uso de colocações avançadas aprimora a fluência e faz com que sua linguagem soe mais natural e sofisticada em contextos profissionais e acadêmicos. Em vez de dizer 'fazer uma conclusão', use 'tirar uma conclusão'. Em vez de 'aumentar a conscientização', use 'elevar a conscientização'. Em vez de 'encontrar um equilíbrio', use 'encontrar um equilíbrio'. Prestar atenção a essas combinações precisas de palavras demonstra um nível mais alto de proficiência linguística."
        },
        "mistakes": [
          {
            "en": "Common Mistake: 'make a decision' (correct) vs. 'do a decision' (incorrect)",
            "pt": "Erro Comum: 'make a decision' (correto) vs. 'do a decision' (incorreto)"
          },
          {
            "en": "Common Mistake: 'achieve success' (correct) vs. 'get success' (less natural)",
            "pt": "Erro Comum: 'achieve success' (correto) vs. 'get success' (menos natural)"
          }
        ]
      }
    ],
    "controlledPractice": [
      {
        "id": "cp-01",
        "prompt": {
          "en": "Which verb best completes the collocation: 'to ______ a strategy'?",
          "pt": "Qual verbo melhor completa a colocação: '______ uma estratégia'?"
        },
        "options": [
          "form",
          "implement",
          "develop"
        ],
        "answer": "develop",
        "explanation": {
          "en": "'Develop a strategy' is a common and natural collocation for creating or refining a plan.",
          "pt": "'Develop a strategy' é uma colocação comum e natural para criar ou refinar um plano."
        }
      },
      {
        "id": "cp-02",
        "prompt": {
          "en": "Choose the correct collocation for expressing a strong argument: 'to ______ a point'.",
          "pt": "Escolha a colocação correta para expressar um argumento forte: '______ um ponto'."
        },
        "options": [
          "make",
          "state",
          "drive"
        ],
        "answer": "drive",
        "explanation": {
          "en": "'Drive home a point' means to make a point very clearly and emphatically.",
          "pt": "'Drive home a point' significa deixar um ponto muito claro e enfático."
        }
      },
      {
        "id": "cp-03",
        "prompt": {
          "en": "Which of these collocations refers to understanding a situation clearly? 'to ______ insight'.",
          "pt": "Qual destas colocações se refere a entender uma situação claramente? '______ insight'."
        },
        "options": [
          "gain",
          "get",
          "have"
        ],
        "answer": "gain",
        "explanation": {
          "en": "'Gain insight' is a standard collocation meaning to acquire a deep understanding.",
          "pt": "'Gain insight' é uma colocação padrão que significa adquirir uma compreensão profunda."
        }
      },
      {
        "id": "cp-04",
        "prompt": {
          "en": "To indicate that something is crucial or very important, we often say 'to ______ significance'.",
          "pt": "Para indicar que algo é crucial ou muito importante, frequentemente dizemos '______ significado'."
        },
        "options": [
          "hold",
          "carry",
          "bear"
        ],
        "answer": "hold",
        "explanation": {
          "en": "'Hold significance' is the correct collocation, meaning to have importance or meaning.",
          "pt": "'Hold significance' é a colocação correta, significando ter importância ou significado."
        }
      }
    ],
    "input": {
      "kind": "reading",
      "title": {
        "en": "The Rise of Sustainable Startups",
        "pt": "A Ascensão das Startups Sustentáveis"
      },
      "lines": [
        {
          "en": "The global economic landscape is undergoing a profound transformation, with a notable trend towards sustainability. Investment firms are increasingly keen to allocate capital to businesses that not only promise robust revenue growth but also demonstrate a commitment to environmental and social responsibility. This shift is particularly evident in the startup ecosystem, where new ventures are emerging with core strategies built around sustainable practices.",
          "pt": "O cenário econômico global está passando por uma profunda transformação, com uma notável tendência em direção à sustentabilidade. As empresas de investimento estão cada vez mais dispostas a alocar capital para negócios que não apenas prometem um crescimento robusto da receita, mas também demonstram um compromisso com a responsabilidade ambiental e social. Essa mudança é particularmente evidente no ecossistema de startups, onde novos empreendimentos estão surgindo com estratégias centrais construídas em torno de práticas sustentáveis."
        },
        {
          "en": "One of the key drivers behind this movement is evolving consumer awareness. Consumers are now more informed and actively seek products and services from companies that align with their values, creating a significant market demand for ethical goods. This heightened awareness also translates into increased competition among businesses to not only meet but exceed sustainability benchmarks.",
          "pt": "Um dos principais motores por trás desse movimento é a evolução da conscientização do consumidor. Os consumidores agora estão mais informados e buscam ativamente produtos e serviços de empresas que se alinham com seus valores, criando uma demanda de mercado significativa por bens éticos. Essa maior conscientização também se traduz em um aumento da concorrência entre as empresas para não apenas atender, mas superar os padrões de sustentabilidade."
        },
        {
          "en": "However, navigating the complexities of integrating sustainability across the entire supply chain can present substantial challenges for businesses. From sourcing raw materials to manufacturing processes and distribution networks, every stage requires careful consideration to minimize environmental impact and ensure fair labor practices. Despite these hurdles, the long-term growth prospects for sustainable businesses are compelling, offering both financial returns and positive societal impact.",
          "pt": "No entanto, navegar pelas complexidades da integração da sustentabilidade em toda a cadeia de suprimentos pode apresentar desafios substanciais para as empresas. Desde a obtenção de matérias-primas até os processos de fabricação e redes de distribuição, cada etapa exige consideração cuidadosa para minimizar o impacto ambiental e garantir práticas trabalhistas justas. Apesar desses obstáculos, as perspectivas de crescimento a longo prazo para empresas sustentáveis são convincentes, oferecendo tanto retornos financeiros quanto impacto social positivo."
        }
      ],
      "questions": [
        {
          "id": "rq-01",
          "prompt": {
            "en": "What is the primary trend described in the reading?",
            "pt": "Qual é a principal tendência descrita na leitura?"
          },
          "options": [
            "A shift towards increased competition in all markets.",
            "A movement towards sustainable business practices and investment.",
            "A decline in consumer interest in ethical products."
          ],
          "answer": "A movement towards sustainable business practices and investment.",
          "explanation": {
            "en": "The reading explicitly states 'a notable trend towards sustainability' and 'Investment firms are increasingly keen to allocate capital to businesses that... demonstrate a commitment to environmental and social responsibility.'",
            "pt": "A leitura afirma explicitamente 'uma notável tendência em direção à sustentabilidade' e 'As empresas de investimento estão cada vez mais dispostas a alocar capital para negócios que... demonstram um compromisso com a responsabilidade ambiental e social'."
          }
        },
        {
          "id": "rq-02",
          "prompt": {
            "en": "According to the text, what drives consumer demand for ethical goods?",
            "pt": "De acordo com o texto, o que impulsiona a demanda do consumidor por bens éticos?"
          },
          "options": [
            "Government regulations on product labeling.",
            "Lower prices offered by sustainable companies.",
            "Evolving consumer awareness and values."
          ],
          "answer": "Evolving consumer awareness and values.",
          "explanation": {
            "en": "The text states: 'One of the key drivers behind this movement is evolving consumer awareness. Consumers are now more informed and actively seek products and services from companies that align with their values.'",
            "pt": "O texto afirma: 'Um dos principais motores por trás desse movimento é a evolução da conscientização do consumidor. Os consumidores agora estão mais informados e buscam ativamente produtos e serviços de empresas que se alinham com seus valores'."
          }
        },
        {
          "id": "rq-03",
          "prompt": {
            "en": "What is one significant challenge mentioned for businesses integrating sustainability?",
            "pt": "Qual é um desafio significativo mencionado para as empresas que integram a sustentabilidade?"
          },
          "options": [
            "Lack of interest from investment firms.",
            "Difficulty in integrating sustainability across the entire supply chain.",
            "Insufficient long-term growth prospects."
          ],
          "answer": "Difficulty in integrating sustainability across the entire supply chain.",
          "explanation": {
            "en": "The reading highlights, 'However, navigating the complexities of integrating sustainability across the entire supply chain can present substantial challenges for businesses.'",
            "pt": "A leitura destaca: 'No entanto, navegar pelas complexidades da integração da sustentabilidade em toda a cadeia de suprimentos pode apresentar desafios substanciais para as empresas'."
          }
        }
      ]
    },
    "quickCheck": [
      {
        "id": "qc-01",
        "prompt": {
          "en": "What is 'revenue' in business terms?",
          "pt": "O que é 'receita' em termos de negócios?"
        },
        "options": [
          "The profit after all expenses are paid.",
          "The total income generated from sales before expenses.",
          "Money invested in a company by shareholders."
        ],
        "answer": "The total income generated from sales before expenses.",
        "explanation": {
          "en": "Revenue refers to the total income generated from sales of goods or services before any costs or expenses are deducted.",
          "pt": "Receita refere-se à renda total gerada pela venda de bens ou serviços antes que quaisquer custos ou despesas sejam deduzidos."
        }
      },
      {
        "id": "qc-02",
        "prompt": {
          "en": "Which phrase expresses partial disagreement politely?",
          "pt": "Qual frase expressa desacordo parcial educadamente?"
        },
        "options": [
          "I totally disagree.",
          "That's a fair assessment, but...",
          "You are completely wrong."
        ],
        "answer": "That's a fair assessment, but...",
        "explanation": {
          "en": "'That's a fair assessment, but...' is a diplomatic way to acknowledge someone's point while introducing a differing opinion.",
          "pt": "'That's a fair assessment, but...' é uma maneira diplomática de reconhecer o ponto de alguém enquanto introduz uma opinião diferente."
        }
      },
      {
        "id": "qc-03",
        "prompt": {
          "en": "What is a 'startup'?",
          "pt": "O que é uma 'startup'?"
        },
        "options": [
          "A large, established corporation.",
          "A newly established business, often tech-focused and aiming for rapid growth.",
          "A government-funded research organization."
        ],
        "answer": "A newly established business, often tech-focused and aiming for rapid growth.",
        "explanation": {
          "en": "A startup is typically a young company, often technology-oriented, that is designed to grow rapidly.",
          "pt": "Uma startup é tipicamente uma empresa jovem, frequentemente orientada para a tecnologia, projetada para crescer rapidamente."
        }
      },
      {
        "id": "qc-04",
        "prompt": {
          "en": "Which of these is an advanced collocation?",
          "pt": "Qual dessas é uma colocação avançada?"
        },
        "options": [
          "Make a problem.",
          "Do a research.",
          "Strike a balance."
        ],
        "answer": "Strike a balance.",
        "explanation": {
          "en": "'Strike a balance' is a well-known advanced collocation meaning to find a satisfactory compromise.",
          "pt": "'Strike a balance' é uma colocação avançada bem conhecida que significa encontrar um compromisso satisfatório."
        }
      }
    ]
  },
  "communicate": {
    "id": "UPPER-INTERMEDIATE-U01-COMMUNICATE",
    "review": [
      {
        "en": "Recap the 10 Business Economy vocabulary items and their definitions.",
        "pt": "Revise os 10 itens de vocabulário de Economia de Negócios e suas definições."
      },
      {
        "en": "Review the diplomatic expressions for expressing partial disagreement.",
        "pt": "Revise as expressões diplomáticas para expressar desacordo parcial."
      },
      {
        "en": "Recall the examples of advanced collocations and their function in professional language.",
        "pt": "Lembre-se dos exemplos de colocações avançadas e sua função na linguagem profissional."
      }
    ],
    "activities": [
      {
        "id": "activity-01",
        "title": {
          "en": "Discuss: Market Trends and Future Investments",
          "pt": "Discuta: Tendências de Mercado e Investimentos Futuros"
        },
        "instruction": {
          "en": "In groups, discuss a current market trend. Consider how it might impact various industries and what potential investment opportunities or risks it presents. Use at least three vocabulary items and one diplomatic expression from the unit.",
          "pt": "Em grupos, discuta uma tendência atual do mercado. Considere como ela pode impactar várias indústrias e quais oportunidades ou riscos de investimento potenciais ela apresenta. Use pelo menos três itens de vocabulário e uma expressão diplomática da unidade."
        },
        "phrases": [
          {
            "en": "I believe this trend indicates strong growth potential...",
            "pt": "Acredito que esta tendência indica um forte potencial de crescimento..."
          },
          {
            "en": "While that's a fair assessment, I'd push back slightly on the idea that...",
            "pt": "Embora essa seja uma avaliação justa, eu discordo um pouco da ideia de que..."
          },
          {
            "en": "Considering the current competition, how would this affect new startups?",
            "pt": "Considerando a concorrência atual, como isso afetaria novas startups?"
          }
        ],
        "check": [
          {
            "id": "act-01-chk-01",
            "prompt": {
              "en": "Which of these best demonstrates the use of a diplomatic expression?",
              "pt": "Qual dessas opções demonstra melhor o uso de uma expressão diplomática?"
            },
            "options": [
              "I completely disagree with your point.",
              "I take your point, although I see it differently.",
              "Your idea is clearly wrong."
            ],
            "answer": "I take your point, although I see it differently.",
            "explanation": {
              "en": "This phrase acknowledges the other person's perspective before gently introducing a different view, characteristic of diplomacy.",
              "pt": "Esta frase reconhece a perspectiva da outra pessoa antes de introduzir suavemente uma visão diferente, característica da diplomacia."
            }
          },
          {
            "id": "act-01-chk-02",
            "prompt": {
              "en": "Which vocabulary term would be most relevant when discussing new business creation?",
              "pt": "Qual termo de vocabulário seria mais relevante ao discutir a criação de novos negócios?"
            },
            "options": [
              "Revenue",
              "Startup",
              "Consumer"
            ],
            "answer": "Startup",
            "explanation": {
              "en": "A 'startup' specifically refers to a newly established business, often with a focus on innovation and rapid growth.",
              "pt": "Uma 'startup' refere-se especificamente a um negócio recém-estabelecido, muitas vezes com foco em inovação e crescimento rápido."
            }
          }
        ]
      },
      {
        "id": "activity-02",
        "title": {
          "en": "Argue Your Position: The Ethics of Business Growth",
          "pt": "Defenda Sua Posição: A Ética do Crescimento Empresarial"
        },
        "instruction": {
          "en": "Divide into two teams. One team argues that maximum revenue and growth should be a company's sole strategy, while the other argues for balancing growth with ethical considerations (e.g., environmental impact, fair labor). Use advanced collocations and business economy terms to support your arguments.",
          "pt": "Divida-se em duas equipes. Uma equipe argumenta que a receita máxima e o crescimento devem ser a única estratégia de uma empresa, enquanto a outra defende o equilíbrio entre o crescimento e as considerações éticas (por exemplo, impacto ambiental, trabalho justo). Use colocações avançadas e termos de economia de negócios para apoiar seus argumentos."
        },
        "phrases": [
          {
            "en": "We must strike a balance between profit and responsibility.",
            "pt": "Devemos encontrar um equilíbrio entre lucro e responsabilidade."
          },
          {
            "en": "Our primary strategy is to drive significant revenue growth.",
            "pt": "Nossa principal estratégia é impulsionar um crescimento significativo da receita."
          },
          {
            "en": "It's crucial to draw a conclusion on the long-term impact on consumers.",
            "pt": "É crucial tirar uma conclusão sobre o impacto a longo prazo nos consumidores."
          }
        ],
        "check": [
          {
            "id": "act-02-chk-01",
            "prompt": {
              "en": "Which of these scenarios best illustrates 'striking a balance'?",
              "pt": "Qual desses cenários melhor ilustra 'encontrar um equilíbrio'?"
            },
            "options": [
              "A company prioritizes only profit margins.",
              "A company focuses solely on environmental protection, ignoring profits.",
              "A company invests in eco-friendly technology while maintaining competitive prices."
            ],
            "answer": "A company invests in eco-friendly technology while maintaining competitive prices.",
            "explanation": {
              "en": "Striking a balance involves finding a middle ground or compromise between two potentially conflicting objectives, like profit and environmental responsibility.",
              "pt": "Encontrar um equilíbrio envolve encontrar um meio-termo ou compromisso entre dois objetivos potencialmente conflitantes, como lucro e responsabilidade ambiental."
            }
          },
          {
            "id": "act-02-chk-02",
            "prompt": {
              "en": "When discussing 'strategy', which advanced collocation would be most appropriate?",
              "pt": "Ao discutir 'estratégia', qual colocação avançada seria mais apropriada?"
            },
            "options": [
              "Make a strategy.",
              "Formulate a strategy.",
              "Get a strategy."
            ],
            "answer": "Formulate a strategy.",
            "explanation": {
              "en": "'Formulate a strategy' is a more advanced and natural collocation than 'make' or 'get a strategy' in professional contexts.",
              "pt": "'Formulate a strategy' é uma colocação mais avançada e natural do que 'make' ou 'get a strategy' em contextos profissionais."
            }
          }
        ]
      },
      {
        "id": "activity-03",
        "title": {
          "en": "Analyze a Reading: Supply Chain Resilience",
          "pt": "Analise uma Leitura: Resiliência da Cadeia de Suprimentos"
        },
        "instruction": {
          "en": "Read a short article (provided by instructor) about recent disruptions in global supply chains. Analyze the challenges and propose solutions, focusing on how companies can enhance resilience. Use at least two advanced collocations and three business economy terms.",
          "pt": "Leia um breve artigo (fornecido pelo instrutor) sobre interrupções recentes nas cadeias de suprimentos globais. Analise os desafios e proponha soluções, focando em como as empresas podem aumentar a resiliência. Use pelo menos duas colocações avançadas e três termos de economia de negócios."
        },
        "phrases": [
          {
            "en": "These disruptions pose a significant challenge to global growth.",
            "pt": "Essas interrupções representam um desafio significativo para o crescimento global."
          },
          {
            "en": "To mitigate risk, we must conduct thorough analysis of the supply chain.",
            "pt": "Para mitigar o risco, devemos realizar uma análise aprofundada da cadeia de suprimentos."
          },
          {
            "en": "It's vital to draw conclusions about the impact on consumer behavior.",
            "pt": "É vital tirar conclusões sobre o impacto no comportamento do consumidor."
          }
        ],
        "check": [
          {
            "id": "act-03-chk-01",
            "prompt": {
              "en": "When discussing how a company prepares for future challenges, which term is most relevant?",
              "pt": "Ao discutir como uma empresa se prepara para desafios futuros, qual termo é mais relevante?"
            },
            "options": [
              "Investment",
              "Competition",
              "Strategy"
            ],
            "answer": "Strategy",
            "explanation": {
              "en": "Strategy refers to a plan of action designed to achieve a long-term or overall aim, which includes preparing for challenges.",
              "pt": "Estratégia refere-se a um plano de ação projetado para atingir um objetivo de longo prazo ou geral, o que inclui a preparação para desafios."
            }
          },
          {
            "id": "act-03-chk-02",
            "prompt": {
              "en": "Which collocation means to thoroughly examine something?",
              "pt": "Qual colocação significa examinar algo minuciosamente?"
            },
            "options": [
              "Take a look.",
              "Conduct an analysis.",
              "Do an inspection."
            ],
            "answer": "Conduct an analysis.",
            "explanation": {
              "en": "'Conduct an analysis' is a formal and professional collocation for examining something in detail.",
              "pt": "'Conduct an analysis' é uma colocação formal e profissional para examinar algo em detalhes."
            }
          }
        ]
      }
    ],
    "challenge": {
      "id": "challenge-01",
      "title": {
        "en": "Negotiating a Partnership Deal",
        "pt": "Negociando um Acordo de Parceria"
      },
      "instruction": {
        "en": "Role-play: You are representatives from two different companies. One company (A) is a startup seeking investment and market penetration. The other company (B) is an established firm offering capital but concerned about risk and long-term revenue. Negotiate a partnership, using diplomatic language, business economy vocabulary, and advanced collocations to secure the best deal for your company.",
        "pt": "Role-play: Vocês são representantes de duas empresas diferentes. Uma empresa (A) é uma startup buscando investimento e penetração de mercado. A outra empresa (B) é uma empresa estabelecida oferecendo capital, mas preocupada com riscos e receita de longo prazo. Negociem uma parceria, usando linguagem diplomática, vocabulário de economia de negócios e colocações avançadas para garantir o melhor acordo para sua empresa."
      },
      "phrases": [
        {
          "en": "We appreciate your interest, but we need to ensure this investment yields significant growth.",
          "pt": "Agradecemos o seu interesse, mas precisamos garantir que este investimento gere um crescimento significativo."
        },
        {
          "en": "I'd push back slightly on the valuation, considering our projected revenue streams.",
          "pt": "Eu discordo um pouco da avaliação, considerando nossas projeções de fluxo de receita."
        },
        {
          "en": "Our strategy is to strike a balance between aggressive market expansion and sustainable operations.",
          "pt": "Nossa estratégia é encontrar um equilíbrio entre a expansão agressiva do mercado e operações sustentáveis."
        }
      ],
      "check": [
        {
          "id": "chal-01-chk-01",
          "prompt": {
            "en": "During the negotiation, which phrase would be most effective for politely questioning a high valuation?",
            "pt": "Durante a negociação, qual frase seria mais eficaz para questionar educadamente uma avaliação alta?"
          },
          "options": [
            "Your valuation is too high.",
            "I'd push back slightly on that valuation, given our internal projections.",
            "We cannot agree to this price."
          ],
          "answer": "I'd push back slightly on that valuation, given our internal projections.",
          "explanation": {
            "en": "This phrase allows you to express disagreement while maintaining a diplomatic and professional tone, and provides a reason.",
            "pt": "Esta frase permite expressar desacordo mantendo um tom diplomático e profissional, e fornece uma razão."
          }
        },
        {
          "id": "chal-01-chk-02",
          "prompt": {
            "en": "If a startup is discussing their anticipated sales figures, which vocabulary term is most relevant?",
            "pt": "Se uma startup está discutindo suas projeções de vendas, qual termo de vocabulário é mais relevante?"
          },
          "options": [
            "Competition",
            "Revenue",
            "Supply chain"
          ],
          "answer": "Revenue",
          "explanation": {
            "en": "Revenue refers to the total income generated from sales, which is directly related to anticipated sales figures.",
            "pt": "Receita refere-se à renda total gerada pelas vendas, o que está diretamente relacionado às projeções de vendas."
          }
        }
      ]
    },
    "lessonReview": {
      "summary": {
        "en": "In this unit, you've explored key concepts in business economy, including terms like investment, revenue, and strategy. You've also learned how to use diplomatic expressions to navigate challenging conversations and mastered advanced collocations to elevate your professional communication.",
        "pt": "Nesta unidade, você explorou conceitos-chave em economia de negócios, incluindo termos como investimento, receita e estratégia. Você também aprendeu a usar expressões diplomáticas para conduzir conversas desafiadoras e dominou colocações avançadas para elevar sua comunicação profissional."
      },
      "canDo": [
        {
          "en": "Discuss current economic trends and their impact on businesses using specific vocabulary.",
          "pt": "Discutir tendências econômicas atuais e seu impacto nos negócios usando vocabulário específico."
        },
        {
          "en": "Express partial disagreement and introduce alternative viewpoints diplomatically in business discussions.",
          "pt": "Expressar desacordo parcial e introduzir pontos de vista alternativos diplomaticamente em discussões de negócios."
        },
        {
          "en": "Incorporate advanced collocations to enhance the professionalism and naturalness of your spoken and written English.",
          "pt": "Incorporar colocações avançadas para aprimorar o profissionalismo e a naturalidade do seu inglês falado e escrito."
        }
      ],
      "next": {
        "en": "In the next unit, we will delve into 'Global Marketing' and explore persuasive language techniques.",
        "pt": "Na próxima unidade, aprofundaremos em 'Marketing Global' e exploraremos técnicas de linguagem persuasiva."
      }
    }
  }
},
{
  "code": "UPPER-INTERMEDIATE-U02",
  "number": 2,
  "title": "Global Issues and Persuasion",
  "titlePt": "Questões Globais e Persuasão",
  "cefr": "B2",
  "objective": {
    "en": "To teach global issues and mixed conditionals for combining different time references in a contextualized manner.",
    "pt": "Ensinar questões globais e mixed conditionals para combinar diferentes referências de tempo de forma contextualizada."
  },
  "communicationGoal": {
    "en": "The student will be able to use persuasion and global issues vocabulary to communicate in real-world situations.",
    "pt": "O aluno será capaz de usar 'persuasion' e o vocabulário de global issues para se comunicar em situações reais."
  },
  "prerequisites": {
    "en": "Structure: Advanced collocations for professional and academic contexts. Vocabulary: Business Economy.",
    "pt": "Estrutura: Advanced collocations for professional and academic contexts. Vocabulário: Business Economy."
  },
  "newContent": {
    "en": "Grammar: Mixed conditionals for combining different time references. Vocabulary: Global Issues (10 lexical items). Expressions: Persuasion.",
    "pt": "Grammar: Mixed conditionals for combining different time references. Vocabulary: Global Issues (10 itens lexicais). Expressions: Persuasion."
  },
  "reviewContent": {
    "en": "Not applicable — initial unit of the course.",
    "pt": "Não aplicável — unidade inicial do curso."
  },
  "discover": {
    "id": "UPPER-INTERMEDIATE-U02-DISCOVER",
    "warmUp": {
      "prompt": {
        "en": "Look at these images showing different global challenges. What emotions do they evoke? Which issues do you think are most pressing today and why?",
        "pt": "Observe estas imagens que mostram diferentes desafios globais. Que emoções elas evocam? Quais questões você considera mais urgentes hoje e por quê?"
      },
      "phrases": [
        {
          "en": "This image makes me feel...",
          "pt": "Esta imagem me faz sentir..."
        },
        {
          "en": "I believe that... is the most critical issue because...",
          "pt": "Acredito que... é a questão mais crítica porque..."
        }
      ]
    },
    "context": {
      "situation": {
        "en": "You are at an international conference on sustainable development. Two delegates, Dr. Elena Petrova (an economist) and Mr. Kenji Tanaka (an environmental activist), are discussing the challenges of implementing global initiatives.",
        "pt": "Você está em uma conferência internacional sobre desenvolvimento sustentável. Dois delegados, a Dra. Elena Petrova (economista) e o Sr. Kenji Tanaka (ativista ambiental), estão discutindo os desafios de implementar iniciativas globais."
      },
      "dialogue": [
        {
          "who": "Dr. Petrova",
          "en": "Good morning, Kenji. I'm finding this discussion on policy reform quite engaging. The evidence suggests that economic inequality remains a huge barrier to global progress.",
          "pt": "Bom dia, Kenji. Estou achando esta discussão sobre a reforma de políticas bastante envolvente. As evidências sugerem que a desigualdade econômica continua sendo uma enorme barreira para o progresso global."
        },
        {
          "who": "Mr. Tanaka",
          "en": "Absolutely, Elena. And if we had addressed migration patterns more effectively years ago, we wouldn't be facing such severe humanitarian crises today. It's all interconnected.",
          "pt": "Com certeza, Elena. E se tivéssemos abordado os padrões de migração de forma mais eficaz anos atrás, não estaríamos enfrentando crises humanitárias tão severas hoje. Está tudo interligado."
        },
        {
          "who": "Dr. Petrova",
          "en": "Indeed. While innovation is crucial, it's worth considering that many policy decisions are still driven by short-term gains rather than long-term sustainable development.",
          "pt": "De fato. Embora a inovação seja crucial, vale a pena considerar que muitas decisões políticas ainda são impulsionadas por ganhos de curto prazo, em vez de desenvolvimento sustentável de longo prazo."
        },
        {
          "who": "Mr. Tanaka",
          "en": "Precisely. If governments were more committed to protecting human rights globally, we wouldn't have seen such resistance to climate agreements last year. A compelling case can be made for integrating social justice into all aspects of globalization.",
          "pt": "Exatamente. Se os governos estivessem mais comprometidos em proteger os direitos humanos globalmente, não teríamos visto tanta resistência aos acordos climáticos no ano passado. Um argumento convincente pode ser feito para integrar a justiça social em todos os aspectos da globalização."
        },
        {
          "who": "Dr. Petrova",
          "en": "I agree. We need a fundamental shift. If we truly wanted significant reform, we would have invested much more in public awareness campaigns decades ago. It feels like we're always playing catch-up.",
          "pt": "Concordo. Precisamos de uma mudança fundamental. Se realmente quiséssemos uma reforma significativa, teríamos investido muito mais em campanhas de conscientização pública décadas atrás. Parece que estamos sempre correndo atrás do prejuízo."
        },
        {
          "who": "Mr. Tanaka",
          "en": "True. But it's never too late to advocate for change. Our challenge is to persuade leaders that these crises require immediate, coordinated global action.",
          "pt": "Verdade. Mas nunca é tarde para defender a mudança. Nosso desafio é persuadir os líderes de que essas crises exigem ação global imediata e coordenada."
        }
      ]
    },
    "vocabulary": [
      {
        "term": "inequality",
        "pt": "desigualdade",
        "ipa": "/ˌɪnɪˈkwɒlɪti/",
        "definition": "Difference in size, degree, circumstances, etc.; lack of equality.",
        "example": "Economic inequality has worsened in many countries over the past decade.",
        "examplePt": "A desigualdade econômica piorou em muitos países na última década."
      },
      {
        "term": "migration",
        "pt": "migração",
        "ipa": "/maɪˈɡreɪʃən/",
        "definition": "Movement from one part of something to another, especially of people from one country, place, or area to another.",
        "example": "Global migration patterns are constantly changing due to various factors.",
        "examplePt": "Os padrões de migração global estão em constante mudança devido a vários fatores."
      },
      {
        "term": "innovation",
        "pt": "inovação",
        "ipa": "/ˌɪnəˈveɪʃən/",
        "definition": "The action or process of innovating, or a new method, idea, product, etc.",
        "example": "Technological innovation is key to solving many environmental problems.",
        "examplePt": "A inovação tecnológica é a chave para resolver muitos problemas ambientais."
      },
      {
        "term": "policy",
        "pt": "política",
        "ipa": "/ˈpɒləsi/",
        "definition": "A course or principle of action adopted or proposed by a government, party, business, or individual.",
        "example": "The government's new climate policy aims to reduce carbon emissions.",
        "examplePt": "A nova política climática do governo visa reduzir as emissões de carbono."
      },
      {
        "term": "globalization",
        "pt": "globalização",
        "ipa": "/ˌɡloʊbəlaɪˈzeɪʃən/",
        "definition": "The process by which businesses or other organizations develop international influence or start operating on an international scale.",
        "example": "Globalization has led to increased interconnectedness among economies worldwide.",
        "examplePt": "A globalização levou a uma maior interconexão entre as economias em todo o mundo."
      },
      {
        "term": "human rights",
        "pt": "direitos humanos",
        "ipa": "/ˌhjuːmən ˈraɪts/",
        "definition": "A right which is believed to belong to every person.",
        "example": "Advocating for human rights is a core mission of many international organizations.",
        "examplePt": "Defender os direitos humanos é uma missão central de muitas organizações internacionais."
      },
      {
        "term": "development",
        "pt": "desenvolvimento",
        "ipa": "/dɪˈveləpmənt/",
        "definition": "The process of developing or being developed.",
        "example": "Sustainable development is crucial for future generations.",
        "examplePt": "O desenvolvimento sustentável é crucial para as futuras gerações."
      },
      {
        "term": "crisis",
        "pt": "crise",
        "ipa": "/ˈkraɪsɪs/",
        "definition": "A time of intense difficulty, trouble, or danger.",
        "example": "The world is currently facing a global health crisis.",
        "examplePt": "O mundo está atualmente enfrentando uma crise de saúde global."
      },
      {
        "term": "reform",
        "pt": "reforma",
        "ipa": "/rɪˈfɔːrm/",
        "definition": "The improvement or amendment of what is wrong, corrupt, or unsatisfactory.",
        "example": "Educational reform is necessary to prepare students for the modern job market.",
        "examplePt": "A reforma educacional é necessária para preparar os alunos para o mercado de trabalho moderno."
      },
      {
        "term": "awareness",
        "pt": "conscientização",
        "ipa": "/əˈweərnɪs/",
        "definition": "Knowledge or perception of a situation or fact.",
        "example": "Raising public awareness about environmental issues is vital.",
        "examplePt": "Aumentar a conscientização pública sobre questões ambientais é vital."
      }
    ],
    "expressions": [
      {
        "en": "The evidence suggests...",
        "pt": "As evidências sugerem..."
      },
      {
        "en": "It's worth considering that...",
        "pt": "Vale a pena considerar que..."
      },
      {
        "en": "A compelling case can be made for...",
        "pt": "Um argumento convincente pode ser feito para..."
      }
    ],
    "grammar": [
      {
        "title": {
          "en": "Mixed Conditionals for combining different time references",
          "pt": "Conditionals Mistos para combinar diferentes referências de tempo"
        },
        "examples": [
          {
            "en": "If I had taken that job, I would be living abroad now.",
            "pt": "Se eu tivesse aceitado aquele emprego, estaria morando no exterior agora."
          },
          {
            "en": "If she were more experienced, she wouldn't have made that mistake.",
            "pt": "Se ela fosse mais experiente, não teria cometido aquele erro."
          },
          {
            "en": "If we had invested in renewable energy years ago, we wouldn't be so dependent on fossil fuels today.",
            "pt": "Se tivéssemos investido em energia renovável anos atrás, não estaríamos tão dependentes de combustíveis fósseis hoje."
          }
        ],
        "rule": {
          "en": "Mixed conditionals combine elements of different conditional types to express hypothetical situations where the condition and result relate to different time frames (past, present, future). The two main types are: Type 3 (past condition) + Type 2 (present/future result) - 'If + Past Perfect, would + bare infinitive' (e.g., If I had studied harder, I would have a better job now). And Type 2 (present/general condition) + Type 3 (past result) - 'If + Simple Past/Continuous, would have + Past Participle' (e.g., If I were rich, I would have bought that house).",
          "pt": "Os conditionals mistos combinam elementos de diferentes tipos de condicionais para expressar situações hipotéticas onde a condição e o resultado se referem a diferentes períodos de tempo (passado, presente, futuro). Os dois tipos principais são: Tipo 3 (condição passada) + Tipo 2 (resultado presente/futuro) - 'If + Past Perfect, would + infinitivo sem to' (ex: Se eu tivesse estudado mais, eu teria um emprego melhor agora). E Tipo 2 (condição presente/geral) + Tipo 3 (resultado passado) - 'If + Simple Past/Continuous, would have + Past Participle' (ex: Se eu fosse rico, eu teria comprado aquela casa)."
        },
        "mistakes": [
          {
            "en": "Incorrectly mixing tenses within the clauses (e.g., 'If I had taken that job, I would have living abroad now').",
            "pt": "Misturar incorretamente os tempos verbais nas cláusulas (ex: 'Se eu tivesse aceitado aquele emprego, eu teria morando no exterior agora')."
          },
          {
            "en": "Confusing mixed conditionals with standard Type 2 or Type 3 conditionals, losing the nuance of different time references.",
            "pt": "Confundir conditionals mistos com conditionals padrão Tipo 2 ou Tipo 3, perdendo a nuance das diferentes referências de tempo."
          }
        ]
      }
    ],
    "controlledPractice": [
      {
        "id": "u02-cp-01",
        "prompt": {
          "en": "Which option correctly completes the mixed conditional sentence? 'If we ______ (start) working on this project earlier, we ______ (not be) under so much pressure now.'",
          "pt": "Qual opção completa corretamente a frase condicional mista? 'Se nós ______ (começar) a trabalhar neste projeto antes, nós ______ (não estar) sob tanta pressão agora.'"
        },
        "options": [
          "had started, wouldn't be",
          "started, wouldn't have been",
          "have started, won't be"
        ],
        "answer": "had started, wouldn't be",
        "explanation": {
          "en": "This is a mixed conditional Type 3 + Type 2. A past condition ('had started') affecting a present result ('wouldn't be').",
          "pt": "Este é um condicional misto Tipo 3 + Tipo 2. Uma condição passada ('had started') afetando um resultado presente ('wouldn't be')."
        }
      },
      {
        "id": "u02-cp-02",
        "prompt": {
          "en": "Choose the best mixed conditional form: 'If he ______ (not be) so shy, he ______ (accept) the invitation last week.'",
          "pt": "Escolha a melhor forma condicional mista: 'Se ele ______ (não ser) tão tímido, ele ______ (aceitar) o convite na semana passada.'"
        },
        "options": [
          "wasn't, would accept",
          "weren't, would have accepted",
          "hadn't been, would accept"
        ],
        "answer": "weren't, would have accepted",
        "explanation": {
          "en": "This is a mixed conditional Type 2 + Type 3. A present condition ('weren't') affecting a past result ('would have accepted'). 'Were' is often used for hypothetical situations in Type 2.",
          "pt": "Este é um condicional misto Tipo 2 + Tipo 3. Uma condição presente ('weren't') afetando um resultado passado ('would have accepted'). 'Were' é frequentemente usado para situações hipotéticas no Tipo 2."
        }
      },
      {
        "id": "u02-cp-03",
        "prompt": {
          "en": "Identify the sentence that correctly uses a mixed conditional:",
          "pt": "Identifique a frase que usa corretamente um condicional misto:"
        },
        "options": [
          "If I had known about the crisis, I would be more prepared now.",
          "If I knew about the crisis, I would have been more prepared now.",
          "If I have known about the crisis, I will be more prepared now."
        ],
        "answer": "If I had known about the crisis, I would be more prepared now.",
        "explanation": {
          "en": "This sentence correctly combines a past perfect (Type 3 condition) with 'would + bare infinitive' (Type 2 result), indicating a past condition affecting a present state.",
          "pt": "Esta frase combina corretamente um past perfect (condição Tipo 3) com 'would + infinitivo sem to' (resultado Tipo 2), indicando uma condição passada que afeta um estado presente."
        }
      },
      {
        "id": "u02-cp-04",
        "prompt": {
          "en": "Which statement best describes the meaning of: 'If they were more open to innovation, they wouldn't have missed that market opportunity last year.'",
          "pt": "Qual afirmação melhor descreve o significado de: 'Se eles fossem mais abertos à inovação, não teriam perdido aquela oportunidade de mercado no ano passado.'"
        },
        "options": [
          "They are not open to innovation, and they missed the opportunity.",
          "They were not open to innovation, and they are missing an opportunity now.",
          "They became open to innovation, so they took the opportunity."
        ],
        "answer": "They are not open to innovation, and they missed the opportunity.",
        "explanation": {
          "en": "The mixed conditional implies a present characteristic ('if they were more open') which had a consequence in the past ('wouldn't have missed'). Therefore, their current lack of openness to innovation led to them missing the opportunity.",
          "pt": "O condicional misto implica uma característica presente ('se eles fossem mais abertos') que teve uma consequência no passado ('não teriam perdido'). Portanto, a falta atual de abertura à inovação levou-os a perder a oportunidade."
        }
      }
    ],
    "input": {
      "kind": "listening",
      "title": {
        "en": "The Climate Challenge",
        "pt": "O Desafio Climático"
      },
      "lines": [
        {
          "en": "Speaker A: The latest report on climate change is quite stark. It highlights the urgent need for global policy reform. The evidence suggests we're falling behind.",
          "pt": "Locutor A: O último relatório sobre mudanças climáticas é bastante severo. Ele destaca a necessidade urgente de reforma da política global. As evidências sugerem que estamos ficando para trás."
        },
        {
          "en": "Speaker B: I agree. If governments had taken climate change more seriously decades ago, we wouldn't be facing such an ecological crisis today. It's a direct consequence.",
          "pt": "Locutor B: Concordo. Se os governos tivessem levado as mudanças climáticas mais a sério décadas atrás, não estaríamos enfrentando uma crise ecológica tão grande hoje. É uma consequência direta."
        },
        {
          "en": "Speaker A: Absolutely. And if there were more international cooperation on innovation for renewable energy, we could have already transitioned away from fossil fuels.",
          "pt": "Locutor A: Com certeza. E se houvesse mais cooperação internacional em inovação para energia renovável, já poderíamos ter feito a transição dos combustíveis fósseis."
        },
        {
          "en": "Speaker B: It's worth considering that public awareness also plays a huge role. If people were more aware of the immediate impacts, they would demand more from their leaders.",
          "pt": "Locutor B: Vale a pena considerar que a conscientização pública também desempenha um papel enorme. Se as pessoas estivessem mais cientes dos impactos imediatos, exigiriam mais de seus líderes."
        },
        {
          "en": "Speaker A: A compelling case can be made for integrating climate education into all school curricula. That would be a truly significant development.",
          "pt": "Locutor A: Um argumento convincente pode ser feito para integrar a educação climática em todos os currículos escolares. Isso seria um desenvolvimento verdadeiramente significativo."
        }
      ],
      "questions": [
        {
          "id": "u02-qc-listen-1",
          "prompt": {
            "en": "What is Speaker A's main concern about the latest climate report?",
            "pt": "Qual é a principal preocupação do Locutor A sobre o último relatório climático?"
          },
          "options": [
            "It suggests governments are not implementing enough policy reform.",
            "It shows that innovation is not effective enough.",
            "It indicates that public awareness is too low."
          ],
          "answer": "It suggests governments are not implementing enough policy reform.",
          "explanation": {
            "en": "Speaker A states: 'It highlights the urgent need for global policy reform. The evidence suggests we're falling behind.'",
            "pt": "O Locutor A afirma: 'Ele destaca a necessidade urgente de reforma da política global. As evidências sugerem que estamos ficando para trás.'"
          }
        },
        {
          "id": "u02-qc-listen-2",
          "prompt": {
            "en": "According to Speaker B, what past action would have prevented the current ecological crisis?",
            "pt": "De acordo com o Locutor B, que ação passada teria evitado a atual crise ecológica?"
          },
          "options": [
            "More international cooperation on innovation.",
            "Governments taking climate change more seriously.",
            "Increased public awareness campaigns."
          ],
          "answer": "Governments taking climate change more seriously.",
          "explanation": {
            "en": "Speaker B says: 'If governments had taken climate change more seriously decades ago, we wouldn't be facing such an ecological crisis today.'",
            "pt": "O Locutor B diz: 'Se os governos tivessem levado as mudanças climáticas mais a sério décadas atrás, não estaríamos enfrentando uma crise ecológica tão grande hoje.'"
          }
        },
        {
          "id": "u02-qc-listen-3",
          "prompt": {
            "en": "What does Speaker B suggest as a factor that could influence leaders to take more action?",
            "pt": "O que o Locutor B sugere como um fator que poderia influenciar os líderes a agir mais?"
          },
          "options": [
            "More reports and scientific data.",
            "Better policy reform from international bodies.",
            "Higher public awareness and demand."
          ],
          "answer": "Higher public awareness and demand.",
          "explanation": {
            "en": "Speaker B mentions: 'If people were more aware of the immediate impacts, they would demand more from their leaders.'",
            "pt": "O Locutor B menciona: 'Se as pessoas estivessem mais cientes dos impactos imediatos, exigiriam mais de seus líderes.'"
          }
        }
      ]
    },
    "quickCheck": [
      {
        "id": "u02-qc-1",
        "prompt": {
          "en": "Which sentence correctly uses a mixed conditional to express a past cause with a present result?",
          "pt": "Qual frase usa corretamente um condicional misto para expressar uma causa passada com um resultado presente?"
        },
        "options": [
          "If I had saved money, I wouldn't be in debt now.",
          "If I saved money, I wouldn't have been in debt now.",
          "If I save money, I won't be in debt now."
        ],
        "answer": "If I had saved money, I wouldn't be in debt now.",
        "explanation": {
          "en": "This is a Type 3 (past perfect condition) + Type 2 (present 'would + bare infinitive' result), showing a past action's effect on the present.",
          "pt": "Este é um Tipo 3 (condição no past perfect) + Tipo 2 (resultado presente com 'would + infinitivo sem to'), mostrando o efeito de uma ação passada no presente."
        }
      },
      {
        "id": "u02-qc-2",
        "prompt": {
          "en": "What does 'The evidence suggests...' imply in a discussion?",
          "pt": "O que 'As evidências sugerem...' implica em uma discussão?"
        },
        "options": [
          "The speaker is guessing.",
          "The speaker has factual data to support their point.",
          "The speaker is stating a personal opinion."
        ],
        "answer": "The speaker has factual data to support their point.",
        "explanation": {
          "en": "This expression is used to introduce a point that is supported by facts, research, or observations.",
          "pt": "Esta expressão é usada para introduzir um ponto que é apoiado por fatos, pesquisas ou observações."
        }
      },
      {
        "id": "u02-qc-3",
        "prompt": {
          "en": "Which global issue refers to the movement of people from one place to another?",
          "pt": "Qual questão global se refere ao movimento de pessoas de um lugar para outro?"
        },
        "options": [
          "Innovation",
          "Migration",
          "Inequality"
        ],
        "answer": "Migration",
        "explanation": {
          "en": "Migration specifically describes the movement of people, often across borders, for various reasons.",
          "pt": "Migração descreve especificamente o movimento de pessoas, muitas vezes através de fronteiras, por várias razões."
        }
      },
      {
        "id": "u02-qc-4",
        "prompt": {
          "en": "Choose the correct sentence: 'If she ______ (be) more ambitious, she ______ (get) that promotion last year.'",
          "pt": "Escolha a frase correta: 'Se ela ______ (ser) mais ambiciosa, ela ______ (obter) aquela promoção no ano passado.'"
        },
        "options": [
          "was, would get",
          "were, would have got",
          "had been, would get"
        ],
        "answer": "were, would have got",
        "explanation": {
          "en": "This is a mixed conditional Type 2 (present condition 'were') + Type 3 (past result 'would have got'). It implies she is not ambitious now, and therefore missed the past opportunity.",
          "pt": "Este é um condicional misto Tipo 2 (condição presente 'were') + Tipo 3 (resultado passado 'would have got'). Implica que ela não é ambiciosa agora, e, portanto, perdeu a oportunidade passada."
        }
      }
    ]
  },
  "communicate": {
    "id": "UPPER-INTERMEDIATE-U02-COMMUNICATE",
    "review": [
      {
        "en": "Recap: Global Issues Vocabulary",
        "pt": "Revisão: Vocabulário de Questões Globais"
      },
      {
        "en": "Recap: Mixed Conditionals for different time references",
        "pt": "Revisão: Conditionals Mistos para diferentes referências de tempo"
      },
      {
        "en": "Recap: Persuasion expressions",
        "pt": "Revisão: Expressões de persuasão"
      }
    ],
    "activities": [
      {
        "id": "u02-act-01",
        "title": {
          "en": "Compare and Contrast: Global Solutions",
          "pt": "Comparar e Contrastar: Soluções Globais"
        },
        "instruction": {
          "en": "In pairs, choose two global issues (e.g., inequality and migration). Discuss potential solutions, comparing and contrasting their effectiveness using mixed conditionals. For example, 'If we had invested more in education years ago, we wouldn't be seeing such high levels of inequality today.'",
          "pt": "Em pares, escolham duas questões globais (por exemplo, desigualdade e migração). Discutam soluções potenciais, comparando e contrastando sua eficácia usando condicionais mistos. Por exemplo, 'Se tivéssemos investido mais em educação anos atrás, não estaríamos vendo níveis tão altos de desigualdade hoje.'"
        },
        "phrases": [
          {
            "en": "If X were true, Y wouldn't have happened...",
            "pt": "Se X fosse verdade, Y não teria acontecido..."
          },
          {
            "en": "The evidence suggests that approach has limitations...",
            "pt": "As evidências sugerem que essa abordagem tem limitações..."
          },
          {
            "en": "While solution A addresses..., solution B seems more effective for...",
            "pt": "Enquanto a solução A aborda..., a solução B parece mais eficaz para..."
          }
        ],
        "check": [
          {
            "id": "u02-act1-check1",
            "prompt": {
              "en": "Which statement correctly uses a mixed conditional to compare potential solutions?",
              "pt": "Qual afirmação usa corretamente um condicional misto para comparar soluções potenciais?"
            },
            "options": [
              "If we had focused on policy reform, we would see better development now.",
              "If we focused on policy reform, we would have seen better development now.",
              "If we focus on policy reform, we will see better development now."
            ],
            "answer": "If we had focused on policy reform, we would see better development now.",
            "explanation": {
              "en": "This correctly links a past hypothetical action (had focused) to a present hypothetical result (would see).",
              "pt": "Isso conecta corretamente uma ação hipotética passada (had focused) a um resultado hipotético presente (would see)."
            }
          },
          {
            "id": "u02-act1-check2",
            "prompt": {
              "en": "When discussing solutions, why is it useful to use expressions like 'The evidence suggests...'?",
              "pt": "Ao discutir soluções, por que é útil usar expressões como 'As evidências sugerem...'?"
            },
            "options": [
              "To make your opinion sound more personal.",
              "To show that your point is based on factual information.",
              "To indicate that you are unsure about your statement."
            ],
            "answer": "To show that your point is based on factual information.",
            "explanation": {
              "en": "These expressions lend credibility and objectivity to your arguments, making them more persuasive.",
              "pt": "Essas expressões conferem credibilidade e objetividade aos seus argumentos, tornando-os mais persuasivos."
            }
          }
        ]
      },
      {
        "id": "u02-act-02",
        "title": {
          "en": "Give a Short Presentation: Advocating for Change",
          "pt": "Fazer uma Curta Apresentação: Advogando por Mudança"
        },
        "instruction": {
          "en": "Prepare a 3-minute presentation arguing for a specific policy change related to a global issue. Use global issues vocabulary, mixed conditionals, and persuasion expressions to make your case compelling. Focus on what could have been done differently in the past to achieve a better present/future.",
          "pt": "Prepare uma apresentação de 3 minutos defendendo uma mudança de política específica relacionada a uma questão global. Use o vocabulário de questões globais, condicionais mistos e expressões de persuasão para tornar seu argumento convincente. Concentre-se no que poderia ter sido feito de diferente no passado para alcançar um presente/futuro melhor."
        },
        "phrases": [
          {
            "en": "A compelling case can be made for...",
            "pt": "Um argumento convincente pode ser feito para..."
          },
          {
            "en": "If we had acted sooner, we wouldn't be in this situation today.",
            "pt": "Se tivéssemos agido antes, não estaríamos nesta situação hoje."
          },
          {
            "en": "It's worth considering that this reform would lead to...",
            "pt": "Vale a pena considerar que esta reforma levaria a..."
          }
        ],
        "check": [
          {
            "id": "u02-act2-check1",
            "prompt": {
              "en": "What is the primary goal of this presentation activity?",
              "pt": "Qual é o objetivo principal desta atividade de apresentação?"
            },
            "options": [
              "To describe a global issue objectively.",
              "To argue for a specific solution using persuasive language.",
              "To summarize past mistakes regarding a global issue."
            ],
            "answer": "To argue for a specific solution using persuasive language.",
            "explanation": {
              "en": "The instruction asks students to 'argue for a specific policy change' and 'make your case compelling' using persuasion expressions.",
              "pt": "A instrução pede aos alunos para 'defender uma mudança de política específica' e 'tornar seu argumento convincente' usando expressões de persuasão."
            }
          },
          {
            "id": "u02-act2-check2",
            "prompt": {
              "en": "Which type of mixed conditional would be most relevant for highlighting missed opportunities in the past that affect the present?",
              "pt": "Que tipo de condicional misto seria mais relevante para destacar oportunidades perdidas no passado que afetam o presente?"
            },
            "options": [
              "If + Past Simple, would + have + Past Participle",
              "If + Past Perfect, would + bare infinitive",
              "If + Present Simple, will + bare infinitive"
            ],
            "answer": "If + Past Perfect, would + bare infinitive",
            "explanation": {
              "en": "This structure (Type 3 condition + Type 2 result) is used to express how a past, unfulfilled condition affects the present.",
              "pt": "Esta estrutura (condição Tipo 3 + resultado Tipo 2) é usada para expressar como uma condição passada não cumprida afeta o presente."
            }
          }
        ]
      },
      {
        "id": "u02-act-03",
        "title": {
          "en": "Role-play a Negotiation: International Aid",
          "pt": "Role-play de uma Negociação: Ajuda Internacional"
        },
        "instruction": {
          "en": "Work in groups of three. One person is a representative from a country facing a crisis (e.g., humanitarian crisis due to migration), another is from an international aid organization, and the third is a neutral mediator. Negotiate a plan for aid, using persuasion techniques and discussing past decisions that led to the current situation with mixed conditionals.",
          "pt": "Trabalhem em grupos de três. Uma pessoa é um representante de um país que enfrenta uma crise (por exemplo, crise humanitária devido à migração), outra é de uma organização de ajuda internacional e a terceira é um mediador neutro. Negociem um plano de ajuda, usando técnicas de persuasão e discutindo decisões passadas que levaram à situação atual com condicionais mistos."
        },
        "phrases": [
          {
            "en": "If we had received support earlier, the crisis wouldn't be this severe.",
            "pt": "Se tivéssemos recebido apoio antes, a crise não seria tão grave."
          },
          {
            "en": "It's worth considering the long-term development impacts of this aid.",
            "pt": "Vale a pena considerar os impactos de desenvolvimento a longo prazo desta ajuda."
          },
          {
            "en": "The evidence suggests that immediate action is vital.",
            "pt": "As evidências sugerem que a ação imediata é vital."
          }
        ],
        "check": [
          {
            "id": "u02-act3-check1",
            "prompt": {
              "en": "What is the primary role of the mediator in this negotiation?",
              "pt": "Qual é o papel principal do mediador nesta negociação?"
            },
            "options": [
              "To dictate the terms of the aid plan.",
              "To facilitate discussion and help parties find common ground.",
              "To represent the interests of one of the parties."
            ],
            "answer": "To facilitate discussion and help parties find common ground.",
            "explanation": {
              "en": "A mediator's role is typically to help opposing parties reach an agreement by facilitating communication, not by taking sides or dictating terms.",
              "pt": "O papel de um mediador é tipicamente ajudar as partes opostas a chegar a um acordo, facilitando a comunicação, e não tomando partido ou ditando os termos."
            }
          },
          {
            "id": "u02-act3-check2",
            "prompt": {
              "en": "In a negotiation, why would you use a mixed conditional like 'If we were more proactive, we wouldn't have reached this point of crisis'?",
              "pt": "Em uma negociação, por que você usaria um condicional misto como 'Se fôssemos mais proativos, não teríamos chegado a este ponto de crise'?"
            },
            "options": [
              "To express regret about a current situation.",
              "To explain how a present characteristic led to a past undesirable outcome.",
              "To suggest future actions to avoid a crisis."
            ],
            "answer": "To explain how a present characteristic led to a past undesirable outcome.",
            "explanation": {
              "en": "This mixed conditional (Type 2 condition + Type 3 result) explains that a lack of proactivity (a current/general characteristic) caused a specific past negative event (reaching the crisis point).",
              "pt": "Este condicional misto (condição Tipo 2 + resultado Tipo 3) explica que a falta de proatividade (uma característica atual/geral) causou um evento negativo específico no passado (chegar ao ponto de crise)."
            }
          }
        ]
      }
    ],
    "challenge": {
      "id": "u02-challenge",
      "title": {
        "en": "Global Issues Policy Debate",
        "pt": "Debate sobre Políticas de Questões Globais"
      },
      "instruction": {
        "en": "Participate in a class debate on the most effective approach to tackling a specific global issue (e.g., climate change, economic inequality). Each student will take a side (for or against a specific policy) and must use vocabulary, mixed conditionals, and persuasion expressions to argue their point, respond to counter-arguments, and attempt to sway the 'judges' (teacher/other students).",
        "pt": "Participe de um debate em sala de aula sobre a abordagem mais eficaz para lidar com uma questão global específica (por exemplo, mudanças climáticas, desigualdade econômica). Cada aluno assumirá um lado (a favor ou contra uma política específica) e deverá usar vocabulário, condicionais mistos e expressões de persuasão para defender seu ponto de vista, responder a contra-argumentos e tentar influenciar os 'juízes' (professor/outros alunos)."
      },
      "phrases": [
        {
          "en": "If we had embraced this policy sooner, our nation would be much better off now.",
          "pt": "Se tivéssemos abraçado esta política antes, nossa nação estaria muito melhor agora."
        },
        {
          "en": "It's worth considering that the alternative approach has its own drawbacks...",
          "pt": "Vale a pena considerar que a abordagem alternativa tem suas próprias desvantagens..."
        },
        {
          "en": "The evidence suggests that such reforms lead to positive development outcomes.",
          "pt": "As evidências sugerem que tais reformas levam a resultados positivos de desenvolvimento."
        }
      ],
      "check": [
        {
          "id": "u02-chall-check1",
          "prompt": {
            "en": "What is the main objective of using persuasion expressions in this debate?",
            "pt": "Qual é o objetivo principal de usar expressões de persuasão neste debate?"
          },
          "options": [
            "To simply state facts without interpretation.",
            "To make your arguments more convincing and influence others' opinions.",
            "To avoid taking a strong stance on the issue."
          ],
          "answer": "To make your arguments more convincing and influence others' opinions.",
          "explanation": {
            "en": "Persuasion expressions are specifically designed to strengthen arguments and convince an audience.",
            "pt": "As expressões de persuasão são projetadas especificamente para fortalecer argumentos e convencer uma audiência."
          }
        },
        {
          "id": "u02-chall-check2",
          "prompt": {
            "en": "Which of the following scenarios would be best described by a mixed conditional (Type 2 condition, Type 3 result)?",
            "pt": "Qual dos seguintes cenários seria melhor descrito por um condicional misto (condição Tipo 2, resultado Tipo 3)?"
          },
          "options": [
            "If they were better listeners, they would have understood your proposal yesterday.",
            "If they had listened better, they would understand your proposal now.",
            "If they listen better, they will understand your proposal."
          ],
          "answer": "If they were better listeners, they would have understood your proposal yesterday.",
          "explanation": {
            "en": "This sentence links a current characteristic (being a good listener) to a past event (understanding the proposal yesterday) using the Type 2 + Type 3 structure.",
            "pt": "Esta frase conecta uma característica atual (ser um bom ouvinte) a um evento passado (entender sua proposta ontem) usando a estrutura Tipo 2 + Tipo 3."
          }
        }
      ]
    },
    "lessonReview": {
      "summary": {
        "en": "In this unit, we explored key global issues and learned how to discuss them using precise vocabulary. We mastered mixed conditionals to talk about how past actions and present situations are interconnected. We also practiced using persuasive language to argue effectively for solutions and policy changes.",
        "pt": "Nesta unidade, exploramos questões globais importantes e aprendemos a discuti-las usando vocabulário preciso. Dominamos os condicionais mistos para falar sobre como ações passadas e situações presentes estão interconectadas. Também praticamos o uso de linguagem persuasiva para argumentar eficazmente por soluções e mudanças de política."
      },
      "canDo": [
        {
          "en": "I can identify and discuss various global issues with appropriate vocabulary.",
          "pt": "Consigo identificar e discutir várias questões globais com vocabulário apropriado."
        },
        {
          "en": "I can use mixed conditionals accurately to link past conditions to present results, and present conditions to past results.",
          "pt": "Consigo usar condicionais mistos com precisão para ligar condições passadas a resultados presentes, e condições presentes a resultados passados."
        },
        {
          "en": "I can use persuasive expressions to present arguments and influence opinions in discussions and presentations.",
          "pt": "Consigo usar expressões persuasivas para apresentar argumentos e influenciar opiniões em discussões e apresentações."
        }
      ],
      "next": {
        "en": "Next, we will move on to Unit 3: Technology & Ethics, where we will explore advanced passive structures and reporting verbs.",
        "pt": "Em seguida, passaremos para a Unidade 3: Tecnologia e Ética, onde exploraremos estruturas passivas avançadas e verbos de relato."
      }
    }
  }
},
{
  "code": "UPPER-INTERMEDIATE-U03",
  "number": 3,
  "title": "Psychology Mindset",
  "titlePt": "Mentalidade Psicológica",
  "cefr": "B2",
  "objective": {
    "en": "To teach psychology mindset and common idiomatic expressions used in natural conversation in a contextualized manner.",
    "pt": "Ensinar mentalidade psicológica e expressões idiomáticas comuns usadas em conversas naturais de forma contextualizada."
  },
  "communicationGoal": {
    "en": "Students will be able to use 'hedging' and psychology mindset vocabulary to communicate in real-life situations.",
    "pt": "O aluno será capaz de usar 'hedging' e o vocabulário de mentalidade psicológica para se comunicar em situações reais."
  },
  "prerequisites": {
    "en": "Grammar: Mixed conditionals for combining different time references. Vocabulary: Global Issues.",
    "pt": "Estrutura: Mixed conditionals para combinar diferentes referências de tempo. Vocabulário: Global Issues."
  },
  "newContent": {
    "en": "Grammar: Common idiomatic expressions used in natural conversation. Vocabulary: Psychology Mindset (10 lexical items). Expressions: Hedging.",
    "pt": "Gramática: Expressões idiomáticas comuns usadas em conversas naturais. Vocabulário: Mentalidade Psicológica (10 itens lexicais). Expressões: Hedging."
  },
  "reviewContent": {
    "en": "Not applicable — initial unit of the course.",
    "pt": "Não aplicável — unidade inicial do curso."
  },
  "discover": {
    "id": "UPPER-INTERMEDIATE-U03-DISCOVER",
    "warmUp": {
      "prompt": {
        "en": "Look at the images. What do you think they represent regarding people's thoughts and reactions? How might someone with a 'growth mindset' approach these situations differently from someone with a 'fixed mindset'?",
        "pt": "Observe as imagens. O que você acha que elas representam em relação aos pensamentos e reações das pessoas? Como alguém com uma 'mentalidade de crescimento' abordaria essas situações de forma diferente de alguém com uma 'mentalidade fixa'?"
      },
      "phrases": [
        {
          "en": "This image suggests someone is feeling overwhelmed by a challenge, perhaps seeing it as an insurmountable obstacle.",
          "pt": "Esta imagem sugere que alguém se sente sobrecarregado por um desafio, talvez o vendo como um obstáculo intransponível."
        },
        {
          "en": "The second picture, on the other hand, illustrates a person learning from a mistake, which is a key characteristic of a positive mindset.",
          "pt": "A segunda imagem, por outro lado, ilustra uma pessoa aprendendo com um erro, o que é uma característica fundamental de uma mentalidade positiva."
        }
      ]
    },
    "context": {
      "situation": {
        "en": "Liam and Sarah are discussing a new project at work. Liam tends to be a bit pessimistic, while Sarah tries to maintain a more constructive outlook, even when things are uncertain. They need to present a challenging proposal to their boss.",
        "pt": "Liam e Sarah estão discutindo um novo projeto no trabalho. Liam tende a ser um pouco pessimista, enquanto Sarah tenta manter uma perspectiva mais construtiva, mesmo quando as coisas são incertas. Eles precisam apresentar uma proposta desafiadora ao chefe."
      },
      "dialogue": [
        {
          "who": "Liam",
          "en": "Honestly, I'm not sure this proposal will fly. It's a bit out there, don't you think?",
          "pt": "Honestamente, não tenho certeza se esta proposta vai decolar. É um pouco ousada demais, você não acha?"
        },
        {
          "who": "Sarah",
          "en": "Well, it would seem that we have a solid argument for its potential, even if it's unconventional. We just need to articulate the benefits clearly.",
          "pt": "Bem, parece que temos um argumento sólido para o seu potencial, mesmo que seja não convencional. Só precisamos articular os benefícios claramente."
        },
        {
          "who": "Liam",
          "en": "But what if the boss shoots it down immediately? We've put so much effort into this.",
          "pt": "Mas e se o chefe a rejeitar imediatamente? Colocamos tanto esforço nisso."
        },
        {
          "who": "Sarah",
          "en": "There's a possibility that it might face some resistance, but that's part of innovation. We can't let potential setbacks affect our motivation.",
          "pt": "Há uma possibilidade de que possa encontrar alguma resistência, mas isso faz parte da inovação. Não podemos deixar que possíveis contratempos afetem nossa motivação."
        },
        {
          "who": "Liam",
          "en": "I guess, to some extent, that's true. My old habits of doubting everything kick in sometimes.",
          "pt": "Eu acho que, até certo ponto, isso é verdade. Meus velhos hábitos de duvidar de tudo surgem às vezes."
        },
        {
          "who": "Sarah",
          "en": "Exactly! It's about having a growth mindset. We learn more from trying and failing than from not trying at all.",
          "pt": "Exatamente! É sobre ter uma mentalidade de crescimento. Aprendemos mais tentando e falhando do que não tentando de forma alguma."
        }
      ]
    },
    "vocabulary": [
      {
        "term": "motivation",
        "pt": "motivação",
        "ipa": "/ˌmoʊtɪˈveɪʃən/",
        "definition": "The reason or reasons one has for acting or behaving in a particular way.",
        "example": "His intrinsic motivation for learning made him an excellent student.",
        "examplePt": "Sua motivação intrínseca para aprender o tornou um excelente aluno."
      },
      {
        "term": "resilience",
        "pt": "resiliência",
        "ipa": "/rɪˈzɪliəns/",
        "definition": "The capacity to recover quickly from difficulties; toughness.",
        "example": "Her resilience helped her overcome significant personal setbacks.",
        "examplePt": "Sua resiliência a ajudou a superar grandes reveses pessoais."
      },
      {
        "term": "mindset",
        "pt": "mentalidade",
        "ipa": "/ˈmaɪndset/",
        "definition": "The established set of attitudes held by someone.",
        "example": "Adopting a growth mindset allows individuals to view challenges as opportunities.",
        "examplePt": "Adotar uma mentalidade de crescimento permite que os indivíduos vejam os desafios como oportunidades."
      },
      {
        "term": "self-awareness",
        "pt": "autoconsciência",
        "ipa": "/ˌself əˈwɛərnəs/",
        "definition": "Conscious knowledge of one's own character, feelings, motives, and desires.",
        "example": "Developing self-awareness is crucial for personal growth and emotional intelligence.",
        "examplePt": "Desenvolver a autoconsciência é crucial para o crescimento pessoal e a inteligência emocional."
      },
      {
        "term": "habit",
        "pt": "hábito",
        "ipa": "/ˈhæbɪt/",
        "definition": "A settled or regular tendency or practice, especially one that is hard to give up.",
        "example": "He formed a habit of reviewing his notes every evening.",
        "examplePt": "Ele adquiriu o hábito de revisar suas anotações todas as noites."
      },
      {
        "term": "confidence",
        "pt": "confiança",
        "ipa": "/ˈkɒnfɪdəns/",
        "definition": "The feeling or belief that one can rely on someone or something; firm trust.",
        "example": "Lack of confidence can often hinder one's performance despite their abilities.",
        "examplePt": "A falta de confiança pode muitas vezes dificultar o desempenho de alguém, apesar de suas habilidades."
      },
      {
        "term": "stress",
        "pt": "estresse",
        "ipa": "/strɛs/",
        "definition": "A state of mental or emotional strain or tension resulting from adverse or demanding circumstances.",
        "example": "Managing stress effectively is important for both physical and mental well-being.",
        "examplePt": "Gerenciar o estresse de forma eficaz é importante tanto para o bem-estar físico quanto mental."
      },
      {
        "term": "balance",
        "pt": "equilíbrio",
        "ipa": "/ˈbæləns/",
        "definition": "A state where things are of equal weight or force; a state of equilibrium.",
        "example": "Achieving a work-life balance is a common goal for many professionals.",
        "examplePt": "Alcançar um equilíbrio entre vida profissional e pessoal é um objetivo comum para muitos profissionais."
      },
      {
        "term": "growth",
        "pt": "crescimento",
        "ipa": "/ɡroʊθ/",
        "definition": "The process of increasing in size, amount, degree, or intensity.",
        "example": "Personal growth often involves stepping out of your comfort zone.",
        "examplePt": "O crescimento pessoal frequentemente envolve sair da sua zona de conforto."
      },
      {
        "term": "reflection",
        "pt": "reflexão",
        "ipa": "/rɪˈflɛkʃən/",
        "definition": "Serious thought or consideration; the act of thinking deeply about something.",
        "example": "Daily reflection helps to process experiences and plan for the future.",
        "examplePt": "A reflexão diária ajuda a processar experiências e a planejar o futuro."
      }
    ],
    "expressions": [
      {
        "en": "It would seem that...",
        "pt": "Parece que..."
      },
      {
        "en": "There's a possibility that...",
        "pt": "Há uma possibilidade de que..."
      },
      {
        "en": "To some extent, that's true.",
        "pt": "Até certo ponto, isso é verdade."
      }
    ],
    "grammar": [
      {
        "title": {
          "en": "Common Idiomatic Expressions Used in Natural Conversation",
          "pt": "Expressões Idiomáticas Comuns Usadas em Conversas Naturais"
        },
        "examples": [
          {
            "en": "Don't worry, completing this report is not rocket science. We can figure it out.",
            "pt": "Não se preocupe, completar este relatório não é ciência de foguetes. Conseguiremos descobrir."
          },
          {
            "en": "Alright, let's cut to the chase. What's the main issue we need to address?",
            "pt": "Tudo bem, vamos direto ao ponto. Qual é o principal problema que precisamos resolver?"
          },
          {
            "en": "After hours of discussion, we finally saw eye to eye on the project's direction.",
            "pt": "Depois de horas de discussão, finalmente concordamos sobre a direção do projeto."
          }
        ],
        "rule": {
          "en": "Idiomatic expressions are phrases whose meaning cannot be understood from the ordinary meaning of its words. They add color, nuance, and naturalness to English conversation. Learners should encounter them in context and practice using them to sound more like a native speaker. Understanding the common situations they are used in is key.",
          "pt": "Expressões idiomáticas são frases cujo significado não pode ser compreendido a partir do significado literal de suas palavras. Elas adicionam cor, nuance e naturalidade à conversação em inglês. Os alunos devem encontrá-las em contexto e praticar o uso para soar mais como um falante nativo. Entender as situações comuns em que são usadas é fundamental."
        },
        "mistakes": [
          {
            "en": "Using idioms literally: e.g., 'It's raining cats and dogs' doesn't mean animals are falling from the sky.",
            "pt": "Usar idiomas literalmente: ex., 'It's raining cats and dogs' não significa que animais estão caindo do céu."
          },
          {
            "en": "Misplacing or altering words within an idiom: e.g., 'to cut to the point' instead of 'to cut to the chase'.",
            "pt": "Deslocar ou alterar palavras dentro de um idioma: ex., 'to cut to the point' em vez de 'to cut to the chase'."
          }
        ]
      }
    ],
    "controlledPractice": [
      {
        "id": "u03-cp-1",
        "prompt": {
          "en": "Which idiomatic expression means to waste time on unimportant details?",
          "pt": "Qual expressão idiomática significa perder tempo com detalhes sem importância?"
        },
        "options": [
          "Beat around the bush",
          "Bite the bullet",
          "Break a leg"
        ],
        "answer": "Beat around the bush",
        "explanation": {
          "en": "'Beat around the bush' means to avoid getting to the point. 'Bite the bullet' means to endure a difficult situation, and 'Break a leg' is an encouraging idiom meaning 'good luck'.",
          "pt": "'Beat around the bush' significa evitar ir direto ao ponto. 'Bite the bullet' significa suportar uma situação difícil, e 'Break a leg' é uma expressão de encorajamento que significa 'boa sorte'."
        }
      },
      {
        "id": "u03-cp-2",
        "prompt": {
          "en": "Complete the sentence: 'She finally ___ and told him how she really felt.'",
          "pt": "Complete a frase: 'Ela finalmente ___ e disse a ele como realmente se sentia.'"
        },
        "options": [
          "spilled the beans",
          "bit her tongue",
          "hit the nail on the head"
        ],
        "answer": "spilled the beans",
        "explanation": {
          "en": "'Spilled the beans' means to reveal a secret or information. 'Bit her tongue' means she refrained from speaking, and 'hit the nail on the head' means to say something exactly right.",
          "pt": "'Spilled the beans' significa revelar um segredo ou informação. 'Bit her tongue' significa que ela se absteve de falar, e 'hit the nail on the head' significa dizer algo exatamente certo."
        }
      },
      {
        "id": "u03-cp-3",
        "prompt": {
          "en": "Which hedging expression would you use to suggest uncertainty about a statement?",
          "pt": "Qual expressão de 'hedging' você usaria para sugerir incerteza sobre uma afirmação?"
        },
        "options": [
          "It's undoubtedly true that...",
          "There's a possibility that...",
          "I firmly believe that..."
        ],
        "answer": "There's a possibility that...",
        "explanation": {
          "en": "'There's a possibility that...' clearly indicates uncertainty, acting as a hedging expression. The other options express certainty or strong belief.",
          "pt": "'There's a possibility that...' indica claramente incerteza, atuando como uma expressão de 'hedging'. As outras opções expressam certeza ou forte crença."
        }
      },
      {
        "id": "u03-cp-4",
        "prompt": {
          "en": "Read the sentence: 'Despite the failure, her team showed great ______ and quickly bounced back.' What psychology mindset vocabulary word best fits the blank?",
          "pt": "Leia a frase: 'Apesar do fracasso, sua equipe mostrou grande ______ e rapidamente se recuperou.' Qual palavra do vocabulário de mentalidade psicológica melhor preenche a lacuna?"
        },
        "options": [
          "motivation",
          "resilience",
          "confidence"
        ],
        "answer": "resilience",
        "explanation": {
          "en": "'Resilience' is the ability to recover quickly from difficulties, which perfectly fits the context of 'bounced back' after a failure. Motivation and confidence are related but less precise for this specific context.",
          "pt": "'Resiliência' é a capacidade de se recuperar rapidamente de dificuldades, o que se encaixa perfeitamente no contexto de 'se recuperou' após um fracasso. Motivação e confiança estão relacionadas, mas são menos precisas para este contexto específico."
        }
      }
    ],
    "input": {
      "kind": "reading",
      "title": {
        "en": "The Power of a Growth Mindset",
        "pt": "O Poder de uma Mentalidade de Crescimento"
      },
      "lines": [
        {
          "en": "Many people believe that their abilities are fixed traits – either you're good at something or you're not. This is known as a 'fixed mindset'. However, scientific research, notably by Carol Dweck, suggests a more empowering perspective: the 'growth mindset'.",
          "pt": "Muitas pessoas acreditam que suas habilidades são características fixas – ou você é bom em algo ou não é. Isso é conhecido como 'mentalidade fixa'. No entanto, pesquisas científicas, notadamente de Carol Dweck, sugerem uma perspectiva mais empoderadora: a 'mentalidade de crescimento'."
        },
        {
          "en": "Individuals with a growth mindset believe that their talents and intelligence can be developed through hard work, good strategies, and mentorship. They see challenges as opportunities for growth and learning, rather than as insurmountable barriers. This outlook fosters resilience and a deeper motivation to persevere.",
          "pt": "Indivíduos com uma mentalidade de crescimento acreditam que seus talentos e inteligência podem ser desenvolvidos através de trabalho árduo, boas estratégias e mentoria. Eles veem os desafios como oportunidades de crescimento e aprendizado, em vez de barreiras intransponíveis. Essa perspectiva fomenta a resiliência e uma motivação mais profunda para perseverar."
        },
        {
          "en": "For example, when faced with a difficult task, someone with a fixed mindset might say, 'I'm not smart enough for this,' and give up. It would seem that they are protecting their self-image by avoiding failure. Conversely, a person with a growth mindset might say, 'This is tough, but I can learn how to do it,' seeing the process as a journey of reflection and improvement.",
          "pt": "Por exemplo, ao se deparar com uma tarefa difícil, alguém com uma mentalidade fixa pode dizer: 'Não sou inteligente o suficiente para isso', e desistir. Parece que eles estão protegendo sua autoimagem evitando o fracasso. Inversamente, uma pessoa com uma mentalidade de crescimento pode dizer: 'Isso é difícil, mas posso aprender a fazer', vendo o processo como uma jornada de reflexão e melhoria."
        },
        {
          "en": "This difference in mindset significantly impacts how individuals approach learning, overcome obstacles, and manage stress. There's a possibility that fostering this perspective from an early age could lead to greater academic and professional success, as well as enhanced personal well-being.",
          "pt": "Essa diferença de mentalidade impacta significativamente como os indivíduos abordam o aprendizado, superam obstáculos e gerenciam o estresse. Há uma possibilidade de que fomentar essa perspectiva desde cedo possa levar a um maior sucesso acadêmico e profissional, bem como a um maior bem-estar pessoal."
        },
        {
          "en": "To some extent, cultivating a growth mindset requires self-awareness to recognize fixed mindset triggers and the habit of reframing challenges. It's not rocket science, but it does take consistent effort to shift one's internal dialogue.",
          "pt": "Até certo ponto, cultivar uma mentalidade de crescimento exige autoconsciência para reconhecer gatilhos de mentalidade fixa e o hábito de reestruturar desafios. Não é ciência de foguetes, mas exige um esforço consistente para mudar o diálogo interno."
        }
      ],
      "questions": [
        {
          "id": "u03-input-q1",
          "prompt": {
            "en": "According to the text, what is a key characteristic of a 'fixed mindset'?",
            "pt": "De acordo com o texto, qual é uma característica chave de uma 'mentalidade fixa'?"
          },
          "options": [
            "Believing abilities can be developed through effort.",
            "Seeing challenges as opportunities for learning.",
            "Believing abilities are unchangeable, innate traits."
          ],
          "answer": "Believing abilities are unchangeable, innate traits.",
          "explanation": {
            "en": "The text states that a fixed mindset is when 'people believe that their abilities are fixed traits – either you're good at something or you're not.'",
            "pt": "O texto afirma que uma mentalidade fixa é quando 'as pessoas acreditam que suas habilidades são características fixas – ou você é bom em algo ou não é'."
          }
        },
        {
          "id": "u03-input-q2",
          "prompt": {
            "en": "How do individuals with a 'growth mindset' typically view challenges?",
            "pt": "Como os indivíduos com uma 'mentalidade de crescimento' geralmente veem os desafios?"
          },
          "options": [
            "As insurmountable barriers to avoid.",
            "As opportunities for growth and learning.",
            "As reasons to give up immediately."
          ],
          "answer": "As opportunities for growth and learning.",
          "explanation": {
            "en": "The text says, 'They see challenges as opportunities for growth and learning, rather than as insurmountable barriers.'",
            "pt": "O texto diz: 'Eles veem os desafios como oportunidades de crescimento e aprendizado, em vez de barreiras intransponíveis'."
          }
        },
        {
          "id": "u03-input-q3",
          "prompt": {
            "en": "What is mentioned as a requirement for cultivating a growth mindset?",
            "pt": "O que é mencionado como um requisito para cultivar uma mentalidade de crescimento?"
          },
          "options": [
            "Avoiding all forms of failure.",
            "Innate high intelligence.",
            "Self-awareness and reframing challenges."
          ],
          "answer": "Self-awareness and reframing challenges.",
          "explanation": {
            "en": "The last paragraph states, 'To some extent, cultivating a growth mindset requires self-awareness to recognize fixed mindset triggers and the habit of reframing challenges.'",
            "pt": "O último parágrafo afirma: 'Até certo ponto, cultivar uma mentalidade de crescimento exige autoconsciência para reconhecer gatilhos de mentalidade fixa e o hábito de reestruturar desafios'."
          }
        }
      ]
    },
    "quickCheck": [
      {
        "id": "u03-qc-1",
        "prompt": {
          "en": "Which of these is NOT an idiomatic expression?",
          "pt": "Qual destas NÃO é uma expressão idiomática?"
        },
        "options": [
          "A piece of cake",
          "Kick the bucket",
          "Eat dinner"
        ],
        "answer": "Eat dinner",
        "explanation": {
          "en": "'Eat dinner' has a literal meaning and is not an idiom. 'A piece of cake' means very easy, and 'kick the bucket' means to die.",
          "pt": "'Eat dinner' tem um significado literal e não é um idioma. 'A piece of cake' significa muito fácil, e 'kick the bucket' significa morrer."
        }
      },
      {
        "id": "u03-qc-2",
        "prompt": {
          "en": "What is the primary purpose of 'hedging' in communication?",
          "pt": "Qual é o objetivo principal do 'hedging' na comunicação?"
        },
        "options": [
          "To express absolute certainty.",
          "To soften a statement or express uncertainty.",
          "To make a statement more aggressive."
        ],
        "answer": "To soften a statement or express uncertainty.",
        "explanation": {
          "en": "Hedging expressions like 'it would seem that' or 'there's a possibility that' are used to make statements less direct or to indicate that what you're saying may not be 100% certain.",
          "pt": "Expressões de hedging como 'it would seem that' ou 'there's a possibility that' são usadas para tornar as declarações menos diretas ou para indicar que o que você está dizendo pode não ser 100% certo."
        }
      },
      {
        "id": "u03-qc-3",
        "prompt": {
          "en": "Which psychology mindset term refers to the ability to bounce back from adversity?",
          "pt": "Qual termo da mentalidade psicológica se refere à capacidade de se recuperar da adversidade?"
        },
        "options": [
          "Motivation",
          "Resilience",
          "Confidence"
        ],
        "answer": "Resilience",
        "explanation": {
          "en": "Resilience is the capacity to recover quickly from difficulties; it's about bouncing back from tough situations.",
          "pt": "Resiliência é a capacidade de se recuperar rapidamente de dificuldades; trata-se de se recuperar de situações difíceis."
        }
      },
      {
        "id": "u03-qc-4",
        "prompt": {
          "en": "Which of the following sentences uses an idiom correctly?",
          "pt": "Qual das seguintes frases usa um idioma corretamente?"
        },
        "options": [
          "She broke a leg while playing soccer, so she won't perform tonight.",
          "It's raining cats and dogs, so I'll take an umbrella.",
          "He passed the test with flying colors because he studied hard."
        ],
        "answer": "He passed the test with flying colors because he studied hard.",
        "explanation": {
          "en": "'With flying colors' means with great success. 'Break a leg' means good luck, not a literal injury. 'Raining cats and dogs' means raining very heavily, implying an umbrella is needed, but the idiom itself is about heavy rain, not falling animals.",
          "pt": "'With flying colors' significa com grande sucesso. 'Break a leg' significa boa sorte, não uma lesão literal. 'Raining cats and dogs' significa chover muito, implicando a necessidade de um guarda-chuva, mas o idioma em si é sobre chuva forte, não animais caindo."
        }
      }
    ]
  },
  "communicate": {
    "id": "UPPER-INTERMEDIATE-U03-COMMUNICATE",
    "review": [
      {
        "en": "Quick recap of 'Psychology Mindset' vocabulary and its relevance in daily life.",
        "pt": "Recapitulação rápida do vocabulário de 'Mentalidade Psicológica' e sua relevância na vida diária."
      },
      {
        "en": "Review of common idiomatic expressions and the art of 'hedging' to soften communication.",
        "pt": "Revisão de expressões idiomáticas comuns e a arte de 'hedging' para suavizar a comunicação."
      },
      {
        "en": "Practice linking sounds in connected speech for smoother, more natural pronunciation.",
        "pt": "Prática de ligação de sons na fala conectada para uma pronúncia mais suave e natural."
      }
    ],
    "activities": [
      {
        "id": "u03-act-summarize",
        "title": {
          "en": "Summarize an Argument",
          "pt": "Resumir um Argumento"
        },
        "instruction": {
          "en": "You and a partner will read a short article about a controversial topic (e.g., impact of social media on well-being). After reading, summarize the main arguments, making sure to use at least two psychology mindset vocabulary words and one hedging expression. Present your summary to another pair.",
          "pt": "Você e um parceiro lerão um artigo curto sobre um tópico controverso (ex: impacto das mídias sociais no bem-estar). Após a leitura, resumam os principais argumentos, certificando-se de usar pelo menos duas palavras do vocabulário de mentalidade psicológica e uma expressão de 'hedging'. Apresentem seu resumo para outro par."
        },
        "phrases": [
          {
            "en": "It would seem that the author's main point is about...",
            "pt": "Parece que o principal ponto do autor é sobre..."
          },
          {
            "en": "This article highlights the importance of self-awareness regarding our digital habits.",
            "pt": "Este artigo destaca a importância da autoconsciência em relação aos nossos hábitos digitais."
          },
          {
            "en": "There's a possibility that heavy social media use negatively impacts one's confidence.",
            "pt": "Há uma possibilidade de que o uso excessivo de mídias sociais impacte negativamente a confiança de alguém."
          }
        ],
        "check": [
          {
            "id": "u03-sum-check1",
            "prompt": {
              "en": "Did your summary clearly present the article's main arguments?",
              "pt": "O seu resumo apresentou claramente os principais argumentos do artigo?"
            },
            "options": [
              "Yes, all main points were included.",
              "Partially, some minor details were missed.",
              "No, it focused on too many irrelevant details."
            ],
            "answer": "Yes, all main points were included.",
            "explanation": {
              "en": "A good summary captures the essence of the main arguments without getting bogged down in excessive detail.",
              "pt": "Um bom resumo capta a essência dos principais argumentos sem se prender a detalhes excessivos."
            }
          },
          {
            "id": "u03-sum-check2",
            "prompt": {
              "en": "How many psychology mindset words and hedging expressions did you use?",
              "pt": "Quantas palavras do vocabulário de mentalidade psicológica e expressões de hedging você usou?"
            },
            "options": [
              "Fewer than required.",
              "Exactly as required or more.",
              "None at all."
            ],
            "answer": "Exactly as required or more.",
            "explanation": {
              "en": "The goal was to integrate at least two psychology mindset words and one hedging expression to practice the new vocabulary and expressions.",
              "pt": "O objetivo era integrar pelo menos duas palavras do vocabulário de mentalidade psicológica e uma expressão de hedging para praticar o novo vocabulário e as expressões."
            }
          }
        ]
      },
      {
        "id": "u03-act-problem",
        "title": {
          "en": "Solve a Complex Problem",
          "pt": "Resolver um Problema Complexo"
        },
        "instruction": {
          "en": "In groups of three, you are tasked with developing a solution for a common workplace problem (e.g., low team morale, inefficient workflow). Discuss the problem, brainstorm solutions, and present your best solution using at least two idiomatic expressions and two hedging phrases. Focus on demonstrating a growth mindset throughout your discussion.",
          "pt": "Em grupos de três, vocês têm a tarefa de desenvolver uma solução para um problema comum no local de trabalho (ex: baixa moral da equipe, fluxo de trabalho ineficiente). Discutam o problema, façam um brainstorming de soluções e apresentem sua melhor solução usando pelo menos duas expressões idiomáticas e duas frases de 'hedging'. Foquem em demonstrar uma mentalidade de crescimento durante toda a discussão."
        },
        "phrases": [
          {
            "en": "It's not rocket science, but improving morale will take consistent effort from everyone.",
            "pt": "Não é ciência de foguetes, mas melhorar o moral exigirá um esforço consistente de todos."
          },
          {
            "en": "There's a possibility that a flexible work schedule could be a game-changer for productivity.",
            "pt": "Há uma possibilidade de que um horário de trabalho flexível possa mudar o jogo para a produtividade."
          },
          {
            "en": "To some extent, we need to cut to the chase and address the root cause of the stress.",
            "pt": "Até certo ponto, precisamos ir direto ao ponto e abordar a causa raiz do estresse."
          }
        ],
        "check": [
          {
            "id": "u03-prob-check1",
            "prompt": {
              "en": "Did your group's solution show an understanding of a growth mindset?",
              "pt": "A solução do seu grupo demonstrou compreensão de uma mentalidade de crescimento?"
            },
            "options": [
              "Yes, it focused on learning and improvement.",
              "Partially, but it still had some fixed mindset elements.",
              "No, it was based on avoiding challenges."
            ],
            "answer": "Yes, it focused on learning and improvement.",
            "explanation": {
              "en": "A growth mindset focuses on developing abilities and learning from challenges, which should be reflected in problem-solving approaches.",
              "pt": "Uma mentalidade de crescimento foca no desenvolvimento de habilidades e no aprendizado com desafios, o que deve ser refletido nas abordagens de resolução de problemas."
            }
          },
          {
            "id": "u03-prob-check2",
            "prompt": {
              "en": "Were at least two idiomatic expressions and two hedging phrases used effectively?",
              "pt": "Pelo menos duas expressões idiomáticas e duas frases de 'hedging' foram usadas efetivamente?"
            },
            "options": [
              "Yes, they were integrated naturally.",
              "Some were used, but felt forced.",
              "No, we didn't use enough or any."
            ],
            "answer": "Yes, they were integrated naturally.",
            "explanation": {
              "en": "The goal is to use these expressions naturally within the conversation to sound more fluent and nuanced.",
              "pt": "O objetivo é usar essas expressões naturalmente na conversa para soar mais fluente e cheio de nuances."
            }
          }
        ]
      },
      {
        "id": "u03-act-opinion",
        "title": {
          "en": "Give a Nuanced Opinion",
          "pt": "Dar uma Opinião Nuances"
        },
        "instruction": {
          "en": "Choose one of the following statements: 'Failure is the best teacher' or 'Talent is more important than hard work'. Prepare a short monologue (2-3 minutes) giving your nuanced opinion, using at least three psychology mindset terms, two idiomatic expressions, and two hedging expressions. Be ready to justify your stance.",
          "pt": "Escolha uma das seguintes afirmações: 'O fracasso é o melhor professor' ou 'O talento é mais importante que o trabalho duro'. Prepare um monólogo curto (2-3 minutos) dando sua opinião nuances, usando pelo menos três termos do vocabulário de mentalidade psicológica, duas expressões idiomáticas e duas expressões de 'hedging'. Esteja pronto para justificar sua posição."
        },
        "phrases": [
          {
            "en": "To some extent, talent gives you a head start, but resilience and consistent effort truly make a difference.",
            "pt": "Até certo ponto, o talento te dá uma vantagem, mas a resiliência e o esforço consistente realmente fazem a diferença."
          },
          {
            "en": "It would seem that seeing failure as an opportunity for reflection is a sign of a strong growth mindset.",
            "pt": "Parece que ver o fracasso como uma oportunidade de reflexão é um sinal de uma forte mentalidade de crescimento."
          },
          {
            "en": "I think it's important to not beat around the bush; sometimes, facing tough feedback is a bitter pill to swallow but necessary for growth.",
            "pt": "Acho importante não enrolar; às vezes, enfrentar um feedback difícil é um remédio amargo a engolir, mas necessário para o crescimento."
          }
        ],
        "check": [
          {
            "id": "u03-nuance-check1",
            "prompt": {
              "en": "Did your opinion successfully incorporate nuance, avoiding a black-and-white stance?",
              "pt": "Sua opinião incorporou nuance com sucesso, evitando uma posição de 'tudo ou nada'?"
            },
            "options": [
              "Yes, it explored different facets of the topic.",
              "Somewhat, but it leaned heavily to one side.",
              "No, it was a very firm, one-sided argument."
            ],
            "answer": "Yes, it explored different facets of the topic.",
            "explanation": {
              "en": "Nuance involves acknowledging complexity and different perspectives, often using hedging expressions to achieve this.",
              "pt": "A nuance envolve reconhecer a complexidade e diferentes perspectivas, muitas vezes usando expressões de hedging para isso."
            }
          },
          {
            "id": "u03-nuance-check2",
            "prompt": {
              "en": "Were all required vocabulary and expression types (psychology mindset, idioms, hedging) included?",
              "pt": "Todos os tipos de vocabulário e expressões exigidos (mentalidade psicológica, idiomas, hedging) foram incluídos?"
            },
            "options": [
              "Yes, all types were present.",
              "One type was missing or underused.",
              "Multiple types were missing."
            ],
            "answer": "Yes, all types were present.",
            "explanation": {
              "en": "This activity aims to integrate all new content from the unit into a coherent spoken response.",
              "pt": "Esta atividade visa integrar todo o novo conteúdo da unidade em uma resposta oral coerente."
            }
          }
        ]
      }
    ],
    "challenge": {
      "id": "u03-comm-challenge",
      "title": {
        "en": "Podcast Guest: 'Mindset in Modern Challenges'",
        "pt": "Convidado de Podcast: 'Mentalidade em Desafios Modernos'"
      },
      "instruction": {
        "en": "You are a guest on a podcast discussing 'Mindset in Modern Challenges'. The host asks you to talk about a personal or observed challenge (e.g., adapting to new technology, balancing work and personal life, dealing with uncertainty) and how adopting a certain mindset helped or could help. Your talk should be 3-4 minutes long, incorporating at least 5 psychology mindset terms, 3 idiomatic expressions, and 3 hedging phrases. Prepare your points, considering how to present a balanced and insightful perspective.",
        "pt": "Você é um convidado em um podcast discutindo 'Mentalidade em Desafios Modernos'. O anfitrião pede que você fale sobre um desafio pessoal ou observado (ex: adaptar-se a novas tecnologias, equilibrar trabalho e vida pessoal, lidar com incerteza) e como a adoção de uma certa mentalidade ajudou ou poderia ajudar. Sua fala deve ter 3-4 minutos, incorporando pelo menos 5 termos de mentalidade psicológica, 3 expressões idiomáticas e 3 frases de 'hedging'. Prepare seus pontos, considerando como apresentar uma perspectiva equilibrada e perspicaz."
      },
      "phrases": [
        {
          "en": "It would seem that maintaining balance in this fast-paced world is a constant challenge, requiring immense self-awareness.",
          "pt": "Parece que manter o equilíbrio neste mundo acelerado é um desafio constante, exigindo imensa autoconsciência."
        },
        {
          "en": "To some extent, when faced with overwhelming stress, cultivating resilience is not rocket science, but it takes consistent effort and reflection.",
          "pt": "Até certo ponto, quando confrontado com estresse avassalador, cultivar a resiliência não é ciência de foguetes, mas exige esforço e reflexão consistentes."
        },
        {
          "en": "There's a possibility that adopting a growth mindset can be a game-changer for overall confidence and motivation, even when you're swimming against the tide.",
          "pt": "Há uma possibilidade de que adotar uma mentalidade de crescimento possa ser um divisor de águas para a confiança e motivação gerais, mesmo quando você está nadando contra a corrente."
        }
      ],
      "check": [
        {
          "id": "u03-podcast-check1",
          "prompt": {
            "en": "Did your podcast segment flow naturally and use connected speech effectively?",
            "pt": "Seu segmento de podcast fluiu naturalmente e usou a fala conectada de forma eficaz?"
          },
          "options": [
            "Yes, it sounded very natural.",
            "Mostly, but some parts felt disjointed.",
            "No, it was difficult to follow the speech."
          ],
          "answer": "Yes, it sounded very natural.",
          "explanation": {
            "en": "Effective use of connected speech and natural flow are key to sounding fluent and engaging in a spoken context like a podcast.",
            "pt": "O uso eficaz da fala conectada e o fluxo natural são cruciais para soar fluente e envolvente em um contexto falado como um podcast."
          }
        },
        {
          "id": "u03-podcast-check2",
          "prompt": {
            "en": "Were all required content types (psychology mindset, idioms, hedging) included in your talk?",
            "pt": "Todos os tipos de conteúdo exigidos (mentalidade psicológica, idiomas, hedging) foram incluídos na sua fala?"
          },
          "options": [
            "Yes, and they were well-integrated.",
            "Some were present, but the minimums weren't always met.",
            "No, I struggled to incorporate them."
          ],
          "answer": "Yes, and they were well-integrated.",
          "explanation": {
            "en": "This challenge requires demonstrating mastery of all new content by integrating it purposefully into a longer, more complex spoken output.",
            "pt": "Este desafio exige a demonstração de domínio de todo o novo conteúdo, integrando-o propositalmente em uma produção oral mais longa e complexa."
          }
        }
      ]
    },
    "lessonReview": {
      "summary": {
        "en": "In this unit, we explored the nuances of a 'psychology mindset', focusing on key vocabulary like resilience, motivation, and growth. We learned how to use 'hedging' expressions to soften our statements and make our communication more nuanced. Additionally, we delved into common idiomatic expressions, understanding their meanings and how to use them naturally in conversation to sound more authentic.",
        "pt": "Nesta unidade, exploramos as nuances de uma 'mentalidade psicológica', focando em vocabulário chave como resiliência, motivação e crescimento. Aprendemos a usar expressões de 'hedging' para suavizar nossas declarações e tornar nossa comunicação mais nuances. Além disso, aprofundamos em expressões idiomáticas comuns, compreendendo seus significados e como usá-las naturalmente na conversa para soar mais autêntico."
      },
      "canDo": [
        {
          "en": "Discuss personal and professional challenges using psychology mindset vocabulary.",
          "pt": "Discutir desafios pessoais e profissionais usando o vocabulário de mentalidade psicológica."
        },
        {
          "en": "Use hedging expressions to present opinions or information with appropriate levels of certainty.",
          "pt": "Usar expressões de 'hedging' para apresentar opiniões ou informações com níveis apropriados de certeza."
        },
        {
          "en": "Incorporate common idiomatic expressions into natural conversations.",
          "pt": "Incorporar expressões idiomáticas comuns em conversas naturais."
        }
      ],
      "next": {
        "en": "Next, we'll build on these communication skills by exploring techniques for 'effective persuasion' and delving into vocabulary related to 'innovation and technology'.",
        "pt": "Em seguida, aprimoraremos essas habilidades de comunicação explorando técnicas de 'persuasão eficaz' e aprofundando no vocabulário relacionado a 'inovação e tecnologia'."
      }
    }
  }
},
{
  "code": "UPPER-INTERMEDIATE-U04",
  "number": 4,
  "title": "Arts Entertainment & Structuring Arguments",
  "titlePt": "Entretenimento de Artes e Estruturação de Argumentos",
  "cefr": "B2",
  "objective": {
    "en": "To teach arts entertainment vocabulary and discourse markers for structuring arguments (that said, on the whole, to some extent) in a contextualized way.",
    "pt": "Ensinar vocabulário de entretenimento de artes e marcadores discursivos para estruturar argumentos (that said, on the whole, to some extent) de forma contextualizada."
  },
  "communicationGoal": {
    "en": "Students will be able to use 'academic discussion' expressions and arts entertainment vocabulary to communicate in real-life situations.",
    "pt": "O aluno será capaz de usar expressões de 'discussão acadêmica' e o vocabulário de entretenimento de artes para se comunicar em situações reais."
  },
  "prerequisites": {
    "en": "Structure: Common idiomatic expressions used in natural conversation. Vocabulary: Psychology Mindset.",
    "pt": "Estrutura: Expressões idiomáticas comuns usadas em conversas naturais. Vocabulário: Mentalidade da Psicologia."
  },
  "newContent": {
    "en": "Grammar: Discourse markers for structuring arguments (that said, on the whole, to some extent). | Vocabulary: Arts Entertainment (10 lexical items) | Expressions: Academic Discussion.",
    "pt": "Gramática: Marcadores discursivos para estruturar argumentos (that said, on the whole, to some extent). | Vocabulário: Entretenimento de Artes (10 itens lexicais) | Expressões: Discussão Acadêmica."
  },
  "reviewContent": {
    "en": "Not applicable — initial unit of the course.",
    "pt": "Não aplicável — unidade inicial do curso."
  },
  "discover": {
    "id": "UPPER-INTERMEDIATE-U04-DISCOVER",
    "warmUp": {
      "prompt": {
        "en": "Look at the images below. What kind of arts entertainment do they represent? Which ones do you enjoy the most and why?",
        "pt": "Observe as imagens abaixo. Que tipo de entretenimento de artes elas representam? Quais você mais gosta e por quê?"
      },
      "phrases": [
        {
          "en": "I find live performances incredibly captivating.",
          "pt": "Eu acho apresentações ao vivo incrivelmente cativantes."
        },
        {
          "en": "Documentaries often offer a unique perspective on real-world issues.",
          "pt": "Documentários frequentemente oferecem uma perspectiva única sobre questões do mundo real."
        }
      ]
    },
    "context": {
      "situation": {
        "en": "Two friends, Alex and Ben, are discussing a recent film festival and the challenges facing independent cinema. They are trying to articulate their nuanced opinions.",
        "pt": "Dois amigos, Alex e Ben, estão discutindo um festival de cinema recente e os desafios que o cinema independente enfrenta. Eles estão tentando articular suas opiniões nuançadas."
      },
      "dialogue": [
        {
          "who": "Alex",
          "en": "That film festival last week was a real eye-opener, wasn't it? The variety of independent films was impressive.",
          "pt": "Aquele festival de cinema da semana passada foi revelador, não foi? A variedade de filmes independentes foi impressionante."
        },
        {
          "who": "Ben",
          "en": "Absolutely. I was particularly struck by the innovative narratives. That said, it felt like many struggled with distribution.",
          "pt": "Com certeza. Fiquei particularmente impressionado com as narrativas inovadoras. Dito isso, parecia que muitos tinham dificuldades com a distribuição."
        },
        {
          "who": "Alex",
          "en": "I agree. It raises the question of how independent cinema can truly thrive without mainstream backing. On the whole, the quality was there, but visibility is another matter.",
          "pt": "Concordo. Isso levanta a questão de como o cinema independente pode realmente prosperar sem o apoio do mainstream. Em geral, a qualidade estava lá, mas a visibilidade é outra questão."
        },
        {
          "who": "Ben",
          "en": "Exactly. It could be argued that streaming platforms offer a solution, to some extent, but they also dilute the experience of a dedicated festival.",
          "pt": "Exatamente. Poderia-se argumentar que as plataformas de streaming oferecem uma solução, em certa medida, mas elas também diluem a experiência de um festival dedicado."
        },
        {
          "who": "Alex",
          "en": "The data points to a growing audience for diverse content, but converting that into sustainable revenue for indie filmmakers is still a puzzle.",
          "pt": "Os dados apontam para um público crescente para conteúdo diverso, mas converter isso em receita sustentável para cineastas independentes ainda é um mistério."
        },
        {
          "who": "Ben",
          "en": "True. We need more platforms that champion these unique productions without compromising artistic integrity. It’s a complex balancing act.",
          "pt": "Verdade. Precisamos de mais plataformas que defendam essas produções únicas sem comprometer a integridade artística. É um equilíbrio complexo."
        }
      ]
    },
    "vocabulary": [
      {
        "term": "performance",
        "pt": "apresentação",
        "ipa": "/pərˈfɔːrməns/",
        "definition": "An act of presenting a play, concert, or other form of entertainment.",
        "example": "Her outstanding performance in the lead role earned her a standing ovation.",
        "examplePt": "Sua excelente apresentação no papel principal lhe rendeu uma ovação de pé."
      },
      {
        "term": "exhibition",
        "pt": "exposição",
        "ipa": "/ˌɛksəˈbɪʃən/",
        "definition": "A public display of works of art or other items of interest, held in an art gallery or museum.",
        "example": "The new exhibition features a collection of contemporary Brazilian sculptures.",
        "examplePt": "A nova exposição apresenta uma coleção de esculturas brasileiras contemporâneas."
      },
      {
        "term": "soundtrack",
        "pt": "trilha sonora",
        "ipa": "/ˈsaʊndtræk/",
        "definition": "The music accompanying a film, play, or video game.",
        "example": "The film's melancholic soundtrack perfectly captured the mood of the story.",
        "examplePt": "A trilha sonora melancólica do filme capturou perfeitamente o clima da história."
      },
      {
        "term": "narrative",
        "pt": "narrativa",
        "ipa": "/ˈnærətɪv/",
        "definition": "A spoken or written account of connected events; a story.",
        "example": "The author used a non-linear narrative to keep the readers engaged.",
        "examplePt": "O autor usou uma narrativa não linear para manter os leitores engajados."
      },
      {
        "term": "genre",
        "pt": "gênero",
        "ipa": "/ˈʒɑːnrə/",
        "definition": "A category of artistic composition, as in music or literature, characterized by similarities in form, style, or subject matter.",
        "example": "Science fiction is a popular genre that often explores futuristic themes.",
        "examplePt": "Ficção científica é um gênero popular que frequentemente explora temas futuristas."
      },
      {
        "term": "critique",
        "pt": "crítica",
        "ipa": "/krɪˈtiːk/",
        "definition": "A detailed analysis and assessment of something, especially a literary or philosophical theory.",
        "example": "The art critic published a scathing critique of the new play.",
        "examplePt": "O crítico de arte publicou uma crítica mordaz da nova peça."
      },
      {
        "term": "aesthetic",
        "pt": "estética",
        "ipa": "/ɛsˈθɛtɪk/",
        "definition": "Concerned with beauty or the appreciation of beauty.",
        "example": "The film had a strong visual aesthetic, with stunning cinematography.",
        "examplePt": "O filme tinha uma forte estética visual, com cinematografia deslumbrante."
      },
      {
        "term": "creativity",
        "pt": "criatividade",
        "ipa": "/ˌkriːeɪˈtɪvəti/",
        "definition": "The use of imagination or original ideas to create something; inventiveness.",
        "example": "Her painting demonstrated remarkable creativity and artistic vision.",
        "examplePt": "Sua pintura demonstrou notável criatividade e visão artística."
      },
      {
        "term": "audience",
        "pt": "audiência",
        "ipa": "/ˈɔːdiəns/",
        "definition": "The assembled spectators or listeners at a public event, such as a play, film, concert, or meeting.",
        "example": "The band played to a packed audience at the music festival.",
        "examplePt": "A banda tocou para uma audiência lotada no festival de música."
      },
      {
        "term": "production",
        "pt": "produção",
        "ipa": "/prəˈdʌkʃən/",
        "definition": "The process of making or growing something, especially in large quantities; a play, film, or broadcast.",
        "example": "The theatre company's latest production was a modern adaptation of a classic novel.",
        "examplePt": "A mais recente produção da companhia de teatro foi uma adaptação moderna de um romance clássico."
      }
    ],
    "expressions": [
      {
        "en": "This raises the question of...",
        "pt": "Isso levanta a questão de..."
      },
      {
        "en": "It could be argued that...",
        "pt": "Poderia ser argumentado que..."
      },
      {
        "en": "The data points to...",
        "pt": "Os dados apontam para..."
      }
    ],
    "grammar": [
      {
        "title": {
          "en": "Discourse markers for structuring arguments",
          "pt": "Marcadores discursivos para estruturar argumentos"
        },
        "examples": [
          {
            "en": "The new policy aims to reduce pollution; that said, its implementation faces significant logistical challenges.",
            "pt": "A nova política visa reduzir a poluição; dito isso, sua implementação enfrenta desafios logísticos significativos."
          },
          {
            "en": "On the whole, the project was a success, despite some minor setbacks at the beginning.",
            "pt": "No geral, o projeto foi um sucesso, apesar de alguns pequenos contratempos no início."
          },
          {
            "en": "While the movie had a strong message, its execution was, to some extent, flawed.",
            "pt": "Embora o filme tivesse uma mensagem forte, sua execução foi, em certa medida, falha."
          }
        ],
        "rule": {
          "en": "Discourse markers like 'that said', 'on the whole', and 'to some extent' are used to structure arguments, introduce counter-arguments or qualifications, and summarize information. 'That said' introduces a contrasting or limiting point. 'On the whole' indicates a general conclusion or a majority opinion. 'To some extent' suggests partial agreement or a limited degree.",
          "pt": "Marcadores discursivos como 'that said', 'on the whole' e 'to some extent' são usados para estruturar argumentos, introduzir contra-argumentos ou qualificações e resumir informações. 'That said' introduz um ponto contrastante ou limitante. 'On the whole' indica uma conclusão geral ou uma opinião majoritária. 'To some extent' sugere concordância parcial ou um grau limitado."
        },
        "mistakes": [
          {
            "en": "Incorrect: On the whole, I completely disagree. (Incorrect use, 'on the whole' suggests general agreement or summary.)",
            "pt": "Incorreto: On the whole, I completely disagree. (Uso incorreto, 'on the whole' sugere concordância geral ou resumo.)"
          },
          {
            "en": "Incorrect: That said, it was entirely perfect. (Incorrect, 'that said' implies a qualification or contrast, not absolute perfection.)",
            "pt": "Incorreto: That said, it was entirely perfect. (Incorreto, 'that said' implica uma qualificação ou contraste, não perfeição absoluta.)"
          }
        ]
      }
    ],
    "controlledPractice": [
      {
        "id": "u04-cp-1",
        "prompt": {
          "en": "Choose the best discourse marker: The restaurant had excellent service; ______, the food was a bit overpriced.",
          "pt": "Escolha o melhor marcador discursivo: O restaurante tinha um excelente serviço; ______, a comida era um pouco cara demais."
        },
        "options": [
          "on the whole",
          "that said",
          "to some extent"
        ],
        "answer": "that said",
        "explanation": {
          "en": "'That said' is used to introduce a contrasting or qualifying point, which fits perfectly when acknowledging good service but then mentioning a drawback (overpriced food).",
          "pt": "'That said' é usado para introduzir um ponto contrastante ou qualificador, o que se encaixa perfeitamente ao reconhecer um bom serviço, mas depois mencionar uma desvantagem (comida cara demais)."
        }
      },
      {
        "id": "u04-cp-2",
        "prompt": {
          "en": "Which discourse marker best completes the sentence? ______ the new policy has been beneficial for local businesses.",
          "pt": "Qual marcador discursivo melhor completa a frase? ______ a nova política tem sido benéfica para os negócios locais."
        },
        "options": [
          "To some extent",
          "That said",
          "On the whole"
        ],
        "answer": "On the whole",
        "explanation": {
          "en": "'On the whole' is used to give a general summary or conclusion, suggesting that overall, the policy had a positive impact despite any minor exceptions.",
          "pt": "'On the whole' é usado para dar um resumo geral ou conclusão, sugerindo que, no geral, a política teve um impacto positivo apesar de quaisquer pequenas exceções."
        }
      },
      {
        "id": "u04-cp-3",
        "prompt": {
          "en": "Complete the sentence: Her argument was persuasive, ______ we still need to consider the ethical implications.",
          "pt": "Complete a frase: O argumento dela foi persuasivo, ______ ainda precisamos considerar as implicações éticas."
        },
        "options": [
          "on the whole",
          "that said",
          "to some extent"
        ],
        "answer": "that said",
        "explanation": {
          "en": "Here, 'that said' introduces a crucial counter-point or an additional consideration despite the initial agreement or positive assessment.",
          "pt": "Aqui, 'that said' introduz um contraponto crucial ou uma consideração adicional apesar da concordância inicial ou avaliação positiva."
        }
      },
      {
        "id": "u04-cp-4",
        "prompt": {
          "en": "Choose the most appropriate discourse marker: I agree with his points, ______, but I think there's more to the story.",
          "pt": "Escolha o marcador discursivo mais apropriado: Eu concordo com os pontos dele, ______, mas acho que há mais na história."
        },
        "options": [
          "on the whole",
          "that said",
          "to some extent"
        ],
        "answer": "to some extent",
        "explanation": {
          "en": "'To some extent' indicates partial agreement or a limited degree of truth, fitting the idea of agreeing but having reservations.",
          "pt": "'To some extent' indica concordância parcial ou um grau limitado de verdade, encaixando-se na ideia de concordar, mas ter ressalvas."
        }
      }
    ],
    "input": {
      "kind": "reading",
      "title": {
        "en": "The Evolving Landscape of Digital Arts",
        "pt": "O Cenário Evolutivo das Artes Digitais"
      },
      "lines": [
        {
          "en": "The digital revolution has fundamentally reshaped the landscape of arts entertainment. From immersive virtual reality exhibitions to interactive digital performances, artists are now exploring mediums that were unimaginable just a few decades ago. This raises the question of how traditional art forms will adapt and whether digital art will ever gain the same level of critical recognition.",
          "pt": "A revolução digital remodelou fundamentalmente o cenário do entretenimento de artes. De exposições imersivas de realidade virtual a performances digitais interativas, os artistas estão agora explorando mídias inimagináveis há poucas décadas. Isso levanta a questão de como as formas de arte tradicionais se adaptarão e se a arte digital alcançará o mesmo nível de reconhecimento crítico."
        },
        {
          "en": "On the whole, the public response to digital art has been overwhelmingly positive, particularly among younger audiences. Its accessibility and potential for widespread dissemination make it highly appealing. However, critics sometimes argue that it lacks the 'soul' or 'authenticity' associated with physical creations.",
          "pt": "No geral, a resposta do público à arte digital tem sido esmagadoramente positiva, particularmente entre o público mais jovem. Sua acessibilidade e potencial para disseminação generalizada a tornam muito atraente. No entanto, os críticos às vezes argumentam que falta a 'alma' ou 'autenticidade' associada às criações físicas."
        },
        {
          "en": "It could be argued that such critiques stem from a generational divide rather than an objective assessment of artistic merit. The aesthetic of digital art, with its often transient and reproducible nature, challenges established notions of value and scarcity in the art market. That said, some digital artists are now creating unique, tokenized pieces using blockchain technology to address concerns about originality.",
          "pt": "Poderia ser argumentado que tais críticas derivam de uma divisão geracional em vez de uma avaliação objetiva do mérito artístico. A estética da arte digital, com sua natureza frequentemente transitória e reproduzível, desafia as noções estabelecidas de valor e escassez no mercado de arte. Dito isso, alguns artistas digitais estão agora criando peças únicas e tokenizadas usando tecnologia blockchain para abordar preocupações sobre originalidade."
        },
        {
          "en": "To some extent, the debate mirrors past discussions about photography or cinema's place in the art world. Each new medium initially faced skepticism before eventually being embraced. The data points to increasing investment in digital art infrastructure and education, suggesting a future where digital art is not just accepted, but celebrated as a distinct and vital genre.",
          "pt": "Em certa medida, o debate reflete discussões passadas sobre o lugar da fotografia ou do cinema no mundo da arte. Cada nova mídia inicialmente enfrentou ceticismo antes de ser finalmente abraçada. Os dados apontam para um investimento crescente em infraestrutura e educação em arte digital, sugerindo um futuro onde a arte digital não seja apenas aceita, mas celebrada como um gênero distinto e vital."
        },
        {
          "en": "Ultimately, the evolution of arts entertainment is continuous, and digital art is simply the latest chapter. Its unique narrative and methods of production will continue to push boundaries and redefine what art can be.",
          "pt": "Em última análise, a evolução do entretenimento de artes é contínua, e a arte digital é simplesmente o capítulo mais recente. Sua narrativa e métodos de produção únicos continuarão a ultrapassar limites e redefinir o que a arte pode ser."
        }
      ],
      "questions": [
        {
          "id": "u04-read-q1",
          "prompt": {
            "en": "What is the main challenge discussed regarding digital art's acceptance?",
            "pt": "Qual é o principal desafio discutido em relação à aceitação da arte digital?"
          },
          "options": [
            "Its high production cost.",
            "Its lack of 'soul' or 'authenticity' compared to traditional art.",
            "The difficulty in finding talented digital artists."
          ],
          "answer": "Its lack of 'soul' or 'authenticity' compared to traditional art.",
          "explanation": {
            "en": "The text states: 'critics sometimes argue that it lacks the 'soul' or 'authenticity' associated with physical creations.'",
            "pt": "O texto afirma: 'críticos às vezes argumentam que falta a 'alma' ou 'autenticidade' associada às criações físicas.'"
          }
        },
        {
          "id": "u04-read-q2",
          "prompt": {
            "en": "According to the article, what is one way digital artists are addressing concerns about originality?",
            "pt": "De acordo com o artigo, qual é uma maneira pela qual os artistas digitais estão abordando as preocupações sobre originalidade?"
          },
          "options": [
            "By exclusively creating physical prints of their digital works.",
            "By using blockchain technology to create unique, tokenized pieces.",
            "By limiting the number of times a digital artwork can be viewed."
          ],
          "answer": "By using blockchain technology to create unique, tokenized pieces.",
          "explanation": {
            "en": "The text mentions: 'That said, some digital artists are now creating unique, tokenized pieces using blockchain technology to address concerns about originality.'",
            "pt": "O texto menciona: 'Dito isso, alguns artistas digitais estão agora criando peças únicas e tokenizadas usando tecnologia blockchain para abordar preocupações sobre originalidade.'"
          }
        },
        {
          "id": "u04-read-q3",
          "prompt": {
            "en": "What does 'The data points to' suggest about the future of digital art?",
            "pt": "O que 'The data points to' sugere sobre o futuro da arte digital?"
          },
          "options": [
            "A decline in interest and funding.",
            "An increasing investment and integration, leading to wider acceptance.",
            "A shift back to purely traditional art forms."
          ],
          "answer": "An increasing investment and integration, leading to wider acceptance.",
          "explanation": {
            "en": "The phrase 'The data points to increasing investment in digital art infrastructure and education' directly supports this answer.",
            "pt": "A frase 'Os dados apontam para um investimento crescente em infraestrutura e educação em arte digital' apoia diretamente esta resposta."
          }
        }
      ]
    },
    "quickCheck": [
      {
        "id": "u04-qc-1",
        "prompt": {
          "en": "Which word refers to a public display of art?",
          "pt": "Qual palavra se refere a uma exibição pública de arte?"
        },
        "options": [
          "Narrative",
          "Exhibition",
          "Soundtrack"
        ],
        "answer": "Exhibition",
        "explanation": {
          "en": "An exhibition is a public display of works of art or other items of interest.",
          "pt": "Uma exposição é uma exibição pública de obras de arte ou outros itens de interesse."
        }
      },
      {
        "id": "u04-qc-2",
        "prompt": {
          "en": "When would you use 'that said' in an argument?",
          "pt": "Quando você usaria 'that said' em um argumento?"
        },
        "options": [
          "To introduce a general conclusion.",
          "To add a contrasting or qualifying point.",
          "To express complete agreement."
        ],
        "answer": "To add a contrasting or qualifying point.",
        "explanation": {
          "en": "'That said' is used to introduce a point that contrasts with or qualifies something just mentioned.",
          "pt": "'That said' é usado para introduzir um ponto que contrasta ou qualifica algo que acabou de ser mencionado."
        }
      },
      {
        "id": "u04-qc-3",
        "prompt": {
          "en": "What does the expression 'It could be argued that...' typically introduce?",
          "pt": "O que a expressão 'Poderia ser argumentado que...' geralmente introduz?"
        },
        "options": [
          "An undeniable fact.",
          "A generally accepted truth.",
          "A point of view that needs support or may be debatable."
        ],
        "answer": "A point of view that needs support or may be debatable.",
        "explanation": {
          "en": "'It could be argued that...' introduces an opinion or claim that the speaker intends to elaborate on or acknowledge as a possible perspective.",
          "pt": "'Poderia ser argumentado que...' introduz uma opinião ou afirmação que o falante pretende elaborar ou reconhecer como uma possível perspectiva."
        }
      },
      {
        "id": "u04-qc-4",
        "prompt": {
          "en": "Which of these words refers to the use of imagination to create something?",
          "pt": "Qual dessas palavras se refere ao uso da imaginação para criar algo?"
        },
        "options": [
          "Critique",
          "Aesthetic",
          "Creativity"
        ],
        "answer": "Creativity",
        "explanation": {
          "en": "Creativity is defined as the use of imagination or original ideas to create something.",
          "pt": "Criatividade é definida como o uso da imaginação ou ideias originais para criar algo."
        }
      }
    ]
  },
  "communicate": {
    "id": "UPPER-INTERMEDIATE-U04-COMMUNICATE",
    "review": [
      {
        "en": "We've explored key vocabulary related to arts entertainment, including terms like 'performance', 'exhibition', and 'genre'.",
        "pt": "Exploramos vocabulário chave relacionado ao entretenimento de artes, incluindo termos como 'performance', 'exhibition' e 'genre'."
      },
      {
        "en": "We practiced using discourse markers such as 'that said', 'on the whole', and 'to some extent' to structure arguments effectively.",
        "pt": "Praticamos o uso de marcadores discursivos como 'that said', 'on the whole' e 'to some extent' para estruturar argumentos de forma eficaz."
      },
      {
        "en": "We also learned academic discussion expressions to articulate nuanced opinions and build persuasive arguments.",
        "pt": "Também aprendemos expressões de discussão acadêmica para articular opiniões nuançadas e construir argumentos persuasivos."
      }
    ],
    "activities": [
      {
        "id": "u04-act-1",
        "title": {
          "en": "Critique a Film/Show",
          "pt": "Criticar um Filme/Espetáculo"
        },
        "instruction": {
          "en": "Choose a recent film, TV series, or stage production you have seen. Write a short formal text (150-200 words) expressing your opinion, using at least two arts entertainment vocabulary words and two discourse markers.",
          "pt": "Escolha um filme, série de TV ou produção teatral recente que você assistiu. Escreva um texto formal curto (150-200 palavras) expressando sua opinião, usando pelo menos duas palavras de vocabulário de entretenimento de artes e dois marcadores discursivos."
        },
        "phrases": [
          {
            "en": "The film's narrative was compelling...",
            "pt": "A narrativa do filme foi envolvente..."
          },
          {
            "en": "On the whole, the production was exceptional...",
            "pt": "No geral, a produção foi excepcional..."
          },
          {
            "en": "That said, the aesthetic choices were questionable...",
            "pt": "Dito isso, as escolhas estéticas foram questionáveis..."
          }
        ],
        "check": [
          {
            "id": "u04-act-1-check-1",
            "prompt": {
              "en": "Did you use at least two arts entertainment vocabulary words correctly?",
              "pt": "Você usou pelo menos duas palavras do vocabulário de entretenimento de artes corretamente?"
            },
            "options": [
              "Yes, I included 'genre' and 'performance'.",
              "I used some general words, but not specific arts vocabulary.",
              "I forgot to include any specific vocabulary."
            ],
            "answer": "Yes, I included 'genre' and 'performance'.",
            "explanation": {
              "en": "Ensure your text integrates vocabulary like 'genre', 'performance', 'soundtrack', 'aesthetic', etc., relevant to arts entertainment.",
              "pt": "Certifique-se de que seu texto integre vocabulário como 'genre', 'performance', 'soundtrack', 'aesthetic', etc., relevante para o entretenimento de artes."
            }
          },
          {
            "id": "u04-act-1-check-2",
            "prompt": {
              "en": "Were at least two discourse markers (that said, on the whole, to some extent) used appropriately?",
              "pt": "Pelo menos dois marcadores discursivos (that said, on the whole, to some extent) foram usados adequadamente?"
            },
            "options": [
              "Yes, I used 'on the whole' and 'that said' to balance my argument.",
              "I used them, but I'm not sure if they were perfectly correct.",
              "I only used one or none of the discourse markers."
            ],
            "answer": "Yes, I used 'on the whole' and 'that said' to balance my argument.",
            "explanation": {
              "en": "The goal is to demonstrate the ability to structure arguments with nuance using these specific discourse markers.",
              "pt": "O objetivo é demonstrar a capacidade de estruturar argumentos com nuance usando esses marcadores discursivos específicos."
            }
          }
        ]
      },
      {
        "id": "u04-act-2",
        "title": {
          "en": "Debate an Arts Funding Issue",
          "pt": "Debater uma Questão de Financiamento das Artes"
        },
        "instruction": {
          "en": "In pairs or small groups, role-play a discussion about whether government funding for the arts should be increased or decreased. Use academic discussion expressions and discourse markers to present your arguments and respond to counterarguments.",
          "pt": "Em pares ou pequenos grupos, encenem uma discussão sobre se o financiamento governamental para as artes deve ser aumentado ou diminuído. Usem expressões de discussão acadêmica e marcadores discursivos para apresentar seus argumentos e responder a contra-argumentos."
        },
        "phrases": [
          {
            "en": "This raises the question of... public benefit.",
            "pt": "Isso levanta a questão do... benefício público."
          },
          {
            "en": "It could be argued that... funding stimulates local economies.",
            "pt": "Poderia ser argumentado que... o financiamento estimula as economias locais."
          },
          {
            "en": "The data points to... a decline in attendance without subsidies.",
            "pt": "Os dados apontam para... uma queda na frequência sem subsídios."
          }
        ],
        "check": [
          {
            "id": "u04-act-2-check-1",
            "prompt": {
              "en": "Did you effectively use expressions like 'This raises the question of...' or 'It could be argued that...'?",
              "pt": "Você usou eficazmente expressões como 'Isso levanta a questão de...' ou 'Poderia ser argumentado que...'?"
            },
            "options": [
              "Yes, I used them to introduce main points and potential counterarguments.",
              "I used one or two, but they didn't feel natural.",
              "I struggled to integrate these expressions."
            ],
            "answer": "Yes, I used them to introduce main points and potential counterarguments.",
            "explanation": {
              "en": "These expressions are crucial for initiating academic discussions and introducing complex ideas.",
              "pt": "Essas expressões são cruciais para iniciar discussões acadêmicas e introduzir ideias complexas."
            }
          },
          {
            "id": "u04-act-2-check-2",
            "prompt": {
              "en": "Did you respond to a counterargument using a discourse marker such as 'that said'?",
              "pt": "Você respondeu a um contra-argumento usando um marcador discursivo como 'that said'?"
            },
            "options": [
              "Yes, I acknowledged a point and then offered a contrasting view with 'that said'.",
              "I tried to respond, but didn't use the specific discourse markers.",
              "I mostly just stated my own points without addressing others directly."
            ],
            "answer": "Yes, I acknowledged a point and then offered a contrasting view with 'that said'.",
            "explanation": {
              "en": "Using 'that said' is excellent for acknowledging a valid point before presenting an alternative or qualifying perspective, demonstrating nuanced argumentation.",
              "pt": "Usar 'that said' é excelente para reconhecer um ponto válido antes de apresentar uma perspectiva alternativa ou qualificadora, demonstrando argumentação nuançada."
            }
          }
        ]
      },
      {
        "id": "u04-act-3",
        "title": {
          "en": "Discuss the Impact of a Cultural Trend",
          "pt": "Discutir o Impacto de uma Tendência Cultural"
        },
        "instruction": {
          "en": "Discuss with a partner the impact of a current cultural trend (e.g., TikTok dances, binge-watching series, immersive art installations). Argue your position on whether its overall impact is positive or negative, utilizing all learned discourse markers and vocabulary.",
          "pt": "Discuta com um parceiro o impacto de uma tendência cultural atual (por exemplo, danças do TikTok, assistir séries compulsivamente, instalações de arte imersivas). Defenda sua posição sobre se seu impacto geral é positivo ou negativo, utilizando todos os marcadores discursivos e vocabulário aprendidos."
        },
        "phrases": [
          {
            "en": "To some extent, it fosters creativity.",
            "pt": "Em certa medida, isso fomenta a criatividade."
          },
          {
            "en": "On the whole, its audience engagement is unparalleled.",
            "pt": "No geral, seu engajamento com a audiência é incomparável."
          },
          {
            "en": "That said, concerns about production quality are valid.",
            "pt": "Dito isso, as preocupações com a qualidade da produção são válidas."
          }
        ],
        "check": [
          {
            "id": "u04-act-3-check-1",
            "prompt": {
              "en": "Did you use 'on the whole' to present a general conclusion about the trend's impact?",
              "pt": "Você usou 'on the whole' para apresentar uma conclusão geral sobre o impacto da tendência?"
            },
            "options": [
              "Yes, I used it to summarize my overall positive or negative view.",
              "I used it, but it felt out of place.",
              "I forgot to use 'on the whole'."
            ],
            "answer": "Yes, I used it to summarize my overall positive or negative view.",
            "explanation": {
              "en": "'On the whole' helps provide a broad summary or general statement about the trend's impact.",
              "pt": "'On the whole' ajuda a fornecer um resumo geral ou uma declaração abrangente sobre o impacto da tendência."
            }
          },
          {
            "id": "u04-act-3-check-2",
            "prompt": {
              "en": "Did you integrate arts entertainment vocabulary into your discussion about the cultural trend?",
              "pt": "Você integrou o vocabulário de entretenimento de artes em sua discussão sobre a tendência cultural?"
            },
            "options": [
              "Yes, I referred to the 'narrative' of a series or the 'aesthetic' of an installation.",
              "I focused more on general vocabulary.",
              "I didn't manage to include specific arts vocabulary."
            ],
            "answer": "Yes, I referred to the 'narrative' of a series or the 'aesthetic' of an installation.",
            "explanation": {
              "en": "Applying the newly learned vocabulary, such as 'narrative', 'aesthetic', 'genre', 'production', allows for more precise and sophisticated discussion.",
              "pt": "Aplicar o vocabulário recém-aprendido, como 'narrative', 'aesthetic', 'genre', 'production', permite uma discussão mais precisa e sofisticada."
            }
          }
        ]
      }
    ],
    "challenge": {
      "id": "u04-challenge",
      "title": {
        "en": "Pitch a New Art Form",
        "pt": "Apresentar uma Nova Forma de Arte"
      },
      "instruction": {
        "en": "Imagine you are pitching a completely new art form or a revolutionary way of experiencing existing arts entertainment to a panel of cultural investors. Prepare a brief (2-3 minute) presentation outlining its concept, audience, and potential impact. You must use at least three different discourse markers and three arts entertainment vocabulary words. Be ready to respond to questions and counterarguments.",
        "pt": "Imagine que você está apresentando uma forma de arte completamente nova ou uma maneira revolucionária de experimentar o entretenimento de artes existente para um painel de investidores culturais. Prepare uma breve apresentação (2-3 minutos) descrevendo seu conceito, público e impacto potencial. Você deve usar pelo menos três marcadores discursivos diferentes e três palavras do vocabulário de entretenimento de artes. Esteja pronto para responder a perguntas e contra-argumentos."
      },
      "phrases": [
        {
          "en": "On the whole, we believe this production offers a unique aesthetic.",
          "pt": "No geral, acreditamos que esta produção oferece uma estética única."
        },
        {
          "en": "It could be argued that our narrative is highly interactive.",
          "pt": "Poderia ser argumentado que nossa narrativa é altamente interativa."
        },
        {
          "en": "That said, our budget projection accounts for scalability.",
          "pt": "Dito isso, nossa projeção de orçamento leva em conta a escalabilidade."
        }
      ],
      "check": [
        {
          "id": "u04-challenge-check-1",
          "prompt": {
            "en": "Did your pitch effectively use at least three distinct discourse markers (that said, on the whole, to some extent) to structure your argument?",
            "pt": "Sua apresentação usou eficazmente pelo menos três marcadores discursivos distintos (that said, on the whole, to some extent) para estruturar seu argumento?"
          },
          "options": [
            "Yes, I clearly used three or more to show nuance and structure.",
            "I used some, but perhaps not distinct enough or not three.",
            "I mainly focused on content without explicit discourse markers."
          ],
          "answer": "Yes, I clearly used three or more to show nuance and structure.",
          "explanation": {
            "en": "The goal is to demonstrate mastery of argument structuring by employing a variety of the learned discourse markers.",
            "pt": "O objetivo é demonstrar domínio da estruturação de argumentos empregando uma variedade dos marcadores discursivos aprendidos."
          }
        },
        {
          "id": "u04-challenge-check-2",
          "prompt": {
            "en": "Did you integrate at least three arts entertainment vocabulary words naturally into your pitch?",
            "pt": "Você integrou pelo menos três palavras do vocabulário de entretenimento de artes naturalmente em sua apresentação?"
          },
          "options": [
            "Yes, I seamlessly incorporated terms like 'genre', 'production', and 'audience'.",
            "I used some, but they felt a bit forced.",
            "I struggled to include specific arts entertainment vocabulary."
          ],
          "answer": "Yes, I seamlessly incorporated terms like 'genre', 'production', and 'audience'.",
          "explanation": {
            "en": "Successful integration of vocabulary like 'genre', 'narrative', 'aesthetic', 'production', 'audience', or 'performance' indicates strong command of the unit's lexical objectives.",
            "pt": "A integração bem-sucedida de vocabulário como 'genre', 'narrative', 'aesthetic', 'production', 'audience' ou 'performance' indica um forte domínio dos objetivos lexicais da unidade."
          }
        }
      ]
    },
    "lessonReview": {
      "summary": {
        "en": "In this unit, we delved into the world of arts entertainment, expanding our vocabulary and sharpening our ability to structure complex arguments. We practiced using 'that said', 'on the whole', and 'to some extent' to present balanced perspectives and engage in academic discussions.",
        "pt": "Nesta unidade, mergulhamos no mundo do entretenimento de artes, expandindo nosso vocabulário e aprimorando nossa capacidade de estruturar argumentos complexos. Praticamos o uso de 'that said', 'on the whole' e 'to some extent' para apresentar perspectivas equilibradas e engajar em discussões acadêmicas."
      },
      "canDo": [
        {
          "en": "Discuss various forms of arts entertainment using specialized vocabulary.",
          "pt": "Discutir várias formas de entretenimento de artes usando vocabulário especializado."
        },
        {
          "en": "Structure arguments and introduce contrasting points with discourse markers.",
          "pt": "Estruturar argumentos e introduzir pontos contrastantes com marcadores discursivos."
        },
        {
          "en": "Engage in academic discussions about cultural topics, expressing nuanced opinions.",
          "pt": "Engajar em discussões acadêmicas sobre tópicos culturais, expressando opiniões nuançadas."
        }
      ],
      "next": {
        "en": "Next, we will explore the theme of 'Technology and Innovation', focusing on future tense forms and related vocabulary.",
        "pt": "Em seguida, exploraremos o tema 'Tecnologia e Inovação', focando em formas do tempo futuro e vocabulário relacionado."
      }
    }
  }
},
{
  "code": "UPPER-INTERMEDIATE-U05",
  "number": 5,
  "title": "Technology - Advanced Passive Structures",
  "titlePt": "Tecnologia - Estruturas Passivas Avançadas",
  "cefr": "B2",
  "objective": {
    "en": "To teach technology vocabulary and advanced passive structures, including passive with modals and reporting verbs, in a contextualized manner.",
    "pt": "Ensinar vocabulário de tecnologia e estruturas passivas avançadas, incluindo passiva com modais e verbos de relato, de forma contextualizada."
  },
  "communicationGoal": {
    "en": "The student will be able to use 'formal writing' and technology vocabulary to communicate in real-life situations.",
    "pt": "O aluno será capaz de usar 'escrita formal' e o vocabulário de tecnologia para se comunicar em situações reais."
  },
  "prerequisites": {
    "en": "Structure: Discourse markers for structuring arguments (that said, on the whole, to some extent). Vocabulary: Arts and Entertainment.",
    "pt": "Estrutura: Marcadores de discurso para estruturar argumentos (that said, on the whole, to some extent). Vocabulário: Artes e Entretenimento."
  },
  "newContent": {
    "en": "Grammar: Advanced passive structures, including passive with modals and reporting verbs. | Vocabulary: Technology (10 lexical items) | Expressions: Formal Writing",
    "pt": "Gramática: Estruturas passivas avançadas, incluindo passiva com modais e verbos de relato. | Vocabulário: Tecnologia (10 itens lexicais) | Expressões: Escrita Formal"
  },
  "reviewContent": {
    "en": "Not applicable — initial unit of the course.",
    "pt": "Não aplicável — unidade inicial do curso."
  },
  "discover": {
    "id": "UPPER-INTERMEDIATE-U05-DISCOVER",
    "warmUp": {
      "prompt": {
        "en": "Look at the images and discuss: How has technology changed our daily lives? What are some recent technological innovations that have surprised you?",
        "pt": "Observe as imagens e discuta: Como a tecnologia mudou nossas vidas diárias? Quais são algumas inovações tecnológicas recentes que te surpreenderam?"
      },
      "phrases": [
        {
          "en": "Technology has revolutionized...",
          "pt": "A tecnologia revolucionou..."
        },
        {
          "en": "I find it fascinating that...",
          "pt": "Eu acho fascinante que..."
        }
      ]
    },
    "context": {
      "situation": {
        "en": "You are reading an excerpt from an internal company memo regarding a new software update and its potential impact on employees. The memo uses formal language and advanced grammatical structures.",
        "pt": "Você está lendo um trecho de um memorando interno da empresa sobre uma nova atualização de software e seu potencial impacto nos funcionários. O memorando utiliza linguagem formal e estruturas gramaticais avançadas."
      },
      "dialogue": [
        {
          "who": "Memo",
          "en": "Subject: Upcoming Software Platform Update",
          "pt": "Assunto: Próxima Atualização da Plataforma de Software"
        },
        {
          "who": "Memo",
          "en": "Dear Team, I am writing to inform you that a significant update to our primary operational software is scheduled for implementation next month. This innovation is expected to streamline several key processes.",
          "pt": "Prezada equipe, escrevo para informar que uma atualização significativa de nosso principal software operacional está programada para implementação no próximo mês. Espera-se que esta inovação otimize vários processos chave."
        },
        {
          "who": "Memo",
          "en": "Employees must be trained on the new features, and it is believed that a comprehensive guide will be provided digitally. Please find attached a preliminary overview of the changes.",
          "pt": "Os funcionários devem ser treinados nas novas funcionalidades, e acredita-se que um guia abrangente será fornecido digitalmente. Anexamos uma visão geral preliminar das mudanças."
        },
        {
          "who": "Memo",
          "en": "Feedback on the current network stability has been collected, and steps are being taken to ensure a smooth transition. Data privacy concerns are also being addressed proactively.",
          "pt": "O feedback sobre a estabilidade atual da rede foi coletado, e medidas estão sendo tomadas para garantir uma transição tranquila. As preocupações com a privacidade dos dados também estão sendo abordadas proativamente."
        },
        {
          "who": "Memo",
          "en": "The algorithm responsible for task distribution will be refined, and a new 'device management' app is currently being developed.",
          "pt": "O algoritmo responsável pela distribuição de tarefas será refinado, e um novo aplicativo de 'gerenciamento de dispositivos' está atualmente sendo desenvolvido."
        },
        {
          "who": "Memo",
          "en": "I would appreciate your feedback on this initial document by the end of the week. Further details will be communicated shortly.",
          "pt": "Agradeceria seu feedback sobre este documento inicial até o final da semana. Mais detalhes serão comunicados em breve."
        }
      ]
    },
    "vocabulary": [
      {
        "term": "device",
        "pt": "dispositivo",
        "ipa": "/dɪˈvaɪs/",
        "definition": "An electronic machine or piece of equipment designed for a particular purpose.",
        "example": "My new smartphone is an incredible device for staying connected.",
        "examplePt": "Meu novo smartphone é um dispositivo incrível para se manter conectado."
      },
      {
        "term": "app",
        "pt": "aplicativo",
        "ipa": "/æp/",
        "definition": "A self-contained program or piece of software designed to fulfill a particular purpose; an application, especially as downloaded by a user to a mobile device.",
        "example": "There's an app for almost everything you want to do on your phone.",
        "examplePt": "Existe um aplicativo para quase tudo o que você quer fazer no seu telefone."
      },
      {
        "term": "software",
        "pt": "software",
        "ipa": "/ˈsɒftˌwɛər/",
        "definition": "The programs and other operating information used by a computer.",
        "example": "The company decided to upgrade its accounting software to a newer version.",
        "examplePt": "A empresa decidiu atualizar seu software de contabilidade para uma versão mais recente."
      },
      {
        "term": "update",
        "pt": "atualização",
        "ipa": "/ˈʌpdeɪt/",
        "definition": "An act of updating something or making it more modern, for example, software.",
        "example": "Always install the latest security update to protect your computer.",
        "examplePt": "Sempre instale a última atualização de segurança para proteger seu computador."
      },
      {
        "term": "network",
        "pt": "rede",
        "ipa": "/ˈnɛtˌwɜːrk/",
        "definition": "A group or system of interconnected people or things, especially for digital communication.",
        "example": "The company's computer network connects all employees globally.",
        "examplePt": "A rede de computadores da empresa conecta todos os funcionários globalmente."
      },
      {
        "term": "data",
        "pt": "dados",
        "ipa": "/ˈdeɪtə/",
        "definition": "Facts and statistics collected together for reference or analysis.",
        "example": "The sales team collects customer data to understand market trends.",
        "examplePt": "A equipe de vendas coleta dados de clientes para entender as tendências do mercado."
      },
      {
        "term": "artificial intelligence",
        "pt": "inteligência artificial",
        "ipa": "/ˌɑːrtɪˈfɪʃəl ɪnˈtɛlɪdʒəns/",
        "definition": "The theory and development of computer systems able to perform tasks that normally require human intelligence.",
        "example": "Artificial intelligence is being used in many new applications, from self-driving cars to chatbots.",
        "examplePt": "A inteligência artificial está sendo usada em muitas novas aplicações, de carros autônomos a chatbots."
      },
      {
        "term": "platform",
        "pt": "plataforma",
        "ipa": "/ˈplætˌfɔːrm/",
        "definition": "A system that manages the operations of a computer or technological device; an online system for interacting with users.",
        "example": "Many businesses use a single platform to manage their social media presence.",
        "examplePt": "Muitas empresas usam uma única plataforma para gerenciar sua presença nas redes sociais."
      },
      {
        "term": "innovation",
        "pt": "inovação",
        "ipa": "/ˌɪnəˈveɪʃən/",
        "definition": "The introduction of new ideas, devices, or methods.",
        "example": "Technological innovation is key to staying competitive in today's market.",
        "examplePt": "A inovação tecnológica é fundamental para se manter competitivo no mercado atual."
      },
      {
        "term": "algorithm",
        "pt": "algoritmo",
        "ipa": "/ˈælɡəˌrɪðəm/",
        "definition": "A process or set of rules to be followed in calculations or other problem-solving operations, especially by a computer.",
        "example": "Social media platforms use complex algorithms to personalize users' feeds.",
        "examplePt": "Plataformas de mídia social usam algoritmos complexos para personalizar os feeds dos usuários."
      }
    ],
    "expressions": [
      {
        "en": "I am writing to inform you that...",
        "pt": "Escrevo para informar que..."
      },
      {
        "en": "Please find attached...",
        "pt": "Por favor, encontre em anexo..."
      },
      {
        "en": "I would appreciate your feedback.",
        "pt": "Agradeceria seu feedback."
      }
    ],
    "grammar": [
      {
        "title": {
          "en": "Advanced Passive Structures: Modals and Reporting Verbs",
          "pt": "Estruturas Passivas Avançadas: Modais e Verbos de Relato"
        },
        "examples": [
          {
            "en": "The issue must be addressed immediately.",
            "pt": "A questão deve ser abordada imediatamente."
          },
          {
            "en": "It is believed that the market will recover.",
            "pt": "Acredita-se que o mercado irá se recuperar."
          },
          {
            "en": "The new system is said to be very efficient.",
            "pt": "Diz-se que o novo sistema é muito eficiente."
          }
        ],
        "rule": {
          "en": "Advanced passive structures, especially with modals and reporting verbs, allow for more formal and impersonal communication. Passive with modals follows the structure: modal + be + past participle (e.g., 'must be addressed'). Passive with reporting verbs (like 'say', 'believe', 'expect', 'report', 'know', 'understand') can be formed in two main ways: 1. It + passive reporting verb + that-clause (e.g., 'It is believed that...'). 2. Subject + passive reporting verb + to-infinitive (e.g., 'He is said to be...', 'The system is known to have...'). These structures emphasize the action or reported information rather than the doer, which is often unknown or less important in formal contexts.",
          "pt": "Estruturas passivas avançadas, especialmente com modais e verbos de relato, permitem uma comunicação mais formal e impessoal. A passiva com modais segue a estrutura: modal + be + particípio passado (ex: 'must be addressed'). A passiva com verbos de relato (como 'say', 'believe', 'expect', 'report', 'know', 'understand') pode ser formada de duas maneiras principais: 1. It + verbo de relato na passiva + oração com that (ex: 'It is believed that...'). 2. Sujeito + verbo de relato na passiva + infinitivo (ex: 'He is said to be...', 'The system is known to have...'). Essas estruturas enfatizam a ação ou a informação relatada, em vez de quem a realiza, que muitas vezes é desconhecido ou menos importante em contextos formais."
        },
        "mistakes": [
          {
            "en": "Incorrect: 'The report must addressing now.' (Incorrect verb form after modal passive)",
            "pt": "Incorreto: 'The report must addressing now.' (Forma verbal incorreta após modal passivo)"
          },
          {
            "en": "Incorrect: 'They are believed the problem is solved.' (Active voice used instead of passive for reporting)",
            "pt": "Incorreto: 'They are believed the problem is solved.' (Voz ativa usada em vez de passiva para relatar)"
          }
        ]
      }
    ],
    "controlledPractice": [
      {
        "id": "cp-1",
        "prompt": {
          "en": "Choose the correct passive form for the sentence: 'The new security measures _____ implemented by next week.'",
          "pt": "Escolha a forma passiva correta para a frase: 'As novas medidas de segurança _____ implementadas até a próxima semana.'"
        },
        "options": [
          "must been",
          "must be",
          "must to be"
        ],
        "answer": "must be",
        "explanation": {
          "en": "For passive voice with modals, the structure is 'modal + be + past participle'. 'Must be implemented' is correct.",
          "pt": "Para a voz passiva com modais, a estrutura é 'modal + be + particípio passado'. 'Must be implemented' está correto."
        }
      },
      {
        "id": "cp-2",
        "prompt": {
          "en": "Which sentence correctly uses a reporting verb in the passive?",
          "pt": "Qual frase usa corretamente um verbo de relato na voz passiva?"
        },
        "options": [
          "It is said they will launch the product.",
          "They are said that the product will launch.",
          "It says that the product will be launched."
        ],
        "answer": "It is said they will launch the product.",
        "explanation": {
          "en": "The structure 'It is said that...' is correct for reporting verbs in the passive. The first option correctly follows this pattern, allowing for 'they' as the subject of the embedded clause.",
          "pt": "A estrutura 'It is said that...' está correta para verbos de relato na passiva. A primeira opção segue corretamente este padrão, permitindo 'they' como sujeito da oração subordinada."
        }
      },
      {
        "id": "cp-3",
        "prompt": {
          "en": "Rewrite the sentence in passive voice using a modal: 'The company should announce the new policy soon.'",
          "pt": "Reescreva a frase na voz passiva usando um modal: 'A empresa deveria anunciar a nova política em breve.'"
        },
        "options": [
          "The new policy should announcing soon.",
          "The new policy should be announced soon.",
          "The new policy should be announce soon."
        ],
        "answer": "The new policy should be announced soon.",
        "explanation": {
          "en": "The correct passive structure with a modal is 'modal + be + past participle'. 'Should be announced' is the correct form.",
          "pt": "A estrutura passiva correta com um modal é 'modal + be + particípio passado'. 'Should be announced' é a forma correta."
        }
      },
      {
        "id": "cp-4",
        "prompt": {
          "en": "Transform the sentence into passive with a reporting verb: 'People expect that the artificial intelligence will improve significantly.'",
          "pt": "Transforme a frase para a passiva com um verbo de relato: 'As pessoas esperam que a inteligência artificial melhore significativamente.'"
        },
        "options": [
          "It is expected the artificial intelligence to improve significantly.",
          "The artificial intelligence is expected to improve significantly.",
          "It expects that the artificial intelligence will improve significantly."
        ],
        "answer": "The artificial intelligence is expected to improve significantly.",
        "explanation": {
          "en": "The structure 'Subject + passive reporting verb + to-infinitive' is appropriate here. 'The artificial intelligence is expected to improve' correctly applies this.",
          "pt": "A estrutura 'Sujeito + verbo de relato na passiva + infinitivo' é apropriada aqui. 'The artificial intelligence is expected to improve' aplica isso corretamente."
        }
      }
    ],
    "input": {
      "kind": "reading",
      "title": {
        "en": "The Future of Work in the Digital Age",
        "pt": "O Futuro do Trabalho na Era Digital"
      },
      "lines": [
        {
          "en": "The rapid advancement of technology has profoundly reshaped the landscape of work. Automation and artificial intelligence are widely believed to be transforming industries globally, with many traditional roles being re-evaluated.",
          "pt": "O rápido avanço da tecnologia remodelou profundamente o cenário do trabalho. Acredita-se amplamente que a automação e a inteligência artificial estão transformando indústrias globalmente, com muitos papéis tradicionais sendo reavaliados."
        },
        {
          "en": "New skills are increasingly demanded, and continuous learning is considered essential for career longevity. Data analysis, for instance, is now recognized as a critical competency across various sectors.",
          "pt": "Novas habilidades são cada vez mais exigidas, e o aprendizado contínuo é considerado essencial para a longevidade da carreira. A análise de dados, por exemplo, é agora reconhecida como uma competência crítica em vários setores."
        },
        {
          "en": "It is often reported that companies must adapt quickly to these changes, ensuring their employees are equipped with the latest software and understanding of new platforms.",
          "pt": "Frequentemente é relatado que as empresas devem se adaptar rapidamente a essas mudanças, garantindo que seus funcionários estejam equipados com o software mais recente e compreendam as novas plataformas."
        },
        {
          "en": "Furthermore, a stronger emphasis is being placed on 'soft skills' such as critical thinking and adaptability, which are thought to be less susceptible to automation by current algorithms.",
          "pt": "Além disso, uma ênfase maior está sendo colocada em 'soft skills' como pensamento crítico e adaptabilidade, que são consideradas menos suscetíveis à automação pelos algoritmos atuais."
        },
        {
          "en": "The overall impact on job creation is still being debated, but it can be concluded that the nature of employment will continue to evolve significantly due to technological innovation.",
          "pt": "O impacto geral na criação de empregos ainda está sendo debatido, mas pode-se concluir que a natureza do emprego continuará a evoluir significativamente devido à inovação tecnológica."
        }
      ],
      "questions": [
        {
          "id": "reading-check-1",
          "prompt": {
            "en": "What is widely believed to be transforming industries globally?",
            "pt": "O que é amplamente acreditado estar transformando indústrias globalmente?"
          },
          "options": [
            "Traditional job roles",
            "Automation and artificial intelligence",
            "Continuous learning"
          ],
          "answer": "Automation and artificial intelligence",
          "explanation": {
            "en": "The first sentence states, 'Automation and artificial intelligence are widely believed to be transforming industries globally.'",
            "pt": "A primeira frase afirma: 'Acredita-se amplamente que a automação e a inteligência artificial estão transformando indústrias globalmente.'"
          }
        },
        {
          "id": "reading-check-2",
          "prompt": {
            "en": "According to the text, what is considered essential for career longevity?",
            "pt": "De acordo com o texto, o que é considerado essencial para a longevidade da carreira?"
          },
          "options": [
            "Strong emphasis on 'soft skills'",
            "Rapid adaptation to changes",
            "Continuous learning"
          ],
          "answer": "Continuous learning",
          "explanation": {
            "en": "The second paragraph mentions, 'continuous learning is considered essential for career longevity.'",
            "pt": "O segundo parágrafo menciona: 'o aprendizado contínuo é considerado essencial para a longevidade da carreira.'"
          }
        },
        {
          "id": "reading-check-3",
          "prompt": {
            "en": "What type of skills are thought to be less susceptible to automation by current algorithms?",
            "pt": "Que tipo de habilidades são consideradas menos suscetíveis à automação pelos algoritmos atuais?"
          },
          "options": [
            "Data analysis skills",
            "Technical software skills",
            "'Soft skills' like critical thinking"
          ],
          "answer": "'Soft skills' like critical thinking",
          "explanation": {
            "en": "The fourth paragraph states that 'soft skills' such as critical thinking and adaptability 'are thought to be less susceptible to automation by current algorithms.'",
            "pt": "O quarto parágrafo afirma que 'soft skills' como pensamento crítico e adaptabilidade 'são consideradas menos suscetíveis à automação pelos algoritmos atuais.'"
          }
        }
      ]
    },
    "quickCheck": [
      {
        "id": "qc-1",
        "prompt": {
          "en": "Complete the sentence: 'The new app _____ to improve user experience.'",
          "pt": "Complete a frase: 'O novo aplicativo _____ para melhorar a experiência do usuário.'"
        },
        "options": [
          "is expected",
          "expects",
          "is expecting"
        ],
        "answer": "is expected",
        "explanation": {
          "en": "To use a reporting verb in the passive ('expect') followed by an infinitive, 'is expected' is the correct form.",
          "pt": "Para usar um verbo de relato na passiva ('expect') seguido de um infinitivo, 'is expected' é a forma correta."
        }
      },
      {
        "id": "qc-2",
        "prompt": {
          "en": "Which sentence uses the correct passive modal structure?",
          "pt": "Qual frase usa a estrutura passiva modal correta?"
        },
        "options": [
          "Data privacy issues must be addressing.",
          "Data privacy issues must be addressed.",
          "Data privacy issues must being addressed."
        ],
        "answer": "Data privacy issues must be addressed.",
        "explanation": {
          "en": "The structure 'modal + be + past participle' is required for passive with modals. 'Must be addressed' is correct.",
          "pt": "A estrutura 'modal + be + particípio passado' é necessária para a passiva com modais. 'Must be addressed' está correto."
        }
      },
      {
        "id": "qc-3",
        "prompt": {
          "en": "What does the expression 'Please find attached...' typically precede in formal writing?",
          "pt": "O que a expressão 'Please find attached...' geralmente precede na escrita formal?"
        },
        "options": [
          "A request for feedback",
          "A document or file",
          "An apology"
        ],
        "answer": "A document or file",
        "explanation": {
          "en": "This expression is commonly used to indicate that a document or file is included with the message.",
          "pt": "Esta expressão é comumente usada para indicar que um documento ou arquivo está incluído na mensagem."
        }
      },
      {
        "id": "qc-4",
        "prompt": {
          "en": "Which of these is NOT an example of a 'device' in a technological context?",
          "pt": "Qual destes NÃO é um exemplo de 'dispositivo' em um contexto tecnológico?"
        },
        "options": [
          "A smartphone",
          "A cloud storage service",
          "A laptop computer"
        ],
        "answer": "A cloud storage service",
        "explanation": {
          "en": "A cloud storage service is a service, not a physical device. Smartphones and laptops are examples of devices.",
          "pt": "Um serviço de armazenamento em nuvem é um serviço, não um dispositivo físico. Smartphones e laptops são exemplos de dispositivos."
        }
      }
    ]
  },
  "communicate": {
    "id": "UPPER-INTERMEDIATE-U05-COMMUNICATE",
    "review": [
      {
        "en": "Recap: Advanced passive structures with modals (e.g., must be done, can be seen) and reporting verbs (e.g., it is believed that..., is said to be...).",
        "pt": "Recapitulação: Estruturas passivas avançadas com modais (ex: must be done, can be seen) e verbos de relato (ex: it is believed that..., is said to be...)."
      },
      {
        "en": "Recap: Key technology vocabulary (device, app, software, update, network, data, artificial intelligence, platform, innovation, algorithm).",
        "pt": "Recapitulação: Vocabulário chave de tecnologia (device, app, software, update, network, data, artificial intelligence, platform, innovation, algorithm)."
      },
      {
        "en": "Recap: Formal writing expressions (I am writing to inform you that..., Please find attached..., I would appreciate your feedback).",
        "pt": "Recapitulação: Expressões de escrita formal (I am writing to inform you that..., Please find attached..., I would appreciate your feedback)."
      }
    ],
    "activities": [
      {
        "id": "activity-1",
        "title": {
          "en": "Give a Nuanced Opinion: Impact of AI",
          "pt": "Dê uma Opinião Nuances: Impacto da IA"
        },
        "instruction": {
          "en": "Discuss in pairs or small groups the potential positive and negative impacts of Artificial Intelligence on society and the workplace. Use advanced passive structures to express widely held beliefs or reported facts, and technology vocabulary to describe specific areas.",
          "pt": "Discuta em pares ou pequenos grupos os potenciais impactos positivos e negativos da Inteligência Artificial na sociedade e no local de trabalho. Use estruturas passivas avançadas para expressar crenças amplamente aceitas ou fatos relatados, e vocabulário de tecnologia para descrever áreas específicas."
        },
        "phrases": [
          {
            "en": "It is often argued that AI...",
            "pt": "Frequentemente se argumenta que a IA..."
          },
          {
            "en": "The development of this technology is expected to...",
            "pt": "Espera-se que o desenvolvimento desta tecnologia..."
          },
          {
            "en": "Certain risks must be carefully managed...",
            "pt": "Certos riscos devem ser cuidadosamente gerenciados..."
          }
        ],
        "check": [
          {
            "id": "act1-check-1",
            "prompt": {
              "en": "Which sentence correctly uses a passive reporting verb to express a widely held belief about AI?",
              "pt": "Qual frase usa corretamente um verbo de relato passivo para expressar uma crença amplamente difundida sobre IA?"
            },
            "options": [
              "Experts believe AI will enhance productivity.",
              "It is believed that AI will enhance productivity.",
              "AI is believed will enhance productivity."
            ],
            "answer": "It is believed that AI will enhance productivity.",
            "explanation": {
              "en": "The structure 'It is believed that...' is the correct and most formal way to express a widely held belief using a passive reporting verb.",
              "pt": "A estrutura 'It is believed that...' é a forma correta e mais formal de expressar uma crença amplamente difundida usando um verbo de relato passivo."
            }
          },
          {
            "id": "act1-check-2",
            "prompt": {
              "en": "When discussing the potential negative impacts of AI, which passive modal structure is most appropriate?",
              "pt": "Ao discutir os potenciais impactos negativos da IA, qual estrutura modal passiva é mais apropriada?"
            },
            "options": [
              "Ethical concerns should considered.",
              "Ethical concerns should be considered.",
              "Ethical concerns should be considering."
            ],
            "answer": "Ethical concerns should be considered.",
            "explanation": {
              "en": "The correct passive modal structure is 'modal + be + past participle'. 'Should be considered' is grammatically correct.",
              "pt": "A estrutura modal passiva correta é 'modal + be + particípio passado'. 'Should be considered' está gramaticalmente correto."
            }
          }
        ]
      },
      {
        "id": "activity-2",
        "title": {
          "en": "Reflect and Report Back: Tech Innovations",
          "pt": "Reflita e Relate: Inovações Tecnológicas"
        },
        "instruction": {
          "en": "Each student researches a recent technological innovation (e.g., a new device, an AI algorithm, a platform update). Then, present a brief summary to the class, using formal writing expressions and advanced passive structures to report information about its development, expected impact, or challenges.",
          "pt": "Cada aluno pesquisa uma inovação tecnológica recente (ex: um novo dispositivo, um algoritmo de IA, uma atualização de plataforma). Em seguida, apresente um breve resumo para a turma, usando expressões de escrita formal e estruturas passivas avançadas para relatar informações sobre seu desenvolvimento, impacto esperado ou desafios."
        },
        "phrases": [
          {
            "en": "I am writing to inform you about...",
            "pt": "Escrevo para informá-los sobre..."
          },
          {
            "en": "This innovation is said to have...",
            "pt": "Diz-se que esta inovação tem..."
          },
          {
            "en": "Key challenges must be overcome...",
            "pt": "Desafios importantes devem ser superados..."
          }
        ],
        "check": [
          {
            "id": "act2-check-1",
            "prompt": {
              "en": "You are starting your report about a new device. Which formal expression is most appropriate to begin?",
              "pt": "Você está começando seu relatório sobre um novo dispositivo. Qual expressão formal é mais apropriada para começar?"
            },
            "options": [
              "Hey everyone, this device...",
              "I am writing to inform you about...",
              "Let me tell you about..."
            ],
            "answer": "I am writing to inform you about...",
            "explanation": {
              "en": "In a formal report or presentation, 'I am writing to inform you about...' sets an appropriate tone.",
              "pt": "Em um relatório ou apresentação formal, 'I am writing to inform you about...' estabelece um tom apropriado."
            }
          },
          {
            "id": "act2-check-2",
            "prompt": {
              "en": "How would you formally state that people generally expect a positive outcome from a new software update?",
              "pt": "Como você expressaria formalmente que as pessoas geralmente esperam um resultado positivo de uma nova atualização de software?"
            },
            "options": [
              "People expect it to be positive.",
              "It is expected to be positive.",
              "It's expected to be positive by people."
            ],
            "answer": "It is expected to be positive.",
            "explanation": {
              "en": "The passive structure 'It is expected to be...' is a formal and concise way to convey general expectation.",
              "pt": "A estrutura passiva 'It is expected to be...' é uma forma formal e concisa de transmitir uma expectativa geral."
            }
          }
        ]
      },
      {
        "id": "activity-3",
        "title": {
          "en": "Debate: Data Privacy vs. Technological Advancement",
          "pt": "Debate: Privacidade de Dados vs. Avanço Tecnológico"
        },
        "instruction": {
          "en": "Organize a debate on the tension between data privacy and the rapid advancements in technology (e.g., data collection by apps, network security risks, AI algorithms). Students should take a stance (for privacy or for advancement) and use formal language, technology vocabulary, and advanced passive structures to present their arguments.",
          "pt": "Organize um debate sobre a tensão entre a privacidade de dados e os rápidos avanços na tecnologia (ex: coleta de dados por aplicativos, riscos de segurança de rede, algoritmos de IA). Os alunos devem tomar uma posição (a favor da privacidade ou do avanço) e usar linguagem formal, vocabulário de tecnologia e estruturas passivas avançadas para apresentar seus argumentos."
        },
        "phrases": [
          {
            "en": "It is widely understood that...",
            "pt": "É amplamente compreendido que..."
          },
          {
            "en": "Sensitive data must be protected...",
            "pt": "Dados sensíveis devem ser protegidos..."
          },
          {
            "en": "Concerns have been raised regarding...",
            "pt": "Preocupações foram levantadas a respeito de..."
          }
        ],
        "check": [
          {
            "id": "act3-check-1",
            "prompt": {
              "en": "In a debate about data privacy, how would you formally state that there are concerns about how information is handled?",
              "pt": "Em um debate sobre privacidade de dados, como você expressaria formalmente que existem preocupações sobre como as informações são tratadas?"
            },
            "options": [
              "People are worried about how data is handled.",
              "Concerns are being raised regarding data handling.",
              "It is concerning people how data is handled."
            ],
            "answer": "Concerns are being raised regarding data handling.",
            "explanation": {
              "en": "This option uses the passive voice and a formal tone suitable for a debate about public concerns.",
              "pt": "Esta opção usa a voz passiva e um tom formal adequado para um debate sobre preocupações públicas."
            }
          },
          {
            "id": "act3-check-2",
            "prompt": {
              "en": "When arguing for the necessity of stronger network security, which of these is the most appropriate formal statement?",
              "pt": "Ao argumentar pela necessidade de uma segurança de rede mais forte, qual destas é a afirmação formal mais apropriada?"
            },
            "options": [
              "We need to secure our network better.",
              "The network must be secured effectively.",
              "Securing the network needs to happen."
            ],
            "answer": "The network must be secured effectively.",
            "explanation": {
              "en": "This uses the passive modal 'must be secured' which is formal and emphasizes the necessity of the action rather than the actor.",
              "pt": "Isso usa o modal passivo 'must be secured', que é formal e enfatiza a necessidade da ação em vez do agente."
            }
          }
        ]
      }
    ],
    "challenge": {
      "id": "comm-challenge-u05",
      "title": {
        "en": "Draft an Internal Company Memo on Tech Policy",
        "pt": "Elaborar um Memorando Interno da Empresa sobre Política de Tecnologia"
      },
      "instruction": {
        "en": "Imagine your company is implementing a new 'Bring Your Own Device' (BYOD) policy. As a senior manager, draft a formal internal memo to all employees. In the memo, you must explain the new policy, its benefits, and any new rules or expectations. Use at least five technology vocabulary terms, three formal writing expressions, and three advanced passive structures (passive with modals or reporting verbs).",
        "pt": "Imagine que sua empresa está implementando uma nova política de 'Traga Seu Próprio Dispositivo' (BYOD). Como gerente sênior, elabore um memorando interno formal para todos os funcionários. No memorando, você deve explicar a nova política, seus benefícios e quaisquer novas regras ou expectativas. Use pelo menos cinco termos do vocabulário de tecnologia, três expressões de escrita formal e três estruturas passivas avançadas (passiva com modais ou verbos de relato)."
      },
      "phrases": [
        {
          "en": "I am writing to inform you that...",
          "pt": "Escrevo para informar que..."
        },
        {
          "en": "It is believed that this innovation will...",
          "pt": "Acredita-se que esta inovação irá..."
        },
        {
          "en": "Compliance with guidelines must be ensured...",
          "pt": "A conformidade com as diretrizes deve ser garantida..."
        }
      ],
      "check": [
        {
          "id": "challenge-check-1",
          "prompt": {
            "en": "Which of the following is an appropriate formal opening for the memo?",
            "pt": "Qual das seguintes é uma abertura formal apropriada para o memorando?"
          },
          "options": [
            "Hey team, big news!",
            "To all staff: New Policy Update",
            "I am writing to inform you that a new policy has been implemented."
          ],
          "answer": "I am writing to inform you that a new policy has been implemented.",
          "explanation": {
            "en": "This option uses the formal expression 'I am writing to inform you that...' and sets a professional tone.",
            "pt": "Esta opção usa a expressão formal 'I am writing to inform you that...' e estabelece um tom profissional."
          }
        },
        {
          "id": "challenge-check-2",
          "prompt": {
            "en": "When describing a benefit of the new policy, how would you formally state a generally accepted positive outcome using a passive reporting verb?",
            "pt": "Ao descrever um benefício da nova política, como você expressaria formalmente um resultado positivo geralmente aceito usando um verbo de relato passivo?"
          },
          "options": [
            "We expect it to boost productivity.",
            "It is expected to boost productivity.",
            "Boosting productivity is expected."
          ],
          "answer": "It is expected to boost productivity.",
          "explanation": {
            "en": "This is a correct and formal use of a passive reporting verb ('is expected') followed by an infinitive.",
            "pt": "Este é um uso correto e formal de um verbo de relato passivo ('is expected') seguido de um infinitivo."
          }
        }
      ]
    },
    "lessonReview": {
      "summary": {
        "en": "In this unit, we explored the fascinating world of technology vocabulary and mastered advanced passive structures, including those with modals and reporting verbs. We practiced using these in formal writing contexts.",
        "pt": "Nesta unidade, exploramos o mundo fascinante do vocabulário de tecnologia e dominamos estruturas passivas avançadas, incluindo aquelas com modais e verbos de relato. Praticamos o uso dessas estruturas em contextos de escrita formal."
      },
      "canDo": [
        {
          "en": "Use advanced passive structures with modals (e.g., 'must be done', 'can be seen') to emphasize actions and formality.",
          "pt": "Usar estruturas passivas avançadas com modais (ex: 'must be done', 'can be seen') para enfatizar ações e formalidade."
        },
        {
          "en": "Employ passive reporting verbs (e.g., 'it is believed that...', 'is said to be...') to convey reported information impersonally.",
          "pt": "Empregar verbos de relato passivos (ex: 'it is believed that...', 'is said to be...') para transmitir informações relatadas de forma impessoal."
        },
        {
          "en": "Utilize technology vocabulary and formal writing expressions in professional communication.",
          "pt": "Utilizar vocabulário de tecnologia e expressões de escrita formal na comunicação profissional."
        }
      ],
      "next": {
        "en": "Next, we will delve into the topic of 'Environmental Issues' and learn about 'Causative Verbs and Inversion for Emphasis'.",
        "pt": "Em seguida, aprofundaremos no tópico de 'Questões Ambientais' e aprenderemos sobre 'Verbos Causativos e Inversão para Ênfase'."
      }
    }
  }
},
{
  "code": "UPPER-INTERMEDIATE-U06",
  "number": 6,
  "title": "Environment — Advanced Phrasal Verbs",
  "titlePt": "Meio Ambiente — Phrasal Verbs Avançados",
  "cefr": "B2",
  "objective": {
    "en": "To teach environment vocabulary and advanced phrasal verbs for nuanced meaning (get around to, look into, come across) in a contextualized manner.",
    "pt": "Ensinar vocabulário de meio ambiente e phrasal verbs avançados para significado matizado (get around to, look into, come across) de forma contextualizada."
  },
  "communicationGoal": {
    "en": "Students will be able to use debating techniques and environmental vocabulary to communicate effectively in real-world situations.",
    "pt": "O aluno será capaz de usar 'debating' e o vocabulário de meio ambiente para se comunicar em situações reais."
  },
  "prerequisites": {
    "en": "Grammar: Advanced passive structures, including passive with modals and reporting verbs. Vocabulary: Technology.",
    "pt": "Estrutura: Advanced passive structures, including passive with modals and reporting verbs. Vocabulário: Technology."
  },
  "newContent": {
    "en": "Grammar: Advanced phrasal verbs for nuanced meaning (get around to, look into, come across). Vocabulary: Environment (10 lexical items). Expressions: Debating.",
    "pt": "Gramática: Advanced phrasal verbs for nuanced meaning (get around to, look into, come across). Vocabulário: Meio Ambiente (10 itens lexicais). Expressões: Debating."
  },
  "reviewContent": {
    "en": "Not applicable — initial unit of the course.",
    "pt": "Não aplicável — unidade inicial do curso."
  },
  "discover": {
    "id": "UPPER-INTERMEDIATE-U06-DISCOVER",
    "warmUp": {
      "prompt": {
        "en": "Look at these images showing different aspects of the environment. What do you see? What feelings do they evoke? What environmental issues do they highlight?",
        "pt": "Observe estas imagens mostrando diferentes aspectos do meio ambiente. O que você vê? Que sentimentos elas evocam? Que questões ambientais elas destacam?"
      },
      "phrases": [
        {
          "en": "The picture of the polluted river truly saddens me; it's a stark reminder of human impact.",
          "pt": "A imagem do rio poluído realmente me entristece; é um lembrete forte do impacto humano."
        },
        {
          "en": "I find the image of the dense forest incredibly calming, symbolizing the resilience of nature.",
          "pt": "Acho a imagem da floresta densa incrivelmente relaxante, simbolizando a resiliência da natureza."
        }
      ]
    },
    "context": {
      "situation": {
        "en": "Anna and Ben are discussing a local proposal to build a new factory near a protected natural area. They hold differing views and are using debating expressions to present their arguments.",
        "pt": "Anna e Ben estão debatendo uma proposta local para construir uma nova fábrica perto de uma área natural protegida. Eles têm opiniões divergentes e estão usando expressões de debate para apresentar seus argumentos."
      },
      "dialogue": [
        {
          "who": "Anna",
          "en": "I heard about the new factory proposal. It could bring many jobs, but I'm worried about the environmental impact.",
          "pt": "Ouvi falar da proposta da nova fábrica. Poderia gerar muitos empregos, mas estou preocupada com o impacto ambiental."
        },
        {
          "who": "Ben",
          "en": "Exactly. We can't just ignore the economic benefits. But on the other hand, the noise and pollution could be devastating for the wildlife.",
          "pt": "Exatamente. Não podemos simplesmente ignorar os benefícios econômicos. Mas, por outro lado, o ruído e a poluição poderiam ser devastadores para a vida selvagem."
        },
        {
          "who": "Anna",
          "en": "Let me play devil's advocate for a moment. What if the factory implements advanced eco-friendly technologies? Could that mitigate the damage?",
          "pt": "Deixe-me bancar o advogado do diabo por um momento. E se a fábrica implementar tecnologias avançadas e ecológicas? Isso poderia mitigar os danos?"
        },
        {
          "who": "Ben",
          "en": "That's a valid point, but consider this: even with the best technology, increased traffic and resource consumption would still be an issue.",
          "pt": "Esse é um ponto válido, mas considere o seguinte: mesmo com a melhor tecnologia, o aumento do tráfego e o consumo de recursos ainda seriam um problema."
        },
        {
          "who": "Anna",
          "en": "I'd like to challenge that assumption that any factory will inherently destroy the ecosystem. We should look into the specific plans before making a judgment.",
          "pt": "Gostaria de desafiar essa suposição de que qualquer fábrica destruirá inerentemente o ecossistema. Devemos analisar os planos específicos antes de julgar."
        },
        {
          "who": "Ben",
          "en": "Perhaps. We really need to get around to organizing a community meeting to discuss all the pros and cons thoroughly.",
          "pt": "Talvez. Precisamos realmente nos organizar para fazer uma reunião comunitária para discutir todos os prós e contras minuciosamente."
        }
      ]
    },
    "vocabulary": [
      {
        "term": "pollution",
        "pt": "poluição",
        "ipa": "/pəˈluːʃən/",
        "definition": "The presence in or introduction into the environment of a substance or thing that has harmful or poisonous effects.",
        "example": "Air pollution in major cities is a serious health concern for residents.",
        "examplePt": "A poluição do ar nas grandes cidades é uma séria preocupação de saúde para os moradores."
      },
      {
        "term": "recycling",
        "pt": "reciclagem",
        "ipa": "/riːˈsaɪklɪŋ/",
        "definition": "The process of converting waste materials into new materials and objects.",
        "example": "Many communities have implemented mandatory recycling programs to reduce landfill waste.",
        "examplePt": "Muitas comunidades implementaram programas de reciclagem obrigatórios para reduzir o lixo em aterros."
      },
      {
        "term": "sustainability",
        "pt": "sustentabilidade",
        "ipa": "/səsˌteɪnəˈbɪləti/",
        "definition": "The ability to be maintained at a certain rate or level; avoidance of the depletion of natural resources in order to maintain an ecological balance.",
        "example": "Companies are increasingly focusing on sustainability in their business practices.",
        "examplePt": "As empresas estão cada vez mais focadas na sustentabilidade em suas práticas comerciais."
      },
      {
        "term": "climate",
        "pt": "clima",
        "ipa": "/ˈklaɪmət/",
        "definition": "The weather conditions prevailing in an area in general or over a long period.",
        "example": "The earth's climate is changing at an alarming rate due to human activities.",
        "examplePt": "O clima da Terra está mudando a uma taxa alarmante devido às atividades humanas."
      },
      {
        "term": "resources",
        "pt": "recursos",
        "ipa": "/ˈriːsɔːrsɪz/",
        "definition": "A stock or supply of money, materials, staff, and other assets that can be drawn on by a person or organization in order to function effectively.",
        "example": "Natural resources like water and oil are becoming increasingly scarce.",
        "examplePt": "Recursos naturais como água e petróleo estão se tornando cada vez mais escassos."
      },
      {
        "term": "ecosystem",
        "pt": "ecossistema",
        "ipa": "/ˈiːkoʊˌsɪstəm/",
        "definition": "A biological community of interacting organisms and their physical environment.",
        "example": "The destruction of the rainforest severely damages the local ecosystem.",
        "examplePt": "A destruição da floresta tropical danifica gravemente o ecossistema local."
      },
      {
        "term": "conservation",
        "pt": "conservação",
        "ipa": "/ˌkɒnsərˈveɪʃən/",
        "definition": "The protection of animals, plants, and natural resources.",
        "example": "Wildlife conservation efforts are crucial for endangered species.",
        "examplePt": "Os esforços de conservação da vida selvagem são cruciais para as espécies ameaçadas de extinção."
      },
      {
        "term": "renewable",
        "pt": "renovável",
        "ipa": "/rɪˈnjuːəbəl/",
        "definition": "Of a natural resource or source of energy) not depleted when used.",
        "example": "Solar and wind power are examples of renewable energy sources.",
        "examplePt": "A energia solar e eólica são exemplos de fontes de energia renováveis."
      },
      {
        "term": "waste",
        "pt": "lixo, resíduo",
        "ipa": "/weɪst/",
        "definition": "Unwanted or unusable material, substances, or by-products.",
        "example": "Reducing household waste is an important step towards a greener lifestyle.",
        "examplePt": "Reduzir o lixo doméstico é um passo importante para um estilo de vida mais verde."
      },
      {
        "term": "impact",
        "pt": "impacto",
        "ipa": "/ˈɪmpækt/",
        "definition": "The effect or influence of one person, thing, or action on another.",
        "example": "The factory's waste products had a severe impact on the local river.",
        "examplePt": "Os resíduos da fábrica tiveram um impacto severo no rio local."
      }
    ],
    "expressions": [
      {
        "en": "Let me play devil's advocate for a moment.",
        "pt": "Deixe-me bancar o advogado do diabo por um momento."
      },
      {
        "en": "That's a valid point, but consider this...",
        "pt": "Esse é um ponto válido, mas considere o seguinte..."
      },
      {
        "en": "I'd like to challenge that assumption.",
        "pt": "Gostaria de desafiar essa suposição."
      }
    ],
    "grammar": [
      {
        "title": {
          "en": "Advanced Phrasal Verbs for Nuanced Meaning",
          "pt": "Phrasal Verbs Avançados para Significado Matizado"
        },
        "examples": [
          {
            "en": "I finally got around to reading that report on climate change.",
            "pt": "Finalmente consegui ler aquele relatório sobre mudança climática."
          },
          {
            "en": "The committee decided to look into the allegations of illegal waste dumping.",
            "pt": "O comitê decidiu investigar as alegações de descarte ilegal de lixo."
          },
          {
            "en": "While researching, I came across an interesting article about renewable energy.",
            "pt": "Enquanto pesquisava, me deparei com um artigo interessante sobre energia renovável."
          }
        ],
        "rule": {
          "en": "Advanced phrasal verbs like 'get around to,' 'look into,' and 'come across' add specific, nuanced meaning to a verb, often implying a process, discovery, or investigation that isn't captured by a single verb. They are essential for expressing complex ideas in formal and informal contexts.",
          "pt": "Phrasal verbs avançados como 'get around to', 'look into' e 'come across' adicionam um significado específico e matizado a um verbo, frequentemente implicando um processo, descoberta ou investigação que não é capturado por um único verbo. Eles são essenciais para expressar ideias complexas em contextos formais e informais."
        },
        "mistakes": [
          {
            "en": "Common mistake: Using 'do' instead of 'get around to' for completing a postponed task. Example: 'I need to do that project.' (less nuanced) vs. 'I need to get around to doing that project.' (implies procrastination/delay).",
            "pt": "Erro comum: Usar 'do' em vez de 'get around to' para completar uma tarefa adiada. Exemplo: 'I need to do that project.' (menos matizado) vs. 'I need to get around to doing that project.' (implica procrastinação/atraso)."
          },
          {
            "en": "Common mistake: Confusing 'look into' with 'look at'. 'Look into' implies a detailed investigation or research, while 'look at' is a simple observation. Example: 'We need to look at the problem.' (observe) vs. 'We need to look into the problem.' (investigate).",
            "pt": "Erro comum: Confundir 'look into' com 'look at'. 'Look into' implica uma investigação ou pesquisa detalhada, enquanto 'look at' é uma observação simples. Exemplo: 'We need to look at the problem.' (observar) vs. 'We need to look into the problem.' (investigar)."
          }
        ]
      }
    ],
    "controlledPractice": [
      {
        "id": "cp-phrasal-1",
        "prompt": {
          "en": "Which phrasal verb means to finally do something you have intended to do for a long time?",
          "pt": "Qual phrasal verb significa finalmente fazer algo que você pretendia fazer há muito tempo?"
        },
        "options": [
          "look into",
          "get around to",
          "come across"
        ],
        "answer": "get around to",
        "explanation": {
          "en": "'Get around to' implies doing something after a delay or procrastination.",
          "pt": "'Get around to' implica fazer algo após um atraso ou procrastinação."
        }
      },
      {
        "id": "cp-phrasal-2",
        "prompt": {
          "en": "Choose the correct phrasal verb: The scientists decided to ________ the unusual readings from the ocean sensors.",
          "pt": "Escolha o phrasal verb correto: Os cientistas decidiram ________ as leituras incomuns dos sensores oceânicos."
        },
        "options": [
          "come across",
          "get around to",
          "look into"
        ],
        "answer": "look into",
        "explanation": {
          "en": "'Look into' means to investigate or examine something carefully.",
          "pt": "'Look into' significa investigar ou examinar algo cuidadosamente."
        }
      },
      {
        "id": "cp-phrasal-3",
        "prompt": {
          "en": "Which sentence correctly uses 'come across'?",
          "pt": "Qual frase usa 'come across' corretamente?"
        },
        "options": [
          "I came across an old photo album while cleaning the attic.",
          "I came across to the store for some milk.",
          "I came across my friend at the party."
        ],
        "answer": "I came across an old photo album while cleaning the attic.",
        "explanation": {
          "en": "'Come across' means to find or meet by chance.",
          "pt": "'Come across' significa encontrar ou topar com algo ou alguém por acaso."
        }
      },
      {
        "id": "cp-phrasal-4",
        "prompt": {
          "en": "Complete the sentence: After weeks of delay, she finally ______ updating her environmental blog.",
          "pt": "Complete a frase: Após semanas de atraso, ela finalmente ______ a atualização de seu blog ambiental."
        },
        "options": [
          "looked into",
          "got around to",
          "came across"
        ],
        "answer": "got around to",
        "explanation": {
          "en": "'Got around to' is used when someone eventually does something they postponed.",
          "pt": "'Got around to' é usado quando alguém finalmente faz algo que adiou."
        }
      }
    ],
    "input": {
      "kind": "listening",
      "title": {
        "en": "Debate on Banning Single-Use Plastics",
        "pt": "Debate sobre a Proibição de Plásticos de Uso Único"
      },
      "lines": [
        {
          "en": "Host: Welcome to 'EcoTalk'. Today, we're debating the motion: 'This house believes single-use plastics should be entirely banned.'",
          "pt": "Host: Bem-vindos ao 'EcoTalk'. Hoje, estamos debatendo a moção: 'Esta casa acredita que os plásticos de uso único deveriam ser totalmente proibidos'."
        },
        {
          "en": "Speaker A: I firmly believe a complete ban is necessary. The pollution from these plastics is devastating our oceans and ecosystems. We need to get around to serious action.",
          "pt": "Orador A: Acredito firmemente que uma proibição completa é necessária. A poluição desses plásticos está devastando nossos oceanos e ecossistemas. Precisamos tomar medidas sérias."
        },
        {
          "en": "Speaker B: That's a valid point, but consider this: what about the economic impact on industries that rely on plastic packaging? And are there truly sustainable alternatives for everything?",
          "pt": "Orador B: Esse é um ponto válido, mas considere o seguinte: e o impacto econômico nas indústrias que dependem de embalagens plásticas? E existem alternativas realmente sustentáveis para tudo?"
        },
        {
          "en": "Speaker A: I'd like to challenge that assumption that alternatives aren't available. Many innovative materials have come across in recent research. We simply need to look into scaling them up.",
          "pt": "Orador A: Gostaria de desafiar essa suposição de que as alternativas não estão disponíveis. Muitos materiais inovadores surgiram em pesquisas recentes. Precisamos apenas investigar a expansão deles."
        },
        {
          "en": "Host: An interesting point. The debate continues after this short break.",
          "pt": "Host: Um ponto interessante. O debate continua após este breve intervalo."
        }
      ],
      "questions": [
        {
          "id": "input-q1",
          "prompt": {
            "en": "What is the main topic of the debate?",
            "pt": "Qual é o tópico principal do debate?"
          },
          "options": [
            "The impact of pollution on cities.",
            "The complete ban of single-use plastics.",
            "The economic benefits of plastic production."
          ],
          "answer": "The complete ban of single-use plastics.",
          "explanation": {
            "en": "The host explicitly states the motion: 'This house believes single-use plastics should be entirely banned.'",
            "pt": "O apresentador declara explicitamente a moção: 'Esta casa acredita que os plásticos de uso único deveriam ser totalmente proibidos.'"
          }
        },
        {
          "id": "input-q2",
          "prompt": {
            "en": "What concern does Speaker B raise about a total ban?",
            "pt": "Que preocupação o Orador B levanta sobre uma proibição total?"
          },
          "options": [
            "The difficulty of recycling all plastics.",
            "The negative effects on wildlife conservation.",
            "The economic impact and lack of sustainable alternatives."
          ],
          "answer": "The economic impact and lack of sustainable alternatives.",
          "explanation": {
            "en": "Speaker B mentions 'the economic impact on industries' and questions if there are 'truly sustainable alternatives for everything'.",
            "pt": "O Orador B menciona 'o impacto econômico nas indústrias' e questiona se existem 'alternativas verdadeiramente sustentáveis para tudo'."
          }
        },
        {
          "id": "input-q3",
          "prompt": {
            "en": "How does Speaker A respond to the concerns about alternatives?",
            "pt": "Como o Orador A responde às preocupações sobre as alternativas?"
          },
          "options": [
            "By agreeing that alternatives are scarce.",
            "By stating that new sustainable materials have been discovered and need scaling up.",
            "By suggesting that recycling programs are the best solution."
          ],
          "answer": "By stating that new sustainable materials have been discovered and need scaling up.",
          "explanation": {
            "en": "Speaker A says, 'Many innovative materials have come across in recent research. We simply need to look into scaling them up.'",
            "pt": "O Orador A diz: 'Muitos materiais inovadores surgiram em pesquisas recentes. Precisamos apenas investigar a expansão deles.'"
          }
        }
      ]
    },
    "quickCheck": [
      {
        "id": "qc-1",
        "prompt": {
          "en": "Which environmental term refers to the process of protecting natural resources?",
          "pt": "Qual termo ambiental se refere ao processo de proteção dos recursos naturais?"
        },
        "options": [
          "Waste",
          "Conservation",
          "Pollution"
        ],
        "answer": "Conservation",
        "explanation": {
          "en": "Conservation is the protection of animals, plants, and natural resources.",
          "pt": "Conservação é a proteção de animais, plantas e recursos naturais."
        }
      },
      {
        "id": "qc-2",
        "prompt": {
          "en": "If you finally decide to clean your room after weeks of putting it off, which phrasal verb would you use?",
          "pt": "Se você finalmente decide limpar seu quarto depois de semanas adiando, qual phrasal verb você usaria?"
        },
        "options": [
          "look into",
          "come across",
          "get around to"
        ],
        "answer": "get around to",
        "explanation": {
          "en": "'Get around to' means to do something you have been intending to do for a while.",
          "pt": "'Get around to' significa fazer algo que você pretendia fazer há algum tempo."
        }
      },
      {
        "id": "qc-3",
        "prompt": {
          "en": "What does 'I'd like to challenge that assumption' mean in a debate?",
          "pt": "O que 'I'd like to challenge that assumption' significa em um debate?"
        },
        "options": [
          "To completely agree with a previous statement.",
          "To question the truth or validity of a previous statement.",
          "To offer an alternative solution to a problem."
        ],
        "answer": "To question the truth or validity of a previous statement.",
        "explanation": {
          "en": "It's a phrase used to express disagreement with a premise or belief stated by someone else.",
          "pt": "É uma frase usada para expressar desacordo com uma premissa ou crença declarada por outra pessoa."
        }
      },
      {
        "id": "qc-4",
        "prompt": {
          "en": "Which of these is NOT considered a renewable energy resource?",
          "pt": "Qual destes NÃO é considerado um recurso de energia renovável?"
        },
        "options": [
          "Solar power",
          "Wind power",
          "Coal"
        ],
        "answer": "Coal",
        "explanation": {
          "en": "Coal is a fossil fuel, which is a non-renewable resource.",
          "pt": "O carvão é um combustível fóssil, que é um recurso não renovável."
        }
      }
    ]
  },
  "communicate": {
    "id": "UPPER-INTERMEDIATE-U06-COMMUNICATE",
    "review": [
      {
        "en": "Recall the 10 environmental vocabulary words and their meanings.",
        "pt": "Relembre as 10 palavras do vocabulário ambiental e seus significados."
      },
      {
        "en": "Review the usage and nuance of 'get around to', 'look into', and 'come across'.",
        "pt": "Revise o uso e a nuance de 'get around to', 'look into' e 'come across'."
      },
      {
        "en": "Practice the debating expressions: 'Let me play devil's advocate for a moment.', 'That's a valid point, but consider this...', 'I'd like to challenge that assumption.'.",
        "pt": "Pratique as expressões de debate: 'Let me play devil's advocate for a moment.', 'That's a valid point, but consider this...', 'I'd like to challenge that assumption.'."
      }
    ],
    "activities": [
      {
        "id": "activity-1",
        "title": {
          "en": "Discuss: Local Environmental Issues",
          "pt": "Discuta: Questões Ambientais Locais"
        },
        "instruction": {
          "en": "In pairs, discuss an environmental issue currently affecting your local community (e.g., waste management, water pollution, green spaces). Use the new vocabulary and at least one debating expression to present your viewpoint and respond to your partner.",
          "pt": "Em duplas, discuta uma questão ambiental que afeta sua comunidade local (por exemplo, gestão de resíduos, poluição da água, espaços verdes). Use o novo vocabulário e pelo menos uma expressão de debate para apresentar seu ponto de vista e responder ao seu parceiro."
        },
        "phrases": [
          {
            "en": "Our city desperately needs to get around to improving its recycling facilities.",
            "pt": "Nossa cidade precisa urgentemente melhorar suas instalações de reciclagem."
          },
          {
            "en": "I'd like to challenge that assumption that everyone recycles; many people still don't know how.",
            "pt": "Gostaria de desafiar essa suposição de que todos reciclam; muitas pessoas ainda não sabem como."
          },
          {
            "en": "We should look into community education programs to increase participation.",
            "pt": "Deveríamos investigar programas de educação comunitária para aumentar a participação."
          }
        ],
        "check": [
          {
            "id": "act1-check1",
            "prompt": {
              "en": "Did the students use at least three different environmental vocabulary words?",
              "pt": "Os alunos usaram pelo menos três palavras diferentes do vocabulário ambiental?"
            },
            "options": [
              "Yes, consistently.",
              "Partially, some words were used.",
              "No, they mainly used general terms."
            ],
            "answer": "Yes, consistently.",
            "explanation": {
              "en": "Check for correct usage of terms like 'pollution,' 'recycling,' 'sustainability,' etc.",
              "pt": "Verifique o uso correto de termos como 'poluição', 'reciclagem', 'sustentabilidade', etc."
            }
          },
          {
            "id": "act1-check2",
            "prompt": {
              "en": "Was at least one debating expression used effectively by each student?",
              "pt": "Pelo menos uma expressão de debate foi usada efetivamente por cada aluno?"
            },
            "options": [
              "Yes, and it enhanced the discussion.",
              "Once or twice, but not consistently.",
              "No, they avoided using them."
            ],
            "answer": "Yes, and it enhanced the discussion.",
            "explanation": {
              "en": "Listen for phrases like 'Let me play devil's advocate' or 'That's a valid point'.",
              "pt": "Preste atenção a frases como 'Let me play devil's advocate' ou 'That's a valid point'."
            }
          }
        ]
      },
      {
        "id": "activity-2",
        "title": {
          "en": "Argue Your Position: Global Warming Solutions",
          "pt": "Defenda Sua Posição: Soluções para o Aquecimento Global"
        },
        "instruction": {
          "en": "Form small groups. Each group is assigned one of these roles: 'Government Official,' 'Environmental Activist,' or 'Industry Leader.' Prepare a 2-minute argument outlining your perspective on how to tackle global warming, focusing on specific environmental terms and phrasal verbs. Be ready to respond to questions.",
          "pt": "Forme pequenos grupos. Cada grupo é designado para um destes papéis: 'Oficial do Governo', 'Ativista Ambiental' ou 'Líder da Indústria'. Prepare um argumento de 2 minutos delineando sua perspectiva sobre como combater o aquecimento global, focando em termos ambientais específicos e phrasal verbs. Esteja pronto para responder a perguntas."
        },
        "phrases": [
          {
            "en": "As an Industry Leader, I'd like to challenge the assumption that our sector isn't committed to sustainability.",
            "pt": "Como Líder da Indústria, gostaria de desafiar a suposição de que nosso setor não está comprometido com a sustentabilidade."
          },
          {
            "en": "We've come across many innovations that can reduce our carbon impact.",
            "pt": "Descobrimos muitas inovações que podem reduzir nosso impacto de carbono."
          },
          {
            "en": "The government really needs to get around to implementing stricter regulations.",
            "pt": "O governo realmente precisa se organizar para implementar regulamentações mais rigorosas."
          }
        ],
        "check": [
          {
            "id": "act2-check1",
            "prompt": {
              "en": "Did the students successfully adopt their assigned role's perspective?",
              "pt": "Os alunos conseguiram adotar a perspectiva do papel atribuído?"
            },
            "options": [
              "Yes, their arguments were consistent with the role.",
              "Somewhat, but there were inconsistencies.",
              "No, they mostly expressed personal opinions."
            ],
            "answer": "Yes, their arguments were consistent with the role.",
            "explanation": {
              "en": "Assess if the arguments reflect the typical concerns and priorities of each role.",
              "pt": "Avalie se os argumentos refletem as preocupações e prioridades típicas de cada papel."
            }
          },
          {
            "id": "act2-check2",
            "prompt": {
              "en": "Were at least two different advanced phrasal verbs used correctly within each group's argument?",
              "pt": "Pelo menos dois phrasal verbs avançados diferentes foram usados corretamente dentro do argumento de cada grupo?"
            },
            "options": [
              "Yes, and they were used naturally.",
              "Only one or they were forced.",
              "No, phrasal verbs were mostly absent."
            ],
            "answer": "Yes, and they were used naturally.",
            "explanation": {
              "en": "Listen for 'get around to', 'look into', 'come across' and their appropriate context.",
              "pt": "Ouça 'get around to', 'look into', 'come across' e seus contextos apropriados."
            }
          }
        ]
      },
      {
        "id": "activity-3",
        "title": {
          "en": "Analyze a Reading: Environmental Case Study",
          "pt": "Analise uma Leitura: Estudo de Caso Ambiental"
        },
        "instruction": {
          "en": "Read a short case study about an environmental disaster (e.g., an oil spill, deforestation project). In groups, analyze the causes and consequences. Then, propose solutions, using the debating expressions to discuss conflicting ideas and the phrasal verbs to describe necessary actions.",
          "pt": "Leia um breve estudo de caso sobre um desastre ambiental (por exemplo, um derramamento de óleo, projeto de desmatamento). Em grupos, analise as causas e consequências. Em seguida, proponha soluções, usando as expressões de debate para discutir ideias conflitantes e os phrasal verbs para descrever as ações necessárias."
        },
        "phrases": [
          {
            "en": "We really need to look into better preventative measures to avoid such disasters in the future.",
            "pt": "Precisamos realmente investigar melhores medidas preventivas para evitar tais desastres no futuro."
          },
          {
            "en": "Let me play devil's advocate for a moment: is it truly feasible to implement those costly conservation efforts?",
            "pt": "Deixe-me bancar o advogado do diabo por um momento: é realmente viável implementar esses esforços de conservação caros?"
          },
          {
            "en": "We came across a similar situation in another country, and their solution involved community engagement.",
            "pt": "Nos deparamos com uma situação semelhante em outro país, e a solução deles envolveu o engajamento da comunidade."
          }
        ],
        "check": [
          {
            "id": "act3-check1",
            "prompt": {
              "en": "Did the group effectively analyze the case study's causes and consequences?",
              "pt": "O grupo analisou efetivamente as causas e consequências do estudo de caso?"
            },
            "options": [
              "Yes, with clear understanding and detail.",
              "Partially, some key points were missed.",
              "No, their analysis was superficial."
            ],
            "answer": "Yes, with clear understanding and detail.",
            "explanation": {
              "en": "Assess the depth and accuracy of their analysis of the case study.",
              "pt": "Avalie a profundidade e precisão da análise do estudo de caso."
            }
          },
          {
            "id": "act3-check2",
            "prompt": {
              "en": "Were both debating expressions and phrasal verbs used when proposing solutions?",
              "pt": "Tanto as expressões de debate quanto os phrasal verbs foram usados ao propor soluções?"
            },
            "options": [
              "Yes, integrated naturally into the discussion.",
              "Only one type was used effectively.",
              "No, they struggled to incorporate them."
            ],
            "answer": "Yes, integrated naturally into the discussion.",
            "explanation": {
              "en": "Observe if students used expressions to challenge or agree, and phrasal verbs for actions.",
              "pt": "Observe se os alunos usaram expressões para desafiar ou concordar, e phrasal verbs para ações."
            }
          }
        ]
      }
    ],
    "challenge": {
      "id": "challenge-u06",
      "title": {
        "en": "Town Hall Debate: New Eco-Tourism Project",
        "pt": "Debate em Audiência Pública: Novo Projeto de Ecoturismo"
      },
      "instruction": {
        "en": "Imagine your town is debating a new eco-tourism project. Divide into two teams: 'Pro-Project' and 'Anti-Project'. Each team will prepare arguments for or against the project, using the environmental vocabulary, advanced phrasal verbs, and debating expressions. You will then have a moderated debate, presenting your arguments and respectfully challenging the opposing team's points. Aim for fluid, spontaneous use of all target language.",
        "pt": "Imagine que sua cidade está debatendo um novo projeto de ecoturismo. Dividam-se em duas equipes: 'Pró-Projeto' e 'Anti-Projeto'. Cada equipe preparará argumentos a favor ou contra o projeto, usando o vocabulário ambiental, os phrasal verbs avançados e as expressões de debate. Em seguida, vocês terão um debate moderado, apresentando seus argumentos e desafiando respeitosamente os pontos da equipe adversária. Busque um uso fluente e espontâneo de toda a linguagem-alvo."
      },
      "phrases": [
        {
          "en": "I'd like to challenge the assumption that this project will truly benefit local biodiversity.",
          "pt": "Gostaria de desafiar a suposição de que este projeto realmente beneficiará a biodiversidade local."
        },
        {
          "en": "We really need to get around to conducting a thorough environmental impact assessment before proceeding.",
          "pt": "Precisamos realmente nos organizar para realizar uma avaliação completa do impacto ambiental antes de prosseguir."
        },
        {
          "en": "That's a valid point about economic growth, but consider this: at what cost to our natural resources?",
          "pt": "Esse é um ponto válido sobre o crescimento econômico, mas considere o seguinte: a que custo para nossos recursos naturais?"
        }
      ],
      "check": [
        {
          "id": "chal-check1",
          "prompt": {
            "en": "Did both teams effectively use at least two different advanced phrasal verbs and two debating expressions?",
            "pt": "Ambas as equipes usaram efetivamente pelo menos dois phrasal verbs avançados diferentes e duas expressões de debate?"
          },
          "options": [
            "Yes, consistently and accurately.",
            "Partially, some uses were forced or incorrect.",
            "No, they struggled to incorporate the target language."
          ],
          "answer": "Yes, consistently and accurately.",
          "explanation": {
            "en": "Observe for natural integration of 'get around to', 'look into', 'come across', and debating phrases.",
            "pt": "Observe a integração natural de 'get around to', 'look into', 'come across' e frases de debate."
          }
        },
        {
          "id": "chal-check2",
          "prompt": {
            "en": "Were arguments well-structured and did participants respond appropriately to challenges from the opposing team?",
            "pt": "Os argumentos foram bem estruturados e os participantes responderam adequadamente aos desafios da equipe adversária?"
          },
          "options": [
            "Yes, demonstrating strong communication and critical thinking.",
            "Somewhat, but responses were sometimes off-topic or unclear.",
            "No, the debate lacked structure and effective responses."
          ],
          "answer": "Yes, demonstrating strong communication and critical thinking.",
          "explanation": {
            "en": "Assess the coherence of arguments and the ability to engage in a back-and-forth discussion.",
            "pt": "Avalie a coerência dos argumentos e a capacidade de se envolver em uma discussão interativa."
          }
        }
      ]
    },
    "lessonReview": {
      "summary": {
        "en": "In this unit, we explored key environmental vocabulary, learned advanced phrasal verbs like 'get around to', 'look into', and 'come across' for more nuanced expression, and practiced essential debating expressions to articulate opinions and challenge assumptions effectively.",
        "pt": "Nesta unidade, exploramos o vocabulário ambiental chave, aprendemos phrasal verbs avançados como 'get around to', 'look into' e 'come across' para uma expressão mais matizada, e praticamos expressões de debate essenciais para articular opiniões e desafiar suposições de forma eficaz."
      },
      "canDo": [
        {
          "en": "I can identify and use advanced environmental vocabulary.",
          "pt": "Consigo identificar e usar vocabulário ambiental avançado."
        },
        {
          "en": "I can apply advanced phrasal verbs ('get around to', 'look into', 'come across') to add nuance to my communication.",
          "pt": "Consigo aplicar phrasal verbs avançados ('get around to', 'look into', 'come across') para adicionar nuance à minha comunicação."
        },
        {
          "en": "I can use debating expressions to present my arguments and challenge others respectfully.",
          "pt": "Consigo usar expressões de debate para apresentar meus argumentos e desafiar os outros respeitosamente."
        }
      ],
      "next": {
        "en": "In Unit 7, we will delve into the topic of 'Future Technologies' and explore advanced conditional structures.",
        "pt": "Na Unidade 7, vamos aprofundar o tema 'Tecnologias Futuras' e explorar estruturas condicionais avançadas."
      }
    }
  }
},
{
  "code": "UPPER-INTERMEDIATE-U07",
  "number": 7,
  "title": "Culture Society — Inversion",
  "titlePt": "Cultura e Sociedade — Inversão",
  "cefr": "B2",
  "objective": {
    "en": "To teach about culture, society, and inversion for emphasis in formal and literary language in a contextualized manner.",
    "pt": "Ensinar cultura e sociedade e inversão para ênfase em linguagem formal e literária de forma contextualizada."
  },
  "communicationGoal": {
    "en": "The student will be able to use 'summarizing formally' and culture society vocabulary to communicate in real-life situations.",
    "pt": "O aluno será capaz de usar 'summarizing formally' e o vocabulário de cultura e sociedade para se comunicar em situações reais."
  },
  "prerequisites": {
    "en": "Structure: Advanced phrasal verbs for nuanced meaning (get around to, look into, come across). Vocabulary: Environment.",
    "pt": "Estrutura: Advanced phrasal verbs for nuanced meaning (get around to, look into, come across). Vocabulário: Environment."
  },
  "newContent": {
    "en": "Grammar: Inversion for emphasis in formal and literary language. | Vocabulary: Culture Society (10 lexical items) | Expressions: Summarizing Formally",
    "pt": "Grammar: Inversion for emphasis in formal and literary language. | Vocabulary: Culture Society (10 itens lexicais) | Expressions: Summarizing Formally"
  },
  "reviewContent": {
    "en": "Not applicable — course introductory unit.",
    "pt": "Não aplicável — unidade inicial do curso."
  },
  "discover": {
    "id": "UPPER-INTERMEDIATE-U07-DISCOVER",
    "warmUp": {
      "prompt": {
        "en": "Look at these images of different cultural celebrations and answer: What makes each one unique? How do people express their shared identity in these events?",
        "pt": "Observe estas imagens de diferentes celebrações culturais e responda: O que torna cada uma única? Como as pessoas expressam sua identidade compartilhada nesses eventos?"
      },
      "phrases": [
        {
          "en": "Cultural heritage plays a significant role.",
          "pt": "A herança cultural desempenha um papel significativo."
        },
        {
          "en": "These events often reflect a community's core values.",
          "pt": "Esses eventos frequentemente refletem os valores centrais de uma comunidade."
        }
      ]
    },
    "context": {
      "situation": {
        "en": "Professor Elena Ramirez, an anthropologist, is giving a lecture on 'The Dynamics of Global Culture'. During her presentation, she introduces key concepts and then summarizes findings from a recent study on intergenerational cultural exchange. Two students, Liam and Sofia, are discussing her points.",
        "pt": "A Professora Elena Ramirez, uma antropóloga, está dando uma palestra sobre 'A Dinâmica da Cultura Global'. Durante sua apresentação, ela apresenta conceitos chave e, em seguida, resume as descobertas de um estudo recente sobre intercâmbio cultural intergeracional. Dois estudantes, Liam e Sofia, estão discutindo os pontos dela."
      },
      "dialogue": [
        {
          "who": "Professor Ramirez",
          "en": "Good morning, everyone. Today, we're delving into the intricate web of culture and society. Never has understanding these connections been more vital.",
          "pt": "Bom dia a todos. Hoje, vamos mergulhar na intrincada teia da cultura e da sociedade. Nunca foi tão vital compreender essas conexões."
        },
        {
          "who": "Professor Ramirez",
          "en": "Not only do traditions shape our individual identity, but they also forge strong community bonds. Our study showed how diversity enriches societies.",
          "pt": "As tradições não apenas moldam nossa identidade individual, mas também forjam fortes laços comunitários. Nosso estudo mostrou como a diversidade enriquece as sociedades."
        },
        {
          "who": "Professor Ramirez",
          "en": "In essence, the key takeaway is that active cultural exchange between generations preserves heritage and evolves societal norms.",
          "pt": "Em essência, a principal conclusão é que a troca cultural ativa entre gerações preserva a herança e evolui as normas sociais."
        },
        {
          "who": "Liam",
          "en": "Wow, her presentation was insightful. Only rarely do you hear such a clear breakdown of complex cultural dynamics.",
          "pt": "Uau, a apresentação dela foi perspicaz. Apenas raramente você ouve uma análise tão clara de dinâmicas culturais complexas."
        },
        {
          "who": "Sofia",
          "en": "I agree. To conclude, I think her point about the influence of perspective on understanding different values was particularly strong. All things considered, it was a fantastic lecture.",
          "pt": "Concordo. Para concluir, acho que o ponto dela sobre a influência da perspectiva na compreensão de diferentes valores foi particularmente forte. Considerando tudo, foi uma palestra fantástica."
        },
        {
          "who": "Liam",
          "en": "Hardly ever do I take so many notes! I need to review this. She really made me think about how customs evolve.",
          "pt": "Quase nunca tiro tantas anotações! Preciso rever isso. Ela realmente me fez pensar em como os costumes evoluem."
        }
      ]
    },
    "vocabulary": [
      {
        "term": "tradition",
        "pt": "tradição",
        "ipa": "/trəˈdɪʃən/",
        "definition": "A long-established custom or belief passed on from one generation to another.",
        "example": "The annual harvest festival is a deeply rooted tradition in this rural community.",
        "examplePt": "O festival anual da colheita é uma tradição profundamente enraizada nesta comunidade rural."
      },
      {
        "term": "custom",
        "pt": "costume",
        "ipa": "/ˈkʌstəm/",
        "definition": "A traditional and widely accepted way of behaving or doing something specific to a particular society, place, or time.",
        "example": "It is a local custom to exchange gifts during the New Year celebrations.",
        "examplePt": "É um costume local trocar presentes durante as celebrações de Ano Novo."
      },
      {
        "term": "diversity",
        "pt": "diversidade",
        "ipa": "/daɪˈvɜːrsəti/",
        "definition": "The state of being varied or different; the inclusion of different types of people or things in a group or organization.",
        "example": "The city's cultural diversity is reflected in its wide range of restaurants and festivals.",
        "examplePt": "A diversidade cultural da cidade é refletida em sua ampla variedade de restaurantes e festivais."
      },
      {
        "term": "identity",
        "pt": "identidade",
        "ipa": "/aɪˈdɛntəti/",
        "definition": "The distinguishing character or personality of an individual or a group.",
        "example": "Language is a crucial part of a nation's cultural identity.",
        "examplePt": "A língua é uma parte crucial da identidade cultural de uma nação."
      },
      {
        "term": "community",
        "pt": "comunidade",
        "ipa": "/kəˈmjuːnəti/",
        "definition": "A group of people living in the same place or having a particular characteristic in common.",
        "example": "The local community rallied together to support the families affected by the flood.",
        "examplePt": "A comunidade local uniu-se para apoiar as famílias afetadas pela enchente."
      },
      {
        "term": "values",
        "pt": "valores",
        "ipa": "/ˈvæljuːz/",
        "definition": "A person's or a society's standards of behavior; principles regarded as important or desirable.",
        "example": "Respect for elders is one of the core values taught in many cultures.",
        "examplePt": "O respeito pelos mais velhos é um dos valores centrais ensinados em muitas culturas."
      },
      {
        "term": "heritage",
        "pt": "herança",
        "ipa": "/ˈhɛrɪtɪdʒ/",
        "definition": "Property that is or may be inherited; valued objects and qualities such as cultural traditions that have been passed down from previous generations.",
        "example": "Preserving architectural heritage is vital for understanding our past.",
        "examplePt": "Preservar o patrimônio arquitetônico é vital para entender nosso passado."
      },
      {
        "term": "generation",
        "pt": "geração",
        "ipa": "/ˌdʒɛnəˈreɪʃən/",
        "definition": "All of the people born and living at about the same time, regarded collectively.",
        "example": "The younger generation is often more open to new ideas and technologies.",
        "examplePt": "A geração mais jovem é frequentemente mais aberta a novas ideias e tecnologias."
      },
      {
        "term": "perspective",
        "pt": "perspectiva",
        "ipa": "/pərˈspɛktɪv/",
        "definition": "A particular attitude toward or way of regarding something; a point of view.",
        "example": "Understanding different cultural perspectives is key to global communication.",
        "examplePt": "Compreender diferentes perspectivas culturais é fundamental para a comunicação global."
      },
      {
        "term": "norm",
        "pt": "norma",
        "ipa": "/nɔːrm/",
        "definition": "Something that is usual, typical, or standard; a standard or pattern, especially of social behavior, that is typical or expected of a group.",
        "example": "In some cultures, it is the norm to remove your shoes before entering a home.",
        "examplePt": "Em algumas culturas, é a norma tirar os sapatos antes de entrar em uma casa."
      }
    ],
    "expressions": [
      {
        "en": "In essence, the key takeaway is...",
        "pt": "Em essência, a principal conclusão é que..."
      },
      {
        "en": "To conclude...",
        "pt": "Para concluir..."
      },
      {
        "en": "All things considered...",
        "pt": "Considerando tudo..."
      }
    ],
    "grammar": [
      {
        "title": {
          "en": "Inversion for Emphasis in Formal and Literary Language",
          "pt": "Inversão para Ênfase em Linguagem Formal e Literária"
        },
        "examples": [
          {
            "en": "Never have I seen such dedication.",
            "pt": "Nunca vi tamanha dedicação."
          },
          {
            "en": "Not only did they finish early, but they also exceeded expectations.",
            "pt": "Não só terminaram cedo, mas também superaram as expectativas."
          },
          {
            "en": "Hardly ever do I take so many notes.",
            "pt": "Quase nunca tiro tantas anotações."
          }
        ],
        "rule": {
          "en": "Inversion is a grammatical structure where the usual word order (Subject + Verb) is reversed, often placing an auxiliary verb or a negative/restrictive adverbial phrase at the beginning of the sentence, followed by the auxiliary verb, then the subject, and finally the main verb. This structure is used for emphasis, often in formal or literary contexts, particularly with negative or restrictive adverbs like 'never', 'rarely', 'seldom', 'hardly ever', 'scarcely', 'only when', 'not until', 'not only... but also'.",
          "pt": "A inversão é uma estrutura gramatical onde a ordem usual das palavras (Sujeito + Verbo) é invertida, frequentemente colocando um verbo auxiliar ou uma frase adverbial negativa/restritiva no início da frase, seguido pelo verbo auxiliar, depois o sujeito, e finalmente o verbo principal. Essa estrutura é usada para ênfase, muitas vezes em contextos formais ou literários, particularmente com advérbios negativos ou restritivos como 'never', 'rarely', 'seldom', 'hardly ever', 'scarcely', 'only when', 'not until', 'not only... but also'."
        },
        "mistakes": [
          {
            "en": "Common mistake: forgetting to invert the auxiliary verb or using incorrect auxiliary. E.g., 'Never I have seen...' (incorrect) instead of 'Never have I seen...'",
            "pt": "Erro comum: esquecer de inverter o verbo auxiliar ou usar o auxiliar incorreto. Ex: 'Never I have seen...' (incorreto) em vez de 'Never have I seen...'"
          },
          {
            "en": "Another mistake: applying inversion in informal contexts, where it sounds unnatural. E.g., 'Only rarely I go out' in casual conversation.",
            "pt": "Outro erro: aplicar a inversão em contextos informais, onde soa antinatural. Ex: 'Only rarely I go out' em uma conversa casual."
          }
        ]
      }
    ],
    "controlledPractice": [
      {
        "id": "u7-cp1",
        "prompt": {
          "en": "Choose the sentence that correctly uses inversion for emphasis.",
          "pt": "Escolha a frase que usa a inversão corretamente para ênfase."
        },
        "options": [
          "Seldom he visits his hometown.",
          "Seldom does he visit his hometown.",
          "He seldom visits his hometown."
        ],
        "answer": "Seldom does he visit his hometown.",
        "explanation": {
          "en": "With 'seldom' at the beginning, we must invert the auxiliary verb ('does') and the subject ('he').",
          "pt": "Com 'seldom' no início, devemos inverter o verbo auxiliar ('does') e o sujeito ('he')."
        }
      },
      {
        "id": "u7-cp2",
        "prompt": {
          "en": "Transform the following sentence using inversion: 'I have never witnessed such a breathtaking spectacle.'",
          "pt": "Transforme a seguinte frase usando inversão: 'Nunca testemunhei um espetáculo tão deslumbrante.'"
        },
        "options": [
          "Never I have witnessed such a breathtaking spectacle.",
          "Never witnessed I such a breathtaking spectacle.",
          "Never have I witnessed such a breathtaking spectacle."
        ],
        "answer": "Never have I witnessed such a breathtaking spectacle.",
        "explanation": {
          "en": "The correct inversion with 'never' requires placing the auxiliary 'have' before the subject 'I'.",
          "pt": "A inversão correta com 'never' exige a colocação do auxiliar 'have' antes do sujeito 'I'."
        }
      },
      {
        "id": "u7-cp3",
        "prompt": {
          "en": "Which option correctly completes the sentence: 'Not only ______ finished the report, but she also presented it flawlessly.'",
          "pt": "Qual opção completa corretamente a frase: 'Não só ______ terminou o relatório, mas ela também o apresentou impecavelmente.'"
        },
        "options": [
          "she had",
          "had she",
          "she did"
        ],
        "answer": "had she",
        "explanation": {
          "en": "The phrase 'not only' at the beginning requires inversion of the auxiliary verb. 'Had she' correctly applies this to a past perfect context.",
          "pt": "A frase 'not only' no início exige a inversão do verbo auxiliar. 'Had she' aplica isso corretamente a um contexto de Past Perfect."
        }
      },
      {
        "id": "u7-cp4",
        "prompt": {
          "en": "Identify the sentence that incorrectly uses inversion.",
          "pt": "Identifique a frase que usa a inversão incorretamente."
        },
        "options": [
          "Under no circumstances should you open that package.",
          "Scarcely had we arrived when it started to rain.",
          "Little they knew about the challenges ahead."
        ],
        "answer": "Little they knew about the challenges ahead.",
        "explanation": {
          "en": "For 'Little' at the beginning of the sentence to create inversion, it should be followed by an auxiliary verb and then the subject, e.g., 'Little did they know...'.",
          "pt": "Para 'Little' no início da frase criar inversão, ele deve ser seguido por um verbo auxiliar e depois o sujeito, por exemplo, 'Little did they know...'."
        }
      }
    ],
    "input": {
      "kind": "reading",
      "title": {
        "en": "The Evolution of Community Values in a Globalized World",
        "pt": "A Evolução dos Valores Comunitários em um Mundo Globalizado"
      },
      "lines": [
        {
          "en": "Historically, community values were largely shaped by local traditions and shared heritage. Not only did geographical proximity foster strong bonds, but it also ensured the transmission of specific customs from one generation to the next. Rarely did external influences significantly alter these deeply entrenched norms.",
          "pt": "Historicamente, os valores comunitários eram amplamente moldados por tradições locais e herança compartilhada. Não só a proximidade geográfica fomentava laços fortes, mas também garantia a transmissão de costumes específicos de uma geração para a seguinte. Raramente as influências externas alteravam significativamente essas normas profundamente enraizadas."
        },
        {
          "en": "However, with globalization, we observe a dramatic shift. Never before has such a vast diversity of perspectives been so readily accessible. Individuals are increasingly exposed to varied identities and belief systems, leading to a re-evaluation of long-held values. Only through embracing this complexity can societies truly adapt.",
          "pt": "No entanto, com a globalização, observamos uma mudança dramática. Nunca antes uma diversidade tão vasta de perspectivas foi tão prontamente acessível. Indivíduos são cada vez mais expostos a identidades e sistemas de crenças variados, levando a uma reavaliação de valores antigos. Somente abraçando essa complexidade as sociedades podem realmente se adaptar."
        },
        {
          "en": "The challenge lies in maintaining a sense of collective identity while integrating new elements. All things considered, fostering open dialogue across different generations and cultural backgrounds is paramount. In essence, the key takeaway is that modern communities must find a balance between preserving their unique heritage and evolving with global trends.",
          "pt": "O desafio reside em manter um senso de identidade coletiva enquanto se integram novos elementos. Considerando tudo, fomentar o diálogo aberto entre diferentes gerações e backgrounds culturais é de suma importância. Em essência, a principal conclusão é que as comunidades modernas devem encontrar um equilíbrio entre preservar sua herança única e evoluir com as tendências globais."
        },
        {
          "en": "To conclude, the dynamic interplay between tradition and innovation defines our current societal landscape. Harder still is the task of preparing future generations to navigate this intricate cultural tapestry with respect and understanding. Our shared human values remain the compass.",
          "pt": "Para concluir, a interação dinâmica entre tradição e inovação define nosso panorama social atual. Ainda mais difícil é a tarefa de preparar as futuras gerações para navegar nesta intrincada tapeçaria cultural com respeito e compreensão. Nossos valores humanos compartilhados permanecem como a bússola."
        },
        {
          "en": "Little do many realize the profound impact of individual choices on shaping the cultural norms of tomorrow.",
          "pt": "Poucos percebem o profundo impacto das escolhas individuais na moldagem das normas culturais de amanhã."
        }
      ],
      "questions": [
        {
          "id": "u7-input-q1",
          "prompt": {
            "en": "According to the text, what was a key factor in shaping historical community values?",
            "pt": "De acordo com o texto, qual foi um fator chave na formação dos valores comunitários históricos?"
          },
          "options": [
            "Frequent external influences.",
            "Local traditions and shared heritage.",
            "Rapid technological advancements."
          ],
          "answer": "Local traditions and shared heritage.",
          "explanation": {
            "en": "The first paragraph states, 'Historically, community values were largely shaped by local traditions and shared heritage.'",
            "pt": "O primeiro parágrafo afirma: 'Historicamente, os valores comunitários eram amplamente moldados por tradições locais e herança compartilhada.'"
          }
        },
        {
          "id": "u7-input-q2",
          "prompt": {
            "en": "What does the text suggest is a major challenge for modern communities in a globalized world?",
            "pt": "O que o texto sugere ser um grande desafio para as comunidades modernas em um mundo globalizado?"
          },
          "options": [
            "Completely abandoning all traditions.",
            "Maintaining collective identity while integrating new elements.",
            "Resisting all forms of cultural exchange."
          ],
          "answer": "Maintaining collective identity while integrating new elements.",
          "explanation": {
            "en": "The third paragraph notes, 'The challenge lies in maintaining a sense of collective identity while integrating new elements.'",
            "pt": "O terceiro parágrafo observa: 'O desafio reside em manter um senso de identidade coletiva enquanto se integram novos elementos.'"
          }
        },
        {
          "id": "u7-input-q3",
          "prompt": {
            "en": "What is the key takeaway regarding modern communities, as stated in the text?",
            "pt": "Qual é a principal conclusão a respeito das comunidades modernas, conforme indicado no texto?"
          },
          "options": [
            "They should solely focus on global trends.",
            "They must preserve unique heritage and evolve with global trends.",
            "They should reject all foreign customs."
          ],
          "answer": "They must preserve unique heritage and evolve with global trends.",
          "explanation": {
            "en": "The text explicitly states: 'In essence, the key takeaway is that modern communities must find a balance between preserving their unique heritage and evolving with global trends.'",
            "pt": "O texto afirma explicitamente: 'Em essência, a principal conclusão é que as comunidades modernas devem encontrar um equilíbrio entre preservar sua herança única e evoluir com as tendências globais.'"
          }
        }
      ]
    },
    "quickCheck": [
      {
        "id": "u7-qc-q1",
        "prompt": {
          "en": "Which of the following sentences correctly uses inversion?",
          "pt": "Qual das seguintes frases usa a inversão corretamente?"
        },
        "options": [
          "Not often she travels abroad.",
          "Not often does she travel abroad.",
          "She does not often travel abroad."
        ],
        "answer": "Not often does she travel abroad.",
        "explanation": {
          "en": "When 'Not often' begins a sentence for emphasis, an auxiliary verb like 'does' must come before the subject 'she'.",
          "pt": "Quando 'Not often' inicia uma frase para ênfase, um verbo auxiliar como 'does' deve vir antes do sujeito 'she'."
        }
      },
      {
        "id": "u7-qc-q2",
        "prompt": {
          "en": "What is the best expression to use when formally stating the main conclusion of a discussion?",
          "pt": "Qual é a melhor expressão para usar ao declarar formalmente a principal conclusão de uma discussão?"
        },
        "options": [
          "So, basically...",
          "To conclude...",
          "You know, the main point is..."
        ],
        "answer": "To conclude...",
        "explanation": {
          "en": "'To conclude...' is a formal expression specifically used to introduce the final summary or decision.",
          "pt": "'To conclude...' é uma expressão formal usada especificamente para introduzir o resumo final ou a decisão."
        }
      },
      {
        "id": "u7-qc-q3",
        "prompt": {
          "en": "Which vocabulary word refers to the long-established beliefs and practices passed down through generations?",
          "pt": "Qual palavra do vocabulário se refere às crenças e práticas há muito estabelecidas transmitidas através das gerações?"
        },
        "options": [
          "Norm",
          "Diversity",
          "Tradition"
        ],
        "answer": "Tradition",
        "explanation": {
          "en": "'Tradition' specifically describes customs and beliefs passed on over a long period.",
          "pt": "'Tradição' descreve especificamente costumes e crenças transmitidos ao longo de um longo período."
        }
      },
      {
        "id": "u7-qc-q4",
        "prompt": {
          "en": "Identify the sentence where inversion is used incorrectly.",
          "pt": "Identifique a frase onde a inversão é usada incorretamente."
        },
        "options": [
          "Only then did he understand the full impact.",
          "Never I thought it would be so difficult.",
          "Hardly ever do they complain about the workload."
        ],
        "answer": "Never I thought it would be so difficult.",
        "explanation": {
          "en": "The correct inverted form for 'Never I thought...' should be 'Never did I think...' or 'Never have I thought...', requiring an auxiliary verb after 'Never'.",
          "pt": "A forma invertida correta para 'Never I thought...' deveria ser 'Never did I think...' ou 'Never have I thought...', exigindo um verbo auxiliar após 'Never'."
        }
      }
    ]
  },
  "communicate": {
    "id": "UPPER-INTERMEDIATE-U07-COMMUNICATE",
    "review": [
      {
        "en": "Recap of Inversion for emphasis: remember to use it with negative/restrictive adverbs and invert subject-auxiliary.",
        "pt": "Revisão da Inversão para ênfase: lembre-se de usá-la com advérbios negativos/restritivos e inverter sujeito-auxiliar."
      },
      {
        "en": "Refresher on Culture Society vocabulary: tradition, custom, diversity, identity, community, values, heritage, generation, perspective, norm.",
        "pt": "Revisão do vocabulário de Cultura e Sociedade: tradição, costume, diversidade, identidade, comunidade, valores, herança, geração, perspectiva, norma."
      },
      {
        "en": "Practice using formal summarizing expressions like 'In essence, the key takeaway is...', 'To conclude...', and 'All things considered...'.",
        "pt": "Prática de usar expressões formais de resumo como 'In essence, the key takeaway is...', 'To conclude...', e 'All things considered...'."
      }
    ],
    "activities": [
      {
        "id": "u7-comm-act1",
        "title": {
          "en": "Compare and Contrast Cultural Values",
          "pt": "Comparar e Contrastar Valores Culturais"
        },
        "instruction": {
          "en": "In pairs, research and compare the core values and traditions of two different cultures. Discuss how their societal norms have evolved, using inversion for emphasis at least twice in your discussion. Then, summarize your findings using formal expressions.",
          "pt": "Em pares, pesquise e compare os valores e tradições centrais de duas culturas diferentes. Discuta como suas normas sociais evoluíram, usando a inversão para ênfase pelo menos duas vezes em sua discussão. Em seguida, resuma suas descobertas usando expressões formais."
        },
        "phrases": [
          {
            "en": "Only recently have these societies begun to adopt...",
            "pt": "Somente recentemente essas sociedades começaram a adotar..."
          },
          {
            "en": "Never before has the concept of... been so debated.",
            "pt": "Nunca antes o conceito de... foi tão debatido."
          },
          {
            "en": "In essence, the key takeaway is that...",
            "pt": "Em essência, a principal conclusão é que..."
          }
        ],
        "check": [
          {
            "id": "u7-act1-q1",
            "prompt": {
              "en": "What is the primary goal of this activity?",
              "pt": "Qual é o objetivo principal desta atividade?"
            },
            "options": [
              "To memorize cultural facts.",
              "To compare cultures, using inversion and summarizing expressions.",
              "To debate political systems."
            ],
            "answer": "To compare cultures, using inversion and summarizing expressions.",
            "explanation": {
              "en": "The instruction clearly states to 'compare the core values... using inversion... and summarize your findings using formal expressions.'",
              "pt": "A instrução afirma claramente para 'comparar os valores centrais... usando inversão... e resumir suas descobertas usando expressões formais'."
            }
          },
          {
            "id": "u7-act1-q2",
            "prompt": {
              "en": "How many times are you required to use inversion for emphasis?",
              "pt": "Quantas vezes você é obrigado a usar a inversão para ênfase?"
            },
            "options": [
              "Once.",
              "At least twice.",
              "As many times as possible."
            ],
            "answer": "At least twice.",
            "explanation": {
              "en": "The instruction specifies 'using inversion for emphasis at least twice'.",
              "pt": "A instrução especifica 'usando a inversão para ênfase pelo menos duas vezes'."
            }
          }
        ]
      },
      {
        "id": "u7-comm-act2",
        "title": {
          "en": "Give a Short Presentation on Cultural Identity",
          "pt": "Fazer uma Breve Apresentação sobre Identidade Cultural"
        },
        "instruction": {
          "en": "Prepare a 3-minute presentation on how global trends impact local cultural identity. Use at least two examples of inversion and conclude your presentation with a formal summary expression. Your presentation should incorporate at least 5 new vocabulary terms from this unit.",
          "pt": "Prepare uma apresentação de 3 minutos sobre como as tendências globais impactam a identidade cultural local. Use pelo menos dois exemplos de inversão e conclua sua apresentação com uma expressão de resumo formal. Sua apresentação deve incorporar pelo menos 5 novos termos de vocabulário desta unidade."
        },
        "phrases": [
          {
            "en": "Seldom do we consider the long-term effects of...",
            "pt": "Raramente consideramos os efeitos de longo prazo de..."
          },
          {
            "en": "To conclude, the ongoing dialogue between... is essential.",
            "pt": "Para concluir, o diálogo contínuo entre... é essencial."
          },
          {
            "en": "Not only is diversity a strength, but it also challenges existing norms.",
            "pt": "A diversidade não é apenas uma força, mas também desafia as normas existentes."
          }
        ],
        "check": [
          {
            "id": "u7-act2-q1",
            "prompt": {
              "en": "What is the minimum duration for the presentation?",
              "pt": "Qual é a duração mínima da apresentação?"
            },
            "options": [
              "1 minute.",
              "3 minutes.",
              "5 minutes."
            ],
            "answer": "3 minutes.",
            "explanation": {
              "en": "The instruction specifies 'Prepare a 3-minute presentation'.",
              "pt": "A instrução especifica 'Prepare uma apresentação de 3 minutos'."
            }
          },
          {
            "id": "u7-act2-q2",
            "prompt": {
              "en": "Besides inversion, what else must be included in the presentation?",
              "pt": "Além da inversão, o que mais deve ser incluído na apresentação?"
            },
            "options": [
              "Only informal expressions.",
              "A formal summary expression and at least 5 new vocabulary terms.",
              "A detailed historical timeline."
            ],
            "answer": "A formal summary expression and at least 5 new vocabulary terms.",
            "explanation": {
              "en": "The instruction states to 'conclude your presentation with a formal summary expression' and 'incorporate at least 5 new vocabulary terms'.",
              "pt": "A instrução afirma para 'concluir sua apresentação com uma expressão de resumo formal' e 'incorporar pelo menos 5 novos termos de vocabulário'."
            }
          }
        ]
      },
      {
        "id": "u7-comm-act3",
        "title": {
          "en": "Role-play a Panel Discussion Summary",
          "pt": "Encenar um Resumo de Painel de Discussão"
        },
        "instruction": {
          "en": "Imagine you are a moderator summarizing a panel discussion on 'Generational Perspectives on Societal Norms'. In groups of three, take turns role-playing the moderator, using at least three formal summarizing expressions and two instances of inversion to present the key points and conclusions from the panel. The other group members can act as 'panelists' whose views are being summarized.",
          "pt": "Imagine que você é um moderador resumindo um painel de discussão sobre 'Perspectivas Geracionais sobre Normas Sociais'. Em grupos de três, revezem-se no papel de moderador, usando pelo menos três expressões formais de resumo e duas ocorrências de inversão para apresentar os pontos-chave e as conclusões do painel. Os outros membros do grupo podem atuar como 'panelistas' cujas opiniões estão sendo resumidas."
        },
        "phrases": [
          {
            "en": "In essence, the key takeaway is that cross-generational dialogue is vital.",
            "pt": "Em essência, a principal conclusão é que o diálogo intergeracional é vital."
          },
          {
            "en": "To conclude, only by valuing all perspectives can we build stronger communities.",
            "pt": "Para concluir, somente valorizando todas as perspectivas podemos construir comunidades mais fortes."
          },
          {
            "en": "Hardly ever do we see such a unified front on cultural values.",
            "pt": "Quase nunca vemos uma frente tão unificada em relação aos valores culturais."
          }
        ],
        "check": [
          {
            "id": "u7-act3-q1",
            "prompt": {
              "en": "What is the role of the person summarizing the discussion?",
              "pt": "Qual é o papel da pessoa que resume a discussão?"
            },
            "options": [
              "A panelist.",
              "A moderator.",
              "An audience member."
            ],
            "answer": "A moderator.",
            "explanation": {
              "en": "The instruction clearly states, 'take turns role-playing the moderator'.",
              "pt": "A instrução afirma claramente, 'revezem-se no papel de moderador'."
            }
          },
          {
            "id": "u7-act3-q2",
            "prompt": {
              "en": "How many formal summarizing expressions must be used?",
              "pt": "Quantas expressões formais de resumo devem ser usadas?"
            },
            "options": [
              "Exactly one.",
              "At least two.",
              "At least three."
            ],
            "answer": "At least three.",
            "explanation": {
              "en": "The instruction requires 'using at least three formal summarizing expressions'.",
              "pt": "A instrução exige 'usando pelo menos três expressões formais de resumo'."
            }
          }
        ]
      }
    ],
    "challenge": {
      "id": "u7-comm-challenge",
      "title": {
        "en": "Write a Formal Summary for an NGO Report",
        "pt": "Escrever um Resumo Formal para um Relatório de ONG"
      },
      "instruction": {
        "en": "You are tasked with writing a 250-word formal summary for an NGO report titled 'Bridging Generational Gaps in Urban Communities'. Your summary must include: at least two instances of inversion for emphasis, at least seven vocabulary words from this unit, and three formal summarizing expressions. Focus on how different generations perceive and uphold community values and cultural heritage.",
        "pt": "Você tem a tarefa de escrever um resumo formal de 250 palavras para um relatório de uma ONG intitulado 'Preenchendo Lacunas Geracionais em Comunidades Urbanas'. Seu resumo deve incluir: pelo menos duas ocorrências de inversão para ênfase, pelo menos sete palavras de vocabulário desta unidade e três expressões formais de resumo. Concentre-se em como diferentes gerações percebem e mantêm os valores comunitários e o patrimônio cultural."
      },
      "phrases": [
        {
          "en": "Never has understanding intergenerational dynamics been more crucial.",
          "pt": "Nunca foi tão crucial compreender as dinâmicas intergeracionais."
        },
        {
          "en": "All things considered, collaborative initiatives are essential.",
          "pt": "Considerando tudo, as iniciativas colaborativas são essenciais."
        },
        {
          "en": "Not only do traditions evolve, but also the societal norms that govern them.",
          "pt": "Não só as tradições evoluem, mas também as normas sociais que as governam."
        }
      ],
      "check": [
        {
          "id": "u7-challenge-q1",
          "prompt": {
            "en": "What is the maximum word count for the summary?",
            "pt": "Qual é o número máximo de palavras para o resumo?"
          },
          "options": [
            "100 words.",
            "250 words.",
            "500 words."
          ],
          "answer": "250 words.",
          "explanation": {
            "en": "The instruction specifies 'a 250-word formal summary'.",
            "pt": "A instrução especifica 'um resumo formal de 250 palavras'."
          }
        },
        {
          "id": "u7-challenge-q2",
          "prompt": {
            "en": "How many vocabulary words from this unit must be used in the summary?",
            "pt": "Quantas palavras do vocabulário desta unidade devem ser usadas no resumo?"
          },
          "options": [
            "At least five.",
            "At least seven.",
            "Exactly ten."
          ],
          "answer": "At least seven.",
          "explanation": {
            "en": "The instruction states to include 'at least seven vocabulary words from this unit'.",
            "pt": "A instrução afirma para incluir 'pelo menos sete palavras de vocabulário desta unidade'."
          }
        }
      ]
    },
    "lessonReview": {
      "summary": {
        "en": "In Unit 7, we explored the rich tapestry of culture and society, expanding our vocabulary to discuss tradition, diversity, and community values. We also mastered inversion for emphasis, a powerful tool for formal and literary language, and practiced formal summarizing techniques.",
        "pt": "Na Unidade 7, exploramos a rica tapeçaria da cultura e sociedade, expandindo nosso vocabulário para discutir tradição, diversidade e valores comunitários. Também dominamos a inversão para ênfase, uma ferramenta poderosa para linguagem formal e literária, e praticamos técnicas formais de resumo."
      },
      "canDo": [
        {
          "en": "Discuss cultural phenomena and societal structures using specialized vocabulary.",
          "pt": "Discutir fenômenos culturais e estruturas sociais usando vocabulário especializado."
        },
        {
          "en": "Apply inversion for emphasis to create more formal and impactful statements.",
          "pt": "Aplicar a inversão para ênfase para criar declarações mais formais e impactantes."
        },
        {
          "en": "Formally summarize complex information using appropriate expressions.",
          "pt": "Resumir formalmente informações complexas usando expressões apropriadas."
        }
      ],
      "next": {
        "en": "Unit 8 will delve into 'Global Challenges' and explore advanced uses of passive voice.",
        "pt": "A Unidade 8 aprofundará em 'Desafios Globais' e explorará usos avançados da voz passiva."
      }
    }
  }
},
{
  "code": "UPPER-INTERMEDIATE-U08",
  "number": 8,
  "title": "Education — Idiomatic expressions",
  "titlePt": "Educação — Expressões idiomáticas",
  "cefr": "B2",
  "objective": {
    "en": "To teach vocabulary related to 'education' and idiomatic expressions for describing challenges and effort in a contextualized manner.",
    "pt": "Ensinar vocabulário de 'education' e expressões idiomáticas para descrever desafios e esforço de forma contextualizada."
  },
  "communicationGoal": {
    "en": "Students will be able to use 'expressing nuance' and education vocabulary to communicate in real-life situations.",
    "pt": "O aluno será capaz de usar 'expressing nuance' e o vocabulário de education para se comunicar em situações reais."
  },
  "prerequisites": {
    "en": "Grammar: Inversion for emphasis in formal and literary language. Vocabulary: Culture Society.",
    "pt": "Estrutura: Inversion for emphasis in formal and literary language. Vocabulário: Culture Society."
  },
  "newContent": {
    "en": "Grammar: Idiomatic expressions for describing challenges and effort. Vocabulary: Education (10 lexical items). Expressions: Expressing Nuance.",
    "pt": "Grammar: Idiomatic expressions for describing challenges and effort. Vocabulário: Education (10 itens lexicais). Expressions: Expressing Nuance."
  },
  "reviewContent": {
    "en": "Spiral review: Advanced collocations for professional and academic contexts (Unit 1).",
    "pt": "Revisão em espiral: Advanced collocations for professional and academic contexts (Unit 1)."
  },
  "discover": {
    "id": "UPPER-INTERMEDIATE-U08-DISCOVER",
    "warmUp": {
      "prompt": {
        "en": "Look at the images. What do they tell you about education systems around the world? What challenges might students face?",
        "pt": "Observe as imagens. O que elas revelam sobre os sistemas educacionais ao redor do mundo? Que desafios os alunos podem enfrentar?"
      },
      "phrases": [
        {
          "en": "Education is the most powerful weapon which you can use to change the world.",
          "pt": "A educação é a arma mais poderosa que você pode usar para mudar o mundo."
        },
        {
          "en": "The roots of education are bitter, but the fruit is sweet.",
          "pt": "As raízes da educação são amargas, mas os frutos são doces."
        }
      ]
    },
    "context": {
      "situation": {
        "en": "Sarah, a university student, is talking to her mentor, Dr. Evans, about her final year project. She's feeling overwhelmed by the demanding workload and complex research.",
        "pt": "Sarah, uma estudante universitária, está conversando com sua mentora, a Dra. Evans, sobre seu projeto de final de ano. Ela está se sentindo sobrecarregada pela carga de trabalho exigente e pela pesquisa complexa."
      },
      "dialogue": [
        {
          "who": "Sarah",
          "en": "Dr. Evans, I'm somewhat hesitant about my project's progress. It feels like an uphill battle.",
          "pt": "Dra. Evans, estou um pouco hesitante em relação ao progresso do meu projeto. Parece uma batalha difícil."
        },
        {
          "who": "Dr. Evans",
          "en": "I understand, Sarah. Large projects often feel that way. What's the main issue?",
          "pt": "Eu entendo, Sarah. Projetos grandes frequentemente dão essa sensação. Qual é o principal problema?"
        },
        {
          "who": "Sarah",
          "en": "Well, there's more to it than just the research. The sheer volume of reading and the challenging assessment criteria are weighing on me.",
          "pt": "Bem, há mais do que apenas a pesquisa. O volume de leitura e os critérios de avaliação desafiadores estão me pesando."
        },
        {
          "who": "Dr. Evans",
          "en": "It sounds like it's a bit more complicated than it seems. Are you keeping up with your other assignments and lectures?",
          "pt": "Parece que é um pouco mais complicado do que parece. Você está conseguindo acompanhar suas outras tarefas e aulas?"
        },
        {
          "who": "Sarah",
          "en": "I'm trying, but balancing everything is tough. I feel like I need to go the extra mile just to stay afloat.",
          "pt": "Estou tentando, mas equilibrar tudo é difícil. Sinto que preciso me esforçar ao máximo apenas para me manter em dia."
        },
        {
          "who": "Dr. Evans",
          "en": "Let's break it down. Perhaps we can find ways to make this feel less daunting. Remember, this degree is a significant qualification.",
          "pt": "Vamos analisar isso. Talvez possamos encontrar maneiras de tornar isso menos assustador. Lembre-se, este diploma é uma qualificação significativa."
        }
      ]
    },
    "vocabulary": [
      {
        "term": "curriculum",
        "pt": "currículo (acadêmico)",
        "ipa": "/kəˈrɪkjʊləm/",
        "definition": "The subjects comprising a course of study in a school or college.",
        "example": "The new university curriculum includes more interdisciplinary studies.",
        "examplePt": "O novo currículo universitário inclui mais estudos interdisciplinares."
      },
      {
        "term": "assignment",
        "pt": "tarefa, trabalho",
        "ipa": "/əˈsaɪnmənt/",
        "definition": "A task or piece of work allocated to someone as part of a job or course of study.",
        "example": "Students must submit their literature assignment by Friday.",
        "examplePt": "Os alunos devem entregar seu trabalho de literatura até sexta-feira."
      },
      {
        "term": "lecture",
        "pt": "aula (expositiva), palestra",
        "ipa": "/ˈlɛktʃər/",
        "definition": "An educational talk to an audience, especially one given by a university or college teacher.",
        "example": "Professor Davis delivered an insightful lecture on quantum physics.",
        "examplePt": "O Professor Davis proferiu uma palestra perspicaz sobre física quântica."
      },
      {
        "term": "research",
        "pt": "pesquisa",
        "ipa": "/rɪˈsɜːrtʃ/, /ˈriːsɜːrtʃ/",
        "definition": "The systematic investigation into and study of materials and sources in order to establish facts and reach new conclusions.",
        "example": "Her doctoral research focuses on sustainable energy solutions.",
        "examplePt": "Sua pesquisa de doutorado foca em soluções de energia sustentável."
      },
      {
        "term": "degree",
        "pt": "diploma, graduação",
        "ipa": "/dɪˈɡriː/",
        "definition": "An academic rank conferred by universities and colleges as an official recognition of the completion of studies.",
        "example": "He is pursuing a master's degree in engineering.",
        "examplePt": "Ele está buscando um mestrado em engenharia."
      },
      {
        "term": "scholarship",
        "pt": "bolsa de estudos",
        "ipa": "/ˈskɒlərʃɪp/",
        "definition": "Academic study or achievement; or a grant or payment made to support a student's education, awarded on the basis of academic or other achievement.",
        "example": "She received a full scholarship to study abroad.",
        "examplePt": "Ela recebeu uma bolsa de estudos integral para estudar no exterior."
      },
      {
        "term": "assessment",
        "pt": "avaliação",
        "ipa": "/əˈsɛsmənt/",
        "definition": "The evaluation or estimation of the nature, quality, or ability of someone or something.",
        "example": "The final assessment included both written exams and practical tasks.",
        "examplePt": "A avaliação final incluiu tanto exames escritos quanto tarefas práticas."
      },
      {
        "term": "skill",
        "pt": "habilidade, destreza",
        "ipa": "/skɪl/",
        "definition": "The ability to do something well; expertise.",
        "example": "Effective communication is a crucial skill for any profession.",
        "examplePt": "A comunicação eficaz é uma habilidade crucial para qualquer profissão."
      },
      {
        "term": "qualification",
        "pt": "qualificação, certificação",
        "ipa": "/ˌkwɒlɪfɪˈkeɪʃən/",
        "definition": "An official record showing that you have successfully finished a course of study or passed an exam.",
        "example": "Her teaching qualification allowed her to work in primary schools.",
        "examplePt": "Sua qualificação de ensino permitiu que ela trabalhasse em escolas primárias."
      },
      {
        "term": "mentor",
        "pt": "mentor",
        "ipa": "/ˈmɛntɔːr/",
        "definition": "An experienced and trusted adviser.",
        "example": "My mentor provided invaluable guidance throughout my academic journey.",
        "examplePt": "Meu mentor forneceu orientação inestimável ao longo da minha jornada acadêmica."
      }
    ],
    "expressions": [
      {
        "en": "I'm somewhat hesitant about...",
        "pt": "Estou um pouco hesitante sobre..."
      },
      {
        "en": "There's more to it than that.",
        "pt": "Há mais coisas envolvidas do que isso."
      },
      {
        "en": "It's a bit more complicated than it seems.",
        "pt": "É um pouco mais complicado do que parece."
      }
    ],
    "grammar": [
      {
        "title": {
          "en": "Idiomatic expressions for describing challenges and effort",
          "pt": "Expressões idiomáticas para descrever desafios e esforço"
        },
        "examples": [
          {
            "en": "After hours of negotiation, closing the deal was an uphill battle.",
            "pt": "Depois de horas de negociação, fechar o negócio foi uma batalha árdua."
          },
          {
            "en": "To meet the deadline, we had to go the extra mile and work late nights.",
            "pt": "Para cumprir o prazo, tivemos que nos esforçar ao máximo e trabalhar até tarde da noite."
          },
          {
            "en": "Learning a new language can be a steep learning curve at first.",
            "pt": "Aprender uma nova língua pode ser uma curva de aprendizado íngreme no início."
          }
        ],
        "rule": {
          "en": "Idiomatic expressions related to challenges and effort are phrases whose meaning cannot be deduced from the literal meanings of their individual words. They are commonly used to describe difficulties, hard work, perseverance, or demanding situations. These expressions add color and conciseness to language.",
          "pt": "Expressões idiomáticas relacionadas a desafios e esforço são frases cujo significado não pode ser deduzido dos significados literais de suas palavras individuais. Elas são comumente usadas para descrever dificuldades, trabalho árduo, perseverança ou situações exigentes. Essas expressões adicionam cor e concisão à linguagem."
        },
        "mistakes": [
          {
            "en": "Incorrect: He is taking the extra mile to finish the report. (Correct: He is going the extra mile...)",
            "pt": "Incorreto: Ele está pegando o milha extra para terminar o relatório. (Correto: Ele está indo a milha extra...)"
          },
          {
            "en": "Incorrect: It was an up mountain battle. (Correct: It was an uphill battle.)",
            "pt": "Incorreto: Foi uma batalha de montanha acima. (Correto: Foi uma batalha árdua/subida.)"
          }
        ]
      }
    ],
    "controlledPractice": [
      {
        "id": "u8dp-cp1",
        "prompt": {
          "en": "Which idiomatic expression means to make a special additional effort?",
          "pt": "Qual expressão idiomática significa fazer um esforço adicional especial?"
        },
        "options": [
          "a steep learning curve",
          "an uphill battle",
          "go the extra mile"
        ],
        "answer": "go the extra mile",
        "explanation": {
          "en": "'Go the extra mile' means to make a special additional effort, often more than what is expected.",
          "pt": "'Go the extra mile' significa fazer um esforço adicional especial, muitas vezes mais do que o esperado."
        }
      },
      {
        "id": "u8dp-cp2",
        "prompt": {
          "en": "If a task is very difficult and requires a lot of struggle, you could describe it as:",
          "pt": "Se uma tarefa é muito difícil e exige muita luta, você poderia descrevê-la como:"
        },
        "options": [
          "a walk in the park",
          "an uphill battle",
          "a piece of cake"
        ],
        "answer": "an uphill battle",
        "explanation": {
          "en": "'An uphill battle' is an idiom used to describe something that is very difficult to achieve because of obstacles and opposition.",
          "pt": "'An uphill battle' é uma expressão idiomática usada para descrever algo que é muito difícil de alcançar devido a obstáculos e oposição."
        }
      },
      {
        "id": "u8dp-cp3",
        "prompt": {
          "en": "Choose the correct expression to complete the sentence: 'Learning to code felt like ______ at first, but I'm getting the hang of it.'",
          "pt": "Escolha a expressão correta para completar a frase: 'Aprender a programar parecia ______ no início, mas estou pegando o jeito.'"
        },
        "options": [
          "a steep learning curve",
          "a smooth ride",
          "a flat path"
        ],
        "answer": "a steep learning curve",
        "explanation": {
          "en": "'A steep learning curve' describes a situation where a lot has to be learned in a short period of time, making it challenging initially.",
          "pt": "'A steep learning curve' descreve uma situação onde muito precisa ser aprendido em um curto período de tempo, tornando-o desafiador inicialmente."
        }
      },
      {
        "id": "u8dp-cp4",
        "prompt": {
          "en": "Which of the following describes a situation that is more complicated than it initially appears?",
          "pt": "Qual das seguintes frases descreve uma situação que é mais complicada do que aparenta inicialmente?"
        },
        "options": [
          "It's a straightforward matter.",
          "There's more to it than that.",
          "It's as simple as that."
        ],
        "answer": "There's more to it than that.",
        "explanation": {
          "en": "'There's more to it than that' indicates that a situation or issue is deeper or more complex than it might seem on the surface.",
          "pt": "'There's more to it than that' indica que uma situação ou problema é mais profundo ou complexo do que pode parecer à primeira vista."
        }
      }
    ],
    "input": {
      "kind": "listening",
      "title": {
        "en": "University Support Session",
        "pt": "Sessão de Apoio Universitário"
      },
      "lines": [
        {
          "en": "Welcome, students. Today we're discussing common academic challenges. Many of you are navigating complex curricula and demanding assessments.",
          "pt": "Bem-vindos, alunos. Hoje vamos discutir desafios acadêmicos comuns. Muitos de vocês estão navegando por currículos complexos e avaliações exigentes."
        },
        {
          "en": "It often feels like an uphill battle, especially when you're balancing multiple assignments and preparing for crucial lectures.",
          "pt": "Muitas vezes parece uma batalha árdua, especialmente quando você está equilibrando múltiplas tarefas e se preparando para palestras cruciais."
        },
        {
          "en": "Remember, seeking a degree is a significant commitment. We expect you to go the extra mile in your research.",
          "pt": "Lembrem-se, buscar um diploma é um compromisso significativo. Esperamos que vocês se esforcem ao máximo em suas pesquisas."
        },
        {
          "en": "However, if you're somewhat hesitant about your progress, know that there's support. We have mentors and resources to help.",
          "pt": "No entanto, se você está um pouco hesitante sobre seu progresso, saiba que há apoio. Temos mentores e recursos para ajudar."
        },
        {
          "en": "It's a bit more complicated than it seems to navigate university life alone, so don't hesitate to reach out.",
          "pt": "É um pouco mais complicado do que parece navegar pela vida universitária sozinho, então não hesite em procurar ajuda."
        }
      ],
      "questions": [
        {
          "id": "u8dp-iq1",
          "prompt": {
            "en": "What is the main topic of the support session?",
            "pt": "Qual é o tópico principal da sessão de apoio?"
          },
          "options": [
            "University social events",
            "Common academic challenges",
            "Job placement after graduation"
          ],
          "answer": "Common academic challenges",
          "explanation": {
            "en": "The speaker explicitly states, 'Today we're discussing common academic challenges.'",
            "pt": "O orador afirma explicitamente: 'Hoje estamos discutindo desafios acadêmicos comuns.'"
          }
        },
        {
          "id": "u8dp-iq2",
          "prompt": {
            "en": "According to the speaker, what does pursuing a degree require?",
            "pt": "De acordo com o orador, o que a busca por um diploma exige?"
          },
          "options": [
            "Minimal effort",
            "A significant commitment",
            "Only attendance at lectures"
          ],
          "answer": "A significant commitment",
          "explanation": {
            "en": "The speaker says, 'Remember, seeking a degree is a significant commitment.'",
            "pt": "O orador diz: 'Lembrem-se, buscar um diploma é um compromisso significativo.'"
          }
        },
        {
          "id": "u8dp-iq3",
          "prompt": {
            "en": "What advice does the speaker give to students who are hesitant about their progress?",
            "pt": "Que conselho o orador dá aos alunos que estão hesitantes em relação ao seu progresso?"
          },
          "options": [
            "To give up if it's too hard",
            "To ignore their feelings",
            "To seek support from mentors and resources"
          ],
          "answer": "To seek support from mentors and resources",
          "explanation": {
            "en": "The speaker advises, 'if you're somewhat hesitant about your progress, know that there's support. We have mentors and resources to help.'",
            "pt": "O orador aconselha: 'se você está um pouco hesitante sobre seu progresso, saiba que há apoio. Temos mentores e recursos para ajudar.'"
          }
        }
      ]
    },
    "quickCheck": [
      {
        "id": "u8dp-qc1",
        "prompt": {
          "en": "What is the meaning of 'assignment' in an academic context?",
          "pt": "Qual é o significado de 'assignment' em um contexto acadêmico?"
        },
        "options": [
          "A financial payment",
          "A task or piece of work given to students",
          "A scheduled meeting"
        ],
        "answer": "A task or piece of work given to students",
        "explanation": {
          "en": "An assignment is a specific task or piece of work given to a student as part of their studies.",
          "pt": "Um 'assignment' é uma tarefa ou trabalho específico dado a um aluno como parte de seus estudos."
        }
      },
      {
        "id": "u8dp-qc2",
        "prompt": {
          "en": "Which expression would you use to suggest that an issue is not as simple as it initially appears?",
          "pt": "Qual expressão você usaria para sugerir que uma questão não é tão simples quanto parece inicialmente?"
        },
        "options": [
          "It's crystal clear.",
          "There's more to it than that.",
          "It's an open and shut case."
        ],
        "answer": "There's more to it than that.",
        "explanation": {
          "en": "'There's more to it than that' is used to imply that a situation has hidden complexities.",
          "pt": "'There's more to it than that' é usada para implicar que uma situação tem complexidades ocultas."
        }
      },
      {
        "id": "u8dp-qc3",
        "prompt": {
          "en": "Identify the idiom for extreme effort: 'She had to _____ to finish her thesis on time.'",
          "pt": "Identifique o idiomatismo para esforço extremo: 'Ela teve que _____ para terminar sua tese a tempo.'"
        },
        "options": [
          "cut corners",
          "go the extra mile",
          "take it easy"
        ],
        "answer": "go the extra mile",
        "explanation": {
          "en": "'Go the extra mile' means to put in a lot of additional effort.",
          "pt": "'Go the extra mile' significa fazer um grande esforço adicional."
        }
      },
      {
        "id": "u8dp-qc4",
        "prompt": {
          "en": "What does a 'mentor' typically provide?",
          "pt": "O que um 'mentor' geralmente oferece?"
        },
        "options": [
          "Financial loans",
          "Expert advice and guidance",
          "Daily assignments"
        ],
        "answer": "Expert advice and guidance",
        "explanation": {
          "en": "A mentor is an experienced and trusted adviser who provides guidance.",
          "pt": "Um mentor é um conselheiro experiente e confiável que fornece orientação."
        }
      }
    ]
  },
  "communicate": {
    "id": "UPPER-INTERMEDIATE-U08-COMMUNICATE",
    "review": [
      {
        "en": "Review vocabulary for 'education': curriculum, assignment, lecture, research, degree, scholarship, assessment, skill, qualification, mentor.",
        "pt": "Revise o vocabulário para 'education': curriculum, assignment, lecture, research, degree, scholarship, assessment, skill, qualification, mentor."
      },
      {
        "en": "Recall expressions for 'expressing nuance': I'm somewhat hesitant about... / There's more to it than that. / It's a bit more complicated than it seems.",
        "pt": "Lembre-se das expressões para 'expressing nuance': I'm somewhat hesitant about... / There's more to it than that. / It's a bit more complicated than it seems."
      },
      {
        "en": "Remember idiomatic expressions for describing challenges and effort: an uphill battle, go the extra mile, a steep learning curve.",
        "pt": "Lembre-se das expressões idiomáticas para descrever desafios e esforço: an uphill battle, go the extra mile, a steep learning curve."
      }
    ],
    "activities": [
      {
        "id": "u8dc-act1",
        "title": {
          "en": "Give a Nuanced Opinion on Educational Reform",
          "pt": "Dê uma Opinião Nuances sobre a Reforma Educacional"
        },
        "instruction": {
          "en": "Your country is debating a major reform to its education curriculum, including changes to assessment methods and degree requirements. Prepare a short speech (2-3 minutes) presenting a nuanced opinion on these reforms, using at least three vocabulary items related to education and two expressions for 'expressing nuance'. Consider both the potential benefits and drawbacks.",
          "pt": "Seu país está debatendo uma grande reforma em seu currículo educacional, incluindo mudanças nos métodos de avaliação e nos requisitos de diploma. Prepare um discurso curto (2-3 minutos) apresentando uma opinião com nuances sobre essas reformas, usando pelo menos três itens de vocabulário relacionados à educação e duas expressões para 'expressar nuances'. Considere tanto os benefícios potenciais quanto as desvantagens."
        },
        "phrases": [
          {
            "en": "I'm somewhat hesitant about the proposed changes to the curriculum...",
            "pt": "Estou um pouco hesitante em relação às mudanças propostas no currículo..."
          },
          {
            "en": "While the new assessment might seem beneficial, there's more to it than that for student well-being.",
            "pt": "Embora a nova avaliação possa parecer benéfica, há mais a considerar para o bem-estar dos alunos."
          },
          {
            "en": "Achieving a degree with these new qualifications might be an uphill battle for some.",
            "pt": "Conseguir um diploma com essas novas qualificações pode ser uma batalha árdua para alguns."
          }
        ],
        "check": [
          {
            "id": "u8dc-act1-q1",
            "prompt": {
              "en": "Did the student present a balanced opinion, acknowledging both pros and cons?",
              "pt": "O aluno apresentou uma opinião equilibrada, reconhecendo prós e contras?"
            },
            "options": [
              "Yes, thoroughly balanced.",
              "Partially, with more focus on one side.",
              "No, it was one-sided."
            ],
            "answer": "Yes, thoroughly balanced.",
            "explanation": {
              "en": "A nuanced opinion requires considering multiple perspectives, not just one.",
              "pt": "Uma opinião com nuances exige considerar múltiplas perspectivas, não apenas uma."
            }
          },
          {
            "id": "u8dc-act1-q2",
            "prompt": {
              "en": "Were at least two expressions for 'expressing nuance' used effectively?",
              "pt": "Pelo menos duas expressões para 'expressar nuances' foram usadas eficazmente?"
            },
            "options": [
              "Yes, clearly and appropriately.",
              "One was used effectively, the other less so.",
              "No, they were not used."
            ],
            "answer": "Yes, clearly and appropriately.",
            "explanation": {
              "en": "The goal is to integrate these expressions naturally into the speech.",
              "pt": "O objetivo é integrar essas expressões naturalmente no discurso."
            }
          }
        ]
      },
      {
        "id": "u8dc-act2",
        "title": {
          "en": "Summarize a Complex Problem in Academia",
          "pt": "Resuma um Problema Complexo na Academia"
        },
        "instruction": {
          "en": "In groups of three, read a short article (provided by instructor) about a current challenge in higher education (e.g., funding, access, academic integrity). Discuss the article and then individually summarize the core problem in 4-5 sentences, using at least two idiomatic expressions for challenges/effort and two education vocabulary items. Be prepared to share your summary with the class.",
          "pt": "Em grupos de três, leia um artigo curto (fornecido pelo instrutor) sobre um desafio atual no ensino superior (por exemplo, financiamento, acesso, integridade acadêmica). Discuta o artigo e, em seguida, individualmente, resuma o problema central em 4-5 frases, usando pelo menos duas expressões idiomáticas para desafios/esforço e dois itens de vocabulário de educação. Prepare-se para compartilhar seu resumo com a turma."
        },
        "phrases": [
          {
            "en": "Addressing the issue of dwindling scholarship funds is proving to be an uphill battle.",
            "pt": "Abordar a questão da diminuição dos fundos de bolsas de estudo está se mostrando uma batalha árdua."
          },
          {
            "en": "To improve access to a quality degree, universities must go the extra mile to support disadvantaged students.",
            "pt": "Para melhorar o acesso a um diploma de qualidade, as universidades devem se esforçar ao máximo para apoiar alunos desfavorecidos."
          },
          {
            "en": "Adapting the curriculum to new industry skills presents a steep learning curve for many institutions.",
            "pt": "Adaptar o currículo às novas habilidades da indústria apresenta uma curva de aprendizado íngreme para muitas instituições."
          }
        ],
        "check": [
          {
            "id": "u8dc-act2-q1",
            "prompt": {
              "en": "Did the summary accurately capture the core problem of the article?",
              "pt": "O resumo capturou com precisão o problema central do artigo?"
            },
            "options": [
              "Yes, it was precise.",
              "Mostly, but some details were missed.",
              "No, it misunderstood the main point."
            ],
            "answer": "Yes, it was precise.",
            "explanation": {
              "en": "An effective summary condenses the main idea accurately.",
              "pt": "Um resumo eficaz condensa a ideia principal com precisão."
            }
          },
          {
            "id": "u8dc-act2-q2",
            "prompt": {
              "en": "Were at least two idiomatic expressions for challenges/effort used naturally?",
              "pt": "Pelo menos duas expressões idiomáticas para desafios/esforço foram usadas naturalmente?"
            },
            "options": [
              "Yes, well-integrated.",
              "Used, but felt forced.",
              "No, they were absent."
            ],
            "answer": "Yes, well-integrated.",
            "explanation": {
              "en": "The goal is to use the idioms in a way that sounds natural and enhances the message.",
              "pt": "O objetivo é usar os idiomatismos de forma que soe natural e melhore a mensagem."
            }
          }
        ]
      },
      {
        "id": "u8dc-act3",
        "title": {
          "en": "Reflect and Report Back on a Personal Academic Challenge",
          "pt": "Reflita e Relate um Desafio Acadêmico Pessoal"
        },
        "instruction": {
          "en": "Think about a significant academic challenge you have faced, or are currently facing. It could be related to an assignment, research, or a particular skill you needed to develop. In pairs, discuss your experience, using the vocabulary from this unit and the idiomatic expressions. Then, prepare to report back to the class on your partner's experience, reflecting on the nuances of their challenge and effort.",
          "pt": "Pense em um desafio acadêmico significativo que você enfrentou ou está enfrentando atualmente. Pode estar relacionado a uma tarefa, pesquisa ou uma habilidade específica que você precisava desenvolver. Em pares, discuta sua experiência, usando o vocabulário desta unidade e as expressões idiomáticas. Em seguida, prepare-se para relatar à turma a experiência de seu parceiro, refletindo sobre as nuances de seu desafio e esforço."
        },
        "phrases": [
          {
            "en": "My partner mentioned that completing their final research project felt like an uphill battle.",
            "pt": "Meu parceiro mencionou que completar seu projeto de pesquisa final parecia uma batalha árdua."
          },
          {
            "en": "They had to go the extra mile to master the skill required for that assignment.",
            "pt": "Eles tiveram que se esforçar ao máximo para dominar a habilidade necessária para aquela tarefa."
          },
          {
            "en": "They also felt that there was more to their struggle than just academic difficulty; personal issues complicated it.",
            "pt": "Eles também sentiram que havia mais na sua luta do que apenas dificuldade acadêmica; questões pessoais a complicaram."
          }
        ],
        "check": [
          {
            "id": "u8dc-act3-q1",
            "prompt": {
              "en": "Did the report accurately summarize the partner's challenge and effort?",
              "pt": "O relatório resumiu com precisão o desafio e o esforço do parceiro?"
            },
            "options": [
              "Yes, with good detail.",
              "Partially, some aspects were missed.",
              "No, it was inaccurate."
            ],
            "answer": "Yes, with good detail.",
            "explanation": {
              "en": "The report should clearly convey the essence of the partner's experience.",
              "pt": "O relatório deve transmitir claramente a essência da experiência do parceiro."
            }
          },
          {
            "id": "u8dc-act3-q2",
            "prompt": {
              "en": "Were at least three vocabulary items from the unit and one idiomatic expression used?",
              "pt": "Pelo menos três itens de vocabulário da unidade e uma expressão idiomática foram usados?"
            },
            "options": [
              "Yes, all required elements were present.",
              "Some elements were missing.",
              "No, insufficient use of target language."
            ],
            "answer": "Yes, all required elements were present.",
            "explanation": {
              "en": "The goal is to actively incorporate the new language from the unit.",
              "pt": "O objetivo é incorporar ativamente a nova linguagem da unidade."
            }
          }
        ]
      }
    ],
    "challenge": {
      "id": "u8dc-challenge",
      "title": {
        "en": "Advocating for a Student in a Scholarship Application",
        "pt": "Advogando por um Estudante em uma Candidatura a Bolsa de Estudos"
      },
      "instruction": {
        "en": "You are a mentor writing a letter of recommendation for a student applying for a highly competitive scholarship. The student has shown immense potential but has also faced significant personal and academic hurdles. Write a short paragraph (8-10 sentences) advocating for this student, acknowledging their challenges and effort while expressing nuance. Use at least five vocabulary items from the unit, two idiomatic expressions for challenges/effort, and two expressions for 'expressing nuance'. Focus on portraying a complete and empathetic picture.",
        "pt": "Você é um mentor escrevendo uma carta de recomendação para um estudante que está se candidatando a uma bolsa de estudos altamente competitiva. O estudante demonstrou imenso potencial, mas também enfrentou desafios pessoais e acadêmicos significativos. Escreva um parágrafo curto (8-10 frases) defendendo este estudante, reconhecendo seus desafios e esforço enquanto expressa nuances. Use pelo menos cinco itens de vocabulário da unidade, duas expressões idiomáticas para desafios/esforço e duas expressões para 'expressar nuances'. Concentre-se em retratar uma imagem completa e empática."
      },
      "phrases": [
        {
          "en": "I'm writing to recommend [Student's Name] for this prestigious scholarship, although I'm somewhat hesitant about conveying the full depth of their journey in a single letter.",
          "pt": "Estou escrevendo para recomendar [Nome do Aluno] para esta prestigiosa bolsa de estudos, embora esteja um pouco hesitante em transmitir toda a profundidade de sua jornada em uma única carta."
        },
        {
          "en": "Their pursuit of a degree has been an uphill battle due to personal circumstances, yet they have consistently gone the extra mile in their research and assignments.",
          "pt": "Sua busca por um diploma tem sido uma batalha árdua devido a circunstâncias pessoais, mas eles consistentemente se esforçaram ao máximo em suas pesquisas e tarefas."
        },
        {
          "en": "While their academic record is strong, there's more to it than just grades; their resilience in mastering complex skills is truly remarkable.",
          "pt": "Embora seu histórico acadêmico seja forte, há mais do que apenas notas; sua resiliência em dominar habilidades complexas é verdadeiramente notável."
        }
      ],
      "check": [
        {
          "id": "u8dc-challenge-q1",
          "prompt": {
            "en": "Did the letter effectively advocate for the student, highlighting both strengths and challenges with nuance?",
            "pt": "A carta defendeu eficazmente o aluno, destacando tanto os pontos fortes quanto os desafios com nuances?"
          },
          "options": [
            "Yes, a comprehensive and nuanced portrayal.",
            "Partially, it leaned too much on one aspect.",
            "No, it lacked nuance or failed to advocate."
          ],
          "answer": "Yes, a comprehensive and nuanced portrayal.",
          "explanation": {
            "en": "The goal is to create a balanced, persuasive recommendation that acknowledges complexities.",
            "pt": "O objetivo é criar uma recomendação equilibrada e persuasiva que reconheça as complexidades."
          }
        },
        {
          "id": "u8dc-challenge-q2",
          "prompt": {
            "en": "Were all required vocabulary items and expressions from the unit integrated naturally into the paragraph?",
            "pt": "Todos os itens de vocabulário e expressões exigidos da unidade foram integrados naturalmente no parágrafo?"
          },
          "options": [
            "Yes, all were present and used appropriately.",
            "Some were missing or used awkwardly.",
            "No, the required elements were largely absent."
          ],
          "answer": "Yes, all were present and used appropriately.",
          "explanation": {
            "en": "The task explicitly requires the use of a specific number of vocabulary and expressions for full credit.",
            "pt": "A tarefa exige explicitamente o uso de um número específico de vocabulário e expressões para crédito total."
          }
        }
      ]
    },
    "lessonReview": {
      "summary": {
        "en": "In this unit, we explored key vocabulary related to education, learned expressions for expressing nuance, and practiced using idiomatic expressions to describe challenges and effort. We applied these in discussions about academic reforms and personal challenges.",
        "pt": "Nesta unidade, exploramos vocabulário chave relacionado à educação, aprendemos expressões para 'expressar nuances' e praticamos o uso de expressões idiomáticas para descrever desafios e esforço. Aplicamos isso em discussões sobre reformas acadêmicas e desafios pessoais."
      },
      "canDo": [
        {
          "en": "Discuss education topics using specific vocabulary.",
          "pt": "Discutir tópicos de educação usando vocabulário específico."
        },
        {
          "en": "Express nuanced opinions and situations.",
          "pt": "Expressar opiniões e situações com nuances."
        },
        {
          "en": "Describe challenges and effort using idiomatic expressions.",
          "pt": "Descrever desafios e esforço usando expressões idiomáticas."
        }
      ],
      "next": {
        "en": "UPPER-INTERMEDIATE-U09: Focus on ethical dilemmas and advanced conditional structures.",
        "pt": "UPPER-INTERMEDIATE-U09: Foco em dilemas éticos e estruturas condicionais avançadas."
      }
    }
  }
},
{
  "code": "UPPER-INTERMEDIATE-U09",
  "number": 9,
  "title": "Relationships — Cleft sentences",
  "titlePt": "Relacionamentos — Frases Cleft",
  "cefr": "B2",
  "objective": {
    "en": "To teach about relationships and cleft sentences (it/what) for emphasis and focus in a contextualized manner.",
    "pt": "Ensinar relacionamentos e frases cleft (it/what) para ênfase e foco de forma contextualizada."
  },
  "communicationGoal": {
    "en": "The student will be able to use 'leadership teamwork' and relationship vocabulary to communicate in real situations.",
    "pt": "O aluno será capaz de usar 'liderança em equipe' e o vocabulário de relacionamentos para se comunicar em situações reais."
  },
  "prerequisites": {
    "en": "Structure: Idiomatic expressions for describing challenges and effort. Vocabulary: Education.",
    "pt": "Estrutura: Expressões idiomáticas para descrever desafios e esforço. Vocabulário: Educação."
  },
  "newContent": {
    "en": "Grammar: Cleft sentences (it/what) for emphasis and focus. Vocabulary: Relationships (10 lexical items). Expressions: Leadership Teamwork.",
    "pt": "Gramática: Frases cleft (it/what) para ênfase e foco. Vocabulário: Relacionamentos (10 itens lexicais). Expressões: Liderança em Equipe."
  },
  "reviewContent": {
    "en": "Spiral review: Mixed conditionals for combining different time references (Unit 2).",
    "pt": "Revisão em espiral: Condicionais mistas para combinar diferentes referências de tempo (Unidade 2)."
  },
  "discover": {
    "id": "UPPER-INTERMEDIATE-U09-DISCOVER",
    "warmUp": {
      "prompt": {
        "en": "Look at the images. What do they tell you about effective team collaboration and personal connections? How important are these aspects in both professional and personal life?",
        "pt": "Observe as imagens. O que elas dizem sobre colaboração eficaz em equipe e conexões pessoais? Qual a importância desses aspectos na vida profissional e pessoal?"
      },
      "phrases": [
        {
          "en": "Building strong relationships takes effort.",
          "pt": "Construir relacionamentos fortes exige esforço."
        },
        {
          "en": "Good teamwork relies on mutual understanding.",
          "pt": "Um bom trabalho em equipe depende de compreensão mútua."
        }
      ]
    },
    "context": {
      "situation": {
        "en": "Sarah and Mark are project managers at a tech company, discussing challenges with their new cross-functional team.",
        "pt": "Sarah e Mark são gerentes de projeto em uma empresa de tecnologia, discutindo desafios com sua nova equipe multifuncional."
      },
      "dialogue": [
        {
          "who": "Sarah",
          "en": "The new project launch is facing some hurdles. What we really need is better coordination between departments.",
          "pt": "O lançamento do novo projeto está enfrentando alguns obstáculos. O que nós realmente precisamos é de melhor coordenação entre os departamentos."
        },
        {
          "who": "Mark",
          "en": "I agree. It's the lack of clear communication that's causing most of the delays, not a lack of talent.",
          "pt": "Concordo. É a falta de comunicação clara que está causando a maioria dos atrasos, não a falta de talento."
        },
        {
          "who": "Sarah",
          "en": "Exactly. We need to foster more trust. It's mutual respect that forms the bedrock of any successful leadership teamwork.",
          "pt": "Exatamente. Precisamos promover mais confiança. É o respeito mútuo que forma a base de qualquer trabalho em equipe de liderança bem-sucedido."
        },
        {
          "who": "Mark",
          "en": "And we're not all on the same page regarding the project's priorities. Let's align on the next steps in our next meeting.",
          "pt": "E não estamos todos na mesma página em relação às prioridades do projeto. Vamos alinhar os próximos passos em nossa próxima reunião."
        },
        {
          "who": "Sarah",
          "en": "Good idea. I'll take the lead on drafting an updated communication plan to address these issues.",
          "pt": "Boa ideia. Vou assumir a liderança na elaboração de um plano de comunicação atualizado para resolver esses problemas."
        },
        {
          "who": "Mark",
          "en": "Perfect. What's crucial now is to rebuild that sense of shared commitment within the team.",
          "pt": "Perfeito. O que é crucial agora é reconstruir esse senso de compromisso compartilhado dentro da equipe."
        }
      ]
    },
    "vocabulary": [
      {
        "term": "trust",
        "pt": "confiança",
        "ipa": "/trʌst/",
        "definition": "Firm belief in the reliability, truth, ability, or strength of someone or something.",
        "example": "Building trust within a team takes time and consistent effort.",
        "examplePt": "Construir confiança em uma equipe leva tempo e esforço consistente."
      },
      {
        "term": "communication",
        "pt": "comunicação",
        "ipa": "/kəˌmjuːnɪˈkeɪʃən/",
        "definition": "The imparting or exchanging of information by speaking, writing, or using some other medium.",
        "example": "Effective communication is key to resolving conflicts.",
        "examplePt": "A comunicação eficaz é a chave para resolver conflitos."
      },
      {
        "term": "conflict",
        "pt": "conflito",
        "ipa": "/ˈkɒnflɪkt/",
        "definition": "A serious disagreement or argument, typically a protracted one.",
        "example": "They managed to resolve the conflict through open dialogue.",
        "examplePt": "Eles conseguiram resolver o conflito através de um diálogo aberto."
      },
      {
        "term": "support",
        "pt": "apoio",
        "ipa": "/səˈpɔːrt/",
        "definition": "To give assistance to, especially financially; enable to continue.",
        "example": "Mutual support among colleagues helps boost morale.",
        "examplePt": "O apoio mútuo entre colegas ajuda a aumentar o moral."
      },
      {
        "term": "commitment",
        "pt": "compromisso",
        "ipa": "/kəˈmɪtmənt/",
        "definition": "The state or quality of being dedicated to a cause, activity, etc.",
        "example": "Their commitment to the project was unwavering, even during difficulties.",
        "examplePt": "O compromisso deles com o projeto foi inabalável, mesmo durante as dificuldades."
      },
      {
        "term": "boundaries",
        "pt": "limites",
        "ipa": "/ˈbaʊndəriz/",
        "definition": "A line that marks the limits of an area; a dividing line.",
        "example": "Setting clear boundaries is important for healthy relationships.",
        "examplePt": "Estabelecer limites claros é importante para relacionamentos saudáveis."
      },
      {
        "term": "empathy",
        "pt": "empatia",
        "ipa": "/ˈɛmpəθi/",
        "definition": "The ability to understand and share the feelings of another.",
        "example": "Showing empathy can significantly improve team dynamics.",
        "examplePt": "Demonstrar empatia pode melhorar significativamente a dinâmica da equipe."
      },
      {
        "term": "connection",
        "pt": "conexão",
        "ipa": "/kəˈnɛkʃən/",
        "definition": "A relationship in which a person, thing, or idea is linked or associated with something else.",
        "example": "They felt a strong connection from their very first meeting.",
        "examplePt": "Eles sentiram uma forte conexão desde o primeiro encontro."
      },
      {
        "term": "compromise",
        "pt": "acordo/compromisso",
        "ipa": "/ˈkɒmprəmaɪz/",
        "definition": "An agreement or a settlement of a dispute that is reached by each side making concessions.",
        "example": "Finding a compromise was essential for the project to move forward.",
        "examplePt": "Encontrar um acordo foi essencial para que o projeto avançasse."
      },
      {
        "term": "respect",
        "pt": "respeito",
        "ipa": "/rɪˈspɛkt/",
        "definition": "A feeling of deep admiration for someone or something elicited by their abilities, qualities, or achievements.",
        "example": "Mutual respect is fundamental for any productive partnership.",
        "examplePt": "O respeito mútuo é fundamental para qualquer parceria produtiva."
      }
    ],
    "expressions": [
      {
        "en": "Let's align on the next steps.",
        "pt": "Vamos nos alinhar sobre os próximos passos."
      },
      {
        "en": "I'll take the lead on this.",
        "pt": "Eu vou assumir a liderança nisso."
      },
      {
        "en": "We're all on the same page.",
        "pt": "Estamos todos na mesma página."
      }
    ],
    "grammar": [
      {
        "title": {
          "en": "Cleft Sentences (It/What) for Emphasis and Focus",
          "pt": "Frases Cleft (It/What) para Ênfase e Foco"
        },
        "examples": [
          {
            "en": "What really matters is consistency.",
            "pt": "O que realmente importa é a consistência."
          },
          {
            "en": "It was the feedback that changed my approach.",
            "pt": "Foi o feedback que mudou minha abordagem."
          },
          {
            "en": "It's building strong relationships that takes the most effort.",
            "pt": "É construir relacionamentos fortes que exige o maior esforço."
          }
        ],
        "rule": {
          "en": "Cleft sentences are used to emphasize a particular part of a sentence, making it the focus of attention. We often use 'It + be + emphasized part + that/who/which clause' or 'What + clause + be + emphasized part'. 'It' cleft sentences typically emphasize a noun phrase, while 'What' cleft sentences emphasize the action or the result of an action, focusing on 'what' happened or 'what' is important.",
          "pt": "Frases cleft são usadas para enfatizar uma parte específica de uma frase, tornando-a o foco da atenção. Frequentemente usamos 'It + be + parte enfatizada + that/who/which clause' ou 'What + clause + be + parte enfatizada'. Frases cleft com 'It' geralmente enfatizam um substantivo ou frase nominal, enquanto frases cleft com 'What' enfatizam a ação ou o resultado de uma ação, focando no 'que' aconteceu ou no 'que' é importante."
        },
        "mistakes": [
          {
            "en": "Incorrect: Is the team communication that is the main issue. (Missing 'It')",
            "pt": "Incorreto: É a comunicação da equipe que é o principal problema. (Faltando 'It')"
          },
          {
            "en": "Incorrect: What the problem is, is lack of clarity. (Redundant 'is')",
            "pt": "Incorreto: O que o problema é, é falta de clareza. (Redundância de 'is')"
          }
        ]
      }
    ],
    "controlledPractice": [
      {
        "id": "cleft-practice-1",
        "prompt": {
          "en": "Choose the correct cleft sentence to emphasize 'the lack of communication'.",
          "pt": "Escolha a frase cleft correta para enfatizar 'a falta de comunicação'."
        },
        "options": [
          "What is causing problems is the lack of communication.",
          "It's the lack of communication that is causing problems.",
          "The lack of communication, it is causing problems."
        ],
        "answer": "It's the lack of communication that is causing problems.",
        "explanation": {
          "en": "The structure 'It + be + emphasized part + that...' is used to emphasize a noun phrase. 'What is causing problems is the lack of communication' is also correct, but the prompt implies a single best option, and 'It' clefts are very common for noun emphasis.",
          "pt": "A estrutura 'It + be + parte enfatizada + that...' é usada para enfatizar uma frase nominal. 'What is causing problems is the lack of communication' também está correta, mas a instrução implica uma única melhor opção, e 'It' clefts são muito comuns para ênfase de substantivos."
        }
      },
      {
        "id": "cleft-practice-2",
        "prompt": {
          "en": "Which sentence correctly emphasizes 'mutual respect' as the foundation?",
          "pt": "Qual frase enfatiza corretamente 'respeito mútuo' como a base?"
        },
        "options": [
          "Mutual respect is what forms the foundation.",
          "What forms the foundation is mutual respect.",
          "It's mutual respect that forms the foundation."
        ],
        "answer": "It's mutual respect that forms the foundation.",
        "explanation": {
          "en": "Both 'What forms the foundation is mutual respect' and 'It's mutual respect that forms the foundation' are grammatically correct for emphasis. However, the 'It' cleft is often preferred when emphasizing a specific noun phrase (mutual respect) that is the subject of a verb.",
          "pt": "Ambas as frases 'What forms the foundation is mutual respect' e 'It's mutual respect that forms the foundation' estão gramaticalmente corretas para ênfase. No entanto, a cleft 'It' é frequentemente preferida ao enfatizar uma frase nominal específica (respeito mútuo) que é o sujeito de um verbo."
        }
      },
      {
        "id": "cleft-practice-3",
        "prompt": {
          "en": "Complete the cleft sentence: 'What ______ is strong leadership.'",
          "pt": "Complete a frase cleft: 'O que ______ é uma liderança forte.'"
        },
        "options": [
          "we really need",
          "it really needs",
          "there is really needed"
        ],
        "answer": "we really need",
        "explanation": {
          "en": "The 'What' cleft structure requires a clause following 'What' that expresses the idea, then 'is' and the emphasized noun phrase. 'What we really need' forms a complete clause.",
          "pt": "A estrutura da cleft com 'What' exige uma oração seguindo 'What' que expresse a ideia, depois 'is' e a frase nominal enfatizada. 'What we really need' forma uma oração completa."
        }
      },
      {
        "id": "cleft-practice-4",
        "prompt": {
          "en": "Rewrite the sentence to emphasize 'their commitment': 'Their commitment ensured the project's success.'",
          "pt": "Reescreva a frase para enfatizar 'o compromisso deles': 'O compromisso deles garantiu o sucesso do projeto.'"
        },
        "options": [
          "It was their commitment that ensured the project's success.",
          "What ensured the project's success was their commitment.",
          "Their commitment, it was what ensured the project's success."
        ],
        "answer": "It was their commitment that ensured the project's success.",
        "explanation": {
          "en": "To emphasize the subject 'their commitment', an 'It' cleft sentence is the most direct and natural option. 'What ensured...' also works, but 'It was...' is very common for emphasizing a subject.",
          "pt": "Para enfatizar o sujeito 'o compromisso deles', uma frase cleft com 'It' é a opção mais direta e natural. 'What ensured...' também funciona, mas 'It was...' é muito comum para enfatizar um sujeito."
        }
      }
    ],
    "input": {
      "kind": "reading",
      "title": {
        "en": "The Cornerstone of High-Performing Teams",
        "pt": "A Pedra Angular das Equipes de Alto Desempenho"
      },
      "lines": [
        {
          "en": "In today's fast-paced corporate world, forming high-performing teams is crucial. What often sets successful teams apart is not just individual brilliance, but the strength of their interpersonal relationships. It's the ability to cultivate trust and open communication that truly propels them forward.",
          "pt": "No mundo corporativo acelerado de hoje, formar equipes de alto desempenho é crucial. O que frequentemente distingue as equipes de sucesso não é apenas o brilho individual, mas a força de seus relacionamentos interpessoais. É a capacidade de cultivar confiança e comunicação aberta que realmente as impulsiona."
        },
        {
          "en": "Moreover, what becomes evident in effective teamwork is a shared sense of commitment. Each member feels responsible for the collective goal, understanding that their individual actions contribute to the whole. It is this collective commitment that ensures projects stay on track and challenges are met collaboratively.",
          "pt": "Além disso, o que se torna evidente no trabalho em equipe eficaz é um senso compartilhado de compromisso. Cada membro se sente responsável pelo objetivo coletivo, compreendendo que suas ações individuais contribuem para o todo. É este compromisso coletivo que garante que os projetos permaneçam no caminho certo e os desafios sejam enfrentados em colaboração."
        },
        {
          "en": "When conflict arises, as it inevitably will, what's paramount is the team's capacity for empathy and compromise. It's not about avoiding disagreements, but about how they are managed. Setting clear boundaries and offering support to colleagues are also vital components. What helps mitigate tension is mutual respect.",
          "pt": "Quando o conflito surge, como inevitavelmente acontecerá, o que é primordial é a capacidade da equipe para empatia e compromisso. Não se trata de evitar desentendimentos, mas de como eles são gerenciados. Estabelecer limites claros e oferecer apoio aos colegas também são componentes vitais. O que ajuda a mitigar a tensão é o respeito mútuo."
        },
        {
          "en": "Ultimately, what builds a resilient and innovative team is a deep connection forged through these practices. It's not just tasks that define a team; it's the human connections. Effective leadership teamwork is what transforms groups of individuals into cohesive, productive units, enabling them to navigate complexity and achieve remarkable results.",
          "pt": "Em última análise, o que constrói uma equipe resiliente e inovadora é uma conexão profunda forjada através dessas práticas. Não são apenas as tarefas que definem uma equipe; são as conexões humanas. O trabalho em equipe de liderança eficaz é o que transforma grupos de indivíduos em unidades coesas e produtivas, permitindo-lhes navegar pela complexidade e alcançar resultados notáveis."
        },
        {
          "en": "What we learn from this is that strong relationships are not a soft skill, but a strategic imperative for success.",
          "pt": "O que aprendemos com isso é que relacionamentos fortes não são uma habilidade 'soft', mas um imperativo estratégico para o sucesso."
        }
      ],
      "questions": [
        {
          "id": "reading-q1",
          "prompt": {
            "en": "According to the text, what primarily distinguishes successful teams?",
            "pt": "De acordo com o texto, o que distingue principalmente as equipes de sucesso?"
          },
          "options": [
            "The individual brilliance of each member.",
            "The strength of their interpersonal relationships.",
            "Their ability to avoid any conflict."
          ],
          "answer": "The strength of their interpersonal relationships.",
          "explanation": {
            "en": "The text states, 'What often sets successful teams apart is not just individual brilliance, but the strength of their interpersonal relationships.'",
            "pt": "O texto afirma: 'O que frequentemente distingue as equipes de sucesso não é apenas o brilho individual, mas a força de seus relacionamentos interpessoais.'"
          }
        },
        {
          "id": "reading-q2",
          "prompt": {
            "en": "What is considered paramount when conflict arises in a team?",
            "pt": "O que é considerado primordial quando o conflito surge em uma equipe?"
          },
          "options": [
            "Avoiding disagreements at all costs.",
            "The team's capacity for empathy and compromise.",
            "Strict adherence to boundaries to prevent arguments."
          ],
          "answer": "The team's capacity for empathy and compromise.",
          "explanation": {
            "en": "The text mentions, 'When conflict arises, as it inevitably will, what's paramount is the team's capacity for empathy and compromise.'",
            "pt": "O texto menciona: 'Quando o conflito surge, como inevitavelmente acontecerá, o que é primordial é a capacidade da equipe para empatia e compromisso.'"
          }
        },
        {
          "id": "reading-q3",
          "prompt": {
            "en": "What does the text conclude about strong relationships?",
            "pt": "O que o texto conclui sobre relacionamentos fortes?"
          },
          "options": [
            "They are a secondary 'soft skill' in the corporate world.",
            "They are a strategic imperative for success.",
            "They primarily define a team's tasks, not its dynamics."
          ],
          "answer": "They are a strategic imperative for success.",
          "explanation": {
            "en": "The final sentence states, 'What we learn from this is that strong relationships are not a soft skill, but a strategic imperative for success.'",
            "pt": "A frase final afirma: 'O que aprendemos com isso é que relacionamentos fortes não são uma habilidade 'soft', mas um imperativo estratégico para o sucesso.'"
          }
        }
      ]
    },
    "quickCheck": [
      {
        "id": "qc-1",
        "prompt": {
          "en": "Which of these is NOT one of the vocabulary words for relationships?",
          "pt": "Qual dessas NÃO é uma das palavras do vocabulário para relacionamentos?"
        },
        "options": [
          "Commitment",
          "Competition",
          "Connection"
        ],
        "answer": "Competition",
        "explanation": {
          "en": "'Competition' was not listed in the new vocabulary. 'Commitment' and 'Connection' were.",
          "pt": "'Competition' não foi listada no novo vocabulário. 'Commitment' e 'Connection' foram."
        }
      },
      {
        "id": "qc-2",
        "prompt": {
          "en": "What is the purpose of using a cleft sentence?",
          "pt": "Qual é o propósito de usar uma frase cleft?"
        },
        "options": [
          "To make a sentence shorter and more concise.",
          "To emphasize a specific part of a sentence.",
          "To ask a rhetorical question."
        ],
        "answer": "To emphasize a specific part of a sentence.",
        "explanation": {
          "en": "Cleft sentences are primarily used to bring focus and emphasis to a particular element within the sentence.",
          "pt": "Frases cleft são usadas principalmente para dar foco e ênfase a um elemento particular dentro da frase."
        }
      },
      {
        "id": "qc-3",
        "prompt": {
          "en": "In the expression 'We're all on the same page,' what does it mean?",
          "pt": "Na expressão 'We're all on the same page', o que significa?"
        },
        "options": [
          "Everyone is reading the same book.",
          "Everyone understands and agrees on the situation.",
          "Everyone is in the same physical location."
        ],
        "answer": "Everyone understands and agrees on the situation.",
        "explanation": {
          "en": "The expression 'to be on the same page' means that everyone involved understands and agrees with the current situation or plan.",
          "pt": "A expressão 'estar na mesma página' significa que todos os envolvidos entendem e concordam com a situação ou plano atual."
        }
      },
      {
        "id": "qc-4",
        "prompt": {
          "en": "Which of these sentences correctly uses a 'What' cleft structure?",
          "pt": "Qual destas frases usa corretamente uma estrutura 'What' cleft?"
        },
        "options": [
          "What is important it is communication.",
          "What communication is important.",
          "What is important is communication."
        ],
        "answer": "What is important is communication.",
        "explanation": {
          "en": "The correct 'What' cleft structure is 'What + clause + be + emphasized part'. Option A has an extra 'it', and Option B is incomplete.",
          "pt": "A estrutura correta da cleft com 'What' é 'What + oração + be + parte enfatizada'. A Opção A tem um 'it' extra, e a Opção B está incompleta."
        }
      }
    ]
  },
  "communicate": {
    "id": "UPPER-INTERMEDIATE-U09-COMMUNICATE",
    "review": [
      {
        "en": "We explored how relationships, trust, and communication are vital for teamwork.",
        "pt": "Exploramos como relacionamentos, confiança e comunicação são vitais para o trabalho em equipe."
      },
      {
        "en": "We learned cleft sentences ('It's... that', 'What... is') to emphasize key information.",
        "pt": "Aprendemos frases cleft ('It's... that', 'What... is') para enfatizar informações chave."
      },
      {
        "en": "We practiced expressions like 'align on the next steps' and 'take the lead'.",
        "pt": "Praticamos expressões como 'alinhar os próximos passos' e 'assumir a liderança'."
      }
    ],
    "activities": [
      {
        "id": "activity-1",
        "title": {
          "en": "Write a Formal Text: Team Conflict Resolution",
          "pt": "Escrever um Texto Formal: Resolução de Conflitos em Equipe"
        },
        "instruction": {
          "en": "Write a formal email (150-200 words) to your team, addressing a recent conflict or misunderstanding. Use at least three vocabulary words from this unit (e.g., trust, communication, compromise) and at least two cleft sentences to emphasize key points for resolution and future collaboration.",
          "pt": "Escreva um e-mail formal (150-200 palavras) para sua equipe, abordando um conflito ou mal-entendido recente. Use pelo menos três palavras do vocabulário desta unidade (por exemplo, confiança, comunicação, compromisso) e pelo menos duas frases cleft para enfatizar pontos chave para resolução e colaboração futura."
        },
        "phrases": [
          {
            "en": "It's effective communication that will resolve this.",
            "pt": "É a comunicação eficaz que resolverá isso."
          },
          {
            "en": "What we need now is a commitment to compromise.",
            "pt": "O que precisamos agora é um compromisso com o acordo."
          },
          {
            "en": "My goal is to foster stronger team bonds.",
            "pt": "Meu objetivo é promover laços de equipe mais fortes."
          }
        ],
        "check": [
          {
            "id": "activity-1-check-1",
            "prompt": {
              "en": "Which of these is an example of an appropriate cleft sentence for emphasizing a solution?",
              "pt": "Qual destas é um exemplo de frase cleft apropriada para enfatizar uma solução?"
            },
            "options": [
              "What we discussed was the problem.",
              "It's open dialogue that will lead to a solution.",
              "The solution it is to talk."
            ],
            "answer": "It's open dialogue that will lead to a solution.",
            "explanation": {
              "en": "This sentence correctly uses the 'It's...that' cleft structure to emphasize 'open dialogue' as the key to a solution.",
              "pt": "Esta frase usa corretamente a estrutura cleft 'It's...that' para enfatizar 'diálogo aberto' como a chave para uma solução."
            }
          },
          {
            "id": "activity-1-check-2",
            "prompt": {
              "en": "Why is using vocabulary from the unit important in this task?",
              "pt": "Por que usar o vocabulário da unidade é importante nesta tarefa?"
            },
            "options": [
              "To make the email longer.",
              "To demonstrate understanding and appropriate use of new terms in context.",
              "To avoid using common words."
            ],
            "answer": "To demonstrate understanding and appropriate use of new terms in context.",
            "explanation": {
              "en": "Using the specific vocabulary words shows mastery of the unit's content and enhances the formality and precision of the text.",
              "pt": "Usar as palavras do vocabulário específico demonstra domínio do conteúdo da unidade e aprimora a formalidade e precisão do texto."
            }
          }
        ]
      },
      {
        "id": "activity-2",
        "title": {
          "en": "Role-play a Negotiation: Project Responsibilities",
          "pt": "Simular uma Negociação: Responsabilidades do Projeto"
        },
        "instruction": {
          "en": "Work with a partner. Role-play a negotiation between two project leads over conflicting responsibilities for a critical task. One of you wants to 'take the lead' on a specific area, while the other emphasizes that 'we need to align on the next steps.' Use cleft sentences to assert your position and discuss how to find a compromise, maintaining mutual respect.",
          "pt": "Trabalhe com um parceiro. Simule uma negociação entre dois líderes de projeto sobre responsabilidades conflitantes para uma tarefa crítica. Um de vocês quer 'assumir a liderança' em uma área específica, enquanto o outro enfatiza que 'precisamos nos alinhar sobre os próximos passos'. Use frases cleft para afirmar sua posição e discuta como encontrar um compromisso, mantendo o respeito mútuo."
        },
        "phrases": [
          {
            "en": "What's critical is clarifying roles.",
            "pt": "O que é crítico é esclarecer os papéis."
          },
          {
            "en": "It's my experience in this area that makes me suitable.",
            "pt": "É a minha experiência nesta área que me torna adequado."
          },
          {
            "en": "Let's find a common ground for resolution.",
            "pt": "Vamos encontrar um terreno comum para a resolução."
          }
        ],
        "check": [
          {
            "id": "activity-2-check-1",
            "prompt": {
              "en": "Which sentence effectively uses a cleft structure to state a position in a negotiation?",
              "pt": "Qual frase usa efetivamente uma estrutura cleft para expressar uma posição em uma negociação?"
            },
            "options": [
              "I believe it's my turn to lead.",
              "What I'm focused on is the project's success.",
              "My focus is on the project's success."
            ],
            "answer": "What I'm focused on is the project's success.",
            "explanation": {
              "en": "This 'What' cleft structure effectively highlights the speaker's main priority (project success).",
              "pt": "Esta estrutura cleft com 'What' destaca efetivamente a principal prioridade do falante (o sucesso do projeto)."
            }
          },
          {
            "id": "activity-2-check-2",
            "prompt": {
              "en": "What is the primary goal of negotiation in this context?",
              "pt": "Qual é o objetivo principal da negociação neste contexto?"
            },
            "options": [
              "To ensure one person gets their way entirely.",
              "To find a compromise and maintain positive team relationships.",
              "To avoid discussing responsibilities altogether."
            ],
            "answer": "To find a compromise and maintain positive team relationships.",
            "explanation": {
              "en": "The instruction emphasizes finding a compromise and maintaining mutual respect, which implies preserving relationships.",
              "pt": "A instrução enfatiza encontrar um compromisso e manter o respeito mútuo, o que implica preservar os relacionamentos."
            }
          }
        ]
      },
      {
        "id": "activity-3",
        "title": {
          "en": "Discuss: Building Team Empathy",
          "pt": "Discutir: Construindo Empatia na Equipe"
        },
        "instruction": {
          "en": "In groups of three or four, discuss practical strategies for fostering empathy within a work team. Use cleft sentences to emphasize why certain strategies are effective or what challenges might arise. Incorporate at least two expressions related to 'leadership teamwork' (e.g., 'on the same page').",
          "pt": "Em grupos de três ou quatro, discuta estratégias práticas para promover a empatia dentro de uma equipe de trabalho. Use frases cleft para enfatizar por que certas estratégias são eficazes ou quais desafios podem surgir. Incorpore pelo menos duas expressões relacionadas a 'liderança em equipe' (por exemplo, 'na mesma página')."
        },
        "phrases": [
          {
            "en": "What truly helps is active listening.",
            "pt": "O que realmente ajuda é a escuta ativa."
          },
          {
            "en": "It's understanding different perspectives that builds empathy.",
            "pt": "É compreender diferentes perspectivas que constrói a empatia."
          },
          {
            "en": "Being on the same page about our goals is vital.",
            "pt": "Estar na mesma página sobre nossos objetivos é vital."
          }
        ],
        "check": [
          {
            "id": "activity-3-check-1",
            "prompt": {
              "en": "Which cleft sentence emphasizes a practical strategy for empathy?",
              "pt": "Qual frase cleft enfatiza uma estratégia prática para a empatia?"
            },
            "options": [
              "What I did was listen.",
              "It's encouraging open dialogue that fosters empathy.",
              "Empathy is fostered by dialogue."
            ],
            "answer": "It's encouraging open dialogue that fosters empathy.",
            "explanation": {
              "en": "This sentence correctly uses the 'It's...that' structure to emphasize 'encouraging open dialogue' as a strategy.",
              "pt": "Esta frase usa corretamente a estrutura 'It's...that' para enfatizar 'incentivar o diálogo aberto' como uma estratégia."
            }
          },
          {
            "id": "activity-3-check-2",
            "prompt": {
              "en": "Why are 'leadership teamwork' expressions useful in this discussion?",
              "pt": "Por que as expressões de 'liderança em equipe' são úteis nesta discussão?"
            },
            "options": [
              "To make the discussion sound more casual.",
              "To demonstrate understanding of teamwork dynamics and collaboration.",
              "To replace all vocabulary words from the unit."
            ],
            "answer": "To demonstrate understanding of teamwork dynamics and collaboration.",
            "explanation": {
              "en": "Expressions like 'on the same page' directly relate to teamwork and collaboration, enhancing the discussion on building team empathy.",
              "pt": "Expressões como 'na mesma página' se relacionam diretamente ao trabalho em equipe e colaboração, aprimorando a discussão sobre a construção da empatia na equipe."
            }
          }
        ]
      }
    ],
    "challenge": {
      "id": "challenge-unit-9",
      "title": {
        "en": "Team Performance Review: Identifying Strengths and Weaknesses",
        "pt": "Revisão de Desempenho da Equipe: Identificando Pontos Fortes e Fracos"
      },
      "instruction": {
        "en": "You are leading a team performance review. Prepare a short presentation (3-5 minutes) where you identify the team's main strengths and weaknesses related to relationships and teamwork. Use at least two cleft sentences to highlight what contributes to success and what needs improvement. Include at least three vocabulary words from the unit (e.g., boundaries, support, connection) and two leadership teamwork expressions. Conclude with actionable suggestions.",
        "pt": "Você está liderando uma revisão de desempenho da equipe. Prepare uma breve apresentação (3-5 minutos) onde você identifica os principais pontos fortes e fracos da equipe relacionados a relacionamentos e trabalho em equipe. Use pelo menos duas frases cleft para destacar o que contribui para o sucesso e o que precisa ser melhorado. Inclua pelo menos três palavras do vocabulário da unidade (por exemplo, limites, apoio, conexão) e duas expressões de liderança em equipe. Conclua com sugestões acionáveis."
      },
      "phrases": [
        {
          "en": "What truly defines our strength is our mutual support.",
          "pt": "O que realmente define nossa força é nosso apoio mútuo."
        },
        {
          "en": "It's setting clearer boundaries that will prevent future conflict.",
          "pt": "É estabelecer limites mais claros que evitará futuros conflitos."
        },
        {
          "en": "We must all be on the same page regarding our development areas.",
          "pt": "Devemos todos estar na mesma página em relação às nossas áreas de desenvolvimento."
        }
      ],
      "check": [
        {
          "id": "challenge-check-1",
          "prompt": {
            "en": "Which of these sentences effectively uses a cleft structure to point out a weakness?",
            "pt": "Qual destas frases usa efetivamente uma estrutura cleft para apontar uma fraqueza?"
          },
          "options": [
            "What is hindering us is a lack of trust.",
            "A lack of trust it is hindering us.",
            "It's our lack of trust."
          ],
          "answer": "What is hindering us is a lack of trust.",
          "explanation": {
            "en": "This 'What' cleft structure clearly emphasizes 'a lack of trust' as the hindering factor, making it the focus.",
            "pt": "Esta estrutura cleft com 'What' enfatiza claramente 'a falta de confiança' como o fator obstrutor, tornando-o o foco."
          }
        },
        {
          "id": "challenge-check-2",
          "prompt": {
            "en": "What is the overall purpose of this performance review challenge?",
            "pt": "Qual é o propósito geral deste desafio de revisão de desempenho?"
          },
          "options": [
            "To criticize the team's past mistakes.",
            "To identify areas for growth and propose constructive improvements.",
            "To assign blame for poor performance."
          ],
          "answer": "To identify areas for growth and propose constructive improvements.",
          "explanation": {
            "en": "The goal of a performance review, especially when leading it, is to offer constructive feedback and actionable suggestions for future improvement, not just to criticize.",
            "pt": "O objetivo de uma revisão de desempenho, especialmente ao liderá-la, é oferecer feedback construtivo e sugestões acionáveis para melhorias futuras, não apenas criticar."
          }
        }
      ]
    },
    "lessonReview": {
      "summary": {
        "en": "In this unit, we deepened our understanding of essential relationship dynamics in teamwork and mastered the use of cleft sentences ('It's...that', 'What...is') to add emphasis and focus to our communication. We also integrated key vocabulary and expressions for effective leadership and collaboration.",
        "pt": "Nesta unidade, aprofundamos nossa compreensão das dinâmicas essenciais de relacionamento no trabalho em equipe e dominamos o uso de frases cleft ('It's...that', 'What...is') para adicionar ênfase e foco à nossa comunicação. Também integramos vocabulário e expressões chave para liderança e colaboração eficazes."
      },
      "canDo": [
        {
          "en": "Use cleft sentences confidently to emphasize crucial information in discussions.",
          "pt": "Usar frases cleft com confiança para enfatizar informações cruciais em discussões."
        },
        {
          "en": "Discuss complex relationship dynamics in professional settings using relevant vocabulary.",
          "pt": "Discutir dinâmicas complexas de relacionamento em ambientes profissionais usando vocabulário relevante."
        },
        {
          "en": "Apply leadership teamwork expressions in collaborative scenarios.",
          "pt": "Aplicar expressões de trabalho em equipe de liderança em cenários colaborativos."
        }
      ],
      "next": {
        "en": "Next, we will explore Unit 10: Decision Making, focusing on inverted conditionals.",
        "pt": "Em seguida, exploraremos a Unidade 10: Tomada de Decisão, focando em condicionais invertidas."
      }
    }
  }
},
{
  "code": "UPPER-INTERMEDIATE-U10",
  "number": 10,
  "title": "News Media — Discourse Markers",
  "titlePt": "Mídia de Notícias — Marcadores Discursivos",
  "cefr": "B2",
  "objective": {
    "en": "To teach news media vocabulary and discourse markers for contrast and concession (nevertheless, notwithstanding, albeit) in a contextualized manner.",
    "pt": "Ensinar vocabulário de mídia de notícias e marcadores discursivos de contraste e concessão (nevertheless, notwithstanding, albeit) de forma contextualizada."
  },
  "communicationGoal": {
    "en": "Students will be able to use 'analysis' and news media vocabulary to communicate in real-world situations.",
    "pt": "O aluno será capaz de usar 'analysis' e o vocabulário de news media para se comunicar em situações reais."
  },
  "prerequisites": {
    "en": "Grammar: Cleft sentences (it/what) for emphasis and focus. Vocabulary: Relationships.",
    "pt": "Estrutura: Cleft sentences (it/what) para ênfase e foco. Vocabulário: Relationships."
  },
  "newContent": {
    "en": "Grammar: Discourse markers for contrast and concession (nevertheless, notwithstanding, albeit). Vocabulary: News Media (10 lexical items). Expressions: Analysis.",
    "pt": "Grammar: Discourse markers for contrast and concession (nevertheless, notwithstanding, albeit). Vocabulary: News Media (10 itens lexicais). Expressions: Analysis."
  },
  "reviewContent": {
    "en": "Spiral review: Common idiomatic expressions used in natural conversation (Unit 3).",
    "pt": "Revisão em espiral: Common idiomatic expressions used in natural conversation (Unit 3)."
  },
  "discover": {
    "id": "UPPER-INTERMEDIATE-U10-DISCOVER",
    "warmUp": {
      "prompt": {
        "en": "Look at these images related to news. What kind of news do they represent? How do you usually consume news?",
        "pt": "Observe estas imagens relacionadas a notícias. Que tipo de notícia elas representam? Como você costuma consumir notícias?"
      },
      "phrases": [
        {
          "en": "I tend to get my news from online sources.",
          "pt": "Eu costumo receber minhas notícias de fontes online."
        },
        {
          "en": "Traditional newspapers still have a lot of credibility.",
          "pt": "Jornais tradicionais ainda têm muita credibilidade."
        }
      ]
    },
    "context": {
      "situation": {
        "en": "Two colleagues, Elena and Mark, are discussing recent news coverage of a new environmental policy and trying to make sense of the different perspectives presented by various news outlets.",
        "pt": "Dois colegas, Elena e Mark, estão discutindo a cobertura recente de notícias sobre uma nova política ambiental e tentando entender as diferentes perspectivas apresentadas por vários veículos de notícias."
      },
      "dialogue": [
        {
          "who": "Elena",
          "en": "Have you seen the latest headlines about the new environmental policy? The coverage is so varied.",
          "pt": "Você viu as últimas manchetes sobre a nova política ambiental? A cobertura é tão variada."
        },
        {
          "who": "Mark",
          "en": "I have. I read a fascinating opinion piece this morning. The journalist presented a very strong argument against it, albeit with some controversial points.",
          "pt": "Vi sim. Li um artigo de opinião fascinante esta manhã. O jornalista apresentou um argumento muito forte contra, embora com alguns pontos controversos."
        },
        {
          "who": "Elena",
          "en": "Yes, I saw that. I also watched an interview with the policy's architect. Nevertheless, many sources seem skeptical.",
          "pt": "Sim, eu vi. Também assisti a uma entrevista com o arquiteto da política. No entanto, muitas fontes parecem céticas."
        },
        {
          "who": "Mark",
          "en": "Precisely. The broadcast last night on Channel 7 also highlighted significant public opposition, notwithstanding the government's official statements.",
          "pt": "Exatamente. A transmissão de ontem à noite no Canal 7 também destacou uma oposição pública significativa, apesar das declarações oficiais do governo."
        },
        {
          "who": "Elena",
          "en": "It's hard to get a clear picture. Every report seems to emphasize a different aspect of the topic.",
          "pt": "É difícil ter uma imagem clara. Cada reportagem parece enfatizar um aspecto diferente do tema."
        },
        {
          "who": "Mark",
          "en": "That's why we need to delve into the details. A thorough analysis of the different sources is crucial to understand the implications fully.",
          "pt": "É por isso que precisamos nos aprofundar nos detalhes. Uma análise completa das diferentes fontes é crucial para entender as implicações totalmente."
        }
      ]
    },
    "vocabulary": [
      {
        "term": "headline",
        "pt": "manchete",
        "ipa": "/ˈhɛdˌlaɪn/",
        "definition": "The title of a news article, printed in large letters, usually at the top of a newspaper page or news website.",
        "example": "The breaking news headline announced a major breakthrough in renewable energy.",
        "examplePt": "A manchete de última hora anunciava um grande avanço em energia renovável."
      },
      {
        "term": "article",
        "pt": "artigo",
        "ipa": "/ˈɑːrtɪkl/",
        "definition": "A piece of writing on a particular subject in a newspaper or magazine, or on a website.",
        "example": "She wrote an insightful article discussing the economic impact of the pandemic.",
        "examplePt": "Ela escreveu um artigo perspicaz discutindo o impacto econômico da pandemia."
      },
      {
        "term": "report",
        "pt": "reportagem",
        "ipa": "/rɪˈpɔːrt/",
        "definition": "A spoken or written account of an event or topic, especially one that is prepared after careful investigation.",
        "example": "The investigative report uncovered serious misconduct within the corporation.",
        "examplePt": "A reportagem investigativa descobriu má conduta grave dentro da corporação."
      },
      {
        "term": "coverage",
        "pt": "cobertura",
        "ipa": "/ˈkʌvərɪdʒ/",
        "definition": "The reporting of a particular important event or subject.",
        "example": "The extensive news coverage of the election kept everyone informed of the latest results.",
        "examplePt": "A ampla cobertura de notícias da eleição manteve todos informados sobre os últimos resultados."
      },
      {
        "term": "source",
        "pt": "fonte",
        "ipa": "/sɔːrs/",
        "definition": "A place, person, or thing from which something originates or can be obtained, especially information.",
        "example": "Always check the reliability of your news source before sharing information.",
        "examplePt": "Sempre verifique a confiabilidade da sua fonte de notícias antes de compartilhar informações."
      },
      {
        "term": "interview",
        "pt": "entrevista",
        "ipa": "/ˈɪntərvjuː/",
        "definition": "A formal meeting at which someone is asked questions to see if they are suitable for a particular job, course of study, or to get their opinion.",
        "example": "The politician's interview on the evening news sparked a lot of debate.",
        "examplePt": "A entrevista do político no noticiário da noite gerou muito debate."
      },
      {
        "term": "broadcast",
        "pt": "transmissão",
        "ipa": "/ˈbrɔːdkæst/",
        "definition": "A radio or television program or transmission.",
        "example": "The live broadcast of the concert reached millions of viewers worldwide.",
        "examplePt": "A transmissão ao vivo do concerto alcançou milhões de telespectadores em todo o mundo."
      },
      {
        "term": "journalist",
        "pt": "jornalista",
        "ipa": "/ˈdʒɜːrnəlɪst/",
        "definition": "A person who writes for newspapers, magazines, or news websites, or prepares news to be broadcast.",
        "example": "A good journalist strives for objectivity and accuracy in their reporting.",
        "examplePt": "Um bom jornalista busca objetividade e precisão em suas reportagens."
      },
      {
        "term": "topic",
        "pt": "tópico, assunto",
        "ipa": "/ˈtɒpɪk/",
        "definition": "A subject that someone writes or talks about.",
        "example": "Climate change remains a hot topic for discussion in international forums.",
        "examplePt": "A mudança climática continua sendo um tópico quente de discussão em fóruns internacionais."
      },
      {
        "term": "opinion piece",
        "pt": "artigo de opinião",
        "ipa": "/əˈpɪnjən piːs/",
        "definition": "An article, usually in a newspaper or magazine, that expresses the writer's personal ideas or beliefs.",
        "example": "Her latest opinion piece eloquently argued for greater government transparency.",
        "examplePt": "Seu mais recente artigo de opinião argumentou eloquentemente por maior transparência governamental."
      }
    ],
    "expressions": [
      {
        "en": "Let's delve into the details.",
        "pt": "Vamos nos aprofundar nos detalhes."
      },
      {
        "en": "This trend is worth examining closely.",
        "pt": "Esta tendência vale a pena ser examinada de perto."
      },
      {
        "en": "The implications are significant.",
        "pt": "As implicações são significativas."
      }
    ],
    "grammar": [
      {
        "title": {
          "en": "Discourse Markers for Contrast and Concession",
          "pt": "Marcadores Discursivos de Contraste e Concessão"
        },
        "examples": [
          {
            "en": "The economic forecast was grim; nevertheless, the company reported record profits.",
            "pt": "A previsão econômica era sombria; no entanto, a empresa registrou lucros recordes."
          },
          {
            "en": "Notwithstanding the public outcry, the new policy was implemented.",
            "pt": "Apesar do clamor público, a nova política foi implementada."
          },
          {
            "en": "She accepted the challenging role, albeit with some initial hesitation.",
            "pt": "Ela aceitou o papel desafiador, embora com alguma hesitação inicial."
          }
        ],
        "rule": {
          "en": "Discourse markers such as 'nevertheless', 'notwithstanding', and 'albeit' are used to introduce information that contrasts with or concedes to what was previously stated. 'Nevertheless' means 'in spite of that' or 'however', typically connecting two independent clauses. 'Notwithstanding' means 'despite' or 'in spite of', often introducing a phrase or clause. 'Albeit' means 'although it be' or 'even though', usually introducing a subordinate clause that modifies the main clause, often expressing a concession or limitation.",
          "pt": "Marcadores discursivos como 'nevertheless', 'notwithstanding' e 'albeit' são usados para introduzir informações que contrastam ou concedem ao que foi dito anteriormente. 'Nevertheless' significa 'apesar disso' ou 'contudo', geralmente conectando duas orações independentes. 'Notwithstanding' significa 'apesar de' ou 'em que pese', frequentemente introduzindo uma frase ou oração. 'Albeit' significa 'embora seja' ou 'ainda que', geralmente introduzindo uma oração subordinada que modifica a oração principal, frequentemente expressando uma concessão ou limitação."
        },
        "mistakes": [
          {
            "en": "Incorrect use of 'albeit' as a sentence connector: 'Albeit it was raining. We went for a walk.' (Correct: 'We went for a walk, albeit it was raining.')",
            "pt": "Uso incorreto de 'albeit' como conector de frase: 'Albeit it was raining. We went for a walk.' (Correto: 'We went for a walk, albeit it was raining.')"
          },
          {
            "en": "Confusing 'notwithstanding' with 'nevertheless': 'The evidence was strong, notwithstanding, the verdict was not guilty.' ('Notwithstanding' is a preposition; 'nevertheless' is an adverbial conjunction.)",
            "pt": "Confundir 'notwithstanding' com 'nevertheless': 'The evidence was strong, notwithstanding, the verdict was not guilty.' ('Notwithstanding' é uma preposição; 'nevertheless' é uma conjunção adverbial.)"
          }
        ]
      }
    ],
    "controlledPractice": [
      {
        "id": "cp-10-1",
        "prompt": {
          "en": "Choose the best discourse marker to complete the sentence: 'The report contained compelling evidence; _____, some critics remained unconvinced.'",
          "pt": "Escolha o melhor marcador discursivo para completar a frase: 'A reportagem continha evidências convincentes; _____, alguns críticos permaneceram não convencidos.'"
        },
        "options": [
          "albeit",
          "nevertheless",
          "notwithstanding"
        ],
        "answer": "nevertheless",
        "explanation": {
          "en": "'Nevertheless' is used here to introduce a contrasting idea after a semicolon or period, meaning 'in spite of what has just been said'.",
          "pt": "'Nevertheless' é usado aqui para introduzir uma ideia contrastante após um ponto e vírgula ou ponto final, significando 'apesar do que acabou de ser dito'."
        }
      },
      {
        "id": "cp-10-2",
        "prompt": {
          "en": "Select the correct option: '_____ the difficulties, they managed to complete the project on time.'",
          "pt": "Selecione a opção correta: '_____ as dificuldades, eles conseguiram concluir o projeto a tempo.'"
        },
        "options": [
          "Albeit",
          "Nevertheless",
          "Notwithstanding"
        ],
        "answer": "Notwithstanding",
        "explanation": {
          "en": "'Notwithstanding' functions as a preposition here, meaning 'despite' or 'in spite of', and is followed by a noun phrase.",
          "pt": "'Notwithstanding' funciona como uma preposição aqui, significando 'apesar de' ou 'em que pese', e é seguido por uma locução nominal."
        }
      },
      {
        "id": "cp-10-3",
        "prompt": {
          "en": "Which word best fits: 'She delivered an outstanding presentation, _____, with a few technical glitches at the beginning.'",
          "pt": "Qual palavra melhor se encaixa: 'Ela fez uma apresentação excelente, _____, com algumas falhas técnicas no início.'"
        },
        "options": [
          "nevertheless",
          "notwithstanding",
          "albeit"
        ],
        "answer": "albeit",
        "explanation": {
          "en": "'Albeit' is used to introduce a subordinate clause that qualifies or concedes something about the main statement, often meaning 'even though' or 'although it be'.",
          "pt": "'Albeit' é usado para introduzir uma oração subordinada que qualifica ou concede algo sobre a afirmação principal, frequentemente significando 'ainda que' ou 'embora seja'."
        }
      },
      {
        "id": "cp-10-4",
        "prompt": {
          "en": "Choose the word to fill in the blank: 'The journalist faced immense pressure; _____, she refused to compromise her integrity.'",
          "pt": "Escolha a palavra para preencher a lacuna: 'A jornalista enfrentou uma pressão imensa; _____, ela se recusou a comprometer sua integridade.'"
        },
        "options": [
          "albeit",
          "notwithstanding",
          "nevertheless"
        ],
        "answer": "nevertheless",
        "explanation": {
          "en": "'Nevertheless' effectively introduces a strong contrasting point to the preceding statement.",
          "pt": "'Nevertheless' introduz efetivamente um ponto contrastante forte à afirmação anterior."
        }
      }
    ],
    "input": {
      "kind": "listening",
      "title": {
        "en": "The Evolving Landscape of News Consumption",
        "pt": "O Cenário Evolutivo do Consumo de Notícias"
      },
      "lines": [
        {
          "en": "Welcome to 'Media Insights'. Today, we're discussing how people access news. Traditional newspapers, albeit still present, have largely given way to digital platforms.",
          "pt": "Bem-vindos ao 'Media Insights'. Hoje, discutiremos como as pessoas acessam notícias. Jornais tradicionais, embora ainda presentes, deram lugar em grande parte às plataformas digitais."
        },
        {
          "en": "Younger generations, in particular, rely heavily on social media feeds for their daily headlines. This trend is worth examining closely.",
          "pt": "As gerações mais jovens, em particular, dependem muito dos feeds de redes sociais para suas manchetes diárias. Esta tendência vale a pena ser examinada de perto."
        },
        {
          "en": "Many argue that this shift provides instant access to information, notwithstanding the potential for misinformation.",
          "pt": "Muitos argumentam que essa mudança proporciona acesso instantâneo à informação, apesar do potencial de desinformação."
        },
        {
          "en": "News organizations, nevertheless, continue to adapt, investing in multimedia coverage and engaging journalists to provide in-depth reports.",
          "pt": "As organizações de notícias, no entanto, continuam a se adaptar, investindo em cobertura multimídia e contratando jornalistas para fornecer reportagens aprofundadas."
        },
        {
          "en": "The implications are significant for how we interpret events and form opinions on crucial topics.",
          "pt": "As implicações são significativas para como interpretamos eventos e formamos opiniões sobre tópicos cruciais."
        }
      ],
      "questions": [
        {
          "id": "l-10-1",
          "prompt": {
            "en": "What is the main topic of the listening passage?",
            "pt": "Qual é o tópico principal da passagem de áudio?"
          },
          "options": [
            "The decline of television broadcasts",
            "The evolving methods of news consumption",
            "The challenges of traditional journalism"
          ],
          "answer": "The evolving methods of news consumption",
          "explanation": {
            "en": "The speaker discusses how news access has shifted from traditional newspapers to digital platforms and social media.",
            "pt": "O locutor discute como o acesso a notícias mudou de jornais tradicionais para plataformas digitais e redes sociais."
          }
        },
        {
          "id": "l-10-2",
          "prompt": {
            "en": "What does the speaker suggest about younger generations?",
            "pt": "O que o locutor sugere sobre as gerações mais jovens?"
          },
          "options": [
            "They prefer reading physical newspapers.",
            "They mostly get news from social media.",
            "They are critical of all digital news sources."
          ],
          "answer": "They mostly get news from social media.",
          "explanation": {
            "en": "The passage states, 'Younger generations, in particular, rely heavily on social media feeds for their daily headlines.'",
            "pt": "A passagem afirma: 'As gerações mais jovens, em particular, dependem muito dos feeds de redes sociais para suas manchetes diárias'."
          }
        },
        {
          "id": "l-10-3",
          "prompt": {
            "en": "According to the speaker, what are news organizations doing in response to the changes?",
            "pt": "De acordo com o locutor, o que as organizações de notícias estão fazendo em resposta às mudanças?"
          },
          "options": [
            "They are reducing their investment in journalism.",
            "They are adapting by investing in multimedia coverage.",
            "They are focusing solely on traditional print media."
          ],
          "answer": "They are adapting by investing in multimedia coverage.",
          "explanation": {
            "en": "The speaker notes that 'News organizations, nevertheless, continue to adapt, investing in multimedia coverage'.",
            "pt": "O locutor observa que 'As organizações de notícias, no entanto, continuam a se adaptar, investindo em cobertura multimídia'."
          }
        }
      ]
    },
    "quickCheck": [
      {
        "id": "qc-10-1",
        "prompt": {
          "en": "Which word refers to the main title of a news story?",
          "pt": "Qual palavra se refere ao título principal de uma notícia?"
        },
        "options": [
          "article",
          "headline",
          "report"
        ],
        "answer": "headline",
        "explanation": {
          "en": "The headline is the main title of a news article.",
          "pt": "A headline é o título principal de um artigo de notícia."
        }
      },
      {
        "id": "qc-10-2",
        "prompt": {
          "en": "Which discourse marker means 'despite' or 'in spite of' and is often followed by a noun phrase?",
          "pt": "Qual marcador discursivo significa 'apesar de' ou 'em que pese' e é frequentemente seguido por uma locução nominal?"
        },
        "options": [
          "albeit",
          "nevertheless",
          "notwithstanding"
        ],
        "answer": "notwithstanding",
        "explanation": {
          "en": "'Notwithstanding' functions as a preposition and is followed by a noun phrase.",
          "pt": "'Notwithstanding' funciona como uma preposição e é seguido por uma locução nominal."
        }
      },
      {
        "id": "qc-10-3",
        "prompt": {
          "en": "What type of article expresses the writer's personal ideas or beliefs?",
          "pt": "Que tipo de artigo expressa as ideias ou crenças pessoais do escritor?"
        },
        "options": [
          "report",
          "interview",
          "opinion piece"
        ],
        "answer": "opinion piece",
        "explanation": {
          "en": "An opinion piece is specifically designed to express the author's personal views.",
          "pt": "Um artigo de opinião é especificamente projetado para expressar as opiniões pessoais do autor."
        }
      },
      {
        "id": "qc-10-4",
        "prompt": {
          "en": "Which phrase is used to suggest a closer examination of a situation?",
          "pt": "Qual frase é usada para sugerir uma análise mais aprofundada de uma situação?"
        },
        "options": [
          "The implications are significant.",
          "This trend is worth examining closely.",
          "Let's ignore the details."
        ],
        "answer": "This trend is worth examining closely.",
        "explanation": {
          "en": "'This trend is worth examining closely' directly suggests a detailed investigation.",
          "pt": "'This trend is worth examining closely' sugere diretamente uma investigação detalhada."
        }
      }
    ]
  },
  "communicate": {
    "id": "UPPER-INTERMEDIATE-U10-COMMUNICATE",
    "review": [
      {
        "en": "Quickly review the meaning and usage of 'nevertheless', 'notwithstanding', and 'albeit'.",
        "pt": "Revise rapidamente o significado e o uso de 'nevertheless', 'notwithstanding' e 'albeit'."
      },
      {
        "en": "Recall the 10 news media vocabulary terms introduced in Part 1.",
        "pt": "Lembre-se dos 10 termos de vocabulário de mídia de notícias introduzidos na Parte 1."
      },
      {
        "en": "Discuss the 'analysis' expressions and when to use them.",
        "pt": "Discuta as expressões de 'análise' e quando usá-las."
      }
    ],
    "activities": [
      {
        "id": "act-10-1",
        "title": {
          "en": "Give a Nuanced Opinion",
          "pt": "Dê uma Opinião Nuances"
        },
        "instruction": {
          "en": "Choose one of the following current news topics: climate change, economic inflation, or artificial intelligence. Express your opinion on the topic, ensuring you include at least two contrasting or concessive points using 'nevertheless', 'notwithstanding', or 'albeit'. Be prepared to justify your nuanced perspective.",
          "pt": "Escolha um dos seguintes tópicos de notícias atuais: mudança climática, inflação econômica ou inteligência artificial. Expresse sua opinião sobre o tópico, garantindo que você inclua pelo menos dois pontos contrastantes ou concessivos usando 'nevertheless', 'notwithstanding' ou 'albeit'. Esteja preparado para justificar sua perspectiva matizada."
        },
        "phrases": [
          {
            "en": "Many believe X, nevertheless I think Y...",
            "pt": "Muitos acreditam em X, no entanto eu penso Y..."
          },
          {
            "en": "Notwithstanding the challenges, the benefits are clear.",
            "pt": "Apesar dos desafios, os benefícios são claros."
          },
          {
            "en": "I support the idea, albeit with some reservations.",
            "pt": "Eu apoio a ideia, embora com algumas reservas."
          }
        ],
        "check": [
          {
            "id": "act-10-1-check-1",
            "prompt": {
              "en": "What is the primary goal of this activity?",
              "pt": "Qual é o objetivo principal desta atividade?"
            },
            "options": [
              "To report factual news.",
              "To express a complex opinion using specific discourse markers.",
              "To simply agree with a popular viewpoint."
            ],
            "answer": "To express a complex opinion using specific discourse markers.",
            "explanation": {
              "en": "The instruction explicitly asks to 'include at least two contrasting or concessive points using 'nevertheless', 'notwithstanding', or 'albeit''.",
              "pt": "A instrução pede explicitamente para 'incluir pelo menos dois pontos contrastantes ou concessivos usando 'nevertheless', 'notwithstanding' ou 'albeit'."
            }
          },
          {
            "id": "act-10-1-check-2",
            "prompt": {
              "en": "Which type of content should NOT be the sole focus of your opinion?",
              "pt": "Que tipo de conteúdo NÃO deve ser o único foco da sua opinião?"
            },
            "options": [
              "Facts and data.",
              "A balanced perspective.",
              "Just agreeing with the majority."
            ],
            "answer": "Just agreeing with the majority.",
            "explanation": {
              "en": "The activity title 'Give a Nuanced Opinion' suggests going beyond simple agreement to explore complexities.",
              "pt": "O título da atividade 'Dê uma Opinião Nuanced' sugere ir além de um simples acordo para explorar complexidades."
            }
          }
        ]
      },
      {
        "id": "act-10-2",
        "title": {
          "en": "Compare and Contrast News Coverage",
          "pt": "Compare e Contraste a Cobertura de Notícias"
        },
        "instruction": {
          "en": "Find two articles from different news sources (e.g., a conservative and a liberal outlet) covering the same major event. Prepare a brief summary of each article, then compare and contrast their approaches, vocabulary, and emphasis. Use news media vocabulary and discourse markers to highlight similarities and differences in their 'coverage' and 'analysis'.",
          "pt": "Encontre dois artigos de diferentes fontes de notícias (por exemplo, um veículo conservador e um liberal) cobrindo o mesmo evento importante. Prepare um breve resumo de cada artigo e, em seguida, compare e contraste suas abordagens, vocabulário e ênfase. Use o vocabulário de mídia de notícias e marcadores discursivos para destacar semelhanças e diferenças em sua 'cobertura' e 'análise'."
        },
        "phrases": [
          {
            "en": "Article A focuses on X, nevertheless, Article B highlights Y.",
            "pt": "O Artigo A foca em X, no entanto, o Artigo B destaca Y."
          },
          {
            "en": "Notwithstanding the similar topic, their sources differ significantly.",
            "pt": "Apesar do tópico semelhante, suas fontes diferem significativamente."
          },
          {
            "en": "Both reports present facts, albeit with different interpretations.",
            "pt": "Ambas as reportagens apresentam fatos, embora com diferentes interpretações."
          }
        ],
        "check": [
          {
            "id": "act-10-2-check-1",
            "prompt": {
              "en": "What is the key requirement for the articles you select?",
              "pt": "Qual é o requisito principal para os artigos que você selecionar?"
            },
            "options": [
              "They must be from the same news outlet.",
              "They must cover unrelated topics.",
              "They must cover the same event from different sources."
            ],
            "answer": "They must cover the same event from different sources.",
            "explanation": {
              "en": "The instruction specifies 'Find two articles from different news sources... covering the same major event'.",
              "pt": "A instrução especifica 'Encontre dois artigos de diferentes fontes de notícias... cobrindo o mesmo evento importante'."
            }
          },
          {
            "id": "act-10-2-check-2",
            "prompt": {
              "en": "What aspects should you primarily compare and contrast?",
              "pt": "Quais aspectos você deve comparar e contrastar principalmente?"
            },
            "options": [
              "Only the length of the articles.",
              "Their approaches, vocabulary, and emphasis.",
              "Just the publication date."
            ],
            "answer": "Their approaches, vocabulary, and emphasis.",
            "explanation": {
              "en": "The instruction clearly lists 'their approaches, vocabulary, and emphasis' as comparison points.",
              "pt": "A instrução lista claramente 'suas abordagens, vocabulário e ênfase' como pontos de comparação."
            }
          }
        ]
      },
      {
        "id": "act-10-3",
        "title": {
          "en": "Interpret a Listening: News Broadcast Analysis",
          "pt": "Interpretar uma Escuta: Análise de Transmissão de Notícias"
        },
        "instruction": {
          "en": "Listen to a short clip of a news broadcast (provided by the instructor). Afterward, work with a partner to summarize the main points. Then, discuss how the broadcast might have presented a biased perspective, using expressions for analysis and discourse markers to explain any concessions or contrasts in the information presented.",
          "pt": "Ouça um pequeno clipe de uma transmissão de notícias (fornecido pelo instrutor). Depois, trabalhe com um parceiro para resumir os pontos principais. Em seguida, discuta como a transmissão pode ter apresentado uma perspectiva tendenciosa, usando expressões para análise e marcadores discursivos para explicar quaisquer concessões ou contrastes nas informações apresentadas."
        },
        "phrases": [
          {
            "en": "The broadcast emphasized X, nevertheless, it barely mentioned Y.",
            "pt": "A transmissão enfatizou X, no entanto, mal mencionou Y."
          },
          {
            "en": "Notwithstanding the factual basis, the tone felt biased.",
            "pt": "Apesar da base factual, o tom parecia tendencioso."
          },
          {
            "en": "They interviewed several sources, albeit mostly from one side.",
            "pt": "Eles entrevistaram várias fontes, embora a maioria de um lado."
          }
        ],
        "check": [
          {
            "id": "act-10-3-check-1",
            "prompt": {
              "en": "What is the first step after listening to the news clip?",
              "pt": "Qual é o primeiro passo depois de ouvir o clipe de notícias?"
            },
            "options": [
              "Immediately debate its bias.",
              "Summarize the main points with a partner.",
              "Write a full report."
            ],
            "answer": "Summarize the main points with a partner.",
            "explanation": {
              "en": "The instruction states 'work with a partner to summarize the main points' as the immediate next step.",
              "pt": "A instrução afirma 'trabalhe com um parceiro para resumir os pontos principais' como o próximo passo imediato."
            }
          },
          {
            "id": "act-10-3-check-2",
            "prompt": {
              "en": "What specific aspect of the broadcast should you discuss regarding bias?",
              "pt": "Que aspecto específico da transmissão você deve discutir em relação ao viés?"
            },
            "options": [
              "Only its grammar.",
              "How it might have presented a biased perspective.",
              "The exact number of journalists involved."
            ],
            "answer": "How it might have presented a biased perspective.",
            "explanation": {
              "en": "The instruction asks to 'discuss how the broadcast might have presented a biased perspective'.",
              "pt": "A instrução pede para 'discutir como a transmissão pode ter apresentado uma perspectiva tendenciosa'."
            }
          }
        ]
      }
    ],
    "challenge": {
      "id": "comm-chall-10-1",
      "title": {
        "en": "Presenting a News Analysis",
        "pt": "Apresentando uma Análise de Notícias"
      },
      "instruction": {
        "en": "Imagine you are a news analyst for a major media outlet. Choose a recent significant global event (e.g., an election, a natural disaster, a scientific discovery). Prepare a 3-minute oral presentation where you provide a concise 'analysis' of how this event was covered by different media 'sources'. You must use at least five of the new news media vocabulary terms, all three 'analysis' expressions, and each of the three discourse markers ('nevertheless', 'notwithstanding', 'albeit') at least once. Be ready to take questions.",
        "pt": "Imagine que você é um analista de notícias para um grande veículo de mídia. Escolha um evento global significativo recente (por exemplo, uma eleição, um desastre natural, uma descoberta científica). Prepare uma apresentação oral de 3 minutos onde você fornecerá uma 'análise' concisa de como este evento foi coberto por diferentes 'fontes' de mídia. Você deve usar pelo menos cinco dos novos termos de vocabulário de mídia de notícias, todas as três expressões de 'análise' e cada um dos três marcadores discursivos ('nevertheless', 'notwithstanding', 'albeit') pelo menos uma vez. Esteja pronto para responder a perguntas."
      },
      "phrases": [
        {
          "en": "Let's delve into the details of the coverage...",
          "pt": "Vamos nos aprofundar nos detalhes da cobertura..."
        },
        {
          "en": "The implications of this report are significant.",
          "pt": "As implicações desta reportagem são significativas."
        },
        {
          "en": "Notwithstanding some criticism, the journalist's interview provided key insights.",
          "pt": "Apesar de algumas críticas, a entrevista do jornalista forneceu insights importantes."
        }
      ],
      "check": [
        {
          "id": "chall-10-1-check-1",
          "prompt": {
            "en": "How many new news media vocabulary terms must be used in the presentation?",
            "pt": "Quantos novos termos de vocabulário de mídia de notícias devem ser usados na apresentação?"
          },
          "options": [
            "At least three.",
            "Exactly ten.",
            "At least five."
          ],
          "answer": "At least five.",
          "explanation": {
            "en": "The instruction specifies 'at least five of the new news media vocabulary terms'.",
            "pt": "A instrução especifica 'pelo menos cinco dos novos termos de vocabulário de mídia de notícias'."
          }
        },
        {
          "id": "chall-10-1-check-2",
          "prompt": {
            "en": "What is the minimum requirement for using the discourse markers ('nevertheless', 'notwithstanding', 'albeit')?",
            "pt": "Qual é o requisito mínimo para usar os marcadores discursivos ('nevertheless', 'notwithstanding', 'albeit')?"
          },
          "options": [
            "At least one of them.",
            "Each one at least once.",
            "Only 'nevertheless' is required."
          ],
          "answer": "Each one at least once.",
          "explanation": {
            "en": "The instruction states 'and each of the three discourse markers ('nevertheless', 'notwithstanding', 'albeit') at least once'.",
            "pt": "A instrução afirma 'e cada um dos três marcadores discursivos ('nevertheless', 'notwithstanding', 'albeit') pelo menos uma vez'."
          }
        }
      ]
    },
    "lessonReview": {
      "summary": {
        "en": "In this unit, you've explored the world of news media, expanded your vocabulary for discussing current events, and mastered discourse markers for presenting nuanced arguments. You've learned to analyze information critically and express complex ideas effectively.",
        "pt": "Nesta unidade, você explorou o mundo da mídia de notícias, expandiu seu vocabulário para discutir eventos atuais e dominou marcadores discursivos para apresentar argumentos matizados. Você aprendeu a analisar informações criticamente e a expressar ideias complexas de forma eficaz."
      },
      "canDo": [
        {
          "en": "I can identify and use key news media vocabulary (e.g., headline, journalist, opinion piece).",
          "pt": "Consigo identificar e usar vocabulário chave de mídia de notícias (por exemplo, headline, journalist, opinion piece)."
        },
        {
          "en": "I can use 'nevertheless', 'notwithstanding', and 'albeit' correctly to express contrast and concession.",
          "pt": "Consigo usar 'nevertheless', 'notwithstanding' e 'albeit' corretamente para expressar contraste e concessão."
        },
        {
          "en": "I can analyze and discuss news coverage from various sources, expressing nuanced opinions.",
          "pt": "Consigo analisar e discutir a cobertura de notícias de várias fontes, expressando opiniões matizadas."
        }
      ],
      "next": {
        "en": "Unit 11 will focus on business and economy, introducing vocabulary for market trends and grammar for conditionals (mixed and inverted).",
        "pt": "A Unidade 11 focará em negócios e economia, introduzindo vocabulário para tendências de mercado e gramática para condicionais (mistos e invertidos)."
      }
    }
  }
}
];
