# Alerta da Fundadora + Practice Meetings reais

Duas entregas, na ordem abaixo.

## Parte 1 — Alerta da fundadora (Talk to the Founder)

Hoje, quando a IA não resolve a dúvida, a mensagem é marcada como "precisa da fundadora" no banco e fica apenas na conversa daquele aluno. Não existe nenhuma caixa de entrada sua nem aviso.

O que será criado:

1. **Caixa de entrada da fundadora** (rota nova, só para administradora)
   - Lista de todas as mensagens escaladas, mais recentes primeiro.
   - Cada item mostra: nome do aluno, plano, texto da dúvida, o que a IA respondeu, data.
   - Filtros: pendentes / respondidas.
   - Você responde direto por ali; a resposta aparece como "Gisele Moraes" na Central de mensagens do aluno.
   - Botão "marcar como resolvida".

2. **Badge de pendências** no painel/menu administrativo, com o número de mensagens aguardando você.

3. **Aviso por e-mail para ggm.moraes@gmail.com**
   - Disparado no momento em que uma mensagem é escalada.
   - Conteúdo: nome do aluno, a dúvida, link direto para a caixa de entrada.
   - Agrupamento simples: no máximo um e-mail a cada 15 minutos por aluno, para não lotar a caixa.
   - Requer configurar o envio de e-mails do projeto (domínio de envio). Se o domínio próprio não estiver pronto, o e-mail sai por um remetente padrão da plataforma até você validar o seu.

## Parte 2 — Practice Meetings reais

Hoje os encontros são cards fixos, sem data real, sem inscrição e sem nada acontecendo no horário.

O que será criado:

1. **Encontros com data e hora reais**, cadastrados por você numa tela de administração: título, descrição, nível-alvo, data/hora (fuso de São Paulo), duração, plano mínimo e vagas.

2. **Inscrição do aluno**: botão "Join this meeting", contador de vagas, "Cancelar inscrição", e a lista "Meus encontros" com contagem regressiva.

3. **Lembretes**: aviso na Central de mensagens 24 h antes e 15 min antes do encontro.

4. **Sala de atividade guiada por IA que abre no horário**
   - O card fica bloqueado até 10 minutos antes; então libera "Enter the room".
   - Dentro da sala, a plataforma conduz a atividade em etapas cronometradas: aquecimento, vocabulário do tema, rodada de fala com correção da IA, discussão e fechamento com feedback individual.
   - O aluno fala, a IA escuta, corrige e conduz para a próxima etapa — mesmo padrão pedagógico já usado na plataforma.
   - Ao terminar, o encontro entra no histórico do aluno com o feedback.

   Observação importante: não é videoconferência entre alunos. É uma sessão guiada individual que acontece no horário marcado do encontro, com o mesmo tema para todos e um mural da turma com as conquistas de quem participou. Videochamada ao vivo entre pessoas exigiria um serviço externo de vídeo e pode ser uma fase futura.

## Detalhes técnicos

- Novas tabelas: `practice_meetings` (evento), `practice_meeting_signups` (inscrição do aluno, com status e feedback da sessão). RLS: aluno lê encontros ativos e gerencia só a própria inscrição; escrita de eventos restrita a `has_role(admin)`.
- Caixa de entrada da fundadora: nova política de leitura em `founder_messages` para administradora (`has_role(auth.uid(), 'admin')`), além da política atual do próprio aluno, e server functions `listEscalatedMessages` / `replyAsFounder` protegidas por verificação de papel no servidor.
- E-mail: envio a partir de server function após o insert escalado, com deduplicação por janela de tempo gravada na própria linha da mensagem. Endereço de destino configurável, com padrão `ggm.moraes@gmail.com`.
- Sala guiada: reaproveita o motor de voz e feedback já existente (gravação, transcrição, resposta e relatório), com roteiro por etapas vindo do tema do encontro.
- Liberação por plano segue a tabela de planos atual; o mínimo por encontro é definido no cadastro.
