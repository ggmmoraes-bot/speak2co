# Speak2Co Original Curriculum — Etapa 1: análise, matriz e aula piloto

Objetivo desta etapa: **não** substituir ainda as 60 aulas do English Beginner. Primeiro entregar a análise pedagógica, a matriz completa das 60 aulas e uma aula piloto funcionando dentro da plataforma, para você validar.

## Decisões já definidas

- Estrutura mantida: **30 unidades × 2 aulas** (Part 1 — Discover, Part 2 — Communicate) = 60 aulas. Nada de navegação nova, nada de curso duplicado.
- Material de referência: apenas o Teacher's Guide enviado (estágio inicial). Novos materiais ampliam a matriz depois.
- Imagens: gero apenas a imagem da aula piloto agora; as outras 59 só após sua validação.
- Todo o conteúdo é **autoral Speak2Co** — o material enviado serve só como fonte pedagógica (o que ensinar, em que ordem, com que pré-requisitos). Nenhuma frase, diálogo, exemplo, música, personagem ou título é reaproveitado.

## O que será entregue nesta etapa

### 1. Análise pedagógica (documento no projeto)

Um documento de referência com:
- mapa de progressão linguística (verbos, estruturas, funções comunicativas, ordem de introdução);
- mapa de habilidades (listening, speaking, pronúncia, vocabulário);
- mapa de pré-requisitos (o que cada aula exige das anteriores);
- mapa de revisão (micro, de aula, de sequência e revisão espaçada);
- curva de dificuldade ao longo das 60 aulas;
- oportunidades em que a versão digital supera o material impresso (pronúncia com IA, drills adaptativos, repetição espaçada, Guided Lesson).

### 2. Matriz das 60 aulas

Tabela completa, aula 1 a 60, com: unidade, parte, título provisório, objetivo de aprendizagem, objetivo comunicativo, gramática, vocabulário, verbos, expressões, alvo de listening, alvo de speaking, alvo de pronúncia, pré-requisitos, dificuldade, tipo de prática, ponto de revisão, critério de domínio e conceito da imagem de warm-up.

### 3. Aula piloto completa

Uma unidade reescrita ponta a ponta (Discover + Communicate) já rodando na tela atual do curso, com:
- imagem de warm-up própria, gerada para o tema da aula;
- warm-up conectado à imagem (observar, escolher, responder);
- contexto/situação original com personagens Speak2Co;
- vocabulário, expressões e gramática apresentados a partir de exemplos;
- prática controlada, listening com perguntas, quick check;
- Communicate com atividades, desafio de fala e lesson review;
- Speak2Drill ao final, como já funciona hoje.

Todos os botões e comandos permanecem em inglês.

## O que NÃO muda nesta etapa

- Interface, identidade visual, navegação, progresso do aluno, planos e permissões: intactos.
- As outras 29 unidades continuam como estão até sua validação.
- Intermediate e Upper-Intermediate: sem alteração.

## Detalhes técnicos

- A análise e a matriz ficam em `docs/curriculum/beginner-matrix.md` (referência interna, não aparece para o aluno).
- A aula piloto reescreve uma unidade dentro de `src/lib/curriculum/beginner-units-1.ts`, mantendo o tipo `CourseUnit` e o código estável (ex.: `BEGINNER-U01`, ids `BEGINNER-U01-DISCOVER` / `-COMMUNICATE`) para não invalidar o progresso salvo.
- A imagem da piloto entra em `src/assets/warmup/` e é registrada em `src/lib/curriculum/warmup-images.ts`, hoje resolvido por tema; passo a permitir mapeamento por código de unidade, com fallback no comportamento atual.
- Nenhuma mudança em componentes de aula (`UnitPartLesson`, `LessonPlayer`, `CourseUnitsAccordion`), rotas, entitlements ou banco.

## Próxima etapa (após sua validação)

Reescrita progressiva das 59 aulas restantes em lotes, com as imagens de warm-up correspondentes, seguindo a matriz aprovada.
