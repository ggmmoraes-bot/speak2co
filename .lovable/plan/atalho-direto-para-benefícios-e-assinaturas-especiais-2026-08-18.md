# Atalho direto para "Benefícios e Assinaturas Especiais"

Hoje a seção existe no painel administrativo, mas fica no meio da página — é preciso rolar até encontrá-la. Este plano cria um caminho direto para ela.

## O que muda

- **Botão no seu painel (Home)**: ao lado de "Administração" aparece um botão **Benefícios** (visível apenas para a conta administradora) que abre o painel já posicionado na seção.
- **Atalho no topo do painel /admin**: uma linha de links rápidos, com "Benefícios e Assinaturas Especiais" em destaque, que rola direto até a seção.
- **Rolagem automática por link**: acessar `/admin#beneficios` leva direto ao bloco, com um breve realce dourado para indicar onde você chegou.

Nada disso fica visível para alunos — os botões só aparecem quando a role de administrador é confirmada no servidor, como já acontece hoje.

## Detalhes técnicos

- `src/components/admin/BenefitsSection.tsx`: adicionar `id="beneficios"` e `scroll-mt-24` na `<section>`.
- `src/routes/_authenticated/admin.tsx`: barra de atalhos no topo (âncoras) e `useEffect` que faz `scrollIntoView` quando `location.hash === "#beneficios"`.
- `src/routes/_authenticated/painel.tsx`: botão "Benefícios" com `<Link to="/admin" hash="beneficios">`, dentro da mesma condição `isAdminAccount && !previewPlan`.

Sem mudanças de banco, permissões ou regras de negócio.
