# Speak2Co Live Lesson — a aula ao vivo com a Gisele

Uma nova camada de instrutora sobre o currículo que já existe (Beginner 30, Intermediate 40, Upper 50 unidades). Nada de conteúdo é reescrito, removido ou duplicado: as unidades atuais continuam sendo a fonte de verdade e a Live Lesson passa a conduzi-las como se a Gisele estivesse dando a aula.

## Como o aluno vê

Dentro de cada unidade (Discover e Communicate) aparece um botão **Enter Live Lesson · Aula com a Gisele**. No Signature ele abre a aula guiada; nos outros planos aparece com cadeado e convite de upgrade — o curso normal continua funcionando igual para todo mundo.

A tela da aula tem um "palco" fixo:

```text
  [ vídeo/retrato da Gisele ]   ● LIVE LESSON
  ---------------------------------------------
  Fala da Gisele (inglês em destaque, PT abaixo)
  ---------------------------------------------
  🎙 Speak   ⌨ Type   ▶ Listen   🔁 Try again   💡 Hint
  ---------------------------------------------
  Feedback da Gisele        LESSON PROGRESS ███░ 70%
```

Roteiro de cada aula, gerado a partir do conteúdo real da unidade: Welcome → Warm-up → Discover → Guided Practice → AI Speaking Practice → Feedback → Real-life Scenario → Challenge → Wrap-up. O aluno responde falando (prioridade) ou digitando; a Gisele reage, corrige o que importa e pede o retry.

O tom e a exigência mudam por curso: Beginner com frases curtas e muito apoio; Intermediate com perguntas de acompanhamento; Upper como coach de conversação, com naturalidade e expressões idiomáticas.

## Avatar e voz

O palco toca **vídeos reais gravados por você**. Nesta entrega eu monto o player e o slot por etapa; enquanto um vídeo não existir para aquela etapa, o palco mostra o retrato oficial da Gisele com estados visuais (falando / ouvindo / pensando) sincronizados ao áudio da voz clonada que já está configurada.

O registro de vídeos é uma tabela simples (curso, unidade, etapa, URL, legenda), então você grava e publica no seu ritmo, sem tocar na interface. Trocar provedor de avatar ou de voz depois não exige refazer a aula.

## Progresso

Por aula ficam guardados: etapas concluídas, tentativas de fala, vocabulário e gramática praticados, feedback de pronúncia e fluência, resultado do challenge e um indicador simples de confiança. Na tela só aparece a barra de progresso e o resumo final — sem enxurrada de estatísticas. A conclusão da Live Lesson marca a mesma unidade como concluída no progresso do curso que já existe.

## Detalhes técnicos

- **Script**: `src/lib/live-lesson/script.ts` transforma um `CourseUnit` + `UnitPartKey` (tipos já existentes) num roteiro tipado de 9 estágios, reaproveitando `partPhrases`, `partChecks` e `partStepTitles`. A fala da instrutora de cada estágio é gerada sob demanda por `src/lib/live-lesson.functions.ts` (`requireFeature("gisele_ai")`), com prompt = `GISELE_AI_SYSTEM_PROMPT` + apenas o conteúdo daquela unidade, e cacheada por `unitCode:part:stage`.
- **Componentes** em `src/components/live-lesson/`: `LiveLesson`, `InstructorStage` (avatar), `InstructorMessage`, `StudentResponse`, `VoiceRecorder`, `FeedbackCard`, `VocabularyCard`, `GrammarCard`, `SpeakingChallenge`, `LessonProgress`, `LessonSummary`. Avatar/voz/STT entram por props e adapters (`avatar-provider.ts`, reutilizando `voice-client.ts`, `MicRecorder`, `/api/voice/*`), nunca hard-coded no componente de aula.
- **Feedback**: reaproveita `GiseleFeedbackSchema` e `gisele-feedback.server.ts`; nada de esquema novo.
- **Rotas**: `src/routes/_authenticated/live-lesson.$course.$unitCode.$part.tsx` com `FeatureGate feature="gisele_ai"`, mais o botão de entrada nas telas de unidade dos três cursos.
- **Banco**: `live_lesson_progress` (user_id, course, unit_code, part, stage, attempts, métricas, jsonb de feedback) e `live_lesson_media` (course, unit_code, part, stage, video_url, poster_url, caption). RLS por `auth.uid()` + GRANTs; mídia com leitura para `authenticated` e escrita só admin.
- **Testes**: novas funções e a rota entram em `entitlement-coverage.test.ts` provando bloqueio fora do Signature.

## Entrega em etapas

1. Arquitetura: tipos de roteiro, adapters de avatar/voz, componentes base e a rota com gate Signature.
2. Aula completa nos 9 estágios com fala, escuta, feedback e challenge, ligada ao progresso do curso.
3. Botões de entrada nas 120 unidades dos três cursos, tela admin para cadastrar os vídeos e o resumo final da aula.
