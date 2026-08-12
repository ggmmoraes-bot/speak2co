import type { CourseUnit } from "./types";

/** Speak2Co — Beginner English Course (A1). Units 21–30 do currículo oficial. */
export const BEGINNER_UNITS_21_30: CourseUnit[] = [
  {
    "code": "BEGINNER-U21",
    "number": 21,
    "title": "Plans Future - Simple Past",
    "titlePt": "Planos Futuros - Passado Simples",
    "cefr": "A1",
    "objective": {
      "en": "To teach future plans and Simple Past - negative (didn't) and interrogative (did) forms in a contextualized way.",
      "pt": "Ensinar planos futuros e o Passado Simples - formas negativa (didn't) e interrogativa (did) de forma contextualizada."
    },
    "communicationGoal": {
      "en": "The student will be able to use 'apologizing' and future plans vocabulary to communicate in real situations.",
      "pt": "O aluno será capaz de usar 'apologizing' e o vocabulário de planos futuros para se comunicar em situações reais."
    },
    "prerequisites": {
      "en": "Structure: Simple Past - common irregular verbs (affirmative). Vocabulary: Life Events.",
      "pt": "Estrutura: Passado Simples - verbos irregulares comuns (afirmativo). Vocabulário: Acontecimentos da Vida."
    },
    "newContent": {
      "en": "Grammar: Simple Past - negative (didn't) and interrogative (did) forms. | Vocabulary: Plans Future (10 lexical items) | Expressions: Apologizing.",
      "pt": "Gramática: Passado Simples - formas negativa (didn't) e interrogativa (did). | Vocabulário: Planos Futuros (10 itens lexicais) | Expressões: Pedir Desculpas."
    },
    "reviewContent": {
      "en": "Spiral review: Much (uncountable) / Many (countable) / A lot of (both) (Unit 16). Vocabulary review: Weather Seasons (Unit 11).",
      "pt": "Revisão em espiral: Much (incontável) / Many (contável) / A lot of (ambos) (Unidade 16). Revisão de vocabulário: Estações do Ano (Unidade 11)."
    },
    "discover": {
      "id": "BEGINNER-U21-DISCOVER",
      "warmUp": {
        "prompt": {
          "en": "Look at the pictures. What are these people planning to do?",
          "pt": "Observe as imagens. O que estas pessoas estão planejando fazer?"
        },
        "phrases": [
          {
            "en": "Travel next year.",
            "pt": "Viajar no próximo ano."
          },
          {
            "en": "Start a new job.",
            "pt": "Começar um novo trabalho."
          },
          {
            "en": "Learn English.",
            "pt": "Aprender inglês."
          }
        ]
      },
      "context": {
        "situation": {
          "en": "Maria and Carlos are talking about their plans for the weekend. Carlos is late for their meeting.",
          "pt": "Maria e Carlos estão conversando sobre seus planos para o fim de semana. Carlos está atrasado para o encontro deles."
        },
        "dialogue": [
          {
            "who": "Maria",
            "en": "Hi Carlos! You are late.",
            "pt": "Oi Carlos! Você está atrasado."
          },
          {
            "who": "Carlos",
            "en": "Oh, Maria! I'm so sorry. My bus didn't arrive on time.",
            "pt": "Ah, Maria! Sinto muito. Meu ônibus não chegou a tempo."
          },
          {
            "who": "Maria",
            "en": "No problem. Did you make plans for Saturday?",
            "pt": "Sem problemas. Você fez planos para sábado?"
          },
          {
            "who": "Carlos",
            "en": "Yes, I did. I have a big plan: visit my family. Did you go to the beach last Sunday?",
            "pt": "Sim, eu fiz. Tenho um grande plano: visitar minha família. Você foi à praia no último domingo?"
          },
          {
            "who": "Maria",
            "en": "No, I didn't. It rained all day. But I have a new career goal: learn to swim!",
            "pt": "Não, eu não fui. Choveu o dia todo. Mas tenho um novo objetivo de carreira: aprender a nadar!"
          },
          {
            "who": "Carlos",
            "en": "That's a good idea! Sorry about that delay again.",
            "pt": "Essa é uma boa ideia! Desculpe-me novamente pelo atraso."
          }
        ]
      },
      "vocabulary": [
        {
          "term": "goal",
          "pt": "objetivo",
          "ipa": "/ɡoʊl/",
          "definition": "Something you want to achieve in the future.",
          "example": "My goal is to learn English well.",
          "examplePt": "Meu objetivo é aprender inglês bem."
        },
        {
          "term": "plan",
          "pt": "plano",
          "ipa": "/plæn/",
          "definition": "A detailed proposal for doing or achieving something.",
          "example": "We have a plan for the holidays.",
          "examplePt": "Nós temos um plano para as férias."
        },
        {
          "term": "intention",
          "pt": "intenção",
          "ipa": "/ɪnˈtɛnʃən/",
          "definition": "A thing intended; an aim or plan.",
          "example": "My intention is to study more this year.",
          "examplePt": "Minha intenção é estudar mais este ano."
        },
        {
          "term": "resolution",
          "pt": "resolução",
          "ipa": "/ˌrɛzəˈluːʃən/",
          "definition": "A firm decision to do or not to do something.",
          "example": "My New Year's resolution is to exercise daily.",
          "examplePt": "Minha resolução de Ano Novo é fazer exercícios diariamente."
        },
        {
          "term": "opportunity",
          "pt": "oportunidade",
          "ipa": "/ˌɒpərˈtuːnəti/",
          "definition": "A set of circumstances that makes it possible to do something.",
          "example": "This is a good opportunity to travel.",
          "examplePt": "Esta é uma boa oportunidade para viajar."
        },
        {
          "term": "decision",
          "pt": "decisão",
          "ipa": "/dɪˈsɪʒən/",
          "definition": "A choice that you make about something.",
          "example": "I made a decision to move to a new city.",
          "examplePt": "Eu tomei a decisão de me mudar para uma nova cidade."
        },
        {
          "term": "career",
          "pt": "carreira",
          "ipa": "/kəˈrɪər/",
          "definition": "The series of jobs that a person has in a particular area of work.",
          "example": "She wants a career in medicine.",
          "examplePt": "Ela quer uma carreira em medicina."
        },
        {
          "term": "project",
          "pt": "projeto",
          "ipa": "/ˈprɒdʒɛkt/",
          "definition": "A planned piece of work that has a specific purpose.",
          "example": "Our new project is to build a small house.",
          "examplePt": "Nosso novo projeto é construir uma casa pequena."
        },
        {
          "term": "dream",
          "pt": "sonho",
          "ipa": "/driːm/",
          "definition": "A cherished aspiration, ambition, or ideal.",
          "example": "It's my dream to visit Paris.",
          "examplePt": "É meu sonho visitar Paris."
        },
        {
          "term": "milestone",
          "pt": "marco",
          "ipa": "/ˈmaɪlˌstoʊn/",
          "definition": "An important stage or event in the development of something.",
          "example": "Graduation was a big milestone for me.",
          "examplePt": "A formatura foi um grande marco para mim."
        }
      ],
      "expressions": [
        {
          "en": "I'm sorry.",
          "pt": "Eu sinto muito."
        },
        {
          "en": "I apologize for being late.",
          "pt": "Peço desculpas por estar atrasado(a)."
        },
        {
          "en": "Sorry about that.",
          "pt": "Desculpe por isso."
        }
      ],
      "grammar": [
        {
          "title": {
            "en": "Simple Past: Negative and Interrogative",
            "pt": "Passado Simples: Negativa e Interrogativa"
          },
          "examples": [
            {
              "en": "I didn't watch TV last night.",
              "pt": "Eu não assisti TV ontem à noite."
            },
            {
              "en": "Did you travel last summer?",
              "pt": "Você viajou no último verão?"
            },
            {
              "en": "She didn't like the movie.",
              "pt": "Ela não gostou do filme."
            }
          ],
          "rule": {
            "en": "To make negative sentences in the Simple Past, use 'did not' or 'didn't' before the base form of the verb. To make interrogative sentences, use 'Did' at the beginning of the sentence, followed by the subject and the base form of the verb.",
            "pt": "Para fazer frases negativas no Passado Simples, use 'did not' ou 'didn't' antes da forma base do verbo. Para fazer frases interrogativas, use 'Did' no início da frase, seguido do sujeito e da forma base do verbo."
          },
          "mistakes": [
            {
              "en": "Did you went to the park?",
              "pt": "Você foi ao parque? (Forma incorreta: 'went' já está no passado. Correto: 'Did you go to the park?')"
            },
            {
              "en": "I didn't liked the food.",
              "pt": "Eu não gostei da comida. (Forma incorreta: 'liked' já está no passado. Correto: 'I didn't like the food.')"
            }
          ]
        }
      ],
      "controlledPractice": [
        {
          "id": "b21d-cp-1",
          "prompt": {
            "en": "Choose the correct negative form:",
            "pt": "Escolha a forma negativa correta:"
          },
          "options": [
            "He didn't ate lunch.",
            "He didn't eat lunch.",
            "He didn't eaten lunch."
          ],
          "answer": "He didn't eat lunch.",
          "explanation": {
            "en": "'Didn't' is followed by the base form of the verb.",
            "pt": "'Didn't' é seguido pela forma base do verbo."
          }
        },
        {
          "id": "b21d-cp-2",
          "prompt": {
            "en": "Choose the correct interrogative form:",
            "pt": "Escolha a forma interrogativa correta:"
          },
          "options": [
            "Did she worked yesterday?",
            "Did she work yesterday?",
            "She did work yesterday?"
          ],
          "answer": "Did she work yesterday?",
          "explanation": {
            "en": "'Did' is followed by the subject and the base form of the verb.",
            "pt": "'Did' é seguido pelo sujeito e pela forma base do verbo."
          }
        },
        {
          "id": "b21d-cp-3",
          "prompt": {
            "en": "Complete the sentence: They ___ (not go) to the party.",
            "pt": "Complete a frase: Eles ___ (não ir) para a festa."
          },
          "options": [
            "didn't went",
            "didn't go",
            "did not goes"
          ],
          "answer": "didn't go",
          "explanation": {
            "en": "Use 'didn't' plus the base form of the verb.",
            "pt": "Use 'didn't' mais a forma base do verbo."
          }
        },
        {
          "id": "b21d-cp-4",
          "prompt": {
            "en": "Form a question: You / buy / a new car?",
            "pt": "Forme uma pergunta: Você / comprar / um carro novo?"
          },
          "options": [
            "Did you buy a new car?",
            "You did buy a new car?",
            "Did you bought a new car?"
          ],
          "answer": "Did you buy a new car?",
          "explanation": {
            "en": "Start with 'Did', then subject, then base verb form.",
            "pt": "Comece com 'Did', depois o sujeito, depois a forma base do verbo."
          }
        }
      ],
      "input": {
        "kind": "reading",
        "title": {
          "en": "My Weekend Plans",
          "pt": "Meus Planos para o Fim de Semana"
        },
        "lines": [
          {
            "en": "Last weekend, I didn't go to the park because it rained. I had a plan to meet my friends, but we couldn't.",
            "pt": "No último fim de semana, eu não fui ao parque porque choveu. Eu tinha um plano de encontrar meus amigos, mas não pudemos."
          },
          {
            "en": "This weekend, my goal is to visit my grandmother. My mom didn't want to go, but I did.",
            "pt": "Neste fim de semana, meu objetivo é visitar minha avó. Minha mãe não quis ir, mas eu fui."
          },
          {
            "en": "Did you make any plans? My dream is to have a big family dinner.",
            "pt": "Você fez algum plano? Meu sonho é ter um grande jantar em família."
          },
          {
            "en": "It's an important milestone for us.",
            "pt": "É um marco importante para nós."
          }
        ],
        "questions": [
          {
            "id": "b21d-in-1",
            "prompt": {
              "en": "Why didn't the person go to the park last weekend?",
              "pt": "Por que a pessoa não foi ao parque no último fim de semana?"
            },
            "options": [
              "Because she was sick.",
              "Because it rained.",
              "Because she met friends."
            ],
            "answer": "Because it rained.",
            "explanation": {
              "en": "The text says: 'it rained'.",
              "pt": "O texto diz: 'choveu'."
            }
          },
          {
            "id": "b21d-in-2",
            "prompt": {
              "en": "What is the person's goal for this weekend?",
              "pt": "Qual é o objetivo da pessoa para este fim de semana?"
            },
            "options": [
              "To meet friends.",
              "To visit her grandmother.",
              "To go to the park."
            ],
            "answer": "To visit her grandmother.",
            "explanation": {
              "en": "The text says: 'my goal is to visit my grandmother'.",
              "pt": "O texto diz: 'meu objetivo é visitar minha avó'."
            }
          },
          {
            "id": "b21d-in-3",
            "prompt": {
              "en": "What is the person's dream?",
              "pt": "Qual é o sonho da pessoa?"
            },
            "options": [
              "To travel.",
              "To have a big family dinner.",
              "To learn English."
            ],
            "answer": "To have a big family dinner.",
            "explanation": {
              "en": "The text says: 'My dream is to have a big family dinner.'",
              "pt": "O texto diz: 'Meu sonho é ter um grande jantar em família'."
            }
          }
        ]
      },
      "quickCheck": [
        {
          "id": "b21d-qc-1",
          "prompt": {
            "en": "Which word means 'something you want to achieve'?",
            "pt": "Qual palavra significa 'algo que você quer alcançar'?"
          },
          "options": [
            "plan",
            "goal",
            "dream"
          ],
          "answer": "goal",
          "explanation": {
            "en": "'Goal' is something you want to achieve.",
            "pt": "'Goal' é algo que você quer alcançar."
          }
        },
        {
          "id": "b21d-qc-2",
          "prompt": {
            "en": "Translate 'I'm sorry.'",
            "pt": "Traduza 'I'm sorry.'"
          },
          "options": [
            "Eu estou bem.",
            "Eu sinto muito.",
            "Eu não sei."
          ],
          "answer": "Eu sinto muito.",
          "explanation": {
            "en": "'I'm sorry' is an expression of apology.",
            "pt": "'I'm sorry' é uma expressão de desculpa."
          }
        },
        {
          "id": "b21d-qc-3",
          "prompt": {
            "en": "Choose the correct sentence:",
            "pt": "Escolha a frase correta:"
          },
          "options": [
            "Did he went to the store?",
            "He didn't go to the store.",
            "He did not went to the store."
          ],
          "answer": "He didn't go to the store.",
          "explanation": {
            "en": "Use 'didn't' with the base form of the verb.",
            "pt": "Use 'didn't' com a forma base do verbo."
          }
        },
        {
          "id": "b21d-qc-4",
          "prompt": {
            "en": "What is the opposite of 'many' for countable nouns?",
            "pt": "Qual é o oposto de 'many' para substantivos contáveis?"
          },
          "options": [
            "much",
            "a lot of",
            "few"
          ],
          "answer": "few",
          "explanation": {
            "en": "'Few' is used for small quantities of countable nouns.",
            "pt": "'Few' é usado para pequenas quantidades de substantivos contáveis."
          }
        }
      ]
    },
    "communicate": {
      "id": "BEGINNER-U21-COMMUNICATE",
      "review": [
        {
          "en": "We learned about future plans vocabulary.",
          "pt": "Aprendemos vocabulário sobre planos futuros."
        },
        {
          "en": "We practiced Simple Past negative and interrogative forms.",
          "pt": "Praticamos as formas negativa e interrogativa do Passado Simples."
        },
        {
          "en": "We also learned expressions for apologizing.",
          "pt": "Também aprendemos expressões para pedir desculpas."
        }
      ],
      "activities": [
        {
          "id": "b21c-act-1",
          "title": {
            "en": "Writing Task: My Future Plans",
            "pt": "Tarefa de Escrita: Meus Planos Futuros"
          },
          "instruction": {
            "en": "Write 3-4 sentences about your future plans, using at least two new vocabulary words from this unit.",
            "pt": "Escreva 3-4 frases sobre seus planos futuros, usando pelo menos duas palavras novas do vocabulário desta unidade."
          },
          "phrases": [
            {
              "en": "My big plan is to travel to Brazil next year.",
              "pt": "Meu grande plano é viajar para o Brasil no próximo ano."
            },
            {
              "en": "I have a goal to learn Portuguese.",
              "pt": "Eu tenho o objetivo de aprender português."
            },
            {
              "en": "This is an important milestone in my career.",
              "pt": "Este é um marco importante na minha carreira."
            }
          ],
          "check": [
            {
              "id": "b21c-ac1-ch1",
              "prompt": {
                "en": "Which sentence uses a vocabulary word correctly?",
                "pt": "Qual frase usa uma palavra do vocabulário corretamente?"
              },
              "options": [
                "My plan is to eat pizza.",
                "My dream is a new car.",
                "My table is a goal."
              ],
              "answer": "My dream is a new car.",
              "explanation": {
                "en": "'Dream' is correctly used as an aspiration.",
                "pt": "'Dream' é usado corretamente como uma aspiração."
              }
            },
            {
              "id": "b21c-ac1-ch2",
              "prompt": {
                "en": "Which sentence describes a future plan?",
                "pt": "Qual frase descreve um plano futuro?"
              },
              "options": [
                "I went to the store.",
                "I will visit my family next month.",
                "I like apples."
              ],
              "answer": "I will visit my family next month.",
              "explanation": {
                "en": "'Will visit' indicates a future action.",
                "pt": "'Will visit' indica uma ação futura."
              }
            }
          ]
        },
        {
          "id": "b21c-act-2",
          "title": {
            "en": "Reading Comprehension: A Busy Week",
            "pt": "Compreensão de Leitura: Uma Semana Ocupada"
          },
          "instruction": {
            "en": "Read the text and answer the questions.",
            "pt": "Leia o texto e responda às perguntas."
          },
          "phrases": [
            {
              "en": "Last week, I didn't have much time. I had a big project at work. I didn't meet my friends.",
              "pt": "Na semana passada, eu não tive muito tempo. Eu tinha um grande projeto no trabalho. Eu não encontrei meus amigos."
            },
            {
              "en": "Did I feel tired? Yes, I did. But my goal is to finish this project.",
              "pt": "Eu me senti cansado? Sim, eu me senti. Mas meu objetivo é terminar este projeto."
            },
            {
              "en": "Today, I feel better. I have a new plan for next weekend: relax!",
              "pt": "Hoje, eu me sinto melhor. Eu tenho um novo plano para o próximo fim de semana: relaxar!"
            }
          ],
          "check": [
            {
              "id": "b21c-ac2-ch1",
              "prompt": {
                "en": "What didn't the person do last week?",
                "pt": "O que a pessoa não fez na semana passada?"
              },
              "options": [
                "Finish the project.",
                "Meet friends.",
                "Feel tired."
              ],
              "answer": "Meet friends.",
              "explanation": {
                "en": "The text says: 'I didn't meet my friends.'",
                "pt": "O texto diz: 'Eu não encontrei meus amigos'."
              }
            },
            {
              "id": "b21c-ac2-ch2",
              "prompt": {
                "en": "What is the person's plan for next weekend?",
                "pt": "Qual é o plano da pessoa para o próximo fim de semana?"
              },
              "options": [
                "Work on the project.",
                "Relax.",
                "Meet friends."
              ],
              "answer": "Relax.",
              "explanation": {
                "en": "The text says: 'I have a new plan for next weekend: relax!'",
                "pt": "O texto diz: 'Eu tenho um novo plano para o próximo fim de semana: relaxar!'"
              }
            }
          ]
        },
        {
          "id": "b21c-act-3",
          "title": {
            "en": "Answer the Questions: Your Day",
            "pt": "Responda às Perguntas: Seu Dia"
          },
          "instruction": {
            "en": "Answer these questions about your day or recent past.",
            "pt": "Responda a estas perguntas sobre seu dia ou passado recente."
          },
          "phrases": [
            {
              "en": "Did you eat breakfast today?",
              "pt": "Você tomou café da manhã hoje?"
            },
            {
              "en": "What is one of your career goals?",
              "pt": "Qual é um dos seus objetivos de carreira?"
            },
            {
              "en": "Did you watch TV last night?",
              "pt": "Você assistiu TV ontem à noite?"
            }
          ],
          "check": [
            {
              "id": "b21c-ac3-ch1",
              "prompt": {
                "en": "Choose the best answer for 'Did you go to work yesterday?'",
                "pt": "Escolha a melhor resposta para 'Você foi trabalhar ontem?'"
              },
              "options": [
                "Yes, I did.",
                "No, I did.",
                "Yes, I didn't."
              ],
              "answer": "Yes, I did.",
              "explanation": {
                "en": "'Yes, I did' is the correct affirmative short answer.",
                "pt": "'Yes, I did' é a resposta curta afirmativa correta."
              }
            },
            {
              "id": "b21c-ac3-ch2",
              "prompt": {
                "en": "Choose the best answer for 'Did you sleep well?'",
                "pt": "Escolha a melhor resposta para 'Você dormiu bem?'"
              },
              "options": [
                "No, I didn't.",
                "Yes, I don't.",
                "No, I did."
              ],
              "answer": "No, I didn't.",
              "explanation": {
                "en": "'No, I didn't' is the correct negative short answer.",
                "pt": "'No, I didn't' é a resposta curta negativa correta."
              }
            }
          ]
        },
        {
          "id": "b21c-act-4",
          "title": {
            "en": "Complete the Conversation: Apology",
            "pt": "Complete a Conversa: Pedido de Desculpas"
          },
          "instruction": {
            "en": "Complete the dialogue with the correct apologizing expression.",
            "pt": "Complete o diálogo com a expressão de pedido de desculpas correta."
          },
          "phrases": [
            {
              "en": "A: You broke my pen! B: Oh, ___ .",
              "pt": "A: Você quebrou minha caneta! B: Ah, ___ ."
            },
            {
              "en": "A: You are late for the meeting. B: I apologize for ___ .",
              "pt": "A: Você está atrasado para a reunião. B: Peço desculpas por ___ ."
            },
            {
              "en": "A: My mistake. B: ___ that.",
              "pt": "A: Meu erro. B: ___ isso."
            }
          ],
          "check": [
            {
              "id": "b21c-ac4-ch1",
              "prompt": {
                "en": "Complete: A: I lost your book. B: I'm ___.",
                "pt": "Complete: A: Perdi seu livro. B: Sinto ___."
              },
              "options": [
                "fine",
                "sorry",
                "happy"
              ],
              "answer": "sorry",
              "explanation": {
                "en": "'I'm sorry' is used to apologize.",
                "pt": "'I'm sorry' é usado para pedir desculpas."
              }
            },
            {
              "id": "b21c-ac4-ch2",
              "prompt": {
                "en": "Complete: A: You forgot my birthday! B: Sorry ___ that.",
                "pt": "Complete: A: Você esqueceu meu aniversário! B: Desculpe ___ isso."
              },
              "options": [
                "for",
                "about",
                "at"
              ],
              "answer": "about",
              "explanation": {
                "en": "'Sorry about that' is a common expression.",
                "pt": "'Sorry about that' é uma expressão comum."
              }
            }
          ]
        },
        {
          "id": "b21c-act-5",
          "title": {
            "en": "Dialogue: Weekend Plans",
            "pt": "Diálogo: Planos para o Fim de Semana"
          },
          "instruction": {
            "en": "Work with a partner. Create a short dialogue about weekend plans, using Simple Past negative/interrogative and apologizing.",
            "pt": "Trabalhe com um parceiro. Crie um diálogo curto sobre planos de fim de semana, usando Passado Simples negativo/interrogativo e pedindo desculpas."
          },
          "phrases": [
            {
              "en": "A: Did you have fun last weekend? B: No, I didn't. I stayed home.",
              "pt": "A: Você se divertiu no último fim de semana? B: Não, eu não me diverti. Fiquei em casa."
            },
            {
              "en": "A: I'm sorry, I forgot our meeting. B: No problem. Did you make plans for tomorrow?",
              "pt": "A: Sinto muito, esqueci nosso encontro. B: Sem problemas. Você fez planos para amanhã?"
            },
            {
              "en": "A: What is your career goal? B: My goal is to be a teacher. Did you always want to be a teacher?",
              "pt": "A: Qual é o seu objetivo de carreira? B: Meu objetivo é ser professor. Você sempre quis ser professor?"
            }
          ],
          "check": [
            {
              "id": "b21c-ac5-ch1",
              "prompt": {
                "en": "Choose the best response to: 'Did you visit your friends?'",
                "pt": "Escolha a melhor resposta para: 'Você visitou seus amigos?'"
              },
              "options": [
                "Yes, I did.",
                "Yes, I visit.",
                "No, I didn't visited."
              ],
              "answer": "Yes, I did.",
              "explanation": {
                "en": "This is the correct short affirmative answer.",
                "pt": "Esta é a resposta curta afirmativa correta."
              }
            },
            {
              "id": "b21c-ac5-ch2",
              "prompt": {
                "en": "Which sentence expresses an apology?",
                "pt": "Qual frase expressa um pedido de desculpas?"
              },
              "options": [
                "I like pizza.",
                "I'm sorry for the mistake.",
                "I went home."
              ],
              "answer": "I'm sorry for the mistake.",
              "explanation": {
                "en": "'I'm sorry for the mistake' is an apology.",
                "pt": "'I'm sorry for the mistake' é um pedido de desculpas."
              }
            }
          ]
        }
      ],
      "challenge": {
        "id": "b21c-challenge",
        "title": {
          "en": "Communication Challenge: Apologize and Plan",
          "pt": "Desafio de Comunicação: Pedir Desculpas e Planejar"
        },
        "instruction": {
          "en": "Imagine you missed a friend's birthday party. Write a short message (3-4 sentences) to apologize and make a new plan to meet. Use 'didn't' and one new vocabulary word.",
          "pt": "Imagine que você perdeu a festa de aniversário de um amigo. Escreva uma mensagem curta (3-4 frases) para pedir desculpas e fazer um novo plano para se encontrar. Use 'didn't' e uma nova palavra do vocabulário."
        },
        "phrases": [
          {
            "en": "Hi [Friend's Name], I'm so sorry. I didn't remember your birthday.",
            "pt": "Oi [Nome do Amigo], sinto muito. Eu não me lembrei do seu aniversário."
          },
          {
            "en": "I apologize for being absent. I want to make a new plan to see you soon.",
            "pt": "Peço desculpas por estar ausente. Eu quero fazer um novo plano para te ver em breve."
          },
          {
            "en": "My goal is to celebrate with you next week. Did you have fun at the party?",
            "pt": "Meu objetivo é celebrar com você na próxima semana. Você se divertiu na festa?"
          }
        ],
        "check": [
          {
            "id": "b21c-ch-1",
            "prompt": {
              "en": "Does the message include an apology?",
              "pt": "A mensagem inclui um pedido de desculpas?"
            },
            "options": [
              "Yes",
              "No"
            ],
            "answer": "Yes",
            "explanation": {
              "en": "The instruction requires an apology.",
              "pt": "A instrução exige um pedido de desculpas."
            }
          },
          {
            "id": "b21c-ch-2",
            "prompt": {
              "en": "Does the message include a new plan?",
              "pt": "A mensagem inclui um novo plano?"
            },
            "options": [
              "Yes",
              "No"
            ],
            "answer": "Yes",
            "explanation": {
              "en": "The instruction requires making a new plan.",
              "pt": "A instrução exige fazer um novo plano."
            }
          }
        ]
      },
      "lessonReview": {
        "summary": {
          "en": "In this unit, we learned about expressing future plans and apologizing. We also mastered the negative and interrogative forms of the Simple Past.",
          "pt": "Nesta unidade, aprendemos a expressar planos futuros e a pedir desculpas. Também dominamos as formas negativa e interrogativa do Passado Simples."
        },
        "canDo": [
          {
            "en": "I can use vocabulary for future plans.",
            "pt": "Eu consigo usar vocabulário para planos futuros."
          },
          {
            "en": "I can ask and answer questions in Simple Past.",
            "pt": "Eu consigo fazer e responder perguntas no Passado Simples."
          },
          {
            "en": "I can apologize in English.",
            "pt": "Eu consigo pedir desculpas em inglês."
          }
        ],
        "next": {
          "en": "Next, we will practice talking about daily routines and habits in more detail.",
          "pt": "Em seguida, praticaremos como falar sobre rotinas e hábitos diários com mais detalhes."
        }
      }
    }
  },
  {
    "code": "BEGINNER-U22",
    "number": 22,
    "title": "Plans Future",
    "titlePt": "Planos Futuros",
    "cefr": "A1",
    "objective": {
      "en": "To teach future plans and future with 'going to' for plans and intentions in a contextualized way.",
      "pt": "Ensinar planos futuros e o futuro com 'going to' para planos e intenções de forma contextualizada."
    },
    "communicationGoal": {
      "en": "The student will be able to use 'thanking' and vocabulary related to future plans to communicate in real situations.",
      "pt": "O aluno será capaz de usar 'thanking' e o vocabulário de planos futuros para se comunicar em situações reais."
    },
    "prerequisites": {
      "en": "Structure: Simple Past – negative (didn't) and interrogative (did) forms. Vocabulary: Plans Future.",
      "pt": "Estrutura: Simple Past – formas negativa (didn't) e interrogativa (did). Vocabulário: Planos Futuros."
    },
    "newContent": {
      "en": "Grammar: Future with going to for plans and intentions. Vocabulary: Plans Future (10 lexical items). Expressions: Thanking.",
      "pt": "Gramática: Futuro com going to para planos e intenções. Vocabulário: Planos Futuros (10 itens lexicais). Expressões: Agradecer."
    },
    "reviewContent": {
      "en": "Spiral review: Comparative adjectives (-er / more + adjective) (Unit 17). Vocabulary review: Abilities (Unit 12).",
      "pt": "Revisão em espiral: Adjetivos comparativos (-er / more + adjective) (Unidade 17). Revisão de vocabulário: Habilidades (Unidade 12)."
    },
    "discover": {
      "id": "BEGINNER-U22-DISCOVER",
      "warmUp": {
        "prompt": {
          "en": "Look at the pictures. What are these people going to do? Talk to your partner.",
          "pt": "Olhe as imagens. O que essas pessoas vão fazer? Converse com seu parceiro."
        },
        "phrases": [
          {
            "en": "Are you going to travel next year?",
            "pt": "Você vai viajar ano que vem?"
          },
          {
            "en": "What is your biggest dream?",
            "pt": "Qual é o seu maior sonho?"
          },
          {
            "en": "Do you have any plans for the weekend?",
            "pt": "Você tem algum plano para o fim de semana?"
          }
        ]
      },
      "context": {
        "situation": {
          "en": "Maria wants to start a new project, and she asks her friend, João, for advice.",
          "pt": "Maria quer começar um novo projeto, e ela pede conselhos ao seu amigo, João."
        },
        "dialogue": [
          {
            "who": "Maria",
            "en": "João, I have a big project idea for next year. I'm going to open a small coffee shop!",
            "pt": "João, eu tenho uma grande ideia de projeto para o ano que vem. Eu vou abrir uma pequena cafeteria!"
          },
          {
            "who": "João",
            "en": "Wow, Maria! That's a great plan. How are you going to start?",
            "pt": "Uau, Maria! Esse é um ótimo plano. Como você vai começar?"
          },
          {
            "who": "Maria",
            "en": "First, I'm going to save money. Then, I'm going to find a good location. It's my dream!",
            "pt": "Primeiro, eu vou economizar dinheiro. Depois, eu vou encontrar um bom local. É o meu sonho!"
          },
          {
            "who": "João",
            "en": "I can help you with the marketing. I have some experience. You are going to be successful!",
            "pt": "Eu posso te ajudar com o marketing. Eu tenho um pouco de experiência. Você vai ter sucesso!"
          },
          {
            "who": "Maria",
            "en": "Thank you very much, João! I really appreciate it. Thanks for your help!",
            "pt": "Muito obrigada, João! Eu realmente agradeço. Obrigada pela sua ajuda!"
          },
          {
            "who": "João",
            "en": "No problem, Maria. I'm sure your coffee shop is going to be amazing.",
            "pt": "De nada, Maria. Tenho certeza que sua cafeteria vai ser incrível."
          }
        ]
      },
      "vocabulary": [
        {
          "term": "goal",
          "pt": "meta",
          "ipa": "/ɡoʊl/",
          "definition": "Something you want to achieve.",
          "example": "My goal is to learn English well.",
          "examplePt": "Minha meta é aprender inglês bem."
        },
        {
          "term": "plan",
          "pt": "plano",
          "ipa": "/plæn/",
          "definition": "A detailed proposal for doing or achieving something.",
          "example": "What's your plan for the weekend?",
          "examplePt": "Qual é o seu plano para o fim de semana?"
        },
        {
          "term": "intention",
          "pt": "intenção",
          "ipa": "/ɪnˈtɛnʃən/",
          "definition": "A plan or purpose.",
          "example": "He has no intention of quitting his job.",
          "examplePt": "Ele não tem intenção de largar o emprego."
        },
        {
          "term": "resolution",
          "pt": "resolução",
          "ipa": "/ˌrɛzəˈluːʃən/",
          "definition": "A firm decision to do or not to do something.",
          "example": "My New Year's resolution is to exercise more.",
          "examplePt": "Minha resolução de Ano Novo é fazer mais exercícios."
        },
        {
          "term": "opportunity",
          "pt": "oportunidade",
          "ipa": "/ˌɒpərˈtuːnəti/",
          "definition": "A set of circumstances that makes it possible to do something.",
          "example": "This is a great opportunity to travel.",
          "examplePt": "Esta é uma ótima oportunidade para viajar."
        },
        {
          "term": "decision",
          "pt": "decisão",
          "ipa": "/dɪˈsɪʒən/",
          "definition": "A choice or judgment.",
          "example": "Making a decision can be hard.",
          "examplePt": "Tomar uma decisão pode ser difícil."
        },
        {
          "term": "career",
          "pt": "carreira",
          "ipa": "/kəˈrɪr/",
          "definition": "An occupation undertaken for a significant period of a person's life.",
          "example": "She wants a career in medicine.",
          "examplePt": "Ela quer uma carreira em medicina."
        },
        {
          "term": "project",
          "pt": "projeto",
          "ipa": "/ˈprɒdʒɛkt/",
          "definition": "An individual or collaborative enterprise that is carefully planned and designed to achieve a particular aim.",
          "example": "Our new project is to build a house.",
          "examplePt": "Nosso novo projeto é construir uma casa."
        },
        {
          "term": "dream",
          "pt": "sonho",
          "ipa": "/driːm/",
          "definition": "A cherished aspiration, ambition, or ideal.",
          "example": "My dream is to live by the beach.",
          "examplePt": "Meu sonho é morar na praia."
        },
        {
          "term": "milestone",
          "pt": "marco",
          "ipa": "/ˈmaɪlˌstoʊn/",
          "definition": "A significant stage or event in the development of something.",
          "example": "Graduating was a big milestone for me.",
          "examplePt": "Formar-me foi um grande marco para mim."
        }
      ],
      "expressions": [
        {
          "en": "Thank you very much.",
          "pt": "Muito obrigado(a)."
        },
        {
          "en": "Thanks for your help.",
          "pt": "Obrigado(a) pela sua ajuda."
        },
        {
          "en": "I really appreciate it.",
          "pt": "Eu realmente agradeço."
        }
      ],
      "grammar": [
        {
          "title": {
            "en": "Future with 'going to' for plans and intentions",
            "pt": "Futuro com 'going to' para planos e intenções"
          },
          "examples": [
            {
              "en": "I'm going to visit my parents next month.",
              "pt": "Eu vou visitar meus pais no próximo mês."
            },
            {
              "en": "She's going to start a new job in July.",
              "pt": "Ela vai começar um novo emprego em julho."
            },
            {
              "en": "They are going to study for the exam tonight.",
              "pt": "Eles vão estudar para o exame hoje à noite."
            }
          ],
          "rule": {
            "en": "We use 'going to' to talk about plans and intentions for the future. It's often used for things we have already decided to do. Structure: Subject + to be (am/is/are) + going to + base form of the verb.",
            "pt": "Usamos 'going to' para falar sobre planos e intenções para o futuro. É frequentemente usado para coisas que já decidimos fazer. Estrutura: Sujeito + verbo to be (am/is/are) + going to + verbo na forma base."
          },
          "mistakes": [
            {
              "en": "I going to travel. (Missing 'to be')",
              "pt": "Eu 'going to' viajar. (Falta o 'to be')"
            },
            {
              "en": "She is going to starts a new job. (Verb with 's')",
              "pt": "Ela vai 'starts' um novo emprego. (Verbo com 's')"
            }
          ]
        }
      ],
      "controlledPractice": [
        {
          "id": "b22d-cp1",
          "prompt": {
            "en": "Choose the correct form: My brother ____ travel next year.",
            "pt": "Escolha a forma correta: Meu irmão ____ viajar ano que vem."
          },
          "options": [
            "is going to",
            "going to",
            "are going to",
            "go to"
          ],
          "answer": "is going to",
          "explanation": {
            "en": "For 'My brother' (he), we use 'is going to'.",
            "pt": "Para 'My brother' (ele), usamos 'is going to'."
          }
        },
        {
          "id": "b22d-cp2",
          "prompt": {
            "en": "Complete the sentence: We _____ (buy) a new car.",
            "pt": "Complete a frase: Nós _____ (comprar) um carro novo."
          },
          "options": [
            "are going to buy",
            "is going to buy",
            "am going to buy",
            "going to buy"
          ],
          "answer": "are going to buy",
          "explanation": {
            "en": "For 'We', we use 'are going to buy'.",
            "pt": "Para 'We', usamos 'are going to buy'."
          }
        },
        {
          "id": "b22d-cp3",
          "prompt": {
            "en": "Which sentence is correct?",
            "pt": "Qual frase está correta?"
          },
          "options": [
            "She is going to works hard.",
            "They are going to works hard.",
            "He is going to work hard.",
            "I am going to working hard."
          ],
          "answer": "He is going to work hard.",
          "explanation": {
            "en": "The correct structure is 'is going to + base verb'.",
            "pt": "A estrutura correta é 'is going to + verbo base'."
          }
        },
        {
          "id": "b22d-cp4",
          "prompt": {
            "en": "Fill in the blank: I ______ call you later.",
            "pt": "Preencha a lacuna: Eu ______ ligar para você mais tarde."
          },
          "options": [
            "am going to",
            "is going to",
            "are going to",
            "going to"
          ],
          "answer": "am going to",
          "explanation": {
            "en": "For 'I', we use 'am going to'.",
            "pt": "Para 'I', usamos 'am going to'."
          }
        }
      ],
      "input": {
        "kind": "listening",
        "title": {
          "en": "Listen to the conversation about weekend plans.",
          "pt": "Ouça a conversa sobre planos para o fim de semana."
        },
        "lines": [
          {
            "en": "Speaker A: Hi Ana! What are you going to do this weekend?",
            "pt": "Pessoa A: Oi Ana! O que você vai fazer neste fim de semana?"
          },
          {
            "en": "Speaker B: Hi Pedro! I'm going to visit my grandmother. She lives in another city. What about you?",
            "pt": "Pessoa B: Oi Pedro! Eu vou visitar minha avó. Ela mora em outra cidade. E você?"
          },
          {
            "en": "Speaker A: I'm going to clean my apartment and then I'm going to watch a new movie. It's a quiet plan.",
            "pt": "Pessoa A: Eu vou limpar meu apartamento e depois vou assistir a um filme novo. É um plano tranquilo."
          },
          {
            "en": "Speaker B: Sounds nice! I need to clean my apartment too, but I don't have time.",
            "pt": "Pessoa B: Parece bom! Eu preciso limpar meu apartamento também, mas não tenho tempo."
          },
          {
            "en": "Speaker A: Well, maybe next weekend. Thank you for asking!",
            "pt": "Pessoa A: Bem, talvez no próximo fim de semana. Obrigado por perguntar!"
          }
        ],
        "questions": [
          {
            "id": "b22d-inp1",
            "prompt": {
              "en": "What is Ana going to do first this weekend?",
              "pt": "O que Ana vai fazer primeiro neste fim de semana?"
            },
            "options": [
              "Visit her grandmother",
              "Clean her apartment",
              "Watch a movie",
              "Study for an exam"
            ],
            "answer": "Visit her grandmother",
            "explanation": {
              "en": "Ana says: 'I'm going to visit my grandmother.'",
              "pt": "Ana diz: 'Eu vou visitar minha avó.'"
            }
          },
          {
            "id": "b22d-inp2",
            "prompt": {
              "en": "What is Pedro's plan for after cleaning his apartment?",
              "pt": "Qual é o plano do Pedro para depois de limpar o apartamento?"
            },
            "options": [
              "Go to another city",
              "Watch a new movie",
              "Visit his grandmother",
              "Go out with friends"
            ],
            "answer": "Watch a new movie",
            "explanation": {
              "en": "Pedro says: 'I'm going to clean my apartment and then I'm going to watch a new movie.'",
              "pt": "Pedro diz: 'Eu vou limpar meu apartamento e depois vou assistir a um filme novo.'"
            }
          },
          {
            "id": "b22d-inp3",
            "prompt": {
              "en": "Why does Ana say 'Thank you for asking!'?",
              "pt": "Por que Ana diz 'Thank you for asking!'?"
            },
            "options": [
              "Because Pedro helped her",
              "Because Pedro asked about her plans",
              "Because she watched a movie",
              "Because she cleaned her apartment"
            ],
            "answer": "Because Pedro asked about her plans",
            "explanation": {
              "en": "Pedro asked about her weekend plans.",
              "pt": "Pedro perguntou sobre os planos dela para o fim de semana."
            }
          }
        ]
      },
      "quickCheck": [
        {
          "id": "b22d-qc1",
          "prompt": {
            "en": "Choose the correct sentence: They ____ get married next year.",
            "pt": "Escolha a frase correta: Eles ____ casar no ano que vem."
          },
          "options": [
            "are going to",
            "is going to",
            "am going to",
            "going to"
          ],
          "answer": "are going to",
          "explanation": {
            "en": "For 'They', we use 'are going to'.",
            "pt": "Para 'They', usamos 'are going to'."
          }
        },
        {
          "id": "b22d-qc2",
          "prompt": {
            "en": "What is the meaning of 'goal'?",
            "pt": "Qual é o significado de 'goal'?"
          },
          "options": [
            "a small object",
            "something you want to achieve",
            "a sad feeling",
            "a type of animal"
          ],
          "answer": "something you want to achieve",
          "explanation": {
            "en": "'Goal' means something you want to achieve.",
            "pt": "'Goal' significa algo que você quer alcançar."
          }
        },
        {
          "id": "b22d-qc3",
          "prompt": {
            "en": "How do you say 'Muito obrigado(a)' in English?",
            "pt": "Como se diz 'Muito obrigado(a)' em inglês?"
          },
          "options": [
            "Thank you very much.",
            "Hello, friend.",
            "Good morning.",
            "I am fine."
          ],
          "answer": "Thank you very much.",
          "explanation": {
            "en": "This is a common way to say 'Muito obrigado(a)'.",
            "pt": "Esta é uma forma comum de dizer 'Muito obrigado(a)'."
          }
        },
        {
          "id": "b22d-qc4",
          "prompt": {
            "en": "Which of these is a 'milestone'?",
            "pt": "Qual destes é um 'marco'?"
          },
          "options": [
            "Eating breakfast",
            "Graduating from college",
            "Walking in the park",
            "Reading a book"
          ],
          "answer": "Graduating from college",
          "explanation": {
            "en": "Graduating from college is a significant event, a milestone.",
            "pt": "Formar-se na faculdade é um evento significativo, um marco."
          }
        }
      ]
    },
    "communicate": {
      "id": "BEGINNER-U22-COMMUNICATE",
      "review": [
        {
          "en": "Remember the structure: Subject + to be (am/is/are) + going to + base verb.",
          "pt": "Lembre-se da estrutura: Sujeito + verbo to be (am/is/are) + going to + verbo base."
        },
        {
          "en": "We use 'going to' for future plans and intentions.",
          "pt": "Usamos 'going to' para planos e intenções futuras."
        },
        {
          "en": "New vocabulary: 'goal', 'plan', 'dream', 'opportunity', etc.",
          "pt": "Novo vocabulário: 'meta', 'plano', 'sonho', 'oportunidade', etc."
        }
      ],
      "activities": [
        {
          "id": "b22c-act1",
          "title": {
            "en": "Real-life Communication Activity: My Weekend Plans",
            "pt": "Atividade de Comunicação Real: Meus Planos para o Fim de Semana"
          },
          "instruction": {
            "en": "Think about your plans for the upcoming weekend. Share them with a partner using 'going to'. Your partner can ask you questions.",
            "pt": "Pense nos seus planos para o próximo fim de semana. Compartilhe-os com um parceiro usando 'going to'. Seu parceiro pode fazer perguntas."
          },
          "phrases": [
            {
              "en": "I'm going to relax at home.",
              "pt": "Eu vou relaxar em casa."
            },
            {
              "en": "Are you going to cook dinner?",
              "pt": "Você vai cozinhar o jantar?"
            },
            {
              "en": "My family is going to visit me.",
              "pt": "Minha família vai me visitar."
            }
          ],
          "check": [
            {
              "id": "b22c-act1-1",
              "prompt": {
                "en": "Which phrase expresses a future plan?",
                "pt": "Qual frase expressa um plano futuro?"
              },
              "options": [
                "I went to the park.",
                "I am going to buy a book.",
                "I like to read.",
                "I bought a book."
              ],
              "answer": "I am going to buy a book.",
              "explanation": {
                "en": "This sentence uses 'am going to' to show a future intention.",
                "pt": "Esta frase usa 'am going to' para mostrar uma intenção futura."
              }
            },
            {
              "id": "b22c-act1-2",
              "prompt": {
                "en": "What is the correct response to 'Thanks for your help!'?",
                "pt": "Qual é a resposta correta para 'Thanks for your help!'?"
              },
              "options": [
                "Yes, I do.",
                "You're welcome.",
                "No, thank you.",
                "It's a plan."
              ],
              "answer": "You're welcome.",
              "explanation": {
                "en": "'You're welcome' is a common reply to 'Thanks for your help!'.",
                "pt": "'You're welcome' é uma resposta comum para 'Thanks for your help!'."
              }
            }
          ]
        },
        {
          "id": "b22c-act2",
          "title": {
            "en": "Make Questions: About Future Plans",
            "pt": "Faça Perguntas: Sobre Planos Futuros"
          },
          "instruction": {
            "en": "Look at the statements. Form questions using 'going to'.",
            "pt": "Olhe as afirmações. Forme perguntas usando 'going to'."
          },
          "phrases": [
            {
              "en": "Statement: She is going to travel to Europe.",
              "pt": "Afirmação: Ela vai viajar para a Europa."
            },
            {
              "en": "Question: Is she going to travel to Europe?",
              "pt": "Pergunta: Ela vai viajar para a Europa?"
            },
            {
              "en": "Statement: They are going to start a new business.",
              "pt": "Afirmação: Eles vão começar um novo negócio."
            },
            {
              "en": "Question: Are they going to start a new business?",
              "pt": "Pergunta: Eles vão começar um novo negócio?"
            },
            {
              "en": "Statement: I am going to learn a new language.",
              "pt": "Afirmação: Eu vou aprender um novo idioma."
            },
            {
              "en": "Question: Are you going to learn a new language?",
              "pt": "Pergunta: Você vai aprender um novo idioma?"
            }
          ],
          "check": [
            {
              "id": "b22c-act2-1",
              "prompt": {
                "en": "Change to a question: You are going to study English.",
                "pt": "Mude para uma pergunta: Você vai estudar inglês."
              },
              "options": [
                "Are you going to study English?",
                "You are going to study English?",
                "Going to study English you?",
                "Study English you are going to?"
              ],
              "answer": "Are you going to study English?",
              "explanation": {
                "en": "To form a question with 'going to', invert the subject and the verb 'to be'.",
                "pt": "Para formar uma pergunta com 'going to', inverta o sujeito e o verbo 'to be'."
              }
            },
            {
              "id": "b22c-act2-2",
              "prompt": {
                "en": "Which word means 'intenção' in English?",
                "pt": "Qual palavra significa 'intenção' em inglês?"
              },
              "options": [
                "plan",
                "goal",
                "intention",
                "dream"
              ],
              "answer": "intention",
              "explanation": {
                "en": "'Intention' is the English word for 'intenção'.",
                "pt": "'Intention' é a palavra em inglês para 'intenção'."
              }
            }
          ]
        },
        {
          "id": "b22c-act3",
          "title": {
            "en": "Build Sentences: My Future Intentions",
            "pt": "Construa Frases: Minhas Intenções Futuras"
          },
          "instruction": {
            "en": "Use the words to build a sentence about a future intention.",
            "pt": "Use as palavras para construir uma frase sobre uma intenção futura."
          },
          "phrases": [
            {
              "en": "Words: I / visit / my grandparents / weekend",
              "pt": "Palavras: Eu / visitar / meus avós / fim de semana"
            },
            {
              "en": "Sentence: I am going to visit my grandparents this weekend.",
              "pt": "Frase: Eu vou visitar meus avós neste fim de semana."
            },
            {
              "en": "Words: My friend / start / new job / next month",
              "pt": "Palavras: Meu amigo / começar / novo emprego / próximo mês"
            },
            {
              "en": "Sentence: My friend is going to start a new job next month.",
              "pt": "Frase: Meu amigo vai começar um novo emprego no próximo mês."
            },
            {
              "en": "Words: We / buy / a house / soon",
              "pt": "Palavras: Nós / comprar / uma casa / em breve"
            },
            {
              "en": "Sentence: We are going to buy a house soon.",
              "pt": "Frase: Nós vamos comprar uma casa em breve."
            }
          ],
          "check": [
            {
              "id": "b22c-act3-1",
              "prompt": {
                "en": "Build a sentence: My sister / study / medicine / college",
                "pt": "Construa uma frase: Minha irmã / estudar / medicina / faculdade"
              },
              "options": [
                "My sister is going to study medicine in college.",
                "My sister going to study medicine college.",
                "My sister are going to study medicine college.",
                "My sister studies medicine in college."
              ],
              "answer": "My sister is going to study medicine in college.",
              "explanation": {
                "en": "The correct structure for future plans is 'is going to + base verb'.",
                "pt": "A estrutura correta para planos futuros é 'is going to + verbo base'."
              }
            },
            {
              "id": "b22c-act3-2",
              "prompt": {
                "en": "What does 'opportunity' mean?",
                "pt": "O que 'opportunity' significa?"
              },
              "options": [
                "a problem",
                "a chance",
                "a decision",
                "a dream"
              ],
              "answer": "a chance",
              "explanation": {
                "en": "'Opportunity' means a favorable chance or occasion.",
                "pt": "'Opportunity' significa uma chance ou ocasião favorável."
              }
            }
          ]
        },
        {
          "id": "b22c-act4",
          "title": {
            "en": "Role-play: Asking and Sharing Plans",
            "pt": "Role-play: Perguntando e Compartilhando Planos"
          },
          "instruction": {
            "en": "Work with a partner. One person asks about future plans, the other answers. Use 'going to' and 'thanking expressions'.",
            "pt": "Trabalhe com um parceiro. Uma pessoa pergunta sobre planos futuros, a outra responde. Use 'going to' e expressões de agradecimento."
          },
          "phrases": [
            {
              "en": "A: What are you going to do for your birthday?",
              "pt": "A: O que você vai fazer no seu aniversário?"
            },
            {
              "en": "B: I'm going to have a small party. Would you like to come?",
              "pt": "B: Eu vou fazer uma pequena festa. Você gostaria de vir?"
            },
            {
              "en": "A: Thanks for your help with my project!",
              "pt": "A: Obrigado(a) pela sua ajuda com o meu projeto!"
            },
            {
              "en": "B: You're welcome. It was a pleasure.",
              "pt": "B: De nada. Foi um prazer."
            }
          ],
          "check": [
            {
              "id": "b22c-act4-1",
              "prompt": {
                "en": "If someone asks 'What are you going to do tomorrow?', how can you respond using a future plan?",
                "pt": "Se alguém pergunta 'O que você vai fazer amanhã?', como você pode responder usando um plano futuro?"
              },
              "options": [
                "I did my homework.",
                "I am going to work.",
                "I usually work.",
                "I work tomorrow."
              ],
              "answer": "I am going to work.",
              "explanation": {
                "en": "'I am going to work' clearly expresses a future plan.",
                "pt": "'Eu vou trabalhar' expressa claramente um plano futuro."
              }
            },
            {
              "id": "b22c-act4-2",
              "prompt": {
                "en": "Your friend says 'I really appreciate it.' What does that mean?",
                "pt": "Seu amigo diz 'I really appreciate it.' O que isso significa?"
              },
              "options": [
                "They are busy.",
                "They are grateful.",
                "They are tired.",
                "They are happy."
              ],
              "answer": "They are grateful.",
              "explanation": {
                "en": "'I really appreciate it' means 'Eu realmente agradeço', showing gratitude.",
                "pt": "'I really appreciate it' significa 'Eu realmente agradeço', mostrando gratidão."
              }
            }
          ]
        },
        {
          "id": "b22c-act5",
          "title": {
            "en": "Talk to Your Partner: Big Dreams and Resolutions",
            "pt": "Converse com seu Parceiro: Grandes Sonhos e Resoluções"
          },
          "instruction": {
            "en": "Discuss your big dreams or New Year's resolutions with your partner. Explain what you are going to do to achieve them.",
            "pt": "Discuta seus grandes sonhos ou resoluções de Ano Novo com seu parceiro. Explique o que você vai fazer para alcançá-los."
          },
          "phrases": [
            {
              "en": "My dream is to travel the world. I'm going to save money every month.",
              "pt": "Meu sonho é viajar o mundo. Eu vou economizar dinheiro todos os meses."
            },
            {
              "en": "My resolution is to learn a new skill. I'm going to take online classes.",
              "pt": "Minha resolução é aprender uma nova habilidade. Eu vou fazer aulas online."
            },
            {
              "en": "What is your biggest career goal? How are you going to reach it?",
              "pt": "Qual é o seu maior objetivo de carreira? Como você vai alcançá-lo?"
            }
          ],
          "check": [
            {
              "id": "b22c-act5-1",
              "prompt": {
                "en": "Which word from the vocabulary means a firm decision?",
                "pt": "Qual palavra do vocabulário significa uma decisão firme?"
              },
              "options": [
                "opportunity",
                "dream",
                "resolution",
                "project"
              ],
              "answer": "resolution",
              "explanation": {
                "en": "'Resolution' is a firm decision.",
                "pt": "'Resolução' é uma decisão firme."
              }
            },
            {
              "id": "b22c-act5-2",
              "prompt": {
                "en": "If someone asks 'What is your biggest dream?', which of these is an appropriate answer?",
                "pt": "Se alguém pergunta 'Qual é o seu maior sonho?', qual destas é uma resposta apropriada?"
              },
              "options": [
                "My dream is to fly.",
                "I dreamed last night.",
                "Dreams are important.",
                "I don't have dreams."
              ],
              "answer": "My dream is to fly.",
              "explanation": {
                "en": "This directly answers the question about a personal dream.",
                "pt": "Isso responde diretamente à pergunta sobre um sonho pessoal."
              }
            }
          ]
        }
      ],
      "challenge": {
        "id": "b22c-challenge",
        "title": {
          "en": "Planning a Group Activity",
          "pt": "Planejando uma Atividade em Grupo"
        },
        "instruction": {
          "en": "Imagine you and your classmates are going to plan a fun group activity for next month. Discuss ideas for the activity, who is going to do what, and thank each other for contributions. Use 'going to' and 'thanking expressions'.",
          "pt": "Imagine que você e seus colegas de classe vão planejar uma atividade divertida em grupo para o próximo mês. Discutam ideias para a atividade, quem vai fazer o quê e agradeçam uns aos outros pelas contribuições. Use 'going to' e expressões de agradecimento."
        },
        "phrases": [
          {
            "en": "We are going to have a picnic in the park.",
            "pt": "Nós vamos fazer um piquenique no parque."
          },
          {
            "en": "Who is going to bring the drinks?",
            "pt": "Quem vai trazer as bebidas?"
          },
          {
            "en": "Thanks for organizing this!",
            "pt": "Obrigado(a) por organizar isso!"
          }
        ],
        "check": [
          {
            "id": "b22c-ch1",
            "prompt": {
              "en": "In a group discussion about plans, which question is most appropriate?",
              "pt": "Em uma discussão em grupo sobre planos, qual pergunta é mais apropriada?"
            },
            "options": [
              "What did you do yesterday?",
              "What are we going to do?",
              "What are you doing now?",
              "What will you do?"
            ],
            "answer": "What are we going to do?",
            "explanation": {
              "en": "'What are we going to do?' directly asks about collective future plans.",
              "pt": "'O que vamos fazer?' pergunta diretamente sobre planos futuros coletivos."
            }
          },
          {
            "id": "b22c-ch2",
            "prompt": {
              "en": "Someone helped you with the challenge. How can you show gratitude?",
              "pt": "Alguém te ajudou com o desafio. Como você pode mostrar gratidão?"
            },
            "options": [
              "I don't like it.",
              "I really appreciate it.",
              "I'm going to leave.",
              "That's a good plan."
            ],
            "answer": "I really appreciate it.",
            "explanation": {
              "en": "'I really appreciate it' is a strong expression of gratitude.",
              "pt": "'I really appreciate it' é uma forte expressão de gratidão."
            }
          }
        ]
      },
      "lessonReview": {
        "summary": {
          "en": "In this unit, you learned how to talk about future plans and intentions using 'going to'. You also practiced vocabulary for future plans and expressions for 'thanking'.",
          "pt": "Nesta unidade, você aprendeu a falar sobre planos e intenções futuras usando 'going to'. Você também praticou vocabulário para planos futuros e expressões para 'agradecer'."
        },
        "canDo": [
          {
            "en": "I can talk about my future plans using 'going to'.",
            "pt": "Consigo falar sobre meus planos futuros usando 'going to'."
          },
          {
            "en": "I can use vocabulary related to plans and intentions (goal, dream, opportunity).",
            "pt": "Consigo usar vocabulário relacionado a planos e intenções (meta, sonho, oportunidade)."
          },
          {
            "en": "I can use expressions to thank people.",
            "pt": "Consigo usar expressões para agradecer às pessoas."
          }
        ],
        "next": {
          "en": "In the next unit, we are going to explore different ways to talk about the future and conditional sentences.",
          "pt": "Na próxima unidade, vamos explorar diferentes formas de falar sobre o futuro e frases condicionais."
        }
      }
    }
  },
  {
    "code": "BEGINNER-U23",
    "number": 23,
    "title": "Directions - Future with will",
    "titlePt": "Direções - Futuro com will",
    "cefr": "A1",
    "objective": {
      "en": "To teach directions and future with 'will' for predictions and spontaneous decisions in a contextualized way.",
      "pt": "Ensinar direções e futuro com 'will' para previsões e decisões espontâneas de forma contextualizada."
    },
    "communicationGoal": {
      "en": "Students will be able to use 'directions' and 'directions vocabulary' to communicate in real situations.",
      "pt": "O aluno será capaz de usar 'directions' e o vocabulário de direções para se comunicar em situações reais."
    },
    "prerequisites": {
      "en": "Grammar: Future with going to for plans and intentions. Vocabulary: Future plans.",
      "pt": "Estrutura: Future with going to for plans and intentions. Vocabulário: Plans Future."
    },
    "newContent": {
      "en": "Grammar: Future with will for predictions and spontaneous decisions. | Vocabulary: Directions (10 lexical items) | Expressions: Directions",
      "pt": "Gramática: Future with will for predictions and spontaneous decisions. | Vocabulário: Direções (10 itens lexicais) | Expressões: Direções"
    },
    "reviewContent": {
      "en": "Spiral review: Superlative adjectives (-est / the most + adjective) (Unit 18). Vocabulary review: Food Drinks (Unit 13).",
      "pt": "Revisão em espiral: Superlative adjectives (-est / the most + adjective) (Unidade 18). Revisão de vocabulário: Food Drinks (Unidade 13)."
    },
    "discover": {
      "id": "BEGINNER-U23-DISCOVER",
      "warmUp": {
        "prompt": {
          "en": "Look at the pictures. How do you ask for directions in English? What directions do you know?",
          "pt": "Olhe as imagens. Como você pede direções em inglês? Que direções você conhece?"
        },
        "phrases": [
          {
            "en": "Excuse me, where is the bus stop?",
            "pt": "Com licença, onde fica o ponto de ônibus?"
          },
          {
            "en": "Go straight, then turn left.",
            "pt": "Vá reto, depois vire à esquerda."
          },
          {
            "en": "It's on the right.",
            "pt": "É à direita."
          }
        ]
      },
      "context": {
        "situation": {
          "en": "Ana is a tourist in London. She needs to find the British Museum.",
          "pt": "Ana é uma turista em Londres. Ela precisa encontrar o British Museum."
        },
        "dialogue": [
          {
            "who": "Ana",
            "en": "Excuse me, can you help me?",
            "pt": "Com licença, você pode me ajudar?"
          },
          {
            "who": "Man",
            "en": "Of course. How can I help?",
            "pt": "Claro. Como posso ajudar?"
          },
          {
            "who": "Ana",
            "en": "Where is the British Museum?",
            "pt": "Onde fica o British Museum?"
          },
          {
            "who": "Man",
            "en": "The British Museum? Ah, go straight on this street. Then, turn left at the traffic lights. It will be opposite the big church.",
            "pt": "O British Museum? Ah, vá reto nesta rua. Depois, vire à esquerda no semáforo. Ele estará em frente à igreja grande."
          },
          {
            "who": "Ana",
            "en": "Thank you so much!",
            "pt": "Muito obrigada!"
          },
          {
            "who": "Man",
            "en": "You're welcome! I think you will enjoy it.",
            "pt": "De nada! Acho que você vai gostar."
          }
        ]
      },
      "vocabulary": [
        {
          "term": "turn left",
          "pt": "virar à esquerda",
          "ipa": "/tɜːrn lɛft/",
          "definition": "To go in the left direction.",
          "example": "At the corner, turn left.",
          "examplePt": "Na esquina, vire à esquerda."
        },
        {
          "term": "turn right",
          "pt": "virar à direita",
          "ipa": "/tɜːrn raɪt/",
          "definition": "To go in the right direction.",
          "example": "Go straight and then turn right.",
          "examplePt": "Vá reto e depois vire à direita."
        },
        {
          "term": "go straight",
          "pt": "ir reto",
          "ipa": "/ɡoʊ streɪt/",
          "definition": "To continue moving forward without turning.",
          "example": "Go straight for two blocks.",
          "examplePt": "Vá reto por dois quarteirões."
        },
        {
          "term": "cross the street",
          "pt": "atravessar a rua",
          "ipa": "/krɒs ðə striːt/",
          "definition": "To go from one side of the street to the other.",
          "example": "Be careful when you cross the street.",
          "examplePt": "Tenha cuidado quando você atravessar a rua."
        },
        {
          "term": "next to",
          "pt": "ao lado de",
          "ipa": "/nɛkst tuː/",
          "definition": "Beside; adjacent to.",
          "example": "The cafe is next to the bookstore.",
          "examplePt": "O café é ao lado da livraria."
        },
        {
          "term": "opposite",
          "pt": "em frente a",
          "ipa": "/ˈɒpəzɪt/",
          "definition": "Facing someone or something else; on the other side.",
          "example": "The park is opposite the school.",
          "examplePt": "O parque é em frente à escola."
        },
        {
          "term": "between",
          "pt": "entre",
          "ipa": "/bɪˈtwiːn/",
          "definition": "In the space separating two objects or places.",
          "example": "The bank is between the post office and the library.",
          "examplePt": "O banco é entre o correio e a biblioteca."
        },
        {
          "term": "on the corner",
          "pt": "na esquina",
          "ipa": "/ɒn ðə ˈkɔːrnər/",
          "definition": "At the intersection of two streets.",
          "example": "The supermarket is on the corner.",
          "examplePt": "O supermercado é na esquina."
        },
        {
          "term": "near",
          "pt": "perto de",
          "ipa": "/nɪər/",
          "definition": "A short distance from.",
          "example": "Is the museum near here?",
          "examplePt": "O museu é perto daqui?"
        },
        {
          "term": "far from",
          "pt": "longe de",
          "ipa": "/fɑːr frɒm/",
          "definition": "A long distance from.",
          "example": "The station is far from my house.",
          "examplePt": "A estação é longe da minha casa."
        }
      ],
      "expressions": [
        {
          "en": "Excuse me, where is the bank?",
          "pt": "Com licença, onde fica o banco?"
        },
        {
          "en": "Turn left at the corner.",
          "pt": "Vire à esquerda na esquina."
        },
        {
          "en": "It's next to the pharmacy.",
          "pt": "É ao lado da farmácia."
        }
      ],
      "grammar": [
        {
          "title": {
            "en": "Future with 'will' for predictions and spontaneous decisions",
            "pt": "Futuro com 'will' para previsões e decisões espontâneas"
          },
          "examples": [
            {
              "en": "I think it will rain tomorrow.",
              "pt": "Eu acho que vai chover amanhã."
            },
            {
              "en": "I'll help you with that.",
              "pt": "Eu vou te ajudar com isso."
            },
            {
              "en": "Maybe she will call us later.",
              "pt": "Talvez ela nos ligue mais tarde."
            }
          ],
          "rule": {
            "en": "Use 'will' + base verb for future predictions and decisions made at the moment of speaking. For spontaneous decisions, we often use the contraction 'I'll'.",
            "pt": "Use 'will' + verbo no infinitivo para previsões futuras e decisões tomadas no momento da fala. Para decisões espontâneas, frequentemente usamos a contração 'I'll'."
          },
          "mistakes": [
            {
              "en": "Incorrect: I will to go to the party. Correct: I will go to the party.",
              "pt": "Incorreto: Eu vou ir para a festa. Correto: Eu irei para a festa."
            },
            {
              "en": "Incorrect: He will goes to the park. Correct: He will go to the park.",
              "pt": "Incorreto: Ele irá ao parque. Correto: Ele irá ao parque."
            }
          ]
        }
      ],
      "controlledPractice": [
        {
          "id": "b23d-cp1",
          "prompt": {
            "en": "Choose the correct direction: The park is ___ the supermarket and the library.",
            "pt": "Escolha a direção correta: O parque fica ___ o supermercado e a biblioteca."
          },
          "options": [
            "opposite",
            "between",
            "near",
            "far from"
          ],
          "answer": "between",
          "explanation": {
            "en": "'Between' means in the middle of two things.",
            "pt": "'Between' significa no meio de duas coisas."
          }
        },
        {
          "id": "b23d-cp2",
          "prompt": {
            "en": "Complete the sentence: 'I think it ___ hot tomorrow.'",
            "pt": "Complete a frase: 'Eu acho que ___ quente amanhã.'"
          },
          "options": [
            "is",
            "will be",
            "am",
            "going to be"
          ],
          "answer": "will be",
          "explanation": {
            "en": "'Will be' is used for a future prediction.",
            "pt": "'Will be' é usado para uma previsão futura."
          }
        },
        {
          "id": "b23d-cp3",
          "prompt": {
            "en": "You are lost. What do you say?",
            "pt": "Você está perdido. O que você diz?"
          },
          "options": [
            "Go straight!",
            "Turn right!",
            "Excuse me, where is the hotel?",
            "It's near."
          ],
          "answer": "Excuse me, where is the hotel?",
          "explanation": {
            "en": "'Excuse me, where is...?' is how you ask for directions.",
            "pt": "'Excuse me, where is...?' é como você pede direções."
          }
        },
        {
          "id": "b23d-cp4",
          "prompt": {
            "en": "Which sentence shows a spontaneous decision?",
            "pt": "Qual frase mostra uma decisão espontânea?"
          },
          "options": [
            "I am going to study tonight.",
            "I will visit my family next month.",
            "Oh, the phone is ringing. I'll answer it!",
            "They are traveling to Brazil next year."
          ],
          "answer": "Oh, the phone is ringing. I'll answer it!",
          "explanation": {
            "en": "A spontaneous decision is made at the moment of speaking.",
            "pt": "Uma decisão espontânea é feita no momento da fala."
          }
        }
      ],
      "input": {
        "kind": "reading",
        "title": {
          "en": "A Trip to the City Center",
          "pt": "Uma Viagem ao Centro da Cidade"
        },
        "lines": [
          {
            "en": "Hello, Tom! How are you?",
            "pt": "Olá, Tom! Como você está?"
          },
          {
            "en": "I'm good, Lisa. I'm going to the city center now. I want to buy a new book.",
            "pt": "Estou bem, Lisa. Estou indo para o centro da cidade agora. Quero comprar um livro novo."
          },
          {
            "en": "Oh, that's nice! The biggest bookstore is near the main square. Go straight for three blocks. Then, cross the street. It's opposite the cinema.",
            "pt": "Ah, que bom! A maior livraria fica perto da praça principal. Vá reto por três quarteirões. Depois, atravesse a rua. Fica em frente ao cinema."
          },
          {
            "en": "Thank you, Lisa! I think it will be easy to find. I'll call you later to tell you about my new book.",
            "pt": "Obrigado, Lisa! Acho que será fácil de encontrar. Te ligo mais tarde para te contar sobre o meu livro novo."
          },
          {
            "en": "Great! Have a good time!",
            "pt": "Ótimo! Tenha um bom tempo!"
          }
        ],
        "questions": [
          {
            "id": "b23d-in1",
            "prompt": {
              "en": "Where is Tom going?",
              "pt": "Para onde Tom está indo?"
            },
            "options": [
              "To the cinema",
              "To the main square",
              "To the city center",
              "To Lisa's house"
            ],
            "answer": "To the city center",
            "explanation": {
              "en": "Tom says: 'I'm going to the city center now.'",
              "pt": "Tom diz: 'Estou indo para o centro da cidade agora.'"
            }
          },
          {
            "id": "b23d-in2",
            "prompt": {
              "en": "How many blocks should Tom go straight?",
              "pt": "Quantos quarteirões Tom deve ir reto?"
            },
            "options": [
              "One",
              "Two",
              "Three",
              "Four"
            ],
            "answer": "Three",
            "explanation": {
              "en": "Lisa says: 'Go straight for three blocks.'",
              "pt": "Lisa diz: 'Vá reto por três quarteirões.'"
            }
          },
          {
            "id": "b23d-in3",
            "prompt": {
              "en": "What will Tom do after finding the bookstore?",
              "pt": "O que Tom fará depois de encontrar a livraria?"
            },
            "options": [
              "He will go to the cinema.",
              "He will call Lisa.",
              "He will buy food.",
              "He will go home."
            ],
            "answer": "He will call Lisa.",
            "explanation": {
              "en": "Tom says: 'I'll call you later to tell you about my new book.'",
              "pt": "Tom diz: 'Te ligo mais tarde para te contar sobre o meu livro novo.'"
            }
          }
        ]
      },
      "quickCheck": [
        {
          "id": "b23d-qc1",
          "prompt": {
            "en": "Which is correct? 'I think it ___ cold tomorrow.'",
            "pt": "Qual está correta? 'Eu acho que ___ frio amanhã.'"
          },
          "options": [
            "is",
            "will be",
            "am",
            "be"
          ],
          "answer": "will be",
          "explanation": {
            "en": "Use 'will be' for future predictions.",
            "pt": "Use 'will be' para previsões futuras."
          }
        },
        {
          "id": "b23d-qc2",
          "prompt": {
            "en": "The bank is ___ the park. (Image of bank on the other side of park)",
            "pt": "O banco é ___ o parque. (Imagem de banco do outro lado do parque)"
          },
          "options": [
            "next to",
            "opposite",
            "between",
            "near"
          ],
          "answer": "opposite",
          "explanation": {
            "en": "'Opposite' means on the other side.",
            "pt": "'Opposite' significa do outro lado."
          }
        },
        {
          "id": "b23d-qc3",
          "prompt": {
            "en": "You need to change direction to the left. What do you say?",
            "pt": "Você precisa mudar de direção para a esquerda. O que você diz?"
          },
          "options": [
            "Go straight!",
            "Turn left!",
            "Cross the street!",
            "Turn right!"
          ],
          "answer": "Turn left!",
          "explanation": {
            "en": "'Turn left' means to go to the left.",
            "pt": "'Turn left' significa ir para a esquerda."
          }
        },
        {
          "id": "b23d-qc4",
          "prompt": {
            "en": "Which phrase is a spontaneous decision?",
            "pt": "Qual frase é uma decisão espontânea?"
          },
          "options": [
            "I'm going to travel next month.",
            "I'll open the door for you.",
            "She is visiting her parents on Friday.",
            "They are having dinner at 8 PM."
          ],
          "answer": "I'll open the door for you.",
          "explanation": {
            "en": "This decision is made at the moment of speaking.",
            "pt": "Esta decisão é feita no momento da fala."
          }
        }
      ]
    },
    "communicate": {
      "id": "BEGINNER-U23-COMMUNICATE",
      "review": [
        {
          "en": "Remember the vocabulary for directions: turn left, turn right, go straight, cross the street, next to, opposite, between, on the corner, near, far from.",
          "pt": "Lembre-se do vocabulário para direções: virar à esquerda, virar à direita, ir reto, atravessar a rua, ao lado de, em frente a, entre, na esquina, perto de, longe de."
        },
        {
          "en": "We use 'will' for predictions and spontaneous decisions. Example: 'I think it will be sunny.' or 'I'll help you!'",
          "pt": "Usamos 'will' para previsões e decisões espontâneas. Exemplo: 'Acho que fará sol.' ou 'Eu te ajudo!'"
        },
        {
          "en": "We also reviewed Superlative Adjectives (e.g., the biggest, the most interesting) and Food Drinks vocabulary.",
          "pt": "Também revisamos Adjetivos Superlativos (ex: o maior, o mais interessante) e vocabulário de Alimentos e Bebidas."
        }
      ],
      "activities": [
        {
          "id": "b23c-act1",
          "title": {
            "en": "Complete the Conversation",
            "pt": "Complete a Conversa"
          },
          "instruction": {
            "en": "Complete the dialogue with the correct words or phrases for directions and future 'will'.",
            "pt": "Complete o diálogo com as palavras ou frases corretas para direções e futuro com 'will'."
          },
          "phrases": [
            {
              "en": "Excuse me, ___ is the bus stop?",
              "pt": "Com licença, ___ é o ponto de ônibus?"
            },
            {
              "en": "Go straight for two blocks, then ___ left.",
              "pt": "Vá reto por dois quarteirões, depois ___ à esquerda."
            },
            {
              "en": "It's ___ to the park.",
              "pt": "Fica ___ do parque."
            }
          ],
          "check": [
            {
              "id": "b23c-act1-1",
              "prompt": {
                "en": "Complete: 'Excuse me, ___ is the bus stop?'",
                "pt": "Complete: 'Com licença, ___ é o ponto de ônibus?'"
              },
              "options": [
                "what",
                "how",
                "where",
                "when"
              ],
              "answer": "where",
              "explanation": {
                "en": "We ask 'Where is...?' for location.",
                "pt": "Perguntamos 'Where is...?' para localização."
              }
            },
            {
              "id": "b23c-act1-2",
              "prompt": {
                "en": "Complete: 'Go straight for two blocks, then ___ left.'",
                "pt": "Complete: 'Vá reto por dois quarteirões, depois ___ à esquerda.'"
              },
              "options": [
                "go",
                "turn",
                "cross",
                "walk"
              ],
              "answer": "turn",
              "explanation": {
                "en": "'Turn left' is the correct expression.",
                "pt": "'Turn left' é a expressão correta."
              }
            }
          ]
        },
        {
          "id": "b23c-act2",
          "title": {
            "en": "Dialogue Practice",
            "pt": "Prática de Diálogo"
          },
          "instruction": {
            "en": "Work with a partner. Create a dialogue asking for and giving directions to places like a cinema, a restaurant, or a bank. Use 'will' for predictions.",
            "pt": "Trabalhe com um colega. Crie um diálogo pedindo e dando direções para lugares como um cinema, um restaurante ou um banco. Use 'will' para previsões."
          },
          "phrases": [
            {
              "en": "Excuse me, where is the nearest post office?",
              "pt": "Com licença, onde fica o correio mais próximo?"
            },
            {
              "en": "It's on the corner, opposite the library. I think you will find it easily.",
              "pt": "É na esquina, em frente à biblioteca. Acho que você vai encontrá-lo facilmente."
            },
            {
              "en": "Thank you! I'll go there now.",
              "pt": "Obrigado! Vou para lá agora."
            }
          ],
          "check": [
            {
              "id": "b23c-act2-1",
              "prompt": {
                "en": "If a place is 'opposite' another, where is it?",
                "pt": "Se um lugar é 'opposite' a outro, onde ele fica?"
              },
              "options": [
                "Next to it",
                "Behind it",
                "In front of it",
                "Far from it"
              ],
              "answer": "In front of it",
              "explanation": {
                "en": "'Opposite' means facing or on the other side.",
                "pt": "'Opposite' significa de frente ou do outro lado."
              }
            },
            {
              "id": "b23c-act2-2",
              "prompt": {
                "en": "Which sentence uses 'will' for a prediction?",
                "pt": "Qual frase usa 'will' para uma previsão?"
              },
              "options": [
                "I'm hungry.",
                "She is happy.",
                "They will arrive soon.",
                "He went home."
              ],
              "answer": "They will arrive soon.",
              "explanation": {
                "en": "'Will arrive' is a prediction about a future event.",
                "pt": "'Will arrive' é uma previsão sobre um evento futuro."
              }
            }
          ]
        },
        {
          "id": "b23c-act3",
          "title": {
            "en": "Talk About Yourself",
            "pt": "Fale Sobre Você"
          },
          "instruction": {
            "en": "Think about your neighborhood. Describe how to get from your home to three different places. Use future with 'will' to talk about what you think will happen or what you'll do.",
            "pt": "Pense no seu bairro. Descreva como chegar da sua casa a três lugares diferentes. Use o futuro com 'will' para falar sobre o que você acha que vai acontecer ou o que você fará."
          },
          "phrases": [
            {
              "en": "From my house, go straight for two blocks. The bakery is next to the pharmacy.",
              "pt": "Da minha casa, vá reto por dois quarteirões. A padaria é ao lado da farmácia."
            },
            {
              "en": "I think it will be a nice walk.",
              "pt": "Acho que será uma caminhada agradável."
            },
            {
              "en": "I'll buy some fresh bread.",
              "pt": "Eu vou comprar pão fresco."
            }
          ],
          "check": [
            {
              "id": "b23c-act3-1",
              "prompt": {
                "en": "How do you say 'longe de' in English?",
                "pt": "Como se diz 'longe de' em inglês?"
              },
              "options": [
                "near",
                "far from",
                "next to",
                "on the corner"
              ],
              "answer": "far from",
              "explanation": {
                "en": "'Far from' means a long distance away.",
                "pt": "'Far from' significa a uma longa distância."
              }
            },
            {
              "id": "b23c-act3-2",
              "prompt": {
                "en": "Which sentence uses 'will' for a spontaneous decision?",
                "pt": "Qual frase usa 'will' para uma decisão espontânea?"
              },
              "options": [
                "I'll call my mom right now.",
                "It will rain tomorrow.",
                "She will be 10 next year.",
                "We will go to the beach in July."
              ],
              "answer": "I'll call my mom right now.",
              "explanation": {
                "en": "This is a decision made at the moment of speaking.",
                "pt": "Esta é uma decisão feita no momento da fala."
              }
            }
          ]
        },
        {
          "id": "b23c-act4",
          "title": {
            "en": "Describe",
            "pt": "Descreva"
          },
          "instruction": {
            "en": "Look at a map of a city. Describe how to get from one point to another using the directions vocabulary. Imagine you are describing it to someone who has never been there.",
            "pt": "Olhe um mapa de uma cidade. Descreva como ir de um ponto a outro usando o vocabulário de direções. Imagine que você está descrevendo para alguém que nunca esteve lá."
          },
          "phrases": [
            {
              "en": "From the park, turn right. Go straight for one block.",
              "pt": "Do parque, vire à direita. Vá reto por um quarteirão."
            },
            {
              "en": "The museum is on the corner, opposite the cafe.",
              "pt": "O museu é na esquina, em frente ao café."
            },
            {
              "en": "I think you will like the museum.",
              "pt": "Acho que você vai gostar do museu."
            }
          ],
          "check": [
            {
              "id": "b23c-act4-1",
              "prompt": {
                "en": "If a place is 'on the corner', where is it?",
                "pt": "Se um lugar é 'on the corner', onde ele fica?"
              },
              "options": [
                "In the middle of the street",
                "At the intersection of two streets",
                "Far from the streets",
                "Next to a river"
              ],
              "answer": "At the intersection of two streets",
              "explanation": {
                "en": "'On the corner' means where two streets meet.",
                "pt": "'On the corner' significa onde duas ruas se encontram."
              }
            },
            {
              "id": "b23c-act4-2",
              "prompt": {
                "en": "Which sentence is a prediction?",
                "pt": "Qual frase é uma previsão?"
              },
              "options": [
                "I am eating lunch.",
                "She will pass the exam.",
                "We went to the beach.",
                "He is watching TV."
              ],
              "answer": "She will pass the exam.",
              "explanation": {
                "en": "'Will pass' indicates a future prediction.",
                "pt": "'Will pass' indica uma previsão futura."
              }
            }
          ]
        },
        {
          "id": "b23c-act5",
          "title": {
            "en": "Give Your Opinion",
            "pt": "Dê Sua Opinião"
          },
          "instruction": {
            "en": "Discuss with your partner about the importance of knowing directions when traveling. Use 'will' to talk about future possibilities and what you'll do.",
            "pt": "Discuta com seu colega sobre a importância de saber direções ao viajar. Use 'will' para falar sobre possibilidades futuras e o que você fará."
          },
          "phrases": [
            {
              "en": "I think knowing directions will be very helpful when I travel.",
              "pt": "Acho que saber direções será muito útil quando eu viajar."
            },
            {
              "en": "Yes, I agree. You will not get lost easily.",
              "pt": "Sim, concordo. Você não vai se perder facilmente."
            },
            {
              "en": "I'll study maps before my trip.",
              "pt": "Vou estudar mapas antes da minha viagem."
            }
          ],
          "check": [
            {
              "id": "b23c-act5-1",
              "prompt": {
                "en": "Which expression means to go from one side of the street to the other?",
                "pt": "Qual expressão significa ir de um lado da rua para o outro?"
              },
              "options": [
                "turn right",
                "go straight",
                "cross the street",
                "near"
              ],
              "answer": "cross the street",
              "explanation": {
                "en": "'Cross the street' describes this action.",
                "pt": "'Cross the street' descreve esta ação."
              }
            },
            {
              "id": "b23c-act5-2",
              "prompt": {
                "en": "What does 'I'll' stand for?",
                "pt": "O que 'I'll' significa?"
              },
              "options": [
                "I am",
                "I have",
                "I will",
                "I do"
              ],
              "answer": "I will",
              "explanation": {
                "en": "'I'll' is the contraction of 'I will'.",
                "pt": "'I'll' é a contração de 'I will'."
              }
            }
          ]
        }
      ],
      "challenge": {
        "id": "b23c-chall",
        "title": {
          "en": "Lost in the City",
          "pt": "Perdido na Cidade"
        },
        "instruction": {
          "en": "Imagine you are lost in an unknown city. You need to find a specific landmark (e.g., a famous museum, a big park). Ask a local for directions and then repeat the directions back to confirm. The local should also make a prediction about your journey.",
          "pt": "Imagine que você está perdido em uma cidade desconhecida. Você precisa encontrar um ponto turístico específico (ex: um museu famoso, um grande parque). Peça direções a um local e, em seguida, repita as direções para confirmar. O local também deve fazer uma previsão sobre sua jornada."
        },
        "phrases": [
          {
            "en": "Excuse me, where is the Art Gallery?",
            "pt": "Com licença, onde fica a Galeria de Arte?"
          },
          {
            "en": "Go straight for two blocks, then turn right. It will be opposite the library. I think you will love it!",
            "pt": "Vá reto por dois quarteirões, depois vire à direita. Fica em frente à biblioteca. Acho que você vai adorar!"
          },
          {
            "en": "So, go straight, then turn right. It's opposite the library. Thank you! I'll go now.",
            "pt": "Então, ir reto, depois virar à direita. Fica em frente à biblioteca. Obrigado! Vou agora."
          }
        ],
        "check": [
          {
            "id": "b23c-chall-1",
            "prompt": {
              "en": "What is the meaning of 'go straight'?",
              "pt": "Qual é o significado de 'go straight'?"
            },
            "options": [
              "Virar à esquerda",
              "Virar à direita",
              "Ir reto",
              "Atravessar a rua"
            ],
            "answer": "Ir reto",
            "explanation": {
              "en": "'Go straight' means to continue forward.",
              "pt": "'Go straight' significa continuar em frente."
            }
          },
          {
            "id": "b23c-chall-2",
            "prompt": {
              "en": "Which sentence is a prediction?",
              "pt": "Qual frase é uma previsão?"
            },
            "options": [
              "He likes coffee.",
              "They are students.",
              "It will be sunny tomorrow.",
              "She is reading a book."
            ],
            "answer": "It will be sunny tomorrow.",
            "explanation": {
              "en": "'Will be sunny' is a prediction about future weather.",
              "pt": "'Will be sunny' é uma previsão sobre o clima futuro."
            }
          }
        ]
      },
      "lessonReview": {
        "summary": {
          "en": "In this unit, we learned vocabulary for giving and asking for directions, expressions for typical situations, and how to use 'will' for predictions and spontaneous decisions.",
          "pt": "Nesta unidade, aprendemos vocabulário para dar e pedir direções, expressões para situações típicas e como usar 'will' para previsões e decisões espontâneas."
        },
        "canDo": [
          {
            "en": "Ask for and give directions to places.",
            "pt": "Pedir e dar direções para lugares."
          },
          {
            "en": "Use 'will' to make predictions about the future.",
            "pt": "Usar 'will' para fazer previsões sobre o futuro."
          },
          {
            "en": "Make spontaneous decisions using 'I'll'.",
            "pt": "Tomar decisões espontâneas usando 'I'll'."
          }
        ],
        "next": {
          "en": "In the next unit, we will explore transportation vocabulary and how to talk about travel plans more extensively.",
          "pt": "Na próxima unidade, exploraremos o vocabulário de transporte e como falar sobre planos de viagem de forma mais extensa."
        }
      }
    }
  },
  {
    "code": "BEGINNER-U24",
    "number": 24,
    "title": "Health - Imperatives",
    "titlePt": "Saúde - Imperativos",
    "cefr": "A1",
    "objective": {
      "en": "Teach health vocabulary and imperatives for instructions and directions in a contextualized way.",
      "pt": "Ensinar vocabulário de saúde e imperativos para instruções e direções de forma contextualizada."
    },
    "communicationGoal": {
      "en": "Students will be able to use 'routines' and health vocabulary to communicate in real situations.",
      "pt": "O aluno será capaz de usar 'rotinas' e o vocabulário de saúde para se comunicar em situações reais."
    },
    "prerequisites": {
      "en": "Grammar: Future with 'will' for predictions and spontaneous decisions. Vocabulary: Directions.",
      "pt": "Estrutura: Future with will para previsões e decisões espontâneas. Vocabulário: Directions."
    },
    "newContent": {
      "en": "Grammar: Imperatives for instructions and directions. Vocabulary: Health (10 lexical items). Expressions: Routines.",
      "pt": "Gramática: Imperativos para instruções e direções. Vocabulário: Saúde (10 itens lexicais). Expressões: Rotinas."
    },
    "reviewContent": {
      "en": "Spiral review: Simple Past – verb to be and regular verbs (affirmative), -ed ending (Unit 19). Vocabulary review: Shopping (Unit 14).",
      "pt": "Revisão em espiral: Simple Past – verb to be e verbos regulares (afirmativo), -ed ending (Unidade 19). Revisão de vocabulário: Shopping (Unidade 14)."
    },
    "discover": {
      "id": "BEGINNER-U24-DISCOVER",
      "warmUp": {
        "prompt": {
          "en": "Look at the pictures. What do you see? How do you feel today?",
          "pt": "Observe as imagens. O que você vê? Como você se sente hoje?"
        },
        "phrases": [
          {
            "en": "I see a doctor.",
            "pt": "Eu vejo um médico."
          },
          {
            "en": "I see medicine.",
            "pt": "Eu vejo remédio."
          },
          {
            "en": "I feel good.",
            "pt": "Eu me sinto bem."
          },
          {
            "en": "I feel tired.",
            "pt": "Eu me sinto cansado."
          }
        ]
      },
      "context": {
        "situation": {
          "en": "Maria doesn't feel well. She needs to go to the doctor. Her friend Ana gives her some advice.",
          "pt": "Maria não se sente bem. Ela precisa ir ao médico. Sua amiga Ana lhe dá alguns conselhos."
        },
        "dialogue": [
          {
            "who": "Maria",
            "en": "Ana, I don't feel good. I have a headache.",
            "pt": "Ana, não me sinto bem. Estou com dor de cabeça."
          },
          {
            "who": "Ana",
            "en": "Oh no! Do you have a fever?",
            "pt": "Ah não! Você está com febre?"
          },
          {
            "who": "Maria",
            "en": "I don't think so. But I feel very tired.",
            "pt": "Acho que não. Mas me sinto muito cansada."
          },
          {
            "who": "Ana",
            "en": "You need to rest. And make an appointment with the doctor.",
            "pt": "Você precisa descansar. E marque uma consulta com o médico."
          },
          {
            "who": "Maria",
            "en": "Yes, I will. And maybe I need some medicine.",
            "pt": "Sim, vou fazer isso. E talvez eu precise de algum remédio."
          },
          {
            "who": "Ana",
            "en": "Go to the pharmacy after the doctor. Get well soon!",
            "pt": "Vá à farmácia depois do médico. Melhore logo!"
          }
        ]
      },
      "vocabulary": [
        {
          "term": "headache",
          "pt": "dor de cabeça",
          "ipa": "/ˈhɛdeɪk/",
          "definition": "a pain in the head",
          "example": "I have a terrible headache today.",
          "examplePt": "Eu estou com uma dor de cabeça terrível hoje."
        },
        {
          "term": "fever",
          "pt": "febre",
          "ipa": "/ˈfiːvər/",
          "definition": "a high body temperature",
          "example": "The child has a fever of 39 degrees.",
          "examplePt": "A criança está com febre de 39 graus."
        },
        {
          "term": "cold",
          "pt": "resfriado",
          "ipa": "/koʊld/",
          "definition": "a common illness that makes you sneeze and cough",
          "example": "I caught a cold last week.",
          "examplePt": "Peguei um resfriado na semana passada."
        },
        {
          "term": "doctor",
          "pt": "médico",
          "ipa": "/ˈdɒktər/",
          "definition": "a person trained in medicine to treat the sick",
          "example": "You should see a doctor about your cough.",
          "examplePt": "Você deveria procurar um médico para a sua tosse."
        },
        {
          "term": "pharmacy",
          "pt": "farmácia",
          "ipa": "/ˈfɑːrməsi/",
          "definition": "a place where you buy medicine",
          "example": "I need to go to the pharmacy for some aspirin.",
          "examplePt": "Preciso ir à farmácia comprar um pouco de aspirina."
        },
        {
          "term": "medicine",
          "pt": "remédio",
          "ipa": "/ˈmɛdɪsɪn/",
          "definition": "a substance used for treating illness",
          "example": "Take this medicine three times a day.",
          "examplePt": "Tome este remédio três vezes ao dia."
        },
        {
          "term": "appointment",
          "pt": "consulta",
          "ipa": "/əˈpɔɪntmənt/",
          "definition": "a formal arrangement to meet someone at a particular time",
          "example": "I have a doctor's appointment tomorrow morning.",
          "examplePt": "Tenho uma consulta médica amanhã de manhã."
        },
        {
          "term": "symptom",
          "pt": "sintoma",
          "ipa": "/ˈsɪmptəm/",
          "definition": "a sign of an illness",
          "example": "Fever is a common symptom of a cold.",
          "examplePt": "Febre é um sintoma comum de um resfriado."
        },
        {
          "term": "rest",
          "pt": "descanso, descansar",
          "ipa": "/rɛst/",
          "definition": "to relax, sleep, or be still",
          "example": "You need to rest if you feel sick.",
          "examplePt": "Você precisa descansar se você se sentir doente."
        },
        {
          "term": "exercise",
          "pt": "exercício, exercitar",
          "ipa": "/ˈɛksərsaɪz/",
          "definition": "physical activity that you do to make your body strong and healthy",
          "example": "Regular exercise is good for your health.",
          "examplePt": "Exercício regular é bom para a sua saúde."
        }
      ],
      "expressions": [
        {
          "en": "I usually wake up at 7.",
          "pt": "Eu geralmente acordo às 7."
        },
        {
          "en": "I go to work by bus.",
          "pt": "Eu vou para o trabalho de ônibus."
        },
        {
          "en": "I have dinner at 8.",
          "pt": "Eu janto às 8."
        },
        {
          "en": "I feel good.",
          "pt": "Eu me sinto bem."
        },
        {
          "en": "I feel sick.",
          "pt": "Eu me sinto doente."
        }
      ],
      "grammar": [
        {
          "title": {
            "en": "Imperatives for Instructions and Directions",
            "pt": "Imperativos para Instruções e Direções"
          },
          "examples": [
            {
              "en": "Turn left at the corner.",
              "pt": "Vire à esquerda na esquina."
            },
            {
              "en": "Please close the door.",
              "pt": "Por favor, feche a porta."
            },
            {
              "en": "Take this medicine.",
              "pt": "Tome este remédio."
            },
            {
              "en": "Don't touch that!",
              "pt": "Não toque nisso!"
            },
            {
              "en": "Go straight ahead.",
              "pt": "Siga em frente."
            }
          ],
          "rule": {
            "en": "We use the imperative to give commands, instructions, or directions. We use the base form of the verb. For negative imperatives, we use 'Don't' + base verb.",
            "pt": "Usamos o imperativo para dar comandos, instruções ou direções. Usamos a forma base do verbo. Para imperativos negativos, usamos 'Don't' + verbo na forma base."
          },
          "mistakes": [
            {
              "en": "To go straight.",
              "pt": "O correto é 'Go straight'."
            },
            {
              "en": "You don't talk.",
              "pt": "O correto é 'Don't talk'."
            }
          ]
        }
      ],
      "controlledPractice": [
        {
          "id": "b24d-cp-1",
          "prompt": {
            "en": "Choose the correct imperative form: _______ (go) to the pharmacy.",
            "pt": "Escolha a forma imperativa correta: _______ (ir) à farmácia."
          },
          "options": [
            "To go",
            "Go",
            "Going",
            "Goes"
          ],
          "answer": "Go",
          "explanation": {
            "en": "The imperative uses the base form of the verb.",
            "pt": "O imperativo usa a forma base do verbo."
          }
        },
        {
          "id": "b24d-cp-2",
          "prompt": {
            "en": "Choose the correct imperative form: _______ (not touch) the hot stove.",
            "pt": "Escolha a forma imperativa correta: _______ (não tocar) no fogão quente."
          },
          "options": [
            "Don't touch",
            "Not touch",
            "Do not to touch",
            "Doesn't touch"
          ],
          "answer": "Don't touch",
          "explanation": {
            "en": "For negative imperatives, use 'Don't' + base verb.",
            "pt": "Para imperativos negativos, use 'Don't' + verbo base."
          }
        },
        {
          "id": "b24d-cp-3",
          "prompt": {
            "en": "Which sentence is an instruction? ",
            "pt": "Qual frase é uma instrução?"
          },
          "options": [
            "She walks every day.",
            "He is sleeping.",
            "Drink water.",
            "They like coffee."
          ],
          "answer": "Drink water.",
          "explanation": {
            "en": "'Drink water' is an imperative, giving an instruction.",
            "pt": "'Drink water' é um imperativo, dando uma instrução."
          }
        },
        {
          "id": "b24d-cp-4",
          "prompt": {
            "en": "Complete the sentence: If you have a headache, _______ (rest).",
            "pt": "Complete a frase: Se você tem dor de cabeça, _______ (descansar)."
          },
          "options": [
            "to rest",
            "rest",
            "rests",
            "resting"
          ],
          "answer": "rest",
          "explanation": {
            "en": "Use the base form 'rest' for the imperative.",
            "pt": "Use a forma base 'rest' para o imperativo."
          }
        }
      ],
      "input": {
        "kind": "listening",
        "title": {
          "en": "Doctor's Advice",
          "pt": "Conselhos do Médico"
        },
        "lines": [
          {
            "en": "Hello, Mr. Silva. How are you feeling?",
            "pt": "Olá, Sr. Silva. Como você está se sentindo?"
          },
          {
            "en": "Not good, doctor. I have a cold and a fever.",
            "pt": "Não muito bem, doutor. Estou com um resfriado e febre."
          },
          {
            "en": "I see. Don't worry. Take this medicine three times a day. Rest a lot. Don't go to work for two days.",
            "pt": "Entendo. Não se preocupe. Tome este remédio três vezes ao dia. Descanse bastante. Não vá trabalhar por dois dias."
          },
          {
            "en": "Okay, doctor. And what about exercise?",
            "pt": "Certo, doutor. E quanto a exercícios?"
          },
          {
            "en": "Don't exercise for a week. Drink a lot of water. Come back next week if you don't feel better.",
            "pt": "Não se exercite por uma semana. Beba bastante água. Volte na próxima semana se não se sentir melhor."
          },
          {
            "en": "Thank you, doctor.",
            "pt": "Obrigado, doutor."
          }
        ],
        "questions": [
          {
            "id": "b24d-iq-1",
            "prompt": {
              "en": "What is Mr. Silva's main symptom?",
              "pt": "Qual é o principal sintoma do Sr. Silva?"
            },
            "options": [
              "Headache",
              "Fever",
              "Stomachache",
              "Toothache"
            ],
            "answer": "Fever",
            "explanation": {
              "en": "He says: 'I have a cold and a fever'.",
              "pt": "Ele diz: 'Estou com um resfriado e febre'."
            }
          },
          {
            "id": "b24d-iq-2",
            "prompt": {
              "en": "How many times a day should Mr. Silva take the medicine?",
              "pt": "Quantas vezes ao dia o Sr. Silva deve tomar o remédio?"
            },
            "options": [
              "Once",
              "Twice",
              "Three times",
              "Four times"
            ],
            "answer": "Three times",
            "explanation": {
              "en": "The doctor says: 'Take this medicine three times a day'.",
              "pt": "O médico diz: 'Tome este remédio três vezes ao dia'."
            }
          },
          {
            "id": "b24d-iq-3",
            "prompt": {
              "en": "What is one instruction the doctor gives?",
              "pt": "Qual é uma das instruções que o médico dá?"
            },
            "options": [
              "Go to work.",
              "Drink coffee.",
              "Exercise a lot.",
              "Rest a lot."
            ],
            "answer": "Rest a lot.",
            "explanation": {
              "en": "The doctor says: 'Rest a lot'.",
              "pt": "O médico diz: 'Descanse bastante'."
            }
          }
        ]
      },
      "quickCheck": [
        {
          "id": "b24d-qc-1",
          "prompt": {
            "en": "Which word means 'dor de cabeça'?",
            "pt": "Qual palavra significa 'dor de cabeça'?"
          },
          "options": [
            "Fever",
            "Cold",
            "Headache",
            "Symptom"
          ],
          "answer": "Headache",
          "explanation": {
            "en": "Headache means 'dor de cabeça'.",
            "pt": "Headache significa 'dor de cabeça'."
          }
        },
        {
          "id": "b24d-qc-2",
          "prompt": {
            "en": "What is the correct imperative for 'walk straight'?",
            "pt": "Qual é o imperativo correto para 'andar reto'?"
          },
          "options": [
            "Walk straight.",
            "To walk straight.",
            "Walking straight.",
            "Walks straight."
          ],
          "answer": "Walk straight.",
          "explanation": {
            "en": "The imperative uses the base form of the verb.",
            "pt": "O imperativo usa a forma base do verbo."
          }
        },
        {
          "id": "b24d-qc-3",
          "prompt": {
            "en": "If you are sick, you need to ______.",
            "pt": "Se você está doente, você precisa ______."
          },
          "options": [
            "exercise",
            "work",
            "rest",
            "shop"
          ],
          "answer": "rest",
          "explanation": {
            "en": "When sick, it's important to rest.",
            "pt": "Quando doente, é importante descansar."
          }
        },
        {
          "id": "b24d-qc-4",
          "prompt": {
            "en": "Which of these is a routine expression?",
            "pt": "Qual destas é uma expressão de rotina?"
          },
          "options": [
            "I like pizza.",
            "I usually wake up at 7.",
            "She is happy.",
            "They bought a car."
          ],
          "answer": "I usually wake up at 7.",
          "explanation": {
            "en": "'I usually wake up at 7' describes a routine action.",
            "pt": "'I usually wake up at 7' descreve uma ação de rotina."
          }
        }
      ]
    },
    "communicate": {
      "id": "BEGINNER-U24-COMMUNICATE",
      "review": [
        {
          "en": "Remember the new vocabulary: headache, fever, cold, doctor, pharmacy, medicine, appointment, symptom, rest, exercise.",
          "pt": "Lembre-se do novo vocabulário: dor de cabeça, febre, resfriado, médico, farmácia, remédio, consulta, sintoma, descanso, exercício."
        },
        {
          "en": "Remember how to use imperatives for instructions and directions: 'Take this!', 'Don't go there!'.",
          "pt": "Lembre-se de como usar imperativos para instruções e direções: 'Tome isto!', 'Não vá lá!'."
        },
        {
          "en": "And the routine expressions: 'I usually wake up at 7.', 'I go to work by bus.', 'I have dinner at 8.'.",
          "pt": "E as expressões de rotina: 'Eu geralmente acordo às 7.', 'Eu vou para o trabalho de ônibus.', 'Eu janto às 8.'."
        }
      ],
      "activities": [
        {
          "id": "b24c-act-1",
          "title": {
            "en": "Role-play: At the Doctor's Office",
            "pt": "Role-play: No Consultório Médico"
          },
          "instruction": {
            "en": "Work with a partner. One person is the doctor, the other is the patient. The patient describes symptoms, and the doctor gives advice using imperatives.",
            "pt": "Trabalhe com um colega. Uma pessoa é o médico, a outra é o paciente. O paciente descreve os sintomas, e o médico dá conselhos usando imperativos."
          },
          "phrases": [
            {
              "en": "I have a cold and a headache.",
              "pt": "Estou com resfriado e dor de cabeça."
            },
            {
              "en": "Rest a lot. Drink water.",
              "pt": "Descanse bastante. Beba água."
            },
            {
              "en": "Go to the pharmacy. Buy medicine.",
              "pt": "Vá à farmácia. Compre remédio."
            }
          ],
          "check": [
            {
              "id": "b24c-a1-1",
              "prompt": {
                "en": "What would a doctor say for 'não se exercite'?",
                "pt": "O que um médico diria para 'não se exercite'?"
              },
              "options": [
                "Exercise now.",
                "Don't exercise.",
                "You exercise.",
                "She exercises."
              ],
              "answer": "Don't exercise.",
              "explanation": {
                "en": "'Don't exercise' is the correct negative imperative.",
                "pt": "'Don't exercise' é o imperativo negativo correto."
              }
            },
            {
              "id": "b24c-a1-2",
              "prompt": {
                "en": "If a patient has a fever, what is a common advice?",
                "pt": "Se um paciente está com febre, qual é um conselho comum?"
              },
              "options": [
                "Go to work.",
                "Rest.",
                "Run a marathon.",
                "Eat fast food."
              ],
              "answer": "Rest.",
              "explanation": {
                "en": "Resting is important when you have a fever.",
                "pt": "Descansar é importante quando se tem febre."
              }
            }
          ]
        },
        {
          "id": "b24c-act-2",
          "title": {
            "en": "Talk to Your Partner: My Routine",
            "pt": "Fale com seu colega: Minha Rotina"
          },
          "instruction": {
            "en": "Tell your partner about your daily routine using the expressions. Then, ask about their routine.",
            "pt": "Conte ao seu colega sobre sua rotina diária usando as expressões. Em seguida, pergunte sobre a rotina dele."
          },
          "phrases": [
            {
              "en": "I usually wake up at 6:30.",
              "pt": "Eu geralmente acordo às 6:30."
            },
            {
              "en": "I go to school by metro.",
              "pt": "Eu vou para a escola de metrô."
            },
            {
              "en": "I have lunch at 12.",
              "pt": "Eu almoço às 12."
            }
          ],
          "check": [
            {
              "id": "b24c-a2-1",
              "prompt": {
                "en": "Which phrase describes a daily routine?",
                "pt": "Qual frase descreve uma rotina diária?"
              },
              "options": [
                "I saw a movie yesterday.",
                "I usually eat breakfast at 8.",
                "They will travel next year.",
                "She is singing a song."
              ],
              "answer": "I usually eat breakfast at 8.",
              "explanation": {
                "en": "'Usually' indicates a routine action.",
                "pt": "'Usually' indica uma ação de rotina."
              }
            },
            {
              "id": "b24c-a2-2",
              "prompt": {
                "en": "How do you ask about someone's routine?",
                "pt": "Como você pergunta sobre a rotina de alguém?"
              },
              "options": [
                "What is your routine?",
                "Do you routine?",
                "Routine you?",
                "Your routine what?"
              ],
              "answer": "What is your routine?",
              "explanation": {
                "en": "This is the most natural way to ask.",
                "pt": "Esta é a forma mais natural de perguntar."
              }
            }
          ]
        },
        {
          "id": "b24c-act-3",
          "title": {
            "en": "Ask and Answer: Health Advice",
            "pt": "Pergunte e Responda: Conselhos de Saúde"
          },
          "instruction": {
            "en": "Ask your partner for advice using health vocabulary. Your partner gives advice using imperatives.",
            "pt": "Peça conselhos ao seu colega usando o vocabulário de saúde. Seu colega dá conselhos usando imperativos."
          },
          "phrases": [
            {
              "en": "I have a cold. What should I do?",
              "pt": "Estou resfriado. O que devo fazer?"
            },
            {
              "en": "Drink hot tea. Rest.",
              "pt": "Beba chá quente. Descanse."
            },
            {
              "en": "I feel tired. Any advice?",
              "pt": "Sinto-me cansado. Algum conselho?"
            }
          ],
          "check": [
            {
              "id": "b24c-a3-1",
              "prompt": {
                "en": "If someone says 'I have a headache', what advice can you give?",
                "pt": "Se alguém diz 'Estou com dor de cabeça', que conselho você pode dar?"
              },
              "options": [
                "Go shopping.",
                "Take medicine.",
                "Run a lot.",
                "Eat candy."
              ],
              "answer": "Take medicine.",
              "explanation": {
                "en": "Taking medicine is a common solution for a headache.",
                "pt": "Tomar remédio é uma solução comum para dor de cabeça."
              }
            },
            {
              "id": "b24c-a3-2",
              "prompt": {
                "en": "How do you ask for advice?",
                "pt": "Como você pede um conselho?"
              },
              "options": [
                "Give me advice.",
                "Advice me.",
                "What should I do?",
                "Do what?"
              ],
              "answer": "What should I do?",
              "explanation": {
                "en": "'What should I do?' is a common way to ask for advice.",
                "pt": "'What should I do?' é uma forma comum de pedir conselho."
              }
            }
          ]
        },
        {
          "id": "b24c-act-4",
          "title": {
            "en": "Short Speaking Tasks: Directions to the Pharmacy",
            "pt": "Tarefas Curtas de Fala: Direções para a Farmácia"
          },
          "instruction": {
            "en": "Imagine you are at school. Give your partner directions to the nearest pharmacy using imperatives.",
            "pt": "Imagine que você está na escola. Dê direções para a farmácia mais próxima ao seu colega usando imperativos."
          },
          "phrases": [
            {
              "en": "Go straight. Turn right at the traffic light.",
              "pt": "Vá em frente. Vire à direita no semáforo."
            },
            {
              "en": "Walk two blocks. The pharmacy is on your left.",
              "pt": "Ande dois quarteirões. A farmácia fica à sua esquerda."
            },
            {
              "en": "Cross the street. It's next to the bank.",
              "pt": "Atravesse a rua. É ao lado do banco."
            }
          ],
          "check": [
            {
              "id": "b24c-a4-1",
              "prompt": {
                "en": "What imperative can you use to tell someone to go forward?",
                "pt": "Qual imperativo você pode usar para dizer a alguém para ir em frente?"
              },
              "options": [
                "Stop.",
                "Turn.",
                "Go straight.",
                "Wait."
              ],
              "answer": "Go straight.",
              "explanation": {
                "en": "'Go straight' means to continue forward.",
                "pt": "'Go straight' significa continuar em frente."
              }
            },
            {
              "id": "b24c-a4-2",
              "prompt": {
                "en": "If the pharmacy is on the right, what do you say?",
                "pt": "Se a farmácia está à direita, o que você diz?"
              },
              "options": [
                "It's on your left.",
                "It's on your right.",
                "It's behind you.",
                "It's in front of you."
              ],
              "answer": "It's on your right.",
              "explanation": {
                "en": "This indicates the location.",
                "pt": "Isso indica a localização."
              }
            }
          ]
        },
        {
          "id": "b24c-act-5",
          "title": {
            "en": "Listening Tasks: Understanding Advice",
            "pt": "Tarefas de Escuta: Entendendo Conselhos"
          },
          "instruction": {
            "en": "Listen to a short audio of someone giving health advice. Write down the imperatives you hear.",
            "pt": "Ouça um áudio curto de alguém dando conselhos de saúde. Anote os imperativos que você ouvir."
          },
          "phrases": [
            {
              "en": "Don't eat sugar. Exercise every day.",
              "pt": "Não coma açúcar. Exercite-se todos os dias."
            },
            {
              "en": "Sleep eight hours. Don't worry too much.",
              "pt": "Durma oito horas. Não se preocupe muito."
            },
            {
              "en": "Visit your doctor. Take care of yourself.",
              "pt": "Visite seu médico. Cuide-se."
            }
          ],
          "check": [
            {
              "id": "b24c-a5-1",
              "prompt": {
                "en": "Which imperative means 'não comer'?",
                "pt": "Qual imperativo significa 'não comer'?"
              },
              "options": [
                "Eat.",
                "Don't eat.",
                "Eating.",
                "Eats."
              ],
              "answer": "Don't eat.",
              "explanation": {
                "en": "'Don't eat' is the negative imperative for 'to eat'.",
                "pt": "'Don't eat' é o imperativo negativo para 'comer'."
              }
            },
            {
              "id": "b24c-a5-2",
              "prompt": {
                "en": "What is an imperative about sleep?",
                "pt": "Qual é um imperativo sobre dormir?"
              },
              "options": [
                "Sleeping a lot.",
                "Sleep more.",
                "He sleeps.",
                "She is sleeping."
              ],
              "answer": "Sleep more.",
              "explanation": {
                "en": "'Sleep more' is an imperative.",
                "pt": "'Sleep more' é um imperativo."
              }
            }
          ]
        }
      ],
      "challenge": {
        "id": "b24c-challenge-1",
        "title": {
          "en": "Health Plan for a Friend",
          "pt": "Plano de Saúde para um Amigo"
        },
        "instruction": {
          "en": "Imagine your friend is not feeling well (e.g., has a cold, feels tired). Create a simple health plan for them. Include daily routines, advice using imperatives, and vocabulary from this unit.",
          "pt": "Imagine que seu amigo não está se sentindo bem (ex: está resfriado, sente-se cansado). Crie um plano de saúde simples para ele. Inclua rotinas diárias, conselhos usando imperativos e vocabulário desta unidade."
        },
        "phrases": [
          {
            "en": "Friend, you need to rest.",
            "pt": "Amigo, você precisa descansar."
          },
          {
            "en": "Don't go to work tomorrow.",
            "pt": "Não vá trabalhar amanhã."
          },
          {
            "en": "Make an appointment with the doctor. Take this medicine.",
            "pt": "Marque uma consulta com o médico. Tome este remédio."
          }
        ],
        "check": [
          {
            "id": "b24c-ch-1",
            "prompt": {
              "en": "Which sentence gives advice for health?",
              "pt": "Qual frase dá um conselho para a saúde?"
            },
            "options": [
              "He likes books.",
              "Drink water every day.",
              "I have a new car.",
              "They are watching TV."
            ],
            "answer": "Drink water every day.",
            "explanation": {
              "en": "This is a health instruction using an imperative.",
              "pt": "Esta é uma instrução de saúde usando um imperativo."
            }
          },
          {
            "id": "b24c-ch-2",
            "prompt": {
              "en": "What is a good routine for health?",
              "pt": "Qual é uma boa rotina para a saúde?"
            },
            "options": [
              "Eat junk food.",
              "Sleep less.",
              "Exercise every morning.",
              "Watch TV all day."
            ],
            "answer": "Exercise every morning.",
            "explanation": {
              "en": "Regular exercise is a healthy routine.",
              "pt": "Exercício regular é uma rotina saudável."
            }
          }
        ]
      },
      "lessonReview": {
        "summary": {
          "en": "In this unit, you learned new vocabulary related to health (headache, fever, doctor, etc.), useful expressions for routines, and how to use imperatives to give instructions and directions.",
          "pt": "Nesta unidade, você aprendeu novo vocabulário relacionado à saúde (dor de cabeça, febre, médico, etc.), expressões úteis para rotinas e como usar imperativos para dar instruções e direções."
        },
        "canDo": [
          {
            "en": "Talk about common health problems.",
            "pt": "Falar sobre problemas de saúde comuns."
          },
          {
            "en": "Give simple health advice using imperatives.",
            "pt": "Dar conselhos simples de saúde usando imperativos."
          },
          {
            "en": "Describe your daily routine.",
            "pt": "Descrever sua rotina diária."
          },
          {
            "en": "Give basic directions.",
            "pt": "Dar direções básicas."
          }
        ],
        "next": {
          "en": "Next, you will practice more with real-life scenarios and extend your vocabulary.",
          "pt": "Em seguida, você praticará mais com cenários da vida real e expandirá seu vocabulário."
        }
      }
    }
  },
  {
    "code": "BEGINNER-U25",
    "number": 25,
    "title": "Rules and Obligations",
    "titlePt": "Regras e Obrigações",
    "cefr": "A1",
    "objective": {
      "en": "To teach rules, obligations, and 'should / shouldn't' for advice in a contextualized way.",
      "pt": "Ensinar regras, obrigações e 'should / shouldn't' para conselhos de forma contextualizada."
    },
    "communicationGoal": {
      "en": "Students will be able to use 'past experiences' and 'rules obligations' vocabulary to communicate in real situations.",
      "pt": "O aluno será capaz de usar 'past experiences' e o vocabulário de rules obligations para se comunicar em situações reais."
    },
    "prerequisites": {
      "en": "Structure: Imperatives for instructions and directions. Vocabulary: Health.",
      "pt": "Estrutura: Imperatives for instructions and directions. Vocabulário: Health."
    },
    "newContent": {
      "en": "Grammar: Should / Shouldn't for advice. Vocabulary: Rules Obligations (10 lexical items). Expressions: Past Experiences.",
      "pt": "Gramática: Should / Shouldn't para conselhos. Vocabulário: Regras e Obrigações (10 itens lexicais). Expressões: Experiências Passadas."
    },
    "reviewContent": {
      "en": "Spiral review: Simple Past — common irregular verbs (affirmative) (Unit 20). Vocabulary review: Quantities (Unit 15).",
      "pt": "Revisão em espiral: Simple Past — common irregular verbs (affirmative) (Unidade 20). Revisão de vocabulário: Quantities (Unidade 15)."
    },
    "discover": {
      "id": "BEGINNER-U25-DISCOVER",
      "warmUp": {
        "prompt": {
          "en": "Look at the pictures. What do you see? What rules do these places have?",
          "pt": "Olhe as imagens. O que você vê? Que regras esses lugares têm?"
        },
        "phrases": [
          {
            "en": "Picture 1: A library with a 'Silence' sign.",
            "pt": "Imagem 1: Uma biblioteca com uma placa de 'Silêncio'."
          },
          {
            "en": "Picture 2: A park with a 'No Littering' sign.",
            "pt": "Imagem 2: Um parque com uma placa de 'Não jogar lixo'."
          },
          {
            "en": "Picture 3: A bus with a 'Wear a mask' sign.",
            "pt": "Imagem 3: Um ônibus com uma placa de 'Use máscara'."
          }
        ]
      },
      "context": {
        "situation": {
          "en": "Sarah just moved to a new city. She is talking to her friend, Tom, about how things work.",
          "pt": "Sarah acabou de se mudar para uma nova cidade. Ela está conversando com seu amigo, Tom, sobre como as coisas funcionam."
        },
        "dialogue": [
          {
            "who": "Sarah",
            "en": "Hi Tom! I'm here. It's beautiful!",
            "pt": "Oi Tom! Cheguei! É lindo!"
          },
          {
            "who": "Tom",
            "en": "Welcome! I'm glad you like it. I visited Rio last year, it was amazing.",
            "pt": "Bem-vinda! Que bom que você gostou. Eu visitei o Rio ano passado, foi incrível."
          },
          {
            "who": "Sarah",
            "en": "Yes, I need to learn the rules here. For example, is there a policy for recycling?",
            "pt": "Sim, preciso aprender as regras daqui. Por exemplo, existe alguma política para reciclagem?"
          },
          {
            "who": "Tom",
            "en": "Oh, yes. Recycling is a requirement. You should separate your trash. I saw a great movie last week about sustainability.",
            "pt": "Ah, sim. Reciclar é um requisito. Você deve separar o seu lixo. Eu assisti um filme ótimo semana passada sobre sustentabilidade."
          },
          {
            "who": "Sarah",
            "en": "Good to know. What about pets in apartments?",
            "pt": "Bom saber. E quanto a animais de estimação em apartamentos?"
          },
          {
            "who": "Tom",
            "en": "Every building has a different regulation. You should check with your landlord. It's your responsibility.",
            "pt": "Cada prédio tem uma regulamentação diferente. Você deve verificar com o seu proprietário. É sua responsabilidade."
          },
          {
            "who": "Sarah",
            "en": "Okay. And what time is the deadline for rent payment?",
            "pt": "Certo. E qual é o prazo para o pagamento do aluguel?"
          },
          {
            "who": "Tom",
            "en": "Usually the 5th of each month. You shouldn't be late. I met my best friend in school, and his apartment has strict rules.",
            "pt": "Geralmente o dia 5 de cada mês. Você não deve atrasar. Conheci meu melhor amigo na escola, e o apartamento dele tem regras rígidas."
          }
        ]
      },
      "vocabulary": [
        {
          "term": "policy",
          "pt": "política",
          "ipa": "/ˈpɒləsi/",
          "definition": "A plan of action or statement of ideas agreed by a group or organization.",
          "example": "The school has a strict no-bullying policy.",
          "examplePt": "A escola tem uma política rigorosa contra o bullying."
        },
        {
          "term": "rule",
          "pt": "regra",
          "ipa": "/ruːl/",
          "definition": "An official instruction that says how you must do things or what is allowed or not allowed.",
          "example": "Always follow the safety rules at work.",
          "examplePt": "Sempre siga as regras de segurança no trabalho."
        },
        {
          "term": "requirement",
          "pt": "requisito",
          "ipa": "/rɪˈkwaɪərmənt/",
          "definition": "Something that you must have or do.",
          "example": "Wearing a helmet is a requirement for cyclists.",
          "examplePt": "Usar capacete é um requisito para ciclistas."
        },
        {
          "term": "permission",
          "pt": "permissão",
          "ipa": "/pərˈmɪʃən/",
          "definition": "The act of allowing someone to do something, or the fact of being allowed to do something.",
          "example": "Do you have permission to park here?",
          "examplePt": "Você tem permissão para estacionar aqui?"
        },
        {
          "term": "regulation",
          "pt": "regulamentação",
          "ipa": "/ˌreɡjəˈleɪʃən/",
          "definition": "An official rule or law that controls how something is done.",
          "example": "There are strict regulations about food safety.",
          "examplePt": "Existem regulamentações rigorosas sobre a segurança alimentar."
        },
        {
          "term": "responsibility",
          "pt": "responsabilidade",
          "ipa": "/rɪˌspɑːnsəˈbɪləti/",
          "definition": "Something that it is your job or duty to deal with.",
          "example": "It is your responsibility to keep the office tidy.",
          "examplePt": "É sua responsabilidade manter o escritório arrumado."
        },
        {
          "term": "deadline",
          "pt": "prazo",
          "ipa": "/ˈdedlaɪn/",
          "definition": "A time or date by which something must be done.",
          "example": "The deadline for the project is next Friday.",
          "examplePt": "O prazo para o projeto é na próxima sexta-feira."
        },
        {
          "term": "procedure",
          "pt": "procedimento",
          "ipa": "/prəˈsiːdʒər/",
          "definition": "A set of actions that is the official or accepted way of doing something.",
          "example": "Follow the correct procedure for reporting an accident.",
          "examplePt": "Siga o procedimento correto para relatar um acidente."
        },
        {
          "term": "guideline",
          "pt": "diretriz",
          "ipa": "/ˈɡaɪdlaɪn/",
          "definition": "Information intended to advise people on how something should be done.",
          "example": "The company has new guidelines for remote work.",
          "examplePt": "A empresa tem novas diretrizes para o trabalho remoto."
        },
        {
          "term": "duty",
          "pt": "dever",
          "ipa": "/ˈduːti/",
          "definition": "Something that you have to do because it is part of your job, or something that you think is morally right.",
          "example": "It's my duty to help others.",
          "examplePt": "É meu dever ajudar os outros."
        }
      ],
      "expressions": [
        {
          "en": "I visited Rio last year.",
          "pt": "Eu visitei o Rio ano passado."
        },
        {
          "en": "I saw a great movie last week.",
          "pt": "Eu assisti um filme ótimo semana passada."
        },
        {
          "en": "I met my best friend in school.",
          "pt": "Eu conheci meu melhor amigo na escola."
        }
      ],
      "grammar": [
        {
          "title": {
            "en": "Should / Shouldn't for advice",
            "pt": "Should / Shouldn't para conselhos"
          },
          "examples": [
            {
              "en": "You should see a doctor if you feel sick.",
              "pt": "Você deveria consultar um médico se se sentir doente."
            },
            {
              "en": "She shouldn't eat too much candy.",
              "pt": "Ela não deveria comer muito doce."
            },
            {
              "en": "We should arrive early for the meeting.",
              "pt": "Nós deveríamos chegar cedo para a reunião."
            }
          ],
          "rule": {
            "en": "We use 'should' to give advice or say what is a good idea. We use 'shouldn't' to give advice or say what is not a good idea. Structure: Subject + should/shouldn't + base form of the verb.",
            "pt": "Usamos 'should' para dar conselhos ou dizer o que é uma boa ideia. Usamos 'shouldn't' para dar conselhos ou dizer o que não é uma boa ideia. Estrutura: Sujeito + should/shouldn't + forma base do verbo."
          },
          "mistakes": [
            {
              "en": "Incorrect: You should to study more. Correct: You should study more.",
              "pt": "Incorreto: Você deveria estudar mais. Correto: Você deveria estudar mais."
            },
            {
              "en": "Incorrect: He shouldn't eats junk food. Correct: He shouldn't eat junk food.",
              "pt": "Incorreto: Ele não deveria comer besteira. Correto: Ele não deveria comer besteira."
            }
          ]
        }
      ],
      "controlledPractice": [
        {
          "id": "b25d-cp-1",
          "prompt": {
            "en": "Choose the best word to complete the sentence: 'It's a company _______ to wear uniforms.'",
            "pt": "Escolha a melhor palavra para completar a frase: 'É uma _______ da empresa usar uniformes.'"
          },
          "options": [
            "deadline",
            "policy",
            "permission"
          ],
          "answer": "policy",
          "explanation": {
            "en": "'Policy' is a plan or rule, like wearing uniforms.",
            "pt": "'Policy' é um plano ou regra, como usar uniformes."
          }
        },
        {
          "id": "b25d-cp-2",
          "prompt": {
            "en": "Choose the correct sentence: 'You _______ forget your passport.'",
            "pt": "Escolha a frase correta: 'Você _______ esquecer seu passaporte.'"
          },
          "options": [
            "shouldn't",
            "should to",
            "should"
          ],
          "answer": "shouldn't",
          "explanation": {
            "en": "'Shouldn't' means it's not a good idea. We don't use 'to' after 'should' or 'shouldn't'.",
            "pt": "'Shouldn't' significa que não é uma boa ideia. Não usamos 'to' depois de 'should' ou 'shouldn't'."
          }
        },
        {
          "id": "b25d-cp-3",
          "prompt": {
            "en": "Complete the sentence with 'should' or 'shouldn't': 'He has a test tomorrow, he _______ study tonight.'",
            "pt": "Complete a frase com 'should' ou 'shouldn't': 'Ele tem uma prova amanhã, ele _______ estudar hoje à noite.'"
          },
          "options": [
            "should",
            "shouldn't",
            "should to"
          ],
          "answer": "should",
          "explanation": {
            "en": "It's a good idea for him to study for the test.",
            "pt": "É uma boa ideia para ele estudar para a prova."
          }
        },
        {
          "id": "b25d-cp-4",
          "prompt": {
            "en": "Which word means 'something you must do because it is your job'?",
            "pt": "Qual palavra significa 'algo que você deve fazer porque é seu trabalho'?"
          },
          "options": [
            "permission",
            "duty",
            "guideline"
          ],
          "answer": "duty",
          "explanation": {
            "en": "'Duty' is a responsibility or a moral obligation.",
            "pt": "'Duty' é uma responsabilidade ou uma obrigação moral."
          }
        }
      ],
      "input": {
        "kind": "reading",
        "title": {
          "en": "City Park Rules",
          "pt": "Regras do Parque da Cidade"
        },
        "lines": [
          {
            "en": "Welcome to Central Park! We want everyone to enjoy their visit.",
            "pt": "Bem-vindo ao Parque Central! Queremos que todos aproveitem a visita."
          },
          {
            "en": "Here are some important rules:",
            "pt": "Aqui estão algumas regras importantes:"
          },
          {
            "en": "1. All visitors should keep the park clean. Please use the trash bins.",
            "pt": "1. Todos os visitantes devem manter o parque limpo. Por favor, use as lixeiras."
          },
          {
            "en": "2. Dogs are welcome, but they must be on a leash. It's a park regulation.",
            "pt": "2. Cães são bem-vindos, mas devem estar na coleira. É uma regulamentação do parque."
          },
          {
            "en": "3. You shouldn't feed the wild animals. It's not good for them.",
            "pt": "3. Você não deve alimentar os animais selvagens. Não é bom para eles."
          },
          {
            "en": "4. Cycling is permitted only on designated paths. This is a safety guideline.",
            "pt": "4. Andar de bicicleta é permitido apenas em caminhos designados. Esta é uma diretriz de segurança."
          },
          {
            "en": "5. Noise levels should be low after 8 PM. Please respect other visitors.",
            "pt": "5. Os níveis de ruído devem ser baixos depois das 20h. Por favor, respeite outros visitantes."
          }
        ],
        "questions": [
          {
            "id": "b25d-in-1",
            "prompt": {
              "en": "What is a regulation for dogs in the park?",
              "pt": "Qual é uma regulamentação para cães no parque?"
            },
            "options": [
              "They should not be in the park.",
              "They must be on a leash.",
              "They should feed the animals."
            ],
            "answer": "They must be on a leash.",
            "explanation": {
              "en": "The text says: 'Dogs are welcome, but they must be on a leash. It's a park regulation.'",
              "pt": "O texto diz: 'Cães são bem-vindos, mas devem estar na coleira. É uma regulamentação do parque.'"
            }
          },
          {
            "id": "b25d-in-2",
            "prompt": {
              "en": "What should visitors do with their trash?",
              "pt": "O que os visitantes devem fazer com o lixo?"
            },
            "options": [
              "Leave it anywhere.",
              "Use the trash bins.",
              "Take it home."
            ],
            "answer": "Use the trash bins.",
            "explanation": {
              "en": "The text says: 'All visitors should keep the park clean. Please use the trash bins.'",
              "pt": "O texto diz: 'Todos os visitantes devem manter o parque limpo. Por favor, use as lixeiras.'"
            }
          },
          {
            "id": "b25d-in-3",
            "prompt": {
              "en": "What shouldn't people do with wild animals?",
              "pt": "O que as pessoas não deveriam fazer com animais selvagens?"
            },
            "options": [
              "Watch them.",
              "Take photos.",
              "Feed them."
            ],
            "answer": "Feed them.",
            "explanation": {
              "en": "The text says: 'You shouldn't feed the wild animals.'",
              "pt": "O texto diz: 'Você não deveria alimentar os animais selvagens.'"
            }
          }
        ]
      },
      "quickCheck": [
        {
          "id": "b25d-qc-1",
          "prompt": {
            "en": "Complete: 'You _______ wear a seatbelt in the car.'",
            "pt": "Complete: 'Você _______ usar cinto de segurança no carro.'"
          },
          "options": [
            "should",
            "shouldn't",
            "to should"
          ],
          "answer": "should",
          "explanation": {
            "en": "It's a good idea and a rule to wear a seatbelt.",
            "pt": "É uma boa ideia e uma regra usar cinto de segurança."
          }
        },
        {
          "id": "b25d-qc-2",
          "prompt": {
            "en": "What is a 'deadline'?",
            "pt": "O que é um 'deadline'?"
          },
          "options": [
            "A type of rule.",
            "A time limit for something.",
            "A kind of permission."
          ],
          "answer": "A time limit for something.",
          "explanation": {
            "en": "'Deadline' is the time or date by which something must be completed.",
            "pt": "'Deadline' é o tempo ou data limite para algo ser concluído."
          }
        },
        {
          "id": "b25d-qc-3",
          "prompt": {
            "en": "Choose the incorrect sentence:",
            "pt": "Escolha a frase incorreta:"
          },
          "options": [
            "She should study.",
            "He shouldn't runs.",
            "They should listen."
          ],
          "answer": "He shouldn't runs.",
          "explanation": {
            "en": "After 'should' or 'shouldn't', we use the base form of the verb (run, not runs).",
            "pt": "Depois de 'should' ou 'shouldn't', usamos a forma base do verbo (run, não runs)."
          }
        },
        {
          "id": "b25d-qc-4",
          "prompt": {
            "en": "What is the meaning of 'I visited Rio last year.'?",
            "pt": "Qual o significado de 'I visited Rio last year.'?"
          },
          "options": [
            "Eu visitarei o Rio ano que vem.",
            "Eu visitei o Rio ano passado.",
            "Eu visito o Rio todo ano."
          ],
          "answer": "Eu visitei o Rio ano passado.",
          "explanation": {
            "en": "'Last year' indicates an action in the past.",
            "pt": "'Last year' indica uma ação no passado."
          }
        }
      ]
    },
    "communicate": {
      "id": "BEGINNER-U25-COMMUNICATE",
      "review": [
        {
          "en": "Remember: 'Should' for good ideas, 'shouldn't' for bad ideas. Use the base form of the verb.",
          "pt": "Lembre-se: 'Should' para boas ideias, 'shouldn't' para más ideias. Use a forma base do verbo."
        },
        {
          "en": "Vocabulary: policy, rule, requirement, permission, regulation, responsibility, deadline, procedure, guideline, duty.",
          "pt": "Vocabulário: política, regra, requisito, permissão, regulamentação, responsabilidade, prazo, procedimento, diretriz, dever."
        },
        {
          "en": "Past Experiences: 'I visited...', 'I saw...', 'I met...' (Simple Past).",
          "pt": "Experiências Passadas: 'Eu visitei...', 'Eu vi...', 'Eu conheci...' (Simple Past)."
        }
      ],
      "activities": [
        {
          "id": "b25c-act-1",
          "title": {
            "en": "Describe Rules",
            "pt": "Descreva Regras"
          },
          "instruction": {
            "en": "Look at the situations. Describe a rule or obligation for each. Use vocabulary from this unit.",
            "pt": "Olhe as situações. Descreva uma regra ou obrigação para cada. Use o vocabulário desta unidade."
          },
          "phrases": [
            {
              "en": "Situation 1: You are at a public swimming pool.",
              "pt": "Situação 1: Você está em uma piscina pública."
            },
            {
              "en": "Situation 2: You are taking a test at school.",
              "pt": "Situação 2: Você está fazendo uma prova na escola."
            },
            {
              "en": "Situation 3: You work in a hospital.",
              "pt": "Situação 3: Você trabalha em um hospital."
            }
          ],
          "check": [
            {
              "id": "b25c-act-1-1",
              "prompt": {
                "en": "For a public swimming pool, what is a common rule?",
                "pt": "Para uma piscina pública, qual é uma regra comum?"
              },
              "options": [
                "You should run fast.",
                "You shouldn't swim in the deep end.",
                "You should shower before entering."
              ],
              "answer": "You should shower before entering.",
              "explanation": {
                "en": "Showering is a common hygiene rule at public pools.",
                "pt": "Tomar banho é uma regra comum de higiene em piscinas públicas."
              }
            },
            {
              "id": "b25c-act-1-2",
              "prompt": {
                "en": "What is a rule when taking a test?",
                "pt": "Qual é uma regra ao fazer uma prova?"
              },
              "options": [
                "You should talk to your friends.",
                "You shouldn't cheat.",
                "You should use your phone."
              ],
              "answer": "You shouldn't cheat.",
              "explanation": {
                "en": "Cheating is against the rules during a test.",
                "pt": "Colar é contra as regras durante uma prova."
              }
            }
          ]
        },
        {
          "id": "b25c-act-2",
          "title": {
            "en": "Give Your Opinion and Advice",
            "pt": "Dê Sua Opinião e Conselho"
          },
          "instruction": {
            "en": "Read the situations. Give advice using 'should' or 'shouldn't' and explain why.",
            "pt": "Leia as situações. Dê conselhos usando 'should' ou 'shouldn't' e explique o porquê."
          },
          "phrases": [
            {
              "en": "Situation 1: Your friend feels very tired every day.",
              "pt": "Situação 1: Seu amigo se sente muito cansado todos os dias."
            },
            {
              "en": "Situation 2: Your classmate always arrives late for class.",
              "pt": "Situação 2: Seu colega de classe sempre chega atrasado para a aula."
            },
            {
              "en": "Situation 3: Your brother wants to learn a new language.",
              "pt": "Situação 3: Seu irmão quer aprender um novo idioma."
            }
          ],
          "check": [
            {
              "id": "b25c-act-2-1",
              "prompt": {
                "en": "Your friend feels tired. What advice should you give?",
                "pt": "Seu amigo se sente cansado. Que conselho você deveria dar?"
              },
              "options": [
                "You should work more.",
                "You should sleep more.",
                "You shouldn't rest."
              ],
              "answer": "You should sleep more.",
              "explanation": {
                "en": "If someone is tired, sleeping more is good advice.",
                "pt": "Se alguém está cansado, dormir mais é um bom conselho."
              }
            },
            {
              "id": "b25c-act-2-2",
              "prompt": {
                "en": "Your classmate is always late. What should he do?",
                "pt": "Seu colega de classe está sempre atrasado. O que ele deveria fazer?"
              },
              "options": [
                "He should wake up earlier.",
                "He should walk slower.",
                "He shouldn't worry."
              ],
              "answer": "He should wake up earlier.",
              "explanation": {
                "en": "Waking up earlier helps with punctuality.",
                "pt": "Acordar mais cedo ajuda com a pontualidade."
              }
            }
          ]
        },
        {
          "id": "b25c-act-3",
          "title": {
            "en": "Writing Tasks",
            "pt": "Tarefas de Escrita"
          },
          "instruction": {
            "en": "Write 2-3 sentences for each task. Use 'should/shouldn't' and vocabulary from the unit.",
            "pt": "Escreva 2-3 frases para cada tarefa. Use 'should/shouldn't' e o vocabulário da unidade."
          },
          "phrases": [
            {
              "en": "Task 1: Write about rules for a new student at your school.",
              "pt": "Tarefa 1: Escreva sobre regras para um novo aluno em sua escola."
            },
            {
              "en": "Task 2: Give advice to someone who wants to save money.",
              "pt": "Tarefa 2: Dê conselhos a alguém que quer economizar dinheiro."
            },
            {
              "en": "Task 3: Describe a rule or procedure you learned from a past experience.",
              "pt": "Tarefa 3: Descreva uma regra ou procedimento que você aprendeu de uma experiência passada."
            }
          ],
          "check": [
            {
              "id": "b25c-act-3-1",
              "prompt": {
                "en": "For a new student, what is good advice about homework?",
                "pt": "Para um novo aluno, qual é um bom conselho sobre a lição de casa?"
              },
              "options": [
                "You should do homework every day.",
                "You shouldn't do homework.",
                "You should wait until the last minute."
              ],
              "answer": "You should do homework every day.",
              "explanation": {
                "en": "Doing homework regularly is good for students.",
                "pt": "Fazer a lição de casa regularmente é bom para os alunos."
              }
            },
            {
              "id": "b25c-act-3-2",
              "prompt": {
                "en": "If you want to save money, what shouldn't you do?",
                "pt": "Se você quer economizar dinheiro, o que você não deveria fazer?"
              },
              "options": [
                "You shouldn't buy unnecessary things.",
                "You should buy a new car.",
                "You should go shopping every day."
              ],
              "answer": "You shouldn't buy unnecessary things.",
              "explanation": {
                "en": "Avoiding unnecessary purchases helps save money.",
                "pt": "Evitar compras desnecessárias ajuda a economizar dinheiro."
              }
            }
          ]
        },
        {
          "id": "b25c-act-4",
          "title": {
            "en": "Reading Comprehension",
            "pt": "Compreensão de Leitura"
          },
          "instruction": {
            "en": "Read the short text about city living and answer the questions.",
            "pt": "Leia o pequeno texto sobre a vida na cidade e responda às perguntas."
          },
          "phrases": [
            {
              "en": "Living in a city can be exciting! There are many places to go. But there are also many rules. For example, you should always cross the street at the crosswalk. This is a safety regulation. You shouldn't make too much noise late at night; it's a neighborhood policy. When you take the bus, you should stand behind the yellow line. I remember I took a train last year, and I saw a sign with this rule.",
              "pt": "Morar em uma cidade pode ser emocionante! Há muitos lugares para ir. Mas também há muitas regras. Por exemplo, você sempre deve atravessar a rua na faixa de pedestres. Esta é uma regulamentação de segurança. Você não deve fazer muito barulho tarde da noite; é uma política do bairro. Quando você pega o ônibus, você deve ficar atrás da linha amarela. Eu lembro que peguei um trem ano passado, e vi uma placa com esta regra."
            }
          ],
          "check": [
            {
              "id": "b25c-act-4-1",
              "prompt": {
                "en": "What is a safety regulation for crossing the street?",
                "pt": "Qual é uma regulamentação de segurança para atravessar a rua?"
              },
              "options": [
                "You should run across.",
                "You should cross at the crosswalk.",
                "You shouldn't look both ways."
              ],
              "answer": "You should cross at the crosswalk.",
              "explanation": {
                "en": "The text states: 'you should always cross the street at the crosswalk. This is a safety regulation.'",
                "pt": "O texto afirma: 'você sempre deve atravessar a rua na faixa de pedestres. Esta é uma regulamentação de segurança.'"
              }
            },
            {
              "id": "b25c-act-4-2",
              "prompt": {
                "en": "What is a policy for noise at night?",
                "pt": "Qual é uma política para ruído à noite?"
              },
              "options": [
                "You should make loud noise.",
                "You shouldn't make too much noise.",
                "You should sing loud songs."
              ],
              "answer": "You shouldn't make too much noise.",
              "explanation": {
                "en": "The text says: 'You shouldn't make too much noise late at night; it's a neighborhood policy.'",
                "pt": "O texto diz: 'Você não deve fazer muito barulho tarde da noite; é uma política do bairro.'"
              }
            }
          ]
        },
        {
          "id": "b25c-act-5",
          "title": {
            "en": "Answer the Questions",
            "pt": "Responda às Perguntas"
          },
          "instruction": {
            "en": "Answer these questions about your city/town and your past experiences. Use 'should/shouldn't' and expressions.",
            "pt": "Responda a estas perguntas sobre sua cidade/vila e suas experiências passadas. Use 'should/shouldn't' e expressões."
          },
          "phrases": [
            {
              "en": "1. What are some important rules or guidelines in your city?",
              "pt": "1. Quais são algumas regras ou diretrizes importantes em sua cidade?"
            },
            {
              "en": "2. What should tourists do when they visit your country?",
              "pt": "2. O que os turistas deveriam fazer quando visitam seu país?"
            },
            {
              "en": "3. Tell me about a time you had to follow a strict procedure. (e.g., when I applied for my passport...)",
              "pt": "3. Conte-me sobre uma vez em que você teve que seguir um procedimento rigoroso. (ex: quando solicitei meu passaporte...)"
            }
          ],
          "check": [
            {
              "id": "b25c-act-5-1",
              "prompt": {
                "en": "What is a common rule in many cities for traffic?",
                "pt": "Qual é uma regra comum em muitas cidades para o trânsito?"
              },
              "options": [
                "You should always drive fast.",
                "You should stop at red lights.",
                "You shouldn't use seatbelts."
              ],
              "answer": "You should stop at red lights.",
              "explanation": {
                "en": "Stopping at red lights is a universal traffic rule.",
                "pt": "Parar em semáforos vermelhos é uma regra de trânsito universal."
              }
            },
            {
              "id": "b25c-act-5-2",
              "prompt": {
                "en": "If a tourist visits your country, what should they try?",
                "pt": "Se um turista visita seu país, o que ele deveria experimentar?"
              },
              "options": [
                "They shouldn't try local food.",
                "They should stay only in their hotel.",
                "They should try the local cuisine."
              ],
              "answer": "They should try the local cuisine.",
              "explanation": {
                "en": "Trying local cuisine is a common recommendation for tourists.",
                "pt": "Experimentar a culinária local é uma recomendação comum para turistas."
              }
            }
          ]
        }
      ],
      "challenge": {
        "id": "b25c-challenge-1",
        "title": {
          "en": "Newcomer's Guide",
          "pt": "Guia do Recém-chegado"
        },
        "instruction": {
          "en": "Imagine a new person is coming to live in your city/neighborhood. Create a short 'Newcomer's Guide' with 3-4 important rules or pieces of advice. Include at least one past experience to support your advice. Use should/shouldn't and vocabulary.",
          "pt": "Imagine que uma pessoa nova está vindo morar na sua cidade/bairro. Crie um pequeno 'Guia do Recém-chegado' com 3-4 regras importantes ou conselhos. Inclua pelo menos uma experiência passada para apoiar seu conselho. Use should/shouldn't e vocabulário."
        },
        "phrases": [
          {
            "en": "Example: 'Welcome! You should always carry an umbrella, I visited the park last week and it rained suddenly!'",
            "pt": "Exemplo: 'Bem-vindo! Você sempre deveria levar um guarda-chuva, eu visitei o parque semana passada e choveu de repente!'"
          },
          {
            "en": "Think about transport, local customs, safety.",
            "pt": "Pense em transporte, costumes locais, segurança."
          },
          {
            "en": "Remember to use Simple Past for past experiences.",
            "pt": "Lembre-se de usar o Simple Past para experiências passadas."
          }
        ],
        "check": [
          {
            "id": "b25c-chal-1",
            "prompt": {
              "en": "Which statement is good advice for a newcomer about public transport?",
              "pt": "Qual afirmação é um bom conselho para um recém-chegado sobre transporte público?"
            },
            "options": [
              "You shouldn't buy a transport card.",
              "You should learn the bus routes.",
              "You should wait for a taxi."
            ],
            "answer": "You should learn the bus routes.",
            "explanation": {
              "en": "Learning routes helps navigate public transport easily.",
              "pt": "Aprender as rotas ajuda a usar o transporte público facilmente."
            }
          },
          {
            "id": "b25c-chal-2",
            "prompt": {
              "en": "What is a good way to include a past experience in advice?",
              "pt": "Qual é uma boa maneira de incluir uma experiência passada em um conselho?"
            },
            "options": [
              "You should eat pizza. I like pizza.",
              "You should visit the market. I saw great fruits there yesterday.",
              "You shouldn't go out. It will rain."
            ],
            "answer": "You should visit the market. I saw great fruits there yesterday.",
            "explanation": {
              "en": "This links a past observation to current advice effectively.",
              "pt": "Isso conecta uma observação passada a um conselho atual de forma eficaz."
            }
          }
        ]
      },
      "lessonReview": {
        "summary": {
          "en": "In this unit, you learned about rules, obligations, and how to give advice using 'should' and 'shouldn't'. You also practiced talking about past experiences.",
          "pt": "Nesta unidade, você aprendeu sobre regras, obrigações e como dar conselhos usando 'should' e 'shouldn't'. Você também praticou falar sobre experiências passadas."
        },
        "canDo": [
          {
            "en": "Identify and use vocabulary related to rules and obligations.",
            "pt": "Identificar e usar vocabulário relacionado a regras e obrigações."
          },
          {
            "en": "Give and ask for advice using 'should' and 'shouldn't'.",
            "pt": "Dar e pedir conselhos usando 'should' e 'shouldn't'."
          },
          {
            "en": "Talk about past experiences using Simple Past.",
            "pt": "Falar sobre experiências passadas usando o Simple Past."
          },
          {
            "en": "Understand and follow simple rules and guidelines.",
            "pt": "Entender e seguir regras e diretrizes simples."
          }
        ],
        "next": {
          "en": "In the next unit, we will explore more about future plans and intentions.",
          "pt": "Na próxima unidade, exploraremos mais sobre planos e intenções futuras."
        }
      }
    }
  },
  {
    "code": "BEGINNER-U26",
    "number": 26,
    "title": "Opinions and Obligations",
    "titlePt": "Opiniões e Obrigações",
    "cefr": "A1",
    "objective": {
      "en": "To teach opinions and 'must / have to' for obligation and necessity in a contextualized way.",
      "pt": "Ensinar opinions e must / Have to for obligation and necessity de forma contextualizada."
    },
    "communicationGoal": {
      "en": "The student will be able to use 'plans' and opinion vocabulary to communicate in real situations.",
      "pt": "O aluno será capaz de usar 'plans' e o vocabulário de opinions para se comunicar em situações reais."
    },
    "prerequisites": {
      "en": "Grammar: Should / Shouldn't for advice. Vocabulary: Rules Obligations.",
      "pt": "Estrutura: Should / Shouldn't for advice. Vocabulário: Rules Obligations."
    },
    "newContent": {
      "en": "Grammar: Must / Have to for obligation and necessity. Vocabulary: Opinions (10 lexical items). Expressions: Plans.",
      "pt": "Grammar: Must / Have to for obligation and necessity. | Vocabulary: Opinions (10 itens lexicais) | Expressions: Plans."
    },
    "reviewContent": {
      "en": "Spiral review: Simple Past — negative (didn't) and interrogative (did) forms (Unit 21). Vocabulary review: Comparisons Places (Unit 16).",
      "pt": "Revisão em espiral: Simple Past — negative (didn't) and interrogative (did) forms (Unit 21). Revisão de vocabulário: Comparisons Places (Unit 16)."
    },
    "discover": {
      "id": "BEGINNER-U26-DISCOVER",
      "warmUp": {
        "prompt": {
          "en": "Look at the pictures. What do you think about these activities? Do you like them?",
          "pt": "Olhe as imagens. O que você acha dessas atividades? Você gosta delas?"
        },
        "phrases": [
          {
            "en": "Playing sports is fun.",
            "pt": "Praticar esportes é divertido."
          },
          {
            "en": "Studying is important.",
            "pt": "Estudar é importante."
          },
          {
            "en": "Watching movies is relaxing.",
            "pt": "Assistir filmes é relaxante."
          }
        ]
      },
      "context": {
        "situation": {
          "en": "Luana and Pedro are talking about their plans for the weekend and their opinions on some things.",
          "pt": "Luana e Pedro estão conversando sobre seus planos para o fim de semana e suas opiniões sobre algumas coisas."
        },
        "dialogue": [
          {
            "who": "Luana",
            "en": "Hi Pedro! What are your plans for the weekend?",
            "pt": "Oi Pedro! Quais são seus planos para o fim de semana?"
          },
          {
            "who": "Pedro",
            "en": "Hi Luana! I'm planning to visit my family. And you?",
            "pt": "Oi Luana! Estou planejando visitar minha família. E você?"
          },
          {
            "who": "Luana",
            "en": "I'm going to study for my English test. I have to study a lot!",
            "pt": "Vou estudar para minha prova de inglês. Tenho que estudar muito!"
          },
          {
            "who": "Pedro",
            "en": "Oh, good luck! I think English is important.",
            "pt": "Ah, boa sorte! Eu acho inglês importante."
          },
          {
            "who": "Luana",
            "en": "I agree. In my opinion, it's very useful for work.",
            "pt": "Concordo. Na minha opinião, é muito útil para o trabalho."
          },
          {
            "who": "Pedro",
            "en": "Definitely! But I believe learning a new language is difficult.",
            "pt": "Com certeza! Mas eu acredito que aprender uma nova língua é difícil."
          },
          {
            "who": "Luana",
            "en": "It depends. For example, some people learn fast.",
            "pt": "Depende. Por exemplo, algumas pessoas aprendem rápido."
          },
          {
            "who": "Pedro",
            "en": "On the other hand, some people don't.",
            "pt": "Por outro lado, algumas pessoas não."
          },
          {
            "who": "Luana",
            "en": "Exactly. Actually, I must practice every day.",
            "pt": "Exatamente. Na verdade, eu devo praticar todos os dias."
          },
          {
            "who": "Pedro",
            "en": "Me too. I'll call you next week!",
            "pt": "Eu também. Te ligo semana que vem!"
          }
        ]
      },
      "vocabulary": [
        {
          "term": "I think",
          "pt": "Eu acho",
          "ipa": "/aɪ θɪŋk/",
          "definition": "Used to express an opinion or belief.",
          "example": "I think this book is interesting.",
          "examplePt": "Eu acho que este livro é interessante."
        },
        {
          "term": "in my opinion",
          "pt": "na minha opinião",
          "ipa": "/ɪn maɪ əˈpɪnjən/",
          "definition": "Used to introduce a personal point of view.",
          "example": "In my opinion, coffee is better than tea.",
          "examplePt": "Na minha opinião, café é melhor que chá."
        },
        {
          "term": "I believe",
          "pt": "Eu acredito",
          "ipa": "/aɪ bɪˈliːv/",
          "definition": "Used to state something you consider to be true.",
          "example": "I believe he is a good person.",
          "examplePt": "Eu acredito que ele é uma boa pessoa."
        },
        {
          "term": "I agree",
          "pt": "Eu concordo",
          "ipa": "/aɪ əˈɡriː/",
          "definition": "To have the same opinion as someone else.",
          "example": "You like pizza? I agree!",
          "examplePt": "Você gosta de pizza? Eu concordo!"
        },
        {
          "term": "I disagree",
          "pt": "Eu discordo",
          "ipa": "/aɪ ˌdɪsəˈɡriː/",
          "definition": "To have a different opinion than someone else.",
          "example": "I disagree with his idea.",
          "examplePt": "Eu discordo da ideia dele."
        },
        {
          "term": "it depends",
          "pt": "depende",
          "ipa": "/ɪt dɪˈpɛndz/",
          "definition": "Used to say that something may or may not happen, or be true, according to the situation.",
          "example": "Will it rain tomorrow? It depends on the weather.",
          "examplePt": "Vai chover amanhã? Depende do tempo."
        },
        {
          "term": "on the other hand",
          "pt": "por outro lado",
          "ipa": "/ɒn ði ˈʌðər hænd/",
          "definition": "Used to introduce a contrasting point of view or fact.",
          "example": "This car is fast. On the other hand, it's very expensive.",
          "examplePt": "Este carro é rápido. Por outro lado, é muito caro."
        },
        {
          "term": "for example",
          "pt": "por exemplo",
          "ipa": "/fɔr ɪɡˈzæmpl/",
          "definition": "Used to introduce an instance or illustration of what has just been said.",
          "example": "Some fruits are healthy, for example, apples and bananas.",
          "examplePt": "Algumas frutas são saudáveis, por exemplo, maçãs e bananas."
        },
        {
          "term": "actually",
          "pt": "na verdade",
          "ipa": "/ˈæktʃuəli/",
          "definition": "Used to introduce a fact or something that is true, especially when it is different from what was thought or expected.",
          "example": "I thought he was 30, but actually he is 35.",
          "examplePt": "Eu achei que ele tinha 30, mas na verdade ele tem 35."
        },
        {
          "term": "definitely",
          "pt": "com certeza",
          "ipa": "/ˈdɛfɪnətli/",
          "definition": "Without any doubt.",
          "example": "Are you coming? Definitely!",
          "examplePt": "Você vem? Com certeza!"
        }
      ],
      "expressions": [
        {
          "en": "I'm going to travel next month.",
          "pt": "Vou viajar no próximo mês."
        },
        {
          "en": "I'm planning to study more.",
          "pt": "Estou planejando estudar mais."
        },
        {
          "en": "I'll call you tomorrow.",
          "pt": "Eu te ligo amanhã."
        },
        {
          "en": "What are your plans?",
          "pt": "Quais são seus planos?"
        },
        {
          "en": "I'm going to relax.",
          "pt": "Vou relaxar."
        }
      ],
      "grammar": [
        {
          "title": {
            "en": "Must / Have to for obligation and necessity",
            "pt": "Must / Have to para obrigação e necessidade"
          },
          "examples": [
            {
              "en": "I have to finish this report today.",
              "pt": "Tenho que terminar este relatório hoje."
            },
            {
              "en": "You must wear a seatbelt.",
              "pt": "Você deve usar cinto de segurança."
            },
            {
              "en": "She has to work on Saturdays.",
              "pt": "Ela tem que trabalhar aos sábados."
            }
          ],
          "rule": {
            "en": "'Must' and 'have to' express obligation or necessity. 'Must' often comes from the speaker's personal feeling or strong advice. 'Have to' often implies an external rule or situation.",
            "pt": "'Must' e 'have to' expressam obrigação ou necessidade. 'Must' muitas vezes vem do sentimento pessoal do falante ou de um conselho forte. 'Have to' muitas vezes implica uma regra ou situação externa."
          },
          "mistakes": [
            {
              "en": "Don't use 'must to' before a verb. Use 'must' + base verb. (e.g., 'You must study' NOT 'You must to study')",
              "pt": "Não use 'must to' antes de um verbo. Use 'must' + verbo base. (ex: 'You must study' NÃO 'You must to study')"
            },
            {
              "en": "For 'have to' in the third person singular (he/she/it), remember to use 'has to'. (e.g., 'He has to go' NOT 'He have to go')",
              "pt": "Para 'have to' na terceira pessoa do singular (he/she/it), lembre-se de usar 'has to'. (ex: 'He has to go' NÃO 'He have to go')"
            }
          ]
        }
      ],
      "controlledPractice": [
        {
          "id": "b26d-cp-1",
          "prompt": {
            "en": "Choose the correct word: We _____ wear uniforms at school. (It's a school rule)",
            "pt": "Escolha a palavra correta: Nós _____ usar uniformes na escola. (É uma regra da escola)"
          },
          "options": [
            "must",
            "have to",
            "should"
          ],
          "answer": "have to",
          "explanation": {
            "en": "'Have to' is used for external obligations like school rules.",
            "pt": "'Have to' é usado para obrigações externas como regras da escola."
          }
        },
        {
          "id": "b26d-cp-2",
          "prompt": {
            "en": "Choose the correct word: I _____ call my mother. I miss her. (Personal necessity)",
            "pt": "Escolha a palavra correta: Eu _____ ligar para minha mãe. Eu sinto falta dela. (Necessidade pessoal)"
          },
          "options": [
            "have to",
            "must",
            "can"
          ],
          "answer": "must",
          "explanation": {
            "en": "'Must' is often used for a strong personal feeling or internal obligation.",
            "pt": "'Must' é frequentemente usado para um sentimento pessoal forte ou obrigação interna."
          }
        },
        {
          "id": "b26d-cp-3",
          "prompt": {
            "en": "Complete the sentence: He _____ study for the test tomorrow. (It's very important)",
            "pt": "Complete a frase: Ele _____ estudar para a prova amanhã. (É muito importante)"
          },
          "options": [
            "must",
            "have to",
            "has to"
          ],
          "answer": "has to",
          "explanation": {
            "en": "For 'he', 'she', 'it', we use 'has to'.",
            "pt": "Para 'he', 'she', 'it', usamos 'has to'."
          }
        },
        {
          "id": "b26d-cp-4",
          "prompt": {
            "en": "Which sentence is correct?",
            "pt": "Qual frase está correta?"
          },
          "options": [
            "She must to go.",
            "She must go.",
            "She has go."
          ],
          "answer": "She must go.",
          "explanation": {
            "en": "After 'must', use the base form of the verb without 'to'.",
            "pt": "Depois de 'must', use a forma base do verbo sem 'to'."
          }
        }
      ],
      "input": {
        "kind": "listening",
        "title": {
          "en": "Listen to the conversation between two friends, Carla and Leo.",
          "pt": "Ouça a conversa entre dois amigos, Carla e Leo."
        },
        "lines": [
          {
            "en": "Carla: Hey Leo! How was your weekend? Did you do anything fun?",
            "pt": "Carla: Oi Leo! Como foi seu fim de semana? Você fez algo divertido?"
          },
          {
            "en": "Leo: Not really. I had to clean my apartment. My mom visited, so it was a big task.",
            "pt": "Leo: Na verdade, não muito. Eu tive que limpar meu apartamento. Minha mãe visitou, então foi uma grande tarefa."
          },
          {
            "en": "Carla: Oh, I see. In my opinion, cleaning is boring.",
            "pt": "Carla: Ah, entendi. Na minha opinião, limpar é chato."
          },
          {
            "en": "Leo: I agree! But I must keep it tidy. What about you? Any plans for next week?",
            "pt": "Leo: Concordo! Mas eu devo mantê-lo arrumado. E você? Algum plano para a próxima semana?"
          },
          {
            "en": "Carla: I'm planning to start a new course. I believe learning new things is important.",
            "pt": "Carla: Estou planejando começar um novo curso. Eu acredito que aprender coisas novas é importante."
          },
          {
            "en": "Leo: Definitely! Which course?",
            "pt": "Leo: Com certeza! Qual curso?"
          },
          {
            "en": "Carla: A cooking course! I love food, for example, Italian food is my favorite.",
            "pt": "Carla: Um curso de culinária! Eu amo comida, por exemplo, comida italiana é a minha favorita."
          },
          {
            "en": "Leo: That sounds great! I disagree about cooking being easy, but it sounds fun.",
            "pt": "Leo: Parece ótimo! Eu discordo que cozinhar seja fácil, mas parece divertido."
          }
        ],
        "questions": [
          {
            "id": "b26d-in-1",
            "prompt": {
              "en": "What did Leo do last weekend?",
              "pt": "O que Leo fez no último fim de semana?"
            },
            "options": [
              "He visited his mom.",
              "He cleaned his apartment.",
              "He cooked food."
            ],
            "answer": "He cleaned his apartment.",
            "explanation": {
              "en": "Leo said, 'I had to clean my apartment.'",
              "pt": "Leo disse: 'Eu tive que limpar meu apartamento.'"
            }
          },
          {
            "id": "b26d-in-2",
            "prompt": {
              "en": "What is Carla's opinion about learning new things?",
              "pt": "Qual é a opinião da Carla sobre aprender coisas novas?"
            },
            "options": [
              "She thinks it's difficult.",
              "She believes it's important.",
              "She thinks it's boring."
            ],
            "answer": "She believes it's important.",
            "explanation": {
              "en": "Carla said, 'I believe learning new things is important.'",
              "pt": "Carla disse: 'Eu acredito que aprender coisas novas é importante.'"
            }
          },
          {
            "id": "b26d-in-3",
            "prompt": {
              "en": "What is Carla planning to do next week?",
              "pt": "O que Carla está planejando fazer na próxima semana?"
            },
            "options": [
              "Travel to Italy.",
              "Visit her family.",
              "Start a cooking course."
            ],
            "answer": "Start a cooking course.",
            "explanation": {
              "en": "Carla said, 'I'm planning to start a new course. A cooking course!'",
              "pt": "Carla disse: 'Estou planejando começar um novo curso. Um curso de culinária!'"
            }
          }
        ]
      },
      "quickCheck": [
        {
          "id": "b26d-qc-1",
          "prompt": {
            "en": "Choose the best option: 'I think' means...",
            "pt": "Escolha a melhor opção: 'I think' significa..."
          },
          "options": [
            "I agree",
            "I believe",
            "I disagree"
          ],
          "answer": "I believe",
          "explanation": {
            "en": "'I think' is used to express an opinion or belief.",
            "pt": "'I think' é usado para expressar uma opinião ou crença."
          }
        },
        {
          "id": "b26d-qc-2",
          "prompt": {
            "en": "Complete the sentence: You _____ finish your homework before watching TV. (Your teacher's rule)",
            "pt": "Complete a frase: Você _____ terminar sua lição de casa antes de assistir TV. (Regra do seu professor)"
          },
          "options": [
            "must",
            "have to",
            "should"
          ],
          "answer": "have to",
          "explanation": {
            "en": "Use 'have to' for external rules or obligations.",
            "pt": "Use 'have to' para regras ou obrigações externas."
          }
        },
        {
          "id": "b26d-qc-3",
          "prompt": {
            "en": "What does 'I'm planning to study more' mean?",
            "pt": "O que significa 'I'm planning to study more'?"
          },
          "options": [
            "I will study more now.",
            "I want to study more in the future.",
            "I studied a lot."
          ],
          "answer": "I want to study more in the future.",
          "explanation": {
            "en": "'I'm planning to' talks about future intentions.",
            "pt": "'I'm planning to' fala sobre intenções futuras."
          }
        },
        {
          "id": "b26d-qc-4",
          "prompt": {
            "en": "If someone says 'I agree', it means:",
            "pt": "Se alguém diz 'I agree', significa:"
          },
          "options": [
            "They have a different opinion.",
            "They have the same opinion.",
            "They don't know."
          ],
          "answer": "They have the same opinion.",
          "explanation": {
            "en": "'I agree' means you share the same opinion.",
            "pt": "'I agree' significa que você compartilha a mesma opinião."
          }
        }
      ]
    },
    "communicate": {
      "id": "BEGINNER-U26-COMMUNICATE",
      "review": [
        {
          "en": "Today we learned how to express opinions using phrases like 'I think' and 'in my opinion'.",
          "pt": "Hoje aprendemos como expressar opiniões usando frases como 'I think' e 'in my opinion'."
        },
        {
          "en": "We also learned how to talk about obligations and necessities with 'must' and 'have to'.",
          "pt": "Também aprendemos a falar sobre obrigações e necessidades com 'must' e 'have to'."
        },
        {
          "en": "And we practiced talking about plans for the future.",
          "pt": "E praticamos falar sobre planos para o futuro."
        }
      ],
      "activities": [
        {
          "id": "b26c-act-1",
          "title": {
            "en": "Short Speaking Task: Expressing Opinions",
            "pt": "Tarefa de Fala Curta: Expressando Opiniões"
          },
          "instruction": {
            "en": "Look at the pictures. Express your opinion using 'I think', 'I believe', or 'in my opinion'.",
            "pt": "Olhe as imagens. Expresse sua opinião usando 'I think', 'I believe' ou 'in my opinion'."
          },
          "phrases": [
            {
              "en": "Learning English is fun.",
              "pt": "Aprender inglês é divertido."
            },
            {
              "en": "Going to the beach is relaxing.",
              "pt": "Ir à praia é relaxante."
            },
            {
              "en": "Working early is difficult.",
              "pt": "Trabalhar cedo é difícil."
            }
          ],
          "check": [
            {
              "id": "b26c-act-1-1",
              "prompt": {
                "en": "Which phrase expresses a strong personal belief?",
                "pt": "Qual frase expressa uma forte crença pessoal?"
              },
              "options": [
                "I think",
                "I believe",
                "It depends"
              ],
              "answer": "I believe",
              "explanation": {
                "en": "'I believe' often implies a deeper conviction than 'I think'.",
                "pt": "'I believe' muitas vezes implica uma convicção mais profunda do que 'I think'."
              }
            },
            {
              "id": "b26c-act-1-2",
              "prompt": {
                "en": "If you say 'In my opinion, pizza is the best food', what are you doing?",
                "pt": "Se você diz 'Na minha opinião, pizza é a melhor comida', o que você está fazendo?"
              },
              "options": [
                "Stating a fact.",
                "Expressing a personal view.",
                "Asking a question."
              ],
              "answer": "Expressing a personal view.",
              "explanation": {
                "en": "'In my opinion' clearly introduces a personal viewpoint.",
                "pt": "'In my opinion' introduz claramente um ponto de vista pessoal."
              }
            }
          ]
        },
        {
          "id": "b26c-act-2",
          "title": {
            "en": "Listening Task: Understanding Opinions and Plans",
            "pt": "Tarefa de Escuta: Compreendendo Opiniões e Planos"
          },
          "instruction": {
            "en": "Listen to the short audio clips. Answer the questions based on what you hear.",
            "pt": "Ouça os trechos de áudio curtos. Responda às perguntas com base no que você ouve."
          },
          "phrases": [
            {
              "en": "Speaker 1: I'm going to visit my friends this weekend. I believe it's important to relax.",
              "pt": "Locutor 1: Eu vou visitar meus amigos neste fim de semana. Eu acredito que é importante relaxar."
            },
            {
              "en": "Speaker 2: We have to finish this project today. It's a company rule.",
              "pt": "Locutor 2: Temos que terminar este projeto hoje. É uma regra da empresa."
            },
            {
              "en": "Speaker 3: I think that movie is amazing. Definitely a must-watch!",
              "pt": "Locutor 3: Eu acho que aquele filme é incrível. Com certeza imperdível!"
            }
          ],
          "check": [
            {
              "id": "b26c-act-2-1",
              "prompt": {
                "en": "What is Speaker 1's plan for the weekend?",
                "pt": "Qual é o plano do Locutor 1 para o fim de semana?"
              },
              "options": [
                "To work on a project.",
                "To visit friends.",
                "To watch a movie."
              ],
              "answer": "To visit friends.",
              "explanation": {
                "en": "Speaker 1 says: 'I'm going to visit my friends this weekend.'",
                "pt": "O Locutor 1 diz: 'Eu vou visitar meus amigos neste fim de semana.'"
              }
            },
            {
              "id": "b26c-act-2-2",
              "prompt": {
                "en": "Why does Speaker 2 have to finish the project today?",
                "pt": "Por que o Locutor 2 tem que terminar o projeto hoje?"
              },
              "options": [
                "It's a personal goal.",
                "It's a company rule.",
                "It depends on the time."
              ],
              "answer": "It's a company rule.",
              "explanation": {
                "en": "Speaker 2 says: 'It's a company rule.'",
                "pt": "O Locutor 2 diz: 'É uma regra da empresa.'"
              }
            }
          ]
        },
        {
          "id": "b26c-act-3",
          "title": {
            "en": "Real-life Communication Activity: Discussing Weekend Plans",
            "pt": "Atividade de Comunicação Real: Discutindo Planos de Fim de Semana"
          },
          "instruction": {
            "en": "Imagine you are talking to a friend about your weekend. Share your plans and ask about theirs. Use opinions and obligations.",
            "pt": "Imagine que você está conversando com um amigo sobre seu fim de semana. Compartilhe seus planos e pergunte sobre os dele. Use opiniões e obrigações."
          },
          "phrases": [
            {
              "en": "I'm planning to cook a big dinner.",
              "pt": "Estou planejando fazer um grande jantar."
            },
            {
              "en": "I must finish my book.",
              "pt": "Eu devo terminar meu livro."
            },
            {
              "en": "In my opinion, Saturdays are for resting.",
              "pt": "Na minha opinião, sábados são para descansar."
            }
          ],
          "check": [
            {
              "id": "b26c-act-3-1",
              "prompt": {
                "en": "If you are sharing a future intention, which expression is best?",
                "pt": "Se você está compartilhando uma intenção futura, qual expressão é a melhor?"
              },
              "options": [
                "I had to",
                "I'm planning to",
                "I agreed"
              ],
              "answer": "I'm planning to",
              "explanation": {
                "en": "'I'm planning to' is used for future intentions.",
                "pt": "'I'm planning to' é usado para intenções futuras."
              }
            },
            {
              "id": "b26c-act-3-2",
              "prompt": {
                "en": "Which sentence shows a personal obligation?",
                "pt": "Qual frase mostra uma obrigação pessoal?"
              },
              "options": [
                "I have to work.",
                "I must call my mom.",
                "It depends on the weather."
              ],
              "answer": "I must call my mom.",
              "explanation": {
                "en": "'Must' often indicates a personal obligation.",
                "pt": "'Must' muitas vezes indica uma obrigação pessoal."
              }
            }
          ]
        },
        {
          "id": "b26c-act-4",
          "title": {
            "en": "Make Questions: Asking for Opinions and Plans",
            "pt": "Faça Perguntas: Pedindo Opiniões e Planos"
          },
          "instruction": {
            "en": "Formulate questions to ask about opinions and plans using the new vocabulary and grammar.",
            "pt": "Formule perguntas para pedir opiniões e planos usando o novo vocabulário e gramática."
          },
          "phrases": [
            {
              "en": "What do you think about online classes?",
              "pt": "O que você acha das aulas online?"
            },
            {
              "en": "Do you have to work tomorrow?",
              "pt": "Você tem que trabalhar amanhã?"
            },
            {
              "en": "What are your plans for the holidays?",
              "pt": "Quais são seus planos para as férias?"
            }
          ],
          "check": [
            {
              "id": "b26c-act-4-1",
              "prompt": {
                "en": "Which question asks about an external obligation?",
                "pt": "Qual pergunta pede sobre uma obrigação externa?"
              },
              "options": [
                "What must I do?",
                "Do you have to go?",
                "What are your plans?"
              ],
              "answer": "Do you have to go?",
              "explanation": {
                "en": "'Have to' is used for external obligations.",
                "pt": "'Have to' é usado para obrigações externas."
              }
            },
            {
              "id": "b26c-act-4-2",
              "prompt": {
                "en": "How would you ask for someone's general opinion?",
                "pt": "Como você pediria a opinião geral de alguém?"
              },
              "options": [
                "Are you agree?",
                "What do you think?",
                "Must you tell me?"
              ],
              "answer": "What do you think?",
              "explanation": {
                "en": "'What do you think?' is a common way to ask for an opinion.",
                "pt": "'What do you think?' é uma forma comum de pedir uma opinião."
              }
            }
          ]
        },
        {
          "id": "b26c-act-5",
          "title": {
            "en": "Build Sentences: Combining New Content",
            "pt": "Construir Frases: Combinando Conteúdo Novo"
          },
          "instruction": {
            "en": "Create full sentences using the given words or phrases, incorporating opinions, obligations, and plans.",
            "pt": "Crie frases completas usando as palavras ou frases dadas, incorporando opiniões, obrigações e planos."
          },
          "phrases": [
            {
              "en": "I / think / exercise / important",
              "pt": "Eu / acho / exercício / importante"
            },
            {
              "en": "we / have to / study / for the test",
              "pt": "nós / temos que / estudar / para a prova"
            },
            {
              "en": "she / planning to / travel / next year",
              "pt": "ela / planejando / viajar / próximo ano"
            }
          ],
          "check": [
            {
              "id": "b26c-act-5-1",
              "prompt": {
                "en": "Which sentence correctly uses 'must' for a strong personal feeling?",
                "pt": "Qual frase usa 'must' corretamente para um sentimento pessoal forte?"
              },
              "options": [
                "I must to clean my room.",
                "I must clean my room.",
                "I have clean my room."
              ],
              "answer": "I must clean my room.",
              "explanation": {
                "en": "Remember, 'must' is followed by the base form of the verb without 'to'.",
                "pt": "Lembre-se, 'must' é seguido pela forma base do verbo sem 'to'."
              }
            },
            {
              "id": "b26c-act-5-2",
              "prompt": {
                "en": "Combine: 'He / believe / honesty / best policy'.",
                "pt": "Combine: 'Ele / acredita / honestidade / melhor política'."
              },
              "options": [
                "He believes honesty is the best policy.",
                "He believe honesty is the best policy.",
                "He believes honesty is best policy."
              ],
              "answer": "He believes honesty is the best policy.",
              "explanation": {
                "en": "For 'he/she/it', use 'believes'. 'The best policy' is the correct phrase.",
                "pt": "Para 'he/she/it', use 'believes'. 'The best policy' é a frase correta."
              }
            }
          ]
        }
      ],
      "challenge": {
        "id": "b26c-challenge-1",
        "title": {
          "en": "My Future Plans and Opinions",
          "pt": "Meus Planos Futuros e Opiniões"
        },
        "instruction": {
          "en": "Think about your own life. What are your plans for the next month or year? What are your obligations? What are your opinions about these plans or obligations? Prepare to share with a partner.",
          "pt": "Pense sobre sua própria vida. Quais são seus planos para o próximo mês ou ano? Quais são suas obrigações? Quais são suas opiniões sobre esses planos ou obrigações? Prepare-se para compartilhar com um parceiro."
        },
        "phrases": [
          {
            "en": "I'm going to start a new job next month.",
            "pt": "Vou começar um novo emprego no próximo mês."
          },
          {
            "en": "I have to wake up early every day.",
            "pt": "Tenho que acordar cedo todos os dias."
          },
          {
            "en": "In my opinion, learning English is difficult but rewarding.",
            "pt": "Na minha opinião, aprender inglês é difícil mas recompensador."
          }
        ],
        "check": [
          {
            "id": "b26c-ch-1",
            "prompt": {
              "en": "Which sentence correctly describes a personal plan?",
              "pt": "Qual frase descreve corretamente um plano pessoal?"
            },
            "options": [
              "I must travel.",
              "I'm planning to travel.",
              "I agreed to travel."
            ],
            "answer": "I'm planning to travel.",
            "explanation": {
              "en": "'I'm planning to' is used for personal plans or intentions.",
              "pt": "'I'm planning to' é usado para planos ou intenções pessoais."
            }
          },
          {
            "id": "b26c-ch-2",
            "prompt": {
              "en": "How would you express a differing opinion politely?",
              "pt": "Como você expressaria uma opinião diferente de forma educada?"
            },
            "options": [
              "I think you are wrong.",
              "I disagree, but I understand.",
              "Definitely not!"
            ],
            "answer": "I disagree, but I understand.",
            "explanation": {
              "en": "This phrase shows disagreement while still being polite.",
              "pt": "Esta frase mostra desacordo, mas ainda sendo educada."
            }
          }
        ]
      },
      "lessonReview": {
        "summary": {
          "en": "Congratulations! Today you learned how to share your opinions using new vocabulary and discuss obligations with 'must' and 'have to'. You also practiced talking about your future plans.",
          "pt": "Parabéns! Hoje você aprendeu a compartilhar suas opiniões usando um novo vocabulário e a discutir obrigações com 'must' e 'have to'. Você também praticou falar sobre seus planos futuros."
        },
        "canDo": [
          {
            "en": "Express my opinion using phrases like 'I think' and 'in my opinion'.",
            "pt": "Expressar minha opinião usando frases como 'I think' e 'in my opinion'."
          },
          {
            "en": "Talk about personal obligations and necessities using 'must' and 'have to'.",
            "pt": "Falar sobre obrigações e necessidades pessoais usando 'must' e 'have to'."
          },
          {
            "en": "Discuss future plans using expressions like 'I'm going to' and 'I'm planning to'.",
            "pt": "Discutir planos futuros usando expressões como 'I'm going to' e 'I'm planning to'."
          }
        ],
        "next": {
          "en": "Keep practicing by listening to English songs and trying to identify opinion phrases. For next unit, we will learn about making suggestions and giving advice.",
          "pt": "Continue praticando ouvindo músicas em inglês e tentando identificar frases de opinião. Para a próxima unidade, aprenderemos sobre como fazer sugestões e dar conselhos."
        }
      }
    }
  },
  {
    "code": "BEGINNER-U27",
    "number": 27,
    "title": "Social Interactions and Basic Conjunctions",
    "titlePt": "Interações Sociais e Conjunções Básicas",
    "cefr": "A1",
    "objective": {
      "en": "To teach social interaction and basic conjunctions (and, but, or, because, so) to connect ideas in a contextualized way.",
      "pt": "Ensinar interação social e conjunções básicas (and, but, or, because, so) para conectar ideias de forma contextualizada."
    },
    "communicationGoal": {
      "en": "The student will be able to use 'greeting' and social interaction vocabulary to communicate in real situations.",
      "pt": "O aluno será capaz de usar 'saudações' e o vocabulário de interação social para se comunicar em situações reais."
    },
    "prerequisites": {
      "en": "Structure: Must / Have to for obligation and necessity. Vocabulary: Opinions.",
      "pt": "Estrutura: Must / Have to para obrigação e necessidade. Vocabulário: Opiniões."
    },
    "newContent": {
      "en": "Grammar: Basic conjunctions (and, but, or, because, so) to connect ideas. Vocabulary: Social Interaction (10 lexical items). Expressions: Greeting.",
      "pt": "Gramática: Conjunções básicas (and, but, or, because, so) para conectar ideias. Vocabulário: Interação Social (10 itens lexicais). Expressões: Saudação."
    },
    "reviewContent": {
      "en": "Spiral review: Future with going to for plans and intentions (Unit 22). Vocabulary review: Travel (Unit 17).",
      "pt": "Revisão em espiral: Futuro com going to para planos e intenções (Unidade 22). Revisão de vocabulário: Viagem (Unidade 17)."
    },
    "discover": {
      "id": "BEGINNER-U27-DISCOVER",
      "warmUp": {
        "prompt": {
          "en": "Look at the pictures. What do you see? How do these people feel? What are they doing?",
          "pt": "Observe as imagens. O que você vê? Como essas pessoas se sentem? O que elas estão fazendo?"
        },
        "phrases": [
          {
            "en": "A party with many people.",
            "pt": "Uma festa com muitas pessoas."
          },
          {
            "en": "Friends talking and laughing.",
            "pt": "Amigos conversando e rindo."
          },
          {
            "en": "A birthday celebration.",
            "pt": "Uma comemoração de aniversário."
          }
        ]
      },
      "context": {
        "situation": {
          "en": "Carlos and Ana meet at a friend's birthday party.",
          "pt": "Carlos e Ana se encontram na festa de aniversário de um amigo."
        },
        "dialogue": [
          {
            "who": "Carlos",
            "en": "Hi, Ana! How are you?",
            "pt": "Oi, Ana! Como você está?"
          },
          {
            "who": "Ana",
            "en": "Hi, Carlos! I'm good, thanks. And you?",
            "pt": "Oi, Carlos! Estou bem, obrigada. E você?"
          },
          {
            "who": "Carlos",
            "en": "I'm great! Nice to meet you here. This party is fun!",
            "pt": "Estou ótimo! Prazer em te encontrar aqui. Esta festa é divertida!"
          },
          {
            "who": "Ana",
            "en": "Yes, it is. The food is delicious, and the music is good.",
            "pt": "Sim, é. A comida está deliciosa e a música é boa."
          },
          {
            "who": "Carlos",
            "en": "I agree. Are you enjoying the conversation?",
            "pt": "Concordo. Você está gostando da conversa?"
          },
          {
            "who": "Ana",
            "en": "Yes, I am. I met some new people, and we had a good small talk.",
            "pt": "Sim, estou. Conheci algumas pessoas novas e tivemos uma boa conversa fiada."
          },
          {
            "who": "Carlos",
            "en": "That's nice! I need to get a drink, because I'm thirsty.",
            "pt": "Que legal! Eu preciso pegar uma bebida, porque estou com sede."
          }
        ]
      },
      "vocabulary": [
        {
          "term": "invite",
          "pt": "convidar",
          "ipa": "/ɪnˈvaɪt/",
          "definition": "To ask someone to come to an event or place.",
          "example": "I want to invite you to my birthday party.",
          "examplePt": "Eu quero te convidar para minha festa de aniversário."
        },
        {
          "term": "party",
          "pt": "festa",
          "ipa": "/ˈpɑːrti/",
          "definition": "A social gathering of people for entertainment or celebration.",
          "example": "We are going to a big party on Saturday.",
          "examplePt": "Nós vamos a uma grande festa no sábado."
        },
        {
          "term": "celebration",
          "pt": "celebração, comemoração",
          "ipa": "/ˌselɪˈbreɪʃən/",
          "definition": "The action of celebrating an important day or event.",
          "example": "Her graduation celebration was a lot of fun.",
          "examplePt": "A celebração da formatura dela foi muito divertida."
        },
        {
          "term": "guest",
          "pt": "convidado",
          "ipa": "/ɡest/",
          "definition": "A person who is invited to visit or stay in someone's home, or to attend a special event.",
          "example": "There are many guests at the wedding.",
          "examplePt": "Há muitos convidados no casamento."
        },
        {
          "term": "gift",
          "pt": "presente",
          "ipa": "/ɡɪft/",
          "definition": "Something given willingly to someone without payment; a present.",
          "example": "He received a nice gift for his birthday.",
          "examplePt": "Ele recebeu um belo presente de aniversário."
        },
        {
          "term": "conversation",
          "pt": "conversação, conversa",
          "ipa": "/ˌkɑːnvərˈseɪʃən/",
          "definition": "A talk between two or more people, in which thoughts, feelings, and ideas are exchanged.",
          "example": "They had a long conversation about their plans.",
          "examplePt": "Eles tiveram uma longa conversa sobre seus planos."
        },
        {
          "term": "small talk",
          "pt": "conversa fiada, conversa casual",
          "ipa": "/smɔːl tɔːk/",
          "definition": "Polite conversation about unimportant or uncontroversial matters, especially as practiced on social occasions.",
          "example": "We made some small talk before the meeting started.",
          "examplePt": "Nós tivemos uma conversa fiada antes da reunião começar."
        },
        {
          "term": "compliment",
          "pt": "elogio",
          "ipa": "/ˈkɑːmplɪmənt/",
          "definition": "An expression of praise, admiration, or approval.",
          "example": "She gave me a compliment about my new dress.",
          "examplePt": "Ela me fez um elogio sobre meu vestido novo."
        },
        {
          "term": "apology",
          "pt": "desculpa, pedido de desculpas",
          "ipa": "/əˈpɑːlədʒi/",
          "definition": "A regretful acknowledgment of an offense or failure.",
          "example": "He made an apology for being late.",
          "examplePt": "Ele pediu desculpas por estar atrasado."
        },
        {
          "term": "favor",
          "pt": "favor",
          "ipa": "/ˈfeɪvər/",
          "definition": "An act of kindness beyond what is due or usual.",
          "example": "Can you do me a favor and help me?",
          "examplePt": "Você pode me fazer um favor e me ajudar?"
        }
      ],
      "expressions": [
        {
          "en": "Hi, how are you?",
          "pt": "Oi, como você está?"
        },
        {
          "en": "Nice to meet you.",
          "pt": "Prazer em te conhecer."
        },
        {
          "en": "Good morning!",
          "pt": "Bom dia!"
        }
      ],
      "grammar": [
        {
          "title": {
            "en": "Basic Conjunctions (and, but, or, because, so)",
            "pt": "Conjunções Básicas (and, but, or, because, so)"
          },
          "examples": [
            {
              "en": "I like tea, but I prefer coffee.",
              "pt": "Eu gosto de chá, mas prefiro café."
            },
            {
              "en": "I was tired, so I went to bed early.",
              "pt": "Eu estava cansado, então fui para a cama cedo."
            },
            {
              "en": "Do you want water or juice?",
              "pt": "Você quer água ou suco?"
            }
          ],
          "rule": {
            "en": "Conjunctions are words that connect words, phrases, or clauses. They help us combine sentences and show relationships between ideas.",
            "pt": "Conjunções são palavras que conectam palavras, frases ou orações. Elas nos ajudam a combinar frases e mostrar relações entre ideias."
          },
          "mistakes": [
            {
              "en": "Using 'but' to add similar ideas.",
              "pt": "Usar 'but' para adicionar ideias semelhantes."
            },
            {
              "en": "Not using a conjunction when two ideas are related.",
              "pt": "Não usar uma conjunção quando duas ideias estão relacionadas."
            }
          ]
        }
      ],
      "controlledPractice": [
        {
          "id": "b27d-cp1",
          "prompt": {
            "en": "Choose the best conjunction: I like apples ____ bananas.",
            "pt": "Escolha a melhor conjunção: Eu gosto de maçãs ____ bananas."
          },
          "options": [
            "but",
            "and",
            "or",
            "so"
          ],
          "answer": "and",
          "explanation": {
            "en": "'And' connects two similar ideas.",
            "pt": "'And' conecta duas ideias semelhantes."
          }
        },
        {
          "id": "b27d-cp2",
          "prompt": {
            "en": "Choose the best conjunction: It is raining, ____ I need an umbrella.",
            "pt": "Escolha a melhor conjunção: Está chovendo, ____ eu preciso de um guarda-chuva."
          },
          "options": [
            "but",
            "because",
            "so",
            "or"
          ],
          "answer": "so",
          "explanation": {
            "en": "'So' shows a result.",
            "pt": "'So' mostra um resultado."
          }
        },
        {
          "id": "b27d-cp3",
          "prompt": {
            "en": "Choose the best conjunction: I am hungry, ____ I don't want to eat.",
            "pt": "Escolha a melhor conjunção: Eu estou com fome, ____ eu não quero comer."
          },
          "options": [
            "and",
            "but",
            "because",
            "so"
          ],
          "answer": "but",
          "explanation": {
            "en": "'But' shows a contrast.",
            "pt": "'But' mostra um contraste."
          }
        },
        {
          "id": "b27d-cp4",
          "prompt": {
            "en": "Choose the best conjunction: She is happy ____ she got a gift.",
            "pt": "Escolha a melhor conjunção: Ela está feliz ____ ela ganhou um presente."
          },
          "options": [
            "or",
            "so",
            "but",
            "because"
          ],
          "answer": "because",
          "explanation": {
            "en": "'Because' gives a reason.",
            "pt": "'Because' dá uma razão."
          }
        }
      ],
      "input": {
        "kind": "reading",
        "title": {
          "en": "A New Friend",
          "pt": "Um Novo Amigo"
        },
        "lines": [
          {
            "en": "It's Saturday. Maria is at a celebration for her friend's birthday. Many guests are there. She sees a new person. 'Hi, I'm Maria! Nice to meet you,' she says. The person smiles. 'Hello, I'm Leo. Nice to meet you too!'",
            "pt": "É sábado. Maria está em uma celebração do aniversário de sua amiga. Muitos convidados estão lá. Ela vê uma pessoa nova. 'Oi, sou Maria! Prazer em te conhecer', ela diz. A pessoa sorri. 'Olá, sou Leo. Prazer em te conhecer também!'"
          },
          {
            "en": "They start a conversation. Maria likes Leo, and Leo likes Maria. They talk about the party. 'The music is great, but it's a little loud,' says Leo. Maria agrees. 'Yes, I like the music, but I prefer to talk outside.'",
            "pt": "Eles começam uma conversa. Maria gosta de Leo, e Leo gosta de Maria. Eles falam sobre a festa. 'A música é ótima, mas está um pouco alta', diz Leo. Maria concorda. 'Sim, eu gosto da música, mas prefiro conversar lá fora.'"
          },
          {
            "en": "They go outside. They continue their small talk. Leo needs a drink, so Maria shows him where the drinks are. 'Thanks for your help! Can I get you a drink too?' he asks. Maria says, 'Yes, please! I want juice or water.'",
            "pt": "Eles vão para fora. Eles continuam sua conversa fiada. Leo precisa de uma bebida, então Maria mostra a ele onde estão as bebidas. 'Obrigado pela ajuda! Posso te trazer uma bebida também?', ele pergunta. Maria diz, 'Sim, por favor! Eu quero suco ou água.'"
          }
        ],
        "questions": [
          {
            "id": "b27d-iq1",
            "prompt": {
              "en": "Where is Maria?",
              "pt": "Onde Maria está?"
            },
            "options": [
              "At home",
              "At a celebration",
              "At work",
              "At a restaurant"
            ],
            "answer": "At a celebration",
            "explanation": {
              "en": "The text says Maria is 'at a celebration for her friend's birthday.'",
              "pt": "O texto diz que Maria está 'em uma celebração do aniversário de sua amiga.'"
            }
          },
          {
            "id": "b27d-iq2",
            "prompt": {
              "en": "What does Leo say about the music?",
              "pt": "O que Leo diz sobre a música?"
            },
            "options": [
              "It's bad.",
              "It's too quiet.",
              "It's great, but loud.",
              "He doesn't like it."
            ],
            "answer": "It's great, but loud.",
            "explanation": {
              "en": "Leo says: 'The music is great, but it's a little loud.'",
              "pt": "Leo diz: 'A música é ótima, mas está um pouco alta.'"
            }
          },
          {
            "id": "b27d-iq3",
            "prompt": {
              "en": "Why do Maria and Leo go outside?",
              "pt": "Por que Maria e Leo vão para fora?"
            },
            "options": [
              "Because they are hungry.",
              "Because they want to talk outside.",
              "Because they are tired.",
              "Because they need to leave."
            ],
            "answer": "Because they want to talk outside.",
            "explanation": {
              "en": "Maria says she prefers 'to talk outside'.",
              "pt": "Maria diz que prefere 'conversar lá fora'."
            }
          }
        ]
      },
      "quickCheck": [
        {
          "id": "b27d-qc1",
          "prompt": {
            "en": "Which word means 'to ask someone to an event'?",
            "pt": "Qual palavra significa 'pedir para alguém ir a um evento'?"
          },
          "options": [
            "guest",
            "gift",
            "invite",
            "apology"
          ],
          "answer": "invite",
          "explanation": {
            "en": "'Invite' means to ask someone to come.",
            "pt": "'Invite' significa pedir para alguém vir."
          }
        },
        {
          "id": "b27d-qc2",
          "prompt": {
            "en": "Complete the sentence: I like coffee ____ tea.",
            "pt": "Complete a frase: Eu gosto de café ____ chá."
          },
          "options": [
            "but",
            "or",
            "and",
            "so"
          ],
          "answer": "and",
          "explanation": {
            "en": "'And' connects two things you like.",
            "pt": "'And' conecta duas coisas que você gosta."
          }
        },
        {
          "id": "b27d-qc3",
          "prompt": {
            "en": "What is a 'small talk'?",
            "pt": "O que é uma 'small talk'?"
          },
          "options": [
            "A long, serious discussion",
            "A short, polite conversation",
            "A loud argument",
            "A secret message"
          ],
          "answer": "A short, polite conversation",
          "explanation": {
            "en": "Small talk is light, polite conversation.",
            "pt": "Small talk é uma conversa leve e educada."
          }
        },
        {
          "id": "b27d-qc4",
          "prompt": {
            "en": "Which conjunction shows a reason?",
            "pt": "Qual conjunção mostra uma razão?"
          },
          "options": [
            "so",
            "but",
            "because",
            "or"
          ],
          "answer": "because",
          "explanation": {
            "en": "'Because' explains why something happens.",
            "pt": "'Because' explica por que algo acontece."
          }
        }
      ]
    },
    "communicate": {
      "id": "BEGINNER-U27-COMMUNICATE",
      "review": [
        {
          "en": "Remember the new vocabulary: invite, party, celebration, guest, gift, conversation, small talk, compliment, apology, favor.",
          "pt": "Lembre-se do novo vocabulário: convidar, festa, celebração, convidado, presente, conversação, conversa fiada, elogio, desculpa, favor."
        },
        {
          "en": "Remember the conjunctions: and (to add), but (to contrast), or (to choose), because (to give reason), so (to show result).",
          "pt": "Lembre-se das conjunções: and (para adicionar), but (para contrastar), or (para escolher), because (para dar razão), so (para mostrar resultado)."
        },
        {
          "en": "Practice greetings: Hi, how are you? Nice to meet you. Good morning!",
          "pt": "Pratique saudações: Oi, como você está? Prazer em te conhecer. Bom dia!"
        }
      ],
      "activities": [
        {
          "id": "b27c-act1",
          "title": {
            "en": "Reading Comprehension: Party Plans",
            "pt": "Compreensão de Leitura: Planos para a Festa"
          },
          "instruction": {
            "en": "Read the text about party plans and answer the questions.",
            "pt": "Leia o texto sobre planos de festa e responda às perguntas."
          },
          "phrases": [
            {
              "en": "Ana is going to invite her friends. It's her birthday, so she needs to plan a party.",
              "pt": "Ana vai convidar seus amigos. É o aniversário dela, então ela precisa planejar uma festa."
            },
            {
              "en": "She wants music and good food, but she doesn't like loud music.",
              "pt": "Ela quer música e boa comida, mas não gosta de música alta."
            },
            {
              "en": "She will send invitations and buy gifts for her guests.",
              "pt": "Ela vai enviar convites e comprar presentes para seus convidados."
            }
          ],
          "check": [
            {
              "id": "b27c-rc1",
              "prompt": {
                "en": "Why does Ana need to plan a party?",
                "pt": "Por que Ana precisa planejar uma festa?"
              },
              "options": [
                "Because she likes parties.",
                "Because it's her birthday.",
                "Because her friends asked.",
                "Because she is bored."
              ],
              "answer": "Because it's her birthday.",
              "explanation": {
                "en": "The text says: 'It's her birthday, so she needs to plan a party.'",
                "pt": "O texto diz: 'É o aniversário dela, então ela precisa planejar uma festa.'"
              }
            },
            {
              "id": "b27c-rc2",
              "prompt": {
                "en": "What kind of music does Ana prefer?",
                "pt": "Que tipo de música Ana prefere?"
              },
              "options": [
                "Loud music",
                "Quiet music",
                "No music",
                "Fast music"
              ],
              "answer": "Quiet music",
              "explanation": {
                "en": "She wants music, 'but she doesn't like loud music'. This implies she prefers quiet music.",
                "pt": "Ela quer música, 'mas não gosta de música alta'. Isso implica que ela prefere música mais calma."
              }
            }
          ]
        },
        {
          "id": "b27c-act2",
          "title": {
            "en": "Answer the Questions: Your Social Life",
            "pt": "Responda às Perguntas: Sua Vida Social"
          },
          "instruction": {
            "en": "Answer these questions about social interaction.",
            "pt": "Responda a estas perguntas sobre interação social."
          },
          "phrases": [
            {
              "en": "Do you like to invite friends to your home?",
              "pt": "Você gosta de convidar amigos para sua casa?"
            },
            {
              "en": "What do you say when you meet someone new?",
              "pt": "O que você diz quando encontra alguém novo?"
            },
            {
              "en": "Do you prefer a big party or a small gathering?",
              "pt": "Você prefere uma festa grande ou uma reunião pequena?"
            }
          ],
          "check": [
            {
              "id": "b27c-aq1",
              "prompt": {
                "en": "What do you say when someone gives you a compliment?",
                "pt": "O que você diz quando alguém te faz um elogio?"
              },
              "options": [
                "I say 'No, it's not true.'",
                "I say 'Thank you!'",
                "I say 'That's not a compliment.'",
                "I say 'I don't care.'"
              ],
              "answer": "I say 'Thank you!'",
              "explanation": {
                "en": "It's polite to say 'Thank you' for a compliment.",
                "pt": "É educado dizer 'Obrigado' por um elogio."
              }
            },
            {
              "id": "b27c-aq2",
              "prompt": {
                "en": "When do you give an apology?",
                "pt": "Quando você pede desculpas?"
              },
              "options": [
                "When I am happy.",
                "When I make a mistake.",
                "When I want a gift.",
                "When I invite someone."
              ],
              "answer": "When I make a mistake.",
              "explanation": {
                "en": "You give an apology when you regret something, often a mistake.",
                "pt": "Você pede desculpas quando se arrepende de algo, frequentemente um erro."
              }
            }
          ]
        },
        {
          "id": "b27c-act3",
          "title": {
            "en": "Complete the Conversation: The Weekend",
            "pt": "Complete a Conversa: O Fim de Semana"
          },
          "instruction": {
            "en": "Complete the conversation using 'and', 'but', 'or', 'because', or 'so'.",
            "pt": "Complete a conversa usando 'and', 'but', 'or', 'because' ou 'so'."
          },
          "phrases": [
            {
              "en": "A: What are your plans for the weekend? B: I want to relax ____ read a book.",
              "pt": "A: Quais são seus planos para o fim de semana? B: Eu quero relaxar ____ ler um livro."
            },
            {
              "en": "A: Do you want to go to the beach ____ the park? B: I prefer the park, ____ the beach is too far.",
              "pt": "A: Você quer ir à praia ____ ao parque? B: Eu prefiro o parque, ____ a praia é muito longe."
            },
            {
              "en": "A: I need to buy food, ____ I'm hungry. B: I can go with you, ____ I'm free.",
              "pt": "A: Eu preciso comprar comida, ____ estou com fome. B: Eu posso ir com você, ____ estou livre."
            }
          ],
          "check": [
            {
              "id": "b27c-cc1",
              "prompt": {
                "en": "Complete: I want to relax ____ read a book.",
                "pt": "Complete: Eu quero relaxar ____ ler um livro."
              },
              "options": [
                "but",
                "or",
                "and",
                "so"
              ],
              "answer": "and",
              "explanation": {
                "en": "'And' connects two activities you want to do.",
                "pt": "'And' conecta duas atividades que você quer fazer."
              }
            },
            {
              "id": "b27c-cc2",
              "prompt": {
                "en": "Complete: I prefer the park, ____ the beach is too far.",
                "pt": "Complete: Eu prefiro o parque, ____ a praia é muito longe."
              },
              "options": [
                "so",
                "or",
                "because",
                "and"
              ],
              "answer": "because",
              "explanation": {
                "en": "'Because' gives the reason for preferring the park.",
                "pt": "'Because' dá a razão para preferir o parque."
              }
            }
          ]
        },
        {
          "id": "b27c-act4",
          "title": {
            "en": "Dialogue: Meeting a New Person",
            "pt": "Diálogo: Conhecendo uma Pessoa Nova"
          },
          "instruction": {
            "en": "Read the dialogue and then practice with a partner.",
            "pt": "Leia o diálogo e depois pratique com um parceiro."
          },
          "phrases": [
            {
              "en": "A: Good morning! My name is Julia. Nice to meet you.",
              "pt": "A: Bom dia! Meu nome é Julia. Prazer em te conhecer."
            },
            {
              "en": "B: Hi Julia! I'm Mark. Nice to meet you too. Are you enjoying the party?",
              "pt": "B: Oi Julia! Eu sou Mark. Prazer em te conhecer também. Você está gostando da festa?"
            },
            {
              "en": "A: Yes, I am! The food is great, and the people are friendly.",
              "pt": "A: Sim, estou! A comida é ótima e as pessoas são amigáveis."
            }
          ],
          "check": [
            {
              "id": "b27c-d1",
              "prompt": {
                "en": "What is the first thing Julia says?",
                "pt": "Qual é a primeira coisa que Julia diz?"
              },
              "options": [
                "Her name and 'Nice to meet you'.",
                "A question about the party.",
                "An apology.",
                "A compliment."
              ],
              "answer": "Her name and 'Nice to meet you'.",
              "explanation": {
                "en": "Julia starts with 'Good morning! My name is Julia. Nice to meet you.'",
                "pt": "Julia começa com 'Bom dia! Meu nome é Julia. Prazer em te conhecer.'"
              }
            },
            {
              "id": "b27c-d2",
              "prompt": {
                "en": "What does Julia like about the party?",
                "pt": "O que Julia gosta na festa?"
              },
              "options": [
                "The music and the gifts.",
                "The food and the people.",
                "The small talk and the host.",
                "The celebration and the guests."
              ],
              "answer": "The food and the people.",
              "explanation": {
                "en": "Julia says: 'The food is great, and the people are friendly.'",
                "pt": "Julia diz: 'A comida é ótima e as pessoas são amigáveis.'"
              }
            }
          ]
        },
        {
          "id": "b27c-act5",
          "title": {
            "en": "Talk About Yourself: Social Preferences",
            "pt": "Fale Sobre Você: Preferências Sociais"
          },
          "instruction": {
            "en": "Talk about your social preferences using the new vocabulary and conjunctions.",
            "pt": "Fale sobre suas preferências sociais usando o novo vocabulário e conjunções."
          },
          "phrases": [
            {
              "en": "I like to talk to new people, and I enjoy parties.",
              "pt": "Eu gosto de conversar com pessoas novas e eu aproveito festas."
            },
            {
              "en": "I don't like loud music, but I like dancing.",
              "pt": "Eu não gosto de música alta, mas gosto de dançar."
            },
            {
              "en": "I give gifts, because I like to make people happy.",
              "pt": "Eu dou presentes, porque gosto de fazer as pessoas felizes."
            }
          ],
          "check": [
            {
              "id": "b27c-ty1",
              "prompt": {
                "en": "Complete: I like to receive gifts, ____ I also like to give them.",
                "pt": "Complete: Eu gosto de receber presentes, ____ eu também gosto de dá-los."
              },
              "options": [
                "because",
                "but",
                "and",
                "so"
              ],
              "answer": "and",
              "explanation": {
                "en": "'And' connects two similar actions.",
                "pt": "'And' conecta duas ações semelhantes."
              }
            },
            {
              "id": "b27c-ty2",
              "prompt": {
                "en": "Complete: I make an apology ____ I am wrong.",
                "pt": "Complete: Eu peço desculpas ____ eu estou errado."
              },
              "options": [
                "so",
                "or",
                "because",
                "but"
              ],
              "answer": "because",
              "explanation": {
                "en": "'Because' gives the reason for making an apology.",
                "pt": "'Because' dá a razão para pedir desculpas."
              }
            }
          ]
        }
      ],
      "challenge": {
        "id": "b27c-challenge",
        "title": {
          "en": "Host a Small Party",
          "pt": "Organizar uma Pequena Festa"
        },
        "instruction": {
          "en": "Imagine you are hosting a small party. What would you do? Use social interaction vocabulary and conjunctions to describe your plans. (e.g., 'I will invite my friends, and we will play games. We need food, so I will cook, or I will order pizza.').",
          "pt": "Imagine que você está organizando uma pequena festa. O que você faria? Use o vocabulário de interação social e as conjunções para descrever seus planos. (Ex: 'Eu vou convidar meus amigos, e nós vamos jogar. Nós precisamos de comida, então eu vou cozinhar, ou eu vou pedir pizza.')."
        },
        "phrases": [
          {
            "en": "I will invite five guests, and we will have a celebration.",
            "pt": "Eu vou convidar cinco convidados, e nós teremos uma celebração."
          },
          {
            "en": "I will make food, but I need a favor from my friend for drinks.",
            "pt": "Eu vou fazer comida, mas preciso de um favor do meu amigo para as bebidas."
          },
          {
            "en": "We will have a lot of conversation, because I like small talk.",
            "pt": "Nós teremos muita conversa, porque eu gosto de conversa fiada."
          }
        ],
        "check": [
          {
            "id": "b27c-ch1",
            "prompt": {
              "en": "If you invite people, what are they called?",
              "pt": "Se você convida pessoas, como elas são chamadas?"
            },
            "options": [
              "Hosts",
              "Organizers",
              "Guests",
              "Chefs"
            ],
            "answer": "Guests",
            "explanation": {
              "en": "The people you invite are your guests.",
              "pt": "As pessoas que você convida são seus convidados."
            }
          },
          {
            "id": "b27c-ch2",
            "prompt": {
              "en": "You need to show appreciation for a compliment or a gift. What do you say?",
              "pt": "Você precisa mostrar apreço por um elogio ou um presente. O que você diz?"
            },
            "options": [
              "I say 'Sorry'.",
              "I say 'No problem'.",
              "I say 'Thank you'.",
              "I say 'It's nothing'."
            ],
            "answer": "I say 'Thank you'.",
            "explanation": {
              "en": "'Thank you' is the correct expression for appreciation.",
              "pt": "'Thank you' é a expressão correta para agradecimento."
            }
          }
        ]
      },
      "lessonReview": {
        "summary": {
          "en": "In this unit, you learned new vocabulary for social interaction and how to use basic conjunctions (and, but, or, because, so) to connect ideas. You also practiced greetings and had a communication challenge.",
          "pt": "Nesta unidade, você aprendeu novo vocabulário para interação social e como usar conjunções básicas (and, but, or, because, so) para conectar ideias. Você também praticou saudações e teve um desafio de comunicação."
        },
        "canDo": [
          {
            "en": "I can greet people and make small talk.",
            "pt": "Eu consigo cumprimentar pessoas e ter uma conversa fiada."
          },
          {
            "en": "I can use 'and', 'but', 'or', 'because', and 'so' to connect sentences.",
            "pt": "Eu consigo usar 'and', 'but', 'or', 'because' e 'so' para conectar frases."
          },
          {
            "en": "I can talk about party plans and social events.",
            "pt": "Eu consigo falar sobre planos de festa e eventos sociais."
          }
        ],
        "next": {
          "en": "In the next unit, we will continue to explore social situations and learn about asking for and giving directions.",
          "pt": "Na próxima unidade, continuaremos a explorar situações sociais e aprenderemos sobre como pedir e dar direções."
        }
      }
    }
  },
  {
    "code": "BEGINNER-U28",
    "number": 28,
    "title": "Hobbies - Modal verbs review",
    "titlePt": "Hobbies - Revisão de verbos modais",
    "cefr": "A1",
    "objective": {
      "en": "To teach hobbies and review modal verbs – can, should, must – used together in context.",
      "pt": "Ensinar hobbies e revisar os verbos modais – can, should, must – usados juntos em contexto."
    },
    "communicationGoal": {
      "en": "Students will be able to use 'asking info' and hobbies vocabulary to communicate in real situations.",
      "pt": "O aluno será capaz de usar 'pedir informações' e o vocabulário de hobbies para se comunicar em situações reais."
    },
    "prerequisites": {
      "en": "Structure: Basic conjunctions (and, but, or, because, so) to connect ideas. Vocabulary: Social Interaction.",
      "pt": "Estrutura: Conjunções básicas (and, but, or, because, so) para conectar ideias. Vocabulário: Interação Social."
    },
    "newContent": {
      "en": "Grammar: Modal verbs review — can, should, must — used together in context. Vocabulary: Hobbies (10 lexical items). Expressions: Asking Info.",
      "pt": "Gramática: Revisão de verbos modais — can, should, must — usados juntos em contexto. Vocabulário: Hobbies (10 itens lexicais). Expressões: Pedir informações."
    },
    "reviewContent": {
      "en": "Future with will for predictions and spontaneous decisions (Unit 23). Travel vocabulary (Unit 18).",
      "pt": "Futuro com 'will' para previsões e decisões espontâneas (Unidade 23). Vocabulário de viagem (Unidade 18)."
    },
    "discover": {
      "id": "BEGINNER-U28-DISCOVER",
      "warmUp": {
        "prompt": {
          "en": "Look at the pictures. What do you see? What do people like to do in their free time?",
          "pt": "Observe as imagens. O que você vê? O que as pessoas gostam de fazer no tempo livre?"
        },
        "phrases": [
          {
            "en": "I see a person painting.",
            "pt": "Eu vejo uma pessoa pintando."
          },
          {
            "en": "They are hiking in the mountains.",
            "pt": "Eles estão caminhando nas montanhas."
          },
          {
            "en": "This person likes to play games.",
            "pt": "Esta pessoa gosta de jogar jogos."
          }
        ]
      },
      "context": {
        "situation": {
          "en": "Anna and Bruno are talking about their hobbies and free time.",
          "pt": "Anna e Bruno estão conversando sobre seus hobbies e tempo livre."
        },
        "dialogue": [
          {
            "who": "Anna",
            "en": "Hi, Bruno! What do you do in your free time?",
            "pt": "Oi, Bruno! O que você faz no seu tempo livre?"
          },
          {
            "who": "Bruno",
            "en": "Hi, Anna! I like cooking. I can cook many dishes. What's your hobby?",
            "pt": "Oi, Anna! Eu gosto de cozinhar. Eu consigo cozinhar muitos pratos. Qual é o seu hobby?"
          },
          {
            "who": "Anna",
            "en": "I like photography. I should take more photos, but sometimes I must work late.",
            "pt": "Eu gosto de fotografia. Eu deveria tirar mais fotos, mas às vezes preciso trabalhar até tarde."
          },
          {
            "who": "Bruno",
            "en": "Oh, that's interesting! Where are you from? I like to travel.",
            "pt": "Ah, que interessante! De onde você é? Eu gosto de viajar."
          },
          {
            "who": "Anna",
            "en": "I'm from Rio. Traveling is great! Do you like hiking?",
            "pt": "Eu sou do Rio. Viajar é ótimo! Você gosta de fazer trilhas?"
          },
          {
            "who": "Bruno",
            "en": "Yes! I can hike in the mountains every weekend. We should go together sometime!",
            "pt": "Sim! Eu consigo fazer trilhas nas montanhas todo fim de semana. Nós deveríamos ir juntos alguma hora!"
          }
        ]
      },
      "vocabulary": [
        {
          "term": "photography",
          "pt": "fotografia",
          "ipa": "/fəˈtɒɡrəfi/",
          "definition": "The art or process of taking and processing photographs.",
          "example": "My hobby is photography. I love taking pictures.",
          "examplePt": "Meu hobby é fotografia. Eu amo tirar fotos."
        },
        {
          "term": "hiking",
          "pt": "caminhada, trilha",
          "ipa": "/ˈhaɪkɪŋ/",
          "definition": "The activity of walking long distances, especially in the country or mountains.",
          "example": "We go hiking every Sunday in the park.",
          "examplePt": "Nós fazemos trilhas todo domingo no parque."
        },
        {
          "term": "gaming",
          "pt": "jogar videogames",
          "ipa": "/ˈɡeɪmɪŋ/",
          "definition": "The activity of playing video games.",
          "example": "He spends hours gaming with his friends online.",
          "examplePt": "Ele passa horas jogando videogames com seus amigos online."
        },
        {
          "term": "gardening",
          "pt": "jardinagem",
          "ipa": "/ˈɡɑːrdnɪŋ/",
          "definition": "The activity of working in a garden, growing plants.",
          "example": "My grandmother enjoys gardening in her backyard.",
          "examplePt": "Minha avó gosta de jardinagem no quintal dela."
        },
        {
          "term": "cooking",
          "pt": "cozinhar",
          "ipa": "/ˈkʊkɪŋ/",
          "definition": "The activity of preparing and cooking food.",
          "example": "I like cooking Italian food on weekends.",
          "examplePt": "Eu gosto de cozinhar comida italiana nos fins de semana."
        },
        {
          "term": "painting",
          "pt": "pintura",
          "ipa": "/ˈpeɪntɪŋ/",
          "definition": "The activity of using paint to create pictures or art.",
          "example": "She started painting as a hobby last year.",
          "examplePt": "Ela começou a pintar como hobby no ano passado."
        },
        {
          "term": "collecting",
          "pt": "colecionar",
          "ipa": "/kəˈlɛktɪŋ/",
          "definition": "The activity of gathering things of a specific type as a hobby.",
          "example": "My father enjoys collecting old stamps.",
          "examplePt": "Meu pai gosta de colecionar selos antigos."
        },
        {
          "term": "writing",
          "pt": "escrever, escrita",
          "ipa": "/ˈraɪtɪŋ/",
          "definition": "The activity of creating text, stories, or poems.",
          "example": "He likes writing short stories in his free time.",
          "examplePt": "Ele gosta de escrever contos no seu tempo livre."
        },
        {
          "term": "traveling",
          "pt": "viajar",
          "ipa": "/ˈtrævəlɪŋ/",
          "definition": "The activity of going from one place to another, especially over a long distance.",
          "example": "Traveling is my favorite hobby. I visit new countries.",
          "examplePt": "Viajar é meu hobby favorito. Eu visito novos países."
        },
        {
          "term": "volunteering",
          "pt": "voluntariado",
          "ipa": "/ˌvɒlənˈtɪərɪŋ/",
          "definition": "The activity of working for an organization without being paid.",
          "example": "She spends her Saturdays volunteering at an animal shelter.",
          "examplePt": "Ela passa seus sábados fazendo voluntariado em um abrigo de animais."
        }
      ],
      "expressions": [
        {
          "en": "What's your name?",
          "pt": "Qual é o seu nome?"
        },
        {
          "en": "Where are you from?",
          "pt": "De onde você é?"
        },
        {
          "en": "What do you do?",
          "pt": "O que você faz? / Qual é a sua profissão?"
        },
        {
          "en": "What's your hobby?",
          "pt": "Qual é o seu hobby?"
        },
        {
          "en": "What do you do in your free time?",
          "pt": "O que você faz no seu tempo livre?"
        }
      ],
      "grammar": [
        {
          "title": {
            "en": "Modal Verbs: Can, Should, Must",
            "pt": "Verbos Modais: Can, Should, Must"
          },
          "examples": [
            {
              "en": "You must arrive on time, but you can leave early on Fridays.",
              "pt": "Você deve chegar na hora, mas você pode sair cedo às sextas-feiras."
            },
            {
              "en": "I should study more, but I can practice speaking every day.",
              "pt": "Eu deveria estudar mais, mas eu consigo praticar a fala todos os dias."
            },
            {
              "en": "She can speak English, but she must practice to improve. She should read more.",
              "pt": "Ela consegue falar inglês, mas ela deve praticar para melhorar. Ela deveria ler mais."
            }
          ],
          "rule": {
            "en": "We use 'can' for ability or permission. We use 'should' for advice or recommendation. We use 'must' for obligation or strong necessity. After a modal verb, we use the base form of the main verb (no 'to').",
            "pt": "Usamos 'can' para habilidade ou permissão. Usamos 'should' para conselho ou recomendação. Usamos 'must' para obrigação ou forte necessidade. Após um verbo modal, usamos a forma base do verbo principal (sem 'to')."
          },
          "mistakes": [
            {
              "en": "Incorrect: He can to play guitar. Correct: He can play guitar.",
              "pt": "Incorreto: He can to play guitar. Correto: He can play guitar."
            },
            {
              "en": "Incorrect: You must doing your homework. Correct: You must do your homework.",
              "pt": "Incorreto: You must doing your homework. Correto: You must do your homework."
            }
          ]
        }
      ],
      "controlledPractice": [
        {
          "id": "b28d-cp-1",
          "prompt": {
            "en": "Choose the best modal verb: I ____ play the piano very well.",
            "pt": "Escolha o melhor verbo modal: Eu ____ tocar piano muito bem."
          },
          "options": [
            "must",
            "should",
            "can"
          ],
          "answer": "can",
          "explanation": {
            "en": "'Can' indicates ability.",
            "pt": "'Can' indica habilidade."
          }
        },
        {
          "id": "b28d-cp-2",
          "prompt": {
            "en": "Choose the best modal verb: You ____ eat more vegetables for health.",
            "pt": "Escolha o melhor verbo modal: Você ____ comer mais vegetais para a saúde."
          },
          "options": [
            "can",
            "should",
            "must"
          ],
          "answer": "should",
          "explanation": {
            "en": "'Should' gives advice.",
            "pt": "'Should' dá um conselho."
          }
        },
        {
          "id": "b28d-cp-3",
          "prompt": {
            "en": "Choose the best modal verb: Students ____ complete their assignments on time.",
            "pt": "Escolha o melhor verbo modal: Os alunos ____ completar suas tarefas no prazo."
          },
          "options": [
            "can",
            "must",
            "should"
          ],
          "answer": "must",
          "explanation": {
            "en": "'Must' indicates obligation.",
            "pt": "'Must' indica obrigação."
          }
        },
        {
          "id": "b28d-cp-4",
          "prompt": {
            "en": "Combine the sentences: He likes gaming. He is good at it. (Use 'can')",
            "pt": "Combine as frases: Ele gosta de jogar. Ele é bom nisso. (Use 'can')"
          },
          "options": [
            "He should game well.",
            "He must game well.",
            "He can game very well."
          ],
          "answer": "He can game very well.",
          "explanation": {
            "en": "'Can' shows ability.",
            "pt": "'Can' mostra habilidade."
          }
        }
      ],
      "input": {
        "kind": "listening",
        "title": {
          "en": "Listen to the conversation about hobbies.",
          "pt": "Ouça a conversa sobre hobbies."
        },
        "lines": [
          {
            "en": "Hi, Leo! What are you doing this weekend?",
            "pt": "Oi, Leo! O que você vai fazer neste fim de semana?"
          },
          {
            "en": "Hi, Maria! I'm thinking about going hiking. I love being outside.",
            "pt": "Oi, Maria! Estou pensando em fazer uma trilha. Eu amo estar ao ar livre."
          },
          {
            "en": "Oh, that's nice! I should try hiking too. I usually go painting.",
            "pt": "Ah, que legal! Eu deveria tentar trilha também. Eu geralmente vou pintar."
          },
          {
            "en": "Painting is great! Can you show me your art sometime?",
            "pt": "Pintura é ótimo! Você pode me mostrar sua arte alguma hora?"
          },
          {
            "en": "Sure! You must come to my art class next month. It's really fun.",
            "pt": "Claro! Você deve vir à minha aula de arte no próximo mês. É muito divertido."
          },
          {
            "en": "Sounds good! I can probably come on a Saturday. What's your name again?",
            "pt": "Parece bom! Eu provavelmente consigo ir em um sábado. Qual é o seu nome novamente?"
          }
        ],
        "questions": [
          {
            "id": "b28d-in-1",
            "prompt": {
              "en": "What is Leo's hobby?",
              "pt": "Qual é o hobby do Leo?"
            },
            "options": [
              "Painting",
              "Hiking",
              "Gaming"
            ],
            "answer": "Hiking",
            "explanation": {
              "en": "Leo says, 'I'm thinking about going hiking.'",
              "pt": "Leo diz: 'Estou pensando em fazer uma trilha.'"
            }
          },
          {
            "id": "b28d-in-2",
            "prompt": {
              "en": "What does Maria do as a hobby?",
              "pt": "O que Maria faz como hobby?"
            },
            "options": [
              "Cooking",
              "Hiking",
              "Painting"
            ],
            "answer": "Painting",
            "explanation": {
              "en": "Maria says, 'I usually go painting.'",
              "pt": "Maria diz: 'Eu geralmente vou pintar.'"
            }
          },
          {
            "id": "b28d-in-3",
            "prompt": {
              "en": "What does Maria invite Leo to do?",
              "pt": "O que Maria convida Leo para fazer?"
            },
            "options": [
              "Go hiking with her",
              "Come to her art class",
              "Show her his art"
            ],
            "answer": "Come to her art class",
            "explanation": {
              "en": "Maria says, 'You must come to my art class next month.'",
              "pt": "Maria diz: 'Você deve vir à minha aula de arte no próximo mês.'"
            }
          }
        ]
      },
      "quickCheck": [
        {
          "id": "b28d-qc-1",
          "prompt": {
            "en": "Which word means 'the activity of taking pictures'?",
            "pt": "Qual palavra significa 'a atividade de tirar fotos'?"
          },
          "options": [
            "Gardening",
            "Photography",
            "Cooking"
          ],
          "answer": "Photography",
          "explanation": {
            "en": "Photography is the art of taking pictures.",
            "pt": "Fotografia é a arte de tirar fotos."
          }
        },
        {
          "id": "b28d-qc-2",
          "prompt": {
            "en": "Fill in the blank: You ____ study hard for the test. (It's very important!)",
            "pt": "Preencha a lacuna: Você ____ estudar muito para a prova. (É muito importante!)"
          },
          "options": [
            "can",
            "should",
            "must"
          ],
          "answer": "must",
          "explanation": {
            "en": "'Must' expresses strong obligation.",
            "pt": "'Must' expressa forte obrigação."
          }
        },
        {
          "id": "b28d-qc-3",
          "prompt": {
            "en": "Which question asks about a person's name?",
            "pt": "Qual pergunta pede o nome de uma pessoa?"
          },
          "options": [
            "Where are you from?",
            "What's your hobby?",
            "What's your name?"
          ],
          "answer": "What's your name?",
          "explanation": {
            "en": "'What's your name?' is used to ask for a name.",
            "pt": "'What's your name?' é usada para perguntar o nome."
          }
        },
        {
          "id": "b28d-qc-4",
          "prompt": {
            "en": "Correct the sentence: She should to relax more.",
            "pt": "Corrija a frase: She should to relax more."
          },
          "options": [
            "She should relax more.",
            "She can relax more.",
            "She must relaxing more."
          ],
          "answer": "She should relax more.",
          "explanation": {
            "en": "Modal verbs are followed by the base form of the verb, without 'to'.",
            "pt": "Verbos modais são seguidos pela forma base do verbo, sem 'to'."
          }
        }
      ]
    },
    "communicate": {
      "id": "BEGINNER-U28-COMMUNICATE",
      "review": [
        {
          "en": "Today we talked about hobbies like photography, hiking, and cooking.",
          "pt": "Hoje falamos sobre hobbies como fotografia, trilha e culinária."
        },
        {
          "en": "We also reviewed modal verbs: 'can' for ability, 'should' for advice, and 'must' for obligation.",
          "pt": "Também revisamos os verbos modais: 'can' para habilidade, 'should' para conselho e 'must' para obrigação."
        },
        {
          "en": "And we practiced asking information: 'What's your name?', 'Where are you from?', 'What do you do?'",
          "pt": "E praticamos pedir informações: 'What's your name?', 'Where are you from?', 'What do you do?'"
        }
      ],
      "activities": [
        {
          "id": "b28c-act-1",
          "title": {
            "en": "Make Questions",
            "pt": "Formule Perguntas"
          },
          "instruction": {
            "en": "Turn these statements into questions, using the expressions learned.",
            "pt": "Transforme estas afirmações em perguntas, usando as expressões aprendidas."
          },
          "phrases": [
            {
              "en": "My name is Paula.",
              "pt": "Meu nome é Paula."
            },
            {
              "en": "I am from Brazil.",
              "pt": "Eu sou do Brasil."
            },
            {
              "en": "My hobby is gardening.",
              "pt": "Meu hobby é jardinagem."
            }
          ],
          "check": [
            {
              "id": "b28c-act1-1",
              "prompt": {
                "en": "What is the question for 'My name is Paula.'?",
                "pt": "Qual é a pergunta para 'Meu nome é Paula.'?"
              },
              "options": [
                "What's your name?",
                "Where are you from?",
                "What do you do?"
              ],
              "answer": "What's your name?",
              "explanation": {
                "en": "This expression asks for someone's name.",
                "pt": "Esta expressão pergunta o nome de alguém."
              }
            },
            {
              "id": "b28c-act1-2",
              "prompt": {
                "en": "What is the question for 'My hobby is gardening.'?",
                "pt": "Qual é a pergunta para 'My hobby is gardening.'?"
              },
              "options": [
                "What's your name?",
                "What's your hobby?",
                "What do you do?"
              ],
              "answer": "What's your hobby?",
              "explanation": {
                "en": "This expression asks about someone's hobby.",
                "pt": "Esta expressão pergunta sobre o hobby de alguém."
              }
            }
          ]
        },
        {
          "id": "b28c-act-2",
          "title": {
            "en": "Build Sentences",
            "pt": "Construa Frases"
          },
          "instruction": {
            "en": "Use the words to build a complete sentence with a modal verb and a hobby.",
            "pt": "Use as palavras para construir uma frase completa com um verbo modal e um hobby."
          },
          "phrases": [
            {
              "en": "I / can / cook / well.",
              "pt": "Eu / consigo / cozinhar / bem."
            },
            {
              "en": "You / should / try / painting.",
              "pt": "Você / deveria / tentar / pintura."
            },
            {
              "en": "He / must / work / now.",
              "pt": "Ele / precisa / trabalhar / agora."
            }
          ],
          "check": [
            {
              "id": "b28c-act2-1",
              "prompt": {
                "en": "Build a sentence: I / can / cook / well.",
                "pt": "Construa uma frase: Eu / consigo / cozinhar / bem."
              },
              "options": [
                "I can to cook well.",
                "I can cook well.",
                "I cooking can well."
              ],
              "answer": "I can cook well.",
              "explanation": {
                "en": "The correct structure is Subject + modal + base verb + rest of sentence.",
                "pt": "A estrutura correta é Sujeito + modal + verbo base + restante da frase."
              }
            },
            {
              "id": "b28c-act2-2",
              "prompt": {
                "en": "Build a sentence: You / should / try / painting.",
                "pt": "Construa uma frase: Você / deveria / tentar / pintura."
              },
              "options": [
                "You should try painting.",
                "You should trying painting.",
                "You trying should painting."
              ],
              "answer": "You should try painting.",
              "explanation": {
                "en": "Modal verbs are followed by the base form of the verb.",
                "pt": "Verbos modais são seguidos pela forma base do verbo."
              }
            }
          ]
        },
        {
          "id": "b28c-act-3",
          "title": {
            "en": "Role-play",
            "pt": "Simulação de Papéis"
          },
          "instruction": {
            "en": "Imagine you meet a new person. Ask them about their name, origin, job, and hobbies. Respond as if you are that person.",
            "pt": "Imagine que você encontra uma nova pessoa. Pergunte sobre o nome, origem, profissão e hobbies dela. Responda como se você fosse essa pessoa."
          },
          "phrases": [
            {
              "en": "What's your name?",
              "pt": "Qual é o seu nome?"
            },
            {
              "en": "Where are you from?",
              "pt": "De onde você é?"
            },
            {
              "en": "What's your hobby?",
              "pt": "Qual é o seu hobby?"
            }
          ],
          "check": [
            {
              "id": "b28c-act3-1",
              "prompt": {
                "en": "If someone asks 'What's your name?', what is a good reply?",
                "pt": "Se alguém pergunta 'What's your name?', qual é uma boa resposta?"
              },
              "options": [
                "I am from Brazil.",
                "My name is Alex.",
                "I like hiking."
              ],
              "answer": "My name is Alex.",
              "explanation": {
                "en": "This directly answers the question about your name.",
                "pt": "Isso responde diretamente à pergunta sobre seu nome."
              }
            },
            {
              "id": "b28c-act3-2",
              "prompt": {
                "en": "If someone asks 'What do you do in your free time?', what is a good reply?",
                "pt": "Se alguém pergunta 'What do you do in your free time?', qual é uma boa resposta?"
              },
              "options": [
                "I must work.",
                "I like volunteering.",
                "I should go home."
              ],
              "answer": "I like volunteering.",
              "explanation": {
                "en": "This answers about an activity in free time, which is a hobby.",
                "pt": "Isso responde sobre uma atividade no tempo livre, que é um hobby."
              }
            }
          ]
        },
        {
          "id": "b28c-act-4",
          "title": {
            "en": "Talk to Your Partner",
            "pt": "Converse com seu Parceiro"
          },
          "instruction": {
            "en": "Discuss your hobbies with a partner. Use 'can', 'should', and 'must' to describe your abilities, give advice, or talk about obligations related to your hobbies.",
            "pt": "Converse sobre seus hobbies com um parceiro. Use 'can', 'should' e 'must' para descrever suas habilidades, dar conselhos ou falar sobre obrigações relacionadas aos seus hobbies."
          },
          "phrases": [
            {
              "en": "I can paint beautiful pictures.",
              "pt": "Eu consigo pintar quadros bonitos."
            },
            {
              "en": "You should try gardening, it's relaxing.",
              "pt": "Você deveria tentar jardinagem, é relaxante."
            },
            {
              "en": "I must finish my writing project this week.",
              "pt": "Eu preciso terminar meu projeto de escrita esta semana."
            }
          ],
          "check": [
            {
              "id": "b28c-act4-1",
              "prompt": {
                "en": "Which sentence uses 'can' correctly to describe an ability?",
                "pt": "Qual frase usa 'can' corretamente para descrever uma habilidade?"
              },
              "options": [
                "I can to swim.",
                "I can swim.",
                "I can swimming."
              ],
              "answer": "I can swim.",
              "explanation": {
                "en": "'Can' is followed by the base form of the verb.",
                "pt": "'Can' é seguido pela forma base do verbo."
              }
            },
            {
              "id": "b28c-act4-2",
              "prompt": {
                "en": "Which sentence gives advice about a hobby?",
                "pt": "Qual frase dá um conselho sobre um hobby?"
              },
              "options": [
                "I must go hiking.",
                "You should read more books.",
                "She can play guitar."
              ],
              "answer": "You should read more books.",
              "explanation": {
                "en": "'Should' is used to give advice.",
                "pt": "'Should' é usado para dar conselho."
              }
            }
          ]
        },
        {
          "id": "b28c-act-5",
          "title": {
            "en": "Ask and Answer",
            "pt": "Pergunte e Responda"
          },
          "instruction": {
            "en": "In pairs, take turns asking and answering questions about hobbies and free time activities.",
            "pt": "Em duplas, revezem-se perguntando e respondendo sobre hobbies e atividades de tempo livre."
          },
          "phrases": [
            {
              "en": "Do you like gaming?",
              "pt": "Você gosta de jogar videogames?"
            },
            {
              "en": "What do you do on weekends?",
              "pt": "O que você faz nos fins de semana?"
            },
            {
              "en": "Can you speak another language?",
              "pt": "Você consegue falar outro idioma?"
            }
          ],
          "check": [
            {
              "id": "b28c-act5-1",
              "prompt": {
                "en": "If someone asks 'Do you like gaming?', how can you respond positively?",
                "pt": "Se alguém pergunta 'Do you like gaming?', como você pode responder positivamente?"
              },
              "options": [
                "No, I must work.",
                "Yes, I love gaming!",
                "I should go home."
              ],
              "answer": "Yes, I love gaming!",
              "explanation": {
                "en": "This is a direct positive answer.",
                "pt": "Esta é uma resposta positiva direta."
              }
            },
            {
              "id": "b28c-act5-2",
              "prompt": {
                "en": "If someone asks 'Can you speak another language?', how can you respond negatively?",
                "pt": "Se alguém pergunta 'Can you speak another language?', como você pode responder negativamente?"
              },
              "options": [
                "Yes, I can.",
                "No, I can't.",
                "I must study."
              ],
              "answer": "No, I can't.",
              "explanation": {
                "en": "'No, I can't' is the negative short answer for 'can'.",
                "pt": "'No, I can't' é a resposta curta negativa para 'can'."
              }
            }
          ]
        }
      ],
      "challenge": {
        "id": "b28c-challenge",
        "title": {
          "en": "Plan a Hobby Exchange",
          "pt": "Planeje uma Troca de Hobbies"
        },
        "instruction": {
          "en": "Work with a partner. Imagine you want to teach each other one of your hobbies. Discuss: What's your hobby? What can you do? What should the other person do to start? What must they bring? Use the new vocabulary and modal verbs.",
          "pt": "Trabalhe com um parceiro. Imagine que vocês querem ensinar um ao outro um de seus hobbies. Discutam: Qual é o seu hobby? O que você consegue fazer? O que a outra pessoa deveria fazer para começar? O que ela precisa trazer? Use o novo vocabulário e os verbos modais."
        },
        "phrases": [
          {
            "en": "My hobby is cooking. I can teach you how to make Brazilian food.",
            "pt": "Meu hobby é cozinhar. Eu consigo te ensinar a fazer comida brasileira."
          },
          {
            "en": "You should buy some fresh ingredients for the class.",
            "pt": "Você deveria comprar alguns ingredientes frescos para a aula."
          },
          {
            "en": "I must bring my camera for photography.",
            "pt": "Eu preciso trazer minha câmera para fotografia."
          }
        ],
        "check": [
          {
            "id": "b28c-chal-1",
            "prompt": {
              "en": "Which question asks about an ability related to a hobby?",
              "pt": "Qual pergunta pede uma habilidade relacionada a um hobby?"
            },
            "options": [
              "What's your hobby?",
              "What can you do?",
              "What must you do?"
            ],
            "answer": "What can you do?",
            "explanation": {
              "en": "'Can' is used for ability.",
              "pt": "'Can' é usado para habilidade."
            }
          },
          {
            "id": "b28c-chal-2",
            "prompt": {
              "en": "Which modal verb should you use to tell someone what they need to bring for a hobby?",
              "pt": "Qual verbo modal você deve usar para dizer a alguém o que eles precisam trazer para um hobby?"
            },
            "options": [
              "can",
              "should",
              "must"
            ],
            "answer": "must",
            "explanation": {
              "en": "'Must' indicates a strong necessity or obligation.",
              "pt": "'Must' indica uma forte necessidade ou obrigação."
            }
          }
        ]
      },
      "lessonReview": {
        "summary": {
          "en": "In this unit, you learned new hobbies vocabulary and practiced using the modal verbs 'can', 'should', and 'must' together in context. You also reviewed 'asking info' expressions.",
          "pt": "Nesta unidade, você aprendeu um novo vocabulário de hobbies e praticou o uso dos verbos modais 'can', 'should' e 'must' juntos em contexto. Você também revisou as expressões de 'pedir informações'."
        },
        "canDo": [
          {
            "en": "I can talk about my hobbies and ask others about theirs.",
            "pt": "Consigo falar sobre meus hobbies e perguntar aos outros sobre os deles."
          },
          {
            "en": "I can use 'can' for ability, 'should' for advice, and 'must' for obligation when discussing activities.",
            "pt": "Consigo usar 'can' para habilidade, 'should' para conselho e 'must' para obrigação ao discutir atividades."
          },
          {
            "en": "I can ask basic personal information like name and origin.",
            "pt": "Consigo perguntar informações pessoais básicas como nome e origem."
          }
        ],
        "next": {
          "en": "In the next unit, we will learn about daily routines and time expressions.",
          "pt": "Na próxima unidade, aprenderemos sobre rotinas diárias e expressões de tempo."
        }
      }
    }
  },
  {
    "code": "BEGINNER-U29",
    "number": 29,
    "title": "Hobbies",
    "titlePt": "Hobbies",
    "cefr": "A1",
    "objective": {
      "en": "To teach hobbies and basic infinitive and gerund usage (want to / like + -ing) in context.",
      "pt": "Ensinar hobbies e o uso básico de infinitivo e gerúndio (want to / like + -ing) de forma contextualizada."
    },
    "communicationGoal": {
      "en": "Students will be able to use 'clarification' and hobby vocabulary to communicate in real situations.",
      "pt": "O aluno será capaz de usar 'clarification' e o vocabulário de hobbies para se comunicar em situações reais."
    },
    "prerequisites": {
      "en": "Structure: Modal verbs review — can, should, must — used together in context. Vocabulary: Hobbies.",
      "pt": "Estrutura: Revisão de verbos modais — can, should, must — usados juntos em contexto. Vocabulário: Hobbies."
    },
    "newContent": {
      "en": "Grammar: Basic infinitive and gerund usage (want to / like + -ing). Vocabulary: Hobbies (10 lexical items). Expressions: Clarification.",
      "pt": "Gramática: Uso básico de infinitivo e gerúndio (want to / like + -ing). Vocabulário: Hobbies (10 itens lexicais). Expressões: Clarification."
    },
    "reviewContent": {
      "en": "Spiral review: Imperatives for instructions and directions (Unit 24). Vocabulary review: Life Events (Unit 19).",
      "pt": "Revisão em espiral: Imperativos para instruções e direções (Unidade 24). Revisão de vocabulário: Eventos da Vida (Unidade 19)."
    },
    "discover": {
      "id": "BEGINNER-U29-DISCOVER",
      "warmUp": {
        "prompt": {
          "en": "Look at the pictures. What are these people doing? Do you like these activities?",
          "pt": "Observe as imagens. O que essas pessoas estão fazendo? Você gosta dessas atividades?"
        },
        "phrases": [
          {
            "en": "This is a fun activity.",
            "pt": "Esta é uma atividade divertida."
          },
          {
            "en": "I like this hobby.",
            "pt": "Eu gosto deste hobby."
          },
          {
            "en": "What do you do in your free time?",
            "pt": "O que você faz no seu tempo livre?"
          }
        ]
      },
      "context": {
        "situation": {
          "en": "Leo is talking to his new friend, Sofia, about their free time activities.",
          "pt": "Leo está conversando com sua nova amiga, Sofia, sobre as atividades de tempo livre deles."
        },
        "dialogue": [
          {
            "who": "Leo",
            "en": "Hi Sofia! What do you like to do on weekends?",
            "pt": "Oi Sofia! O que você gosta de fazer nos fins de semana?"
          },
          {
            "who": "Sofia",
            "en": "Hi Leo! I like painting and cooking. And you?",
            "pt": "Oi Leo! Eu gosto de pintar e cozinhar. E você?"
          },
          {
            "who": "Leo",
            "en": "I like gaming. I also want to learn photography.",
            "pt": "Eu gosto de jogar (jogos). Eu também quero aprender fotografia."
          },
          {
            "who": "Sofia",
            "en": "Photography? Sorry, can you repeat that?",
            "pt": "Fotografia? Desculpe, você pode repetir?"
          },
          {
            "who": "Leo",
            "en": "Photography. Taking pictures with a camera.",
            "pt": "Fotografia. Tirar fotos com uma câmera."
          },
          {
            "who": "Sofia",
            "en": "Oh, I see! My friend likes hiking. What does that mean?",
            "pt": "Ah, entendi! Minha amiga gosta de fazer trilhas. O que isso significa?"
          },
          {
            "who": "Leo",
            "en": "Hiking is walking in nature, like in mountains or forests.",
            "pt": "Fazer trilhas é caminhar na natureza, como em montanhas ou florestas."
          },
          {
            "who": "Sofia",
            "en": "Sounds fun! Can you speak more slowly, please? My English is still new.",
            "pt": "Parece divertido! Você pode falar mais devagar, por favor? Meu inglês ainda é novo."
          },
          {
            "who": "Leo",
            "en": "Of course! I want to try hiking too, it looks interesting.",
            "pt": "Claro! Eu quero tentar fazer trilhas também, parece interessante."
          }
        ]
      },
      "vocabulary": [
        {
          "term": "photography",
          "pt": "fotografia",
          "ipa": "/fəˈtɒɡrəfi/",
          "definition": "The art or process of taking and processing photographs.",
          "example": "I want to learn photography.",
          "examplePt": "Eu quero aprender fotografia."
        },
        {
          "term": "hiking",
          "pt": "fazer trilhas",
          "ipa": "/ˈhaɪkɪŋ/",
          "definition": "The activity of walking long distances, especially in the country or mountains.",
          "example": "My friend likes hiking on weekends.",
          "examplePt": "Minha amiga gosta de fazer trilhas nos fins de semana."
        },
        {
          "term": "gaming",
          "pt": "jogar (jogos)",
          "ipa": "/ˈɡeɪmɪŋ/",
          "definition": "The activity of playing computer games.",
          "example": "Leo likes gaming with his friends.",
          "examplePt": "Leo gosta de jogar com seus amigos."
        },
        {
          "term": "gardening",
          "pt": "jardinagem",
          "ipa": "/ˈɡɑːrdnɪŋ/",
          "definition": "The activity of working in a garden, growing plants, etc.",
          "example": "My grandmother loves gardening.",
          "examplePt": "Minha avó adora jardinagem."
        },
        {
          "term": "cooking",
          "pt": "cozinhar",
          "ipa": "/ˈkʊkɪŋ/",
          "definition": "The activity of preparing food for eating, usually by heating it.",
          "example": "Sofia likes cooking Italian food.",
          "examplePt": "Sofia gosta de cozinhar comida italiana."
        },
        {
          "term": "painting",
          "pt": "pintar",
          "ipa": "/ˈpeɪntɪŋ/",
          "definition": "The activity of making pictures using paint.",
          "example": "My hobby is painting landscapes.",
          "examplePt": "Meu hobby é pintar paisagens."
        },
        {
          "term": "collecting",
          "pt": "colecionar",
          "ipa": "/kəˈlɛktɪŋ/",
          "definition": "The hobby of collecting specific items, such as stamps, coins, or art.",
          "example": "He enjoys collecting old books.",
          "examplePt": "Ele gosta de colecionar livros antigos."
        },
        {
          "term": "writing",
          "pt": "escrever",
          "ipa": "/ˈraɪtɪŋ/",
          "definition": "The activity or skill of writing books, stories, articles, etc.",
          "example": "She likes writing short stories.",
          "examplePt": "Ela gosta de escrever contos."
        },
        {
          "term": "traveling",
          "pt": "viajar",
          "ipa": "/ˈtrævəlɪŋ/",
          "definition": "The activity of going from one place to another, especially over a long distance.",
          "example": "We like traveling to new cities.",
          "examplePt": "Nós gostamos de viajar para novas cidades."
        },
        {
          "term": "volunteering",
          "pt": "voluntariado",
          "ipa": "/ˌvɒlənˈtɪərɪŋ/",
          "definition": "The act of working for an organization without being paid.",
          "example": "Volunteering is a great way to help people.",
          "examplePt": "Fazer voluntariado é uma ótima maneira de ajudar as pessoas."
        }
      ],
      "expressions": [
        {
          "en": "Sorry, can you repeat that?",
          "pt": "Desculpe, você pode repetir?"
        },
        {
          "en": "What does that mean?",
          "pt": "O que isso significa?"
        },
        {
          "en": "Can you speak more slowly, please?",
          "pt": "Você pode falar mais devagar, por favor?"
        }
      ],
      "grammar": [
        {
          "title": {
            "en": "Basic Infinitive and Gerund Usage: Want to / Like + -ing",
            "pt": "Uso Básico de Infinitivo e Gerúndio: Want to / Like + -ing"
          },
          "examples": [
            {
              "en": "I want to travel next year.",
              "pt": "Eu quero viajar no próximo ano."
            },
            {
              "en": "She likes reading before bed.",
              "pt": "Ela gosta de ler antes de dormir."
            },
            {
              "en": "Do you want to play a game?",
              "pt": "Você quer jogar um jogo?"
            }
          ],
          "rule": {
            "en": "We use 'want to' + the base form of the verb (infinitive) to express a desire. We use 'like' + verb-ing (gerund) to talk about activities we enjoy.",
            "pt": "Usamos 'want to' + a forma base do verbo (infinitivo) para expressar um desejo. Usamos 'like' + verbo-ing (gerúndio) para falar sobre atividades que gostamos."
          },
          "mistakes": [
            {
              "en": "Incorrect: I want traveling. Correct: I want to travel.",
              "pt": "Incorreto: I want traveling. Correto: I want to travel."
            },
            {
              "en": "Incorrect: He likes to cook. (Commonly used, but 'like cooking' is more natural for general enjoyment). Correct: He likes cooking.",
              "pt": "Incorreto: He likes to cook. (Comumente usado, mas 'like cooking' é mais natural para prazer geral). Correto: He likes cooking."
            }
          ]
        }
      ],
      "controlledPractice": [
        {
          "id": "b29d-cp-1",
          "prompt": {
            "en": "Choose the correct option: I like _______ (paint / painting) in my free time.",
            "pt": "Escolha a opção correta: Eu gosto de _______ (paint / painting) no meu tempo livre."
          },
          "options": [
            "paint",
            "painting"
          ],
          "answer": "painting",
          "explanation": {
            "en": "After 'like', we use the gerund form (-ing).",
            "pt": "Depois de 'like', usamos a forma de gerúndio (-ing)."
          }
        },
        {
          "id": "b29d-cp-2",
          "prompt": {
            "en": "Choose the correct option: They want _______ (to hike / hiking) this weekend.",
            "pt": "Escolha a opção correta: Eles querem _______ (to hike / hiking) neste fim de semana."
          },
          "options": [
            "to hike",
            "hiking"
          ],
          "answer": "to hike",
          "explanation": {
            "en": "After 'want', we use 'to' + infinitive.",
            "pt": "Depois de 'want', usamos 'to' + infinitivo."
          }
        },
        {
          "id": "b29d-cp-3",
          "prompt": {
            "en": "Complete the sentence: My brother likes _______ (game) video games.",
            "pt": "Complete a frase: Meu irmão gosta de _______ (game) videogames."
          },
          "options": [
            "gaming",
            "to game"
          ],
          "answer": "gaming",
          "explanation": {
            "en": "The verb 'like' is followed by the gerund (-ing form).",
            "pt": "O verbo 'like' é seguido pela forma de gerúndio (-ing)."
          }
        },
        {
          "id": "b29d-cp-4",
          "prompt": {
            "en": "Complete the sentence: I want _______ (collect) stamps.",
            "pt": "Complete a frase: Eu quero _______ (collect) selos."
          },
          "options": [
            "collecting",
            "to collect"
          ],
          "answer": "to collect",
          "explanation": {
            "en": "The verb 'want' is followed by 'to' + infinitive.",
            "pt": "O verbo 'want' é seguido por 'to' + infinitivo."
          }
        }
      ],
      "input": {
        "kind": "reading",
        "title": {
          "en": "My Hobbies",
          "pt": "Meus Hobbies"
        },
        "lines": [
          {
            "en": "Hello! My name is Ana. I am 25 years old. I like many things.",
            "pt": "Olá! Meu nome é Ana. Eu tenho 25 anos. Eu gosto de muitas coisas."
          },
          {
            "en": "On weekdays, after work, I like cooking. I try new recipes. My family likes my food.",
            "pt": "Nos dias de semana, depois do trabalho, eu gosto de cozinhar. Eu experimento novas receitas. Minha família gosta da minha comida."
          },
          {
            "en": "On weekends, I want to go hiking with my friends. We go to beautiful places.",
            "pt": "Nos fins de semana, eu quero fazer trilhas com meus amigos. Nós vamos para lugares bonitos."
          },
          {
            "en": "Sometimes, I also like writing short stories. It is a relaxing hobby.",
            "pt": "Às vezes, eu também gosto de escrever contos. É um hobby relaxante."
          },
          {
            "en": "Next year, I want to start photography. I think it is interesting to take pictures of nature.",
            "pt": "No próximo ano, eu quero começar fotografia. Eu acho interessante tirar fotos da natureza."
          }
        ],
        "questions": [
          {
            "id": "b29d-r-1",
            "prompt": {
              "en": "What does Ana like to do on weekdays?",
              "pt": "O que Ana gosta de fazer nos dias de semana?"
            },
            "options": [
              "Hiking",
              "Writing",
              "Cooking"
            ],
            "answer": "Cooking",
            "explanation": {
              "en": "The text says 'On weekdays, after work, I like cooking.'",
              "pt": "O texto diz 'Nos dias de semana, depois do trabalho, eu gosto de cozinhar.'"
            }
          },
          {
            "id": "b29d-r-2",
            "prompt": {
              "en": "What does Ana want to start next year?",
              "pt": "O que Ana quer começar no próximo ano?"
            },
            "options": [
              "Painting",
              "Photography",
              "Gaming"
            ],
            "answer": "Photography",
            "explanation": {
              "en": "The text says 'Next year, I want to start photography.'",
              "pt": "O texto diz 'No próximo ano, eu quero começar fotografia.'"
            }
          },
          {
            "id": "b29d-r-3",
            "prompt": {
              "en": "What does Ana do with her friends on weekends?",
              "pt": "O que Ana faz com seus amigos nos fins de semana?"
            },
            "options": [
              "Go hiking",
              "Write stories",
              "Cook dinner"
            ],
            "answer": "Go hiking",
            "explanation": {
              "en": "The text says 'On weekends, I want to go hiking with my friends.'",
              "pt": "O texto diz 'Nos fins de semana, eu quero fazer trilhas com meus amigos.'"
            }
          }
        ]
      },
      "quickCheck": [
        {
          "id": "b29d-qc-1",
          "prompt": {
            "en": "Choose the correct phrase: I like _______ (travel / traveling).",
            "pt": "Escolha a frase correta: Eu gosto de _______ (travel / traveling)."
          },
          "options": [
            "travel",
            "traveling"
          ],
          "answer": "traveling",
          "explanation": {
            "en": "Use '-ing' after 'like'.",
            "pt": "Use '-ing' depois de 'like'."
          }
        },
        {
          "id": "b29d-qc-2",
          "prompt": {
            "en": "Choose the correct phrase: She wants _______ (to volunteer / volunteering).",
            "pt": "Escolha a frase correta: Ela quer _______ (to volunteer / volunteering)."
          },
          "options": [
            "to volunteer",
            "volunteering"
          ],
          "answer": "to volunteer",
          "explanation": {
            "en": "Use 'to' + infinitive after 'want'.",
            "pt": "Use 'to' + infinitivo depois de 'want'."
          }
        },
        {
          "id": "b29d-qc-3",
          "prompt": {
            "en": "What do you say if you don't understand a word?",
            "pt": "O que você diz se não entende uma palavra?"
          },
          "options": [
            "I like it!",
            "What does that mean?",
            "Can you repeat it?"
          ],
          "answer": "What does that mean?",
          "explanation": {
            "en": "'What does that mean?' is used to ask for the meaning of a word.",
            "pt": "'What does that mean?' é usado para perguntar o significado de uma palavra."
          }
        },
        {
          "id": "b29d-qc-4",
          "prompt": {
            "en": "Is 'gardening' a hobby?",
            "pt": "Jardinagem é um hobby?"
          },
          "options": [
            "Yes, it is.",
            "No, it isn't."
          ],
          "answer": "Yes, it is.",
          "explanation": {
            "en": "Gardening is a common hobby.",
            "pt": "Jardinagem é um hobby comum."
          }
        }
      ]
    },
    "communicate": {
      "id": "BEGINNER-U29-COMMUNICATE",
      "review": [
        {
          "en": "We learned about hobbies like photography, hiking, and cooking.",
          "pt": "Aprendemos sobre hobbies como fotografia, fazer trilhas e cozinhar."
        },
        {
          "en": "We practiced saying what we 'want to' do and what we 'like' doing.",
          "pt": "Praticamos dizer o que 'queremos fazer' e o que 'gostamos de fazer'."
        },
        {
          "en": "We also learned expressions for clarification: 'Sorry, can you repeat that?', 'What does that mean?', 'Can you speak more slowly, please?'.",
          "pt": "Também aprendemos expressões para esclarecimento: 'Sorry, can you repeat that?', 'What does that mean?', 'Can you speak more slowly, please?'."
        }
      ],
      "activities": [
        {
          "id": "b29c-act-1-dialogue",
          "title": {
            "en": "Dialogue: Weekend Plans",
            "pt": "Diálogo: Planos para o Fim de Semana"
          },
          "instruction": {
            "en": "Work with a partner. Ask and answer about hobbies for the weekend. Use 'want to' and 'like + -ing'. Practice clarification expressions.",
            "pt": "Trabalhe com um parceiro. Pergunte e responda sobre hobbies para o fim de semana. Use 'want to' e 'like + -ing'. Pratique as expressões de esclarecimento."
          },
          "phrases": [
            {
              "en": "What do you like doing on Saturdays?",
              "pt": "O que você gosta de fazer aos sábados?"
            },
            {
              "en": "I want to try gardening this weekend.",
              "pt": "Eu quero experimentar jardinagem neste fim de semana."
            },
            {
              "en": "Sorry, can you speak more slowly, please?",
              "pt": "Desculpe, você pode falar mais devagar, por favor?"
            }
          ],
          "check": [
            {
              "id": "b29c-d-1",
              "prompt": {
                "en": "Your partner said 'I like gaming.' How do you ask for clarification if you didn't hear clearly?",
                "pt": "Seu parceiro disse 'I like gaming.' Como você pede um esclarecimento se não ouviu claramente?"
              },
              "options": [
                "What does that mean?",
                "Sorry, can you repeat that?",
                "I like gaming too."
              ],
              "answer": "Sorry, can you repeat that?",
              "explanation": {
                "en": "To ask someone to say something again, use 'Sorry, can you repeat that?'.",
                "pt": "Para pedir que alguém diga algo novamente, use 'Sorry, can you repeat that?'."
              }
            },
            {
              "id": "b29c-d-2",
              "prompt": {
                "en": "Your partner wants to start 'volunteering'. How do you ask what that word means?",
                "pt": "Seu parceiro quer começar 'volunteering'. Como você pergunta o que essa palavra significa?"
              },
              "options": [
                "Can you speak more slowly, please?",
                "What does that mean?",
                "I like volunteering."
              ],
              "answer": "What does that mean?",
              "explanation": {
                "en": "'What does that mean?' is used to ask for a definition.",
                "pt": "'What does that mean?' é usado para pedir uma definição."
              }
            }
          ]
        },
        {
          "id": "b29c-act-2-talk-about-yourself",
          "title": {
            "en": "Talk About Yourself: My Favorite Hobbies",
            "pt": "Fale Sobre Você: Meus Hobbies Favoritos"
          },
          "instruction": {
            "en": "Tell your partner about your favorite hobbies. What do you like doing? What new hobby do you want to try? Explain why.",
            "pt": "Fale para seu parceiro sobre seus hobbies favoritos. O que você gosta de fazer? Que novo hobby você quer experimentar? Explique o porquê."
          },
          "phrases": [
            {
              "en": "I like traveling to new places.",
              "pt": "Eu gosto de viajar para novos lugares."
            },
            {
              "en": "I want to try photography because it is creative.",
              "pt": "Eu quero experimentar fotografia porque é criativo."
            },
            {
              "en": "My favorite hobby is collecting old coins.",
              "pt": "Meu hobby favorito é colecionar moedas antigas."
            }
          ],
          "check": [
            {
              "id": "b29c-tay-1",
              "prompt": {
                "en": "Which sentence correctly describes a hobby?",
                "pt": "Qual frase descreve um hobby corretamente?"
              },
              "options": [
                "I like to cooking.",
                "I like cooking.",
                "I cooking."
              ],
              "answer": "I like cooking.",
              "explanation": {
                "en": "After 'like', use the -ing form (gerund).",
                "pt": "Depois de 'like', use a forma -ing (gerúndio)."
              }
            },
            {
              "id": "b29c-tay-2",
              "prompt": {
                "en": "Which sentence correctly expresses a desire for a new hobby?",
                "pt": "Qual frase expressa corretamente um desejo por um novo hobby?"
              },
              "options": [
                "I want learning painting.",
                "I want to learn painting.",
                "I want to learning painting."
              ],
              "answer": "I want to learn painting.",
              "explanation": {
                "en": "After 'want', use 'to' + the base form of the verb (infinitive).",
                "pt": "Depois de 'want', use 'to' + a forma base do verbo (infinitivo)."
              }
            }
          ]
        },
        {
          "id": "b29c-act-3-describe",
          "title": {
            "en": "Describe: A Friend's Hobby",
            "pt": "Descreva: O Hobby de um Amigo"
          },
          "instruction": {
            "en": "Describe a friend's or family member's hobby. What do they like to do? Do they want to try something new? Use descriptive words.",
            "pt": "Descreva o hobby de um amigo ou membro da família. O que eles gostam de fazer? Eles querem experimentar algo novo? Use palavras descritivas."
          },
          "phrases": [
            {
              "en": "My sister likes gardening. She has many beautiful flowers.",
              "pt": "Minha irmã gosta de jardinagem. Ela tem muitas flores lindas."
            },
            {
              "en": "My dad wants to start writing a book.",
              "pt": "Meu pai quer começar a escrever um livro."
            },
            {
              "en": "My best friend likes gaming. He plays online every night.",
              "pt": "Meu melhor amigo gosta de jogar. Ele joga online todas as noites."
            }
          ],
          "check": [
            {
              "id": "b29c-des-1",
              "prompt": {
                "en": "How would you describe someone who likes to cook a lot?",
                "pt": "Como você descreveria alguém que gosta muito de cozinhar?"
              },
              "options": [
                "They like cooking.",
                "They like to cook a lot.",
                "They want cooking."
              ],
              "answer": "They like cooking.",
              "explanation": {
                "en": "'They like cooking.' is the most natural way to express general enjoyment of cooking.",
                "pt": "'They like cooking.' é a maneira mais natural de expressar prazer geral em cozinhar."
              }
            },
            {
              "id": "b29c-des-2",
              "prompt": {
                "en": "A friend wants to learn 'photography'. What is the correct way to say this?",
                "pt": "Um amigo quer aprender 'photography'. Qual é a forma correta de dizer isso?"
              },
              "options": [
                "He wants learning photography.",
                "He wants to learn photography.",
                "He likes learning photography."
              ],
              "answer": "He wants to learn photography.",
              "explanation": {
                "en": "Use 'want to' followed by the base verb for desires.",
                "pt": "Use 'want to' seguido do verbo base para desejos."
              }
            }
          ]
        },
        {
          "id": "b29c-act-4-give-your-opinion",
          "title": {
            "en": "Give Your Opinion: Interesting Hobbies",
            "pt": "Dê Sua Opinião: Hobbies Interessantes"
          },
          "instruction": {
            "en": "Discuss with your partner: What hobbies from the list are interesting? Which ones are not interesting for you? Why?",
            "pt": "Discuta com seu parceiro: Quais hobbies da lista são interessantes? Quais não são interessantes para você? Por quê?"
          },
          "phrases": [
            {
              "en": "I think photography is very interesting.",
              "pt": "Eu acho fotografia muito interessante."
            },
            {
              "en": "I don't like gardening. It is boring for me.",
              "pt": "Eu não gosto de jardinagem. É chato para mim."
            },
            {
              "en": "Volunteering is a good hobby because you help people.",
              "pt": "Voluntariado é um bom hobby porque você ajuda as pessoas."
            }
          ],
          "check": [
            {
              "id": "b29c-goy-1",
              "prompt": {
                "en": "How do you express a positive opinion about hiking?",
                "pt": "Como você expressa uma opinião positiva sobre fazer trilhas?"
              },
              "options": [
                "Hiking is boring.",
                "I think hiking is amazing!",
                "I want hiking."
              ],
              "answer": "I think hiking is amazing!",
              "explanation": {
                "en": "This phrase directly expresses a positive opinion.",
                "pt": "Esta frase expressa diretamente uma opinião positiva."
              }
            },
            {
              "id": "b29c-goy-2",
              "prompt": {
                "en": "What clarification question can you ask if someone says a hobby is 'monotonous' and you don't know the word?",
                "pt": "Que pergunta de esclarecimento você pode fazer se alguém disser que um hobby é 'monotonous' e você não souber a palavra?"
              },
              "options": [
                "Sorry, can you repeat that?",
                "What does that mean?",
                "I like monotonous hobbies."
              ],
              "answer": "What does that mean?",
              "explanation": {
                "en": "Use 'What does that mean?' to ask for the meaning of a new word.",
                "pt": "Use 'What does that mean?' para perguntar o significado de uma palavra nova."
              }
            }
          ]
        },
        {
          "id": "b29c-act-5-writing-tasks",
          "title": {
            "en": "Writing Tasks: My Hobbies Paragraph",
            "pt": "Tarefas de Escrita: Parágrafo Sobre Meus Hobbies"
          },
          "instruction": {
            "en": "Write a short paragraph about your hobbies. Include what you like doing, what you want to try, and why. Use at least 3 vocabulary words and 2 grammar structures (like + -ing / want to).",
            "pt": "Escreva um pequeno parágrafo sobre seus hobbies. Inclua o que você gosta de fazer, o que você quer experimentar e por quê. Use pelo menos 3 palavras do vocabulário e 2 estruturas gramaticais (like + -ing / want to)."
          },
          "phrases": [
            {
              "en": "I like cooking new foods every week.",
              "pt": "Eu gosto de cozinhar comidas novas toda semana."
            },
            {
              "en": "I want to try hiking in the mountains soon.",
              "pt": "Eu quero experimentar fazer trilhas nas montanhas em breve."
            },
            {
              "en": "My friend and I like gaming together.",
              "pt": "Meu amigo e eu gostamos de jogar juntos."
            }
          ],
          "check": [
            {
              "id": "b29c-wt-1",
              "prompt": {
                "en": "Which sentence correctly uses 'want to' and a hobby word?",
                "pt": "Qual frase usa 'want to' e uma palavra de hobby corretamente?"
              },
              "options": [
                "I want to gardening.",
                "I want to garden.",
                "I want gardening."
              ],
              "answer": "I want to garden.",
              "explanation": {
                "en": "'Garden' is the base verb for the hobby 'gardening' when used with 'want to'.",
                "pt": "'Garden' é o verbo base para o hobby 'gardening' quando usado com 'want to'."
              }
            },
            {
              "id": "b29c-wt-2",
              "prompt": {
                "en": "Which sentence correctly uses 'like + -ing' and a hobby word?",
                "pt": "Qual frase usa 'like + -ing' e uma palavra de hobby corretamente?"
              },
              "options": [
                "He likes travel.",
                "He likes traveling.",
                "He like traveling."
              ],
              "answer": "He likes traveling.",
              "explanation": {
                "en": "The verb 'like' needs to be conjugated for 'He' (likes) and followed by the gerund (-ing).",
                "pt": "O verbo 'like' precisa ser conjugado para 'He' (likes) e seguido pelo gerúndio (-ing)."
              }
            }
          ]
        }
      ],
      "challenge": {
        "id": "b29c-challenge-1",
        "title": {
          "en": "Hobby Exchange!",
          "pt": "Troca de Hobbies!"
        },
        "instruction": {
          "en": "Imagine you meet a new person from another country. Tell them about your favorite hobbies and ask about theirs. Explain what some hobbies are if they don't know the words. Use 'want to', 'like + -ing', and clarification expressions.",
          "pt": "Imagine que você conhece uma pessoa nova de outro país. Conte a ela sobre seus hobbies favoritos e pergunte sobre os dela. Explique o que são alguns hobbies se ela não souber as palavras. Use 'want to', 'like + -ing' e expressões de esclarecimento."
        },
        "phrases": [
          {
            "en": "Hello! I like playing sports. What do you like doing?",
            "pt": "Olá! Eu gosto de praticar esportes. O que você gosta de fazer?"
          },
          {
            "en": "I want to try photography. It is like taking pictures.",
            "pt": "Eu quero experimentar fotografia. É como tirar fotos."
          },
          {
            "en": "Sorry, can you repeat that? What does 'collecting' mean?",
            "pt": "Desculpe, você pode repetir? O que 'collecting' significa?"
          }
        ],
        "check": [
          {
            "id": "b29c-ch-1",
            "prompt": {
              "en": "Your new friend says, 'I like to knit.' You want to ask for clarification because you didn't hear clearly. What do you say?",
              "pt": "Seu novo amigo diz, 'I like to knit.' Você quer pedir um esclarecimento porque não ouviu claramente. O que você diz?"
            },
            "options": [
              "What does that mean?",
              "Can you speak more slowly?",
              "Sorry, can you repeat that?"
            ],
            "answer": "Sorry, can you repeat that?",
            "explanation": {
              "en": "To ask for repetition, 'Sorry, can you repeat that?' is the correct expression.",
              "pt": "Para pedir uma repetição, 'Sorry, can you repeat that?' é a expressão correta."
            }
          },
          {
            "id": "b29c-ch-2",
            "prompt": {
              "en": "Your friend wants to try 'volunteering'. What is the most common way to explain this hobby?",
              "pt": "Seu amigo quer experimentar 'volunteering'. Qual é a maneira mais comum de explicar este hobby?"
            },
            "options": [
              "It means you play games.",
              "It means you work for free to help others.",
              "It means you like painting."
            ],
            "answer": "It means you work for free to help others.",
            "explanation": {
              "en": "Volunteering is working without pay to help others.",
              "pt": "Voluntariado é trabalhar sem remuneração para ajudar os outros."
            }
          }
        ]
      },
      "lessonReview": {
        "summary": {
          "en": "In this unit, we learned new hobbies and how to talk about them using 'want to' and 'like + -ing'. We also practiced asking for clarification.",
          "pt": "Nesta unidade, aprendemos novos hobbies e como falar sobre eles usando 'want to' e 'like + -ing'. Também praticamos pedir esclarecimentos."
        },
        "canDo": [
          {
            "en": "I can name 10 hobbies.",
            "pt": "Consigo nomear 10 hobbies."
          },
          {
            "en": "I can use 'want to' to express desires for hobbies.",
            "pt": "Consigo usar 'want to' para expressar desejos de hobbies."
          },
          {
            "en": "I can use 'like + -ing' to express enjoyment of hobbies.",
            "pt": "Consigo usar 'like + -ing' para expressar gosto por hobbies."
          },
          {
            "en": "I can ask for clarification using 'Sorry, can you repeat that?' and 'What does that mean?'.",
            "pt": "Consigo pedir esclarecimentos usando 'Sorry, can you repeat that?' e 'What does that mean?'."
          }
        ],
        "next": {
          "en": "Next, we will talk about daily routines and time expressions.",
          "pt": "Em seguida, falaremos sobre rotinas diárias e expressões de tempo."
        }
      }
    }
  },
  {
    "code": "BEGINNER-U30",
    "number": 30,
    "title": "Social Interaction – Cumulative Review",
    "titlePt": "Interação Social – Revisão Acumulativa",
    "cefr": "A1",
    "objective": {
      "en": "To teach social interaction and cumulative review – integration of all Beginner structures in extended communication in a contextualized way.",
      "pt": "Ensinar interação social e revisão acumulativa – integração de todas as estruturas do nível Iniciante em comunicação estendida de forma contextualizada."
    },
    "communicationGoal": {
      "en": "Students will be able to use 'likes dislikes' and social interaction vocabulary to communicate in real situations.",
      "pt": "O aluno será capaz de usar 'gostos e desgostos' e o vocabulário de interação social para se comunicar em situações reais."
    },
    "prerequisites": {
      "en": "Grammar: Basic infinitive and gerund usage (want to / like + -ing). Vocabulary: Hobbies.",
      "pt": "Estrutura: Uso básico de infinitivo e gerúndio (want to / like + -ing). Vocabulário: Hobbies."
    },
    "newContent": {
      "en": "Grammar: Cumulative review – integration of all Beginner structures in extended communication. | Vocabulary: Social Interaction (10 lexical items) | Expressions: Likes Dislikes",
      "pt": "Gramática: Revisão acumulativa – integração de todas as estruturas do nível Iniciante em comunicação estendida. | Vocabulário: Interação Social (10 itens lexicais) | Expressões: Gostos e Desgostos"
    },
    "reviewContent": {
      "en": "Spiral review: Should / Shouldn't for advice (Unit 25). Vocabulary review: Life Events (Unit 20).",
      "pt": "Revisão em espiral: Should / Shouldn't para conselhos (Unidade 25). Revisão de vocabulário: Eventos da Vida (Unidade 20)."
    },
    "discover": {
      "id": "BEGINNER-U30-DISCOVER",
      "warmUp": {
        "prompt": {
          "en": "Look at the pictures. What are these people doing? Do you like social activities?",
          "pt": "Olhe as imagens. O que essas pessoas estão fazendo? Você gosta de atividades sociais?"
        },
        "phrases": [
          {
            "en": "Picture 1: People talking at a party.",
            "pt": "Imagem 1: Pessoas conversando em uma festa."
          },
          {
            "en": "Picture 2: A person giving a gift.",
            "pt": "Imagem 2: Uma pessoa dando um presente."
          },
          {
            "en": "Picture 3: Friends having coffee.",
            "pt": "Imagem 3: Amigos tomando café."
          }
        ]
      },
      "context": {
        "situation": {
          "en": "Mariana and John are talking about a party. They are discussing what they like and don't like.",
          "pt": "Mariana e John estão conversando sobre uma festa. Eles estão discutindo o que gostam e não gostam."
        },
        "dialogue": [
          {
            "who": "John",
            "en": "Hi Mariana! Are you going to the party on Saturday?",
            "pt": "Oi Mariana! Você vai à festa no sábado?"
          },
          {
            "who": "Mariana",
            "en": "Hi John! Yes, I want to go. I love parties!",
            "pt": "Oi John! Sim, eu quero ir. Eu amo festas!"
          },
          {
            "who": "John",
            "en": "Me too! I like meeting new people and having conversations.",
            "pt": "Eu também! Gosto de conhecer pessoas novas e ter conversas."
          },
          {
            "who": "Mariana",
            "en": "That's great! I don't like loud music, but I like dancing.",
            "pt": "Que ótimo! Eu não gosto de música alta, mas gosto de dançar."
          },
          {
            "who": "John",
            "en": "I understand. I don't like small talk very much, but I like a good conversation.",
            "pt": "Eu entendo. Não gosto muito de conversa fiada, mas gosto de uma boa conversa."
          },
          {
            "who": "Mariana",
            "en": "Me neither. Do you need to buy a gift?",
            "pt": "Nem eu. Você precisa comprar um presente?"
          },
          {
            "who": "John",
            "en": "Oh, yes! I should get one. Thanks for the reminder!",
            "pt": "Ah, sim! Devo comprar um. Obrigado por me lembrar!"
          }
        ]
      },
      "vocabulary": [
        {
          "term": "invite",
          "pt": "convidar",
          "ipa": "/ɪnˈvaɪt/",
          "definition": "To ask someone to come to an event or place.",
          "example": "I want to invite my friends to my birthday party.",
          "examplePt": "Eu quero convidar meus amigos para minha festa de aniversário."
        },
        {
          "term": "party",
          "pt": "festa",
          "ipa": "/ˈpɑːrti/",
          "definition": "A social gathering of people for entertainment or celebration.",
          "example": "The party is on Saturday evening.",
          "examplePt": "A festa é no sábado à noite."
        },
        {
          "term": "celebration",
          "pt": "celebração",
          "ipa": "/ˌselɪˈbreɪʃn/",
          "definition": "A special enjoyable event that people organize because something good has happened.",
          "example": "We are planning a big celebration for our anniversary.",
          "examplePt": "Estamos planejando uma grande celebração para nosso aniversário."
        },
        {
          "term": "guest",
          "pt": "convidado",
          "ipa": "/ɡest/",
          "definition": "A person who is invited to visit or stay in someone's home, or to attend a social occasion.",
          "example": "There will be many guests at the wedding.",
          "examplePt": "Haverá muitos convidados no casamento."
        },
        {
          "term": "gift",
          "pt": "presente",
          "ipa": "/ɡɪft/",
          "definition": "Something given willingly to someone without payment.",
          "example": "She received a beautiful gift for her graduation.",
          "examplePt": "Ela recebeu um lindo presente por sua formatura."
        },
        {
          "term": "conversation",
          "pt": "conversa",
          "ipa": "/ˌkɒnvərˈseɪʃn/",
          "definition": "A talk between two or more people in which thoughts, feelings, and ideas are expressed.",
          "example": "I had a long conversation with my friend.",
          "examplePt": "Eu tive uma longa conversa com meu amigo."
        },
        {
          "term": "small talk",
          "pt": "conversa fiada",
          "ipa": "/smɔːl tɔːk/",
          "definition": "Polite conversation about unimportant or uncontroversial matters.",
          "example": "I don't like making small talk at work events.",
          "examplePt": "Não gosto de fazer conversa fiada em eventos de trabalho."
        },
        {
          "term": "compliment",
          "pt": "elogio",
          "ipa": "/ˈkɒmplɪmənt/",
          "definition": "An expression of praise or admiration.",
          "example": "He gave her a compliment on her new dress.",
          "examplePt": "Ele fez um elogio ao novo vestido dela."
        },
        {
          "term": "apology",
          "pt": "desculpa",
          "ipa": "/əˈpɒlədʒi/",
          "definition": "A regretful acknowledgment of an offense or failure.",
          "example": "I owe you an apology for being late.",
          "examplePt": "Eu te devo uma desculpa por estar atrasado."
        },
        {
          "term": "favor",
          "pt": "favor",
          "ipa": "/ˈfeɪvər/",
          "definition": "An act of kindness beyond what is due or usual.",
          "example": "Can you do me a favor and help me move this box?",
          "examplePt": "Você pode me fazer um favor e me ajudar a mover esta caixa?"
        }
      ],
      "expressions": [
        {
          "en": "I like coffee.",
          "pt": "Eu gosto de café."
        },
        {
          "en": "I don't like loud music.",
          "pt": "Eu não gosto de música alta."
        },
        {
          "en": "I love traveling.",
          "pt": "Eu amo viajar."
        }
      ],
      "grammar": [
        {
          "title": {
            "en": "Cumulative Review: Integrating Beginner Structures",
            "pt": "Revisão Acumulativa: Integrando Estruturas do Nível Iniciante"
          },
          "examples": [
            {
              "en": "I've learned a lot this course, and now I can talk about my daily life.",
              "pt": "Aprendi muito neste curso e agora consigo falar sobre minha vida diária."
            },
            {
              "en": "I can describe my routine, my past, and my future plans in English.",
              "pt": "Posso descrever minha rotina, meu passado e meus planos futuros em inglês."
            },
            {
              "en": "She should invite her friends to the celebration, it's a good idea.",
              "pt": "Ela deveria convidar os amigos para a celebração, é uma boa ideia."
            }
          ],
          "rule": {
            "en": "Throughout this course, you've learned many structures. Now, you can combine them to express more complex ideas. For example, using 'can' for ability, 'should' for advice, or 'like + -ing' for preferences. We are now combining these structures for extended communication.",
            "pt": "Ao longo deste curso, você aprendeu muitas estruturas. Agora, pode combiná-las para expressar ideias mais complexas. Por exemplo, usando 'can' para habilidade, 'should' para conselho, ou 'like + -ing' para preferências. Estamos agora combinando essas estruturas para uma comunicação mais estendida."
          },
          "mistakes": [
            {
              "en": "Incorrect: I can to speak English good.",
              "pt": "Correto: I can speak English well. (Não use 'to' depois de 'can'; use 'well' para modificar o verbo)."
            },
            {
              "en": "Incorrect: He likes read books.",
              "pt": "Correto: He likes reading books. (Após 'like' para atividades, use a forma '-ing')."
            }
          ]
        }
      ],
      "controlledPractice": [
        {
          "id": "b30d-cp-1",
          "prompt": {
            "en": "Choose the best word to complete the sentence: I want to ____ my friends to the party.",
            "pt": "Escolha a melhor palavra para completar a frase: Eu quero ____ meus amigos para a festa."
          },
          "options": [
            "gift",
            "invite",
            "apology",
            "small talk"
          ],
          "answer": "invite",
          "explanation": {
            "en": "'Invite' means to ask someone to come.",
            "pt": "'Invite' significa pedir para alguém vir."
          }
        },
        {
          "id": "b30d-cp-2",
          "prompt": {
            "en": "Which sentence expresses a preference? ____",
            "pt": "Qual frase expressa uma preferência? ____"
          },
          "options": [
            "I should go home.",
            "I like swimming.",
            "I can drive a car.",
            "I need a favor."
          ],
          "answer": "I like swimming.",
          "explanation": {
            "en": "'I like swimming' shows a preference using 'like + -ing'.",
            "pt": "'I like swimming' mostra uma preferência usando 'like + -ing'."
          }
        },
        {
          "id": "b30d-cp-3",
          "prompt": {
            "en": "You ____ make an apology if you are late. It's polite.",
            "pt": "Você ____ pedir desculpas se estiver atrasado. É educado."
          },
          "options": [
            "can",
            "don't like",
            "should",
            "love"
          ],
          "answer": "should",
          "explanation": {
            "en": "'Should' is used to give advice or say what is a good idea.",
            "pt": "'Should' é usado para dar conselhos ou dizer o que é uma boa ideia."
          }
        },
        {
          "id": "b30d-cp-4",
          "prompt": {
            "en": "The opposite of 'I like' is 'I ____'.",
            "pt": "O oposto de 'Eu gosto' é 'Eu ____'."
          },
          "options": [
            "love",
            "don't like",
            "can",
            "should"
          ],
          "answer": "don't like",
          "explanation": {
            "en": "'Don't like' expresses dislike.",
            "pt": "'Don't like' expressa desgosto."
          }
        }
      ],
      "input": {
        "kind": "listening",
        "title": {
          "en": "Listen to a short dialogue about social plans.",
          "pt": "Ouça um pequeno diálogo sobre planos sociais."
        },
        "lines": [
          {
            "en": "Man: Hey, Maria! There's a celebration for the new manager next Friday. Are you going?",
            "pt": "Homem: Ei, Maria! Haverá uma celebração para o novo gerente na próxima sexta. Você vai?"
          },
          {
            "en": "Woman: Oh, I didn't know! I love celebrations. Are there many guests?",
            "pt": "Mulher: Ah, eu não sabia! Adoro celebrações. Haverá muitos convidados?"
          },
          {
            "en": "Man: Yes, I think so. It's a party. We should bring a small gift.",
            "pt": "Homem: Sim, eu acho. É uma festa. Deveríamos levar um pequeno presente."
          },
          {
            "en": "Woman: Okay, good to know. I don't like conversations about work at parties. I prefer talking about hobbies.",
            "pt": "Mulher: Ok, bom saber. Não gosto de conversas sobre trabalho em festas. Prefiro falar sobre hobbies."
          },
          {
            "en": "Man: Me too! I like meeting new people, but sometimes the small talk is boring.",
            "pt": "Homem: Eu também! Gosto de conhecer pessoas novas, mas às vezes a conversa fiada é chata."
          },
          {
            "en": "Woman: Exactly! But I'll go. It sounds fun. Can you invite Ana too?",
            "pt": "Mulher: Exatamente! Mas eu vou. Parece divertido. Você pode convidar a Ana também?"
          },
          {
            "en": "Man: Yes, I can. I should send her a message now.",
            "pt": "Homem: Sim, posso. Devo enviar uma mensagem para ela agora."
          }
        ],
        "questions": [
          {
            "id": "b30d-lq-1",
            "prompt": {
              "en": "What event are they talking about?",
              "pt": "Sobre qual evento eles estão falando?"
            },
            "options": [
              "A birthday party",
              "A celebration for the new manager",
              "A movie night",
              "A work meeting"
            ],
            "answer": "A celebration for the new manager",
            "explanation": {
              "en": "They are discussing a celebration for the new manager.",
              "pt": "Eles estão discutindo uma celebração para o novo gerente."
            }
          },
          {
            "id": "b30d-lq-2",
            "prompt": {
              "en": "What does the woman NOT like?",
              "pt": "O que a mulher NÃO gosta?"
            },
            "options": [
              "Celebrations",
              "Meeting new people",
              "Conversations about work",
              "Talking about hobbies"
            ],
            "answer": "Conversations about work",
            "explanation": {
              "en": "She states, 'I don't like conversations about work at parties.'",
              "pt": "Ela afirma: 'Não gosto de conversas sobre trabalho em festas.'"
            }
          },
          {
            "id": "b30d-lq-3",
            "prompt": {
              "en": "What should they do for the event?",
              "pt": "O que eles deveriam fazer para o evento?"
            },
            "options": [
              "Bring food",
              "Bring a small gift",
              "Sing a song",
              "Arrive early"
            ],
            "answer": "Bring a small gift",
            "explanation": {
              "en": "The man says, 'We should bring a small gift.'",
              "pt": "O homem diz: 'Deveríamos levar um pequeno presente.'"
            }
          }
        ]
      },
      "quickCheck": [
        {
          "id": "b30d-qc-1",
          "prompt": {
            "en": "Which word means 'to ask someone to an event'?",
            "pt": "Qual palavra significa 'pedir para alguém ir a um evento'?"
          },
          "options": [
            "Guest",
            "Gift",
            "Invite",
            "Apology"
          ],
          "answer": "Invite",
          "explanation": {
            "en": "'Invite' means to ask someone to come.",
            "pt": "'Invite' significa pedir para alguém vir."
          }
        },
        {
          "id": "b30d-qc-2",
          "prompt": {
            "en": "What is 'small talk'?",
            "pt": "O que é 'small talk'?"
          },
          "options": [
            "A deep conversation",
            "Polite conversation about unimportant things",
            "A secret conversation",
            "A serious discussion"
          ],
          "answer": "Polite conversation about unimportant things",
          "explanation": {
            "en": "Small talk is polite conversation about unimportant matters.",
            "pt": "Small talk é uma conversa educada sobre assuntos sem importância."
          }
        },
        {
          "id": "b30d-qc-3",
          "prompt": {
            "en": "Complete the sentence: I love ____ new people.",
            "pt": "Complete a frase: Eu amo ____ pessoas novas."
          },
          "options": [
            "meet",
            "to meet",
            "meeting",
            "met"
          ],
          "answer": "meeting",
          "explanation": {
            "en": "After 'love' (expressing preference for an activity), we use the '-ing' form.",
            "pt": "Depois de 'love' (expressando preferência por uma atividade), usamos a forma '-ing'."
          }
        },
        {
          "id": "b30d-qc-4",
          "prompt": {
            "en": "You ____ be polite when talking to guests.",
            "pt": "Você ____ ser educado ao falar com os convidados."
          },
          "options": [
            "can't",
            "should",
            "don't like",
            "hate"
          ],
          "answer": "should",
          "explanation": {
            "en": "'Should' is used to give advice or express what is appropriate.",
            "pt": "'Should' é usado para dar conselhos ou expressar o que é apropriado."
          }
        }
      ]
    },
    "communicate": {
      "id": "BEGINNER-U30-COMMUNICATE",
      "review": [
        {
          "en": "Remember the new vocabulary: invite, party, celebration, guest, gift, conversation, small talk, compliment, apology, favor.",
          "pt": "Lembre-se do novo vocabulário: invite, party, celebration, guest, gift, conversation, small talk, compliment, apology, favor."
        },
        {
          "en": "Recall how to express likes and dislikes: I like..., I don't like..., I love...",
          "pt": "Lembre-se de como expressar gostos e desgostos: I like..., I don't like..., I love..."
        },
        {
          "en": "Think about how to give advice: You should..., You shouldn't...",
          "pt": "Pense em como dar conselhos: You should..., You shouldn't..."
        }
      ],
      "activities": [
        {
          "id": "b30c-act-1",
          "title": {
            "en": "Talk to Your Partner: Party Planning",
            "pt": "Converse com Seu Parceiro: Planejamento de Festa"
          },
          "instruction": {
            "en": "Imagine you are planning a party. Ask your partner about their preferences for the party. Use 'I like/don't like' and new vocabulary.",
            "pt": "Imagine que você está planejando uma festa. Pergunte ao seu parceiro sobre as preferências dele para a festa. Use 'I like/don't like' e o novo vocabulário."
          },
          "phrases": [
            {
              "en": "Do you like loud music at a party?",
              "pt": "Você gosta de música alta em uma festa?"
            },
            {
              "en": "Should we invite many guests?",
              "pt": "Devemos convidar muitos convidados?"
            },
            {
              "en": "I love dancing at celebrations.",
              "pt": "Eu adoro dançar em celebrações."
            }
          ],
          "check": [
            {
              "id": "b30c-act-1-q1",
              "prompt": {
                "en": "Which phrase asks for a preference?",
                "pt": "Qual frase pergunta por uma preferência?"
              },
              "options": [
                "What time is it?",
                "Do you like to go to parties?",
                "Where is the gift?",
                "Can you do me a favor?"
              ],
              "answer": "Do you like to go to parties?",
              "explanation": {
                "en": "'Do you like...' is used to ask about preferences.",
                "pt": "'Do you like...' é usado para perguntar sobre preferências."
              }
            },
            {
              "id": "b30c-act-1-q2",
              "prompt": {
                "en": "If someone gives you a 'compliment', what did they do?",
                "pt": "Se alguém te faz um 'compliment', o que essa pessoa fez?"
              },
              "options": [
                "Said something nice",
                "Asked for money",
                "Made an apology",
                "Invited you"
              ],
              "answer": "Said something nice",
              "explanation": {
                "en": "A compliment is an expression of praise.",
                "pt": "Um elogio é uma expressão de admiração."
              }
            }
          ]
        },
        {
          "id": "b30c-act-2",
          "title": {
            "en": "Ask and Answer: Social Scenarios",
            "pt": "Pergunte e Responda: Cenários Sociais"
          },
          "instruction": {
            "en": "Work with a partner. Take turns asking and answering questions about different social situations. Use 'should/shouldn't' for advice and 'likes/dislikes'.",
            "pt": "Trabalhe com um parceiro. Revezem-se perguntando e respondendo sobre diferentes situações sociais. Use 'should/shouldn't' para conselhos e 'likes/dislikes'."
          },
          "phrases": [
            {
              "en": "What should I do if I don't like small talk at a party?",
              "pt": "O que devo fazer se não gosto de conversa fiada em uma festa?"
            },
            {
              "en": "Should I make an apology if I am late to a celebration?",
              "pt": "Devo pedir desculpas se atrasar para uma celebração?"
            },
            {
              "en": "I like to talk a lot. What about you?",
              "pt": "Eu gosto de conversar muito. E você?"
            }
          ],
          "check": [
            {
              "id": "b30c-act-2-q1",
              "prompt": {
                "en": "What is the best response if someone says, 'I don't like dancing.'?",
                "pt": "Qual é a melhor resposta se alguém diz 'Eu não gosto de dançar'?"
              },
              "options": [
                "You should dance!",
                "I like dancing.",
                "Oh, I understand.",
                "Let's go."
              ],
              "answer": "Oh, I understand.",
              "explanation": {
                "en": "This response shows understanding of their dislike.",
                "pt": "Essa resposta mostra compreensão sobre o desgosto da pessoa."
              }
            },
            {
              "id": "b30c-act-2-q2",
              "prompt": {
                "en": "If you ask for a 'favor', what do you want?",
                "pt": "Se você pede um 'favor', o que você quer?"
              },
              "options": [
                "A gift",
                "Help with something",
                "A conversation",
                "An invitation"
              ],
              "answer": "Help with something",
              "explanation": {
                "en": "A favor is an act of kindness or help.",
                "pt": "Um favor é um ato de bondade ou ajuda."
              }
            }
          ]
        },
        {
          "id": "b30c-act-3",
          "title": {
            "en": "Short Speaking Tasks: Describing an Event",
            "pt": "Tarefas Curtas de Fala: Descrevendo um Evento"
          },
          "instruction": {
            "en": "Describe a past or future social event (party, celebration). Talk about who you invite, what you like/don't like about it, and what you should/shouldn't do.",
            "pt": "Descreva um evento social passado ou futuro (festa, celebração). Fale sobre quem você convida, o que você gosta/não gosta e o que você deveria/não deveria fazer."
          },
          "phrases": [
            {
              "en": "Last month, I went to a party. I liked meeting new guests.",
              "pt": "No mês passado, fui a uma festa. Gostei de conhecer novos convidados."
            },
            {
              "en": "For my birthday celebration, I want to invite all my friends. I don't like boring conversations.",
              "pt": "Para minha festa de aniversário, quero convidar todos os meus amigos. Não gosto de conversas chatas."
            },
            {
              "en": "You should bring a gift for a wedding celebration. I like buying gifts.",
              "pt": "Você deveria levar um presente para uma celebração de casamento. Eu gosto de comprar presentes."
            }
          ],
          "check": [
            {
              "id": "b30c-act-3-q1",
              "prompt": {
                "en": "If you describe a 'celebration', you are talking about ____.",
                "pt": "Se você descreve uma 'celebration', você está falando sobre ____."
              },
              "options": [
                "A sad event",
                "A special enjoyable event",
                "A boring meeting",
                "Daily routine"
              ],
              "answer": "A special enjoyable event",
              "explanation": {
                "en": "A celebration is a special enjoyable event.",
                "pt": "Uma celebração é um evento especial e agradável."
              }
            }
          ]
        },
        {
          "id": "b30c-act-4",
          "title": {
            "en": "Listening Tasks: Understanding Social Cues",
            "pt": "Tarefas de Escuta: Compreendendo Dicas Sociais"
          },
          "instruction": {
            "en": "Listen to short sentences. Decide if the speaker likes or dislikes the activity, or is giving advice. (Teacher reads sentences)",
            "pt": "Ouça frases curtas. Decida se o falante gosta ou não da atividade, ou se está dando um conselho. (Professor lê as frases)"
          },
          "phrases": [
            {
              "en": "I love making small talk at work.",
              "pt": "Eu adoro fazer conversa fiada no trabalho."
            },
            {
              "en": "You shouldn't forget to send an apology if you can't come.",
              "pt": "Você não deveria esquecer de enviar um pedido de desculpas se não puder vir."
            },
            {
              "en": "Do you like receiving gifts?",
              "pt": "Você gosta de receber presentes?"
            }
          ],
          "check": [
            {
              "id": "b30c-act-4-q1",
              "prompt": {
                "en": "If someone says 'I don't like the music', what are they expressing?",
                "pt": "Se alguém diz 'Eu não gosto da música', o que essa pessoa está expressando?"
              },
              "options": [
                "A compliment",
                "A dislike",
                "An apology",
                "A favor"
              ],
              "answer": "A dislike",
              "explanation": {
                "en": "'I don't like' expresses a dislike.",
                "pt": "'I don't like' expressa um desgosto."
              }
            }
          ]
        },
        {
          "id": "b30c-act-5",
          "title": {
            "en": "Real-life Communication Activity: Discussing Weekend Plans",
            "pt": "Atividade de Comunicação Real: Discutindo Planos para o Fim de Semana"
          },
          "instruction": {
            "en": "In groups, discuss your weekend plans. Use the vocabulary for social interaction and express what you like/don't like about different activities. Also, give advice if needed.",
            "pt": "Em grupos, discutam seus planos para o fim de semana. Usem o vocabulário de interação social e expressem o que vocês gostam/não gostam em diferentes atividades. Além disso, deem conselhos se necessário."
          },
          "phrases": [
            {
              "en": "I'm going to a party. I like dancing and talking to new guests.",
              "pt": "Vou a uma festa. Gosto de dançar e conversar com novos convidados."
            },
            {
              "en": "My friend wants to invite me for a celebration. I should buy a gift.",
              "pt": "Meu amigo quer me convidar para uma celebração. Devo comprar um presente."
            },
            {
              "en": "I don't like staying home on weekends. I prefer going out and having conversations.",
              "pt": "Não gosto de ficar em casa nos fins de semana. Prefiro sair e ter conversas."
            }
          ],
          "check": [
            {
              "id": "b30c-act-5-q1",
              "prompt": {
                "en": "If your friend says, 'I want to invite you to my birthday party!', what is the main idea?",
                "pt": "Se seu amigo diz, 'Quero te convidar para minha festa de aniversário!', qual é a ideia principal?"
              },
              "options": [
                "They need a gift.",
                "They are asking you to attend.",
                "They dislike parties.",
                "They want an apology."
              ],
              "answer": "They are asking you to attend.",
              "explanation": {
                "en": "To invite means to ask someone to come.",
                "pt": "Convidar significa pedir para alguém vir."
              }
            }
          ]
        }
      ],
      "challenge": {
        "id": "b30c-challenge-1",
        "title": {
          "en": "Plan a Social Event",
          "pt": "Planeje um Evento Social"
        },
        "instruction": {
          "en": "In pairs, plan a small social event (e.g., a coffee meeting, a casual dinner). Discuss who to invite, what kind of conversations you want, and what you like/don't like about hosting. Present your plan.",
          "pt": "Em duplas, planejem um pequeno evento social (por exemplo, um encontro para café, um jantar casual). Discutam quem convidar, que tipo de conversas vocês querem e o que gostam/não gostam em hospedar. Apresentem seu plano."
        },
        "phrases": [
          {
            "en": "We should invite 5 guests.",
            "pt": "Deveríamos convidar 5 convidados."
          },
          {
            "en": "I like having deep conversations, not just small talk.",
            "pt": "Gosto de ter conversas profundas, não apenas conversa fiada."
          },
          {
            "en": "I don't like preparing a lot of food for a party.",
            "pt": "Não gosto de preparar muita comida para uma festa."
          }
        ],
        "check": [
          {
            "id": "b30c-challenge-q1",
            "prompt": {
              "en": "When planning an event, why is it important to consider 'likes and dislikes'?",
              "pt": "Ao planejar um evento, por que é importante considerar 'gostos e desgostos'?"
            },
            "options": [
              "It's not important.",
              "To make sure everyone has a good time.",
              "Only for food choices.",
              "To make the event difficult."
            ],
            "answer": "To make sure everyone has a good time.",
            "explanation": {
              "en": "Considering preferences helps ensure the event is enjoyable for guests.",
              "pt": "Considerar as preferências ajuda a garantir que o evento seja agradável para os convidados."
            }
          },
          {
            "id": "b30c-challenge-q2",
            "prompt": {
              "en": "What is a 'guest' at an event?",
              "pt": "O que é um 'guest' (convidado) em um evento?"
            },
            "options": [
              "The person hosting",
              "A person who works there",
              "A person who is invited",
              "Someone who lives there"
            ],
            "answer": "A person who is invited",
            "explanation": {
              "en": "A guest is someone who has been invited to an event.",
              "pt": "Um convidado é alguém que foi convidado para um evento."
            }
          }
        ]
      },
      "lessonReview": {
        "summary": {
          "en": "In this unit, we reviewed and integrated many Beginner structures. We learned new vocabulary for social interaction and practiced expressing likes and dislikes in different social contexts. We also practiced giving and receiving advice.",
          "pt": "Nesta unidade, revisamos e integramos muitas estruturas do nível Iniciante. Aprendemos vocabulário novo para interação social e praticamos expressar gostos e desgostos em diferentes contextos sociais. Também praticamos dar e receber conselhos."
        },
        "canDo": [
          {
            "en": "I can talk about my likes and dislikes regarding social activities.",
            "pt": "Consigo falar sobre meus gostos e desgostos em relação a atividades sociais."
          },
          {
            "en": "I can use new vocabulary related to social interaction (e.g., invite, party, gift).",
            "pt": "Consigo usar novo vocabulário relacionado à interação social (ex: invite, party, gift)."
          },
          {
            "en": "I can give and ask for advice using 'should' and 'shouldn't' in social situations.",
            "pt": "Consigo dar e pedir conselhos usando 'should' e 'shouldn't' em situações sociais."
          },
          {
            "en": "I can combine various Beginner grammar structures for extended communication.",
            "pt": "Consigo combinar várias estruturas gramaticais do nível Iniciante para comunicação estendida."
          }
        ],
        "next": {
          "en": "Next, we will begin Unit 31, focusing on 'Travel and Transportation'.",
          "pt": "Em seguida, iniciaremos a Unidade 31, focando em 'Viagem e Transporte'."
        }
      }
    }
  }
];
