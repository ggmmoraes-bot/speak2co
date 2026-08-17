import { createFileRoute } from "@tanstack/react-router";
import { convertToModelMessages, streamText, type UIMessage } from "ai";
import {
  createLovableAiGatewayProvider,
  getLovableAiGatewayRunId,
  getLovableAiGatewayResponseHeaders,
  withLovableAiGatewayRunIdHeader,
} from "@/lib/ai-gateway.server";
import { verifyChatRequest } from "@/lib/chat-auth.server";
import { withGiselePersona } from "@/lib/gisele-ai-persona";
import { FOCUS_LABEL } from "@/lib/gisele-focus";
import type { GiseleFocus } from "@/lib/gisele.functions";

type SupportLanguage = "en" | "bilingual" | "pt";
type Body = {
  messages?: UIMessage[];
  threadId?: string;
  supportLanguage?: SupportLanguage;
  /** "voice" ativa o loop contínuo de conversa falada. */
  mode?: string;
};

/** Regras extras da conversa por voz: perguntar, escutar, adaptar e corrigir com suavidade. */
const VOICE_LOOP_RULES = `
MODO CONVERSA POR VOZ (loop contínuo — o aluno fala e ouve, sem digitar):
- Este é um diálogo falado e contínuo. Fale como uma mentora presente: acolhedora, direta e humana.
- Responda SEMPRE em 1-3 frases curtas e termine com UMA única pergunta aberta para o aluno continuar falando. Nunca faça duas perguntas de uma vez.
- Nada de listas, marcadores, títulos, emojis ou markdown: o texto será lido em voz alta. Escreva como se estivesse falando.
- ESCUTAR E INTERPRETAR: a mensagem do aluno vem de transcrição automática e pode ter erros. Interprete a intenção; se algo for realmente ambíguo, peça uma confirmação curta em vez de corrigir a transcrição.
- ADAPTAR O NÍVEL: calibre vocabulário, velocidade e complexidade pelo que o aluno acabou de produzir. Se ele hesitar ou errar muito, simplifique e dê apoio; se responder com fluência, aumente o desafio (tempos verbais, conectivos, opinião, follow-up).
- CORREÇÃO SUAVE (recast): no máximo UMA correção por turno, e só quando atrapalhar a comunicação ou for um erro recorrente. Repita naturalmente a frase certa ("Ah, you mean… ") e siga a conversa. Nunca interrompa o fluxo com aula de gramática, a menos que o aluno peça.
- ORIENTAÇÃO DE MENTORA: a cada poucos turnos, ofereça uma dica prática curta (uma expressão mais natural, uma palavra melhor, uma pronúncia) e peça para o aluno repetir usando-a.
- SILÊNCIO OU RESPOSTA MUITO CURTA: encoraje com uma pergunta mais fácil e um exemplo de resposta possível.
- Se a mensagem começar com "[Session start]", cumprimente em uma frase, diga o foco da sessão em poucas palavras e faça a primeira pergunta.
- Nunca envie o aluno para outra área da plataforma: tudo acontece aqui, na conversa com você.`;


const LANGUAGE_RULE: Record<SupportLanguage, string> = {
  en: "IDIOMA: fale exclusivamente em inglês, ajustando o vocabulário ao nível do aluno. Não traduza para português.",
  bilingual:
    "IDIOMA: fale PRINCIPALMENTE em inglês. Quando a instrução for importante e puder gerar dúvida, escreva a frase em inglês e uma tradução curta em português na linha de baixo, em itálico. Onde for óbvio, dispense a tradução.",
  pt: "IDIOMA: a prática (exemplos, frases-alvo, role plays) continua em inglês, mas explique regras, correções e instruções em português claro.",
};

export const Route = createFileRoute("/api/gisele-chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const body = (await request.json()) as Body;
        const messages = body.messages;
        const threadId = body.threadId;
        if (!Array.isArray(messages) || messages.length === 0) {
          return new Response("Mensagens são obrigatórias", { status: 400 });
        }
        if (!threadId) return new Response("threadId é obrigatório", { status: 400 });

        const auth = await verifyChatRequest(request);
        if (!auth.ok) return new Response(auth.message, { status: auth.status });
        const { supabase, userId } = auth;

        // Gisele AI é exclusiva do Signature — validado no servidor.
        const { checkFeatureAccess } = await import("@/lib/entitlements-access.server");
        const access = await checkFeatureAccess(supabase, userId, "gisele_ai");
        if (!access.allowed) {
          return new Response("A Gisele AI é exclusiva do plano Signature.", { status: 403 });
        }
        if (access.aiDailyMinutes != null && access.aiUsedSeconds >= access.aiDailyMinutes * 60) {
          return new Response(
            `Você já usou os ${access.aiDailyMinutes} minutos diários de IA do seu plano.`,
            { status: 429 },
          );
        }

        const { data: thread } = await supabase
          .from("chat_threads")
          .select("id, title, context")
          .eq("id", threadId)
          .eq("user_id", userId)
          .eq("product", "gisele")
          .maybeSingle();
        if (!thread) return new Response("Sessão não encontrada", { status: 404 });

        const { data: session } = await supabase
          .from("gisele_sessions")
          .select("focus, summary")
          .eq("thread_id", threadId)
          .eq("user_id", userId)
          .maybeSingle();

        const apiKey = process.env["LOVABLE_API_KEY"];
        if (!apiKey) return new Response("IA indisponível no momento", { status: 503 });

        const { buildStudentSnapshot, describeSnapshot } = await import(
          "@/lib/gisele-context.server"
        );
        const snapshot = await buildStudentSnapshot(supabase, userId);
        const focus = (session?.focus ?? "conversation") as GiseleFocus;
        const focusLabel = FOCUS_LABEL[focus] ?? FOCUS_LABEL.conversation;
        const supportLanguage: SupportLanguage =
          body.supportLanguage && body.supportLanguage in LANGUAGE_RULE
            ? body.supportLanguage
            : "bilingual";

        const system = withGiselePersona(
          `Esta é a experiência Signature "Gisele AI by Speak2Co" — a mentoria completa e exclusiva desse plano.

FOCO DESTA SESSÃO: ${focusLabel.en} — ${focusLabel.prompt}
${session?.summary ? `Contexto trazido pelo aluno: ${session.summary}` : ""}

${describeSnapshot(snapshot)}

COMO CONDUZIR:
- Siga o ciclo Diagnosticar → Propor → Praticar → Observar → Corrigir → Repetir → Consolidar → Avançar. Não entregue teoria longa: proponha prática e faça o aluno produzir inglês.
- ${LANGUAGE_RULE[supportLanguage]}
- No máximo 2 prioridades de correção por vez, em uma linha curta iniciada por "💡 Correction:".
- Use o progresso real acima para recomendar lições, módulos e materiais que existem na Speak2Co. Nunca invente conteúdo, notas ou certificados.
- Traga de volta os itens de revisão espaçada quando fizer sentido (recuperação ativa).
- Respostas curtas (1-4 frases) para manter o ritmo de conversa, exceto quando o aluno pedir explicação.
- O aluno pode pedir retry ou encerrar a sessão a qualquer momento — respeite imediatamente.
- Se houver áudio, lembre que a voz é gerada por IA.
${thread.context ? `\nCONTEXTO DA ATIVIDADE ESCOLHIDA PELO ALUNO: ${thread.context}\nSe esta for a primeira mensagem da sessão, apresente a situação em 1-2 frases e faça a primeira pergunta. Não corrija cada frase: priorize apenas o que atrapalha o objetivo desta atividade e, quando corrigir, siga o formato: o que foi bem, principal ponto a melhorar, como melhorar e convite para tentar de novo.` : ""}`,
        );

        const initialRunId = getLovableAiGatewayRunId(request);
        const gateway = createLovableAiGatewayProvider(apiKey, initialRunId);
        const result = streamText({
          model: gateway("google/gemini-3.6-flash"),
          system,
          messages: await convertToModelMessages(messages),
        });

        const titleIsDefault = thread.title === focusLabel.en;

        return withLovableAiGatewayRunIdHeader(
          result.toUIMessageStreamResponse({
            originalMessages: messages,
            onFinish: async ({ messages: finalMessages, responseMessage, isAborted }) => {
              if (isAborted) return;
              const lastUser = [...finalMessages].reverse().find((m) => m.role === "user");
              if (lastUser) {
                const { error } = await supabase.from("chat_messages").insert({
                  thread_id: threadId,
                  user_id: userId,
                  role: "user",
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  parts: lastUser.parts as any,
                });
                if (error) console.error("[gisele] user message insert failed", error.message);
              }
              const { error: assistantError } = await supabase.from("chat_messages").insert({
                thread_id: threadId,
                user_id: userId,
                role: "assistant",
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                parts: responseMessage.parts as any,
              });
              if (assistantError) {
                console.error("[gisele] assistant message insert failed", assistantError.message);
              }

              if (titleIsDefault && lastUser) {
                const firstText = lastUser.parts
                  .map((p) => (p.type === "text" ? p.text : ""))
                  .join("")
                  .trim();
                if (firstText) {
                  await supabase
                    .from("chat_threads")
                    .update({ title: `${focusLabel.en} · ${firstText.slice(0, 40)}` })
                    .eq("id", threadId)
                    .eq("user_id", userId);
                }
              }
            },
            headers: getLovableAiGatewayResponseHeaders(undefined, {
              ...(initialRunId ? { "X-Lovable-AIG-Run-ID": initialRunId } : {}),
            }),
          }),
          gateway,
        );
      },
    },
  },
});
