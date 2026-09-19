# Currículo Original Speak2Co — Beginner (60 aulas)

## Por que você não viu diferença

Só a Unidade 1 foi reescrita até agora. Na tela do curso (a lista de unidades) as outras 29 continuam exatamente como antes, então a página parece igual.

Para ver o que já mudou: abra **Unit 1 — First Contact — Say who you are** e entre em **Part 1 — Discover**. Lá estão a nova imagem de aquecimento, os personagens novos (Bruno, Helena e Ivan num coworking), o vocabulário, a gramática e as checagens autorais.

Se a Unidade 1 ainda aparecer com o título antigo aí no seu navegador, é cache da visualização: recarregue a página.

## O que faço em seguida

Reescrever as 29 unidades restantes (58 aulas) seguindo a matriz já aprovada internamente, em lotes, mantendo a interface e a navegação atuais.

Cada unidade ganha:
- Aquecimento com imagem própria da aula
- Contexto com diálogo original (elenco fixo de personagens da Speak2Co)
- Vocabulário com IPA, tradução e exemplo
- Expressões úteis do dia a dia
- Gramática com regra, exemplos e erros comuns
- Prática controlada, listening/reading com perguntas e quick check
- Part 2: revisão, atividades, desafio de comunicação e fechamento "I can…"

### Ordem dos lotes

1. Unidades 2–5 (bloco Identity)
2. Unidades 6–11 (Routine)
3. Unidades 12–16 (World around me)
4. Unidades 17–21 (Preferences & needs)
5. Unidades 22–26 (Now and then)
6. Unidades 27–30 (Ahead)

Depois de cada lote você pode conferir as unidades no curso antes de eu seguir.

## Regras mantidas

- Nada de copiar frases, diálogos, personagens, títulos ou imagens do material de referência — ele serve apenas como insumo pedagógico.
- Todos os botões e comandos da interface permanecem em inglês, com apoio em português no conteúdo.
- Códigos e identificadores das unidades não mudam, então o progresso já salvo das alunas continua válido.

## Detalhes técnicos

- Conteúdo em `src/lib/curriculum/beginner-units-1.ts` … `beginner-units-4.ts`, tipado por `CourseUnit`.
- Imagens novas em `src/assets/warmup/` e mapeadas em `src/lib/curriculum/warmup-images.ts` (`UNIT_IMAGES` por código de unidade).
- `code`, `discover.id` e `communicate.id` preservados para não invalidar `course_progress`.
- Sem alterações em rotas, planos, entitlements ou banco de dados.
