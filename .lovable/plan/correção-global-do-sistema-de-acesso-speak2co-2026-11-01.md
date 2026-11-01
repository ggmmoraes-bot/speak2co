# Correção global do sistema de acesso — Speak2Co

## Estado atual (diagnóstico)

O modelo vitalício já está implementado no backend: plano `complete` (All Access, R$ 97,90) ativo no banco, produtos individuais vitalícios (`speak2hire/fluency/travel_lifetime`) via `owned_product_features`, webhook com `current_period_end = NULL`, e 94 testes de acesso vitalício passando. Os planos antigos (`essential`, `premium`, `signature`) já estão `is_active = false` no banco, com `plan_features` preservadas para alunas legadas.

O que falta é remover as referências visuais e textuais aos planos antigos e alinhar os termos comerciais ao modelo vitalício.

## O que será feito

### 1. Banco de dados (migração pequena)
- Renomear o nome de exibição do plano `complete` de "Speak2Co Complete" para "Speak2Co All Access".
- Renomear o nome de exibição do plano `free` para "Cadastro Gratuito".
- Manter as linhas `essential`/`premium`/`signature` (inativas) e suas `plan_features` — é o que preserva o acesso de alunas legadas com compra válida.
- Nenhuma mudança em preços, chaves de checkout ou integrações de pagamento.

### 2. Central de permissões (sem reconstrução)
- A lógica central (`entitlements-access.server.ts`, `has_feature`, `owned_product_features`, `current_plan_tier`) já implementa as regras do documento: gratuito = cadastro; All Access = cursos e recursos gerais; produto individual = só o produto comprado; admin = tudo. Não será reescrita.
- All Access não inclui as product lines (vendidas à parte por R$ 19,90) — conforme o modelo comercial atual.

### 3. Telas e textos
- `src/lib/home-hub.ts`: substituir as etiquetas "Essential/Premium/Signature" dos cards por "All Access", nome do produto ou "Cadastro Gratuito". **Seção Support & Community intocada** (continua liberada desde o cadastro gratuito).
- `src/components/HubCard.tsx`, `EcosystemCard.tsx`, `ProductLineRow.tsx`: atualizar os tipos/rótulos de plano exibidos nos cards.
- `src/lib/subscription-plans.ts`: manter `PLAN_META`/`PLAN_BENEFITS` legados (reconhecimento de alunas antigas), mas reescrever `buildSubscriptionTerms` para a linguagem de pagamento único e acesso vitalício (hoje fala em contratação anual e renovação automática).
- `src/routes/_authenticated/premium.tsx` e `upgrade.essential.tsx`: páginas de upgrade dos planos antigos — redirecionar para a página de planos atual.
- `meu-plano.tsx` / `assinatura.tsx`: atualizar rótulos; renomear "My Subscription" para "My Access" (só o título, sem alterar funcionalidades).

### 4. Verificação
- Rodar os testes existentes de acesso vitalício e adicionar teste pequeno se alguma regra mudar.
- Varredura final com busca por "Essential", "Premium", "Signature", "Free" nas telas e regras.
- Conferir o build.

## Fora de escopo
- Design, conteúdo pedagógico, integrações de pagamento, valores comerciais.
- Nenhum acesso pago concedido automaticamente a usuários antigos sem registro de compra.
- Support & Community permanece como está.
