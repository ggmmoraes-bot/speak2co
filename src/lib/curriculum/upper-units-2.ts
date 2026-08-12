import type { CourseUnit } from "./types";

/** Speak2Co — Upper-Intermediate English Course (B2). Units 11–20 do currículo oficial. */
export const UPPER_UNITS_11_20: CourseUnit[] = [
{
  "code": "UPPER-INTERMEDIATE-U11",
  "number": 11,
  "title": "Workplace Communication: Nuanced Modal Verbs",
  "titlePt": "Comunicação no Ambiente de Trabalho: Verbos Modais Nuanceados",
  "cefr": "B2",
  "objective": {
    "en": "To teach workplace vocabulary and nuanced modal verbs for hedging and diplomacy (might as well, would rather, ought to) in a contextualized manner.",
    "pt": "Ensinar vocabulário do ambiente de trabalho e verbos modais nuanceados para hedging e diplomacia (might as well, would rather, ought to) de forma contextualizada."
  },
  "communicationGoal": {
    "en": "Students will be able to use diplomacy and workplace vocabulary to communicate effectively in real-life situations.",
    "pt": "O aluno será capaz de usar 'diplomacy' e o vocabulário de workplace para se comunicar em situações reais."
  },
  "prerequisites": {
    "en": "Structure: Discourse markers for contrast and concession (nevertheless, notwithstanding, albeit). Vocabulary: News Media.",
    "pt": "Estrutura: Discourse markers for contrast and concession (nevertheless, notwithstanding, albeit). Vocabulário: News Media."
  },
  "newContent": {
    "en": "Grammar: Nuanced modal verbs for hedging and diplomacy (might as well, would rather, ought to). | Vocabulary: Workplace (10 lexical items) | Expressions: Diplomacy.",
    "pt": "Grammar: Nuanced modal verbs for hedging and diplomacy (might as well, would rather, ought to). | Vocabulary: Workplace (10 itens lexicais) | Expressions: Diplomacy."
  },
  "reviewContent": {
    "en": "Spiral review: Discourse markers for structuring arguments (that said, on the whole, to some extent) (Unit 4).",
    "pt": "Revisão em espiral: Discourse markers for structuring arguments (that said, on the whole, to some extent) (Unit 4)."
  },
  "discover": {
    "id": "UPPER-INTERMEDIATE-U11-DISCOVER",
    "warmUp": {
      "prompt": {
        "en": "Look at the images. What challenges do you think these people face in their work environment? How do they handle difficult conversations?",
        "pt": "Observe as imagens. Que desafios você acha que essas pessoas enfrentam no ambiente de trabalho? Como elas lidam com conversas difíceis?"
      },
      "phrases": [
        {
          "en": "It looks like a high-pressure situation.",
          "pt": "Parece uma situação de alta pressão."
        },
        {
          "en": "They might need to be very careful with their words.",
          "pt": "Eles podem precisar ser muito cuidadosos com as palavras."
        }
      ]
    },
    "context": {
      "situation": {
        "en": "Sarah, a project manager, is discussing a project delay with her team and a key client. She needs to deliver tough news while maintaining good relationships and finding a solution.",
        "pt": "Sarah, uma gerente de projeto, está discutindo um atraso de projeto com sua equipe e um cliente importante. Ela precisa entregar uma notícia difícil, mantendo bons relacionamentos e encontrando uma solução."
      },
      "dialogue": [
        {
          "who": "Client",
          "en": "Sarah, we're a bit concerned about the timeline for phase two. We were expecting delivery by Friday.",
          "pt": "Sarah, estamos um pouco preocupados com o cronograma da fase dois. Estávamos esperando a entrega até sexta-feira."
        },
        {
          "who": "Sarah",
          "en": "I understand your concern. We've hit a minor snag with the data integration. We might as well address it thoroughly now rather than later.",
          "pt": "Entendo sua preocupação. Encontramos um pequeno contratempo com a integração de dados. Poderíamos muito bem resolver isso completamente agora, em vez de mais tarde."
        },
        {
          "who": "Team Member",
          "en": "The team's been working overtime, but this specific issue is proving complex.",
          "pt": "A equipe tem trabalhado horas extras, mas essa questão específica está se mostrando complexa."
        },
        {
          "who": "Sarah",
          "en": "I appreciate the effort. Client, I'd rather we give you a realistic revised deadline than rush something that isn't fully robust. Perhaps early next week?",
          "pt": "Agradeço o esforço. Cliente, eu preferiria que lhe déssemos um prazo revisado realista do que apressar algo que não está totalmente robusto. Talvez no início da próxima semana?"
        },
        {
          "who": "Client",
          "en": "Early next week is difficult, but I take your point that quality is paramount. What ought to be done to mitigate this?",
          "pt": "Início da próxima semana é difícil, mas entendo seu ponto de que a qualidade é primordial. O que deveria ser feito para mitigar isso?"
        },
        {
          "who": "Sarah",
          "en": "We're exploring a parallel processing solution. That said, we ought to re-evaluate the resource allocation for phase three.",
          "pt": "Estamos explorando uma solução de processamento paralelo. Dito isso, deveríamos reavaliar a alocação de recursos para a fase três."
        }
      ]
    },
    "vocabulary": [
      {
        "term": "deadline",
        "pt": "prazo final",
        "ipa": "/ˈdɛdˌlaɪn/",
        "definition": "A date or time by which something must be completed.",
        "example": "We have a strict deadline of Friday for submitting the report.",
        "examplePt": "Temos um prazo final rigoroso, até sexta-feira, para enviar o relatório."
      },
      {
        "term": "presentation",
        "pt": "apresentação",
        "ipa": "/ˌprɛzənˈteɪʃən/",
        "definition": "A formal talk to a group of people, often with visuals, to explain or describe something.",
        "example": "His presentation on the new marketing strategy was very persuasive.",
        "examplePt": "A apresentação dele sobre a nova estratégia de marketing foi muito persuasiva."
      },
      {
        "term": "negotiation",
        "pt": "negociação",
        "ipa": "/nɪˌɡoʊʃiˈeɪʃən/",
        "definition": "Discussion aimed at reaching an agreement.",
        "example": "The negotiation for the new contract took several weeks.",
        "examplePt": "A negociação para o novo contrato levou várias semanas."
      },
      {
        "term": "promotion",
        "pt": "promoção",
        "ipa": "/prəˈmoʊʃən/",
        "definition": "The act of raising someone to a higher position or rank.",
        "example": "She worked hard for years before earning a promotion to senior manager.",
        "examplePt": "Ela trabalhou duro por anos antes de conseguir uma promoção para gerente sênior."
      },
      {
        "term": "feedback",
        "pt": "feedback",
        "ipa": "/ˈfiːdˌbæk/",
        "definition": "Information about reactions to a product, a person's performance of a task, etc., used as a basis for improvement.",
        "example": "Constructive feedback is crucial for personal and professional growth.",
        "examplePt": "O feedback construtivo é crucial para o crescimento pessoal e profissional."
      },
      {
        "term": "teamwork",
        "pt": "trabalho em equipe",
        "ipa": "/ˈtiːmˌwɜːrk/",
        "definition": "The collaborative effort of a group to achieve a common goal or to complete a task in the most effective and efficient way.",
        "example": "Effective teamwork was essential for completing the complex project on time.",
        "examplePt": "O trabalho em equipe eficaz foi essencial para concluir o projeto complexo no prazo."
      },
      {
        "term": "client",
        "pt": "cliente",
        "ipa": "/ˈklaɪənt/",
        "definition": "A person or organization using the services of a professional person or company.",
        "example": "We always prioritize our client's needs and satisfaction.",
        "examplePt": "Sempre priorizamos as necessidades e a satisfação de nossos clientes."
      },
      {
        "term": "report",
        "pt": "relatório",
        "ipa": "/rɪˈpɔːrt/",
        "definition": "A spoken or written account of something that has been observed, heard, done, or investigated.",
        "example": "Please submit your weekly progress report by the end of business today.",
        "examplePt": "Por favor, envie seu relatório de progresso semanal até o final do expediente de hoje."
      },
      {
        "term": "strategy",
        "pt": "estratégia",
        "ipa": "/ˈstrætədʒi/",
        "definition": "A plan of action designed to achieve a long-term or overall aim.",
        "example": "The company developed a new sales strategy to enter the international market.",
        "examplePt": "A empresa desenvolveu uma nova estratégia de vendas para entrar no mercado internacional."
      },
      {
        "term": "budget",
        "pt": "orçamento",
        "ipa": "/ˈbʌdʒɪt/",
        "definition": "An estimate of income and expenditure for a set period of time.",
        "example": "We need to ensure the project stays within the allocated budget.",
        "examplePt": "Precisamos garantir que o projeto permaneça dentro do orçamento alocado."
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
        "pt": "Eu discordaria um pouco disso."
      }
    ],
    "grammar": [
      {
        "title": {
          "en": "Nuanced Modal Verbs for Hedging and Diplomacy",
          "pt": "Verbos Modais Nuanceados para Hedging e Diplomacia"
        },
        "examples": [
          {
            "en": "It's late, we might as well finish this tomorrow.",
            "pt": "É tarde, poderíamos muito bem terminar isso amanhã."
          },
          {
            "en": "I'd rather work on the new project than review old documents.",
            "pt": "Eu preferiria trabalhar no novo projeto do que revisar documentos antigos."
          },
          {
            "en": "You ought to double-check those figures before the meeting.",
            "pt": "Você deveria verificar esses números novamente antes da reunião."
          }
        ],
        "rule": {
          "en": "'Might as well' suggests doing something because there's no better alternative or it's convenient, often with a slight resignation. 'Would rather' expresses preference. 'Ought to' indicates obligation, advice, or what is correct/expected, similar to 'should' but sometimes with a stronger sense of moral duty or expectation.",
          "pt": "'Might as well' sugere fazer algo porque não há alternativa melhor ou é conveniente, muitas vezes com uma leve resignação. 'Would rather' expressa preferência. 'Ought to' indica obrigação, conselho ou o que é correto/esperado, similar a 'should', mas às vezes com um senso mais forte de dever moral ou expectativa."
        },
        "mistakes": [
          {
            "en": "Incorrect: You should rather tell him the truth. Correct: You'd rather tell him the truth. (Using 'should' with 'rather' is grammatically incorrect.)",
            "pt": "Incorreto: You should rather tell him the truth. Correto: You'd rather tell him the truth. (Usar 'should' com 'rather' está gramaticalmente incorreto.)"
          },
          {
            "en": "Incorrect: We might as well to go home now. Correct: We might as well go home now. (No 'to' after 'might as well'.)",
            "pt": "Incorreto: We might as well to go home now. Correto: We might as well go home now. (Sem 'to' depois de 'might as well'.)"
          }
        ]
      }
    ],
    "controlledPractice": [
      {
        "id": "cp-11-1",
        "prompt": {
          "en": "Choose the best modal verb for this situation: 'We're already here, so we ______ wait for the manager to arrive, even if it takes a bit longer.'",
          "pt": "Escolha o melhor verbo modal para esta situação: 'Já estamos aqui, então nós ______ esperar o gerente chegar, mesmo que demore um pouco mais.'"
        },
        "options": [
          "would rather",
          "ought to",
          "might as well"
        ],
        "answer": "might as well",
        "explanation": {
          "en": "'Might as well' implies that since there's no better alternative and we're already here, we should do it.",
          "pt": "'Might as well' implica que, como não há alternativa melhor e já estamos aqui, devemos fazê-lo."
        }
      },
      {
        "id": "cp-11-2",
        "prompt": {
          "en": "Complete the sentence with the correct diplomatic expression: 'I appreciate your perspective, but ______ push back slightly on that particular point.'",
          "pt": "Complete a frase com a expressão diplomática correta: 'Aprecio sua perspectiva, mas ______ discordaria um pouco desse ponto em particular.'"
        },
        "options": [
          "I'd",
          "I might",
          "I should"
        ],
        "answer": "I'd",
        "explanation": {
          "en": "The expression is 'I'd push back slightly on that,' where 'I'd' is the contraction of 'I would.'",
          "pt": "A expressão é 'I'd push back slightly on that', onde 'I'd' é a contração de 'I would'."
        }
      },
      {
        "id": "cp-11-3",
        "prompt": {
          "en": "Which option correctly uses 'would rather' to express preference? 'I ______ work from home tomorrow than commute during the storm.'",
          "pt": "Qual opção usa corretamente 'would rather' para expressar preferência? 'Eu ______ trabalhar de casa amanhã do que me deslocar durante a tempestade.'"
        },
        "options": [
          "would rather",
          "ought to",
          "might as well"
        ],
        "answer": "would rather",
        "explanation": {
          "en": "'Would rather' is used to express a preference between two options.",
          "pt": "'Would rather' é usado para expressar uma preferência entre duas opções."
        }
      },
      {
        "id": "cp-11-4",
        "prompt": {
          "en": "Identify the diplomatic phrase in this sentence: 'That's a fair assessment, but we need to consider the long-term impact.'",
          "pt": "Identifique a frase diplomática nesta sentença: 'Essa é uma avaliação justa, mas precisamos considerar o impacto a longo prazo.'"
        },
        "options": [
          "we need to consider",
          "That's a fair assessment, but...",
          "long-term impact"
        ],
        "answer": "That's a fair assessment, but...",
        "explanation": {
          "en": "'That's a fair assessment, but...' is a common diplomatic expression used to acknowledge a point before presenting a counterpoint or additional consideration.",
          "pt": "'That's a fair assessment, but...' é uma expressão diplomática comum usada para reconhecer um ponto antes de apresentar um contraponto ou consideração adicional."
        }
      }
    ],
    "input": {
      "kind": "reading",
      "title": {
        "en": "Navigating Workplace Dynamics with Diplomacy",
        "pt": "Navegando a Dinâmica do Ambiente de Trabalho com Diplomacia"
      },
      "lines": [
        {
          "en": "In today's fast-paced corporate environment, effective communication is paramount. This often means delivering difficult messages or disagreeing respectfully without jeopardizing professional relationships. Diplomacy, therefore, isn't merely a soft skill but a strategic necessity.",
          "pt": "No ambiente corporativo acelerado de hoje, a comunicação eficaz é fundamental. Isso muitas vezes significa entregar mensagens difíceis ou discordar respeitosamente sem comprometer os relacionamentos profissionais. A diplomacia, portanto, não é apenas uma soft skill, mas uma necessidade estratégica."
        },
        {
          "en": "Using nuanced modal verbs allows us to soften our statements, offering suggestions rather than demands. For instance, instead of saying 'You must finish this by Friday,' a more diplomatic approach would be, 'You ought to aim to finish this by Friday, if possible.' This subtle shift can make a significant difference in how a message is received.",
          "pt": "Usar verbos modais nuanceados nos permite suavizar nossas declarações, oferecendo sugestões em vez de demandas. Por exemplo, em vez de dizer 'Você deve terminar isso até sexta-feira', uma abordagem mais diplomática seria 'Você deveria tentar terminar isso até sexta-feira, se possível.' Essa mudança sutil pode fazer uma diferença significativa na forma como uma mensagem é recebida."
        },
        {
          "en": "Expressions like 'I take your point, although...' or 'That's a fair assessment, but...' are invaluable tools. They acknowledge the other person's contribution before introducing an alternative perspective, making the conversation feel collaborative rather than confrontational. It shows respect and opens the door for productive negotiation.",
          "pt": "Expressões como 'Eu entendo seu ponto, embora...' ou 'Essa é uma avaliação justa, mas...' são ferramentas inestimáveis. Elas reconhecem a contribuição da outra pessoa antes de introduzir uma perspectiva alternativa, tornando a conversa colaborativa em vez de confrontadora. Isso demonstra respeito e abre a porta para uma negociação produtiva."
        },
        {
          "en": "When faced with a less-than-ideal situation, phrases such as 'We might as well proceed with option A, as there aren't many other viable alternatives at this point' can express resignation tempered with practicality. Similarly, 'I'd rather we focus our budget on marketing than on a new office space right now' clearly states a preference without being overly aggressive.",
          "pt": "Quando confrontado com uma situação menos que ideal, frases como 'Poderíamos muito bem prosseguir com a opção A, pois não há muitas outras alternativas viáveis neste momento' podem expressar resignação temperada com praticidade. Da mesma forma, 'Eu preferiria que focássemos nosso orçamento em marketing do que em um novo espaço de escritório agora' declara claramente uma preferência sem ser excessivamente agressivo."
        },
        {
          "en": "Mastering these linguistic subtleties empowers professionals to navigate complex teamwork scenarios, deliver critical feedback, and engage in successful client negotiations, ultimately fostering a more positive and productive workplace environment.",
          "pt": "Dominar essas sutilezas linguísticas capacita os profissionais a navegar por cenários complexos de trabalho em equipe, dar feedback crítico e se envolver em negociações bem-sucedidas com clientes, promovendo, em última análise, um ambiente de trabalho mais positivo e produtivo."
        }
      ],
      "questions": [
        {
          "id": "input-q-11-1",
          "prompt": {
            "en": "According to the text, why is diplomacy considered a strategic necessity in the corporate environment?",
            "pt": "De acordo com o texto, por que a diplomacia é considerada uma necessidade estratégica no ambiente corporativo?"
          },
          "options": [
            "Because it makes conversations longer.",
            "Because it helps deliver difficult messages and disagree respectfully without harming professional relationships.",
            "Because it is only a soft skill that is nice to have."
          ],
          "answer": "Because it helps deliver difficult messages and disagree respectfully without harming professional relationships.",
          "explanation": {
            "en": "The text states diplomacy helps 'delivering difficult messages or disagreeing respectfully without jeopardizing professional relationships.'",
            "pt": "O texto afirma que a diplomacia ajuda a 'entregar mensagens difíceis ou discordar respeitosamente sem comprometer os relacionamentos profissionais'."
          }
        },
        {
          "id": "input-q-11-2",
          "prompt": {
            "en": "What is the main benefit of using nuanced modal verbs like 'ought to' instead of 'must'?",
            "pt": "Qual é o principal benefício de usar verbos modais nuanceados como 'ought to' em vez de 'must'?"
          },
          "options": [
            "They make statements sound more demanding.",
            "They soften statements and offer suggestions rather than demands.",
            "They are only used in informal settings."
          ],
          "answer": "They soften statements and offer suggestions rather than demands.",
          "explanation": {
            "en": "The text explains that 'nuanced modal verbs allow us to soften our statements, offering suggestions rather than demands.'",
            "pt": "O texto explica que 'verbos modais nuanceados nos permitem suavizar nossas declarações, oferecendo sugestões em vez de demandas'."
          }
        },
        {
          "id": "input-q-11-3",
          "prompt": {
            "en": "How do expressions like 'I take your point, although...' facilitate communication?",
            "pt": "Como expressões como 'Eu entendo seu ponto, embora...' facilitam a comunicação?"
          },
          "options": [
            "They signal immediate disagreement and confrontation.",
            "They avoid acknowledging the other person's viewpoint.",
            "They acknowledge the other person's contribution before introducing an alternative, promoting collaboration."
          ],
          "answer": "They acknowledge the other person's contribution before introducing an alternative, promoting collaboration.",
          "explanation": {
            "en": "The text says these expressions 'acknowledge the other person's contribution before introducing an alternative perspective, making the conversation feel collaborative.'",
            "pt": "O texto diz que essas expressões 'reconhecem a contribuição da outra pessoa antes de introduzir uma perspectiva alternativa, tornando a conversa colaborativa'."
          }
        }
      ]
    },
    "quickCheck": [
      {
        "id": "qc-11-1",
        "prompt": {
          "en": "Which modal verb would you use to express a strong preference for one action over another?",
          "pt": "Qual verbo modal você usaria para expressar uma forte preferência por uma ação em detrimento de outra?"
        },
        "options": [
          "might as well",
          "would rather",
          "ought to"
        ],
        "answer": "would rather",
        "explanation": {
          "en": "'Would rather' is specifically used to indicate a preference.",
          "pt": "'Would rather' é usado especificamente para indicar uma preferência."
        }
      },
      {
        "id": "qc-11-2",
        "prompt": {
          "en": "You've been asked to review a colleague's proposal, and you think it needs significant changes. Which diplomatic expression would be best to start your feedback?",
          "pt": "Você foi solicitado a revisar a proposta de um colega e acha que ela precisa de mudanças significativas. Qual expressão diplomática seria melhor para iniciar seu feedback?"
        },
        "options": [
          "Your proposal is wrong.",
          "I'd push back slightly on some aspects of the proposal.",
          "You must change this immediately."
        ],
        "answer": "I'd push back slightly on some aspects of the proposal.",
        "explanation": {
          "en": "'I'd push back slightly on that' allows you to express disagreement or suggest changes in a soft, diplomatic manner.",
          "pt": "'I'd push back slightly on that' permite expressar desacordo ou sugerir mudanças de forma suave e diplomática."
        }
      },
      {
        "id": "qc-11-3",
        "prompt": {
          "en": "Your team has to decide between two imperfect options. You feel that since one option is slightly less problematic, you should just go with it. Which phrase reflects this sentiment?",
          "pt": "Sua equipe precisa decidir entre duas opções imperfeitas. Você sente que, como uma opção é ligeiramente menos problemática, vocês deveriam simplesmente escolhê-la. Qual frase reflete esse sentimento?"
        },
        "options": [
          "We ought to choose the other one.",
          "We would rather wait.",
          "We might as well proceed with this option."
        ],
        "answer": "We might as well proceed with this option.",
        "explanation": {
          "en": "'Might as well' is used when there isn't a perfect solution, so you choose the most practical or least bad alternative.",
          "pt": "'Might as well' é usado quando não há uma solução perfeita, então você escolhe a alternativa mais prática ou menos ruim."
        }
      },
      {
        "id": "qc-11-4",
        "prompt": {
          "en": "Which of these is NOT a diplomatic expression learned in this unit?",
          "pt": "Qual destas NÃO é uma expressão diplomática aprendida nesta unidade?"
        },
        "options": [
          "I take your point, although...",
          "That's a fair assessment, but...",
          "You are completely mistaken."
        ],
        "answer": "You are completely mistaken.",
        "explanation": {
          "en": "'You are completely mistaken' is a direct and confrontational statement, not a diplomatic one.",
          "pt": "'You are completely mistaken' é uma afirmação direta e confrontadora, não diplomática."
        }
      }
    ]
  },
  "communicate": {
    "id": "UPPER-INTERMEDIATE-U11-COMMUNICATE",
    "review": [
      {
        "en": "Recap: Nuanced modal verbs (might as well, would rather, ought to) are used for hedging and expressing preferences or soft advice.",
        "pt": "Recapitulação: Verbos modais nuanceados (might as well, would rather, ought to) são usados para hedging e expressar preferências ou conselhos suaves."
      },
      {
        "en": "Recall: Workplace vocabulary covered key terms like 'deadline,' 'negotiation,' and 'feedback.'",
        "pt": "Lembrar: O vocabulário de workplace cobriu termos chave como 'deadline,' 'negotiation,' e 'feedback.'"
      },
      {
        "en": "Remember: Diplomatic expressions like 'I take your point, although...' help maintain positive professional relationships.",
        "pt": "Lembrar: Expressões diplomáticas como 'I take your point, although...' ajudam a manter relacionamentos profissionais positivos."
      }
    ],
    "activities": [
      {
        "id": "comm-act-11-1",
        "title": {
          "en": "Discuss: Project Delay Scenario",
          "pt": "Discuta: Cenário de Atraso de Projeto"
        },
        "instruction": {
          "en": "Imagine you are a project lead. A key part of your team's project is delayed due to an unexpected technical issue. You need to inform your client and your internal stakeholders. Discuss how you would convey this news using diplomatic language and nuanced modal verbs to manage expectations and propose solutions.",
          "pt": "Imagine que você é um líder de projeto. Uma parte fundamental do projeto da sua equipe está atrasada devido a um problema técnico inesperado. Você precisa informar seu cliente e seus stakeholders internos. Discuta como você transmitiria essa notícia usando linguagem diplomática e verbos modais nuanceados para gerenciar expectativas e propor soluções."
        },
        "phrases": [
          {
            "en": "We might as well be transparent about this now.",
            "pt": "Poderíamos muito bem ser transparentes sobre isso agora."
          },
          {
            "en": "I'd rather we explore all options before setting a new deadline.",
            "pt": "Eu preferiria que explorássemos todas as opções antes de definir um novo prazo."
          },
          {
            "en": "We ought to inform them of the revised timeline.",
            "pt": "Nós deveríamos informá-los sobre o cronograma revisado."
          }
        ],
        "check": [
          {
            "id": "ca-11-1-qc-1",
            "prompt": {
              "en": "In your discussion, did you use 'might as well' to suggest an action that, while not ideal, is the most practical given the circumstances?",
              "pt": "Na sua discussão, você usou 'might as well' para sugerir uma ação que, embora não ideal, é a mais prática dadas as circunstâncias?"
            },
            "options": [
              "Yes, I did.",
              "No, I used it for a strong obligation.",
              "No, I used it to express a strong preference."
            ],
            "answer": "Yes, I did.",
            "explanation": {
              "en": "'Might as well' is used for practical, often resigned, suggestions when alternatives are limited.",
              "pt": "'Might as well' é usado para sugestões práticas, muitas vezes resignadas, quando as alternativas são limitadas."
            }
          },
          {
            "id": "ca-11-1-qc-2",
            "prompt": {
              "en": "When discussing the client's perspective, did you use expressions like 'I take your point, although...' to acknowledge their concern before proposing a solution?",
              "pt": "Ao discutir a perspectiva do cliente, você usou expressões como 'I take your point, although...' para reconhecer a preocupação deles antes de propor uma solução?"
            },
            "options": [
              "Yes, I used it to show empathy and open the discussion.",
              "No, I directly stated my solution.",
              "I didn't acknowledge their point."
            ],
            "answer": "Yes, I used it to show empathy and open the discussion.",
            "explanation": {
              "en": "Acknowledging the other party's point is key to diplomatic communication.",
              "pt": "Reconhecer o ponto da outra parte é fundamental para a comunicação diplomática."
            }
          }
        ]
      },
      {
        "id": "comm-act-11-2",
        "title": {
          "en": "Argue Your Position: Budget Allocation",
          "pt": "Defenda Sua Posição: Alocação de Orçamento"
        },
        "instruction": {
          "en": "Your team needs to decide how to allocate the remaining project budget. One team member wants to invest heavily in a risky new technology, while you believe the funds ought to be used for team training and stability. Argue your position diplomatically, using 'would rather' to express your preference and 'ought to' for your advice.",
          "pt": "Sua equipe precisa decidir como alocar o orçamento restante do projeto. Um membro da equipe quer investir pesadamente em uma nova tecnologia arriscada, enquanto você acredita que os fundos deveriam ser usados para treinamento da equipe e estabilidade. Defenda sua posição diplomaticamente, usando 'would rather' para expressar sua preferência e 'ought to' para seu conselho."
        },
        "phrases": [
          {
            "en": "I'd rather we secure the team's capabilities first.",
            "pt": "Eu preferiria que garantíssemos as capacidades da equipe primeiro."
          },
          {
            "en": "We ought to prioritize stability given our past experiences.",
            "pt": "Nós deveríamos priorizar a estabilidade dadas as nossas experiências passadas."
          },
          {
            "en": "That's a fair assessment of the new tech's potential, but...",
            "pt": "Essa é uma avaliação justa do potencial da nova tecnologia, mas..."
          }
        ],
        "check": [
          {
            "id": "ca-11-2-qc-1",
            "prompt": {
              "en": "Did you use 'would rather' to clearly state your preference regarding budget allocation?",
              "pt": "Você usou 'would rather' para expressar claramente sua preferência em relação à alocação do orçamento?"
            },
            "options": [
              "Yes, I directly expressed what I prefer.",
              "No, I used 'ought to' for my preference.",
              "No, I used 'might as well' for my preference."
            ],
            "answer": "Yes, I directly expressed what I prefer.",
            "explanation": {
              "en": "'Would rather' is the correct modal verb for expressing a clear preference between options.",
              "pt": "'Would rather' é o verbo modal correto para expressar uma preferência clara entre opções."
            }
          },
          {
            "id": "ca-11-2-qc-2",
            "prompt": {
              "en": "How did you address the other team member's idea for the risky new technology?",
              "pt": "Como você abordou a ideia do outro membro da equipe para a nova tecnologia arriscada?"
            },
            "options": [
              "I dismissed it as a bad idea.",
              "I acknowledged it diplomatically before presenting my alternative.",
              "I agreed with it to avoid conflict."
            ],
            "answer": "I acknowledged it diplomatically before presenting my alternative.",
            "explanation": {
              "en": "Diplomacy involves acknowledging others' contributions even when disagreeing, using phrases like 'That's a fair assessment, but...'",
              "pt": "A diplomacia envolve reconhecer as contribuições dos outros mesmo quando há desacordo, usando frases como 'Essa é uma avaliação justa, mas...'"
            }
          }
        ]
      },
      {
        "id": "comm-act-11-3",
        "title": {
          "en": "Summarize: Client Meeting Outcomes",
          "pt": "Resumir: Resultados da Reunião com o Cliente"
        },
        "instruction": {
          "en": "You just finished a challenging client meeting where some compromises were made. Summarize the key outcomes for your team, emphasizing the agreements and any new 'ought to' or 'might as well' actions. Use diplomatic language to frame any concessions.",
          "pt": "Você acabou de terminar uma reunião desafiadora com o cliente, onde alguns compromissos foram feitos. Resuma os principais resultados para sua equipe, enfatizando os acordos e quaisquer novas ações que 'deveriam' ou 'poderiam muito bem' ser feitas. Use linguagem diplomática para enquadrar quaisquer concessões."
        },
        "phrases": [
          {
            "en": "Given the client's concerns, we might as well adjust the scope slightly.",
            "pt": "Dadas as preocupações do cliente, poderíamos muito bem ajustar o escopo ligeiramente."
          },
          {
            "en": "We ought to ensure all team members are aligned with these changes.",
            "pt": "Nós deveríamos garantir que todos os membros da equipe estejam alinhados com essas mudanças."
          },
          {
            "en": "I take their point regarding the budget, although...",
            "pt": "Eu entendo o ponto deles em relação ao orçamento, embora..."
          }
        ],
        "check": [
          {
            "id": "ca-11-3-qc-1",
            "prompt": {
              "en": "Did your summary clearly outline what actions the team 'ought to' take based on the meeting's outcomes?",
              "pt": "Seu resumo delineou claramente quais ações a equipe 'deveria' tomar com base nos resultados da reunião?"
            },
            "options": [
              "Yes, I used 'ought to' for essential next steps.",
              "No, I just listed things to do without 'ought to'.",
              "I used 'would rather' instead of 'ought to'."
            ],
            "answer": "Yes, I used 'ought to' for essential next steps.",
            "explanation": {
              "en": "'Ought to' is appropriate for suggesting or advising on necessary actions.",
              "pt": "'Ought to' é apropriado para sugerir ou aconselhar sobre ações necessárias."
            }
          },
          {
            "id": "ca-11-3-qc-2",
            "prompt": {
              "en": "How did you phrase any compromises or concessions made during the meeting to your team?",
              "pt": "Como você formulou quaisquer compromissos ou concessões feitos durante a reunião para sua equipe?"
            },
            "options": [
              "As unavoidable failures.",
              "Using diplomatic language like 'might as well' to frame them as practical adjustments.",
              "As strict demands from the client."
            ],
            "answer": "Using diplomatic language like 'might as well' to frame them as practical adjustments.",
            "explanation": {
              "en": "Using 'might as well' helps frame concessions as practical decisions rather than defeats.",
              "pt": "Usar 'might as well' ajuda a enquadrar as concessões como decisões práticas, e não como derrotas."
            }
          }
        ]
      }
    ],
    "challenge": {
      "id": "comm-chall-11-1",
      "title": {
        "en": "Client Conflict Resolution",
        "pt": "Resolução de Conflitos com o Cliente"
      },
      "instruction": {
        "en": "A long-standing client is unhappy with the last deliverable and is threatening to pull their business. You need to call them and try to salvage the relationship. Craft a conversation where you acknowledge their frustration, use nuanced modal verbs to propose a solution (e.g., a revised project plan, a discount), and utilize diplomatic expressions to rebuild trust.",
        "pt": "Um cliente de longa data está insatisfeito com a última entrega e ameaça retirar seu negócio. Você precisa ligar para eles e tentar salvar o relacionamento. Crie uma conversa onde você reconheça a frustração deles, use verbos modais nuanceados para propor uma solução (por exemplo, um plano de projeto revisado, um desconto) e utilize expressões diplomáticas para reconstruir a confiança."
      },
      "phrases": [
        {
          "en": "I understand your frustration, and I take your point about the quality.",
          "pt": "Entendo sua frustração e entendo seu ponto sobre a qualidade."
        },
        {
          "en": "We might as well offer a substantial discount on the next phase to show our commitment.",
          "pt": "Poderíamos muito bem oferecer um desconto substancial na próxima fase para mostrar nosso comprometimento."
        },
        {
          "en": "I'd rather we focus on finding a mutually beneficial path forward.",
          "pt": "Eu preferiria que nos concentrássemos em encontrar um caminho mutuamente benéfico para avançar."
        }
      ],
      "check": [
        {
          "id": "cc-11-1-qc-1",
          "prompt": {
            "en": "Did your conversation begin by directly addressing the client's frustration and acknowledging their point using diplomatic expressions?",
            "pt": "Sua conversa começou abordando diretamente a frustração do cliente e reconhecendo o ponto deles usando expressões diplomáticas?"
          },
          "options": [
            "Yes, I started by acknowledging their concerns.",
            "No, I immediately jumped to offering solutions.",
            "I tried to deny their frustration."
          ],
          "answer": "Yes, I started by acknowledging their concerns.",
          "explanation": {
            "en": "Starting by acknowledging their frustration and point is crucial for building rapport and showing empathy.",
            "pt": "Começar reconhecendo a frustração e o ponto deles é crucial para construir rapport e mostrar empatia."
          }
        },
        {
          "id": "cc-11-1-qc-2",
          "prompt": {
            "en": "When proposing solutions, did you use 'might as well' for a practical, perhaps less-than-ideal, but necessary step, and 'would rather' for a preferred course of action?",
            "pt": "Ao propor soluções, você usou 'might as well' para um passo prático, talvez menos ideal, mas necessário, e 'would rather' para um curso de ação preferencial?"
          },
          "options": [
            "Yes, I differentiated between practical steps and preferred outcomes.",
            "No, I used only 'ought to' for all suggestions.",
            "I used them interchangeably without specific intent."
          ],
          "answer": "Yes, I differentiated between practical steps and preferred outcomes.",
          "explanation": {
            "en": "Effective use of these nuanced modals demonstrates a clear understanding of their specific implications.",
            "pt": "O uso eficaz desses modais nuanceados demonstra uma compreensão clara de suas implicações específicas."
          }
        }
      ]
    },
    "lessonReview": {
      "summary": {
        "en": "In this unit, we explored workplace vocabulary and mastered nuanced modal verbs (might as well, would rather, ought to) for diplomatic communication. We practiced using these tools along with diplomatic expressions to navigate challenging professional scenarios, fostering respect and productive outcomes.",
        "pt": "Nesta unidade, exploramos o vocabulário do ambiente de trabalho e dominamos verbos modais nuanceados (might as well, would rather, ought to) para comunicação diplomática. Praticamos o uso dessas ferramentas, juntamente com expressões diplomáticas, para navegar por cenários profissionais desafiadores, promovendo respeito e resultados produtivos."
      },
      "canDo": [
        {
          "en": "Use 'might as well' to suggest a practical action when other options are limited.",
          "pt": "Usar 'might as well' para sugerir uma ação prática quando outras opções são limitadas."
        },
        {
          "en": "Express preferences diplomatically using 'would rather' in professional contexts.",
          "pt": "Expressar preferências diplomaticamente usando 'would rather' em contextos profissionais."
        },
        {
          "en": "Provide advice or suggest a correct course of action using 'ought to' tactfully.",
          "pt": "Oferecer conselhos ou sugerir um curso de ação correto usando 'ought to' com tato."
        }
      ],
      "next": {
        "en": "Next, we'll delve into Unit 12: Business Ethics, focusing on advanced conditional structures.",
        "pt": "Em seguida, abordaremos a Unidade 12: Ética nos Negócios, com foco em estruturas condicionais avançadas."
      }
    }
  }
},
{
  "code": "UPPER-INTERMEDIATE-U12",
  "number": 12,
  "title": "Health — Advanced Collocations for Argumentation and Debate",
  "titlePt": "Saúde — Colocações avançadas para argumentação e debate",
  "cefr": "B2",
  "objective": {
    "en": "To teach health and advanced collocations for argumentation and debate in a contextualized manner.",
    "pt": "Ensinar health e advanced collocations for argumentation and debate de forma contextualizada."
  },
  "communicationGoal": {
    "en": "The student will be able to use 'persuasion' and health vocabulary to communicate in real situations.",
    "pt": "O aluno será capaz de usar 'persuasion' e o vocabulário de health para se comunicar em situações reais."
  },
  "prerequisites": {
    "en": "Grammar: Nuanced modal verbs for hedging and diplomacy (might as well, would rather, ought to). Vocabulary: Workplace.",
    "pt": "Estrutura: Nuanced modal verbs for hedging and diplomacy (might as well, would rather, ought to). Vocabulário: Workplace."
  },
  "newContent": {
    "en": "Grammar: Advanced collocations for argumentation and debate. | Vocabulary: Health (10 lexical items) | Expressions: Persuasion",
    "pt": "Grammar: Advanced collocations for argumentation and debate. | Vocabulary: Health (10 itens lexicais) | Expressions: Persuasion"
  },
  "reviewContent": {
    "en": "Spiral review: Advanced passive structures, including passive with modals and reporting verbs (Unit 5).",
    "pt": "Revisão em espiral: Advanced passive structures, including passive with modals and reporting verbs (Unit 5)."
  },
  "discover": {
    "id": "UPPER-INTERMEDIATE-U12-DISCOVER",
    "warmUp": {
      "prompt": {
        "en": "Look at the images. What do they tell you about health? What are common health concerns in your country? Discuss with a partner.",
        "pt": "Observe as imagens. O que elas dizem sobre saúde? Quais são as preocupações comuns de saúde em seu país? Discuta com um parceiro."
      },
      "phrases": [
        {
          "en": "Staying active is crucial for good health.",
          "pt": "Manter-se ativo é crucial para uma boa saúde."
        },
        {
          "en": "Mental well-being is as important as physical health.",
          "pt": "O bem-estar mental é tão importante quanto a saúde física."
        }
      ]
    },
    "context": {
      "situation": {
        "en": "Dr. Lee is trying to persuade a patient, Mr. Henderson, to adopt a healthier lifestyle. Mr. Henderson is skeptical about some of the recommendations.",
        "pt": "Dr. Lee está tentando persuadir um paciente, Sr. Henderson, a adotar um estilo de vida mais saudável. O Sr. Henderson está cético em relação a algumas das recomendações."
      },
      "dialogue": [
        {
          "who": "Dr. Lee",
          "en": "Mr. Henderson, we've discussed your symptoms, and the evidence suggests a need for significant lifestyle changes.",
          "pt": "Sr. Henderson, discutimos seus sintomas, e as evidências sugerem a necessidade de mudanças significativas no estilo de vida."
        },
        {
          "who": "Mr. Henderson",
          "en": "I understand, Doctor, but I'm not convinced. I've always been active.",
          "pt": "Eu entendo, Doutor, mas não estou convencido. Eu sempre fui ativo."
        },
        {
          "who": "Dr. Lee",
          "en": "While that's true, it's worth considering that modern diets have changed. A compelling case can be made for reducing processed foods.",
          "pt": "Embora isso seja verdade, vale a pena considerar que as dietas modernas mudaram. Um argumento convincente pode ser feito para reduzir alimentos processados."
        },
        {
          "who": "Mr. Henderson",
          "en": "Are you suggesting I completely alter my eating habits overnight? That sounds drastic.",
          "pt": "Você está sugerindo que eu altere completamente meus hábitos alimentares da noite para o dia? Isso parece drástico."
        },
        {
          "who": "Dr. Lee",
          "en": "Not overnight, but gradually. For instance, incorporating more fresh produce. You have a valid point about drastic changes, so we'll start small.",
          "pt": "Não da noite para o dia, mas gradualmente. Por exemplo, incorporando mais produtos frescos. Você tem um ponto válido sobre mudanças drásticas, então começaremos pequeno."
        },
        {
          "who": "Mr. Henderson",
          "en": "Okay, perhaps we can play devil's advocate for a moment and consider alternatives before committing.",
          "pt": "Ok, talvez possamos bancar o advogado do diabo por um momento e considerar alternativas antes de nos comprometermos."
        }
      ]
    },
    "vocabulary": [
      {
        "term": "headache",
        "pt": "dor de cabeça",
        "ipa": "/ˈhɛdeɪk/",
        "definition": "A continuous pain in the head.",
        "example": "She took some medicine to get rid of her terrible headache.",
        "examplePt": "Ela tomou um remédio para se livrar de sua terrível dor de cabeça."
      },
      {
        "term": "fever",
        "pt": "febre",
        "ipa": "/ˈfiːvər/",
        "definition": "A higher than normal body temperature, often a symptom of illness.",
        "example": "The child had a high fever and felt very weak.",
        "examplePt": "A criança estava com febre alta e se sentia muito fraca."
      },
      {
        "term": "cold",
        "pt": "resfriado",
        "ipa": "/koʊld/",
        "definition": "A common viral infection that causes nasal congestion, sneezing, and sore throat.",
        "example": "I caught a cold last week and I'm still coughing.",
        "examplePt": "Peguei um resfriado na semana passada e ainda estou tossindo."
      },
      {
        "term": "doctor",
        "pt": "médico",
        "ipa": "/ˈdɒktər/",
        "definition": "A person qualified to practice medicine.",
        "example": "You should see a doctor about that persistent cough.",
        "examplePt": "Você deveria consultar um médico sobre essa tosse persistente."
      },
      {
        "term": "pharmacy",
        "pt": "farmácia",
        "ipa": "/ˈfɑːrməsi/",
        "definition": "A place where medicines are prepared and sold.",
        "example": "I need to go to the pharmacy to pick up my prescription.",
        "examplePt": "Preciso ir à farmácia para pegar minha receita."
      },
      {
        "term": "medicine",
        "pt": "remédio",
        "ipa": "/ˈmɛdɪsɪn/",
        "definition": "A substance, especially a liquid or pill, used for treating or preventing disease.",
        "example": "Have you taken your medicine today?",
        "examplePt": "Você tomou seu remédio hoje?"
      },
      {
        "term": "appointment",
        "pt": "consulta",
        "ipa": "/əˈpɔɪntmənt/",
        "definition": "A formal arrangement to meet or visit someone at a particular time.",
        "example": "I have a dentist appointment at 3 PM tomorrow.",
        "examplePt": "Tenho uma consulta com o dentista amanhã às 15h."
      },
      {
        "term": "symptom",
        "pt": "sintoma",
        "ipa": "/ˈsɪmptəm/",
        "definition": "A physical or mental feature which is regarded as indicating a condition of disease, particularly a disease for which there is a known cause.",
        "example": "Fever and cough are common symptoms of the flu.",
        "examplePt": "Febre e tosse são sintomas comuns da gripe."
      },
      {
        "term": "rest",
        "pt": "descanso",
        "ipa": "/rɛst/",
        "definition": "To cease work or movement in order to relax, sleep, or recover strength.",
        "example": "The doctor advised him to get plenty of rest.",
        "examplePt": "O médico o aconselhou a descansar bastante."
      },
      {
        "term": "exercise",
        "pt": "exercício",
        "ipa": "/ˈɛksərsaɪz/",
        "definition": "Activity requiring physical effort, carried out to sustain or improve health and fitness.",
        "example": "Regular exercise is vital for maintaining a healthy heart.",
        "examplePt": "Exercícios regulares são vitais para manter um coração saudável."
      }
    ],
    "expressions": [
      {
        "en": "The evidence suggests...",
        "pt": "A evidência sugere que..."
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
          "en": "Advanced Collocations for Argumentation and Debate",
          "pt": "Colocações avançadas para argumentação e debate"
        },
        "examples": [
          {
            "en": "When discussing complex issues, it's often useful to **play devil's advocate** to explore all angles.",
            "pt": "Ao discutir questões complexas, é frequentemente útil **bancar o advogado do diabo** para explorar todos os ângulos."
          },
          {
            "en": "Her detailed report **made a compelling case** for investing in renewable energy.",
            "pt": "Seu relatório detalhado **apresentou um argumento convincente** para investir em energia renovável."
          },
          {
            "en": "Even if I don't fully agree, I have to admit you **have a valid point** about the long-term benefits.",
            "pt": "Mesmo que eu não concorde totalmente, tenho que admitir que você **tem um ponto válido** sobre os benefícios a longo prazo."
          }
        ],
        "rule": {
          "en": "Advanced collocations for argumentation and debate are combinations of words that frequently occur together, creating a natural and sophisticated way to express agreement, disagreement, or nuanced perspectives. These collocations enhance precision and impact in formal discussions and persuasive communication. They often involve verbs, nouns, and adjectives that, when paired, convey specific rhetorical functions.",
          "pt": "Colocações avançadas para argumentação e debate são combinações de palavras que ocorrem frequentemente juntas, criando uma maneira natural e sofisticada de expressar acordo, desacordo ou perspectivas matizadas. Essas colocações aumentam a precisão e o impacto em discussões formais e comunicação persuasiva. Elas frequentemente envolvem verbos, substantivos e adjetivos que, quando combinados, transmitem funções retóricas específicas."
        },
        "mistakes": [
          {
            "en": "Incorrect: You need to *make a strong argument* for your opinion. (Better: You need to *make a compelling case* for your opinion.)",
            "pt": "Incorreto: Você precisa *fazer um argumento forte* para sua opinião. (Melhor: Você precisa *apresentar um argumento convincente* para sua opinião.)"
          },
          {
            "en": "Incorrect: I'll *play the opponent* to see the other side. (Better: I'll *play devil's advocate* to see the other side.)",
            "pt": "Incorreto: Eu vou *bancar o oponente* para ver o outro lado. (Melhor: Eu vou *bancar o advogado do diabo* para ver o outro lado.)"
          }
        ]
      }
    ],
    "controlledPractice": [
      {
        "id": "cp1-collocation-choice",
        "prompt": {
          "en": "Choose the best collocation to complete the sentence: 'The latest research certainly __________ for healthier eating habits.'",
          "pt": "Escolha a melhor colocação para completar a frase: 'A pesquisa mais recente certamente __________ para hábitos alimentares mais saudáveis.'"
        },
        "options": [
          "makes a strong point",
          "makes a compelling case",
          "creates a good argument"
        ],
        "answer": "makes a compelling case",
        "explanation": {
          "en": "'Makes a compelling case' is the most natural and strong collocation for presenting evidence or arguments.",
          "pt": "'Makes a compelling case' é a colocação mais natural e forte para apresentar evidências ou argumentos."
        }
      },
      {
        "id": "cp2-devil-advocate",
        "prompt": {
          "en": "Which phrase means to argue against an idea or plan, even if you agree with it, in order to make the debate stronger?",
          "pt": "Qual frase significa argumentar contra uma ideia ou plano, mesmo que você concorde com ele, a fim de fortalecer o debate?"
        },
        "options": [
          "stand your ground",
          "play devil's advocate",
          "take a firm stance"
        ],
        "answer": "play devil's advocate",
        "explanation": {
          "en": "'Play devil's advocate' specifically refers to arguing a contrary position for the sake of argument, to test the strength of an idea.",
          "pt": "'Play devil's advocate' refere-se especificamente a argumentar uma posição contrária por uma questão de argumento, para testar a força de uma ideia."
        }
      },
      {
        "id": "cp3-valid-point",
        "prompt": {
          "en": "Complete the sentence: 'While I respect your opinion, I don't think you __________ regarding the long-term effects of that policy.'",
          "pt": "Complete a frase: 'Embora eu respeite sua opinião, não acho que você __________ em relação aos efeitos de longo prazo dessa política.'"
        },
        "options": [
          "have a strong opinion",
          "make a good argument",
          "have a valid point"
        ],
        "answer": "have a valid point",
        "explanation": {
          "en": "'Have a valid point' means to acknowledge that someone's argument is reasonable or correct.",
          "pt": "'Have a valid point' significa reconhecer que o argumento de alguém é razoável ou correto."
        }
      },
      {
        "id": "cp4-persuasion-expression",
        "prompt": {
          "en": "Which expression would you use to introduce an idea for consideration, implying it's important?",
          "pt": "Qual expressão você usaria para introduzir uma ideia para consideração, implicando que é importante?"
        },
        "options": [
          "I think it's important to know...",
          "It's worth considering that...",
          "Let's think about..."
        ],
        "answer": "It's worth considering that...",
        "explanation": {
          "en": "'It's worth considering that...' is a direct expression taught for persuasion, emphasizing the value of an idea.",
          "pt": "'It's worth considering that...' é uma expressão direta ensinada para persuasão, enfatizando o valor de uma ideia."
        }
      }
    ],
    "input": {
      "kind": "listening",
      "title": {
        "en": "Debating Health Initiatives",
        "pt": "Debatendo Iniciativas de Saúde"
      },
      "lines": [
        {
          "en": "Host: Welcome to 'Health Talk'. Today, we're discussing proposed new health initiatives. Dr. Anya Sharma, you've made a compelling case for increasing funding for mental health services. Can you elaborate?",
          "pt": "Apresentador: Bem-vindos ao 'Health Talk'. Hoje, estamos discutindo as novas iniciativas de saúde propostas. Dra. Anya Sharma, você apresentou um argumento convincente para aumentar o financiamento para serviços de saúde mental. Pode elaborar?"
        },
        {
          "en": "Dr. Sharma: Absolutely. The evidence suggests that mental health impacts physical well-being significantly. Early intervention reduces long-term healthcare costs. It's worth considering that many physical symptoms originate from underlying stress or anxiety.",
          "pt": "Dra. Sharma: Com certeza. A evidência sugere que a saúde mental afeta significativamente o bem-estar físico. A intervenção precoce reduz os custos de saúde a longo prazo. Vale a pena considerar que muitos sintomas físicos se originam de estresse ou ansiedade subjacentes."
        },
        {
          "en": "Host: Mr. Davies, you seem to have a different perspective. Do you have a valid point to counter Dr. Sharma's argument?",
          "pt": "Apresentador: Sr. Davies, você parece ter uma perspectiva diferente. Você tem um ponto válido para contrapor o argumento da Dra. Sharma?"
        },
        {
          "en": "Mr. Davies: I understand Dr. Sharma's perspective, but I have to play devil's advocate here. While mental health is crucial, our current budget is tight. A compelling case could also be made for prioritizing initiatives that address more immediate, widespread physical health issues like obesity or diabetes.",
          "pt": "Sr. Davies: Eu entendo a perspectiva da Dra. Sharma, mas preciso bancar o advogado do diabo aqui. Embora a saúde mental seja crucial, nosso orçamento atual é apertado. Um argumento convincente também poderia ser feito para priorizar iniciativas que abordem questões de saúde física mais imediatas e generalizadas, como obesidade ou diabetes."
        },
        {
          "en": "Dr. Sharma: I believe we can address both. However, your point about budget constraints is certainly valid. Perhaps we need to make a stronger case for preventative care as a whole.",
          "pt": "Dra. Sharma: Acredito que podemos abordar ambos. No entanto, seu ponto sobre restrições orçamentárias é certamente válido. Talvez precisemos apresentar um argumento mais forte para o cuidado preventivo como um todo."
        }
      ],
      "questions": [
        {
          "id": "listening-q1-main-topic",
          "prompt": {
            "en": "What is the main topic of the discussion?",
            "pt": "Qual é o tema principal da discussão?"
          },
          "options": [
            "The impact of stress on physical health.",
            "Funding for new health initiatives.",
            "Specific diseases like obesity and diabetes."
          ],
          "answer": "Funding for new health initiatives.",
          "explanation": {
            "en": "The host explicitly states they are 'discussing proposed new health initiatives' and the debate revolves around where to allocate funds.",
            "pt": "O apresentador afirma explicitamente que estão 'discutindo as novas iniciativas de saúde propostas' e o debate gira em torno de onde alocar fundos."
          }
        },
        {
          "id": "listening-q2-dr-sharma-argument",
          "prompt": {
            "en": "What is Dr. Sharma's primary argument?",
            "pt": "Qual é o principal argumento da Dra. Sharma?"
          },
          "options": [
            "Physical health is more important than mental health.",
            "Investing in mental health services reduces long-term healthcare costs.",
            "Obesity and diabetes should be the main focus of new initiatives."
          ],
          "answer": "Investing in mental health services reduces long-term healthcare costs.",
          "explanation": {
            "en": "Dr. Sharma states, 'Early intervention reduces long-term healthcare costs' in relation to mental health.",
            "pt": "A Dra. Sharma afirma: 'A intervenção precoce reduz os custos de saúde a longo prazo' em relação à saúde mental."
          }
        },
        {
          "id": "listening-q3-mr-davies-role",
          "prompt": {
            "en": "Why does Mr. Davies say he has to 'play devil's advocate'?",
            "pt": "Por que o Sr. Davies diz que tem que 'bancar o advogado do diabo'?"
          },
          "options": [
            "He completely disagrees with Dr. Sharma's views.",
            "He wants to introduce a contrasting viewpoint for discussion.",
            "He is trying to make fun of Dr. Sharma's arguments."
          ],
          "answer": "He wants to introduce a contrasting viewpoint for discussion.",
          "explanation": {
            "en": "Playing devil's advocate means presenting an opposing argument to stimulate debate, not necessarily because one fully disagrees.",
            "pt": "Bancar o advogado do diabo significa apresentar um argumento oposto para estimular o debate, não necessariamente porque se discorda completamente."
          }
        }
      ]
    },
    "quickCheck": [
      {
        "id": "qc1-persuasion-meaning",
        "prompt": {
          "en": "What is the primary goal of using expressions like 'The evidence suggests...'?",
          "pt": "Qual é o objetivo principal de usar expressões como 'A evidência sugere...'?"
        },
        "options": [
          "To entertain the audience.",
          "To present information objectively and persuade with facts.",
          "To express personal opinions strongly."
        ],
        "answer": "To present information objectively and persuade with facts.",
        "explanation": {
          "en": "These expressions aim to build a persuasive argument by grounding claims in evidence or objective considerations.",
          "pt": "Essas expressões visam construir um argumento persuasivo, baseando as alegações em evidências ou considerações objetivas."
        }
      },
      {
        "id": "qc2-collocation-purpose",
        "prompt": {
          "en": "Using advanced collocations for argumentation primarily helps you to...",
          "pt": "Usar colocações avançadas para argumentação principalmente ajuda você a..."
        },
        "options": [
          "sound more informal and casual.",
          "express your ideas with greater precision and sophistication.",
          "avoid having to provide evidence for your claims."
        ],
        "answer": "express your ideas with greater precision and sophistication.",
        "explanation": {
          "en": "Advanced collocations enable more nuanced and refined expression in formal contexts, which is key for B2 level communication.",
          "pt": "Colocações avançadas permitem uma expressão mais matizada e refinada em contextos formais, o que é fundamental para a comunicação no nível B2."
        }
      },
      {
        "id": "qc3-health-context",
        "prompt": {
          "en": "If someone tells you they have a 'fever' and a 'headache', what kind of professional would you advise them to see?",
          "pt": "Se alguém lhe disser que está com 'febre' e 'dor de cabeça', que tipo de profissional você o aconselharia a procurar?"
        },
        "options": [
          "A pharmacist for medicine.",
          "A doctor for diagnosis.",
          "A fitness instructor for exercise."
        ],
        "answer": "A doctor for diagnosis.",
        "explanation": {
          "en": "While a pharmacist can provide medicine, a doctor is best suited to diagnose symptoms like fever and headache.",
          "pt": "Embora um farmacêutico possa fornecer medicamentos, um médico é o mais adequado para diagnosticar sintomas como febre e dor de cabeça."
        }
      },
      {
        "id": "qc4-persuasion-effectiveness",
        "prompt": {
          "en": "Which of these is generally a less effective persuasion strategy?",
          "pt": "Qual dessas é geralmente uma estratégia de persuasão menos eficaz?"
        },
        "options": [
          "Using logical arguments supported by data.",
          "Acknowledging opposing viewpoints before presenting your own.",
          "Insisting on your opinion without considering alternatives."
        ],
        "answer": "Insisting on your opinion without considering alternatives.",
        "explanation": {
          "en": "Effective persuasion often involves presenting a balanced view and acknowledging counter-arguments, rather than simply insisting.",
          "pt": "A persuasão eficaz frequentemente envolve apresentar uma visão equilibrada e reconhecer contra-argumentos, em vez de simplesmente insistir."
        }
      }
    ]
  },
  "communicate": {
    "id": "UPPER-INTERMEDIATE-U12-COMMUNICATE",
    "review": [
      {
        "en": "Recall the 10 health vocabulary items: headache, fever, cold, doctor, pharmacy, medicine, appointment, symptom, rest, exercise.",
        "pt": "Lembre-se dos 10 itens de vocabulário de saúde: headache, fever, cold, doctor, pharmacy, medicine, appointment, symptom, rest, exercise."
      },
      {
        "en": "Remember the advanced collocations for argumentation: play devil's advocate, make a compelling case, have a valid point.",
        "pt": "Lembre-se das colocações avançadas para argumentação: play devil's advocate, make a compelling case, have a valid point."
      },
      {
        "en": "Practice the persuasion expressions: The evidence suggests..., It's worth considering that..., A compelling case can be made for...",
        "pt": "Pratique as expressões de persuasão: The evidence suggests..., It's worth considering that..., A compelling case can be made for..."
      }
    ],
    "activities": [
      {
        "id": "act1-compare-and-contrast",
        "title": {
          "en": "Compare and Contrast Health Systems",
          "pt": "Comparar e Contrastar Sistemas de Saúde"
        },
        "instruction": {
          "en": "In pairs, research and compare the healthcare system in your country with another country. Discuss their pros and cons. Use health vocabulary and advanced argumentation collocations to present your findings and persuade your partner of your conclusions.",
          "pt": "Em pares, pesquise e compare o sistema de saúde do seu país com o de outro país. Discuta seus prós e contras. Use o vocabulário de saúde e as colocações avançadas de argumentação para apresentar suas descobertas e persuadir seu parceiro de suas conclusões."
        },
        "phrases": [
          {
            "en": "A compelling case can be made for...",
            "pt": "Um argumento convincente pode ser feito para..."
          },
          {
            "en": "It's worth considering that...",
            "pt": "Vale a pena considerar que..."
          },
          {
            "en": "While that's a valid point, the evidence suggests...",
            "pt": "Embora esse seja um ponto válido, a evidência sugere que..."
          }
        ],
        "check": [
          {
            "id": "act1-q1-collocation-use",
            "prompt": {
              "en": "Which collocation is best for introducing a strong, evidence-based argument?",
              "pt": "Qual colocação é a melhor para introduzir um argumento forte e baseado em evidências?"
            },
            "options": [
              "I think...",
              "A compelling case can be made for...",
              "In my opinion..."
            ],
            "answer": "A compelling case can be made for...",
            "explanation": {
              "en": "This collocation specifically indicates a strong argument supported by evidence.",
              "pt": "Esta colocação indica especificamente um argumento forte apoiado por evidências."
            }
          },
          {
            "id": "act1-q2-persuasion-technique",
            "prompt": {
              "en": "When comparing systems, what is an effective persuasion technique?",
              "pt": "Ao comparar sistemas, qual é uma técnica de persuasão eficaz?"
            },
            "options": [
              "Ignoring contradictory information.",
              "Presenting only your side of the argument.",
              "Acknowledging the strengths of the other system while highlighting yours."
            ],
            "answer": "Acknowledging the strengths of the other system while highlighting yours.",
            "explanation": {
              "en": "This approach demonstrates balance and credibility, making your own arguments more persuasive.",
              "pt": "Esta abordagem demonstra equilíbrio e credibilidade, tornando seus próprios argumentos mais persuasivos."
            }
          }
        ]
      },
      {
        "id": "act2-give-a-short-presentation",
        "title": {
          "en": "Give a Short Presentation: Promoting a Healthy Habit",
          "pt": "Fazer uma pequena apresentação: Promovendo um Hábito Saudável"
        },
        "instruction": {
          "en": "Prepare and deliver a 3-minute presentation convincing your audience to adopt a specific healthy habit (e.g., daily exercise, getting enough rest, regular doctor appointments). Use at least three health vocabulary items and two advanced argumentation collocations.",
          "pt": "Prepare e faça uma apresentação de 3 minutos convencendo seu público a adotar um hábito saudável específico (por exemplo, exercícios diários, descanso suficiente, consultas médicas regulares). Use pelo menos três itens do vocabulário de saúde e duas colocações avançadas de argumentação."
        },
        "phrases": [
          {
            "en": "The evidence suggests that adequate rest is as crucial as exercise.",
            "pt": "A evidência sugere que descanso adequado é tão crucial quanto exercício."
          },
          {
            "en": "One might play devil's advocate and argue against this, but the benefits are clear.",
            "pt": "Pode-se bancar o advogado do diabo e argumentar contra isso, mas os benefícios são claros."
          },
          {
            "en": "You have a valid point about time constraints, but even short bursts of activity help.",
            "pt": "Você tem um ponto válido sobre as restrições de tempo, mas mesmo pequenas explosões de atividade ajudam."
          }
        ],
        "check": [
          {
            "id": "act2-q1-presentation-effectiveness",
            "prompt": {
              "en": "Which strategy would make your presentation more persuasive?",
              "pt": "Qual estratégia tornaria sua apresentação mais persuasiva?"
            },
            "options": [
              "Using technical jargon without explanation.",
              "Anticipating and addressing potential counter-arguments.",
              "Speaking very quickly to fit more information."
            ],
            "answer": "Anticipating and addressing potential counter-arguments.",
            "explanation": {
              "en": "Addressing counter-arguments shows thoroughness and strengthens your own position.",
              "pt": "Abordar contra-argumentos demonstra rigor e fortalece sua própria posição."
            }
          },
          {
            "id": "act2-q2-vocabulary-usage",
            "prompt": {
              "en": "If you are promoting daily exercise, which vocabulary item is most relevant?",
              "pt": "Se você está promovendo exercícios diários, qual item do vocabulário é mais relevante?"
            },
            "options": [
              "Fever",
              "Pharmacy",
              "Exercise"
            ],
            "answer": "Exercise",
            "explanation": {
              "en": "'Exercise' is directly related to the topic of promoting a healthy habit of physical activity.",
              "pt": "'Exercise' está diretamente relacionado ao tópico de promover um hábito saudável de atividade física."
            }
          }
        ]
      },
      {
        "id": "act3-role-play-negotiation",
        "title": {
          "en": "Role-play a Negotiation: Patient and Healthcare Provider",
          "pt": "Role-play de uma Negociação: Paciente e Profissional de Saúde"
        },
        "instruction": {
          "en": "Work in pairs. One person is a patient reluctant to follow medical advice (e.g., diet changes, taking medicine). The other is a healthcare provider (doctor/nurse) who needs to persuade the patient. Use health vocabulary, persuasion expressions, and argumentation collocations. The patient can play devil's advocate.",
          "pt": "Trabalhe em pares. Uma pessoa é um paciente relutante em seguir conselhos médicos (por exemplo, mudanças na dieta, tomar remédios). A outra é um profissional de saúde (médico/enfermeiro) que precisa persuadir o paciente. Use vocabulário de saúde, expressões de persuasão e colocações de argumentação. O paciente pode bancar o advogado do diabo."
        },
        "phrases": [
          {
            "en": "The evidence suggests this medicine is crucial for your recovery.",
            "pt": "A evidência sugere que este remédio é crucial para sua recuperação."
          },
          {
            "en": "I understand your concerns, but it's worth considering the long-term benefits.",
            "pt": "Eu entendo suas preocupações, mas vale a pena considerar os benefícios a longo prazo."
          },
          {
            "en": "While you have a valid point about side effects, we can adjust the dosage if necessary.",
            "pt": "Embora você tenha um ponto válido sobre os efeitos colaterais, podemos ajustar a dosagem se necessário."
          }
        ],
        "check": [
          {
            "id": "act3-q1-doctor-persuasion",
            "prompt": {
              "en": "As a doctor, how would you most effectively persuade a patient to take their medicine?",
              "pt": "Como médico, como você persuadiria um paciente de forma mais eficaz a tomar seu remédio?"
            },
            "options": [
              "Simply tell them it's mandatory.",
              "Explain the benefits and address their concerns using evidence.",
              "Threaten them with worse health outcomes."
            ],
            "answer": "Explain the benefits and address their concerns using evidence.",
            "explanation": {
              "en": "Using evidence and addressing concerns are key components of effective persuasion in a medical context.",
              "pt": "Usar evidências e abordar preocupações são componentes chave da persuasão eficaz em um contexto médico."
            }
          },
          {
            "id": "act3-q2-patient-argument",
            "prompt": {
              "en": "If a patient says, 'I've always eaten what I want, and I've never had a fever or serious symptom before', they are trying to...",
              "pt": "Se um paciente diz: 'Sempre comi o que quis, e nunca tive febre ou sintoma grave antes', ele está tentando..."
            },
            "options": [
              "Make a compelling case for their diet.",
              "Play devil's advocate regarding healthy eating.",
              "Provide a personal anecdote to support their reluctance."
            ],
            "answer": "Provide a personal anecdote to support their reluctance.",
            "explanation": {
              "en": "The patient is using personal experience to justify their current habits, which is a form of argument.",
              "pt": "O paciente está usando a experiência pessoal para justificar seus hábitos atuais, o que é uma forma de argumento."
            }
          }
        ]
      }
    ],
    "challenge": {
      "id": "UPPER-INTERMEDIATE-U12-CHALLENGE",
      "title": {
        "en": "Debate: Mandatory Health Screenings",
        "pt": "Debate: Exames de Saúde Obrigatórios"
      },
      "instruction": {
        "en": "Organize a class debate on the topic: 'Should annual health screenings (e.g., check-ups, blood tests) be mandatory for all adults?' Divide into two groups: one arguing for mandatory screenings and another against. Use all the learned vocabulary, expressions, and argumentation collocations to present your points and counter your opponents. Focus on persuasive language.",
        "pt": "Organize um debate em sala de aula sobre o tema: 'Os exames de saúde anuais (por exemplo, check-ups, exames de sangue) deveriam ser obrigatórios para todos os adultos?' Divida-se em dois grupos: um argumentando a favor dos exames obrigatórios e outro contra. Use todo o vocabulário aprendido, expressões e colocações de argumentação para apresentar seus pontos e contra-argumentar seus oponentes. Concentre-se na linguagem persuasiva."
      },
      "phrases": [
        {
          "en": "A compelling case can be made for mandatory screenings preventing severe illness.",
          "pt": "Um argumento convincente pode ser feito para que exames obrigatórios previnam doenças graves."
        },
        {
          "en": "While you have a valid point about personal freedom, the evidence suggests collective health benefits.",
          "pt": "Embora você tenha um ponto válido sobre a liberdade pessoal, a evidência sugere benefícios de saúde coletivos."
        },
        {
          "en": "Let me play devil's advocate: what about the strain on healthcare resources if screenings are mandatory?",
          "pt": "Deixe-me bancar o advogado do diabo: e quanto à sobrecarga nos recursos de saúde se os exames forem obrigatórios?"
        }
      ],
      "check": [
        {
          "id": "challenge-q1-effective-debate",
          "prompt": {
            "en": "What is crucial for a successful debate on a controversial topic?",
            "pt": "O que é crucial para um debate bem-sucedido sobre um tópico controverso?"
          },
          "options": [
            "Shouting louder than your opponents.",
            "Listening carefully and responding to your opponents' points.",
            "Sticking strictly to a pre-written script."
          ],
          "answer": "Listening carefully and responding to your opponents' points.",
          "explanation": {
            "en": "Active listening and responding directly to counter-arguments are essential for a dynamic and persuasive debate.",
            "pt": "A escuta ativa e a resposta direta aos contra-argumentos são essenciais para um debate dinâmico e persuasivo."
          }
        },
        {
          "id": "challenge-q2-persuasion-goal",
          "prompt": {
            "en": "The ultimate goal of using advanced collocations and persuasion expressions in this debate is to...",
            "pt": "O objetivo final de usar colocações avançadas e expressões de persuasão neste debate é..."
          },
          "options": [
            "Prove your opponent is wrong.",
            "Demonstrate your vocabulary knowledge.",
            "Influence the audience's opinion and make your argument stronger."
          ],
          "answer": "Influence the audience's opinion and make your argument stronger.",
          "explanation": {
            "en": "These linguistic tools are designed to make your arguments more convincing and sway the audience.",
            "pt": "Essas ferramentas linguísticas são projetadas para tornar seus argumentos mais convincentes e influenciar a audiência."
          }
        }
      ]
    },
    "lessonReview": {
      "summary": {
        "en": "In this unit, we explored health vocabulary, advanced collocations for argumentation and debate, and persuasion expressions. You practiced using these elements to discuss health-related topics, compare systems, and present convincing arguments.",
        "pt": "Nesta unidade, exploramos o vocabulário de saúde, colocações avançadas para argumentação e debate, e expressões de persuasão. Você praticou o uso desses elementos para discutir tópicos relacionados à saúde, comparar sistemas e apresentar argumentos convincentes."
      },
      "canDo": [
        {
          "en": "Discuss health concerns and advice using relevant vocabulary.",
          "pt": "Discutir preocupações e conselhos de saúde usando vocabulário relevante."
        },
        {
          "en": "Employ advanced collocations like 'make a compelling case' and 'play devil's advocate' in arguments.",
          "pt": "Empregar colocações avançadas como 'make a compelling case' e 'play devil's advocate' em argumentos."
        },
        {
          "en": "Use persuasion expressions to present and support your opinions effectively.",
          "pt": "Usar expressões de persuasão para apresentar e apoiar suas opiniões de forma eficaz."
        }
      ],
      "next": {
        "en": "In Unit 13, we will delve into the world of technology, focusing on advanced vocabulary for innovation and disruption, along with reporting verbs for academic writing.",
        "pt": "Na Unidade 13, mergulharemos no mundo da tecnologia, focando em vocabulário avançado para inovação e disrupção, juntamente com verbos de relato para escrita acadêmica."
      }
    }
  }
},
{
  "code": "UPPER-INTERMEDIATE-U13",
  "number": 13,
  "title": "Travel — Participle clauses",
  "titlePt": "Viagem — Orações participiais",
  "cefr": "B2",
  "objective": {
    "en": "To teach vocabulary related to travel and the use of participle clauses for concise, sophisticated sentence structures in a contextualized manner.",
    "pt": "Ensinar vocabulário de viagem e o uso de orações participiais para estruturas de frases concisas e sofisticadas de forma contextualizada."
  },
  "communicationGoal": {
    "en": "Students will be able to use 'hedging' and travel vocabulary to communicate effectively in real-life situations.",
    "pt": "O aluno será capaz de usar 'hedging' e o vocabulário de travel para se comunicar em situações reais."
  },
  "prerequisites": {
    "en": "Structure: Advanced collocations for argumentation and debate. Vocabulary: Health.",
    "pt": "Estrutura: Colocações avançadas para argumentação e debate. Vocabulário: Saúde."
  },
  "newContent": {
    "en": "Grammar: Participle clauses for concise, sophisticated sentence structures. Vocabulary: Travel (10 lexical items). Expressions: Hedging.",
    "pt": "Gramática: Orações participiais para estruturas de frases concisas e sofisticadas. Vocabulário: Viagem (10 itens lexicais). Expressões: Hedging."
  },
  "reviewContent": {
    "en": "Spiral review: Advanced phrasal verbs for nuanced meaning (get around to, look into, come across) (Unit 6).",
    "pt": "Revisão em espiral: Phrasal verbs avançados para significados sutis (get around to, look into, come across) (Unidade 6)."
  },
  "discover": {
    "id": "UPPER-INTERMEDIATE-U13-DISCOVER",
    "warmUp": {
      "prompt": {
        "en": "Look at these images of different travel scenarios. What do they make you feel? What kind of trips do you prefer?",
        "pt": "Observe estas imagens de diferentes cenários de viagem. O que elas fazem você sentir? Que tipo de viagens você prefere?"
      },
      "phrases": [
        {
          "en": "I find adventurous trips most exciting.",
          "pt": "Acho as viagens de aventura as mais emocionantes."
        },
        {
          "en": "Relaxing beach holidays are my ideal escape.",
          "pt": "Férias relaxantes na praia são a minha fuga ideal."
        }
      ]
    },
    "context": {
      "situation": {
        "en": "Sarah and Tom are discussing their upcoming trip to Patagonia, trying to finalize the details amidst some uncertainties.",
        "pt": "Sarah e Tom estão discutindo sua próxima viagem à Patagônia, tentando finalizar os detalhes em meio a algumas incertezas."
      },
      "dialogue": [
        {
          "who": "Sarah",
          "en": "It would seem that our flight to El Calafate might be delayed due to weather.",
          "pt": "Parece que nosso voo para El Calafate pode estar atrasado devido ao clima."
        },
        {
          "who": "Tom",
          "en": "Oh, really? There's a possibility that we'll miss our connection then. What about the hotel reservation?",
          "pt": "Ah, sério? Há uma possibilidade de perdermos nossa conexão então. E a reserva do hotel?"
        },
        {
          "who": "Sarah",
          "en": "To some extent, that's true. I’ve already confirmed the hotel, but the tour operator for the glacier visit is a bit unresponsive.",
          "pt": "Até certo ponto, isso é verdade. Eu já confirmei o hotel, mas o operador turístico para a visita à geleira está um pouco sem resposta."
        },
        {
          "who": "Tom",
          "en": "Perhaps we should look into alternative options for the tour, just in case. Having experienced delays before, I prefer to be prepared.",
          "pt": "Talvez devêssemos procurar opções alternativas para o passeio, por via das dúvidas. Tendo experimentado atrasos antes, prefiro estar preparado."
        },
        {
          "who": "Sarah",
          "en": "Good point. Worried about the itinerary, I'll call them again shortly. We definitely don't want to waste time.",
          "pt": "Boa observação. Preocupada com o itinerário, vou ligar para eles novamente em breve. Definitivamente não queremos perder tempo."
        },
        {
          "who": "Tom",
          "en": "Agreed. Wanting to make the most of this trip, we need to be flexible but also proactive.",
          "pt": "Concordo. Querendo aproveitar ao máximo esta viagem, precisamos ser flexíveis, mas também proativos."
        }
      ]
    },
    "vocabulary": [
      {
        "term": "ticket",
        "pt": "passagem/bilhete",
        "ipa": "/ˈtɪkɪt/",
        "definition": "A piece of paper or electronic document that allows you to travel on a public transport system or to enter a place.",
        "example": "Don't forget to print your train ticket before you leave.",
        "examplePt": "Não se esqueça de imprimir sua passagem de trem antes de sair."
      },
      {
        "term": "passport",
        "pt": "passaporte",
        "ipa": "/ˈpɑːspɔːrt/",
        "definition": "An official document, often a small book, issued by a government, certifying the holder's identity and citizenship and entitling them to travel under its protection to and from foreign countries.",
        "example": "You'll need your passport to enter most foreign countries.",
        "examplePt": "Você precisará do seu passaporte para entrar na maioria dos países estrangeiros."
      },
      {
        "term": "luggage",
        "pt": "bagagem",
        "ipa": "/ˈlʌɡɪdʒ/",
        "definition": "Suitcases or other bags used for carrying a traveler's belongings.",
        "example": "Make sure your luggage is properly tagged before checking it in.",
        "examplePt": "Certifique-se de que sua bagagem esteja devidamente identificada antes de despachá-la."
      },
      {
        "term": "flight",
        "pt": "voo",
        "ipa": "/flaɪt/",
        "definition": "A journey made through the air or in space, especially one made in an aircraft.",
        "example": "Our flight to New York was delayed by two hours.",
        "examplePt": "Nosso voo para Nova York atrasou duas horas."
      },
      {
        "term": "hotel",
        "pt": "hotel",
        "ipa": "/hoʊˈtɛl/",
        "definition": "An establishment providing lodging, meals, and other services for travelers and tourists.",
        "example": "We booked a charming hotel near the city center.",
        "examplePt": "Reservamos um hotel charmoso perto do centro da cidade."
      },
      {
        "term": "reservation",
        "pt": "reserva",
        "ipa": "/ˌrɛzərˈveɪʃən/",
        "definition": "An arrangement by which something (such as a room, table, or seat) is kept for a particular person at a particular time.",
        "example": "Do you have a dinner reservation for tonight?",
        "examplePt": "Você tem uma reserva para o jantar de hoje à noite?"
      },
      {
        "term": "destination",
        "pt": "destino",
        "ipa": "/ˌdɛstɪˈneɪʃən/",
        "definition": "The place to which someone or something is going or being sent.",
        "example": "Our final destination was a secluded beach resort.",
        "examplePt": "Nosso destino final era um resort de praia isolado."
      },
      {
        "term": "tour",
        "pt": "excursão/passeio",
        "ipa": "/tʊər/",
        "definition": "A journey for pleasure in which several places are visited; a guided visit to a place.",
        "example": "We went on a guided tour of the ancient ruins.",
        "examplePt": "Fizemos uma excursão guiada pelas ruínas antigas."
      },
      {
        "term": "map",
        "pt": "mapa",
        "ipa": "/mæp/",
        "definition": "A diagrammatic representation of an area of land or sea showing physical features, cities, roads, etc.",
        "example": "Always carry a map when exploring a new city on foot.",
        "examplePt": "Sempre carregue um mapa ao explorar uma nova cidade a pé."
      },
      {
        "term": "itinerary",
        "pt": "roteiro/itinerário",
        "ipa": "/aɪˈtɪnərɛri/",
        "definition": "A planned route or journey; a document recording such a route.",
        "example": "Our itinerary includes visits to three different countries.",
        "examplePt": "Nosso itinerário inclui visitas a três países diferentes."
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
          "en": "Participle Clauses for Concise, Sophisticated Sentence Structures",
          "pt": "Orações Participiais para Estruturas de Frases Concisas e Sofisticadas"
        },
        "examples": [
          {
            "en": "Having finished the report, she left the office.",
            "pt": "Tendo terminado o relatório, ela saiu do escritório."
          },
          {
            "en": "Feeling confident, he accepted the challenge.",
            "pt": "Sentindo-se confiante, ele aceitou o desafio."
          },
          {
            "en": "Built in the 18th century, the castle attracts many tourists.",
            "pt": "Construído no século XVIII, o castelo atrai muitos turistas."
          }
        ],
        "rule": {
          "en": "Participle clauses allow us to condense information and create more sophisticated sentence structures. They can express cause, effect, time, or additional information. They typically begin with a present participle (verb+ing), past participle (verb+ed/3rd form), or perfect participle (having+verb+ed/3rd form). The subject of the participle clause is usually the same as the subject of the main clause.",
          "pt": "As orações participiais nos permitem condensar informações e criar estruturas de frases mais sofisticadas. Elas podem expressar causa, efeito, tempo ou informações adicionais. Geralmente começam com um particípio presente (verbo+ing), particípio passado (verbo+ed/3ª forma) ou particípio perfeito (having+verbo+ed/3ª forma). O sujeito da oração participial é geralmente o mesmo que o sujeito da oração principal."
        },
        "mistakes": [
          {
            "en": "Dangling participles: 'Walking down the street, the trees were beautiful.' (Implies trees are walking.) Correct: 'Walking down the street, I noticed the beautiful trees.'",
            "pt": "Particípios pendurados: 'Caminhando pela rua, as árvores eram lindas.' (Implica que as árvores estão caminhando.) Correto: 'Caminhando pela rua, notei as lindas árvores.'"
          },
          {
            "en": "Incorrect tense: Using a present participle for an action completed before the main verb. E.g., 'Opening the door, she had already left.' (Should be 'Having opened the door...').",
            "pt": "Tempo verbal incorreto: Usar um particípio presente para uma ação concluída antes do verbo principal. Ex: 'Abrindo a porta, ela já havia saído.' (Deveria ser 'Tendo aberto a porta...')."
          }
        ]
      }
    ],
    "controlledPractice": [
      {
        "id": "u13-cp1",
        "prompt": {
          "en": "Choose the most appropriate participle clause to complete the sentence: '___, she decided to book the earliest flight.'",
          "pt": "Escolha a oração participial mais apropriada para completar a frase: '___, ela decidiu reservar o voo mais cedo.'"
        },
        "options": [
          "Feeling restless",
          "Having restless",
          "Rested"
        ],
        "answer": "Feeling restless",
        "explanation": {
          "en": "''Feeling restless' correctly uses a present participle to describe the subject's state, leading to the decision.",
          "pt": "'Feeling restless' usa corretamente um particípio presente para descrever o estado do sujeito, levando à decisão."
        }
      },
      {
        "id": "u13-cp2",
        "prompt": {
          "en": "Rewrite the sentence using a participle clause: 'Because he had lost his passport, he couldn't travel.'",
          "pt": "Reescreva a frase usando uma oração participial: 'Porque ele havia perdido o passaporte, ele não pôde viajar.'"
        },
        "options": [
          "Losing his passport, he couldn't travel.",
          "Having lost his passport, he couldn't travel.",
          "Lost his passport, he couldn't travel."
        ],
        "answer": "Having lost his passport, he couldn't travel.",
        "explanation": {
          "en": "'Having lost' is the correct perfect participle construction to show an action completed before the main action.",
          "pt": "'Having lost' é a construção de particípio perfeito correta para mostrar uma ação concluída antes da ação principal."
        }
      },
      {
        "id": "u13-cp3",
        "prompt": {
          "en": "Which sentence uses a participle clause correctly to convey cause?",
          "pt": "Qual frase usa uma oração participial corretamente para transmitir causa?"
        },
        "options": [
          "Seen from above, the city was enormous.",
          "Exhausted after the long journey, they went straight to bed.",
          "To visit new places, she bought a ticket."
        ],
        "answer": "Exhausted after the long journey, they went straight to bed.",
        "explanation": {
          "en": "'Exhausted...' correctly uses a past participle to explain the reason they went to bed.",
          "pt": "'Exhausted...' usa corretamente um particípio passado para explicar a razão pela qual foram para a cama."
        }
      },
      {
        "id": "u13-cp4",
        "prompt": {
          "en": "Identify the sentence that incorporates a hedging expression appropriately:",
          "pt": "Identifique a frase que incorpora uma expressão de 'hedging' de forma apropriada:"
        },
        "options": [
          "The flight will definitely be on time.",
          "It would seem that the flight might be delayed.",
          "I am 100% certain about the flight."
        ],
        "answer": "It would seem that the flight might be delayed.",
        "explanation": {
          "en": "'It would seem that...' is a hedging expression used to show uncertainty or soften a statement.",
          "pt": "'It would seem that...' é uma expressão de hedging usada para mostrar incerteza ou suavizar uma afirmação."
        }
      }
    ],
    "input": {
      "kind": "reading",
      "title": {
        "en": "The Unpredictable Journey",
        "pt": "A Jornada Imprevisível"
      },
      "lines": [
        {
          "en": "Our highly anticipated trip to the Amazon was almost derailed by a series of unexpected events. Having meticulously planned every detail of the itinerary, we felt confident. However, a sudden change in our flight schedule, caused by an airline strike, forced us to reconsider our initial plans. There's a possibility that we’ll arrive a day late, potentially missing the first part of our guided river tour. To some extent, this is frustrating, but flexibility is key when travelling.",
          "pt": "Nossa tão esperada viagem à Amazônia quase foi descarrilada por uma série de eventos inesperados. Tendo planejado meticulosamente cada detalhe do itinerário, nos sentíamos confiantes. No entanto, uma mudança repentina em nosso horário de voo, causada por uma greve da companhia aérea, nos forçou a reconsiderar nossos planos iniciais. Há uma possibilidade de chegarmos um dia atrasados, perdendo potencialmente a primeira parte de nossa excursão guiada pelo rio. Até certo ponto, isso é frustrante, mas flexibilidade é fundamental ao viajar."
        },
        {
          "en": "Worried about the luggage, we called the airline, but received little clarity. It would seem that their staff are overwhelmed. Our hotel reservation in Manaus, thankfully, was flexible enough to accommodate the change. Despite these minor setbacks, excited about the adventure, we remained optimistic. We managed to get around to calling the tour operator, who, having been informed of our situation, kindly adjusted our schedule for the jungle trek. This experience, reinforcing the importance of being prepared, taught us valuable lessons.",
          "pt": "Preocupados com a bagagem, ligamos para a companhia aérea, mas recebemos pouca clareza. Parece que sua equipe está sobrecarregada. Nossa reserva de hotel em Manaus, felizmente, foi flexível o suficiente para acomodar a mudança. Apesar desses pequenos contratempos, entusiasmados com a aventura, permanecemos otimistas. Conseguimos entrar em contato com o operador turístico que, tendo sido informado de nossa situação, ajustou gentilmente nosso horário para a caminhada na selva. Esta experiência, reforçando a importância de estar preparado, nos ensinou lições valiosas."
        }
      ],
      "questions": [
        {
          "id": "u13-input-q1",
          "prompt": {
            "en": "What was the main reason for the initial disruption to their travel plans?",
            "pt": "Qual foi a principal razão para a interrupção inicial de seus planos de viagem?"
          },
          "options": [
            "A hotel cancellation",
            "An airline strike",
            "Lost luggage"
          ],
          "answer": "An airline strike",
          "explanation": {
            "en": "The text states: 'a sudden change in our flight schedule, caused by an airline strike'.",
            "pt": "O texto afirma: 'uma mudança repentina em nosso horário de voo, causada por uma greve da companhia aérea'."
          }
        },
        {
          "id": "u13-input-q2",
          "prompt": {
            "en": "How did the travelers react to the possibility of missing part of their river tour?",
            "pt": "Como os viajantes reagiram à possibilidade de perder parte de sua excursão fluvial?"
          },
          "options": [
            "They became very angry.",
            "They accepted it with some frustration, emphasizing flexibility.",
            "They immediately canceled the entire trip."
          ],
          "answer": "They accepted it with some frustration, emphasizing flexibility.",
          "explanation": {
            "en": "The text mentions, 'To some extent, this is frustrating, but flexibility is key when travelling.'",
            "pt": "O texto menciona: 'Até certo ponto, isso é frustrante, mas flexibilidade é fundamental ao viajar.'"
          }
        },
        {
          "id": "u13-input-q3",
          "prompt": {
            "en": "What did the travelers do after being worried about their luggage?",
            "pt": "O que os viajantes fizeram depois de se preocuparem com a bagagem?"
          },
          "options": [
            "They bought new luggage.",
            "They called the airline.",
            "They adjusted their hotel reservation."
          ],
          "answer": "They called the airline.",
          "explanation": {
            "en": "The text states: 'Worried about the luggage, we called the airline, but received little clarity.'",
            "pt": "O texto afirma: 'Preocupados com a bagagem, ligamos para a companhia aérea, mas recebemos pouca clareza.'"
          }
        }
      ]
    },
    "quickCheck": [
      {
        "id": "u13-qc1",
        "prompt": {
          "en": "Which sentence correctly uses a participle clause?",
          "pt": "Qual frase usa uma oração participial corretamente?"
        },
        "options": [
          "Lost in thought, the bus passed his stop.",
          "Having eaten dinner, we watched a movie.",
          "Being tired, it was time for bed."
        ],
        "answer": "Having eaten dinner, we watched a movie.",
        "explanation": {
          "en": "The subject 'we' performed the action of eating and watching, making 'Having eaten' a correct perfect participle clause.",
          "pt": "O sujeito 'nós' realizou a ação de comer e assistir, tornando 'Having eaten' uma oração participial perfeita correta."
        }
      },
      {
        "id": "u13-qc2",
        "prompt": {
          "en": "What does the expression 'There's a possibility that...' convey?",
          "pt": "O que a expressão 'Há uma possibilidade de que...' transmite?"
        },
        "options": [
          "Certainty",
          "Uncertainty",
          "Obligation"
        ],
        "answer": "Uncertainty",
        "explanation": {
          "en": "This expression is used to indicate that something might happen, but it's not definite.",
          "pt": "Esta expressão é usada para indicar que algo pode acontecer, mas não é definitivo."
        }
      },
      {
        "id": "u13-qc3",
        "prompt": {
          "en": "Which of these words refers to the ultimate place you intend to reach on your journey?",
          "pt": "Qual dessas palavras se refere ao lugar final que você pretende alcançar em sua jornada?"
        },
        "options": [
          "Itinerary",
          "Destination",
          "Reservation"
        ],
        "answer": "Destination",
        "explanation": {
          "en": "'Destination' is the specific term for the place one is traveling to.",
          "pt": "'Destino' é o termo específico para o lugar para onde se está viajando."
        }
      },
      {
        "id": "u13-qc4",
        "prompt": {
          "en": "Transform the following into a more concise sentence using a participle clause: 'Because she was excited about her trip, she packed her bags early.'",
          "pt": "Transforme a seguinte frase em uma frase mais concisa usando uma oração participial: 'Porque ela estava animada com a viagem, ela fez as malas cedo.'"
        },
        "options": [
          "Excited about her trip, she packed her bags early.",
          "Being excited about her trip, her bags were packed early.",
          "She was excited about her trip, packing her bags early."
        ],
        "answer": "Excited about her trip, she packed her bags early.",
        "explanation": {
          "en": "This option correctly uses a past participle to express the reason for packing early, with the same subject as the main clause.",
          "pt": "Esta opção usa corretamente um particípio passado para expressar a razão de fazer as malas cedo, com o mesmo sujeito da oração principal."
        }
      }
    ]
  },
  "communicate": {
    "id": "UPPER-INTERMEDIATE-U13-COMMUNICATE",
    "review": [
      {
        "en": "Recall the 10 travel vocabulary items and their meanings.",
        "pt": "Lembre-se dos 10 itens de vocabulário de viagem e seus significados."
      },
      {
        "en": "Review the usage of participle clauses for concise expression.",
        "pt": "Revise o uso de orações participiais para uma expressão concisa."
      },
      {
        "en": "Practice hedging expressions to convey uncertainty or polite disagreement.",
        "pt": "Pratique expressões de 'hedging' para transmitir incerteza ou discordância polida."
      }
    ],
    "activities": [
      {
        "id": "u13-act1-summarize",
        "title": {
          "en": "Summarize a Travel Dilemma",
          "pt": "Resumir um Dilema de Viagem"
        },
        "instruction": {
          "en": "Read the following scenario and summarize the main points and potential solutions using participle clauses and hedging expressions.",
          "pt": "Leia o seguinte cenário e resuma os pontos principais e as soluções potenciais usando orações participiais e expressões de 'hedging'."
        },
        "phrases": [
          {
            "en": "Having considered all options...",
            "pt": "Tendo considerado todas as opções..."
          },
          {
            "en": "It would seem that the best course of action is...",
            "pt": "Parece que o melhor curso de ação é..."
          },
          {
            "en": "There's a possibility that this could lead to...",
            "pt": "Há uma possibilidade de que isso possa levar a..."
          }
        ],
        "check": [
          {
            "id": "u13-act1-chk1",
            "prompt": {
              "en": "Which of these is an effective use of hedging in a summary?",
              "pt": "Qual dessas é uma utilização eficaz de 'hedging' em um resumo?"
            },
            "options": [
              "The solution is absolutely perfect.",
              "The solution will undoubtedly succeed.",
              "It would seem that the proposed solution might be effective."
            ],
            "answer": "It would seem that the proposed solution might be effective.",
            "explanation": {
              "en": "This option uses 'It would seem that' and 'might' to soften the statement, demonstrating hedging.",
              "pt": "Esta opção usa 'It would seem that' e 'might' para suavizar a afirmação, demonstrando 'hedging'."
            }
          },
          {
            "id": "u13-act1-chk2",
            "prompt": {
              "en": "Which sentence uses a participle clause to summarize a cause effectively?",
              "pt": "Qual frase usa uma oração participial para resumir uma causa eficazmente?"
            },
            "options": [
              "Because the flight was cancelled, we changed our plans.",
              "The flight being cancelled, we changed our plans.",
              "The flight cancelled, we changed our plans."
            ],
            "answer": "The flight being cancelled, we changed our plans.",
            "explanation": {
              "en": "'The flight being cancelled' is a reduced clause explaining the cause concisely.",
              "pt": "'The flight being cancelled' é uma oração reduzida que explica a causa de forma concisa."
            }
          }
        ]
      },
      {
        "id": "u13-act2-nuanced-opinion",
        "title": {
          "en": "Give a Nuanced Opinion on Travel Planning",
          "pt": "Dar uma Opinião Nuances sobre o Planejamento de Viagens"
        },
        "instruction": {
          "en": "Discuss the pros and cons of detailed travel planning versus spontaneous travel. Use hedging expressions to present your opinions and participle clauses to connect ideas.",
          "pt": "Discuta os prós e contras do planejamento detalhado de viagens versus viagens espontâneas. Use expressões de 'hedging' para apresentar suas opiniões e orações participiais para conectar ideias."
        },
        "phrases": [
          {
            "en": "To some extent, spontaneous trips offer...",
            "pt": "Até certo ponto, viagens espontâneas oferecem..."
          },
          {
            "en": "Having experienced both, I'd say...",
            "pt": "Tendo experimentado ambos, eu diria..."
          },
          {
            "en": "It would seem that a balance is ideal...",
            "pt": "Parece que um equilíbrio é ideal..."
          }
        ],
        "check": [
          {
            "id": "u13-act2-chk1",
            "prompt": {
              "en": "Which statement demonstrates a nuanced opinion with hedging?",
              "pt": "Qual afirmação demonstra uma opinião matizada com 'hedging'?"
            },
            "options": [
              "Detailed planning is always superior.",
              "Spontaneous travel is the only way to go.",
              "There's a possibility that too much planning stifles adventure."
            ],
            "answer": "There's a possibility that too much planning stifles adventure.",
            "explanation": {
              "en": "This sentence uses 'There's a possibility that' to present an opinion with less certainty.",
              "pt": "Esta frase usa 'Há uma possibilidade de que' para apresentar uma opinião com menos certeza."
            }
          },
          {
            "id": "u13-act2-chk2",
            "prompt": {
              "en": "How can you use a participle clause to connect 'considering the budget' with 'choosing a destination'?",
              "pt": "Como você pode usar uma oração participial para conectar 'considerando o orçamento' com 'escolhendo um destino'?"
            },
            "options": [
              "Considering the budget, a destination was chosen.",
              "The budget considered, choosing a destination.",
              "We considered the budget and choosing a destination."
            ],
            "answer": "Considering the budget, a destination was chosen.",
            "explanation": {
              "en": "'Considering the budget' acts as a present participle clause, linking the action of considering to the main clause's action.",
              "pt": "'Considering the budget' atua como uma oração participial presente, ligando a ação de considerar à ação da oração principal."
            }
          }
        ]
      },
      {
        "id": "u13-act3-reflect-report",
        "title": {
          "en": "Reflect and Report Back on a Travel Experience",
          "pt": "Refletir e Relatar uma Experiência de Viagem"
        },
        "instruction": {
          "en": "Think about a past travel experience. Report back on a challenge you faced, using participle clauses to describe events concisely and hedging to express uncertainties or subjective feelings.",
          "pt": "Pense em uma experiência de viagem passada. Relate um desafio que você enfrentou, usando orações participiais para descrever eventos de forma concisa e 'hedging' para expressar incertezas ou sentimentos subjetivos."
        },
        "phrases": [
          {
            "en": "Having arrived late, we quickly realized...",
            "pt": "Tendo chegado tarde, percebemos rapidamente que..."
          },
          {
            "en": "It would seem that the locals prefer...",
            "pt": "Parece que os locais preferem..."
          },
          {
            "en": "To some extent, the delay impacted...",
            "pt": "Até certo ponto, o atraso impactou..."
          }
        ],
        "check": [
          {
            "id": "u13-act3-chk1",
            "prompt": {
              "en": "Which option uses a participle clause to describe an event concisely in a report?",
              "pt": "Qual opção usa uma oração participial para descrever um evento de forma concisa em um relatório?"
            },
            "options": [
              "We arrived at the airport, and then we discovered our flight was cancelled.",
              "Arriving at the airport, we discovered our flight was cancelled.",
              "After we arrived at the airport, we discovered our flight was cancelled."
            ],
            "answer": "Arriving at the airport, we discovered our flight was cancelled.",
            "explanation": {
              "en": "'Arriving at the airport' is a concise participle clause for 'When we arrived at the airport'.",
              "pt": "'Arriving at the airport' é uma oração participial concisa para 'Quando chegamos ao aeroporto'."
            }
          },
          {
            "id": "u13-act3-chk2",
            "prompt": {
              "en": "What is the best way to hedge a subjective observation in a report?",
              "pt": "Qual é a melhor maneira de atenuar uma observação subjetiva em um relatório?"
            },
            "options": [
              "The local cuisine was absolutely delicious.",
              "There's a possibility that the local cuisine was delicious.",
              "Everyone found the local cuisine delicious."
            ],
            "answer": "There's a possibility that the local cuisine was delicious.",
            "explanation": {
              "en": "Using 'There's a possibility that' makes the observation less definitive and more subjective.",
              "pt": "Usar 'Há uma possibilidade de que' torna a observação menos definitiva e mais subjetiva."
            }
          }
        ]
      }
    ],
    "challenge": {
      "id": "u13-challenge-debate",
      "title": {
        "en": "Debate: The Future of Eco-Tourism",
        "pt": "Debate: O Futuro do Ecoturismo"
      },
      "instruction": {
        "en": "Prepare and present an argument for or against the statement: 'Eco-tourism, though well-intentioned, often harms the very environments it seeks to protect.' Use travel vocabulary, participle clauses for sophisticated phrasing, and hedging to acknowledge counter-arguments or uncertainties.",
        "pt": "Prepare e apresente um argumento a favor ou contra a afirmação: 'O ecoturismo, embora bem-intencionado, frequentemente prejudica os próprios ambientes que busca proteger.' Use vocabulário de viagem, orações participiais para frases sofisticadas e 'hedging' para reconhecer contra-argumentos ou incertezas."
      },
      "phrases": [
        {
          "en": "Having reviewed the data, it suggests...",
          "pt": "Tendo revisado os dados, isso sugere..."
        },
        {
          "en": "It would seem that stricter regulations are needed...",
          "pt": "Parece que regulamentações mais rígidas são necessárias..."
        },
        {
          "en": "To some extent, the economic benefits are undeniable...",
          "pt": "Até certo ponto, os benefícios econômicos são inegáveis..."
        }
      ],
      "check": [
        {
          "id": "u13-chal-chk1",
          "prompt": {
            "en": "Which statement best demonstrates effective hedging in an argument about eco-tourism?",
            "pt": "Qual afirmação melhor demonstra um 'hedging' eficaz em um argumento sobre ecoturismo?"
          },
          "options": [
            "Eco-tourism absolutely destroys natural habitats.",
            "There's a possibility that some forms of eco-tourism could pose risks to fragile ecosystems.",
            "All eco-tourism initiatives are flawlessly sustainable."
          ],
          "answer": "There's a possibility that some forms of eco-tourism could pose risks to fragile ecosystems.",
          "explanation": {
            "en": "This statement uses 'There's a possibility that' and 'could pose risks' to present a nuanced argument without being overly definitive.",
            "pt": "Esta afirmação usa 'Há uma possibilidade de que' e 'poderia apresentar riscos' para apresentar um argumento matizado sem ser excessivamente definitivo."
          }
        },
        {
          "id": "u13-chal-chk2",
          "prompt": {
            "en": "How can you use a participle clause to make the following more concise: 'Because the local communities were involved, the project was successful.'",
            "pt": "Como você pode usar uma oração participial para tornar o seguinte mais conciso: 'Porque as comunidades locais estavam envolvidas, o projeto foi bem-sucedido.'"
          },
          "options": [
            "Involving the local communities, the project was successful.",
            "The local communities being involved, the project was successful.",
            "The local communities involved, the project was successful."
          ],
          "answer": "The local communities being involved, the project was successful.",
          "explanation": {
            "en": "This option uses an absolute participle clause to efficiently state the cause of the project's success.",
            "pt": "Esta opção usa uma oração participial absoluta para declarar eficientemente a causa do sucesso do projeto."
          }
        }
      ]
    },
    "lessonReview": {
      "summary": {
        "en": "In this unit, we explored travel vocabulary, mastered participle clauses for concise and sophisticated sentence structures, and learned to use hedging expressions to soften statements and express uncertainty in B2-level communication.",
        "pt": "Nesta unidade, exploramos o vocabulário de viagem, dominamos as orações participiais para estruturas de frases concisas e sofisticadas, e aprendemos a usar expressões de 'hedging' para suavizar afirmações e expressar incerteza na comunicação de nível B2."
      },
      "canDo": [
        {
          "en": "Describe travel plans and experiences using specific vocabulary.",
          "pt": "Descrever planos e experiências de viagem usando vocabulário específico."
        },
        {
          "en": "Formulate concise and sophisticated sentences using participle clauses.",
          "pt": "Formular frases concisas e sofisticadas usando orações participiais."
        },
        {
          "en": "Employ hedging techniques to present nuanced opinions and acknowledge uncertainty.",
          "pt": "Empregar técnicas de 'hedging' para apresentar opiniões matizadas e reconhecer incertezas."
        }
      ],
      "next": {
        "en": "In the next unit, we will delve into reporting verbs and reported speech, focusing on how to accurately convey what others have said or thought, enhancing your ability to summarize and discuss information.",
        "pt": "Na próxima unidade, vamos aprofundar nos verbos de reporte e discurso indireto, focando em como transmitir com precisão o que outros disseram ou pensaram, aprimorando sua capacidade de resumir e discutir informações."
      }
    }
  }
},
{
  "code": "UPPER-INTERMEDIATE-U14",
  "number": 14,
  "title": "Social Interaction: Opinions and Decision-Making",
  "titlePt": "Interação Social: Opiniões e Tomada de Decisão",
  "cefr": "B2",
  "objective": {
    "en": "To teach social interaction and idiomatic expressions related to opinions and decision-making in a contextualized manner.",
    "pt": "Ensinar interação social e expressões idiomáticas relacionadas a opiniões e tomada de decisão de forma contextualizada."
  },
  "communicationGoal": {
    "en": "Students will be able to use 'academic discussion' and social interaction vocabulary to communicate in real-life situations.",
    "pt": "O aluno será capaz de usar 'discussão acadêmica' e o vocabulário de interação social para se comunicar em situações reais."
  },
  "prerequisites": {
    "en": "Grammar: Participle clauses for concise, sophisticated sentence structures. Vocabulary: Travel.",
    "pt": "Estrutura: Participle clauses for estruturas de frases concisas e sofisticadas. Vocabulário: Viagem."
  },
  "newContent": {
    "en": "Grammar: Idiomatic expressions related to opinions and decision-making. | Vocabulary: Social Interaction (10 lexical items) | Expressions: Academic Discussion.",
    "pt": "Gramática: Expressões idiomáticas relacionadas a opiniões e tomada de decisão. | Vocabulário: Interação Social (10 itens lexicais) | Expressões: Discussão Acadêmica."
  },
  "reviewContent": {
    "en": "Spiral review: Inversion for emphasis in formal and literary language (Unit 7).",
    "pt": "Revisão em espiral: Inversion for emphasis em linguagem formal e literária (Unidade 7)."
  },
  "discover": {
    "id": "UPPER-INTERMEDIATE-U14-DISCOVER",
    "warmUp": {
      "prompt": {
        "en": "Look at the images. What kind of social interactions are depicted? How do people express their opinions or make decisions in these situations?",
        "pt": "Observe as imagens. Que tipo de interações sociais são retratadas? Como as pessoas expressam suas opiniões ou tomam decisões nessas situações?"
      },
      "phrases": [
        {
          "en": "This image shows a lively debate, perhaps at a university.",
          "pt": "Esta imagem mostra um debate animado, talvez em uma universidade."
        },
        {
          "en": "It looks like a casual gathering where friends are discussing something important.",
          "pt": "Parece uma reunião casual onde amigos estão discutindo algo importante."
        }
      ]
    },
    "context": {
      "situation": {
        "en": "You're at a university social mixer, and a group of students is discussing the ethical implications of AI in everyday life. You want to join the 'academic discussion' and contribute your 'social interaction' skills.",
        "pt": "Você está em um evento social universitário, e um grupo de estudantes está discutindo as implicações éticas da IA na vida cotidiana. Você quer se juntar à 'discussão acadêmica' e contribuir com suas habilidades de 'interação social'."
      },
      "dialogue": [
        {
          "who": "Lena",
          "en": "This raises the question of personal privacy in the age of omnipresent AI. It's a complex issue.",
          "pt": "Isso levanta a questão da privacidade pessoal na era da IA onipresente. É um problema complexo."
        },
        {
          "who": "Ben",
          "en": "Absolutely. It could be argued that the convenience offered by AI often comes at a significant cost to individual autonomy.",
          "pt": "Absolutamente. Poder-se-ia argumentar que a conveniência oferecida pela IA muitas vezes vem com um custo significativo para a autonomia individual."
        },
        {
          "who": "Sara",
          "en": "But the data points to increased efficiency in many sectors due to AI. We can't ignore that benefit.",
          "pt": "Mas os dados apontam para um aumento da eficiência em muitos setores devido à IA. Não podemos ignorar esse benefício."
        },
        {
          "who": "Lena",
          "en": "Indeed, but how do we balance progress with protection? I'm on the fence about the ideal regulatory approach.",
          "pt": "De fato, mas como equilibramos progresso com proteção? Estou indecisa sobre a abordagem regulatória ideal."
        },
        {
          "who": "Ben",
          "en": "Let's not jump to conclusions about a single 'ideal' approach. Perhaps it requires a multi-faceted strategy.",
          "pt": "Não vamos tirar conclusões precipitadas sobre uma única abordagem 'ideal'. Talvez exija uma estratégia multifacetada."
        },
        {
          "who": "Sara",
          "en": "Good point. It’s definitely something that warrants deeper consideration.",
          "pt": "Bom ponto. É definitivamente algo que merece uma consideração mais profunda."
        }
      ]
    },
    "vocabulary": [
      {
        "term": "invite",
        "pt": "convidar",
        "ipa": "/ɪnˈvaɪt/",
        "definition": "To ask someone to come to an event or go to a place.",
        "example": "Did you invite all your friends to the celebration?",
        "examplePt": "Você convidou todos os seus amigos para a celebração?"
      },
      {
        "term": "party",
        "pt": "festa",
        "ipa": "/ˈpɑːrti/",
        "definition": "A social gathering of people for entertainment or celebration.",
        "example": "We're planning a surprise party for her birthday.",
        "examplePt": "Estamos planejando uma festa surpresa para o aniversário dela."
      },
      {
        "term": "celebration",
        "pt": "celebração",
        "ipa": "/ˌselɪˈbreɪʃən/",
        "definition": "The act of marking an important event or occasion with festivities.",
        "example": "The whole town joined in the celebration of the national holiday.",
        "examplePt": "A cidade inteira participou da celebração do feriado nacional."
      },
      {
        "term": "guest",
        "pt": "convidado",
        "ipa": "/ɡest/",
        "definition": "A person who is invited to visit someone's home or attend a particular occasion.",
        "example": "Each guest received a small souvenir at the wedding.",
        "examplePt": "Cada convidado recebeu uma pequena lembrança no casamento."
      },
      {
        "term": "gift",
        "pt": "presente",
        "ipa": "/ɡɪft/",
        "definition": "A thing given willingly to someone without payment; a present.",
        "example": "She brought a thoughtful gift for the host.",
        "examplePt": "Ela trouxe um presente atencioso para o anfitrião."
      },
      {
        "term": "conversation",
        "pt": "conversa",
        "ipa": "/ˌkɒnvərˈseɪʃən/",
        "definition": "A talk between two or more people in which thoughts, feelings, and ideas are exchanged.",
        "example": "I had an interesting conversation with the new colleague.",
        "examplePt": "Tive uma conversa interessante com o novo colega."
      },
      {
        "term": "small talk",
        "pt": "conversa fiada",
        "ipa": "/smɔːl tɔːk/",
        "definition": "Polite conversation about unimportant or uncontroversial matters, especially as a social formality.",
        "example": "It's important to master small talk when networking.",
        "examplePt": "É importante dominar a conversa fiada ao fazer networking."
      },
      {
        "term": "compliment",
        "pt": "elogio",
        "ipa": "/ˈkɒmplɪmənt/",
        "definition": "An expression of praise, admiration, or congratulation.",
        "example": "He paid her a sincere compliment on her presentation.",
        "examplePt": "Ele a elogiou sinceramente pela apresentação dela."
      },
      {
        "term": "apology",
        "pt": "desculpa",
        "ipa": "/əˈpɒlədʒi/",
        "definition": "A regretful acknowledgment of an offense or failure.",
        "example": "He offered a sincere apology for his late arrival.",
        "examplePt": "Ele ofereceu uma desculpa sincera pelo atraso."
      },
      {
        "term": "favor",
        "pt": "favor",
        "ipa": "/ˈfeɪvər/",
        "definition": "An act of kindness beyond what is due or usual.",
        "example": "Could you do me a favor and help me move this box?",
        "examplePt": "Você poderia me fazer um favor e me ajudar a mover esta caixa?"
      }
    ],
    "expressions": [
      {
        "en": "This raises the question of...",
        "pt": "Isso levanta a questão de..."
      },
      {
        "en": "It could be argued that...",
        "pt": "Poder-se-ia argumentar que..."
      },
      {
        "en": "The data points to...",
        "pt": "Os dados apontam para..."
      }
    ],
    "grammar": [
      {
        "title": {
          "en": "Idiomatic Expressions Related to Opinions and Decision-Making",
          "pt": "Expressões Idiomáticas Relacionadas a Opiniões e Tomada de Decisão"
        },
        "examples": [
          {
            "en": "I'm on the fence about whether to take the new job or stay put.",
            "pt": "Estou indeciso sobre aceitar o novo emprego ou ficar onde estou."
          },
          {
            "en": "Let's not jump to conclusions until we have all the facts.",
            "pt": "Não vamos tirar conclusões precipitadas até termos todos os fatos."
          },
          {
            "en": "She decided to bite the bullet and tell him the truth.",
            "pt": "Ela decidiu encarar a situação e dizer-lhe a verdade."
          }
        ],
        "rule": {
          "en": "Idiomatic expressions related to opinions and decision-making are fixed phrases whose meanings are not always deducible from the individual words. They add nuance and naturalness to discussions, indicating hesitation, certainty, caution, or resolve. Mastering them helps in conveying complex thoughts concisely and effectively, especially in academic or professional contexts.",
          "pt": "Expressões idiomáticas relacionadas a opiniões e tomada de decisão são frases fixas cujos significados nem sempre são dedutíveis das palavras individuais. Elas adicionam nuance e naturalidade às discussões, indicando hesitação, certeza, cautela ou resolução. Dominá-las ajuda a transmitir pensamentos complexos de forma concisa e eficaz, especialmente em contextos acadêmicos ou profissionais."
        },
        "mistakes": [
          {
            "en": "Incorrect: 'I'm on the wall about this.' (Correct: 'I'm on the fence about this.')",
            "pt": "Incorreto: 'Estou na parede sobre isso.' (Correto: 'Estou indeciso sobre isso.')"
          },
          {
            "en": "Incorrect: 'Let's not leap to conclusions.' (Correct: 'Let's not jump to conclusions.')",
            "pt": "Incorreto: 'Não vamos saltar para conclusões.' (Correto: 'Não vamos tirar conclusões precipitadas.')"
          }
        ]
      }
    ],
    "controlledPractice": [
      {
        "id": "cp-14-1",
        "prompt": {
          "en": "Choose the correct idiom to complete the sentence: 'I'm completely ______ about which university to choose for my Master's degree.'",
          "pt": "Escolha a expressão idiomática correta para completar a frase: 'Estou completamente ______ sobre qual universidade escolher para o meu mestrado.'"
        },
        "options": [
          "on the ball",
          "on the fence",
          "on thin ice"
        ],
        "answer": "on the fence",
        "explanation": {
          "en": "'On the fence' means to be undecided or neutral about something, which fits the context of choosing a university.",
          "pt": "'On the fence' significa estar indeciso ou neutro sobre algo, o que se encaixa no contexto de escolher uma universidade."
        }
      },
      {
        "id": "cp-14-2",
        "prompt": {
          "en": "Which idiom suggests caution and warns against forming opinions too quickly?",
          "pt": "Qual expressão idiomática sugere cautela e adverte contra a formação de opiniões muito rapidamente?"
        },
        "options": [
          "bite the bullet",
          "jump to conclusions",
          "hit the nail on the head"
        ],
        "answer": "jump to conclusions",
        "explanation": {
          "en": "To 'jump to conclusions' means to form an opinion or make a judgment about something without all the facts.",
          "pt": "'Jump to conclusions' significa formar uma opinião ou fazer um julgamento sobre algo sem todos os fatos."
        }
      },
      {
        "id": "cp-14-3",
        "prompt": {
          "en": "Complete the sentence: 'After much debate, the committee decided to ______ and approve the controversial project.'",
          "pt": "Complete a frase: 'Após muito debate, o comitê decidiu ______ e aprovar o projeto controverso.'"
        },
        "options": [
          "beat around the bush",
          "bite the bullet",
          "break a leg"
        ],
        "answer": "bite the bullet",
        "explanation": {
          "en": "'Bite the bullet' means to face a difficult or unpleasant situation with courage.",
          "pt": "'Bite the bullet' significa enfrentar uma situação difícil ou desagradável com coragem."
        }
      },
      {
        "id": "cp-14-4",
        "prompt": {
          "en": "What does the idiom 'to have a change of heart' mean?",
          "pt": "O que significa a expressão idiomática 'to have a change of heart'?"
        },
        "options": [
          "To fall in love",
          "To change one's opinion or attitude",
          "To feel sad"
        ],
        "answer": "To change one's opinion or attitude",
        "explanation": {
          "en": "'To have a change of heart' means to alter one's original opinion or decision.",
          "pt": "'To have a change of heart' significa alterar a própria opinião ou decisão original."
        }
      }
    ],
    "input": {
      "kind": "listening",
      "title": {
        "en": "Team Project Dilemma",
        "pt": "Dilema do Projeto em Equipe"
      },
      "lines": [
        {
          "en": "Sarah: So, about the marketing strategy for the new product. I'm on the fence about going with option A. It's bolder, but also riskier.",
          "pt": "Sarah: Então, sobre a estratégia de marketing para o novo produto. Estou indecisa sobre ir com a opção A. É mais ousada, mas também mais arriscada."
        },
        {
          "en": "Mark: I agree. It could be argued that the current market isn't ready for such an aggressive approach. The data points to a preference for more subtle advertising.",
          "pt": "Mark: Concordo. Poder-se-ia argumentar que o mercado atual não está pronto para uma abordagem tão agressiva. Os dados apontam para uma preferência por publicidade mais sutil."
        },
        {
          "en": "Sarah: True. But let's not jump to conclusions about market readiness based solely on past trends. Innovation often requires a leap of faith. This raises the question of whether we prioritize safety or potential breakthrough.",
          "pt": "Sarah: Verdade. Mas não vamos tirar conclusões precipitadas sobre a prontidão do mercado baseadas apenas em tendências passadas. A inovação muitas vezes exige um salto de fé. Isso levanta a questão se priorizamos a segurança ou o potencial de inovação."
        },
        {
          "en": "Mark: That’s a fair point. Perhaps we need to bite the bullet and take a calculated risk. Or maybe we can find a middle ground. I’m open to discussing it further.",
          "pt": "Mark: É um bom ponto. Talvez precisemos encarar a situação e correr um risco calculado. Ou talvez possamos encontrar um meio-termo. Estou aberto a discutir mais."
        },
        {
          "en": "Sarah: Me too. This conversation is helpful. We need to reach a consensus soon.",
          "pt": "Sarah: Eu também. Esta conversa é útil. Precisamos chegar a um consenso em breve."
        }
      ],
      "questions": [
        {
          "id": "dilemma-q1",
          "prompt": {
            "en": "What is Sarah's initial feeling about option A?",
            "pt": "Qual é o sentimento inicial de Sarah sobre a opção A?"
          },
          "options": [
            "She is very confident.",
            "She is undecided.",
            "She is strongly against it."
          ],
          "answer": "She is undecided.",
          "explanation": {
            "en": "Sarah states, 'I'm on the fence about going with option A,' which means she is undecided.",
            "pt": "Sarah afirma: 'Estou indecisa sobre ir com a opção A,' o que significa que ela está indecisa."
          }
        },
        {
          "id": "dilemma-q2",
          "prompt": {
            "en": "What does Mark suggest the data points to?",
            "pt": "Para o que Mark sugere que os dados apontam?"
          },
          "options": [
            "A preference for aggressive advertising.",
            "A preference for subtle advertising.",
            "A need for more data collection."
          ],
          "answer": "A preference for subtle advertising.",
          "explanation": {
            "en": "Mark mentions, 'The data points to a preference for more subtle advertising.'",
            "pt": "Mark menciona: 'Os dados apontam para uma preferência por publicidade mais sutil.'"
          }
        },
        {
          "id": "dilemma-q3",
          "prompt": {
            "en": "What idiom does Sarah use to caution against hasty judgment?",
            "pt": "Que expressão idiomática Sarah usa para alertar contra julgamentos apressados?"
          },
          "options": [
            "bite the bullet",
            "on the fence",
            "jump to conclusions"
          ],
          "answer": "jump to conclusions",
          "explanation": {
            "en": "Sarah says, 'let's not jump to conclusions about market readiness.'",
            "pt": "Sarah diz: 'não vamos tirar conclusões precipitadas sobre a prontidão do mercado.'"
          }
        }
      ]
    },
    "quickCheck": [
      {
        "id": "qc-14-1",
        "prompt": {
          "en": "Which of the following is an example of 'small talk'?",
          "pt": "Qual das seguintes é um exemplo de 'conversa fiada'?"
        },
        "options": [
          "Discussing quantum physics.",
          "Talking about the weather.",
          "Negotiating a business deal."
        ],
        "answer": "Talking about the weather.",
        "explanation": {
          "en": "Small talk typically involves light, informal conversation about non-controversial topics like the weather.",
          "pt": "Conversa fiada tipicamente envolve conversa leve e informal sobre tópicos não controversos, como o clima."
        }
      },
      {
        "id": "qc-14-2",
        "prompt": {
          "en": "What does the idiom 'to bite the bullet' imply?",
          "pt": "O que a expressão idiomática 'to bite the bullet' implica?"
        },
        "options": [
          "To avoid a difficult situation.",
          "To endure a difficult situation.",
          "To celebrate a victory."
        ],
        "answer": "To endure a difficult situation.",
        "explanation": {
          "en": "'To bite the bullet' means to face or endure an unpleasant situation with courage.",
          "pt": "'To bite the bullet' significa enfrentar ou suportar uma situação desagradável com coragem."
        }
      },
      {
        "id": "qc-14-3",
        "prompt": {
          "en": "Which expression is used to introduce a significant question or point for consideration?",
          "pt": "Qual expressão é usada para introduzir uma pergunta ou ponto significativo para consideração?"
        },
        "options": [
          "It's a piece of cake.",
          "This raises the question of...",
          "I'm all ears."
        ],
        "answer": "This raises the question of...",
        "explanation": {
          "en": "'This raises the question of...' is used to introduce an important query or topic for discussion.",
          "pt": "'This raises the question of...' é usado para introduzir uma questão importante ou tópico para discussão."
        }
      },
      {
        "id": "qc-14-4",
        "prompt": {
          "en": "If you are 'on the fence' about something, what does that mean?",
          "pt": "Se você está 'on the fence' sobre algo, o que isso significa?"
        },
        "options": [
          "You are very excited.",
          "You are undecided.",
          "You are strongly committed."
        ],
        "answer": "You are undecided.",
        "explanation": {
          "en": "'On the fence' is an idiom used to describe being undecided or neutral between two choices.",
          "pt": "'On the fence' é uma expressão idiomática usada para descrever estar indeciso ou neutro entre duas escolhas."
        }
      }
    ]
  },
  "communicate": {
    "id": "UPPER-INTERMEDIATE-U14-COMMUNICATE",
    "review": [
      {
        "en": "We've learned new vocabulary for social interactions like 'invite', 'guest', and 'small talk'.",
        "pt": "Aprendemos novo vocabulário para interações sociais como 'invite', 'guest' e 'small talk'."
      },
      {
        "en": "We also covered expressions for academic discussion such as 'This raises the question of...' and 'It could be argued that...'.",
        "pt": "Também abordamos expressões para discussão acadêmica, como 'This raises the question of...' e 'It could be argued that...'."
      },
      {
        "en": "Key idiomatic expressions for opinions and decision-making, like 'on the fence' and 'jump to conclusions', were introduced.",
        "pt": "Expressões idiomáticas chave para opiniões e tomada de decisão, como 'on the fence' e 'jump to conclusions', foram introduzidas."
      }
    ],
    "activities": [
      {
        "id": "comm-14-1",
        "title": {
          "en": "Respond to a Counterargument",
          "pt": "Responder a um Contra-argumento"
        },
        "instruction": {
          "en": "In pairs, one student presents an opinion on a current event (e.g., remote work benefits). The other student must present a counterargument, using academic discussion expressions, and then the first student responds using an idiom related to opinions or decision-making. Switch roles.",
          "pt": "Em pares, um aluno apresenta uma opinião sobre um evento atual (por exemplo, benefícios do trabalho remoto). O outro aluno deve apresentar um contra-argumento, usando expressões de discussão acadêmica, e então o primeiro aluno responde usando uma expressão idiomática relacionada a opiniões ou tomada de decisão. Troquem de papéis."
        },
        "phrases": [
          {
            "en": "It could be argued that remote work increases productivity, but the data points to challenges in team cohesion. What's your take?",
            "pt": "Poder-se-ia argumentar que o trabalho remoto aumenta a produtividade, mas os dados apontam para desafios na coesão da equipe. Qual é a sua opinião?"
          },
          {
            "en": "That's a valid point. I'm on the fence about the long-term impact on company culture.",
            "pt": "Esse é um ponto válido. Estou indeciso sobre o impacto a longo prazo na cultura da empresa."
          },
          {
            "en": "This raises the question of whether companies are truly prepared to support a fully remote model.",
            "pt": "Isso levanta a questão se as empresas estão realmente preparadas para suportar um modelo totalmente remoto."
          }
        ],
        "check": [
          {
            "id": "act-14-1-check1",
            "prompt": {
              "en": "Which strategy did you use to introduce your counterargument?",
              "pt": "Qual estratégia você usou para introduzir seu contra-argumento?"
            },
            "options": [
              "Stating a direct disagreement.",
              "Using 'It could be argued that...'",
              "Asking a personal question."
            ],
            "answer": "Using 'It could be argued that...'",
            "explanation": {
              "en": "Using 'It could be argued that...' is an effective way to introduce a counterargument in an academic discussion.",
              "pt": "Usar 'It could be argued that...' é uma forma eficaz de introduzir um contra-argumento em uma discussão acadêmica."
            }
          },
          {
            "id": "act-14-1-check2",
            "prompt": {
              "en": "How did you express uncertainty or a pending decision regarding the counterargument?",
              "pt": "Como você expressou incerteza ou uma decisão pendente em relação ao contra-argumento?"
            },
            "options": [
              "By saying 'I know I'm right.'",
              "By using 'I'm on the fence about this.'",
              "By ignoring the point."
            ],
            "answer": "By using 'I'm on the fence about this.'",
            "explanation": {
              "en": "'I'm on the fence about this' explicitly conveys uncertainty or indecision.",
              "pt": "'I'm on the fence about this' transmite explicitamente incerteza ou indecisão."
            }
          }
        ]
      },
      {
        "id": "comm-14-2",
        "title": {
          "en": "Discuss Ethical Dilemmas",
          "pt": "Discutir Dilemas Éticos"
        },
        "instruction": {
          "en": "In small groups, discuss an ethical dilemma (e.g., self-driving cars, genetic editing). Each member must contribute by stating their opinion using an idiomatic expression and supporting it with an academic discussion phrase. Ensure respectful communication and allow for different viewpoints.",
          "pt": "Em pequenos grupos, discuta um dilema ético (por exemplo, carros autônomos, edição genética). Cada membro deve contribuir expressando sua opinião usando uma expressão idiomática e apoiando-a com uma frase de discussão acadêmica. Garanta uma comunicação respeitosa e permita diferentes pontos de vista."
        },
        "phrases": [
          {
            "en": "I'm on the fence about the ethics of genetic editing. This raises the question of unforeseen consequences for future generations.",
            "pt": "Estou indeciso sobre a ética da edição genética. Isso levanta a questão de consequências imprevistas para as futuras gerações."
          },
          {
            "en": "It could be argued that the benefits for preventing diseases outweigh the risks, but let's not jump to conclusions about long-term safety.",
            "pt": "Poder-se-ia argumentar que os benefícios para prevenir doenças superam os riscos, mas não vamos tirar conclusões precipitadas sobre a segurança a longo prazo."
          },
          {
            "en": "The data points to significant progress in gene therapy. We might have to bite the bullet and invest more in research, despite public concerns.",
            "pt": "Os dados apontam para um progresso significativo na terapia gênica. Poderíamos ter que encarar a situação e investir mais em pesquisa, apesar das preocupações públicas."
          }
        ],
        "check": [
          {
            "id": "act-14-2-check1",
            "prompt": {
              "en": "Did your group manage to use at least three different idiomatic expressions for opinions/decisions?",
              "pt": "Seu grupo conseguiu usar pelo menos três expressões idiomáticas diferentes para opiniões/decisões?"
            },
            "options": [
              "Yes, easily.",
              "Only one or two.",
              "No, we struggled."
            ],
            "answer": "Yes, easily.",
            "explanation": {
              "en": "Successful completion requires incorporating a variety of idioms to express nuanced opinions and decisions.",
              "pt": "A conclusão bem-sucedida exige a incorporação de uma variedade de expressões idiomáticas para expressar opiniões e decisões matizadas."
            }
          },
          {
            "id": "act-14-2-check2",
            "prompt": {
              "en": "How did you ensure that the discussion remained 'academic' and respectful?",
              "pt": "Como você garantiu que a discussão permanecesse 'acadêmica' e respeitosa?"
            },
            "options": [
              "By interrupting others.",
              "By using phrases like 'It could be argued that...' and listening actively.",
              "By only agreeing with one perspective."
            ],
            "answer": "By using phrases like 'It could be argued that...' and listening actively.",
            "explanation": {
              "en": "Academic discussion phrases promote a formal and respectful exchange of ideas, coupled with active listening.",
              "pt": "Frases de discussão acadêmica promovem uma troca formal e respeitosa de ideias, juntamente com escuta ativa."
            }
          }
        ]
      },
      {
        "id": "comm-14-3",
        "title": {
          "en": "Write a Formal Text: Opinion Essay",
          "pt": "Escrever um Texto Formal: Ensaio de Opinião"
        },
        "instruction": {
          "en": "Choose one of the ethical dilemmas discussed in the previous activity. Write a short opinion essay (150-200 words) expressing your viewpoint. Incorporate at least two academic discussion expressions and two idiomatic expressions for opinions/decision-making. Remember to use participle clauses for conciseness (review from prerequisites).",
          "pt": "Escolha um dos dilemas éticos discutidos na atividade anterior. Escreva um ensaio de opinião curto (150-200 palavras) expressando seu ponto de vista. Incorpore pelo menos duas expressões de discussão acadêmica e duas expressões idiomáticas para opiniões/tomada de decisão. Lembre-se de usar orações participiais para concisão (revisão dos pré-requisitos)."
        },
        "phrases": [
          {
            "en": "Focusing on AI ethics, this raises the question of societal control.",
            "pt": "Focando na ética da IA, isso levanta a questão do controle social."
          },
          {
            "en": "It could be argued that strict regulations are necessary, with many stakeholders feeling on the fence about rapid technological advancement.",
            "pt": "Poder-se-ia argumentar que regulamentações rigorosas são necessárias, com muitos stakeholders se sentindo indecisos sobre o rápido avanço tecnológico."
          },
          {
            "en": "Considering the potential benefits, we must bite the bullet and invest in robust oversight, not jumping to conclusions about dystopian futures.",
            "pt": "Considerando os potenciais benefícios, devemos encarar a situação e investir em uma supervisão robusta, não tirando conclusões precipitadas sobre futuros distópicos."
          }
        ],
        "check": [
          {
            "id": "act-14-3-check1",
            "prompt": {
              "en": "Did your essay include at least two academic discussion expressions?",
              "pt": "Seu ensaio incluiu pelo menos duas expressões de discussão acadêmica?"
            },
            "options": [
              "Yes, I used them effectively.",
              "I used only one.",
              "No, I forgot them."
            ],
            "answer": "Yes, I used them effectively.",
            "explanation": {
              "en": "The instruction explicitly asked for at least two academic discussion expressions to be included.",
              "pt": "A instrução pediu explicitamente que pelo menos duas expressões de discussão acadêmica fossem incluídas."
            }
          },
          {
            "id": "act-14-3-check2",
            "prompt": {
              "en": "Were participle clauses used to enhance conciseness in your writing?",
              "pt": "Foram utilizadas orações participiais para aumentar a concisão em sua escrita?"
            },
            "options": [
              "Yes, I integrated them naturally.",
              "I tried but it was difficult.",
              "No, I focused on other elements."
            ],
            "answer": "Yes, I integrated them naturally.",
            "explanation": {
              "en": "The prompt specifically mentioned reviewing and applying participle clauses for concise and sophisticated sentence structures.",
              "pt": "A solicitação mencionou especificamente a revisão e aplicação de orações participiais para estruturas de frases concisas e sofisticadas."
            }
          }
        ]
      }
    ],
    "challenge": {
      "id": "comm-14-challenge",
      "title": {
        "en": "Negotiate a Community Project",
        "pt": "Negociar um Projeto Comunitário"
      },
      "instruction": {
        "en": "You are part of a community council discussing a new local project (e.g., building a new park vs. a community center). In groups of three, each person takes on a role (e.g., 'Park Advocate', 'Community Center Advocate', 'Neutral Facilitator'). Negotiate and argue for your position, expressing opinions, making decisions, and responding to counterarguments using the learned vocabulary and expressions. Aim to reach a consensus or a clear understanding of the differing viewpoints.",
        "pt": "Você faz parte de um conselho comunitário discutindo um novo projeto local (por exemplo, construir um novo parque versus um centro comunitário). Em grupos de três, cada pessoa assume um papel (por exemplo, 'Defensor do Parque', 'Defensor do Centro Comunitário', 'Facilitador Neutro'). Negocie e defenda sua posição, expressando opiniões, tomando decisões e respondendo a contra-argumentos usando o vocabulário e as expressões aprendidas. Procure chegar a um consenso ou a uma compreensão clara dos diferentes pontos de vista."
      },
      "phrases": [
        {
          "en": "From my perspective as a park advocate, this raises the question of urban green spaces' impact on well-being.",
          "pt": "Da minha perspectiva como defensor do parque, isso levanta a questão do impacto dos espaços verdes urbanos no bem-estar."
        },
        {
          "en": "It could be argued that a community center offers broader utility, but I'm on the fence about compromising too much on green initiatives.",
          "pt": "Poder-se-ia argumentar que um centro comunitário oferece maior utilidade, mas estou indeciso sobre comprometer demais as iniciativas verdes."
        },
        {
          "en": "Let's not jump to conclusions about public preference. The data points to a balanced need for both, which means we might have to bite the bullet and find a hybrid solution.",
          "pt": "Não vamos tirar conclusões precipitadas sobre a preferência pública. Os dados apontam para uma necessidade equilibrada de ambos, o que significa que poderíamos ter que encarar a situação e encontrar uma solução híbrida."
        }
      ],
      "check": [
        {
          "id": "challenge-14-check1",
          "prompt": {
            "en": "Did your group effectively use specific idioms related to opinions and decision-making during the negotiation?",
            "pt": "Seu grupo usou efetivamente expressões idiomáticas específicas relacionadas a opiniões e tomada de decisão durante a negociação?"
          },
          "options": [
            "Yes, we integrated them naturally and frequently.",
            "We used a few, but not consistently.",
            "No, we relied on simpler language."
          ],
          "answer": "Yes, we integrated them naturally and frequently.",
          "explanation": {
            "en": "The challenge emphasizes applying the new idiomatic expressions in a dynamic negotiation context.",
            "pt": "O desafio enfatiza a aplicação das novas expressões idiomáticas em um contexto dinâmico de negociação."
          }
        },
        {
          "id": "challenge-14-check2",
          "prompt": {
            "en": "How well did your group navigate conflicting opinions to reach a decision or mutual understanding?",
            "pt": "Quão bem seu grupo navegou por opiniões conflitantes para chegar a uma decisão ou compreensão mútua?"
          },
          "options": [
            "We reached a consensus or clear understanding.",
            "We mostly agreed, but some points remained unresolved.",
            "We struggled to find common ground."
          ],
          "answer": "We reached a consensus or clear understanding.",
          "explanation": {
            "en": "A successful negotiation involves either reaching a consensus or, at minimum, a clear understanding of all perspectives.",
            "pt": "Uma negociação bem-sucedida envolve ou chegar a um consenso ou, no mínimo, a uma compreensão clara de todas as perspectivas."
          }
        }
      ]
    },
    "lessonReview": {
      "summary": {
        "en": "In this unit, we explored social interaction vocabulary, academic discussion expressions, and crucial idiomatic phrases for expressing opinions and making decisions. We practiced these in various contexts, from informal chats to formal debates and negotiations.",
        "pt": "Nesta unidade, exploramos vocabulário de interação social, expressões de discussão acadêmica e frases idiomáticas cruciais para expressar opiniões e tomar decisões. Praticamos isso em vários contextos, desde conversas informais até debates e negociações formais."
      },
      "canDo": [
        {
          "en": "I can confidently use vocabulary for various social interactions, such as 'invite' and 'compliment'.",
          "pt": "Posso usar com confiança o vocabulário para diversas interações sociais, como 'convidar' e 'elogiar'."
        },
        {
          "en": "I can initiate and participate in academic discussions using expressions like 'This raises the question of...' and 'It could be argued that...'.",
          "pt": "Posso iniciar e participar de discussões acadêmicas usando expressões como 'This raises the question of...' e 'It could be argued that...'."
        },
        {
          "en": "I can express nuanced opinions and decisions using idioms such as 'on the fence' and 'bite the bullet'.",
          "pt": "Posso expressar opiniões e decisões matizadas usando expressões idiomáticas como 'on the fence' e 'bite the bullet'."
        }
      ],
      "next": {
        "en": "Next, we will move on to Unit 15, which focuses on advanced narrative structures and vocabulary related to future trends and predictions.",
        "pt": "Em seguida, passaremos para a Unidade 15, que se concentra em estruturas narrativas avançadas e vocabulário relacionado a tendências e previsões futuras."
      }
    }
  }
},
{
  "code": "UPPER-INTERMEDIATE-U15",
  "number": 15,
  "title": "Hobbies — Advanced relative clauses with prepositions and quantifiers",
  "titlePt": "Hobbies — Orações relativas avançadas com preposições e quantificadores",
  "cefr": "B2",
  "objective": {
    "en": "To teach hobbies and advanced relative clauses with prepositions and quantifiers in a contextualized manner.",
    "pt": "Ensinar hobbies e orações relativas avançadas com preposições e quantificadores de forma contextualizada."
  },
  "communicationGoal": {
    "en": "Students will be able to use 'formal writing' and hobby vocabulary to communicate in real situations.",
    "pt": "O aluno será capaz de usar 'formal writing' e o vocabulário de hobbies para se comunicar em situações reais."
  },
  "prerequisites": {
    "en": "Structure: Idiomatic expressions related to opinions and decision-making. Vocabulary: Social Interaction.",
    "pt": "Estrutura: Expressões idiomáticas relacionadas a opiniões e tomada de decisão. Vocabulário: Interação Social."
  },
  "newContent": {
    "en": "Grammar: Advanced relative clauses with prepositions and quantifiers. | Vocabulary: Hobbies (10 lexical items) | Expressions: Formal Writing",
    "pt": "Gramática: Orações relativas avançadas com preposições e quantificadores. | Vocabulário: Hobbies (10 itens lexicais) | Expressões: Escrita Formal"
  },
  "reviewContent": {
    "en": "Spiral review: Idiomatic expressions for describing challenges and effort (Unit 8). Vocabulary review: Business Economy (Unit 1).",
    "pt": "Revisão em espiral: Expressões idiomáticas para descrever desafios e esforço (Unidade 8). Revisão de vocabulário: Economia de Negócios (Unidade 1)."
  },
  "discover": {
    "id": "UPPER-INTERMEDIATE-U15-DISCOVER",
    "warmUp": {
      "prompt": {
        "en": "What do you do in your free time? Look at the images and describe the hobbies you see. Which ones do you find most interesting and why?",
        "pt": "O que você faz no seu tempo livre? Olhe as imagens e descreva os hobbies que você vê. Quais você acha mais interessantes e por quê?"
      },
      "phrases": [
        {
          "en": "In my spare time, I often find myself...",
          "pt": "No meu tempo livre, frequentemente me pego..."
        },
        {
          "en": "I'm quite passionate about...",
          "pt": "Sou bastante apaixonado por..."
        }
      ]
    },
    "context": {
      "situation": {
        "en": "Imagine you're applying for a community leadership program. You need to write a formal email highlighting your hobbies and how they contribute to your leadership skills.",
        "pt": "Imagine que você está se candidatando a um programa de liderança comunitária. Você precisa escrever um e-mail formal destacando seus hobbies e como eles contribuem para suas habilidades de liderança."
      },
      "dialogue": [
        {
          "who": "Mentor",
          "en": "Good morning, Alex. I've received your application for the 'Community Connect' program. Your volunteer work history is impressive.",
          "pt": "Bom dia, Alex. Recebi sua inscrição para o programa 'Conexão Comunitária'. Seu histórico de trabalho voluntário é impressionante."
        },
        {
          "who": "Alex",
          "en": "Thank you! I'm truly passionate about volunteering. It's one of the hobbies from which I've learned the most about teamwork.",
          "pt": "Obrigado! Sou realmente apaixonado por trabalho voluntário. É um dos hobbies dos quais mais aprendi sobre trabalho em equipe."
        },
        {
          "who": "Mentor",
          "en": "I noticed you also mentioned 'collecting'. Could you elaborate on that? It's not a common hobby among applicants.",
          "pt": "Notei que você também mencionou 'colecionar'. Poderia detalhar isso? Não é um hobby comum entre os candidatos."
        },
        {
          "who": "Alex",
          "en": "Certainly. I collect vintage postcards, many of which depict historical landmarks. It's a hobby through which I've developed a keen eye for detail.",
          "pt": "Claro. Coleciono cartões postais vintage, muitos dos quais retratam marcos históricos. É um hobby através do qual desenvolvi um olhar aguçado para detalhes."
        },
        {
          "who": "Mentor",
          "en": "That's fascinating. And your application states you're also involved in 'writing', which I find beneficial for communication roles.",
          "pt": "Isso é fascinante. E sua inscrição afirma que você também está envolvido em 'escrita', o que considero benéfico para funções de comunicação."
        },
        {
          "who": "Alex",
          "en": "Indeed. I write short stories, several of which have been published online. It's an activity from which I gain immense satisfaction and improved linguistic skills.",
          "pt": "De fato. Eu escrevo contos, vários dos quais foram publicados online. É uma atividade da qual obtenho imensa satisfação e habilidades linguísticas aprimoradas."
        }
      ]
    },
    "vocabulary": [
      {
        "term": "photography",
        "pt": "fotografia",
        "ipa": "/fəˈtɒɡrəfi/",
        "definition": "The art or practice of taking and processing photographs.",
        "example": "Her photography skills were evident in the stunning landscape pictures she shared.",
        "examplePt": "Suas habilidades de fotografia eram evidentes nas deslumbrantes fotos de paisagens que ela compartilhou."
      },
      {
        "term": "hiking",
        "pt": "caminhada",
        "ipa": "/ˈhaɪkɪŋ/",
        "definition": "The activity of walking long distances in the countryside or wilderness for pleasure or exercise.",
        "example": "He found tranquility in hiking through national parks every weekend.",
        "examplePt": "Ele encontrava tranquilidade em fazer caminhadas por parques nacionais todo fim de semana."
      },
      {
        "term": "gaming",
        "pt": "jogar (jogos eletrônicos)",
        "ipa": "/ˈɡeɪmɪŋ/",
        "definition": "The activity of playing electronic games, typically video games.",
        "example": "Gaming is a popular hobby among teenagers, some of whom compete professionally.",
        "examplePt": "Jogar é um hobby popular entre adolescentes, alguns dos quais competem profissionalmente."
      },
      {
        "term": "gardening",
        "pt": "jardinagem",
        "ipa": "/ˈɡɑːrdənɪŋ/",
        "definition": "The activity of cultivating and maintaining a garden.",
        "example": "She spent her mornings gardening, planting new flowers and tending to her vegetables.",
        "examplePt": "Ela passava as manhãs fazendo jardinagem, plantando novas flores e cuidando de seus vegetais."
      },
      {
        "term": "cooking",
        "pt": "cozinhar",
        "ipa": "/ˈkʊkɪŋ/",
        "definition": "The activity or skill of preparing and cooking food.",
        "example": "His passion for cooking led him to experiment with exotic spices and international cuisines.",
        "examplePt": "Sua paixão por cozinhar o levou a experimentar especiarias exóticas e culinárias internacionais."
      },
      {
        "term": "painting",
        "pt": "pintura",
        "ipa": "/ˈpeɪntɪŋ/",
        "definition": "The action or art of creating pictures or designs with paint.",
        "example": "Painting is a relaxing hobby, through which she expresses her creativity.",
        "examplePt": "Pintar é um hobby relaxante, através do qual ela expressa sua criatividade."
      },
      {
        "term": "collecting",
        "pt": "colecionar",
        "ipa": "/kəˈlɛktɪŋ/",
        "definition": "The activity of gathering items of a particular type, often as a hobby.",
        "example": "His hobby of collecting stamps evolved into a comprehensive study of philately.",
        "examplePt": "Seu hobby de colecionar selos evoluiu para um estudo abrangente de filatelia."
      },
      {
        "term": "writing",
        "pt": "escrever",
        "ipa": "/ˈraɪtɪŋ/",
        "definition": "The activity or skill of composing text, especially for publication or as a creative pursuit.",
        "example": "She dedicates several hours each day to writing her novel, which she hopes to publish soon.",
        "examplePt": "Ela dedica várias horas por dia a escrever seu romance, que espera publicar em breve."
      },
      {
        "term": "traveling",
        "pt": "viajar",
        "ipa": "/ˈtrævəlɪŋ/",
        "definition": "The action of going from one place to another, especially over a long distance.",
        "example": "Traveling is her favorite hobby, many aspects of which involve experiencing different cultures.",
        "examplePt": "Viajar é seu hobby favorito, muitos aspectos dos quais envolvem experimentar diferentes culturas."
      },
      {
        "term": "volunteering",
        "pt": "trabalho voluntário",
        "ipa": "/ˌvɒlənˈtɪərɪŋ/",
        "definition": "The act of working for an organization without being paid, as a volunteer.",
        "example": "Volunteering at the animal shelter gives her immense satisfaction.",
        "examplePt": "O trabalho voluntário no abrigo de animais lhe dá imensa satisfação."
      }
    ],
    "expressions": [
      {
        "en": "I am writing to inform you that...",
        "pt": "Escrevo para informar que..."
      },
      {
        "en": "Please find attached...",
        "pt": "Por favor, encontre anexado..."
      },
      {
        "en": "I would appreciate your feedback.",
        "pt": "Eu agradeceria seu feedback."
      }
    ],
    "grammar": [
      {
        "title": {
          "en": "Advanced relative clauses with prepositions and quantifiers",
          "pt": "Orações relativas avançadas com preposições e quantificadores"
        },
        "examples": [
          {
            "en": "The company, whose reputation is excellent, hired her immediately.",
            "pt": "A empresa, cuja reputação é excelente, a contratou imediatamente."
          },
          {
            "en": "Several of the proposals, none of which were approved, are under review.",
            "pt": "Várias das propostas, nenhuma das quais foi aprovada, estão em revisão."
          },
          {
            "en": "He has many hobbies, some of which involve outdoor activities.",
            "pt": "Ele tem muitos hobbies, alguns dos quais envolvem atividades ao ar livre."
          }
        ],
        "rule": {
          "en": "Advanced relative clauses with prepositions and quantifiers provide more specific information about a noun. They often appear in formal writing. We can use a quantifier (e.g., 'many', 'some', 'none', 'all', 'several') followed by 'of whom' (for people) or 'of which' (for things) to refer to a part of a larger group. Prepositions can also precede relative pronouns ('whom', 'which', 'whose') to clarify the relationship, such as 'in which', 'for whom', 'through which'. The relative pronoun 'whose' indicates possession and can refer to people, animals, or things.",
          "pt": "Orações relativas avançadas com preposições e quantificadores fornecem informações mais específicas sobre um substantivo. Elas frequentemente aparecem na escrita formal. Podemos usar um quantificador (por exemplo, 'muitos', 'alguns', 'nenhum', 'todos', 'vários') seguido por 'of whom' (para pessoas) ou 'of which' (para coisas) para se referir a uma parte de um grupo maior. Preposições também podem preceder pronomes relativos ('whom', 'which', 'whose') para esclarecer a relação, como 'in which', 'for whom', 'through which'. O pronome relativo 'whose' indica posse e pode se referir a pessoas, animais ou coisas."
        },
        "mistakes": [
          {
            "en": "Incorrect: He has a hobby what he loves. (Using 'what' instead of 'which' or a prepositional phrase)",
            "pt": "Incorreto: Ele tem um hobby o que ele ama. (Usando 'what' em vez de 'which' ou uma locução preposicional)"
          },
          {
            "en": "Incorrect: The team, some of them are very talented, won the championship. (Using 'them' instead of 'whom')",
            "pt": "Incorreto: O time, alguns deles são muito talentosos, ganhou o campeonato. (Usando 'them' em vez de 'whom')"
          }
        ]
      }
    ],
    "controlledPractice": [
      {
        "id": "cp15-1",
        "prompt": {
          "en": "Choose the best way to combine the sentences: 'I visited several cities. Many of these cities had ancient ruins.'",
          "pt": "Escolha a melhor forma de combinar as frases: 'Visitei várias cidades. Muitas dessas cidades tinham ruínas antigas.'"
        },
        "options": [
          "I visited several cities, many of which had ancient ruins.",
          "I visited several cities what had ancient ruins.",
          "I visited several cities, many of them had ancient ruins."
        ],
        "answer": "I visited several cities, many of which had ancient ruins.",
        "explanation": {
          "en": "The correct structure uses 'many of which' to refer to a portion of the cities, maintaining a formal tone.",
          "pt": "A estrutura correta usa 'many of which' para se referir a uma parte das cidades, mantendo um tom formal."
        }
      },
      {
        "id": "cp15-2",
        "prompt": {
          "en": "Fill in the blank: 'The author, _______ books are bestsellers, will be at the signing event.'",
          "pt": "Preencha a lacuna: 'O autor, _______ livros são best-sellers, estará no evento de autógrafos.'"
        },
        "options": [
          "whose",
          "who's",
          "which"
        ],
        "answer": "whose",
        "explanation": {
          "en": "'Whose' is used to show possession, indicating that the books belong to the author.",
          "pt": "'Whose' é usado para mostrar posse, indicando que os livros pertencem ao autor."
        }
      },
      {
        "id": "cp15-3",
        "prompt": {
          "en": "Identify the correct sentence: 'She introduced me to her colleagues, all of whom I found very friendly.'",
          "pt": "Identifique a frase correta: 'Ela me apresentou aos colegas dela, todos os quais achei muito simpáticos.'"
        },
        "options": [
          "She introduced me to her colleagues, all of whom I found very friendly.",
          "She introduced me to her colleagues, all of which I found very friendly.",
          "She introduced me to her colleagues, all of them I found very friendly."
        ],
        "answer": "She introduced me to her colleagues, all of whom I found very friendly.",
        "explanation": {
          "en": "For people, we use 'whom' after a preposition or quantifier. 'Which' is for things, and 'them' is not used in this type of advanced relative clause.",
          "pt": "Para pessoas, usamos 'whom' depois de uma preposição ou quantificador. 'Which' é para coisas, e 'them' não é usado neste tipo de oração relativa avançada."
        }
      },
      {
        "id": "cp15-4",
        "prompt": {
          "en": "Choose the correct formal expression to start an email requesting information.",
          "pt": "Escolha a expressão formal correta para iniciar um e-mail solicitando informações."
        },
        "options": [
          "I am writing to inquire about...",
          "Just wanted to ask about...",
          "Can you tell me about..."
        ],
        "answer": "I am writing to inquire about...",
        "explanation": {
          "en": "'I am writing to inquire about...' is the most appropriate and formal way to begin an email requesting information.",
          "pt": "'I am writing to inquire about...' é a maneira mais apropriada e formal de iniciar um e-mail solicitando informações."
        }
      }
    ],
    "input": {
      "kind": "reading",
      "title": {
        "en": "The Unseen Benefits of Our Hobbies",
        "pt": "Os Benefícios Ocultos de Nossos Hobbies"
      },
      "lines": [
        {
          "en": "In an increasingly demanding world, the role of hobbies, many of which are often overlooked for their profound impact, has become more crucial than ever.",
          "pt": "Em um mundo cada vez mais exigente, o papel dos hobbies, muitos dos quais são frequentemente negligenciados por seu profundo impacto, tornou-se mais crucial do que nunca."
        },
        {
          "en": "Activities such as gardening, through which individuals connect with nature, or cooking, for which passion is a key ingredient, offer more than mere leisure.",
          "pt": "Atividades como jardinagem, através da qual os indivíduos se conectam com a natureza, ou cozinhar, para a qual a paixão é um ingrediente chave, oferecem mais do que mero lazer."
        },
        {
          "en": "Take photography, for example. The intricate process of capturing light and shadow, much of which requires patience and a keen eye, develops observational skills.",
          "pt": "Pegue a fotografia, por exemplo. O processo intrincado de capturar luz e sombra, muito do qual requer paciência e um olhar aguçado, desenvolve habilidades de observação."
        },
        {
          "en": "Similarly, volunteering, all of whose participants contribute to societal well-being, fosters empathy and leadership.",
          "pt": "Da mesma forma, o trabalho voluntário, todos os cujos participantes contribuem para o bem-estar social, promove a empatia e a liderança."
        },
        {
          "en": "These pursuits, some of which seem solitary, are actually conduits for personal growth, providing a vital balance to our professional lives.",
          "pt": "Essas atividades, algumas das quais parecem solitárias, são na verdade condutos para o crescimento pessoal, proporcionando um equilíbrio vital para nossas vidas profissionais."
        }
      ],
      "questions": [
        {
          "id": "rq15-1",
          "prompt": {
            "en": "What is the main idea of the reading passage?",
            "pt": "Qual é a ideia principal do trecho de leitura?"
          },
          "options": [
            "Hobbies are essential for personal growth and offer significant benefits beyond leisure.",
            "Only creative hobbies like photography and cooking are truly beneficial.",
            "Professional lives should always take precedence over hobbies."
          ],
          "answer": "Hobbies are essential for personal growth and offer significant benefits beyond leisure.",
          "explanation": {
            "en": "The passage emphasizes that hobbies are crucial and offer 'profound impact' and 'personal growth' beyond just leisure.",
            "pt": "A passagem enfatiza que os hobbies são cruciais e oferecem 'impacto profundo' e 'crescimento pessoal' além do mero lazer."
          }
        },
        {
          "id": "rq15-2",
          "prompt": {
            "en": "According to the text, what skill is developed through photography?",
            "pt": "De acordo com o texto, qual habilidade é desenvolvida através da fotografia?"
          },
          "options": [
            "Observational skills",
            "Physical endurance",
            "Public speaking"
          ],
          "answer": "Observational skills",
          "explanation": {
            "en": "The text states that photography 'develops observational skills' due to its intricate process.",
            "pt": "O texto afirma que a fotografia 'desenvolve habilidades de observação' devido ao seu processo intrincado."
          }
        },
        {
          "id": "rq15-3",
          "prompt": {
            "en": "What does the phrase 'conduits for personal growth' imply about hobbies?",
            "pt": "O que a frase 'condutos para o crescimento pessoal' implica sobre os hobbies?"
          },
          "options": [
            "They serve as channels or means for individuals to develop themselves.",
            "They are obstacles that prevent individuals from growing.",
            "They are solitary activities that offer no interaction."
          ],
          "answer": "They serve as channels or means for individuals to develop themselves.",
          "explanation": {
            "en": "'Conduits' means channels or pathways, indicating that hobbies facilitate personal development.",
            "pt": "'Condutos' significa canais ou vias, indicando que os hobbies facilitam o desenvolvimento pessoal."
          }
        }
      ]
    },
    "quickCheck": [
      {
        "id": "qc15-1",
        "prompt": {
          "en": "Which of the following uses an advanced relative clause correctly?",
          "pt": "Qual das seguintes frases usa uma oração relativa avançada corretamente?"
        },
        "options": [
          "She presented two options, neither of which was suitable.",
          "She presented two options, neither of them was suitable.",
          "She presented two options, none was suitable."
        ],
        "answer": "She presented two options, neither of which was suitable.",
        "explanation": {
          "en": "'Neither of which' correctly introduces an advanced relative clause referring to the options.",
          "pt": "'Neither of which' introduz corretamente uma oração relativa avançada referindo-se às opções."
        }
      },
      {
        "id": "qc15-2",
        "prompt": {
          "en": "Which hobby is explicitly mentioned as fostering empathy and leadership?",
          "pt": "Qual hobby é explicitamente mencionado como promovendo empatia e liderança?"
        },
        "options": [
          "Volunteering",
          "Gaming",
          "Painting"
        ],
        "answer": "Volunteering",
        "explanation": {
          "en": "The reading states, 'volunteering, all of whose participants contribute to societal well-being, fosters empathy and leadership.'",
          "pt": "A leitura afirma: 'o trabalho voluntário, todos os cujos participantes contribuem para o bem-estar social, promove a empatia e a liderança.'"
        }
      },
      {
        "id": "qc15-3",
        "prompt": {
          "en": "Which expression is appropriate for formal writing to attach a document?",
          "pt": "Qual expressão é apropriada para escrita formal para anexar um documento?"
        },
        "options": [
          "Please find attached...",
          "Here's the document you asked for...",
          "I've put the document in the email."
        ],
        "answer": "Please find attached...",
        "explanation": {
          "en": "'Please find attached...' is a standard and formal phrase for indicating an attachment.",
          "pt": "'Please find attached...' é uma frase padrão e formal para indicar um anexo."
        }
      },
      {
        "id": "qc15-4",
        "prompt": {
          "en": "Correct the mistake: 'I know a painter, which work is famous.'",
          "pt": "Corrija o erro: 'Conheço um pintor, cujo trabalho é famoso.'"
        },
        "options": [
          "I know a painter, whose work is famous.",
          "I know a painter, who work is famous.",
          "I know a painter, which his work is famous."
        ],
        "answer": "I know a painter, whose work is famous.",
        "explanation": {
          "en": "'Whose' is used to show possession, linking the painter to their work.",
          "pt": "'Whose' é usado para mostrar posse, ligando o pintor ao seu trabalho."
        }
      }
    ]
  },
  "communicate": {
    "id": "UPPER-INTERMEDIATE-U15-COMMUNICATE",
    "review": [
      {
        "en": "Review the formal writing expressions introduced in Discover, such as 'I am writing to inform you that...' and 'Please find attached...'.",
        "pt": "Revise as expressões de escrita formal introduzidas em Discover, como 'I am writing to inform you that...' e 'Please find attached...'."
      },
      {
        "en": "Revisit the hobby vocabulary: photography, hiking, gaming, gardening, cooking, painting, collecting, writing, traveling, volunteering.",
        "pt": "Relembre o vocabulário de hobbies: fotografia, caminhada, jogos eletrônicos, jardinagem, culinária, pintura, colecionismo, escrita, viagens, voluntariado."
      },
      {
        "en": "Quickly review advanced relative clauses with prepositions and quantifiers, focusing on their use in formal contexts.",
        "pt": "Revise rapidamente as orações relativas avançadas com preposições e quantificadores, focando no seu uso em contextos formais."
      }
    ],
    "activities": [
      {
        "id": "comm15-activity-1",
        "title": {
          "en": "Give a Nuanced Opinion: Hobby's Impact",
          "pt": "Dê uma Opinião Nuances: Impacto do Hobby"
        },
        "instruction": {
          "en": "Discuss with a partner the most impactful hobby from the list and explain, using advanced relative clauses, how it contributes to personal or societal development. Give a nuanced opinion, considering both positive and potentially challenging aspects.",
          "pt": "Discuta com um parceiro o hobby mais impactante da lista e explique, usando orações relativas avançadas, como ele contribui para o desenvolvimento pessoal ou social. Dê uma opinião matizada, considerando tanto os aspectos positivos quanto os potencialmente desafiadores."
        },
        "phrases": [
          {
            "en": "While some might argue that [hobby] is merely a pastime, I believe it's an activity through which...",
            "pt": "Embora alguns possam argumentar que [hobby] é meramente um passatempo, acredito que é uma atividade através da qual..."
          },
          {
            "en": "The nuance here is that [hobby], many aspects of which can be demanding, ultimately leads to...",
            "pt": "A nuance aqui é que [hobby], muitos aspectos dos quais podem ser exigentes, finalmente leva a..."
          },
          {
            "en": "I hold the view that [hobby], the practitioners of which often show great dedication, offers unparalleled benefits in terms of...",
            "pt": "Sou da opinião de que [hobby], cujos praticantes frequentemente demonstram grande dedicação, oferece benefícios incomparáveis em termos de..."
          }
        ],
        "check": [
          {
            "id": "comm15-act1-check1",
            "prompt": {
              "en": "Which sentence correctly expresses a nuanced opinion about a hobby using an advanced relative clause?",
              "pt": "Qual frase expressa corretamente uma opinião matizada sobre um hobby usando uma oração relativa avançada?"
            },
            "options": [
              "Gaming, some aspects of which involve critical thinking, can also lead to sedentary lifestyles.",
              "Gaming is good, it makes people smart.",
              "Gaming is just a waste of time, which I don't like."
            ],
            "answer": "Gaming, some aspects of which involve critical thinking, can also lead to sedentary lifestyles.",
            "explanation": {
              "en": "This sentence provides both a positive and a negative aspect of gaming, demonstrating a nuanced opinion, and correctly uses 'some aspects of which'.",
              "pt": "Esta frase apresenta tanto um aspecto positivo quanto um negativo do gaming, demonstrando uma opinião matizada, e usa corretamente 'some aspects of which'."
            }
          },
          {
            "id": "comm15-act1-check2",
            "prompt": {
              "en": "What is the primary purpose of expressing a 'nuanced opinion'?",
              "pt": "Qual é o principal objetivo de expressar uma 'opinião matizada'?"
            },
            "options": [
              "To present a balanced perspective, considering multiple facets of an issue.",
              "To state a strong, one-sided argument without reservations.",
              "To express confusion or uncertainty about a topic."
            ],
            "answer": "To present a balanced perspective, considering multiple facets of an issue.",
            "explanation": {
              "en": "A nuanced opinion involves acknowledging different aspects and complexities, rather than just one side.",
              "pt": "Uma opinião matizada envolve reconhecer diferentes aspectos e complexidades, em vez de apenas um lado."
            }
          }
        ]
      },
      {
        "id": "comm15-activity-2",
        "title": {
          "en": "Reflect and Report Back: My Hobbies and Skills",
          "pt": "Reflita e Relate: Meus Hobbies e Habilidades"
        },
        "instruction": {
          "en": "Individually, reflect on one or two of your own hobbies. Write a short paragraph (3-4 sentences) describing them and how they've contributed to a skill or personal trait, using at least one advanced relative clause. Then, share your reflections with the class and report back on a classmate's hobby.",
          "pt": "Individualmente, reflita sobre um ou dois de seus próprios hobbies. Escreva um parágrafo curto (3-4 frases) descrevendo-os e como eles contribuíram para uma habilidade ou característica pessoal, usando pelo menos uma oração relativa avançada. Em seguida, compartilhe suas reflexões com a turma e relate sobre o hobby de um colega."
        },
        "phrases": [
          {
            "en": "My hobby is [hobby], for which I have a deep appreciation.",
            "pt": "Meu hobby é [hobby], pelo qual tenho uma profunda apreciação."
          },
          {
            "en": "It's an activity through which I've developed [skill/trait].",
            "pt": "É uma atividade através da qual desenvolvi [habilidade/traço]."
          },
          {
            "en": "[Classmate's Name]'s hobby is [hobby], some aspects of which involve...",
            "pt": "O hobby de [Nome do Colega] é [hobby], alguns aspectos dos quais envolvem..."
          }
        ],
        "check": [
          {
            "id": "comm15-act2-check1",
            "prompt": {
              "en": "Which sentence effectively reflects on a hobby's contribution using an advanced relative clause?",
              "pt": "Qual frase reflete efetivamente sobre a contribuição de um hobby usando uma oração relativa avançada?"
            },
            "options": [
              "My gardening, much of which requires patience, has taught me about persistence.",
              "I like gardening, and it teaches me patience.",
              "Gardening is good for patience."
            ],
            "answer": "My gardening, much of which requires patience, has taught me about persistence.",
            "explanation": {
              "en": "This sentence correctly uses 'much of which' to provide detail about gardening and its contribution to a skill.",
              "pt": "Esta frase usa corretamente 'much of which' para detalhar a jardinagem e sua contribuição para uma habilidade."
            }
          },
          {
            "id": "comm15-act2-check2",
            "prompt": {
              "en": "When reporting back on a classmate's hobby, what should be included?",
              "pt": "Ao relatar sobre o hobby de um colega, o que deve ser incluído?"
            },
            "options": [
              "The classmate's hobby and how it contributes to their skills or traits.",
              "A comparison of your hobby to the classmate's hobby.",
              "Only your personal opinion about the classmate's hobby."
            ],
            "answer": "The classmate's hobby and how it contributes to their skills or traits.",
            "explanation": {
              "en": "The instruction specifies reporting on 'a classmate's hobby' and how it contributes to a skill or personal trait.",
              "pt": "A instrução especifica relatar sobre 'o hobby de um colega' e como ele contribui para uma habilidade ou característica pessoal."
            }
          }
        ]
      },
      {
        "id": "comm15-activity-3",
        "title": {
          "en": "Debate: Hobbies vs. Formal Education",
          "pt": "Debate: Hobbies vs. Educação Formal"
        },
        "instruction": {
          "en": "Form two teams. One team argues that hobbies are as crucial as, if not more crucial than, formal education for holistic development. The other team argues for the supremacy of formal education. Use formal expressions and advanced relative clauses to support your arguments.",
          "pt": "Forme duas equipes. Uma equipe argumenta que os hobbies são tão cruciais quanto, se não mais cruciais do que, a educação formal para o desenvolvimento holístico. A outra equipe defende a supremacia da educação formal. Use expressões formais e orações relativas avançadas para apoiar seus argumentos."
        },
        "phrases": [
          {
            "en": "I am writing to assert that hobbies, many of which foster creativity, are indispensable...",
            "pt": "Escrevo para afirmar que os hobbies, muitos dos quais estimulam a criatividade, são indispensáveis..."
          },
          {
            "en": "It is our contention that formal education, the structured curriculum of which is designed for comprehensive learning, remains paramount.",
            "pt": "É nossa alegação que a educação formal, cujo currículo estruturado é projetado para aprendizagem abrangente, permanece primordial."
          },
          {
            "en": "We would appreciate your consideration of the argument that [hobby], through which unique skills are acquired, complements academic pursuits profoundly.",
            "pt": "Agradeceríamos sua consideração do argumento de que [hobby], através do qual habilidades únicas são adquiridas, complementa profundamente as atividades acadêmicas."
          }
        ],
        "check": [
          {
            "id": "comm15-act3-check1",
            "prompt": {
              "en": "Which formal expression would be best to introduce a strong counter-argument in a debate?",
              "pt": "Qual expressão formal seria melhor para introduzir um forte contra-argumento em um debate?"
            },
            "options": [
              "However, it is imperative to consider that...",
              "But I think...",
              "Yeah, well, what about..."
            ],
            "answer": "However, it is imperative to consider that...",
            "explanation": {
              "en": "'However, it is imperative to consider that...' is a formal and strong way to introduce a counter-argument.",
              "pt": "'However, it is imperative to consider that...' é uma maneira formal e forte de introduzir um contra-argumento."
            }
          },
          {
            "id": "comm15-act3-check2",
            "prompt": {
              "en": "In the debate, if you are arguing for formal education, which point would be most relevant to make using an advanced relative clause?",
              "pt": "No debate, se você está argumentando a favor da educação formal, qual ponto seria mais relevante para apresentar usando uma oração relativa avançada?"
            },
            "options": [
              "Formal education, the credentials of which are recognized globally, provides a universal foundation for careers.",
              "Formal education is good because it gives you a job.",
              "You learn stuff in school, which is important."
            ],
            "answer": "Formal education, the credentials of which are recognized globally, provides a universal foundation for careers.",
            "explanation": {
              "en": "This statement uses an advanced relative clause 'the credentials of which' to highlight a key benefit of formal education in a formal and convincing way.",
              "pt": "Esta afirmação usa uma oração relativa avançada 'the credentials of which' para destacar um benefício chave da educação formal de maneira formal e convincente."
            }
          }
        ]
      }
    ],
    "challenge": {
      "id": "comm15-challenge",
      "title": {
        "en": "Formal Email: Advocating for Hobby Integration",
        "pt": "E-mail Formal: Advocando pela Integração de Hobbies"
      },
      "instruction": {
        "en": "Write a formal email (approx. 150-200 words) to your company's HR department or university administration, advocating for a new program that integrates hobbies into the workplace or academic life. Use at least three advanced relative clauses and three formal expressions. Explain the benefits of this integration.",
        "pt": "Escreva um e-mail formal (aprox. 150-200 palavras) para o departamento de RH de sua empresa ou para a administração da universidade, defendendo um novo programa que integre hobbies na vida profissional ou acadêmica. Use pelo menos três orações relativas avançadas e três expressões formais. Explique os benefícios dessa integração."
      },
      "phrases": [
        {
          "en": "I am writing to propose an initiative, the primary goal of which is to...",
          "pt": "Escrevo para propor uma iniciativa, cujo objetivo principal é..."
        },
        {
          "en": "This program, several aspects of which focus on employee well-being, could significantly enhance productivity.",
          "pt": "Este programa, vários aspectos dos quais focam no bem-estar dos funcionários, poderia aumentar significativamente a produtividade."
        },
        {
          "en": "I would appreciate your esteemed consideration of this proposal, through which we can foster a more dynamic environment.",
          "pt": "Agradeceria sua estimada consideração desta proposta, através da qual podemos promover um ambiente mais dinâmico."
        }
      ],
      "check": [
        {
          "id": "comm15-chal-check1",
          "prompt": {
            "en": "Which formal expression is best for concluding an email requesting action or consideration?",
            "pt": "Qual expressão formal é melhor para concluir um e-mail solicitando ação ou consideração?"
          },
          "options": [
            "I look forward to hearing from you at your earliest convenience.",
            "Hope to hear back soon!",
            "Talk to you later."
          ],
          "answer": "I look forward to hearing from you at your earliest convenience.",
          "explanation": {
            "en": "This is a highly formal and professional closing for an email seeking a response or action.",
            "pt": "Este é um encerramento altamente formal e profissional para um e-mail que busca uma resposta ou ação."
          }
        },
        {
          "id": "comm15-chal-check2",
          "prompt": {
            "en": "Which advanced relative clause effectively promotes a hobby-integration program?",
            "pt": "Qual oração relativa avançada promove efetivamente um programa de integração de hobbies?"
          },
          "options": [
            "The proposed 'Hobby Hub', many participants of which will collaborate on creative projects, promises enhanced team cohesion.",
            "The Hobby Hub is a good idea, which will make people happy.",
            "Everyone will like the new program for hobbies."
          ],
          "answer": "The proposed 'Hobby Hub', many participants of which will collaborate on creative projects, promises enhanced team cohesion.",
          "explanation": {
            "en": "This sentence uses 'many participants of which' to formally describe a specific benefit of the program.",
            "pt": "Esta frase usa 'many participants of which' para descrever formalmente um benefício específico do programa."
          }
        }
      ]
    },
    "lessonReview": {
      "summary": {
        "en": "In this unit, we explored various hobbies and their benefits. We mastered advanced relative clauses with prepositions and quantifiers, allowing us to express complex ideas formally. We also practiced using formal writing expressions to advocate for our ideas effectively.",
        "pt": "Nesta unidade, exploramos vários hobbies e seus benefícios. Dominamos orações relativas avançadas com preposições e quantificadores, permitindo-nos expressar ideias complexas formalmente. Também praticamos o uso de expressões de escrita formal para defender nossas ideias de forma eficaz."
      },
      "canDo": [
        {
          "en": "I can identify and use advanced relative clauses with prepositions and quantifiers in formal contexts.",
          "pt": "Consigo identificar e usar orações relativas avançadas com preposições e quantificadores em contextos formais."
        },
        {
          "en": "I can discuss hobbies and their contributions to personal and professional development with nuanced opinions.",
          "pt": "Consigo discutir hobbies e suas contribuições para o desenvolvimento pessoal e profissional com opiniões matizadas."
        },
        {
          "en": "I can write formal emails advocating for initiatives, using appropriate expressions and grammatical structures.",
          "pt": "Consigo escrever e-mails formais defendendo iniciativas, usando expressões e estruturas gramaticais apropriadas."
        }
      ],
      "next": {
        "en": "Next, we will delve into Unit 16: 'Environmental Issues,' focusing on phrasal verbs with 'out' and 'off,' and discussing global environmental challenges.",
        "pt": "Em seguida, mergulharemos na Unidade 16: 'Questões Ambientais', focando em phrasal verbs com 'out' e 'off', e discutindo desafios ambientais globais."
      }
    }
  }
},
{
  "code": "UPPER-INTERMEDIATE-U16",
  "number": 16,
  "title": "Business Economy – Discourse Markers",
  "titlePt": "Economia de Negócios – Marcadores Discursivos",
  "cefr": "B2",
  "objective": {
    "en": "To teach business economy vocabulary and discourse markers for academic and analytical writing (furthermore, consequently, arguably) in a contextualized manner.",
    "pt": "Ensinar vocabulário de economia de negócios e marcadores discursivos para escrita acadêmica e analítica (furthermore, consequently, arguably) de forma contextualizada."
  },
  "communicationGoal": {
    "en": "Students will be able to use debating techniques and business economy vocabulary to communicate in real-life situations.",
    "pt": "O aluno será capaz de usar 'debating' e o vocabulário de business economy para se comunicar em situações reais."
  },
  "prerequisites": {
    "en": "Grammar: Advanced relative clauses with prepositions and quantifiers. Vocabulary: Hobbies.",
    "pt": "Estrutura: Orações relativas avançadas com preposições e quantificadores. Vocabulário: Hobbies."
  },
  "newContent": {
    "en": "Grammar: Discourse markers for academic and analytical writing (furthermore, consequently, arguably). Vocabulary: Business Economy (10 lexical items). Expressions: Debating.",
    "pt": "Gramática: Marcadores discursivos para escrita acadêmica e analítica (furthermore, consequently, arguably). Vocabulário: Economia de Negócios (10 itens lexicais). Expressões: Debating."
  },
  "reviewContent": {
    "en": "Spiral review: Cleft sentences (it/what) for emphasis and focus (Unit 9). Vocabulary review: Global Issues (Unit 2).",
    "pt": "Revisão em espiral: Orações clivadas (it/what) para ênfase e foco (Unidade 9). Revisão de vocabulário: Questões Globais (Unidade 2)."
  },
  "discover": {
    "id": "UPPER-INTERMEDIATE-U16-DISCOVER",
    "warmUp": {
      "prompt": {
        "en": "Look at the images. What do they represent? What comes to mind when you hear 'business economy'?",
        "pt": "Observe as imagens. O que elas representam? O que vem à sua mente quando você ouve 'economia de negócios'?"
      },
      "phrases": [
        {
          "en": "I think it's about how money moves in the world.",
          "pt": "Acho que é sobre como o dinheiro se move no mundo."
        },
        {
          "en": "It probably involves companies, markets, and consumers.",
          "pt": "Provavelmente envolve empresas, mercados e consumidores."
        }
      ]
    },
    "context": {
      "situation": {
        "en": "You are attending an online forum discussing the future of the e-commerce sector in your country. Different experts are debating various challenges and opportunities.",
        "pt": "Você está participando de um fórum online discutindo o futuro do setor de e-commerce em seu país. Diferentes especialistas estão debatendo vários desafios e oportunidades."
      },
      "dialogue": [
        {
          "who": "Sophia",
          "en": "Good morning, everyone. Our topic today is 'E-commerce: Navigating the Next Decade'. I believe sustainability will be key.",
          "pt": "Bom dia a todos. Nosso tópico hoje é 'E-commerce: Navegando na Próxima Década'. Acredito que a sustentabilidade será fundamental."
        },
        {
          "who": "Liam",
          "en": "That's a valid point, Sophia, but consider this: consumer spending habits are heavily influenced by economic stability.",
          "pt": "Esse é um ponto válido, Sophia, mas considere isto: os hábitos de consumo são fortemente influenciados pela estabilidade econômica."
        },
        {
          "who": "Sophia",
          "en": "Furthermore, ethical sourcing directly impacts brand reputation, which is crucial for long-term growth.",
          "pt": "Além disso, o fornecimento ético impacta diretamente a reputação da marca, o que é crucial para o crescimento a longo prazo."
        },
        {
          "who": "Daniel",
          "en": "I'd like to challenge that assumption. While important, the immediate market trends often dictate investment priorities for startups.",
          "pt": "Gostaria de contestar essa suposição. Embora importante, as tendências imediatas do mercado frequentemente ditam as prioridades de investimento para startups."
        },
        {
          "who": "Liam",
          "en": "Consequently, companies often prioritize short-term revenue over potentially costly sustainable practices.",
          "pt": "Consequentemente, as empresas muitas vezes priorizam a receita de curto prazo em detrimento de práticas sustentáveis potencialmente caras."
        },
        {
          "who": "Sophia",
          "en": "Arguably, a strong supply chain strategy that includes sustainability measures could actually reduce long-term costs and increase consumer loyalty.",
          "pt": "Argumentavelmente, uma forte estratégia de cadeia de suprimentos que inclua medidas de sustentabilidade poderia, de fato, reduzir custos a longo prazo e aumentar a lealdade do consumidor."
        }
      ]
    },
    "vocabulary": [
      {
        "term": "investment",
        "pt": "investimento",
        "ipa": "/ɪnˈvɛstmənt/",
        "definition": "The act of allocating money or capital in the expectation of deriving a profit or gain.",
        "example": "His investment in the new tech startup proved to be very profitable.",
        "examplePt": "Seu investimento na nova startup de tecnologia se mostrou muito lucrativo."
      },
      {
        "term": "market",
        "pt": "mercado",
        "ipa": "/ˈmɑːrkɪt/",
        "definition": "A place or system where goods and services are bought and sold.",
        "example": "The real estate market has seen significant fluctuations recently.",
        "examplePt": "O mercado imobiliário tem visto flutuações significativas recentemente."
      },
      {
        "term": "revenue",
        "pt": "receita",
        "ipa": "/ˈrɛvənuː/",
        "definition": "The income generated from normal business operations, usually from the sale of goods or services.",
        "example": "The company's quarterly revenue exceeded all expectations.",
        "examplePt": "A receita trimestral da empresa superou todas as expectativas."
      },
      {
        "term": "startup",
        "pt": "startup",
        "ipa": "/ˈstɑːrtʌp/",
        "definition": "A newly established business, especially one that is small and has not yet made a profit.",
        "example": "Many startups struggle to secure initial funding in a competitive environment.",
        "examplePt": "Muitas startups lutam para conseguir financiamento inicial em um ambiente competitivo."
      },
      {
        "term": "competition",
        "pt": "concorrência",
        "ipa": "/ˌkɒmpəˈtɪʃən/",
        "definition": "The rivalry among sellers trying to achieve such objectives as increasing profits, market share, or sales volume.",
        "example": "The intense competition in the smartphone market drives innovation.",
        "examplePt": "A intensa concorrência no mercado de smartphones impulsiona a inovação."
      },
      {
        "term": "growth",
        "pt": "crescimento",
        "ipa": "/ɡroʊθ/",
        "definition": "The process of increasing in size, number, maturity, or importance, often referring to economic expansion.",
        "example": "Economic growth is essential for creating new job opportunities.",
        "examplePt": "O crescimento econômico é essencial para a criação de novas oportunidades de emprego."
      },
      {
        "term": "strategy",
        "pt": "estratégia",
        "ipa": "/ˈstrætədʒi/",
        "definition": "A plan of action designed to achieve a long-term or overall aim.",
        "example": "Their marketing strategy focused on reaching younger consumers through social media.",
        "examplePt": "Sua estratégia de marketing focou em alcançar consumidores mais jovens através das redes sociais."
      },
      {
        "term": "supply chain",
        "pt": "cadeia de suprimentos",
        "ipa": "/səˈplaɪ tʃeɪn/",
        "definition": "The sequence of processes involved in the production and distribution of a commodity.",
        "example": "Disruptions in the global supply chain affected many industries last year.",
        "examplePt": "Interrupções na cadeia de suprimentos global afetaram muitas indústrias no ano passado."
      },
      {
        "term": "consumer",
        "pt": "consumidor",
        "ipa": "/kənˈsuːmər/",
        "definition": "A person who purchases goods and services for personal use.",
        "example": "Modern consumers are increasingly concerned about environmental impact.",
        "examplePt": "Os consumidores modernos estão cada vez mais preocupados com o impacto ambiental."
      },
      {
        "term": "trend",
        "pt": "tendência",
        "ipa": "/trɛnd/",
        "definition": "A general direction in which something is developing or changing.",
        "example": "The latest trend in fashion emphasizes sustainable materials.",
        "examplePt": "A última tendência na moda enfatiza materiais sustentáveis."
      }
    ],
    "expressions": [
      {
        "en": "Let me play devil's advocate for a moment.",
        "pt": "Deixe-me bancar o advogado do diabo por um momento."
      },
      {
        "en": "That's a valid point, but consider this...",
        "pt": "Esse é um ponto válido, mas considere isto..."
      },
      {
        "en": "I'd like to challenge that assumption.",
        "pt": "Gostaria de contestar essa suposição."
      }
    ],
    "grammar": [
      {
        "title": {
          "en": "Discourse Markers for Academic and Analytical Writing",
          "pt": "Marcadores Discursivos para Escrita Acadêmica e Analítica"
        },
        "examples": [
          {
            "en": "Furthermore, the company's Q3 report indicates a strong market position.",
            "pt": "Além disso, o relatório do terceiro trimestre da empresa indica uma forte posição de mercado."
          },
          {
            "en": "The new policy led to increased unemployment; consequently, public opinion turned against the government.",
            "pt": "A nova política levou ao aumento do desemprego; consequentemente, a opinião pública se voltou contra o governo."
          },
          {
            "en": "Arguably, this is the most innovative solution presented so far, despite its higher initial cost.",
            "pt": "Argumentavelmente, esta é a solução mais inovadora apresentada até agora, apesar de seu custo inicial mais alto."
          }
        ],
        "rule": {
          "en": "Discourse markers like 'furthermore', 'consequently', and 'arguably' are used in academic and analytical writing to connect ideas, show cause and effect, or introduce a point that is open to debate. They help create a logical flow and strengthen arguments.",
          "pt": "Marcadores discursivos como 'furthermore', 'consequently' e 'arguably' são usados na escrita acadêmica e analítica para conectar ideias, mostrar causa e efeito, ou introduzir um ponto que está aberto a debate. Eles ajudam a criar um fluxo lógico e a fortalecer argumentos."
        },
        "mistakes": [
          {
            "en": "Using 'furthermore' to introduce a contrasting idea instead of additional supporting information.",
            "pt": "Usar 'furthermore' para introduzir uma ideia contrastante em vez de informações adicionais de apoio."
          },
          {
            "en": "Placing 'consequently' without a clear cause-and-effect relationship between sentences.",
            "pt": "Colocar 'consequently' sem uma relação clara de causa e efeito entre as frases."
          }
        ]
      }
    ],
    "controlledPractice": [
      {
        "id": "cp-16-1",
        "prompt": {
          "en": "Choose the best discourse marker: The cost of raw materials increased significantly. ______, product prices had to be adjusted.",
          "pt": "Escolha o melhor marcador discursivo: O custo das matérias-primas aumentou significativamente. ______, os preços dos produtos tiveram que ser ajustados."
        },
        "options": [
          "Furthermore",
          "Consequently",
          "Arguably"
        ],
        "answer": "Consequently",
        "explanation": {
          "en": "'Consequently' is used to show a result or consequence of a previous statement.",
          "pt": "'Consequently' é usado para mostrar um resultado ou consequência de uma afirmação anterior."
        }
      },
      {
        "id": "cp-16-2",
        "prompt": {
          "en": "Which word correctly completes the sentence? The new software improved efficiency. ______, it reduced operational costs by 15%.",
          "pt": "Qual palavra completa corretamente a frase? O novo software melhorou a eficiência. ______, reduziu os custos operacionais em 15%."
        },
        "options": [
          "Arguably",
          "Consequently",
          "Furthermore"
        ],
        "answer": "Furthermore",
        "explanation": {
          "en": "'Furthermore' is used to add more information or another point to an argument.",
          "pt": "'Furthermore' é usado para adicionar mais informações ou outro ponto a um argumento."
        }
      },
      {
        "id": "cp-16-3",
        "prompt": {
          "en": "Select the most appropriate discourse marker: Implementing strict environmental regulations is crucial. ______, it might hinder economic growth in the short term.",
          "pt": "Selecione o marcador discursivo mais apropriado: A implementação de regulamentações ambientais rigorosas é crucial. ______, pode dificultar o crescimento econômico a curto prazo."
        },
        "options": [
          "Furthermore",
          "Consequently",
          "Arguably"
        ],
        "answer": "Arguably",
        "explanation": {
          "en": "'Arguably' introduces a point that can be supported by argument, but also implies that other perspectives exist.",
          "pt": "'Arguably' introduz um ponto que pode ser apoiado por argumentos, mas também implica que outras perspectivas existem."
        }
      },
      {
        "id": "cp-16-4",
        "prompt": {
          "en": "Which of these sentences uses 'arguably' correctly?",
          "pt": "Qual dessas frases usa 'arguably' corretamente?"
        },
        "options": [
          "Arguably, the sun rises every morning.",
          "It rained; arguably, the ground got wet.",
          "Arguably, renewable energy is the most sustainable option for the future."
        ],
        "answer": "Arguably, renewable energy is the most sustainable option for the future.",
        "explanation": {
          "en": "'Arguably' implies a point that is debatable or can be argued for, not a universally accepted fact or direct consequence.",
          "pt": "'Arguably' implica um ponto que é debatível ou pode ser defendido, não um fato universalmente aceito ou uma consequência direta."
        }
      }
    ],
    "input": {
      "kind": "listening",
      "title": {
        "en": "The Impact of Gig Economy on Traditional Employment",
        "pt": "O Impacto da Economia Gig no Emprego Tradicional"
      },
      "lines": [
        {
          "en": "Speaker 1: Good evening. Today, we're discussing the gig economy. Many argue it offers flexibility.",
          "pt": "Orador 1: Boa noite. Hoje, estamos discutindo a economia gig. Muitos argumentam que ela oferece flexibilidade."
        },
        {
          "en": "Speaker 2: That's a valid point, but consider this: the lack of benefits is a major concern.",
          "pt": "Orador 2: Esse é um ponto válido, mas considere isto: a falta de benefícios é uma grande preocupação."
        },
        {
          "en": "Speaker 1: Furthermore, it allows businesses to scale operations efficiently without long-term commitments.",
          "pt": "Orador 1: Além disso, permite que as empresas dimensionem as operações de forma eficiente sem compromissos de longo prazo."
        },
        {
          "en": "Speaker 2: Consequently, traditional employment models are facing unprecedented competition. This affects job security.",
          "pt": "Orador 2: Consequentemente, os modelos de emprego tradicionais estão enfrentando uma concorrência sem precedentes. Isso afeta a segurança no emprego."
        },
        {
          "en": "Speaker 1: Arguably, it's a necessary evolution in our dynamic market, adapting to new consumer trends.",
          "pt": "Orador 1: Argumentavelmente, é uma evolução necessária em nosso mercado dinâmico, adaptando-se às novas tendências de consumo."
        }
      ],
      "questions": [
        {
          "id": "input-q-1",
          "prompt": {
            "en": "What is the main topic of the discussion?",
            "pt": "Qual é o tema principal da discussão?"
          },
          "options": [
            "The future of e-commerce",
            "The impact of the gig economy",
            "Traditional job benefits"
          ],
          "answer": "The impact of the gig economy",
          "explanation": {
            "en": "The speakers explicitly state they are discussing 'the gig economy'.",
            "pt": "Os oradores afirmam explicitamente que estão discutindo 'a economia gig'."
          }
        },
        {
          "id": "input-q-2",
          "prompt": {
            "en": "What is one potential downside of the gig economy mentioned by Speaker 2?",
            "pt": "Qual é uma desvantagem potencial da economia gig mencionada pelo Orador 2?"
          },
          "options": [
            "Increased flexibility for workers",
            "Efficient scaling for businesses",
            "Lack of benefits for workers"
          ],
          "answer": "Lack of benefits for workers",
          "explanation": {
            "en": "Speaker 2 states, 'the lack of benefits is a major concern' regarding the gig economy.",
            "pt": "O Orador 2 afirma: 'a falta de benefícios é uma grande preocupação' em relação à economia gig."
          }
        },
        {
          "id": "input-q-3",
          "prompt": {
            "en": "How does Speaker 1 view the gig economy in relation to the market?",
            "pt": "Como o Orador 1 vê a economia gig em relação ao mercado?"
          },
          "options": [
            "As a threat to traditional markets",
            "As a necessary market evolution",
            "As a temporary market trend"
          ],
          "answer": "As a necessary market evolution",
          "explanation": {
            "en": "Speaker 1 says, 'Arguably, it's a necessary evolution in our dynamic market'.",
            "pt": "O Orador 1 diz: 'Argumentavelmente, é uma evolução necessária em nosso mercado dinâmico'."
          }
        }
      ]
    },
    "quickCheck": [
      {
        "id": "qc-16-1",
        "prompt": {
          "en": "Which word means 'the income generated from normal business operations'?",
          "pt": "Qual palavra significa 'a receita gerada pelas operações comerciais normais'?"
        },
        "options": [
          "Investment",
          "Revenue",
          "Growth"
        ],
        "answer": "Revenue",
        "explanation": {
          "en": "'Revenue' specifically refers to the income a business generates from its primary activities.",
          "pt": "'Revenue' refere-se especificamente à receita que uma empresa gera de suas atividades principais."
        }
      },
      {
        "id": "qc-16-2",
        "prompt": {
          "en": "What is the function of the discourse marker 'furthermore'?",
          "pt": "Qual é a função do marcador discursivo 'furthermore'?"
        },
        "options": [
          "To show a cause-and-effect relationship",
          "To introduce an additional point or argument",
          "To present a contrasting idea"
        ],
        "answer": "To introduce an additional point or argument",
        "explanation": {
          "en": "'Furthermore' is used to add more information or another supporting point.",
          "pt": "'Furthermore' é usado para adicionar mais informações ou outro ponto de apoio."
        }
      },
      {
        "id": "qc-16-3",
        "prompt": {
          "en": "If you want to introduce a point that is debatable or arguable, which expression would you use?",
          "pt": "Se você quer introduzir um ponto que é debatível ou argumentável, qual expressão você usaria?"
        },
        "options": [
          "Consequently...",
          "Arguably...",
          "Furthermore..."
        ],
        "answer": "Arguably...",
        "explanation": {
          "en": "'Arguably' signals that the following statement is open to debate or a strong opinion rather than a universally accepted fact.",
          "pt": "'Arguably' sinaliza que a declaração seguinte está aberta a debate ou é uma forte opinião, em vez de um fato universalmente aceito."
        }
      },
      {
        "id": "qc-16-4",
        "prompt": {
          "en": "What is 'competition' in a business context?",
          "pt": "O que é 'concorrência' em um contexto de negócios?"
        },
        "options": [
          "A business collaboration",
          "Rivalry among sellers",
          "A type of investment"
        ],
        "answer": "Rivalry among sellers",
        "explanation": {
          "en": "'Competition' refers to the struggle between businesses to gain market share or customers.",
          "pt": "'Competition' refere-se à luta entre empresas para ganhar participação de mercado ou clientes."
        }
      }
    ]
  },
  "communicate": {
    "id": "UPPER-INTERMEDIATE-U16-COMMUNICATE",
    "review": [
      {
        "en": "Quick review of Business Economy vocabulary: What's the difference between 'revenue' and 'investment'?",
        "pt": "Revisão rápida do vocabulário de Economia de Negócios: Qual a diferença entre 'receita' e 'investimento'?"
      },
      {
        "en": "Recap of discourse markers: When do we use 'consequently' versus 'furthermore'?",
        "pt": "Resumo dos marcadores discursivos: Quando usamos 'consequently' versus 'furthermore'?"
      },
      {
        "en": "Practicing debating expressions: How would you challenge an assumption politely?",
        "pt": "Praticando expressões de debate: Como você contestaria uma suposição educadamente?"
      }
    ],
    "activities": [
      {
        "id": "act-16-1-discuss",
        "title": {
          "en": "Economic Debate: 'Is AI a threat or an opportunity for the job market?'",
          "pt": "Debate Econômico: 'A IA é uma ameaça ou uma oportunidade para o mercado de trabalho?'"
        },
        "instruction": {
          "en": "Form small groups. One half will argue that AI is a threat to the job market, the other that it's an opportunity. Use at least two new vocabulary terms and two discourse markers.",
          "pt": "Forme pequenos grupos. Uma metade argumentará que a IA é uma ameaça para o mercado de trabalho, a outra que é uma oportunidade. Use pelo menos dois novos termos de vocabulário e dois marcadores discursivos."
        },
        "phrases": [
          {
            "en": "Furthermore, AI can automate repetitive tasks, leading to significant job displacement.",
            "pt": "Além disso, a IA pode automatizar tarefas repetitivas, levando a um deslocamento significativo de empregos."
          },
          {
            "en": "Arguably, the growth of AI will create new industries and, consequently, new job roles.",
            "pt": "Argumentavelmente, o crescimento da IA criará novas indústrias e, consequentemente, novas funções de trabalho."
          },
          {
            "en": "Let me play devil's advocate for a moment. What about the immediate impact on workers?",
            "pt": "Deixe-me bancar o advogado do diabo por um momento. E quanto ao impacto imediato nos trabalhadores?"
          }
        ],
        "check": [
          {
            "id": "act-16-1-check-1",
            "prompt": {
              "en": "Which of these is NOT a good way to introduce an additional point to strengthen your argument?",
              "pt": "Qual destas NÃO é uma boa maneira de introduzir um ponto adicional para fortalecer seu argumento?"
            },
            "options": [
              "Furthermore...",
              "In addition...",
              "However..."
            ],
            "answer": "However...",
            "explanation": {
              "en": "'However' is used to introduce a contrasting idea, not an additional supporting point.",
              "pt": "'However' é usado para introduzir uma ideia contrastante, não um ponto de apoio adicional."
            }
          },
          {
            "id": "act-16-1-check-2",
            "prompt": {
              "en": "When debating, why might you use the phrase 'Let me play devil's advocate for a moment'?",
              "pt": "Ao debater, por que você usaria a frase 'Deixe-me bancar o advogado do diabo por um momento'?"
            },
            "options": [
              "To agree with the previous speaker",
              "To politely introduce a counter-argument or different perspective",
              "To indicate you are finished speaking"
            ],
            "answer": "To politely introduce a counter-argument or different perspective",
            "explanation": {
              "en": "This expression is used to explore an opposing viewpoint, even if it's not your own, for the sake of discussion.",
              "pt": "Essa expressão é usada para explorar um ponto de vista oposto, mesmo que não seja o seu, em prol da discussão."
            }
          }
        ]
      },
      {
        "id": "act-16-2-analyze",
        "title": {
          "en": "Analyzing a Business Case Study",
          "pt": "Analisando um Estudo de Caso de Negócios"
        },
        "instruction": {
          "en": "Read a short case study about a startup's challenges in the current market. Identify key problems and propose solutions, using at least three vocabulary terms and one discourse marker to explain your reasoning.",
          "pt": "Leia um breve estudo de caso sobre os desafios de uma startup no mercado atual. Identifique os principais problemas e proponha soluções, usando pelo menos três termos de vocabulário e um marcador discursivo para explicar seu raciocínio."
        },
        "phrases": [
          {
            "en": "The startup faces intense competition and needs a clear growth strategy.",
            "pt": "A startup enfrenta concorrência intensa e precisa de uma estratégia de crescimento clara."
          },
          {
            "en": "Consequently, their revenue has been lower than projected.",
            "pt": "Consequentemente, sua receita tem sido menor do que o projetado."
          },
          {
            "en": "Arguably, a new investment round could help them expand their market reach.",
            "pt": "Argumentavelmente, uma nova rodada de investimento poderia ajudá-los a expandir seu alcance de mercado."
          }
        ],
        "check": [
          {
            "id": "act-16-2-check-1",
            "prompt": {
              "en": "What is the primary purpose of a 'strategy' in business?",
              "pt": "Qual é o objetivo principal de uma 'estratégia' nos negócios?"
            },
            "options": [
              "To manage daily operations",
              "To achieve long-term goals and aims",
              "To track immediate sales figures"
            ],
            "answer": "To achieve long-term goals and aims",
            "explanation": {
              "en": "A strategy is a carefully planned approach to achieve an overarching objective, usually long-term.",
              "pt": "Uma estratégia é uma abordagem cuidadosamente planejada para atingir um objetivo abrangente, geralmente de longo prazo."
            }
          },
          {
            "id": "act-16-2-check-2",
            "prompt": {
              "en": "If a company wants to introduce a new product to increase its market share, what aspect of business economy are they most focused on?",
              "pt": "Se uma empresa quer introduzir um novo produto para aumentar sua participação de mercado, em qual aspecto da economia de negócios ela está mais focada?"
            },
            "options": [
              "Investment decisions",
              "Consumer trends",
              "Competition"
            ],
            "answer": "Competition",
            "explanation": {
              "en": "Increasing market share implies a focus on outperforming competitors or capturing a larger portion of the market from them.",
              "pt": "Aumentar a participação de mercado implica um foco em superar concorrentes ou capturar uma porção maior do mercado deles."
            }
          }
        ]
      },
      {
        "id": "act-16-3-roleplay",
        "title": {
          "en": "Role-play: Pitching a Sustainable Business Idea",
          "pt": "Role-play: Apresentando uma Ideia de Negócio Sustentável"
        },
        "instruction": {
          "en": "Work in pairs. One person pitches a new sustainable business idea (e.g., eco-friendly packaging startup). The other acts as a potential investor, using debating expressions to ask challenging questions. Swap roles.",
          "pt": "Trabalhe em pares. Uma pessoa apresenta uma nova ideia de negócio sustentável (por exemplo, startup de embalagens ecológicas). A outra atua como um potencial investidor, usando expressões de debate para fazer perguntas desafiadoras. Troquem de papéis."
        },
        "phrases": [
          {
            "en": "That's a valid point, but consider this: what about the initial investment required?",
            "pt": "Esse é um ponto válido, mas considere isto: e quanto ao investimento inicial necessário?"
          },
          {
            "en": "I'd like to challenge that assumption. Do you truly believe consumers will pay a premium for this?",
            "pt": "Gostaria de contestar essa suposição. Você realmente acredita que os consumidores pagarão um preço mais alto por isso?"
          },
          {
            "en": "Furthermore, our supply chain ensures minimal environmental impact, which attracts a growing consumer base.",
            "pt": "Além disso, nossa cadeia de suprimentos garante um impacto ambiental mínimo, o que atrai uma base crescente de consumidores."
          }
        ],
        "check": [
          {
            "id": "act-16-3-check-1",
            "prompt": {
              "en": "When an investor says, 'I'd like to challenge that assumption,' what are they most likely doing?",
              "pt": "Quando um investidor diz, 'Gostaria de contestar essa suposição', o que ele provavelmente está fazendo?"
            },
            "options": [
              "Expressing agreement",
              "Requesting further explanation or evidence for a belief",
              "Ending the conversation"
            ],
            "answer": "Requesting further explanation or evidence for a belief",
            "explanation": {
              "en": "This phrase signals that the speaker questions the validity or basis of a previous statement and expects justification.",
              "pt": "Esta frase sinaliza que o orador questiona a validade ou a base de uma afirmação anterior e espera uma justificativa."
            }
          },
          {
            "id": "act-16-3-check-2",
            "prompt": {
              "en": "What is a 'startup' primarily characterized by?",
              "pt": "Uma 'startup' é principalmente caracterizada por quê?"
            },
            "options": [
              "Being a large, established corporation",
              "Being a newly established business, often with high growth potential but not yet profitable",
              "Operating only in the technology sector"
            ],
            "answer": "Being a newly established business, often with high growth potential but not yet profitable",
            "explanation": {
              "en": "Startups are typically new ventures, usually small, and aiming for rapid growth, often without immediate profits.",
              "pt": "Startups são tipicamente novos empreendimentos, geralmente pequenos, e visando um crescimento rápido, muitas vezes sem lucros imediatos."
            }
          }
        ]
      }
    ],
    "challenge": {
      "id": "comm-chall-16-1",
      "title": {
        "en": "Panel Discussion: 'Global Supply Chain Resilience'",
        "pt": "Painel de Discussão: 'Resiliência da Cadeia de Suprimentos Global'"
      },
      "instruction": {
        "en": "Prepare for a mock panel discussion. You are an expert (e.g., an economist, a logistics manager, an environmental advocate). Argue your position on how global supply chains can become more resilient, considering recent global events. Use at least five vocabulary terms, three discourse markers, and two debating expressions.",
        "pt": "Prepare-se para um painel de discussão simulado. Você é um especialista (por exemplo, um economista, um gerente de logística, um defensor do meio ambiente). Argumente sua posição sobre como as cadeias de suprimentos globais podem se tornar mais resilientes, considerando eventos globais recentes. Use pelo menos cinco termos de vocabulário, três marcadores discursivos e duas expressões de debate."
      },
      "phrases": [
        {
          "en": "Arguably, diversification of suppliers is key; furthermore, localizing production can significantly reduce risk.",
          "pt": "Argumentavelmente, a diversificação de fornecedores é fundamental; além disso, a localização da produção pode reduzir significativamente o risco."
        },
        {
          "en": "Consequently, an unstable political climate can heavily impact the supply chain, affecting overall market stability.",
          "pt": "Consequentemente, um clima político instável pode impactar fortemente a cadeia de suprimentos, afetando a estabilidade geral do mercado."
        },
        {
          "en": "That's a valid point, but consider this: consumer demand for quickly delivered goods often outweighs concerns about resilience.",
          "pt": "Esse é um ponto válido, mas considere isto: a demanda do consumidor por bens entregues rapidamente muitas vezes supera as preocupações com a resiliência."
        }
      ],
      "check": [
        {
          "id": "comm-chall-16-1-check-1",
          "prompt": {
            "en": "Which of these is most likely to improve a company's 'supply chain' resilience?",
            "pt": "Qual destes é mais provável que melhore a resiliência da 'cadeia de suprimentos' de uma empresa?"
          },
          "options": [
            "Relying on a single, distant supplier",
            "Implementing a just-in-time inventory system",
            "Diversifying suppliers and investing in local production"
          ],
          "answer": "Diversifying suppliers and investing in local production",
          "explanation": {
            "en": "Diversification and localization reduce dependency and risk, making the supply chain more robust against disruptions.",
            "pt": "A diversificação e a localização reduzem a dependência e o risco, tornando a cadeia de suprimentos mais robusta contra interrupções."
          }
        },
        {
          "id": "comm-chall-16-1-check-2",
          "prompt": {
            "en": "If a panelist states, 'Furthermore, strict environmental regulations could drive up production costs,' what is the purpose of 'furthermore' here?",
            "pt": "Se um participante do painel afirma, 'Além disso, regulamentações ambientais rigorosas poderiam aumentar os custos de produção', qual é o propósito de 'furthermore' aqui?"
          },
          "options": [
            "To contradict a previous point",
            "To introduce a cause and effect",
            "To add an additional supporting point to an argument"
          ],
          "answer": "To add an additional supporting point to an argument",
          "explanation": {
            "en": "'Furthermore' adds another piece of information that supports the speaker's line of reasoning.",
            "pt": "'Furthermore' adiciona outra informação que apoia a linha de raciocínio do orador."
          }
        }
      ]
    },
    "lessonReview": {
      "summary": {
        "en": "In this unit, we explored key vocabulary related to business economy, practiced using essential debating expressions, and mastered discourse markers like 'furthermore', 'consequently', and 'arguably' for academic and analytical communication.",
        "pt": "Nesta unidade, exploramos o vocabulário-chave relacionado à economia de negócios, praticamos o uso de expressões essenciais de debate e dominamos marcadores discursivos como 'furthermore', 'consequently' e 'arguably' para comunicação acadêmica e analítica."
      },
      "canDo": [
        {
          "en": "Discuss business economy topics using specialized vocabulary.",
          "pt": "Discutir tópicos de economia de negócios usando vocabulário especializado."
        },
        {
          "en": "Engage in debates and challenge assumptions politely.",
          "pt": "Participar de debates e contestar suposições educadamente."
        },
        {
          "en": "Use 'furthermore', 'consequently', and 'arguably' to structure arguments logically.",
          "pt": "Usar 'furthermore', 'consequently' e 'arguably' para estruturar argumentos logicamente."
        }
      ],
      "next": {
        "en": "In the next unit, we will delve into the topic of technology and innovation, focusing on conditional sentences.",
        "pt": "Na próxima unidade, aprofundaremos o tema de tecnologia e inovação, focando nas orações condicionais."
      }
    }
  }
},
{
  "code": "UPPER-INTERMEDIATE-U17",
  "number": 17,
  "title": "Global Issues and Advanced Phrasal Verbs for Negotiation",
  "titlePt": "Questões Globais e Phrasal Verbs Avançados para Negociação",
  "cefr": "B2",
  "objective": {
    "en": "To teach global issues and advanced phrasal verbs for professional negotiation (hold off, iron out, follow through) in a contextualized manner.",
    "pt": "Ensinar questões globais e phrasal verbs avançados para negociação profissional (hold off, iron out, follow through) de forma contextualizada."
  },
  "communicationGoal": {
    "en": "Students will be able to use 'summarizing formally' and global issues vocabulary to communicate in real-life situations.",
    "pt": "O aluno será capaz de usar 'summarizing formally' e o vocabulário de questões globais para se comunicar em situações reais."
  },
  "prerequisites": {
    "en": "Discourse markers for academic and analytical writing (furthermore, consequently, arguably). Vocabulary: Business Economy.",
    "pt": "Estrutura: Discourse markers for academic and analytical writing (furthermore, consequently, arguably). Vocabulário: Business Economy."
  },
  "newContent": {
    "en": "Grammar: Advanced phrasal verbs for professional negotiation (hold off, iron out, follow through). | Vocabulary: Global Issues (10 lexical items) | Expressions: Summarizing Formally",
    "pt": "Grammar: Advanced phrasal verbs for professional negotiation (hold off, iron out, follow through). | Vocabulary: Global Issues (10 itens lexicais) | Expressions: Summarizing Formally"
  },
  "reviewContent": {
    "en": "Spiral review: Discourse markers for contrast and concession (nevertheless, notwithstanding, albeit) (Unit 10). Vocabulary review: Psychology Mindset (Unit 3).",
    "pt": "Revisão em espiral: Discourse markers for contrast and concession (nevertheless, notwithstanding, albeit) (Unit 10). Revisão de vocabulário: Psychology Mindset (Unit 3)."
  },
  "discover": {
    "id": "UPPER-INTERMEDIATE-U17-DISCOVER",
    "warmUp": {
      "prompt": {
        "en": "Look at the images. What global issues do they represent? How do these issues affect your country or community?",
        "pt": "Observe as imagens. Que questões globais elas representam? Como essas questões afetam seu país ou comunidade?"
      },
      "phrases": [
        {
          "en": "These images clearly depict...",
          "pt": "Estas imagens retratam claramente..."
        },
        {
          "en": "I believe this issue is particularly relevant because...",
          "pt": "Acredito que esta questão é particularmente relevante porque..."
        }
      ]
    },
    "context": {
      "situation": {
        "en": "Imagine you are attending a United Nations summit on sustainable development. The first session involves presenting an overview of current global challenges. You need to summarize key points concisely and formally.",
        "pt": "Imagine que você está participando de uma cúpula das Nações Unidas sobre desenvolvimento sustentável. A primeira sessão envolve a apresentação de uma visão geral dos desafios globais atuais. Você precisa resumir os pontos principais de forma concisa e formal."
      },
      "dialogue": [
        {
          "who": "Dr. Chen",
          "en": "Good morning, esteemed delegates. Today, we address pressing global issues affecting sustainable development. Our first task is to iron out a common understanding of these challenges.",
          "pt": "Bom dia, estimados delegados. Hoje, abordamos questões globais urgentes que afetam o desenvolvimento sustentável. Nossa primeira tarefa é resolver uma compreensão comum desses desafios."
        },
        {
          "who": "Ms. Rossi",
          "en": "Indeed, Dr. Chen. I believe the rising inequality, coupled with rapid urbanization, presents significant hurdles. We must follow through on our commitments to address these disparities.",
          "pt": "De fato, Dr. Chen. Acredito que a crescente desigualdade, juntamente com a rápida urbanização, apresenta obstáculos significativos. Devemos cumprir nossos compromissos para abordar essas disparidades."
        },
        {
          "who": "Mr. Kim",
          "en": "Absolutely. Furthermore, the global migration crisis demands our immediate attention. While we've discussed several proposals, I suggest we hold off on a final decision until we've heard from all regional representatives.",
          "pt": "Com certeza. Além disso, a crise global de migração exige nossa atenção imediata. Embora tenhamos discutido várias propostas, sugiro que adiemos uma decisão final até ouvirmos todos os representantes regionais."
        },
        {
          "who": "Dr. Chen",
          "en": "A valid point, Mr. Kim. Our goal is to ensure comprehensive policy development. We need to foster innovation in our approach to human rights and overall development.",
          "pt": "Um ponto válido, Sr. Kim. Nosso objetivo é garantir o desenvolvimento abrangente de políticas. Precisamos promover a inovação em nossa abordagem aos direitos humanos e ao desenvolvimento geral."
        },
        {
          "who": "Ms. Rossi",
          "en": "In essence, the key takeaway is that globalization has brought both opportunities and challenges, requiring significant reform and increased awareness.",
          "pt": "Em essência, a principal conclusão é que a globalização trouxe tanto oportunidades quanto desafios, exigindo reformas significativas e maior conscientização."
        },
        {
          "who": "Mr. Kim",
          "en": "To conclude, addressing these issues effectively will require a united front and a strong commitment to international cooperation.",
          "pt": "Para concluir, abordar essas questões de forma eficaz exigirá uma frente unida e um forte compromisso com a cooperação internacional."
        }
      ]
    },
    "vocabulary": [
      {
        "term": "inequality",
        "pt": "desigualdade",
        "ipa": "/ˌɪnɪˈkwɒlɪti/",
        "definition": "Difference in status, wealth, or opportunities between people or groups.",
        "example": "Economic inequality has worsened in many countries over the past decades.",
        "examplePt": "A desigualdade econômica piorou em muitos países nas últimas décadas."
      },
      {
        "term": "migration",
        "pt": "migração",
        "ipa": "/maɪˈɡreɪʃən/",
        "definition": "The movement of people from one place to another with the intention of settling permanently or temporarily in a new location.",
        "example": "Global migration patterns are often influenced by conflict and economic opportunity.",
        "examplePt": "Os padrões de migração global são frequentemente influenciados por conflitos e oportunidades econômicas."
      },
      {
        "term": "innovation",
        "pt": "inovação",
        "ipa": "/ˌɪnəˈveɪʃən/",
        "definition": "The introduction of new ideas, methods, or products.",
        "example": "Technological innovation is crucial for solving many environmental problems.",
        "examplePt": "A inovação tecnológica é crucial para resolver muitos problemas ambientais."
      },
      {
        "term": "policy",
        "pt": "política",
        "ipa": "/ˈpɒlɪsi/",
        "definition": "A course or principle of action adopted or proposed by a government, party, business, or individual.",
        "example": "New government policy aims to reduce carbon emissions by 50%.",
        "examplePt": "A nova política governamental visa reduzir as emissões de carbono em 50%."
      },
      {
        "term": "globalization",
        "pt": "globalização",
        "ipa": "/ˌɡloʊbəlaɪˈzeɪʃən/",
        "definition": "The process by which businesses or other organizations develop international influence or start operating on an international scale.",
        "example": "Globalization has led to interconnected economies but also increased competition.",
        "examplePt": "A globalização levou a economias interconectadas, mas também aumentou a concorrência."
      },
      {
        "term": "human rights",
        "pt": "direitos humanos",
        "ipa": "/ˌhjuːmən ˈraɪts/",
        "definition": "Rights inherent to all human beings, regardless of race, sex, nationality, ethnicity, language, religion, or any other status.",
        "example": "Advocacy groups work tirelessly to protect human rights worldwide.",
        "examplePt": "Grupos de defesa trabalham incansavelmente para proteger os direitos humanos em todo o mundo."
      },
      {
        "term": "development",
        "pt": "desenvolvimento",
        "ipa": "/dɪˈveləpmənt/",
        "definition": "The process of developing or being developed; growth or progress.",
        "example": "Sustainable development aims to meet the needs of the present without compromising the future.",
        "examplePt": "O desenvolvimento sustentável visa atender às necessidades do presente sem comprometer o futuro."
      },
      {
        "term": "crisis",
        "pt": "crise",
        "ipa": "/ˈkraɪsɪs/",
        "definition": "A time of intense difficulty, trouble, or danger.",
        "example": "The global financial crisis had far-reaching effects on many nations.",
        "examplePt": "A crise financeira global teve efeitos de longo alcance em muitas nações."
      },
      {
        "term": "reform",
        "pt": "reforma",
        "ipa": "/rɪˈfɔːrm/",
        "definition": "The improvement or amendment of what is wrong, corrupt, or unsatisfactory.",
        "example": "Calls for significant political reform are growing in many countries.",
        "examplePt": "Os apelos por uma reforma política significativa estão crescendo em muitos países."
      },
      {
        "term": "awareness",
        "pt": "conscientização",
        "ipa": "/əˈwɛərnəs/",
        "definition": "Knowledge or perception of a situation or fact.",
        "example": "Public awareness of climate change has increased significantly.",
        "examplePt": "A conscientização pública sobre as mudanças climáticas aumentou significativamente."
      }
    ],
    "expressions": [
      {
        "en": "In essence, the key takeaway is...",
        "pt": "Em essência, a principal conclusão é..."
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
          "en": "Advanced Phrasal Verbs for Professional Negotiation",
          "pt": "Phrasal Verbs Avançados para Negociação Profissional"
        },
        "examples": [
          {
            "en": "Let's iron out the details before signing the contract.",
            "pt": "Vamos resolver os detalhes antes de assinar o contrato."
          },
          {
            "en": "It's crucial to follow through on our commitments to the stakeholders.",
            "pt": "É crucial cumprir nossos compromissos com as partes interessadas."
          },
          {
            "en": "I recommend we hold off on making a final decision until we have more data.",
            "pt": "Recomendo que adiemos a tomada de uma decisão final até termos mais dados."
          }
        ],
        "rule": {
          "en": "These phrasal verbs are commonly used in professional and formal contexts, especially during negotiations, discussions, or planning. 'Iron out' means to resolve problems or disagreements. 'Follow through' means to complete an action or promise. 'Hold off' means to delay or postpone something.",
          "pt": "Esses phrasal verbs são comumente usados em contextos profissionais e formais, especialmente durante negociações, discussões ou planejamento. 'Iron out' significa resolver problemas ou desacordos. 'Follow through' significa completar uma ação ou promessa. 'Hold off' significa atrasar ou adiar algo."
        },
        "mistakes": [
          {
            "en": "Incorrect: We need to iron up the issues. (Incorrect particle)",
            "pt": "Incorreto: Precisamos 'iron up' os problemas. (Partícula incorreta)"
          },
          {
            "en": "Incorrect: I will follow up the project. (Often confused with 'follow through'; 'follow up' means to check progress or respond to something, not necessarily completing the original task)",
            "pt": "Incorreto: Eu vou 'follow up' o projeto. (Frequentemente confundido com 'follow through'; 'follow up' significa verificar o progresso ou responder a algo, não necessariamente completar a tarefa original)"
          }
        ]
      }
    ],
    "controlledPractice": [
      {
        "id": "cp17-1",
        "prompt": {
          "en": "Choose the correct phrasal verb: We need to _______ all the minor disagreements before finalizing the partnership.",
          "pt": "Escolha o phrasal verb correto: Precisamos _______ todos os pequenos desentendimentos antes de finalizar a parceria."
        },
        "options": [
          "hold off",
          "iron out",
          "follow through"
        ],
        "answer": "iron out",
        "explanation": {
          "en": "'Iron out' means to resolve problems or disagreements, which fits the context of finalizing a partnership.",
          "pt": "'Iron out' significa resolver problemas ou desentendimentos, o que se encaixa no contexto de finalizar uma parceria."
        }
      },
      {
        "id": "cp17-2",
        "prompt": {
          "en": "Which phrasal verb means to delay a decision or action?",
          "pt": "Qual phrasal verb significa atrasar uma decisão ou ação?"
        },
        "options": [
          "follow through",
          "iron out",
          "hold off"
        ],
        "answer": "hold off",
        "explanation": {
          "en": "'Hold off' specifically means to delay or postpone something, like a decision.",
          "pt": "'Hold off' significa especificamente atrasar ou adiar algo, como uma decisão."
        }
      },
      {
        "id": "cp17-3",
        "prompt": {
          "en": "Complete the sentence with the appropriate phrasal verb: The team promised a comprehensive report, and they must _______ on that promise.",
          "pt": "Complete a frase com o phrasal verb apropriado: A equipe prometeu um relatório abrangente, e eles devem _______ essa promessa."
        },
        "options": [
          "hold off",
          "iron out",
          "follow through"
        ],
        "answer": "follow through",
        "explanation": {
          "en": "'Follow through' means to complete an action or promise, which is what the team needs to do.",
          "pt": "'Follow through' significa completar uma ação ou promessa, que é o que a equipe precisa fazer."
        }
      },
      {
        "id": "cp17-4",
        "prompt": {
          "en": "Which sentence correctly uses an expression for summarizing formally?",
          "pt": "Qual frase usa corretamente uma expressão para resumir formalmente?"
        },
        "options": [
          "Long story short, we failed.",
          "In essence, the key takeaway is that collaboration is vital.",
          "To sum up, it was a good day."
        ],
        "answer": "In essence, the key takeaway is that collaboration is vital.",
        "explanation": {
          "en": "'In essence, the key takeaway is...' is a formal summarizing expression. 'Long story short' is informal, and 'To sum up' is generally less formal than the chosen option.",
          "pt": "'In essence, the key takeaway is...' é uma expressão formal de resumo. 'Long story short' é informal, e 'To sum up' é geralmente menos formal que a opção escolhida."
        }
      }
    ],
    "input": {
      "kind": "reading",
      "title": {
        "en": "Addressing the Global Climate Crisis: A Call for Unified Action",
        "pt": "Abordando a Crise Climática Global: Um Chamado à Ação Unificada"
      },
      "lines": [
        {
          "en": "The escalating global climate crisis demands urgent and unified action from all nations. While innovation in renewable energy offers promising solutions, significant challenges remain in its widespread adoption and equitable distribution. Economic inequality often exacerbates vulnerability to climate impacts, leaving developing nations disproportionately affected.",
          "pt": "A crescente crise climática global exige ação urgente e unificada de todas as nações. Embora a inovação em energia renovável ofereça soluções promissoras, desafios significativos permanecem em sua adoção generalizada e distribuição equitativa. A desigualdade econômica frequentemente exacerba a vulnerabilidade aos impactos climáticos, deixando as nações em desenvolvimento desproporcionalmente afetadas."
        },
        {
          "en": "Furthermore, international policy frameworks need substantial reform to ensure they genuinely follow through on emission reduction targets. Current policies often fall short, and there's a strong call to iron out discrepancies in national commitments and accountability mechanisms.",
          "pt": "Além disso, os quadros de políticas internacionais precisam de reformas substanciais para garantir que realmente cumpram as metas de redução de emissões. As políticas atuais muitas vezes ficam aquém, e há um forte apelo para resolver as discrepâncias nos compromissos nacionais e nos mecanismos de responsabilização."
        },
        {
          "en": "The issue of climate migration is also becoming increasingly pertinent, as communities are displaced by environmental disasters. Protecting human rights in these situations is paramount, requiring new international agreements and greater awareness among populations.",
          "pt": "A questão da migração climática também está se tornando cada vez mais pertinente, à medida que as comunidades são deslocadas por desastres ambientais. A proteção dos direitos humanos nessas situações é fundamental, exigindo novos acordos internacionais e maior conscientização entre as populações."
        },
        {
          "en": "In essence, the key takeaway is that achieving sustainable development requires a holistic approach, integrating technological advancements with social justice. We cannot hold off on these critical conversations any longer.",
          "pt": "Em essência, a principal conclusão é que alcançar o desenvolvimento sustentável requer uma abordagem holística, integrando avanços tecnológicos com justiça social. Não podemos mais adiar essas conversas críticas."
        },
        {
          "en": "All things considered, a renewed global commitment to both mitigation and adaptation strategies, ensuring no nation is left behind, will be crucial for the future.",
          "pt": "Considerando tudo, um renovado compromisso global com estratégias de mitigação e adaptação, garantindo que nenhuma nação seja deixada para trás, será crucial para o futuro."
        }
      ],
      "questions": [
        {
          "id": "input-qc17-1",
          "prompt": {
            "en": "What is highlighted as a significant challenge regarding renewable energy?",
            "pt": "O que é destacado como um desafio significativo em relação à energia renovável?"
          },
          "options": [
            "Lack of innovation in its development.",
            "Its widespread adoption and equitable distribution.",
            "Its high cost of production."
          ],
          "answer": "Its widespread adoption and equitable distribution.",
          "explanation": {
            "en": "The text states: 'significant challenges remain in its widespread adoption and equitable distribution.'",
            "pt": "O texto afirma: 'desafios significativos permanecem em sua adoção generalizada e distribuição equitativa.'"
          }
        },
        {
          "id": "input-qc17-2",
          "prompt": {
            "en": "What does the text suggest about international policy frameworks?",
            "pt": "O que o texto sugere sobre os quadros de políticas internacionais?"
          },
          "options": [
            "They are already sufficient to meet emission targets.",
            "They need substantial reform to follow through on targets.",
            "They are too focused on migration issues."
          ],
          "answer": "They need substantial reform to follow through on targets.",
          "explanation": {
            "en": "The text says: 'international policy frameworks need substantial reform to ensure they genuinely follow through on emission reduction targets.'",
            "pt": "O texto diz: 'os quadros de políticas internacionais precisam de reformas substanciais para garantir que realmente cumpram as metas de redução de emissões.'"
          }
        },
        {
          "id": "input-qc17-3",
          "prompt": {
            "en": "According to the text, why is achieving sustainable development complex?",
            "pt": "De acordo com o texto, por que alcançar o desenvolvimento sustentável é complexo?"
          },
          "options": [
            "Because technological advancements are insufficient.",
            "Because social justice is not a priority.",
            "It requires a holistic approach integrating technology with social justice."
          ],
          "answer": "It requires a holistic approach integrating technology with social justice.",
          "explanation": {
            "en": "The text summarizes: 'achieving sustainable development requires a holistic approach, integrating technological advancements with social justice.'",
            "pt": "O texto resume: 'alcançar o desenvolvimento sustentável requer uma abordagem holística, integrando avanços tecnológicos com justiça social.'"
          }
        }
      ]
    },
    "quickCheck": [
      {
        "id": "qc17-1",
        "prompt": {
          "en": "Which of these phrasal verbs means to resolve an issue?",
          "pt": "Qual desses phrasal verbs significa resolver um problema?"
        },
        "options": [
          "Hold off",
          "Iron out",
          "Follow through"
        ],
        "answer": "Iron out",
        "explanation": {
          "en": "'Iron out' is used to describe the process of resolving problems or disagreements.",
          "pt": "'Iron out' é usado para descrever o processo de resolver problemas ou desentendimentos."
        }
      },
      {
        "id": "qc17-2",
        "prompt": {
          "en": "Which word refers to the movement of people from one place to another?",
          "pt": "Qual palavra se refere ao movimento de pessoas de um lugar para outro?"
        },
        "options": [
          "Innovation",
          "Globalization",
          "Migration"
        ],
        "answer": "Migration",
        "explanation": {
          "en": "Migration specifically describes the movement of people with the intention of settling.",
          "pt": "Migração descreve especificamente o movimento de pessoas com a intenção de se estabelecer."
        }
      },
      {
        "id": "qc17-3",
        "prompt": {
          "en": "When using 'In essence, the key takeaway is...', what are you doing?",
          "pt": "Ao usar 'In essence, the key takeaway is...', o que você está fazendo?"
        },
        "options": [
          "Introducing a new topic.",
          "Summarizing formally.",
          "Expressing disagreement."
        ],
        "answer": "Summarizing formally.",
        "explanation": {
          "en": "This expression is used to present the main conclusion or most important point in a formal way.",
          "pt": "Essa expressão é usada para apresentar a principal conclusão ou o ponto mais importante de forma formal."
        }
      },
      {
        "id": "qc17-4",
        "prompt": {
          "en": "If you 'hold off' on a decision, what does that mean?",
          "pt": "Se você 'hold off' uma decisão, o que isso significa?"
        },
        "options": [
          "You make it immediately.",
          "You delay or postpone it.",
          "You consult with others first."
        ],
        "answer": "You delay or postpone it.",
        "explanation": {
          "en": "'Hold off' means to delay doing or deciding something.",
          "pt": "'Hold off' significa adiar fazer ou decidir algo."
        }
      }
    ]
  },
  "communicate": {
    "id": "UPPER-INTERMEDIATE-U17-COMMUNICATE",
    "review": [
      {
        "en": "Recall the global issues vocabulary (e.g., inequality, migration, innovation).",
        "pt": "Lembre-se do vocabulário de questões globais (ex: desigualdade, migração, inovação)."
      },
      {
        "en": "Review the advanced phrasal verbs for negotiation: hold off, iron out, follow through.",
        "pt": "Revise os phrasal verbs avançados para negociação: hold off, iron out, follow through."
      },
      {
        "en": "Remember the formal summarizing expressions: In essence, the key takeaway is... | To conclude... | All things considered...",
        "pt": "Lembre-se das expressões formais de resumo: In essence, the key takeaway is... | To conclude... | All things considered..."
      }
    ],
    "activities": [
      {
        "id": "act17-1",
        "title": {
          "en": "Compare and Contrast Global Issues",
          "pt": "Comparar e Contrastar Questões Globais"
        },
        "instruction": {
          "en": "Work with a partner. Choose two global issues from the vocabulary list (e.g., inequality and climate change, or migration and human rights). Discuss their similarities, differences, and interconnectedness. Prepare to present a brief summary of your discussion.",
          "pt": "Trabalhe com um parceiro. Escolha duas questões globais da lista de vocabulário (por exemplo, desigualdade e mudança climática, ou migração e direitos humanos). Discuta suas semelhanças, diferenças e interconexões. Prepare-se para apresentar um breve resumo da sua discussão."
        },
        "phrases": [
          {
            "en": "Both X and Y present significant challenges...",
            "pt": "Tanto X quanto Y apresentam desafios significativos..."
          },
          {
            "en": "However, they differ in their primary causes and effects...",
            "pt": "No entanto, eles diferem em suas causas e efeitos primários..."
          },
          {
            "en": "In essence, the key takeaway from our discussion is...",
            "pt": "Em essência, a principal conclusão da nossa discussão é..."
          }
        ],
        "check": [
          {
            "id": "act17-1-chk1",
            "prompt": {
              "en": "Which statement best uses a summarizing expression?",
              "pt": "Qual afirmação usa melhor uma expressão de resumo?"
            },
            "options": [
              "We talked about global issues.",
              "To conclude, our points were well-made.",
              "All things considered, these issues are deeply interconnected."
            ],
            "answer": "All things considered, these issues are deeply interconnected.",
            "explanation": {
              "en": "'All things considered' is a formal summarizing expression, effectively bringing the discussion to a concise point.",
              "pt": "'All things considered' é uma expressão formal de resumo, que resume a discussão em um ponto conciso."
            }
          },
          {
            "id": "act17-1-chk2",
            "prompt": {
              "en": "Which global issue is most likely directly linked to human rights?",
              "pt": "Qual questão global está mais provavelmente diretamente ligada aos direitos humanos?"
            },
            "options": [
              "Innovation",
              "Migration",
              "Globalization"
            ],
            "answer": "Migration",
            "explanation": {
              "en": "Migration often involves issues of displacement, asylum, and basic rights, making it directly linked to human rights.",
              "pt": "A migração frequentemente envolve questões de deslocamento, asilo e direitos básicos, tornando-a diretamente ligada aos direitos humanos."
            }
          }
        ]
      },
      {
        "id": "act17-2",
        "title": {
          "en": "Role-play a Negotiation",
          "pt": "Simulação de Negociação"
        },
        "instruction": {
          "en": "In groups of three, role-play a negotiation between representatives from different countries on a specific global issue (e.g., funding for climate change adaptation, international migration policy reform). Use the advanced phrasal verbs and formal summarizing expressions to discuss, propose, and iron out details.",
          "pt": "Em grupos de três, simulem uma negociação entre representantes de diferentes países sobre uma questão global específica (por exemplo, financiamento para adaptação às mudanças climáticas, reforma da política internacional de migração). Usem os phrasal verbs avançados e as expressões formais de resumo para discutir, propor e resolver os detalhes."
        },
        "phrases": [
          {
            "en": "We need to iron out the specifics of this agreement.",
            "pt": "Precisamos resolver os detalhes específicos deste acordo."
          },
          {
            "en": "I propose we hold off on a final decision regarding funding until next quarter.",
            "pt": "Proponho que adiemos uma decisão final sobre o financiamento até o próximo trimestre."
          },
          {
            "en": "It's essential that we follow through on our initial commitments.",
            "pt": "É essencial que cumpramos nossos compromissos iniciais."
          }
        ],
        "check": [
          {
            "id": "act17-2-chk1",
            "prompt": {
              "en": "A delegate says, 'We need to iron out the details of this proposal.' What is their intention?",
              "pt": "Um delegado diz: 'Precisamos resolver os detalhes desta proposta.' Qual é a intenção dele?"
            },
            "options": [
              "To postpone the discussion.",
              "To finalize and resolve any remaining problems.",
              "To criticize the proposal."
            ],
            "answer": "To finalize and resolve any remaining problems.",
            "explanation": {
              "en": "'Iron out' means to resolve issues or problems, indicating a desire to finalize details.",
              "pt": "'Iron out' significa resolver questões ou problemas, indicando o desejo de finalizar os detalhes."
            }
          },
          {
            "id": "act17-2-chk2",
            "prompt": {
              "en": "Which scenario best describes someone using 'hold off' correctly?",
              "pt": "Qual cenário melhor descreve alguém usando 'hold off' corretamente?"
            },
            "options": [
              "Signing a contract immediately.",
              "Deciding to delay a vote until more information is gathered.",
              "Completing a task ahead of schedule."
            ],
            "answer": "Deciding to delay a vote until more information is gathered.",
            "explanation": {
              "en": "'Hold off' means to delay or postpone an action or decision.",
              "pt": "'Hold off' significa atrasar ou adiar uma ação ou decisão."
            }
          }
        ]
      },
      {
        "id": "act17-3",
        "title": {
          "en": "Give a Short Presentation on a Global Issue",
          "pt": "Faça uma Breve Apresentação sobre uma Questão Global"
        },
        "instruction": {
          "en": "Prepare a 3-minute presentation on a global issue of your choice (e.g., policy reform, sustainable development goals, digital inequality). Use at least two advanced phrasal verbs and one formal summarizing expression. Focus on presenting the core problem and potential solutions.",
          "pt": "Prepare uma apresentação de 3 minutos sobre uma questão global de sua escolha (ex: reforma de políticas, metas de desenvolvimento sustentável, desigualdade digital). Use pelo menos dois phrasal verbs avançados e uma expressão formal de resumo. Concentre-se em apresentar o problema central e as possíveis soluções."
        },
        "phrases": [
          {
            "en": "It is imperative that we follow through on these recommendations.",
            "pt": "É imperativo que cumpramos essas recomendações."
          },
          {
            "en": "This crisis necessitates urgent policy reform.",
            "pt": "Esta crise exige uma reforma política urgente."
          },
          {
            "en": "To conclude, addressing X requires a multi-faceted approach.",
            "pt": "Para concluir, abordar X exige uma abordagem multifacetada."
          }
        ],
        "check": [
          {
            "id": "act17-3-chk1",
            "prompt": {
              "en": "During a presentation, you want to state the main point clearly. Which phrase would you use?",
              "pt": "Durante uma apresentação, você quer expor o ponto principal claramente. Qual frase você usaria?"
            },
            "options": [
              "What I mean is...",
              "In essence, the key takeaway is...",
              "Just to be clear..."
            ],
            "answer": "In essence, the key takeaway is...",
            "explanation": {
              "en": "This expression is specifically designed for formally stating the main point or conclusion.",
              "pt": "Essa expressão é especificamente projetada para declarar formalmente o ponto principal ou a conclusão."
            }
          },
          {
            "id": "act17-3-chk2",
            "prompt": {
              "en": "If a speaker emphasizes the need for 'development' in their presentation, what are they likely advocating for?",
              "pt": "Se um orador enfatiza a necessidade de 'desenvolvimento' em sua apresentação, o que ele provavelmente está defendendo?"
            },
            "options": [
              "Reducing international cooperation.",
              "Growth and progress, often economically or socially.",
              "Maintaining the status quo."
            ],
            "answer": "Growth and progress, often economically or socially.",
            "explanation": {
              "en": "'Development' in a global context usually refers to the process of growth, progress, and improvement in societies or economies.",
              "pt": "'Desenvolvimento' em um contexto global geralmente se refere ao processo de crescimento, progresso e melhoria em sociedades ou economias."
            }
          }
        ]
      }
    ],
    "challenge": {
      "id": "chal17-1",
      "title": {
        "en": "Drafting a Policy Recommendation Summary",
        "pt": "Redigindo um Resumo de Recomendação de Política"
      },
      "instruction": {
        "en": "You are a policy advisor. Choose one global issue and draft a short policy recommendation (150-200 words) for a governmental committee. Your recommendation must include a formal summary statement and incorporate at least two of the advanced phrasal verbs (hold off, iron out, follow through). Focus on clarity, conciseness, and persuasive language.",
        "pt": "Você é um consultor de políticas. Escolha uma questão global e redija uma curta recomendação de política (150-200 palavras) para um comitê governamental. Sua recomendação deve incluir uma declaração formal de resumo e incorporar pelo menos dois dos phrasal verbs avançados (hold off, iron out, follow through). Concentre-se na clareza, concisão e linguagem persuasiva."
      },
      "phrases": [
        {
          "en": "To conclude, the proposed policy will...",
          "pt": "Para concluir, a política proposta irá..."
        },
        {
          "en": "We must follow through on these immediate actions.",
          "pt": "Devemos cumprir estas ações imediatas."
        },
        {
          "en": "It is crucial to iron out any potential implementation challenges.",
          "pt": "É crucial resolver quaisquer desafios potenciais de implementação."
        }
      ],
      "check": [
        {
          "id": "chal17-1-chk1",
          "prompt": {
            "en": "When drafting a policy recommendation, why is 'iron out' an important phrasal verb to consider?",
            "pt": "Ao redigir uma recomendação de política, por que 'iron out' é um phrasal verb importante a considerar?"
          },
          "options": [
            "It suggests delaying action.",
            "It emphasizes the need to resolve potential issues for smooth implementation.",
            "It encourages starting new initiatives without planning."
          ],
          "answer": "It emphasizes the need to resolve potential issues for smooth implementation.",
          "explanation": {
            "en": "'Iron out' implies foreseeing and addressing problems to ensure the policy can be implemented effectively.",
            "pt": "'Iron out' implica prever e resolver problemas para garantir que a política possa ser implementada de forma eficaz."
          }
        },
        {
          "id": "chal17-1-chk2",
          "prompt": {
            "en": "Which of these formal summary phrases is best suited for concluding a policy recommendation?",
            "pt": "Qual dessas frases de resumo formal é mais adequada para concluir uma recomendação de política?"
          },
          "options": [
            "Basically, this is a good idea.",
            "All things considered, this policy represents a vital step forward.",
            "So, in a nutshell, we should do this."
          ],
          "answer": "All things considered, this policy represents a vital step forward.",
          "explanation": {
            "en": "'All things considered' is a highly formal and encompassing phrase suitable for concluding a comprehensive recommendation.",
            "pt": "'All things considered' é uma frase altamente formal e abrangente, adequada para concluir uma recomendação abrangente."
          }
        }
      ]
    },
    "lessonReview": {
      "summary": {
        "en": "In this unit, we explored key global issues and learned advanced phrasal verbs crucial for professional negotiation. We practiced formal summarizing techniques, applying them to discussions about world challenges.",
        "pt": "Nesta unidade, exploramos questões globais importantes e aprendemos phrasal verbs avançados cruciais para negociação profissional. Praticamos técnicas formais de resumo, aplicando-as a discussões sobre desafios mundiais."
      },
      "canDo": [
        {
          "en": "Discuss various global issues using specific vocabulary.",
          "pt": "Discutir várias questões globais usando vocabulário específico."
        },
        {
          "en": "Use advanced phrasal verbs (hold off, iron out, follow through) in negotiation contexts.",
          "pt": "Usar phrasal verbs avançados (hold off, iron out, follow through) em contextos de negociação."
        },
        {
          "en": "Summarize information formally using appropriate expressions.",
          "pt": "Resumir informações formalmente usando expressões apropriadas."
        }
      ],
      "next": {
        "en": "In Unit 18, we will delve into 'Ethical Dilemmas' and practice using 'reported speech with advanced verbs'.",
        "pt": "Na Unidade 18, exploraremos 'Dilemas Éticos' e praticaremos o uso do 'discurso indireto com verbos avançados'."
      }
    }
  }
},
{
  "code": "UPPER-INTERMEDIATE-U18",
  "number": 18,
  "title": "Arts Entertainment — Subjunctive mood in formal recommendations and demands",
  "titlePt": "Artes e Entretenimento — Modo subjuntivo em recomendações e exigências formais",
  "cefr": "B2",
  "objective": {
    "en": "To teach arts entertainment vocabulary and the subjunctive mood in formal recommendations and demands in a contextualized way.",
    "pt": "Ensinar vocabulário de artes e entretenimento e o modo subjuntivo em recomendações e exigências formais de forma contextualizada."
  },
  "communicationGoal": {
    "en": "Students will be able to use 'expressing nuance' and arts entertainment vocabulary to communicate in real-life situations.",
    "pt": "O aluno será capaz de usar 'expressing nuance' e o vocabulário de artes e entretenimento para se comunicar em situações reais."
  },
  "prerequisites": {
    "en": "Structure: Advanced phrasal verbs for professional negotiation (hold off, iron out, follow through). Vocabulary: Global Issues.",
    "pt": "Estrutura: Advanced phrasal verbs for professional negotiation (hold off, iron out, follow through). Vocabulário: Global Issues."
  },
  "newContent": {
    "en": "Grammar: Subjunctive mood in formal recommendations and demands. Vocabulary: Arts Entertainment (10 lexical items). Expressions: Expressing Nuance.",
    "pt": "Grammar: Subjunctive mood in formal recommendations and demands. Vocabulary: Arts Entertainment (10 itens lexicais). Expressions: Expressing Nuance."
  },
  "reviewContent": {
    "en": "Spiral review: Nuanced modal verbs for hedging and diplomacy (might as well, would rather, ought to) (Unit 11). Vocabulary review: Arts Entertainment (Unit 4).",
    "pt": "Revisão em espiral: Nuanced modal verbs for hedging and diplomacy (might as well, would rather, ought to) (Unit 11). Revisão de vocabulário: Arts Entertainment (Unit 4)."
  },
  "discover": {
    "id": "UPPER-INTERMEDIATE-U18-DISCOVER",
    "warmUp": {
      "prompt": {
        "en": "Look at the images below showing various artistic events. Which of these have you experienced? Which would you like to experience? Discuss your preferences and why.",
        "pt": "Observe as imagens abaixo, que mostram vários eventos artísticos. Quais deles você já experimentou? Quais gostaria de experimentar? Discuta suas preferências e por quê."
      },
      "phrases": [
        {
          "en": "I find classical music concerts incredibly moving.",
          "pt": "Acho concertos de música clássica incrivelmente emocionantes."
        },
        {
          "en": "Contemporary dance often challenges my perceptions.",
          "pt": "A dança contemporânea frequentemente desafia minhas percepções."
        }
      ]
    },
    "context": {
      "situation": {
        "en": "Sarah and Tom are discussing a new cultural policy proposed by their city's council, which aims to boost local arts. They need to provide nuanced feedback to the committee.",
        "pt": "Sarah e Tom estão discutindo uma nova política cultural proposta pelo conselho da cidade, que visa impulsionar as artes locais. Eles precisam fornecer feedback com nuances ao comitê."
      },
      "dialogue": [
        {
          "who": "Sarah",
          "en": "Have you seen the proposed Arts & Culture Revitalization plan?",
          "pt": "Você viu o plano proposto de Revitalização de Artes e Cultura?"
        },
        {
          "who": "Tom",
          "en": "Yes, I was just reading through it. It's essential that the council be made aware of potential pitfalls, especially regarding funding for indie artists.",
          "pt": "Sim, eu estava lendo agora. É essencial que o conselho seja informado sobre possíveis armadilhas, especialmente em relação ao financiamento para artistas independentes."
        },
        {
          "who": "Sarah",
          "en": "I agree. While the intention is good, I'm somewhat hesitant about the focus solely on mainstream venues. There's more to it than that for a truly vibrant scene.",
          "pt": "Concordo. Embora a intenção seja boa, estou um tanto hesitante quanto ao foco apenas em locais populares. Há mais do que isso para uma cena verdadeiramente vibrante."
        },
        {
          "who": "Tom",
          "en": "Exactly. They recommended that new artists be given more opportunities, but the plan doesn't really specify how. It's a bit more complicated than it seems.",
          "pt": "Exatamente. Eles recomendaram que novos artistas recebam mais oportunidades, mas o plano não especifica como. É um pouco mais complicado do que parece."
        },
        {
          "who": "Sarah",
          "en": "We should suggest that the committee consider a more diverse range of artistic expressions. It is vital that their outreach efforts include community art projects.",
          "pt": "Deveríamos sugerir que o comitê considere uma gama mais diversa de expressões artísticas. É vital que seus esforços de divulgação incluam projetos de arte comunitária."
        },
        {
          "who": "Tom",
          "en": "I'll draft an email. It's imperative that our feedback be clear and constructive.",
          "pt": "Vou redigir um e-mail. É imperativo que nosso feedback seja claro e construtivo."
        }
      ]
    },
    "vocabulary": [
      {
        "term": "performance",
        "pt": "apresentação",
        "ipa": "/pərˈfɔːrməns/",
        "definition": "An act of presenting a play, concert, or other form of entertainment.",
        "example": "The ballet performance at the opera house was breathtaking.",
        "examplePt": "A apresentação de balé na casa de ópera foi deslumbrante."
      },
      {
        "term": "exhibition",
        "pt": "exposição",
        "ipa": "/ˌɛksəˈbɪʃən/",
        "definition": "A public display of works of art or other items.",
        "example": "The new art exhibition features works from local emerging artists.",
        "examplePt": "A nova exposição de arte apresenta obras de artistas locais emergentes."
      },
      {
        "term": "soundtrack",
        "pt": "trilha sonora",
        "ipa": "/ˈsaʊndtræk/",
        "definition": "The recorded music accompanying and synchronized with the images of a motion picture, video, or stage production.",
        "example": "The film's soundtrack perfectly captured the mood of the story.",
        "examplePt": "A trilha sonora do filme capturou perfeitamente o clima da história."
      },
      {
        "term": "narrative",
        "pt": "narrativa",
        "ipa": "/ˈnærətɪv/",
        "definition": "A spoken or written account of connected events; a story.",
        "example": "Her latest novel offers a compelling narrative about cultural identity.",
        "examplePt": "O último romance dela oferece uma narrativa cativante sobre identidade cultural."
      },
      {
        "term": "genre",
        "pt": "gênero",
        "ipa": "/ˈʒɑːnrə/",
        "definition": "A category of artistic composition, as in music or literature, characterized by similarities in form, style, or subject matter.",
        "example": "Science fiction is a popular literary genre that explores futuristic concepts.",
        "examplePt": "Ficção científica é um gênero literário popular que explora conceitos futuristas."
      },
      {
        "term": "critique",
        "pt": "crítica",
        "ipa": "/krɪˈtiːk/",
        "definition": "A detailed analysis and assessment of something, especially a literary or philosophical theory.",
        "example": "The art critic's critique of the new play was surprisingly positive.",
        "examplePt": "A crítica do crítico de arte sobre a nova peça foi surpreendentemente positiva."
      },
      {
        "term": "aesthetic",
        "pt": "estética",
        "ipa": "/ɛsˈθɛtɪk/",
        "definition": "A set of principles concerned with the nature and appreciation of beauty, especially in art.",
        "example": "The film's visual aesthetic was inspired by classic European cinema.",
        "examplePt": "A estética visual do filme foi inspirada no cinema europeu clássico."
      },
      {
        "term": "creativity",
        "pt": "criatividade",
        "ipa": "/ˌkriːeɪˈtɪvəti/",
        "definition": "The use of imagination or original ideas to create something; inventiveness.",
        "example": "The workshop aimed to foster creativity among young artists.",
        "examplePt": "O workshop tinha como objetivo fomentar a criatividade entre jovens artistas."
      },
      {
        "term": "audience",
        "pt": "público",
        "ipa": "/ˈɔːdiəns/",
        "definition": "The assembled spectators or listeners at a public event, such as a play, movie, concert, or meeting.",
        "example": "The audience gave the band a standing ovation after their final song.",
        "examplePt": "A plateia aplaudiu de pé a banda após a última música."
      },
      {
        "term": "production",
        "pt": "produção",
        "ipa": "/prəˈdʌkʃən/",
        "definition": "The process of making or growing something for sale or use, or the show itself.",
        "example": "The theater company's new production of 'Hamlet' received rave reviews.",
        "examplePt": "A nova produção de 'Hamlet' da companhia de teatro recebeu críticas entusiasmadas."
      }
    ],
    "expressions": [
      {
        "en": "I'm somewhat hesitant about...",
        "pt": "Estou um tanto hesitante sobre..."
      },
      {
        "en": "There's more to it than that.",
        "pt": "Há mais do que isso."
      },
      {
        "en": "It's a bit more complicated than it seems.",
        "pt": "É um pouco mais complicado do que parece."
      }
    ],
    "grammar": [
      {
        "title": {
          "en": "Subjunctive mood in formal recommendations and demands",
          "pt": "Modo subjuntivo em recomendações e exigências formais"
        },
        "examples": [
          {
            "en": "It's essential that the report be accurate.",
            "pt": "É essencial que o relatório seja preciso."
          },
          {
            "en": "The board recommended that the policy be revised.",
            "pt": "A diretoria recomendou que a política fosse revisada."
          },
          {
            "en": "We request that she attend the meeting.",
            "pt": "Nós solicitamos que ela compareça à reunião."
          }
        ],
        "rule": {
          "en": "The subjunctive mood is used in formal contexts after certain verbs (e.g., recommend, suggest, demand, insist, request, propose, advise, urge) or impersonal expressions (e.g., it's essential, it's vital, it's important, it's imperative, it's crucial) followed by 'that'. The verb in the subjunctive clause takes its base form (infinitive without 'to') for all subjects, regardless of person or number. For 'to be', it becomes 'be'. This form expresses a wish, recommendation, requirement, or suggestion, rather than a fact.",
          "pt": "O modo subjuntivo é usado em contextos formais após certos verbos (por exemplo, recommend, suggest, demand, insist, request, propose, advise, urge) ou expressões impessoais (por exemplo, it's essential, it's vital, it's important, it's imperative, it's crucial) seguidos por 'that'. O verbo na oração subjuntiva assume sua forma base (infinitivo sem 'to') para todos os sujeitos, independentemente da pessoa ou número. Para 'to be', torna-se 'be'. Esta forma expressa um desejo, recomendação, requisito ou sugestão, e não um fato."
        },
        "mistakes": [
          {
            "en": "Incorrect: It's important that he attends the session. (Instead of 'attend')",
            "pt": "Incorreto: It's important that he attends the session. (Em vez de 'attend')"
          },
          {
            "en": "Incorrect: They suggested that she is present. (Instead of 'be present')",
            "pt": "Incorreto: They suggested that she is present. (Em vez de 'be present')"
          }
        ]
      }
    ],
    "controlledPractice": [
      {
        "id": "cp-u18-1",
        "prompt": {
          "en": "Choose the correct form of the verb for the subjunctive mood: The director insisted that the cast ______ on time for rehearsal.",
          "pt": "Escolha a forma correta do verbo para o modo subjuntivo: O diretor insistiu que o elenco ______ no horário para o ensaio."
        },
        "options": [
          "is",
          "be",
          "are"
        ],
        "answer": "be",
        "explanation": {
          "en": "After 'insisted that' in a formal demand, the verb 'to be' takes the base form 'be' for all subjects.",
          "pt": "Após 'insisted that' em uma demanda formal, o verbo 'to be' assume a forma base 'be' para todos os sujeitos."
        }
      },
      {
        "id": "cp-u18-2",
        "prompt": {
          "en": "Complete the sentence with the correct subjunctive form: It is crucial that every artist ______ their portfolio before the deadline.",
          "pt": "Complete a frase com a forma subjuntiva correta: É crucial que cada artista ______ seu portfólio antes do prazo."
        },
        "options": [
          "submits",
          "submit",
          "submitted"
        ],
        "answer": "submit",
        "explanation": {
          "en": "After 'it is crucial that', the verb takes its base form 'submit', even for a singular subject like 'every artist'.",
          "pt": "Após 'it is crucial that', o verbo assume sua forma base 'submit', mesmo para um sujeito singular como 'every artist'."
        }
      },
      {
        "id": "cp-u18-3",
        "prompt": {
          "en": "Identify the sentence that correctly uses the subjunctive mood:",
          "pt": "Identifique a frase que usa corretamente o modo subjuntivo:"
        },
        "options": [
          "She requested that he brings the tickets.",
          "She requested that he bring the tickets.",
          "She requested that he brought the tickets."
        ],
        "answer": "She requested that he bring the tickets.",
        "explanation": {
          "en": "The correct subjunctive form after 'requested that' is the base form 'bring', not 'brings' (simple present) or 'brought' (simple past).",
          "pt": "A forma subjuntiva correta após 'requested that' é a forma base 'bring', não 'brings' (presente simples) ou 'brought' (passado simples)."
        }
      },
      {
        "id": "cp-u18-4",
        "prompt": {
          "en": "Which of the following formal expressions is typically followed by the subjunctive mood?",
          "pt": "Qual das seguintes expressões formais é tipicamente seguida pelo modo subjuntivo?"
        },
        "options": [
          "I think that...",
          "It's true that...",
          "It's vital that..."
        ],
        "answer": "It's vital that...",
        "explanation": {
          "en": "'It's vital that...' is an impersonal expression that introduces a formal recommendation or requirement, thus requiring the subjunctive mood.",
          "pt": "'It's vital that...' é uma expressão impessoal que introduz uma recomendação ou exigência formal, exigindo, portanto, o modo subjuntivo."
        }
      }
    ],
    "input": {
      "kind": "listening",
      "title": {
        "en": "A Discussion on Funding for Local Arts Festivals",
        "pt": "Uma Discussão sobre o Financiamento para Festivais de Arte Locais"
      },
      "lines": [
        {
          "en": "Host: Welcome to 'Culture Beat'. Today, we're discussing the recent proposal to cut funding for smaller, local arts festivals. Our guest, Dr. Anya Sharma, has strong views on this.",
          "pt": "Apresentador: Bem-vindos ao 'Culture Beat'. Hoje, estamos discutindo a recente proposta de cortar o financiamento para festivais de arte locais menores. Nossa convidada, Dra. Anya Sharma, tem opiniões fortes sobre isso."
        },
        {
          "en": "Dr. Sharma: Thank you for having me. It is absolutely essential that the council reconsider this decision. These festivals are the lifeblood of community creativity.",
          "pt": "Dra. Sharma: Obrigada por me receber. É absolutamente essencial que o conselho reconsidere esta decisão. Esses festivais são a força vital da criatividade da comunidade."
        },
        {
          "en": "Host: Many argue that larger, more established institutions are more cost-effective. What's your counter-argument?",
          "pt": "Apresentador: Muitos argumentam que instituições maiores e mais estabelecidas são mais econômicas. Qual é o seu contra-argumento?"
        },
        {
          "en": "Dr. Sharma: Well, it's a bit more complicated than it seems. While major venues attract tourists, smaller festivals foster local talent and provide unique performance opportunities. I'm somewhat hesitant about policies that overlook this grassroots aspect.",
          "pt": "Dra. Sharma: Bem, é um pouco mais complicado do que parece. Enquanto grandes locais atraem turistas, festivais menores fomentam talentos locais e oferecem oportunidades únicas de apresentação. Estou um tanto hesitante quanto a políticas que ignoram esse aspecto de base."
        },
        {
          "en": "Host: So you'd recommend an alternative approach?",
          "pt": "Apresentador: Então, você recomendaria uma abordagem alternativa?"
        },
        {
          "en": "Dr. Sharma: Indeed. I propose that the funding model be diversified. It’s imperative that support be given to both established and emerging arts scenes. There's more to it than just visitor numbers; it's about cultural enrichment.",
          "pt": "Dra. Sharma: De fato. Proponho que o modelo de financiamento seja diversificado. É imperativo que o apoio seja dado tanto a cenas artísticas estabelecidas quanto emergentes. Há mais do que apenas o número de visitantes; trata-se de enriquecimento cultural."
        }
      ],
      "questions": [
        {
          "id": "u18-listen-q1",
          "prompt": {
            "en": "What is the main topic of discussion in the audio?",
            "pt": "Qual é o principal tópico de discussão no áudio?"
          },
          "options": [
            "The impact of tourism on art exhibitions.",
            "The proposal to cut funding for local arts festivals.",
            "The importance of major cultural institutions."
          ],
          "answer": "The proposal to cut funding for local arts festivals.",
          "explanation": {
            "en": "The host explicitly introduces the topic: 'discussing the recent proposal to cut funding for smaller, local arts festivals.'",
            "pt": "O apresentador introduz explicitamente o tópico: 'discutindo a recente proposta de cortar o financiamento para festivais de arte locais menores.'"
          }
        },
        {
          "id": "u18-listen-q2",
          "prompt": {
            "en": "Why is Dr. Sharma 'somewhat hesitant' about the current policies?",
            "pt": "Por que a Dra. Sharma está 'um tanto hesitante' em relação às políticas atuais?"
          },
          "options": [
            "Because they prioritize international artists over local ones.",
            "Because they focus too much on major venues and overlook grassroots art.",
            "Because the funding is insufficient for any artistic endeavor."
          ],
          "answer": "Because they focus too much on major venues and overlook grassroots art.",
          "explanation": {
            "en": "Dr. Sharma states: 'I'm somewhat hesitant about policies that overlook this grassroots aspect,' referring to smaller festivals fostering local talent.",
            "pt": "A Dra. Sharma afirma: 'Estou um tanto hesitante quanto a políticas que ignoram esse aspecto de base', referindo-se a festivais menores que fomentam talentos locais."
          }
        },
        {
          "id": "u18-listen-q3",
          "prompt": {
            "en": "What does Dr. Sharma propose regarding the funding model?",
            "pt": "O que a Dra. Sharma propõe em relação ao modelo de financiamento?"
          },
          "options": [
            "That it be solely dedicated to large cultural institutions.",
            "That it remain unchanged to ensure stability.",
            "That it be diversified to support both established and emerging arts scenes."
          ],
          "answer": "That it be diversified to support both established and emerging arts scenes.",
          "explanation": {
            "en": "Dr. Sharma clearly states: 'I propose that the funding model be diversified. It’s imperative that support be given to both established and emerging arts scenes.'",
            "pt": "A Dra. Sharma afirma claramente: 'Proponho que o modelo de financiamento seja diversificado. É imperativo que o apoio seja dado tanto a cenas artísticas estabelecidas quanto emergentes.'"
          }
        }
      ]
    },
    "quickCheck": [
      {
        "id": "qc-u18-1",
        "prompt": {
          "en": "Which sentence correctly uses the subjunctive mood for a formal recommendation?",
          "pt": "Qual frase usa corretamente o modo subjuntivo para uma recomendação formal?"
        },
        "options": [
          "It is important that he arrives early.",
          "It is important that he arrive early.",
          "It is important that he arrived early."
        ],
        "answer": "It is important that he arrive early.",
        "explanation": {
          "en": "For formal recommendations introduced by 'It is important that', the verb takes its base form, 'arrive'.",
          "pt": "Para recomendações formais introduzidas por 'It is important that', o verbo assume sua forma base, 'arrive'."
        }
      },
      {
        "id": "qc-u18-2",
        "prompt": {
          "en": "What does the expression 'There's more to it than that' imply?",
          "pt": "O que a expressão 'There's more to it than that' implica?"
        },
        "options": [
          "The situation is simpler than initially presented.",
          "The situation is more complex and has hidden aspects.",
          "The situation has a single, clear explanation."
        ],
        "answer": "The situation is more complex and has hidden aspects.",
        "explanation": {
          "en": "This expression is used to indicate that a situation or topic is more intricate and has additional layers or complexities beyond what is obvious.",
          "pt": "Essa expressão é usada para indicar que uma situação ou tópico é mais intrincado e possui camadas ou complexidades adicionais além do que é óbvio."
        }
      },
      {
        "id": "qc-u18-3",
        "prompt": {
          "en": "Which of the following words is used to describe a public display of art?",
          "pt": "Qual das seguintes palavras é usada para descrever uma exibição pública de arte?"
        },
        "options": [
          "Soundtrack",
          "Exhibition",
          "Narrative"
        ],
        "answer": "Exhibition",
        "explanation": {
          "en": "An 'exhibition' is a public display of works of art or other items.",
          "pt": "Uma 'exhibition' é uma exibição pública de obras de arte ou outros itens."
        }
      },
      {
        "id": "qc-u18-4",
        "prompt": {
          "en": "Which sentence demonstrates the best use of 'expressing nuance'?",
          "pt": "Qual frase demonstra o melhor uso de 'expressar nuance'?"
        },
        "options": [
          "The play was terrible.",
          "The play had some good moments, but the ending felt a bit rushed.",
          "The play was good and I enjoyed it."
        ],
        "answer": "The play had some good moments, but the ending felt a bit rushed.",
        "explanation": {
          "en": "This sentence provides a more detailed and balanced opinion, acknowledging both positive and negative aspects, which is characteristic of expressing nuance.",
          "pt": "Esta frase oferece uma opinião mais detalhada e equilibrada, reconhecendo tanto aspectos positivos quanto negativos, o que é característico de expressar nuance."
        }
      }
    ]
  },
  "communicate": {
    "id": "UPPER-INTERMEDIATE-U18-COMMUNICATE",
    "review": [
      {
        "en": "Recall how to use the subjunctive mood after expressions like 'It's essential that...' or verbs like 'recommend that...'.",
        "pt": "Lembre-se de como usar o modo subjuntivo após expressões como 'It's essential that...' ou verbos como 'recommend that...'."
      },
      {
        "en": "Review the vocabulary for arts and entertainment: performance, exhibition, soundtrack, narrative, genre, critique, aesthetic, creativity, audience, production.",
        "pt": "Revise o vocabulário de artes e entretenimento: performance, exhibition, soundtrack, narrative, genre, critique, aesthetic, creativity, audience, production."
      },
      {
        "en": "Remember the expressions for expressing nuance: 'I'm somewhat hesitant about...', 'There's more to it than that.', 'It's a bit more complicated than it seems.'",
        "pt": "Lembre-se das expressões para expressar nuance: 'I'm somewhat hesitant about...', 'There's more to it than that.', 'It's a bit more complicated than it seems.'"
      }
    ],
    "activities": [
      {
        "id": "comm-u18-act1",
        "title": {
          "en": "Summarize a Complex Policy",
          "pt": "Resumir uma Política Complexa"
        },
        "instruction": {
          "en": "Read the provided summary of a fictional city's cultural policy. Identify its strengths and weaknesses, then summarize it for a skeptical audience, making sure to use nuanced language and at least two subjunctive clauses in your summary.",
          "pt": "Leia o resumo fornecido da política cultural de uma cidade fictícia. Identifique seus pontos fortes e fracos, e então resuma-o para um público cético, certificando-se de usar linguagem com nuances e pelo menos duas orações no modo subjuntivo em seu resumo."
        },
        "phrases": [
          {
            "en": "It is proposed that the budget be allocated...",
            "pt": "É proposto que o orçamento seja alocado..."
          },
          {
            "en": "I'm somewhat hesitant about the projected outcomes...",
            "pt": "Estou um tanto hesitante sobre os resultados projetados..."
          },
          {
            "en": "There's more to it than just economic benefits.",
            "pt": "Há mais do que apenas benefícios econômicos."
          }
        ],
        "check": [
          {
            "id": "comm-u18-act1-q1",
            "prompt": {
              "en": "Which of these phrases shows 'expressing nuance' in your summary?",
              "pt": "Qual dessas frases demonstra 'expressar nuance' em seu resumo?"
            },
            "options": [
              "The policy is terrible.",
              "While the policy has merits, its long-term impact is uncertain.",
              "The policy is absolutely perfect."
            ],
            "answer": "While the policy has merits, its long-term impact is uncertain.",
            "explanation": {
              "en": "This phrase acknowledges both positive and uncertain aspects, characteristic of nuanced communication.",
              "pt": "Esta frase reconhece tanto aspectos positivos quanto incertos, característica da comunicação com nuances."
            }
          },
          {
            "id": "comm-u18-act1-q2",
            "prompt": {
              "en": "Which sentence correctly uses the subjunctive mood in a summary of a policy recommendation?",
              "pt": "Qual frase usa corretamente o modo subjuntivo em um resumo de uma recomendação de política?"
            },
            "options": [
              "The report suggests that the committee revises the plan.",
              "The report suggests that the committee revise the plan.",
              "The report suggests that the committee will revise the plan."
            ],
            "answer": "The report suggests that the committee revise the plan.",
            "explanation": {
              "en": "After 'suggests that', the verb 'revise' should be in its base form for the subjunctive mood.",
              "pt": "Após 'suggests that', o verbo 'revise' deve estar em sua forma base para o modo subjuntivo."
            }
          }
        ]
      },
      {
        "id": "comm-u18-act2",
        "title": {
          "en": "Give a Nuanced Opinion on a Cultural Event",
          "pt": "Dar uma Opinião com Nuances sobre um Evento Cultural"
        },
        "instruction": {
          "en": "You attended a new theater production. Write a brief review (150-200 words) for a cultural blog, providing a nuanced opinion. Incorporate at least three vocabulary words from the 'Arts Entertainment' list and two subjunctive clauses to express recommendations or critiques.",
          "pt": "Você assistiu a uma nova produção teatral. Escreva uma breve resenha (150-200 palavras) para um blog cultural, fornecendo uma opinião com nuances. Incorpore pelo menos três palavras do vocabulário da lista 'Arts Entertainment' e duas orações subjuntivas para expressar recomendações ou críticas."
        },
        "phrases": [
          {
            "en": "The production's aesthetic was striking...",
            "pt": "A estética da produção era impressionante..."
          },
          {
            "en": "I recommend that the director consider...",
            "pt": "Recomendo que o diretor considere..."
          },
          {
            "en": "It's imperative that the narrative be clearer.",
            "pt": "É imperativo que a narrativa seja mais clara."
          }
        ],
        "check": [
          {
            "id": "comm-u18-act2-q1",
            "prompt": {
              "en": "Which of these is an example of nuanced feedback about a performance?",
              "pt": "Qual desses é um exemplo de feedback com nuances sobre uma performance?"
            },
            "options": [
              "The actors were bad, and the play was boring.",
              "The lead actor's performance was outstanding, though the pacing of the second act felt a little slow.",
              "It was the best play I've ever seen, without any flaws."
            ],
            "answer": "The lead actor's performance was outstanding, though the pacing of the second act felt a little slow.",
            "explanation": {
              "en": "This statement offers a balanced view, highlighting both a positive aspect (outstanding performance) and a minor criticism (slow pacing), demonstrating nuance.",
              "pt": "Esta declaração oferece uma visão equilibrada, destacando tanto um aspecto positivo (performance excepcional) quanto uma pequena crítica (ritmo lento), demonstrando nuance."
            }
          },
          {
            "id": "comm-u18-act2-q2",
            "prompt": {
              "en": "In a review, if you want to formally recommend a change, which phrase is most appropriate with the subjunctive?",
              "pt": "Em uma resenha, se você quer recomendar formalmente uma mudança, qual frase é mais apropriada com o subjuntivo?"
            },
            "options": [
              "I hope the ending changes.",
              "It is suggested that the ending be revised.",
              "The ending could be better."
            ],
            "answer": "It is suggested that the ending be revised.",
            "explanation": {
              "en": "'It is suggested that...' followed by the subjunctive form 'be revised' is the most formal and appropriate way to make a recommendation.",
              "pt": "'It is suggested that...' seguido da forma subjuntiva 'be revised' é a maneira mais formal e apropriada de fazer uma recomendação."
            }
          }
        ]
      },
      {
        "id": "comm-u18-act3",
        "title": {
          "en": "Write an Argumentative Text on Art Funding",
          "pt": "Escrever um Texto Argumentativo sobre Financiamento da Arte"
        },
        "instruction": {
          "en": "Write an argumentative essay (200-250 words) debating whether public funds should prioritize popular arts entertainment or niche, experimental forms. Use at least two expressions for 'expressing nuance' and three subjunctive clauses to state demands or formal recommendations clearly.",
          "pt": "Escreva um ensaio argumentativo (200-250 palavras) debatendo se os fundos públicos devem priorizar o entretenimento artístico popular ou formas de nicho e experimentais. Use pelo menos duas expressões para 'expressar nuance' e três orações subjuntivas para declarar exigências ou recomendações formais claramente."
        },
        "phrases": [
          {
            "en": "It's essential that public funds be distributed fairly.",
            "pt": "É essencial que os fundos públicos sejam distribuídos de forma justa."
          },
          {
            "en": "I'm somewhat hesitant about a singular focus...",
            "pt": "Estou um tanto hesitante quanto a um foco singular..."
          },
          {
            "en": "There's more to cultural value than attendance numbers.",
            "pt": "Há mais valor cultural do que números de público."
          }
        ],
        "check": [
          {
            "id": "comm-u18-act3-q1",
            "prompt": {
              "en": "When arguing for balanced funding, which phrase best introduces a formal demand?",
              "pt": "Ao argumentar por um financiamento equilibrado, qual frase melhor introduz uma demanda formal?"
            },
            "options": [
              "I think we need to give money to both.",
              "It is imperative that resources be allocated to diverse art forms.",
              "We should consider all types of art."
            ],
            "answer": "It is imperative that resources be allocated to diverse art forms.",
            "explanation": {
              "en": "'It is imperative that...' followed by the subjunctive 'be allocated' is a strong and formal way to express a demand.",
              "pt": "'It is imperative that...' seguido do subjuntivo 'be allocated' é uma forma forte e formal de expressar uma demanda."
            }
          },
          {
            "id": "comm-u18-act3-q2",
            "prompt": {
              "en": "Which statement demonstrates an understanding of the debate's nuances regarding art funding?",
              "pt": "Qual afirmação demonstra uma compreensão das nuances do debate sobre o financiamento da arte?"
            },
            "options": [
              "Only popular art deserves funding because it reaches more people.",
              "Niche art is superior and should receive all funding.",
              "While popular art has broad appeal, it's also crucial that experimental forms be supported to push creative boundaries."
            ],
            "answer": "While popular art has broad appeal, it's also crucial that experimental forms be supported to push creative boundaries.",
            "explanation": {
              "en": "This statement acknowledges the value of both popular and experimental art, presenting a balanced and nuanced perspective.",
              "pt": "Esta afirmação reconhece o valor tanto da arte popular quanto da experimental, apresentando uma perspectiva equilibrada e com nuances."
            }
          }
        ]
      }
    ],
    "challenge": {
      "id": "comm-u18-challenge",
      "title": {
        "en": "Presenting a Proposal for a New Arts Initiative",
        "pt": "Apresentar uma Proposta para uma Nova Iniciativa Artística"
      },
      "instruction": {
        "en": "Imagine you are presenting a proposal to a city council for a new community arts initiative. Prepare a short speech (2-3 minutes) outlining your proposal. Ensure you use at least four subjunctive clauses for recommendations and demands, incorporate five vocabulary words related to 'Arts Entertainment', and employ 'expressing nuance' to address potential concerns. Present your speech to a partner or record it.",
        "pt": "Imagine que você está apresentando uma proposta a um conselho municipal para uma nova iniciativa de artes comunitárias. Prepare um breve discurso (2-3 minutos) delineando sua proposta. Certifique-se de usar pelo menos quatro orações subjuntivas para recomendações e exigências, incorpore cinco palavras do vocabulário relacionado a 'Artes e Entretenimento', e empregue 'expressar nuances' para abordar preocupações potenciais. Apresente seu discurso a um parceiro ou grave-o."
      },
      "phrases": [
        {
          "en": "It is imperative that this initiative be approved.",
          "pt": "É imperativo que esta iniciativa seja aprovada."
        },
        {
          "en": "We request that the council consider the long-term benefits.",
          "pt": "Solicitamos que o conselho considere os benefícios a longo prazo."
        },
        {
          "en": "While some may question the initial investment, there's more to it than that.",
          "pt": "Embora alguns possam questionar o investimento inicial, há mais do que isso."
        }
      ],
      "check": [
        {
          "id": "comm-u18-challenge-q1",
          "prompt": {
            "en": "In your speech, if you demand that the council allocate funds, which structure is correct?",
            "pt": "Em seu discurso, se você exige que o conselho aloque fundos, qual estrutura está correta?"
          },
          "options": [
            "We demand that they will allocate funds.",
            "We demand that they allocate funds.",
            "We demand that they are allocating funds."
          ],
          "answer": "We demand that they allocate funds.",
          "explanation": {
            "en": "After 'demand that', the subjunctive mood requires the base form of the verb, 'allocate'.",
            "pt": "Após 'demand that', o modo subjuntivo exige a forma base do verbo, 'allocate'."
          }
        },
        {
          "id": "comm-u18-challenge-q2",
          "prompt": {
            "en": "When addressing concerns about your proposal's impact, which expression would best convey nuance?",
            "pt": "Ao abordar preocupações sobre o impacto de sua proposta, qual expressão transmitiria melhor a nuance?"
          },
          "options": [
            "There are no problems with this plan.",
            "It's a bit more complicated than it seems, but we have solutions.",
            "This plan is perfect and flawless."
          ],
          "answer": "It's a bit more complicated than it seems, but we have solutions.",
          "explanation": {
            "en": "This expression acknowledges complexity while signaling that a comprehensive approach has been considered, adding nuance to your presentation.",
            "pt": "Esta expressão reconhece a complexidade ao mesmo tempo em que sinaliza que uma abordagem abrangente foi considerada, adicionando nuance à sua apresentação."
          }
        }
      ]
    },
    "lessonReview": {
      "summary": {
        "en": "In this unit, we explored vocabulary for 'Arts Entertainment' and learned how to use the subjunctive mood in formal recommendations and demands. We also practiced 'expressing nuance' to communicate more effectively and diplomatically.",
        "pt": "Nesta unidade, exploramos o vocabulário para 'Artes e Entretenimento' e aprendemos a usar o modo subjuntivo em recomendações e exigências formais. Também praticamos 'expressar nuance' para nos comunicar de forma mais eficaz e diplomática."
      },
      "canDo": [
        {
          "en": "Use the subjunctive mood to make formal recommendations and demands about cultural policies.",
          "pt": "Usar o modo subjuntivo para fazer recomendações e exigências formais sobre políticas culturais."
        },
        {
          "en": "Discuss various forms of 'Arts Entertainment' using specific vocabulary.",
          "pt": "Discutir várias formas de 'Artes e Entretenimento' usando vocabulário específico."
        },
        {
          "en": "Employ expressions for 'expressing nuance' to provide balanced and diplomatic opinions.",
          "pt": "Empregar expressões para 'expressar nuance' para fornecer opiniões equilibradas e diplomáticas."
        }
      ],
      "next": {
        "en": "In Unit 19, we will explore the topic of 'Technology and Society' and delve into advanced inversion for emphasis and formality.",
        "pt": "Na Unidade 19, exploraremos o tema 'Tecnologia e Sociedade' e aprofundaremos a inversão avançada para ênfase e formalidade."
      }
    }
  }
},
{
  "code": "UPPER-INTERMEDIATE-U19",
  "number": 19,
  "title": "Technology — Idiomatic expressions for progress and setbacks",
  "titlePt": "Tecnologia — Expressões idiomáticas para descrever progresso e contratempos",
  "cefr": "B2",
  "objective": {
    "en": "To teach technology vocabulary and idiomatic expressions for describing progress and setbacks in a contextualized manner.",
    "pt": "Ensinar vocabulário de tecnologia e expressões idiomáticas para descrever progresso e contratempos de forma contextualizada."
  },
  "communicationGoal": {
    "en": "Students will be able to use 'leadership teamwork' vocabulary and technology terms to communicate in real-world situations.",
    "pt": "O aluno será capaz de usar 'liderança e trabalho em equipe' e o vocabulário de tecnologia para se comunicar em situações reais."
  },
  "prerequisites": {
    "en": "Grammar: Subjunctive mood in formal recommendations and demands. Vocabulary: Arts and Entertainment.",
    "pt": "Estrutura: Subjunctive mood em recomendações e demandas formais. Vocabulário: Artes e Entretenimento."
  },
  "newContent": {
    "en": "Grammar: Idiomatic expressions for describing progress and setbacks. Vocabulary: Technology (10 lexical items). Expressions: Leadership and Teamwork.",
    "pt": "Gramática: Expressões idiomáticas para descrever progresso e contratempos. Vocabulário: Tecnologia (10 itens lexicais). Expressões: Liderança e Trabalho em Equipe."
  },
  "reviewContent": {
    "en": "Spiral review: Advanced collocations for argumentation and debate (Unit 12). Vocabulary review: Technology (Unit 5).",
    "pt": "Revisão em espiral: Advanced collocations para argumentação e debate (Unidade 12). Revisão de vocabulário: Tecnologia (Unidade 5)."
  },
  "discover": {
    "id": "UPPER-INTERMEDIATE-U19-DISCOVER",
    "warmUp": {
      "prompt": {
        "en": "Look at these images showing modern technology. What role does technology play in your daily life and work? How has it impacted teamwork in your experience?",
        "pt": "Observe estas imagens mostrando tecnologia moderna. Que papel a tecnologia desempenha na sua vida diária e no trabalho? Como ela impactou o trabalho em equipe na sua experiência?"
      },
      "phrases": [
        {
          "en": "Technology is integral to my routine.",
          "pt": "A tecnologia é parte integrante da minha rotina."
        },
        {
          "en": "It has revolutionized collaboration.",
          "pt": "Ela revolucionou a colaboração."
        }
      ]
    },
    "context": {
      "situation": {
        "en": "Sarah, a project lead, is having a meeting with her team, Mark and Lisa, to discuss the progress of their new app development project. They are facing some technical challenges but are determined to find solutions together.",
        "pt": "Sarah, líder de projeto, está em uma reunião com sua equipe, Mark e Lisa, para discutir o progresso do projeto de desenvolvimento de um novo aplicativo. Eles estão enfrentando alguns desafios técnicos, mas estão determinados a encontrar soluções juntos."
      },
      "dialogue": [
        {
          "who": "Sarah",
          "en": "Alright team, let's align on the next steps for the 'InnovateApp' project. We've hit a snag with the data migration. Mark, can you give us an update?",
          "pt": "Certo, equipe, vamos nos alinhar sobre os próximos passos para o projeto 'InnovateApp'. Encontramos um obstáculo com a migração de dados. Mark, pode nos dar uma atualização?"
        },
        {
          "who": "Mark",
          "en": "Yes, Sarah. The legacy system's algorithm is proving trickier than expected. We tried an initial software update, but it threw up more errors. It feels like we're back to square one.",
          "pt": "Sim, Sarah. O algoritmo do sistema legado está se mostrando mais complicado do que o esperado. Tentamos uma atualização inicial do software, mas gerou mais erros. Parece que voltamos ao ponto de partida."
        },
        {
          "who": "Lisa",
          "en": "I've been looking into potential solutions for the network integration. I'll take the lead on researching alternative platforms this afternoon. We need to get this device fully operational.",
          "pt": "Tenho pesquisado soluções potenciais para a integração da rede. Eu vou liderar a pesquisa de plataformas alternativas esta tarde. Precisamos deixar este dispositivo totalmente operacional."
        },
        {
          "who": "Sarah",
          "en": "That's a step in the right direction, Lisa. We can't let this hold us back. I believe with our collective innovation, we'll find a way to streamline the artificial intelligence module.",
          "pt": "Esse é um passo na direção certa, Lisa. Não podemos deixar que isso nos atrase. Acredito que com nossa inovação coletiva, encontraremos uma maneira de otimizar o módulo de inteligência artificial."
        },
        {
          "who": "Mark",
          "en": "I agree. We're all on the same page about the urgency. Perhaps we need to think outside the box regarding the app's initial launch features.",
          "pt": "Concordo. Estamos todos na mesma página quanto à urgência. Talvez precisemos pensar de forma não convencional sobre os recursos de lançamento inicial do aplicativo."
        },
        {
          "who": "Sarah",
          "en": "Exactly. Let's regroup tomorrow morning. We'll leverage our team's strengths and get this project back on track. Keep me posted on your findings, Lisa.",
          "pt": "Exatamente. Vamos nos reunir novamente amanhã de manhã. Aproveitaremos os pontos fortes de nossa equipe e colocaremos este projeto de volta nos trilhos. Mantenha-me informada sobre suas descobertas, Lisa."
        }
      ]
    },
    "vocabulary": [
      {
        "term": "device",
        "pt": "dispositivo",
        "ipa": "/dɪˈvaɪs/",
        "definition": "An electronic machine or piece of equipment designed for a particular purpose.",
        "example": "My new tablet is an essential device for work and entertainment.",
        "examplePt": "Meu novo tablet é um dispositivo essencial para trabalho e entretenimento."
      },
      {
        "term": "app",
        "pt": "aplicativo",
        "ipa": "/æp/",
        "definition": "A self-contained program or piece of software designed to fulfill a particular purpose; an application.",
        "example": "I downloaded a new productivity app to help manage my tasks.",
        "examplePt": "Baixei um novo aplicativo de produtividade para me ajudar a gerenciar minhas tarefas."
      },
      {
        "term": "software",
        "pt": "software",
        "ipa": "/ˈsɒftweər/",
        "definition": "The programs and other operating information used by a computer.",
        "example": "We need to install the latest software updates to ensure security.",
        "examplePt": "Precisamos instalar as últimas atualizações de software para garantir a segurança."
      },
      {
        "term": "update",
        "pt": "atualização",
        "ipa": "/ʌpˈdeɪt/",
        "definition": "An act of updating something or making it more modern.",
        "example": "The system requires a security update every month.",
        "examplePt": "O sistema exige uma atualização de segurança todo mês."
      },
      {
        "term": "network",
        "pt": "rede",
        "ipa": "/ˈnɛtwɜːrk/",
        "definition": "A group or system of interconnected people or things.",
        "example": "The company's computer network connects all its global offices.",
        "examplePt": "A rede de computadores da empresa conecta todos os seus escritórios globais."
      },
      {
        "term": "data",
        "pt": "dados",
        "ipa": "/ˈdeɪtə/",
        "definition": "Facts and statistics collected together for reference or analysis.",
        "example": "We need to analyze the sales data to identify new market trends.",
        "examplePt": "Precisamos analisar os dados de vendas para identificar novas tendências de mercado."
      },
      {
        "term": "artificial intelligence",
        "pt": "inteligência artificial",
        "ipa": "/ˌɑːrtɪˈfɪʃl ɪnˈtɛlɪdʒəns/",
        "definition": "The theory and development of computer systems able to perform tasks that normally require human intelligence.",
        "example": "Artificial intelligence is transforming many industries, from healthcare to finance.",
        "examplePt": "A inteligência artificial está transformando muitas indústrias, da saúde às finanças."
      },
      {
        "term": "platform",
        "pt": "plataforma",
        "ipa": "/ˈplætfɔːrm/",
        "definition": "A group of technologies that are used as a base upon which other applications, processes or technologies are developed.",
        "example": "Our new project will be built on a cloud-based platform for scalability.",
        "examplePt": "Nosso novo projeto será construído em uma plataforma baseada em nuvem para escalabilidade."
      },
      {
        "term": "innovation",
        "pt": "inovação",
        "ipa": "/ˌɪnəˈveɪʃn/",
        "definition": "The action or process of innovating, especially by introducing new methods, ideas, or products.",
        "example": "The company prides itself on its continuous innovation in renewable energy.",
        "examplePt": "A empresa se orgulha de sua inovação contínua em energia renovável."
      },
      {
        "term": "algorithm",
        "pt": "algoritmo",
        "ipa": "/ˈælɡərɪðəm/",
        "definition": "A process or set of rules to be followed in calculations or other problem-solving operations, especially by a computer.",
        "example": "Search engines use complex algorithms to rank websites.",
        "examplePt": "Os motores de busca usam algoritmos complexos para classificar sites."
      }
    ],
    "expressions": [
      {
        "en": "Let's align on the next steps.",
        "pt": "Vamos nos alinhar sobre os próximos passos."
      },
      {
        "en": "I'll take the lead on this.",
        "pt": "Eu vou liderar isso."
      },
      {
        "en": "We're all on the same page.",
        "pt": "Estamos todos na mesma página."
      }
    ],
    "grammar": [
      {
        "title": {
          "en": "Idiomatic Expressions for Describing Progress and Setbacks",
          "pt": "Expressões Idiomáticas para Descrever Progresso e Contratempos"
        },
        "examples": [
          {
            "en": "We hit a snag halfway through the project, which delayed us by a week.",
            "pt": "Encontramos um obstáculo no meio do projeto, o que nos atrasou em uma semana."
          },
          {
            "en": "Implementing the new software was a step in the right direction for efficiency.",
            "pt": "Implementar o novo software foi um passo na direção certa para a eficiência."
          },
          {
            "en": "After two failed attempts, it felt like we were back to square one.",
            "pt": "Depois de duas tentativas falhas, parecia que voltamos ao ponto de partida."
          }
        ],
        "rule": {
          "en": "Idiomatic expressions related to progress and setbacks are common in professional and everyday English. They offer vivid ways to describe how a situation is developing, whether positively or negatively. Understanding their contextual meaning is key to effective communication. Examples include 'hit a snag' (encounter a problem), 'a step in the right direction' (a positive development), 'back to square one' (having to start again from the beginning), 'get back on track' (return to normal progress), 'think outside the box' (think creatively), and 'hold us back' (prevent progress).",
          "pt": "Expressões idiomáticas relacionadas a progresso e contratempos são comuns no inglês profissional e cotidiano. Elas oferecem maneiras vívidas de descrever como uma situação está se desenvolvendo, seja positiva ou negativamente. Compreender seu significado contextual é fundamental para uma comunicação eficaz. Exemplos incluem 'hit a snag' (encontrar um problema), 'a step in the right direction' (um desenvolvimento positivo), 'back to square one' (ter que recomeçar do início), 'get back on track' (voltar ao progresso normal), 'think outside the box' (pensar de forma criativa) e 'hold us back' (impedir o progresso)."
        },
        "mistakes": [
          {
            "en": "Using literal translations: 'Hit a difficulty' instead of 'hit a snag'. Idioms are fixed phrases.",
            "pt": "Usar traduções literais: 'Bater uma dificuldade' em vez de 'encontrar um obstáculo'. Idiomas são frases fixas."
          },
          {
            "en": "Confusing similar idioms: 'Go back to zero' instead of 'back to square one'. Each idiom has a specific nuance.",
            "pt": "Confundir idiomas semelhantes: 'Voltar a zero' em vez de 'voltar ao ponto de partida'. Cada idioma tem uma nuance específica."
          }
        ]
      }
    ],
    "controlledPractice": [
      {
        "id": "cp-u19-1",
        "prompt": {
          "en": "Choose the correct idiom to complete the sentence: 'We made good progress, but then we ______ with the server migration.'",
          "pt": "Escolha a expressão idiomática correta para completar a frase: 'Fizemos bom progresso, mas então ______ com a migração do servidor.'"
        },
        "options": [
          "took the lead",
          "hit a snag",
          "were on the same page"
        ],
        "answer": "hit a snag",
        "explanation": {
          "en": "'Hit a snag' means to encounter a problem or difficulty, which fits the context of progress being interrupted by server migration issues.",
          "pt": "'Hit a snag' significa encontrar um problema ou dificuldade, o que se encaixa no contexto de progresso sendo interrompido por problemas de migração de servidor."
        }
      },
      {
        "id": "cp-u19-2",
        "prompt": {
          "en": "Which phrase means 'everyone agrees and understands the situation'?",
          "pt": "Qual frase significa 'todos concordam e entendem a situação'?"
        },
        "options": [
          "Let's align on the next steps.",
          "We're back to square one.",
          "We're all on the same page."
        ],
        "answer": "We're all on the same page.",
        "explanation": {
          "en": "'We're all on the same page' is an idiom used to indicate that everyone involved in a discussion or project is in agreement and has the same understanding.",
          "pt": "'We're all on the same page' é uma expressão idiomática usada para indicar que todos os envolvidos em uma discussão ou projeto estão de acordo e têm o mesmo entendimento."
        }
      },
      {
        "id": "cp-u19-3",
        "prompt": {
          "en": "After the technical issue was resolved, the project manager said, 'Excellent! Now we can finally ______.'",
          "pt": "Após o problema técnico ser resolvido, o gerente de projeto disse: 'Excelente! Agora podemos finalmente ______.'"
        },
        "options": [
          "take the lead",
          "get back on track",
          "hit a snag"
        ],
        "answer": "get back on track",
        "explanation": {
          "en": "'Get back on track' means to return to a normal or expected course of progress after a delay or problem, which is appropriate after a technical issue is resolved.",
          "pt": "'Get back on track' significa retornar a um curso normal ou esperado de progresso após um atraso ou problema, o que é apropriado após a resolução de um problema técnico."
        }
      },
      {
        "id": "cp-u19-4",
        "prompt": {
          "en": "Which of these is a positive expression for progress?",
          "pt": "Qual destas é uma expressão positiva para progresso?"
        },
        "options": [
          "It's a step in the right direction.",
          "We're back to square one.",
          "We've hit a snag."
        ],
        "answer": "It's a step in the right direction.",
        "explanation": {
          "en": "'A step in the right direction' indicates a positive development or progress towards a goal. The other options describe setbacks.",
          "pt": "'A step in the right direction' indica um desenvolvimento positivo ou progresso em direção a um objetivo. As outras opções descrevem contratempos."
        }
      }
    ],
    "input": {
      "kind": "reading",
      "title": {
        "en": "The Future of Teamwork: AI and Collaboration",
        "pt": "O Futuro do Trabalho em Equipe: IA e Colaboração"
      },
      "lines": [
        {
          "en": "The rapid advancement of artificial intelligence (AI) is fundamentally reshaping how teams collaborate and manage projects. AI-powered software and devices are no longer just tools; they are becoming integral partners in the innovation process. From automated data analysis to intelligent project management platforms, these technologies are designed to streamline workflows and predict potential setbacks.",
          "pt": "O rápido avanço da inteligência artificial (IA) está remodelando fundamentalmente como as equipes colaboram e gerenciam projetos. Softwares e dispositivos alimentados por IA não são mais apenas ferramentas; eles estão se tornando parceiros integrais no processo de inovação. Desde a análise automatizada de dados até plataformas inteligentes de gerenciamento de projetos, essas tecnologias são projetadas para otimizar fluxos de trabalho e prever possíveis contratempos."
        },
        {
          "en": "However, integrating new AI algorithms and networks into existing systems isn't always smooth sailing. Teams often hit a snag during the implementation phase, facing challenges with compatibility or needing significant software updates. If not managed carefully, these initial hurdles can make teams feel like they're back to square one, especially when extensive data migration is involved.",
          "pt": "No entanto, integrar novos algoritmos e redes de IA em sistemas existentes nem sempre é fácil. As equipes frequentemente encontram um obstáculo durante a fase de implementação, enfrentando desafios de compatibilidade ou necessitando de atualizações significativas de software. Se não forem gerenciados com cuidado, esses obstáculos iniciais podem fazer com que as equipes se sintam de volta ao ponto de partida, especialmente quando há uma migração extensa de dados envolvida."
        },
        {
          "en": "Effective leadership teamwork is crucial to navigate these complexities. Leaders must ensure that everyone is on the same page regarding the benefits and challenges of AI integration. Encouraging team members to take the lead on exploring new features and providing comprehensive training for the new apps are steps in the right direction.",
          "pt": "Um trabalho em equipe de liderança eficaz é crucial para navegar por essas complexidades. Os líderes devem garantir que todos estejam na mesma página quanto aos benefícios e desafios da integração da IA. Incentivar os membros da equipe a liderar a exploração de novos recursos e fornecer treinamento abrangente para os novos aplicativos são passos na direção certa."
        },
        {
          "en": "Ultimately, the goal is to leverage AI to enhance human capabilities, not replace them. By fostering a culture of continuous learning and adaptability, teams can overcome initial setbacks and truly align on achieving ambitious goals, ensuring AI becomes a powerful catalyst for progress.",
          "pt": "Em última análise, o objetivo é aproveitar a IA para aprimorar as capacidades humanas, não substituí-las. Ao promover uma cultura de aprendizado contínuo e adaptabilidade, as equipes podem superar contratempos iniciais e realmente se alinhar para alcançar objetivos ambiciosos, garantindo que a IA se torne um poderoso catalisador para o progresso."
        },
        {
          "en": "Innovation demands resilience, and with the right approach to technology and teamwork, organizations can turn every challenge into an opportunity for growth.",
          "pt": "A inovação exige resiliência, e com a abordagem certa em relação à tecnologia e ao trabalho em equipe, as organizações podem transformar cada desafio em uma oportunidade de crescimento."
        }
      ],
      "questions": [
        {
          "id": "input-q1",
          "prompt": {
            "en": "According to the text, what is a common challenge when integrating new AI systems?",
            "pt": "De acordo com o texto, qual é um desafio comum ao integrar novos sistemas de IA?"
          },
          "options": [
            "Teams are unwilling to learn new software.",
            "Compatibility issues and significant software updates.",
            "Lack of available AI-powered devices."
          ],
          "answer": "Compatibility issues and significant software updates.",
          "explanation": {
            "en": "The text states: 'Teams often hit a snag during the implementation phase, facing challenges with compatibility or needing significant software updates.'",
            "pt": "O texto afirma: 'As equipes frequentemente encontram um obstáculo durante a fase de implementação, enfrentando desafios de compatibilidade ou necessitando de atualizações significativas de software.'"
          }
        },
        {
          "id": "input-q2",
          "prompt": {
            "en": "What does the idiom 'back to square one' imply in the context of AI integration?",
            "pt": "O que a expressão idiomática 'back to square one' implica no contexto da integração da IA?"
          },
          "options": [
            "Teams are making rapid progress with AI.",
            "Teams have to restart the entire process from the beginning.",
            "Teams are feeling overwhelmed by the sheer amount of data."
          ],
          "answer": "Teams have to restart the entire process from the beginning.",
          "explanation": {
            "en": "'Back to square one' means returning to the very beginning of a process, implying that previous efforts were unsuccessful or negated.",
            "pt": "'Back to square one' significa retornar ao início de um processo, implicando que os esforços anteriores foram malsucedidos ou anulados."
          }
        },
        {
          "id": "input-q3",
          "prompt": {
            "en": "What role does 'effective leadership teamwork' play in successful AI integration?",
            "pt": "Que papel o 'trabalho em equipe de liderança eficaz' desempenha na integração bem-sucedida da IA?"
          },
          "options": [
            "To solely focus on developing new AI algorithms.",
            "To ensure everyone agrees and is trained, turning challenges into opportunities.",
            "To limit the use of AI to avoid potential setbacks."
          ],
          "answer": "To ensure everyone agrees and is trained, turning challenges into opportunities.",
          "explanation": {
            "en": "The text highlights that leaders must ensure everyone is 'on the same page', provide training, and leverage AI to enhance capabilities, turning challenges into growth opportunities.",
            "pt": "O texto destaca que os líderes devem garantir que todos estejam 'na mesma página', fornecer treinamento e aproveitar a IA para aprimorar capacidades, transformando desafios em oportunidades de crescimento."
          }
        }
      ]
    },
    "quickCheck": [
      {
        "id": "qc-u19-1",
        "prompt": {
          "en": "Which term refers to programs and operating information used by a computer?",
          "pt": "Qual termo se refere a programas e informações operacionais usados por um computador?"
        },
        "options": [
          "Device",
          "Software",
          "Network"
        ],
        "answer": "Software",
        "explanation": {
          "en": "'Software' specifically refers to the programs and operating information used by a computer.",
          "pt": "'Software' refere-se especificamente aos programas e informações operacionais usados por um computador."
        }
      },
      {
        "id": "qc-u19-2",
        "prompt": {
          "en": "If a team 'hits a snag', what has happened?",
          "pt": "Se uma equipe 'hit a snag', o que aconteceu?"
        },
        "options": [
          "They have successfully completed a task.",
          "They have encountered an unexpected problem.",
          "They have started a new project."
        ],
        "answer": "They have encountered an unexpected problem.",
        "explanation": {
          "en": "To 'hit a snag' means to meet an unexpected obstacle or difficulty.",
          "pt": "'To hit a snag' significa encontrar um obstáculo ou dificuldade inesperada."
        }
      },
      {
        "id": "qc-u19-3",
        "prompt": {
          "en": "What is the meaning of 'I'll take the lead on this.'?",
          "pt": "Qual é o significado de 'I'll take the lead on this.'?"
        },
        "options": [
          "I will follow someone else's instructions.",
          "I will be responsible for starting and managing this task.",
          "I will share the responsibility equally."
        ],
        "answer": "I will be responsible for starting and managing this task.",
        "explanation": {
          "en": "To 'take the lead' means to assume primary responsibility for something or to be the person who starts and directs an activity.",
          "pt": "'To take the lead' significa assumir a responsabilidade principal por algo ou ser a pessoa que inicia e dirige uma atividade."
        }
      },
      {
        "id": "qc-u19-4",
        "prompt": {
          "en": "What does 'a step in the right direction' describe?",
          "pt": "O que 'a step in the right direction' descreve?"
        },
        "options": [
          "A major setback in a project.",
          "A small but positive advance towards a goal.",
          "A return to the beginning of a process."
        ],
        "answer": "A small but positive advance towards a goal.",
        "explanation": {
          "en": "'A step in the right direction' indicates a positive development, even if it's not the final solution, moving towards the desired outcome.",
          "pt": "'A step in the right direction' indica um desenvolvimento positivo, mesmo que não seja a solução final, movendo-se em direção ao resultado desejado."
        }
      }
    ]
  },
  "communicate": {
    "id": "UPPER-INTERMEDIATE-U19-COMMUNICATE",
    "review": [
      {
        "en": "Review idiomatic expressions for progress and setbacks: 'hit a snag', 'a step in the right direction', 'back to square one', 'get back on track', 'think outside the box', 'hold us back'.",
        "pt": "Revisar expressões idiomáticas para progresso e contratempos: 'hit a snag', 'a step in the right direction', 'back to square one', 'get back on track', 'think outside the box', 'hold us back'."
      },
      {
        "en": "Recall key technology vocabulary: device, app, software, update, network, data, artificial intelligence, platform, innovation, algorithm.",
        "pt": "Relembrar vocabulário chave de tecnologia: device, app, software, update, network, data, artificial intelligence, platform, innovation, algorithm."
      },
      {
        "en": "Revisit leadership teamwork expressions: 'Let's align on the next steps.', 'I'll take the lead on this.', 'We're all on the same page.'",
        "pt": "Revisitar expressões de liderança e trabalho em equipe: 'Let's align on the next steps.', 'I'll take the lead on this.', 'We're all on the same page.'"
      }
    ],
    "activities": [
      {
        "id": "comm-act-1",
        "title": {
          "en": "Write a Formal Email: Project Update",
          "pt": "Escrever um E-mail Formal: Atualização de Projeto"
        },
        "instruction": {
          "en": "Write a formal email to your manager providing an update on a project that has encountered a significant technical setback (e.g., related to network, software, or data). In your email, explain the challenge, suggest a solution, and use at least two idiomatic expressions for setbacks/progress and one leadership teamwork expression. Conclude with a positive outlook.",
          "pt": "Escreva um e-mail formal para seu gerente, fornecendo uma atualização sobre um projeto que encontrou um contratempo técnico significativo (por exemplo, relacionado à rede, software ou dados). No seu e-mail, explique o desafio, sugira uma solução e use pelo menos duas expressões idiomáticas para contratempos/progresso e uma expressão de liderança e trabalho em equipe. Conclua com uma perspectiva positiva."
        },
        "phrases": [
          {
            "en": "We hit a snag with...",
            "pt": "Encontramos um obstáculo com..."
          },
          {
            "en": "This is a step in the right direction.",
            "pt": "Este é um passo na direção certa."
          },
          {
            "en": "I'll take the lead on...",
            "pt": "Eu vou liderar..."
          }
        ],
        "check": [
          {
            "id": "act1-check1",
            "prompt": {
              "en": "What is the primary purpose of this activity?",
              "pt": "Qual é o objetivo principal desta atividade?"
            },
            "options": [
              "To criticize the project manager.",
              "To formally update on project status using specific idioms and expressions.",
              "To request a new budget for the project."
            ],
            "answer": "To formally update on project status using specific idioms and expressions.",
            "explanation": {
              "en": "The instruction specifies writing a formal email to update the manager, incorporating idiomatic and leadership teamwork expressions.",
              "pt": "A instrução especifica escrever um e-mail formal para atualizar o gerente, incorporando expressões idiomáticas e de trabalho em equipe."
            }
          },
          {
            "id": "act1-check2",
            "prompt": {
              "en": "How many idiomatic expressions for setbacks/progress are required?",
              "pt": "Quantas expressões idiomáticas para contratempos/progresso são exigidas?"
            },
            "options": [
              "One",
              "At least two",
              "Three or more"
            ],
            "answer": "At least two",
            "explanation": {
              "en": "The instruction explicitly states 'use at least two idiomatic expressions for setbacks/progress'.",
              "pt": "A instrução afirma explicitamente 'use pelo menos duas expressões idiomáticas para contratempos/progresso'."
            }
          }
        ]
      },
      {
        "id": "comm-act-2",
        "title": {
          "en": "Role-play a Team Meeting: Overcoming a Tech Challenge",
          "pt": "Role-play de uma Reunião de Equipe: Superando um Desafio Tecnológico"
        },
        "instruction": {
          "en": "In pairs or small groups, role-play a team meeting where you discuss a critical technical challenge related to a new app or artificial intelligence implementation. One person will act as the project lead. Discuss the problem, propose solutions, and use vocabulary related to technology, idiomatic expressions for progress/setbacks, and leadership teamwork expressions naturally. Aim to 'get back on track'.",
          "pt": "Em pares ou pequenos grupos, faça um role-play de uma reunião de equipe onde você discute um desafio técnico crítico relacionado a um novo aplicativo ou implementação de inteligência artificial. Uma pessoa atuará como líder do projeto. Discuta o problema, proponha soluções e use vocabulário relacionado à tecnologia, expressões idiomáticas para progresso/contratempos e expressões de liderança e trabalho em equipe naturalmente. O objetivo é 'voltar ao caminho certo'."
        },
        "phrases": [
          {
            "en": "We're all on the same page about this.",
            "pt": "Estamos todos na mesma página sobre isso."
          },
          {
            "en": "This might be a step in the right direction.",
            "pt": "Isso pode ser um passo na direção certa."
          },
          {
            "en": "We need to get this project back on track.",
            "pt": "Precisamos colocar este projeto de volta nos trilhos."
          }
        ],
        "check": [
          {
            "id": "act2-check1",
            "prompt": {
              "en": "What is the main goal of the role-play?",
              "pt": "Qual é o objetivo principal do role-play?"
            },
            "options": [
              "To assign blame for the setback.",
              "To practice negotiating salaries.",
              "To discuss and find solutions to a technical challenge using target language."
            ],
            "answer": "To discuss and find solutions to a technical challenge using target language.",
            "explanation": {
              "en": "The activity focuses on discussing a technical challenge, proposing solutions, and using the learned vocabulary and expressions.",
              "pt": "A atividade foca em discutir um desafio técnico, propor soluções e usar o vocabulário e as expressões aprendidas."
            }
          },
          {
            "id": "act2-check2",
            "prompt": {
              "en": "What kind of expressions should be used 'naturally'?",
              "pt": "Que tipo de expressões devem ser usadas 'naturalmente'?"
            },
            "options": [
              "Only informal slang.",
              "Technology vocabulary, idioms for progress/setbacks, and leadership teamwork expressions.",
              "Expressions for anger and frustration."
            ],
            "answer": "Technology vocabulary, idioms for progress/setbacks, and leadership teamwork expressions.",
            "explanation": {
              "en": "The instruction clearly lists 'vocabulary related to technology, idiomatic expressions for progress/setbacks, and leadership teamwork expressions'.",
              "pt": "A instrução lista claramente 'vocabulário relacionado à tecnologia, expressões idiomáticas para progresso/contratempos e expressões de liderança e trabalho em equipe'."
            }
          }
        ]
      },
      {
        "id": "comm-act-3",
        "title": {
          "en": "Discuss: The Impact of AI on Future Work",
          "pt": "Discutir: O Impacto da IA no Trabalho Futuro"
        },
        "instruction": {
          "en": "Discuss in groups: How do you envision artificial intelligence impacting various industries in the next 5-10 years? Consider both potential progress and possible setbacks, using appropriate idiomatic expressions and technology vocabulary. What role will human leadership and teamwork play in navigating this future?",
          "pt": "Discuta em grupos: Como você prevê que a inteligência artificial impactará várias indústrias nos próximos 5-10 anos? Considere tanto o progresso potencial quanto os possíveis contratempos, usando expressões idiomáticas apropriadas e vocabulário de tecnologia. Que papel a liderança humana e o trabalho em equipe desempenharão na navegação deste futuro?"
        },
        "phrases": [
          {
            "en": "AI is a massive step in the right direction.",
            "pt": "A IA é um grande passo na direção certa."
          },
          {
            "en": "We might hit a snag with ethical considerations.",
            "pt": "Podemos encontrar um obstáculo com considerações éticas."
          },
          {
            "en": "Leadership will be crucial to ensure we're all on the same page.",
            "pt": "A liderança será crucial para garantir que estamos todos na mesma página."
          }
        ],
        "check": [
          {
            "id": "act3-check1",
            "prompt": {
              "en": "What should be discussed in relation to AI's impact?",
              "pt": "O que deve ser discutido em relação ao impacto da IA?"
            },
            "options": [
              "Only the negative consequences.",
              "Only the positive advancements.",
              "Both potential progress and possible setbacks."
            ],
            "answer": "Both potential progress and possible setbacks.",
            "explanation": {
              "en": "The instruction asks to consider 'both potential progress and possible setbacks' when discussing AI's impact.",
              "pt": "A instrução pede para considerar 'tanto o progresso potencial quanto os possíveis contratempos' ao discutir o impacto da IA."
            }
          },
          {
            "id": "act3-check2",
            "prompt": {
              "en": "Which vocabulary types are explicitly required for this discussion?",
              "pt": "Quais tipos de vocabulário são explicitamente exigidos para esta discussão?"
            },
            "options": [
              "Slang and informal greetings.",
              "Idiomatic expressions and technology vocabulary.",
              "Medical terminology and legal jargon."
            ],
            "answer": "Idiomatic expressions and technology vocabulary.",
            "explanation": {
              "en": "The instruction specifies 'using appropriate idiomatic expressions and technology vocabulary'.",
              "pt": "A instrução especifica 'usando expressões idiomáticas apropriadas e vocabulário de tecnologia'."
            }
          }
        ]
      }
    ],
    "challenge": {
      "id": "comm-chal-1",
      "title": {
        "en": "Develop a Project Recovery Plan",
        "pt": "Desenvolver um Plano de Recuperação de Projeto"
      },
      "instruction": {
        "en": "Imagine your team's innovative new app has encountered a critical algorithm failure just before its launch. As the project lead, you need to quickly draft a recovery plan to present to stakeholders. Your plan must identify the setback, propose immediate and long-term solutions, and reassure stakeholders that the team is capable of getting the project back on track. Use a minimum of three idiomatic expressions for progress/setbacks, two technology vocabulary terms, and two leadership teamwork expressions. Present your plan briefly.",
        "pt": "Imagine que o novo aplicativo inovador de sua equipe encontrou uma falha crítica de algoritmo pouco antes de seu lançamento. Como líder de projeto, você precisa elaborar rapidamente um plano de recuperação para apresentar aos stakeholders. Seu plano deve identificar o contratempo, propor soluções imediatas e de longo prazo e tranquilizar os stakeholders de que a equipe é capaz de colocar o projeto de volta nos trilhos. Use um mínimo de três expressões idiomáticas para progresso/contratempos, dois termos de vocabulário de tecnologia e duas expressões de liderança e trabalho em equipe. Apresente seu plano brevemente."
      },
      "phrases": [
        {
          "en": "We've unfortunately hit a snag.",
          "pt": "Infelizmente, encontramos um obstáculo."
        },
        {
          "en": "This is a clear step in the right direction.",
          "pt": "Este é um claro passo na direção certa."
        },
        {
          "en": "I'll take the lead on coordinating this.",
          "pt": "Eu vou liderar a coordenação disso."
        }
      ],
      "check": [
        {
          "id": "chal-check1",
          "prompt": {
            "en": "What is the primary objective of drafting the recovery plan?",
            "pt": "Qual é o objetivo principal de elaborar o plano de recuperação?"
          },
          "options": [
            "To assign blame for the algorithm failure.",
            "To identify setbacks, propose solutions, and reassure stakeholders.",
            "To cancel the project due to the failure."
          ],
          "answer": "To identify setbacks, propose solutions, and reassure stakeholders.",
          "explanation": {
            "en": "The instruction specifies identifying the setback, proposing solutions, and reassuring stakeholders about getting the project back on track.",
            "pt": "A instrução especifica identificar o contratempo, propor soluções e tranquilizar os stakeholders sobre como colocar o projeto de volta nos trilhos."
          }
        },
        {
          "id": "chal-check2",
          "prompt": {
            "en": "How many leadership teamwork expressions are required in the plan?",
            "pt": "Quantas expressões de liderança e trabalho em equipe são exigidas no plano?"
          },
          "options": [
            "One",
            "At least two",
            "Three or more"
          ],
          "answer": "At least two",
          "explanation": {
            "en": "The instruction states to use 'a minimum of... two leadership teamwork expressions'.",
            "pt": "A instrução afirma usar 'um mínimo de... duas expressões de liderança e trabalho em equipe'."
          }
        }
      ]
    },
    "lessonReview": {
      "summary": {
        "en": "In this unit, we explored key technology vocabulary, practiced idiomatic expressions for describing progress and setbacks, and learned important phrases for leadership and teamwork. We applied these in various communication tasks, from writing formal emails to role-playing team meetings and discussing the future of AI.",
        "pt": "Nesta unidade, exploramos vocabulário chave de tecnologia, praticamos expressões idiomáticas para descrever progresso e contratempos e aprendemos frases importantes para liderança e trabalho em equipe. Aplicamos isso em várias tarefas de comunicação, desde a escrita de e-mails formais até o role-play de reuniões de equipe e a discussão do futuro da IA."
      },
      "canDo": [
        {
          "en": "I can identify and use common technology vocabulary in context.",
          "pt": "Consigo identificar e usar vocabulário comum de tecnologia em contexto."
        },
        {
          "en": "I can use idiomatic expressions to describe project progress and setbacks effectively.",
          "pt": "Consigo usar expressões idiomáticas para descrever o progresso e os contratempos do projeto de forma eficaz."
        },
        {
          "en": "I can employ leadership and teamwork expressions to facilitate communication in professional settings.",
          "pt": "Consigo empregar expressões de liderança e trabalho em equipe para facilitar a comunicação em ambientes profissionais."
        }
      ],
      "next": {
        "en": "In Unit 20, we will move on to discuss global issues and humanitarian efforts, focusing on relevant vocabulary and formal language for expressing opinions and proposing solutions.",
        "pt": "Na Unidade 20, avançaremos para discutir questões globais e esforços humanitários, focando em vocabulário relevante e linguagem formal para expressar opiniões e propor soluções."
      }
    }
  }
},
{
  "code": "UPPER-INTERMEDIATE-U20",
  "number": 20,
  "title": "Advanced Conditional Variations for Environmental Analysis",
  "titlePt": "Variações Condicionais Avançadas para Análise Ambiental",
  "cefr": "B2",
  "objective": {
    "en": "To teach environment-related vocabulary and advanced conditional variations (unless, as long as, in case, provided that) in a contextualized manner.",
    "pt": "Ensinar vocabulário relacionado ao meio ambiente e variações condicionais avançadas (unless, as long as, in case, provided that) de forma contextualizada."
  },
  "communicationGoal": {
    "en": "Students will be able to use 'analysis' and environmental vocabulary to communicate in real-life situations.",
    "pt": "O aluno será capaz de usar 'análise' e o vocabulário de meio ambiente para se comunicar em situações reais."
  },
  "prerequisites": {
    "en": "Idiomatic expressions for describing progress and setbacks. Vocabulary: Technology.",
    "pt": "Estrutura: Expressões idiomáticas para descrever progresso e contratempos. Vocabulário: Tecnologia."
  },
  "newContent": {
    "en": "Grammar: Advanced conditional variations (unless, as long as, in case, provided that). Vocabulary: Environment (10 lexical items). Expressions: Analysis.",
    "pt": "Grammar: Variações condicionais avançadas (unless, as long as, in case, provided that). Vocabulário: Meio ambiente (10 itens lexicais). Expressões: Análise."
  },
  "reviewContent": {
    "en": "Spiral review: Participle clauses for concise, sophisticated sentence structures (Unit 13). Vocabulary review: Environment (Unit 6).",
    "pt": "Revisão em espiral: Orações participiais para estruturas de frases concisas e sofisticadas (Unidade 13). Revisão de vocabulário: Meio ambiente (Unidade 6)."
  },
  "discover": {
    "id": "UPPER-INTERMEDIATE-U20-DISCOVER",
    "warmUp": {
      "prompt": {
        "en": "Look at these images showing different environmental issues. What immediate thoughts or feelings do they evoke in you?",
        "pt": "Observe estas imagens mostrando diferentes questões ambientais. Que pensamentos ou sentimentos imediatos elas evocam em você?"
      },
      "phrases": [
        {
          "en": "What do you think is the most pressing environmental issue facing our planet today?",
          "pt": "Qual você acha que é a questão ambiental mais urgente que nosso planeta enfrenta hoje?"
        },
        {
          "en": "How do you believe individual actions can contribute to or alleviate environmental problems?",
          "pt": "Como você acredita que as ações individuais podem contribuir ou amenizar os problemas ambientais?"
        }
      ]
    },
    "context": {
      "situation": {
        "en": "Dr. Anya Sharma, an environmental scientist, is discussing a new policy proposal with Liam, a policy analyst, focusing on its potential environmental impact.",
        "pt": "A Dra. Anya Sharma, uma cientista ambiental, está discutindo uma nova proposta de política com Liam, um analista de políticas, focando em seu potencial impacto ambiental."
      },
      "dialogue": [
        {
          "who": "Dr. Sharma",
          "en": "So, Liam, what's your initial take on the proposed industrial waste management policy?",
          "pt": "Então, Liam, qual é a sua primeira impressão sobre a proposta de política de gestão de resíduos industriais?"
        },
        {
          "who": "Liam",
          "en": "Well, Dr. Sharma, I've conducted an initial analysis. The implications are significant, particularly for local ecosystems.",
          "pt": "Bem, Dra. Sharma, eu realizei uma análise inicial. As implicações são significativas, particularmente para os ecossistemas locais."
        },
        {
          "who": "Dr. Sharma",
          "en": "I see. Let's delve into the details. Will it genuinely reduce pollution, or are we just shifting the problem?",
          "pt": "Entendo. Vamos nos aprofundar nos detalhes. Isso realmente reduzirá a poluição, ou estamos apenas transferindo o problema?"
        },
        {
          "who": "Liam",
          "en": "Unless the regulations are strictly enforced, companies might find loopholes. This trend is worth examining closely.",
          "pt": "A menos que as regulamentações sejam estritamente aplicadas, as empresas podem encontrar brechas. Essa tendência merece uma análise mais aprofundada."
        },
        {
          "who": "Dr. Sharma",
          "en": "Indeed. And what about the sustainability aspect? Provided that we secure sufficient funding for renewable energy infrastructure, we could make real progress.",
          "pt": "De fato. E quanto ao aspecto da sustentabilidade? Desde que garantamos financiamento suficiente para a infraestrutura de energia renovável, poderíamos fazer um progresso real."
        },
        {
          "who": "Liam",
          "en": "Exactly. In case of unexpected resistance from industry, we'll need a contingency plan. We can't afford to waste this opportunity.",
          "pt": "Exatamente. Em caso de resistência inesperada da indústria, precisaremos de um plano de contingência. Não podemos nos dar ao luxo de desperdiçar esta oportunidade."
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
        "example": "Many communities have initiatives to encourage proper recycling of plastics and paper.",
        "examplePt": "Muitas comunidades têm iniciativas para incentivar a reciclagem adequada de plásticos e papel."
      },
      {
        "term": "sustainability",
        "pt": "sustentabilidade",
        "ipa": "/səsˌteɪnəˈbɪləti/",
        "definition": "The ability to be maintained at a certain rate or level; avoidance of the depletion of natural resources in order to maintain an ecological balance.",
        "example": "Achieving true sustainability requires a balance between economic growth and environmental protection.",
        "examplePt": "Alcançar a verdadeira sustentabilidade requer um equilíbrio entre o crescimento econômico e a proteção ambiental."
      },
      {
        "term": "climate",
        "pt": "clima",
        "ipa": "/ˈklaɪmət/",
        "definition": "The weather conditions prevailing in an area in general or over a long period.",
        "example": "The earth's climate is changing rapidly due to human activities.",
        "examplePt": "O clima da Terra está mudando rapidamente devido às atividades humanas."
      },
      {
        "term": "resources",
        "pt": "recursos",
        "ipa": "/rɪˈsɔːrsɪz/",
        "definition": "A stock or supply of money, materials, staff, and other assets that can be drawn on by a person or organization in order to function effectively.",
        "example": "Natural resources like water and forests are essential for human survival.",
        "examplePt": "Recursos naturais como água e florestas são essenciais para a sobrevivência humana."
      },
      {
        "term": "ecosystem",
        "pt": "ecossistema",
        "ipa": "/ˈiːkoʊˌsɪstəm/",
        "definition": "A biological community of interacting organisms and their physical environment.",
        "example": "The Amazon rainforest is a vast and complex ecosystem home to countless species.",
        "examplePt": "A floresta amazônica é um ecossistema vasto e complexo, lar de inúmeras espécies."
      },
      {
        "term": "conservation",
        "pt": "conservação",
        "ipa": "/ˌkɒnsərˈveɪʃən/",
        "definition": "The protection of animals, plants, and natural resources.",
        "example": "Wildlife conservation efforts aim to protect endangered species from extinction.",
        "examplePt": "Os esforços de conservação da vida selvagem visam proteger espécies ameaçadas de extinção."
      },
      {
        "term": "renewable",
        "pt": "renovável",
        "ipa": "/rɪˈnuːəbəl/",
        "definition": "(Of a natural resource or source of energy) not depleted when used.",
        "example": "Solar and wind power are examples of renewable energy sources.",
        "examplePt": "A energia solar e eólica são exemplos de fontes de energia renovável."
      },
      {
        "term": "waste",
        "pt": "lixo/resíduo",
        "ipa": "/weɪst/",
        "definition": "Unwanted or unusable material, substances, or by-products.",
        "example": "Proper management of industrial waste is crucial to prevent environmental damage.",
        "examplePt": "O gerenciamento adequado do lixo industrial é crucial para evitar danos ambientais."
      },
      {
        "term": "impact",
        "pt": "impacto",
        "ipa": "/ˈɪmpækt/",
        "definition": "The effect or influence of one person, thing, or action on another.",
        "example": "The new factory will have a significant environmental impact on the local area.",
        "examplePt": "A nova fábrica terá um impacto ambiental significativo na área local."
      }
    ],
    "expressions": [
      {
        "en": "Let's delve into the details.",
        "pt": "Vamos nos aprofundar nos detalhes."
      },
      {
        "en": "This trend is worth examining closely.",
        "pt": "Essa tendência merece uma análise mais aprofundada."
      },
      {
        "en": "The implications are significant.",
        "pt": "As implicações são significativas."
      }
    ],
    "grammar": [
      {
        "title": {
          "en": "Advanced Conditional Variations",
          "pt": "Variações Condicionais Avançadas"
        },
        "examples": [
          {
            "en": "Unless we act now, climate change will worsen dramatically.",
            "pt": "A menos que agimos agora, as mudanças climáticas piorarão drasticamente."
          },
          {
            "en": "As long as communities support recycling, waste management will improve.",
            "pt": "Contanto que as comunidades apoiem a reciclagem, a gestão de resíduos melhorará."
          },
          {
            "en": "In case of an oil spill, immediate emergency protocols must be followed.",
            "pt": "Em caso de derramamento de óleo, protocolos de emergência imediatos devem ser seguidos."
          },
          {
            "en": "Provided that governments invest in renewable energy, we can achieve carbon neutrality.",
            "pt": "Desde que os governos invistam em energia renovável, podemos alcançar a neutralidade de carbono."
          }
        ],
        "rule": {
          "en": "These advanced conditional variations introduce conditions or circumstances for an action or consequence. 'Unless' means 'if not'. 'As long as' implies 'only if' or 'provided that'. 'In case' refers to taking precautions for a possible future event. 'Provided that' or 'providing that' means 'on condition that' or 'if and only if'. They offer nuanced ways to express dependencies.",
          "pt": "Essas variações condicionais avançadas introduzem condições ou circunstâncias para uma ação ou consequência. 'Unless' significa 'se não'. 'As long as' implica 'somente se' ou 'desde que'. 'In case' refere-se a tomar precauções para um possível evento futuro. 'Provided that' ou 'providing that' significa 'sob a condição de que' ou 'se e somente se'. Elas oferecem maneiras sutis de expressar dependências."
        },
        "mistakes": [
          {
            "en": "Incorrect use of 'unless' for positive conditions: *'Unless you study, you will pass.' (Should be 'If you study, you will pass.')",
            "pt": "Uso incorreto de 'unless' para condições positivas: *'Unless you study, you will pass.' (Correto seria 'If you study, you will pass.')"
          },
          {
            "en": "Confusing 'in case' with 'if': *'Bring an umbrella if it rains.' (Predicts rain). 'Bring an umbrella in case it rains.' (Prepares for possibility).",
            "pt": "Confundir 'in case' com 'if': *'Bring an umbrella if it rains.' (Prevê chuva). 'Bring an umbrella in case it rains.' (Prepara para a possibilidade)."
          }
        ]
      }
    ],
    "controlledPractice": [
      {
        "id": "u20-cp-1",
        "prompt": {
          "en": "Choose the best option: _______ we reduce our carbon footprint, global temperatures will continue to rise.",
          "pt": "Escolha a melhor opção: _______ reduzirmos nossa pegada de carbono, as temperaturas globais continuarão a subir."
        },
        "options": [
          "As long as",
          "Unless",
          "In case"
        ],
        "answer": "Unless",
        "explanation": {
          "en": "'Unless' means 'if not'. The sentence implies that if we do not reduce our carbon footprint, temperatures will rise.",
          "pt": "'Unless' significa 'se não'. A frase implica que se não reduzirmos nossa pegada de carbono, as temperaturas subirão."
        }
      },
      {
        "id": "u20-cp-2",
        "prompt": {
          "en": "Complete the sentence: We must protect this unique ecosystem, _______ we want to preserve its biodiversity.",
          "pt": "Complete a frase: Devemos proteger este ecossistema único, _______ quisermos preservar sua biodiversidade."
        },
        "options": [
          "in case",
          "unless",
          "as long as"
        ],
        "answer": "as long as",
        "explanation": {
          "en": "'As long as' correctly sets the condition for protecting the ecosystem, meaning 'only if' we want to preserve biodiversity.",
          "pt": "'As long as' estabelece corretamente a condição para proteger o ecossistema, significando 'somente se' quisermos preservar a biodiversidade."
        }
      },
      {
        "id": "u20-cp-3",
        "prompt": {
          "en": "Choose the best option: Environmental conservation efforts will succeed _______ there is strong public and governmental support.",
          "pt": "Escolha a melhor opção: Os esforços de conservação ambiental terão sucesso _______ houver forte apoio público e governamental."
        },
        "options": [
          "unless",
          "in case",
          "provided that"
        ],
        "answer": "provided that",
        "explanation": {
          "en": "'Provided that' specifies the necessary condition for success, meaning 'on the condition that' there is support.",
          "pt": "'Provided that' especifica a condição necessária para o sucesso, significando 'sob a condição de que' haja apoio."
        }
      },
      {
        "id": "u20-cp-4",
        "prompt": {
          "en": "Fill in the blank: Please turn off all lights _______ you leave the room to save energy.",
          "pt": "Preencha a lacuna: Por favor, apague todas as luzes _______ você sair da sala para economizar energia."
        },
        "options": [
          "unless",
          "in case",
          "as long as"
        ],
        "answer": "in case",
        "explanation": {
          "en": "'In case' is used here to indicate a precautionary action taken for a potential future event (leaving the room), ensuring energy saving.",
          "pt": "'In case' é usado aqui para indicar uma ação preventiva tomada para um possível evento futuro (sair da sala), garantindo a economia de energia."
        }
      }
    ],
    "input": {
      "kind": "listening",
      "title": {
        "en": "Urban Farming Initiative",
        "pt": "Iniciativa de Agricultura Urbana"
      },
      "lines": [
        {
          "en": "Interviewer: Today, we're talking to Sarah, the coordinator of the 'Green Spaces' urban farming initiative. Sarah, welcome. Can you tell us about the project?",
          "pt": "Entrevistador: Hoje, conversamos com Sarah, coordenadora da iniciativa de agricultura urbana 'Espaços Verdes'. Sarah, bem-vinda. Pode nos falar sobre o projeto?"
        },
        {
          "en": "Sarah: Thanks for having me. 'Green Spaces' aims to convert unused urban areas into productive gardens. Our main goal is to promote sustainability and local food security. We believe that unless communities get involved, these projects won't truly flourish.",
          "pt": "Sarah: Obrigada por me receber. 'Espaços Verdes' visa converter áreas urbanas não utilizadas em jardins produtivos. Nosso principal objetivo é promover a sustentabilidade e a segurança alimentar local. Acreditamos que, a menos que as comunidades se envolvam, esses projetos não florescerão verdadeiramente."
        },
        {
          "who": "Interviewer",
          "en": "That's a fantastic idea. What are some of the challenges you face?",
          "pt": "É uma ideia fantástica. Quais são alguns dos desafios que vocês enfrentam?"
        },
        {
          "who": "Sarah",
          "en": "Funding is always a challenge. Provided that we secure enough grants, we can expand our operations significantly. Also, educating people on how to grow their own food and reduce waste is key. We offer workshops in case people need practical guidance.",
          "pt": "O financiamento é sempre um desafio. Desde que garantamos subsídios suficientes, podemos expandir nossas operações significativamente. Além disso, educar as pessoas sobre como cultivar sua própria comida e reduzir o lixo é fundamental. Oferecemos workshops caso as pessoas precisem de orientação prática."
        },
        {
          "who": "Interviewer",
          "en": "And what about the impact? Are you seeing tangible results?",
          "pt": "E quanto ao impacto? Vocês estão vendo resultados tangíveis?"
        },
        {
          "who": "Sarah",
          "en": "Absolutely. As long as we continue to engage residents, we're seeing healthier diets, stronger community bonds, and a noticeable reduction in urban waste sent to landfills. The implications are significant for urban planning and resource management.",
          "pt": "Com certeza. Contanto que continuemos a envolver os moradores, estamos vendo dietas mais saudáveis, laços comunitários mais fortes e uma redução notável de resíduos urbanos enviados para aterros. As implicações são significativas para o planejamento urbano e a gestão de recursos."
        }
      ],
      "questions": [
        {
          "id": "u20-lq-1",
          "prompt": {
            "en": "What is the main goal of the 'Green Spaces' initiative?",
            "pt": "Qual é o principal objetivo da iniciativa 'Espaços Verdes'?"
          },
          "options": [
            "To build new houses in urban areas.",
            "To promote sustainability and local food security.",
            "To attract more tourists to the city."
          ],
          "answer": "To promote sustainability and local food security.",
          "explanation": {
            "en": "Sarah clearly states, 'Our main goal is to promote sustainability and local food security.'",
            "pt": "Sarah afirma claramente: 'Nosso principal objetivo é promover a sustentabilidade e a segurança alimentar local.'"
          }
        },
        {
          "id": "u20-lq-2",
          "prompt": {
            "en": "What condition does Sarah mention for the expansion of 'Green Spaces' operations?",
            "pt": "Que condição Sarah menciona para a expansão das operações do 'Espaços Verdes'?"
          },
          "options": [
            "Unless more volunteers join the team.",
            "Provided that they secure enough grants.",
            "As long as local businesses contribute."
          ],
          "answer": "Provided that they secure enough grants.",
          "explanation": {
            "en": "Sarah says, 'Provided that we secure enough grants, we can expand our operations significantly.'",
            "pt": "Sarah diz: 'Desde que garantamos subsídios suficientes, podemos expandir nossas operações significativamente.'"
          }
        },
        {
          "id": "u20-lq-3",
          "prompt": {
            "en": "What positive impacts has the initiative observed?",
            "pt": "Quais impactos positivos a iniciativa observou?"
          },
          "options": [
            "Increased land value and commercial growth.",
            "Healthier diets, stronger community bonds, and reduced urban waste.",
            "More job opportunities in the agricultural sector."
          ],
          "answer": "Healthier diets, stronger community bonds, and reduced urban waste.",
          "explanation": {
            "en": "Sarah lists 'healthier diets, stronger community bonds, and a noticeable reduction in urban waste' as results.",
            "pt": "Sarah lista 'dietas mais saudáveis, laços comunitários mais fortes e uma redução notável de resíduos urbanos' como resultados."
          }
        }
      ]
    },
    "quickCheck": [
      {
        "id": "u20-qc-1",
        "prompt": {
          "en": "Which conditional phrase indicates a necessary condition for something to happen, similar to 'if and only if'?",
          "pt": "Qual frase condicional indica uma condição necessária para que algo aconteça, semelhante a 'se e somente se'?"
        },
        "options": [
          "In case",
          "Unless",
          "Provided that"
        ],
        "answer": "Provided that",
        "explanation": {
          "en": "'Provided that' specifies a strong condition that must be met for the result to occur.",
          "pt": "'Provided that' especifica uma condição forte que deve ser cumprida para que o resultado ocorra."
        }
      },
      {
        "id": "u20-qc-2",
        "prompt": {
          "en": "Which environmental term refers to the process of converting waste into reusable materials?",
          "pt": "Qual termo ambiental se refere ao processo de conversão de resíduos em materiais reutilizáveis?"
        },
        "options": [
          "Conservation",
          "Pollution",
          "Recycling"
        ],
        "answer": "Recycling",
        "explanation": {
          "en": "Recycling is the process of converting waste materials into new materials and objects.",
          "pt": "Reciclagem é o processo de converter materiais residuais em novos materiais e objetos."
        }
      },
      {
        "id": "u20-qc-3",
        "prompt": {
          "en": "If you want to prepare for a possible future event, which conditional phrase would you use?",
          "pt": "Se você quiser se preparar para um possível evento futuro, qual frase condicional você usaria?"
        },
        "options": [
          "Unless",
          "In case",
          "As long as"
        ],
        "answer": "In case",
        "explanation": {
          "en": "'In case' is used for precautionary measures against a potential future event.",
          "pt": "'In case' é usado para medidas de precaução contra um possível evento futuro."
        }
      },
      {
        "id": "u20-qc-4",
        "prompt": {
          "en": "What expression would you use to indicate that a situation deserves careful examination?",
          "pt": "Que expressão você usaria para indicar que uma situação merece um exame cuidadoso?"
        },
        "options": [
          "The implications are significant.",
          "Let's delve into the details.",
          "This trend is worth examining closely."
        ],
        "answer": "This trend is worth examining closely.",
        "explanation": {
          "en": "This expression directly conveys the idea that a trend or situation requires careful observation and analysis.",
          "pt": "Esta expressão transmite diretamente a ideia de que uma tendência ou situação exige observação e análise cuidadosas."
        }
      }
    ]
  },
  "communicate": {
    "id": "UPPER-INTERMEDIATE-U20-COMMUNICATE",
    "review": [
      {
        "en": "Recall the main environmental vocabulary and the expressions for analysis learned in Part 1.",
        "pt": "Lembre-se do vocabulário ambiental principal e das expressões para análise aprendidas na Parte 1."
      },
      {
        "en": "Practice distinguishing between 'unless,' 'as long as,' 'in case,' and 'provided that' in different scenarios.",
        "pt": "Pratique a distinção entre 'unless', 'as long as', 'in case' e 'provided that' em diferentes cenários."
      },
      {
        "en": "Remember how participle clauses can make your sentences more concise and sophisticated.",
        "pt": "Lembre-se de como as orações participiais podem tornar suas frases mais concisas e sofisticadas."
      }
    ],
    "activities": [
      {
        "id": "u20-act-1",
        "title": {
          "en": "Give a Nuanced Opinion: Environmental Policy Debate",
          "pt": "Dê uma Opinião Nuances: Debate de Políticas Ambientais"
        },
        "instruction": {
          "en": "Work in pairs. You will be assigned an environmental policy (e.g., carbon tax, plastic ban, funding for renewable energy). Discuss the policy's pros and cons, considering its potential impact, and give a nuanced opinion using at least two advanced conditional variations and two vocabulary terms. Support your opinion with reasoned arguments.",
          "pt": "Trabalhe em pares. Você receberá uma política ambiental (por exemplo, imposto de carbono, proibição de plástico, financiamento para energia renovável). Discuta os prós e contras da política, considerando seu impacto potencial, e dê uma opinião com nuances usando pelo menos duas variações condicionais avançadas e dois termos de vocabulário. Apoie sua opinião com argumentos fundamentados."
        },
        "phrases": [
          {
            "en": "Unless we consider all stakeholders, the policy won't be effective.",
            "pt": "A menos que consideremos todas as partes interessadas, a política não será eficaz."
          },
          {
            "en": "Provided that the implementation is well-managed, this could significantly reduce waste.",
            "pt": "Desde que a implementação seja bem gerenciada, isso poderia reduzir significativamente o desperdício."
          },
          {
            "en": "This trend is worth examining closely to understand its long-term sustainability.",
            "pt": "Essa tendência merece uma análise mais aprofundada para entender sua sustentabilidade a longo prazo."
          }
        ],
        "check": [
          {
            "id": "u20-act1-chk-1",
            "prompt": {
              "en": "Which of the following best describes a 'nuanced opinion'?",
              "pt": "Qual das seguintes opções melhor descreve uma 'opinião com nuances'?"
            },
            "options": [
              "A strong, one-sided viewpoint.",
              "An opinion that considers different aspects and complexities.",
              "An opinion based solely on personal feelings."
            ],
            "answer": "An opinion that considers different aspects and complexities.",
            "explanation": {
              "en": "A nuanced opinion acknowledges different perspectives and the complexities of an issue, rather than being simply for or against.",
              "pt": "Uma opinião com nuances reconhece diferentes perspectivas e as complexidades de uma questão, em vez de ser simplesmente a favor ou contra."
            }
          },
          {
            "id": "u20-act1-chk-2",
            "prompt": {
              "en": "What is the primary purpose of using advanced conditional variations in this activity?",
              "pt": "Qual é o principal propósito de usar variações condicionais avançadas nesta atividade?"
            },
            "options": [
              "To make the discussion sound more academic.",
              "To express complex conditions and dependencies in arguments.",
              "To avoid expressing a direct opinion."
            ],
            "answer": "To express complex conditions and dependencies in arguments.",
            "explanation": {
              "en": "Advanced conditionals allow for more sophisticated and precise expression of conditions, crucial for nuanced arguments.",
              "pt": "Condicionais avançados permitem uma expressão mais sofisticada e precisa de condições, cruciais para argumentos com nuances."
            }
          }
        ]
      },
      {
        "id": "u20-act-2",
        "title": {
          "en": "Reflect and Report Back: Climate Action Scenarios",
          "pt": "Reflita e Relate: Cenários de Ação Climática"
        },
        "instruction": {
          "en": "Individually, read one of the provided climate action scenarios (e.g., 'A city implements strict water conservation policies,' 'A company invests heavily in carbon capture technology'). Reflect on its potential outcomes and challenges. Then, in small groups, report back on your scenario, incorporating analysis expressions, environmental vocabulary, and at least three advanced conditional variations.",
          "pt": "Individualmente, leia um dos cenários de ação climática fornecidos (por exemplo, 'Uma cidade implementa políticas rigorosas de conservação da água', 'Uma empresa investe pesadamente em tecnologia de captura de carbono'). Reflita sobre seus potenciais resultados e desafios. Em seguida, em pequenos grupos, relate seu cenário, incorporando expressões de análise, vocabulário ambiental e pelo menos três variações condicionais avançadas."
        },
        "phrases": [
          {
            "en": "Let's delve into the details of how this policy might affect local ecosystems.",
            "pt": "Vamos nos aprofundar nos detalhes de como esta política pode afetar os ecossistemas locais."
          },
          {
            "en": "As long as public engagement remains high, the impact of these changes will be positive.",
            "pt": "Contanto que o engajamento público permaneça alto, o impacto dessas mudanças será positivo."
          },
          {
            "en": "In case of unexpected resistance, we'll need robust communication strategies.",
            "pt": "Em caso de resistência inesperada, precisaremos de estratégias de comunicação robustas."
          }
        ],
        "check": [
          {
            "id": "u20-act2-chk-1",
            "prompt": {
              "en": "What is expected when 'reporting back' on your scenario?",
              "pt": "O que se espera ao 'relatar' seu cenário?"
            },
            "options": [
              "To simply state the facts of the scenario.",
              "To analyze potential outcomes, challenges, and solutions using target language.",
              "To express personal feelings about the scenario without further explanation."
            ],
            "answer": "To analyze potential outcomes, challenges, and solutions using target language.",
            "explanation": {
              "en": "Reporting back involves analysis and integrating the target language (conditionals, vocabulary, expressions) into the discussion.",
              "pt": "Relatar envolve análise e a integração da linguagem-alvo (condicionais, vocabulário, expressões) na discussão."
            }
          },
          {
            "id": "u20-act2-chk-2",
            "prompt": {
              "en": "Why is it important to use 'analysis expressions' in this activity?",
              "pt": "Por que é importante usar 'expressões de análise' nesta atividade?"
            },
            "options": [
              "To make your speech sound more formal.",
              "To signal a deeper examination and interpretation of the information.",
              "To hide the lack of specific data."
            ],
            "answer": "To signal a deeper examination and interpretation of the information.",
            "explanation": {
              "en": "Analysis expressions help in structuring and signaling a thorough examination of the scenario, enhancing the communicative goal.",
              "pt": "As expressões de análise ajudam a estruturar e sinalizar um exame aprofundado do cenário, aprimorando o objetivo comunicativo."
            }
          }
        ]
      },
      {
        "id": "u20-act-3",
        "title": {
          "en": "Debate: Balancing Economic Growth and Environmental Protection",
          "pt": "Debate: Equilibrando Crescimento Econômico e Proteção Ambiental"
        },
        "instruction": {
          "en": "Divide into two teams. One team will argue for prioritizing economic growth, and the other for environmental protection, when discussing a proposed major infrastructure project (e.g., a new airport, a mining operation). Use advanced conditional variations to present your arguments and counter-arguments effectively. The implications are significant for both sides.",
          "pt": "Divida-se em duas equipes. Uma equipe defenderá a priorização do crescimento econômico, e a outra a proteção ambiental, ao discutir um grande projeto de infraestrutura proposto (por exemplo, um novo aeroporto, uma operação de mineração). Use variações condicionais avançadas para apresentar seus argumentos e contra-argumentos de forma eficaz. As implicações são significativas para ambos os lados."
        },
        "phrases": [
          {
            "en": "Unless we invest in this project, economic opportunities will be severely limited.",
            "pt": "A menos que investamos neste projeto, as oportunidades econômicas serão severamente limitadas."
          },
          {
            "en": "Provided that environmental safeguards are rigorously enforced, the impact on local ecosystems can be minimized.",
            "pt": "Desde que as salvaguardas ambientais sejam rigorosamente aplicadas, o impacto nos ecossistemas locais pode ser minimizado."
          },
          {
            "en": "This trend is worth examining closely for its long-term effects on sustainability.",
            "pt": "Essa tendência merece uma análise mais aprofundada por seus efeitos a longo prazo na sustentabilidade."
          }
        ],
        "check": [
          {
            "id": "u20-act3-chk-1",
            "prompt": {
              "en": "What is the primary role of advanced conditional variations in a debate?",
              "pt": "Qual é o papel principal das variações condicionais avançadas em um debate?"
            },
            "options": [
              "To state facts unequivocally.",
              "To present conditions under which arguments are valid or consequences occur.",
              "To show agreement with the opposing team."
            ],
            "answer": "To present conditions under which arguments are valid or consequences occur.",
            "explanation": {
              "en": "Conditionals are crucial in debates for establishing dependencies, exceptions, and requirements for arguments or outcomes.",
              "pt": "Condicionais são cruciais em debates para estabelecer dependências, exceções e requisitos para argumentos ou resultados."
            }
          },
          {
            "id": "u20-act3-chk-2",
            "prompt": {
              "en": "When arguing for environmental protection, which aspect would you most likely emphasize?",
              "pt": "Ao argumentar a favor da proteção ambiental, qual aspecto você provavelmente enfatizaria mais?"
            },
            "options": [
              "Short-term job creation.",
              "The preservation of natural resources and biodiversity.",
              "Increased revenue for local businesses."
            ],
            "answer": "The preservation of natural resources and biodiversity.",
            "explanation": {
              "en": "Environmental protection focuses on safeguarding nature, including its resources and variety of life forms.",
              "pt": "A proteção ambiental se concentra em salvaguardar a natureza, incluindo seus recursos e a variedade de formas de vida."
            }
          }
        ]
      }
    ],
    "challenge": {
      "id": "u20-challenge-1",
      "title": {
        "en": "Environmental Impact Assessment Presentation",
        "pt": "Apresentação de Avaliação de Impacto Ambiental"
      },
      "instruction": {
        "en": "In groups, prepare and deliver a short presentation (3-5 minutes) for a mock city council meeting. Your task is to present an environmental impact assessment for a new development project (e.g., a large housing complex, a new factory). You must identify potential environmental impacts, propose mitigation strategies, and conclude with a recommendation. Integrate at least five environment vocabulary terms, three analysis expressions, and four advanced conditional variations naturally into your presentation.",
        "pt": "Em grupos, prepare e apresente uma breve apresentação (3-5 minutos) para uma reunião simulada da câmara municipal. Sua tarefa é apresentar uma avaliação de impacto ambiental para um novo projeto de desenvolvimento (por exemplo, um grande complexo habitacional, uma nova fábrica). Você deve identificar potenciais impactos ambientais, propor estratégias de mitigação e concluir com uma recomendação. Integre naturalmente pelo menos cinco termos de vocabulário ambiental, três expressões de análise e quatro variações condicionais avançadas em sua apresentação."
      },
      "phrases": [
        {
          "en": "Unless we implement strict waste management protocols, the pollution levels will rise.",
          "pt": "A menos que implementemos protocolos rigorosos de gestão de resíduos, os níveis de poluição aumentarão."
        },
        {
          "en": "Provided that renewable energy sources are integrated, the project's sustainability improves.",
          "pt": "Desde que fontes de energia renovável sejam integradas, a sustentabilidade do projeto melhora."
        },
        {
          "en": "The implications of this development on the local ecosystem are significant; this trend is worth examining closely.",
          "pt": "As implicações deste desenvolvimento no ecossistema local são significativas; essa tendência merece uma análise mais aprofundada."
        }
      ],
      "check": [
        {
          "id": "u20-chall-chk-1",
          "prompt": {
            "en": "What is the expected outcome of delivering an 'Environmental Impact Assessment Presentation'?",
            "pt": "Qual é o resultado esperado ao apresentar uma 'Apresentação de Avaliação de Impacto Ambiental'?"
          },
          "options": [
            "To describe the project's financial benefits.",
            "To identify environmental risks and propose solutions for a development project.",
            "To debate the necessity of the project without offering solutions."
          ],
          "answer": "To identify environmental risks and propose solutions for a development project.",
          "explanation": {
            "en": "An Environmental Impact Assessment focuses on analyzing potential environmental effects and suggesting ways to manage them.",
            "pt": "Uma Avaliação de Impacto Ambiental foca na análise de potenciais efeitos ambientais e na sugestão de formas de gerenciá-los."
          }
        },
        {
          "id": "u20-chall-chk-2",
          "prompt": {
            "en": "Why is it important to use a variety of the target language (vocabulary, expressions, conditionals) in the challenge?",
            "pt": "Por que é importante usar uma variedade da linguagem-alvo (vocabulário, expressões, condicionais) no desafio?"
          },
          "options": [
            "To show off all the new words learned.",
            "To demonstrate comprehensive understanding and fluency in B2 communication.",
            "To make the presentation longer."
          ],
          "answer": "To demonstrate comprehensive understanding and fluency in B2 communication.",
          "explanation": {
            "en": "Using diverse target language elements shows mastery and the ability to apply them contextually, meeting the B2 communication goal.",
            "pt": "Usar diversos elementos da linguagem-alvo demonstra domínio e a capacidade de aplicá-los contextualmente, atingindo o objetivo de comunicação B2."
          }
        }
      ]
    },
    "lessonReview": {
      "summary": {
        "en": "In this unit, we explored advanced conditional variations like 'unless,' 'as long as,' 'in case,' and 'provided that,' enabling more precise expression of conditions. We expanded our environmental vocabulary and practiced using key analysis expressions. We also revisited participle clauses for enhanced sentence structure.",
        "pt": "Nesta unidade, exploramos variações condicionais avançadas como 'unless', 'as long as', 'in case' e 'provided that', permitindo uma expressão mais precisa de condições. Expandimos nosso vocabulário ambiental e praticamos o uso de expressões-chave de análise. Também revisitamos as orações participiais para uma estrutura de frase aprimorada."
      },
      "canDo": [
        {
          "en": "Use 'unless', 'as long as', 'in case', and 'provided that' to express complex conditions and contingencies.",
          "pt": "Usar 'unless', 'as long as', 'in case' e 'provided that' para expressar condições e contingências complexas."
        },
        {
          "en": "Discuss environmental issues using a broader range of vocabulary and analytical expressions.",
          "pt": "Discutir questões ambientais usando uma gama mais ampla de vocabulário e expressões analíticas."
        },
        {
          "en": "Formulate sophisticated arguments and nuanced opinions on environmental topics, integrating various grammatical structures.",
          "pt": "Formular argumentos sofisticados e opiniões com nuances sobre tópicos ambientais, integrando várias estruturas gramaticais."
        }
      ],
      "next": {
        "en": "In Unit 21, we will move on to discuss global economies and learn how to use inversion for emphasis.",
        "pt": "Na Unidade 21, passaremos a discutir economias globais e aprenderemos a usar a inversão para ênfase."
      }
    }
  }
}
];
