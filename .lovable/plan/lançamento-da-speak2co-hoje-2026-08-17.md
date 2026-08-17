# Lançamento da Speak2Co hoje

Objetivo: colocar a versão atual no ar em speak2co.lovable.app com segurança, checar o fluxo real de cadastro e pagamento e deixar a plataforma pronta para receber os primeiros alunos.

## Etapa 1 — Verificação pré-lançamento (antes de publicar)

- Rodar a varredura de segurança atualizada (a última é de dias atrás) e só publicar se não houver achado crítico.
- Investigar e corrigir um erro de execução que aparece no preview (uma resposta de erro não tratada, provavelmente uma chamada protegida sem sessão) para o aluno nunca ver tela quebrada.
- Testar como aluno novo, do zero, em janela limpa:
  - abertura do link, capa, cadastro/login por Google e por e-mail;
  - teste de nivelamento e criação do plano de estudos;
  - AI Teacher com o limite diário de 20 minutos;
  - abertura de um recurso bloqueado (cadeado + tela de planos);
  - emissão de um certificado em PDF com a logomarca.

## Etapa 2 — Checagem de pagamento real

- Confirmar que o checkout anual (Essential R$ 430,80 / Premium R$ 479,00 / Signature R$ 579,00) abre corretamente no Mercado Pago em produção.
- Confirmar que o retorno do pagamento libera o plano automaticamente e que a tela "Minha assinatura" mostra o plano ativo.
- Se algum passo falhar, corrigir antes da divulgação (esse é o ponto que mais impacta venda no primeiro dia).

## Etapa 3 — Publicação

- Publicar a versão atual (o site já está publicado e público em speak2co.lovable.app).
- Conferir o site publicado abrindo o link em janela anônima: capa, login, painel e planos.
- Verificar título, descrição e imagem de pré-visualização do link ao compartilhar em WhatsApp/Instagram/LinkedIn.

## Etapa 4 — Material de divulgação (opcional, se você quiser)

- Uma página pública de apresentação/venda com o slogan "English for Every Opportunity", os quatro planos e chamada para o cadastro gratuito.
- Textos prontos para post e mensagem de WhatsApp com o link, para você copiar e colar.

## Detalhes técnicos

- Segurança: nova varredura completa; nenhum achado crítico pode ficar em aberto no momento da publicação.
- Erro de runtime: identificar a origem do `[object Response]` (provável 401 de função protegida chamada fora da sessão) e tratar com estado de carregamento/redirecionamento em vez de erro.
- Pagamentos: validação do fluxo Mercado Pago em produção (preferência anual, webhook assinado e ativação do plano em `subscriptions`/`profiles`).
- Publicação: deploy pelo fluxo padrão; alterações de backend já estão ativas, o front sobe no publish.
- SEO/compartilhamento: conferir `head()` das rotas públicas (título, descrição, og:image) para o link ficar bonito nas redes.

## Fora do escopo agora

- Domínio próprio (pode ser conectado depois em Configurações > Domínios).
- Novos produtos/conteúdos; hoje o foco é estabilidade, pagamento e divulgação.
