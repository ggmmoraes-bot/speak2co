# Gisele AI by Speak2Co — Experiência Signature

Gisele AI é o produto exclusivo do plano Signature: uma mentora digital que conhece o plano, o nível e o histórico do aluno em todo o ecossistema (Essential, Speak2 Travel, Speak2 Hire, Speak2 Fluency) e conduz o ciclo Diagnosticar → Propor → Praticar → Observar → Corrigir → Repetir → Consolidar → Avançar.

## 1. Nova rota `/gisele` (Signature)

Hub da mentora, protegido por `FeatureGate` no cliente e por verificação de plano no servidor:

- **Cabeçalho de mentoria**: foto/arte da Gisele AI, nível CEFR atual, plano, sequência de dias e aviso permanente de que a voz e as respostas são geradas por IA.
- **Painel "Your next step"**: 3 recomendações geradas a partir do progresso real (lição pendente, módulo de fluência do dia, ponto fraco de pronúncia, entrevista sugerida), cada uma com link direto para a tela do produto correspondente.
- **Sessões guiadas**: cartões de início rápido — Conversation, Pronunciation Coaching, Interview Prep, Travel Roleplay, Grammar Clinic, Vocabulary Review — que abrem uma conversa já configurada para aquele objetivo.
- **Consolidação (revisão espaçada)**: lista dos itens que a Gisele marcou para revisar, com data sugerida e botão "Practice now".
- **Progresso da mentoria**: resumo de sessões, minutos praticados e pontos corrigidos.

## 2. Conversa com a Gisele

- Reaproveita a infraestrutura de chat já existente (threads no banco, streaming, componentes `ai-elements`), com rota de thread própria `/gisele/$threadId` para que cada conversa tenha URL, recarregue corretamente e não misture mensagens.
- Sessões guiadas criam uma thread já com o objetivo definido; o aluno pode encerrar a sessão a qualquer momento e pedir para repetir (retry).
- Voz integrada: ouvir a Gisele (TTS) e responder falando (STT), com o mesmo motor de feedback de pronúncia já usado nos outros produtos.
- Padrão bilíngue da marca: inglês em destaque, português abaixo apenas quando ajuda.
- Ao final de cada sessão, a Gisele registra um resumo curto: o que foi praticado, o que corrigir e o que revisar depois.

## 3. Contexto e memória do aluno

- **Snapshot do aluno** montado no servidor a cada conversa: nível do teste de nivelamento, plano de estudos, progresso dos cursos, Travel, Hire e Fluency, histórico de pronúncia e ranking. Enviado como resumo compacto (não histórico bruto), para manter custo e latência sob controle.
- **Memória de mentoria** (nova tabela): pontos fortes, erros recorrentes, metas, itens para revisão espaçada e resumo de cada sessão. É o que faz a Gisele "lembrar" do aluno entre um dia e outro e alimenta o painel de próximos passos e a consolidação.
- **Conteúdo Speak2Co como fonte de verdade**: a Gisele consulta o catálogo real de lições, módulos e materiais para recomendar, em vez de inventar conteúdo.

## 4. Entradas contextuais nos produtos (Signature)

Botão "Ask Gisele" discreto dentro de curso, Speak2 Travel, Speak2 Hire e Speak2 Fluency, visível apenas no Signature, que abre a conversa já com o contexto daquela lição/módulo. Nos planos inferiores esse botão não aparece.

## 5. Nomenclatura e vitrine

- Remover a marca "Gisele AI" das telas de IA dos planos Free/Essential/Premium (Professor IA, feedback do Speak2Fluency, correção de pronúncia, Central de Mensagens) — elas continuam funcionando, apenas como recurso do produto. O tom e a pedagogia permanecem os mesmos internamente.
- Destacar Gisele AI como diferencial do Signature na página de planos, na comparação de planos e no card bloqueado do painel (com cadeado e CTA de upgrade).

## Detalhes técnicos

- Rotas: `src/routes/_authenticated/gisele.tsx` (layout + gate), `gisele.index.tsx` (hub), `gisele.$threadId.tsx` (conversa).
- Servidor: `src/lib/gisele.functions.ts` com `requireFeature("gisele_ai")` em todas as funções; endpoint de streaming `src/routes/api/gisele-chat.ts` validando `gisele_ai` e contabilizando quota na chave `ai_teacher` (Signature é ilimitado, mas o registro de uso é mantido).
- Contexto: `src/lib/gisele-context.server.ts` monta o snapshot lendo apenas com o cliente autenticado do próprio aluno (RLS), nunca com credencial administrativa.
- Persona: continua vindo de `src/lib/gisele-ai-persona.ts`, com camada extra de instruções da experiência Signature.
- Banco: tabela `gisele_memory` (user_id, tipo, conteúdo, revisar_em, origem) e `gisele_sessions` (thread, objetivo, resumo, duração) com RLS por `auth.uid()` e GRANTs correspondentes; threads reutilizam `chat_threads`/`chat_messages` com uma marcação de produto.
- Testes: adicionar os novos módulos e a rota de API à cobertura de `entitlement-coverage.test.ts`, garantindo bloqueio real fora do Signature.

## Entrega em etapas

1. Gate, rota `/gisele`, snapshot do aluno e conversa com streaming e voz.
2. Memória de mentoria, próximos passos e consolidação por revisão espaçada.
3. Entradas "Ask Gisele" nos produtos, ajuste de nomenclatura nos planos inferiores e vitrine na página de planos.
