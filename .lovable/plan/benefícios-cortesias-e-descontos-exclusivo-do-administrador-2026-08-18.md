# Benefícios, Cortesias e Descontos (exclusivo do administrador)

Nova área **Benefícios e Assinaturas Especiais** dentro do painel administrativo, com concessão de Signature gratuito (cortesia) e desconto individual de 10% no Signature, aplicado no valor enviado ao Mercado Pago. Nada disso fica visível ou acessível para alunos.

## Como vai funcionar

### Para você (administradora)
- Nova aba no painel `/admin`: **Benefícios e Assinaturas Especiais**.
- Buscar a pessoa por nome ou e-mail e conceder:
  - **Cortesia** — Signature liberado sem cobrança, permanente ou com data de início e término.
  - **Desconto especial** — 10% (percentual configurável) no Signature, com validade, limite de uso e código opcional (ex.: `SIGNATURE10`).
- Tabela de acompanhamento: Usuário | E-mail | Benefício | Plano | Desconto | Validade | Status | Data de concessão.
- Botão **Revogar benefício** (nunca apaga: muda o status para Revogado e mantém tudo no histórico).
- Histórico de auditoria por benefício: quem concedeu, quando, o que mudou.

### Para o aluno
- Com cortesia ativa, a conta simplesmente mostra **Plano: Signature** e todos os recursos liberados, sem nenhuma menção a cortesia, administração ou desconto.
- Com desconto ativo, ao assinar o Signature o preço já aparece com o desconto e o Mercado Pago recebe exatamente esse valor final.
- Se o benefício expirar ou for revogado, o plano volta ao que a assinatura real determinar.

## Detalhes técnicos

**Banco (migração)**
- `public.benefit_grants`: `id`, `user_id`, `email_snapshot`, `kind` (`courtesy` | `discount`), `plan_key` (`signature`), `discount_percent`, `code` (opcional, único quando presente), `starts_at`, `ends_at` (nulo = permanente), `usage_limit`, `usage_count`, `status` (`active` | `inactive` | `revoked` | `expired`), `granted_by`, `created_at`, `updated_at`.
- `public.benefit_grant_events`: histórico imutável (`grant_id`, `action`, `payload` jsonb, `actor_id`, `created_at`).
- GRANTs: apenas `service_role` (as duas tabelas são lidas/escritas somente por funções de servidor com service role). RLS habilitada, **sem** policies para `anon`/`authenticated` — aluno nenhum enxerga ou altera as linhas.
- Função `public.active_courtesy_plan(user_uuid uuid)` (security definer) e ajuste em `public.current_plan_tier` para retornar o maior nível entre assinatura paga e cortesia ativa dentro da validade. `sync_expired_plans` passa a marcar cortesias vencidas como `expired`, devolvendo o aluno ao plano real.
- Nada muda nos preços de `plans` nem nas regras de Free/Essential/Premium.

**Servidor**
- `src/lib/benefits.server.ts`: validação canônica (autenticado, autorizado, ativo, dentro da validade, plano Signature, limite não atingido) e cálculo do preço final.
- `src/lib/benefits-admin.functions.ts`: `searchUsers`, `listBenefits`, `grantCourtesy`, `grantDiscount`, `updateBenefit`, `revokeBenefit`, `listBenefitHistory` — todas com `requireSupabaseAuth` + `assertAdmin` (já existente em `admin-guard.server.ts`), usando `supabaseAdmin` só depois de confirmar a role.
- `src/lib/benefits.functions.ts`: `getMyCheckoutPricing` — devolve preço original e preço final do usuário autenticado (usado só para exibição).
- `startMercadoPagoCheckout` em `src/lib/subscriptions.functions.ts`: o valor deixa de vir de `MP_PLANS` puro; o servidor recalcula o desconto a partir do `user_id` do token, ignora qualquer preço vindo do cliente, registra o uso (`usage_count`) e grava o benefício aplicado em `subscriptions.raw` / `subscription_events`. Cortesia ativa dispensa checkout (mensagem de plano já liberado).
- `createPreapproval` ganha um parâmetro opcional de valor já calculado, mantendo a recorrência anual com o mesmo valor com desconto.

**Interface**
- Nova aba em `src/routes/_authenticated/admin.tsx` (rota já protegida por gate de admin no servidor) com formulários de concessão, tabela e revogação.
- `src/routes/_authenticated/premium.tsx`: quando houver desconto válido, exibe preço original riscado e preço final — o valor de cobrança continua sendo decidido no servidor.

**Fora do escopo**: preços públicos, demais planos, qualquer outra funcionalidade da plataforma.
