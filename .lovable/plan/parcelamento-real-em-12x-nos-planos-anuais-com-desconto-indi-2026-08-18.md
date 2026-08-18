# Parcelamento real em 12x nos planos anuais (com desconto individual preservado)

Hoje o checkout usa a API de Assinaturas do Mercado Pago (preapproval), que cobra o valor anual de uma vez e **não** oferece parcelamento no cartão. O "12x" exibido na plataforma é apenas cálculo visual. Este plano troca o fluxo de cobrança dos três planos anuais para pagamento anual parcelado em até 12x, mantendo o desconto individual de 10% calculado no servidor.

## O que muda para o aluno

- Ao assinar Essential, Premium ou Signature, o aluno vai para um checkout do Mercado Pago onde pode escolher parcelar em até 12x no cartão (ou pagar à vista por Pix/boleto).
- Quem tem benefício individual vê o valor cheio riscado, o valor com desconto e a parcela resultante (ex.: Signature 579,00 → 521,10 → 12x de 43,43).
- O acesso vale por 12 meses. Não há débito automático: perto do vencimento a plataforma avisa e o aluno refaz a contratação.

## O que muda por dentro

1. **Novo caminho de checkout** — `createPreference` em `src/lib/mercadopago.server.ts` usando `POST /checkout/preferences` com um item único (valor final já com desconto), `payment_methods.installments: 12`, `external_reference` no mesmo formato atual e `back_urls` apontando para `https://speak2co.lovable.app/checkout-sucesso`.
2. **Preço continua server-side** — `startMercadoPagoCheckout` segue chamando `resolveCheckoutPricing(userId, planKey, valorOficial)`; o cliente nunca envia valor. O desconto é aplicado antes de montar a preference, então as parcelas incidem sobre o valor já descontado.
3. **Registro da assinatura** — grava em `subscriptions` com `provider: "mercadopago_preference"`, `status: "pending"`, `current_period_end = agora + 12 meses`, `cancel_at_period_end: true` (sem recorrência) e `raw` com preference + pricing.
4. **Webhook** — `src/routes/api/public/webhooks/mercadopago.ts` passa a tratar o tópico `payment` casando por `external_reference`: pagamento aprovado → `status: "authorized"`, confirma `current_period_end`, sincroniza o plano do perfil e registra em `subscription_events`. Mantém o tratamento de preapproval existente para assinaturas antigas.
5. **Renovação avisada** — `plan-sync.server.ts` já rebaixa para Free quando o período expira; acrescentar aviso na tela "Minha assinatura" quando faltarem 30 dias ou menos, com botão para renovar (novo checkout).
6. **Exibição** — `PlanPrice` e a tela de planos passam a mostrar "em até 12x de X sem juros no cartão" derivado do valor com desconto retornado por `getMyCheckoutPricing`, e o valor total com desconto ao lado do valor original riscado.
7. **Termos** — ajustar `buildSubscriptionTerms` (`src/lib/subscription-plans.ts`) para descrever renovação por nova contratação avisada, em vez de renovação automática.

## Compatibilidade

- Assinaturas preapproval já existentes continuam válidas e sendo atualizadas pelo webhook; nada é migrado à força.
- Cortesias (`courtesy`) continuam bloqueando o checkout, sem cobrança.

## Verificação

- Checkout de teste com conta que tem o benefício de 10%: conferir que a preference sai com o valor descontado e que o Mercado Pago oferece 12 parcelas.
- Conferir gravação em `subscriptions` e `subscription_events`, e liberação do plano após pagamento aprovado.
