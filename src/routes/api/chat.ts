import { createFileRoute } from "@tanstack/react-router";
import { convertToModelMessages, streamText, type UIMessage } from "ai";
import {
  createLovableAiGatewayProvider,
  getLovableAiGatewayRunId,
  getLovableAiGatewayResponseHeaders,
  withLovableAiGatewayRunIdHeader,
} from "@/lib/ai-gateway.server";
import { verifyChatRequest } from "@/lib/chat-auth.server";

type ChatRequestBody = {
  messages?: UIMessage[];
  threadId?: string;
};

const DEFAULT_TITLE = "Nova conversa";

function buildSystemPrompt(
  profile: {
    full_name: string | null;
    english_level: string | null;
    goal: string | null;
    target_level: string | null;
  },
  placementBlock: string,
  feedbackStyle: string,
) {
  const name = profile.full_name || "aluno";
  const level = profile.english_level || "indefinido";
  const goal = profile.goal || "melhorar o inglês geral";
  const target = profile.target_level || "avançado";

  return `Você é o Professor IA da Speak2Co, uma escola de inglês premium. Você conversa com o aluno ${name} para ajudá-lo a praticar inglês.

Contexto do aluno:
- Nível atual de inglês: ${level}
- Objetivo: ${goal}
- Nível desejado: ${target}

Resultado do teste de nivelamento:
${placementBlock}

Calibragem do feedback (siga à risca):
${feedbackStyle}

Diretrizes:
- Converse PRINCIPALMENTE em inglês, adaptando a complexidade ao nível do aluno (${level}). Use português brevemente só quando o aluno não entender.
- Priorize nas correções os pontos fracos apontados no teste de nivelamento.
- Seja encorajador, paciente e amigável — tom de professor particular premium.
- Corrija erros de gramática e vocabulário de forma natural: primeiro responda à mensagem, depois, quando útil, mostre a correção em uma linha curta com "💡 Correction:".
- Ajude com pronúncia descrevendo sons quando o aluno perguntar.
- Quando o aluno quiser simular uma situação (entrevista, viagem, restaurante), entre na cena e faça perguntas como o outro personagem.
- Mantenha as respostas concisas (1-3 frases normalmente) para manter o ritmo da conversa, exceto em explicações pedidas.`;
}

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const body = (await request.json()) as ChatRequestBody;
        const messages = body.messages;
        const threadId = body.threadId;
        if (!Array.isArray(messages) || messages.length === 0) {
          return new Response("Mensagens são obrigatórias", { status: 400 });
        }
        if (!threadId) {
          return new Response("threadId é obrigatório", { status: 400 });
        }

        const auth = await verifyChatRequest(request);
        if (!auth.ok) {
          return new Response(auth.message, { status: auth.status });
        }
        const { supabase, userId } = auth;

        // Verify the thread belongs to this user.
        const { data: thread } = await supabase
          .from("chat_threads")
          .select("id, title")
          .eq("id", threadId)
          .eq("user_id", userId)
          .maybeSingle();
        if (!thread) {
          return new Response("Conversa não encontrada", { status: 404 });
        }

        // Profile for personalization.
        const { data: profile } = await supabase
          .from("profiles")
          .select("full_name, english_level, goal, target_level")
          .eq("id", userId)
          .maybeSingle();

        const apiKey = process.env["LOVABLE_API_KEY"];
        if (!apiKey) {
          return new Response("IA indisponível no momento", { status: 503 });
        }

        const initialRunId = getLovableAiGatewayRunId(request);
        const gateway = createLovableAiGatewayProvider(apiKey, initialRunId);
        const result = streamText({
          model: gateway("google/gemini-3.6-flash"),
          system: buildSystemPrompt(profile ?? { full_name: null, english_level: null, goal: null, target_level: null }),
          messages: await convertToModelMessages(messages),
        });

        const threadTitleWasDefault = thread.title === DEFAULT_TITLE;

        return withLovableAiGatewayRunIdHeader(
          result.toUIMessageStreamResponse({
            originalMessages: messages,
            onFinish: async ({ messages: finalMessages, responseMessage, isAborted }) => {
              if (isAborted) return;
              const lastUser = [...finalMessages]
                .reverse()
                .find((m) => m.role === "user");
              if (lastUser) {
                await supabase.from("chat_messages").insert({
                  thread_id: threadId,
                  user_id: userId,
                  role: "user",
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  parts: lastUser.parts as any,
                });
              }
              await supabase.from("chat_messages").insert({
                thread_id: threadId,
                user_id: userId,
                role: "assistant",
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                parts: responseMessage.parts as any,
              });

              if (threadTitleWasDefault && lastUser) {
                const firstText = lastUser.parts
                  .map((p) => (p.type === "text" ? p.text : ""))
                  .join("")
                  .trim();
                const title = firstText ? firstText.slice(0, 60) : DEFAULT_TITLE;
                await supabase
                  .from("chat_threads")
                  .update({ title })
                  .eq("id", threadId)
                  .eq("user_id", userId);
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
