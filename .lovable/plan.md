# Atalho para a tela de vídeos da Live Lesson

Hoje a tela onde ficam as três estruturas de vídeo (Global, Aula, Etapa) só é acessível digitando o endereço `/admin-live-lesson`. O objetivo é deixá-la visível para a administradora.

## O que será feito

- Adicionar no painel administrativo um cartão/atalho "Vídeos da Live Lesson", junto dos atalhos já existentes (como Benefícios e Assinaturas Especiais), levando direto para a tela de cadastro de vídeos.
- O atalho descreve em uma linha o que a tela faz: cadastrar vídeo global reutilizável, vídeo de uma aula inteira ou vídeo de uma etapa, com o retrato + voz clonada como padrão quando não houver vídeo.
- Visível apenas para administradoras, seguindo a mesma proteção já usada nas demais seções do painel.

## Detalhe técnico

- Editar `src/routes/_authenticated/admin.tsx` para incluir um link (`Link` do TanStack Router) para `/admin-live-lesson`, reaproveitando o estilo dos atalhos existentes.
- Nenhuma alteração na lógica de vídeos, na Live Lesson ou no conteúdo dos cursos.
