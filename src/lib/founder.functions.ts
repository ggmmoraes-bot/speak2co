import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

export type FounderMessage = {
  id: string;
  role: "student" | "ai" | "founder";
  content: string;
  needs_founder: boolean;
  answered: boolean;
  created_at: string;
};

const SELECT = "id, role, content, needs_founder, answered, created_at";

/** Histórico da conversa do aluno com a Central de Mensagens. */
export const listFounderMessages = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }): Promise<FounderMessage[]> => {
    const { data, error } = await context.supabase
      .from("founder_messages")
      .select(SELECT)
      .eq("user_id", context.userId)
      .order("created_at", { ascending: true });
    if (error) throw new Error(error.message);
    return (data ?? []) as FounderMessage[];
  });

const KNOWLEDGE = `Você é a assistente oficial da plataforma Speak2Co, respondendo em nome da Central de Mensagens "Talk to the Founder" (fundadora: Gisele Moraes, Founder | English Mentor).
Responda em português, com tom acolhedor, curto e objetivo (máx. 6 linhas).

O que você sabe sobre a plataforma:
- Painel (Home): organizado em English Courses, Product Lines, AI Resources e Your Journey.
- English Courses: Beginner English Course (A1–A2) e Intermediate English Course (B1), ambos com 20 lições, avaliação final e certificado automático. Upper Intermediate (B2) está como Coming Soon.
- Product Lines: Speak2Hire (simulador de entrevistas) e Speak2Travel (inglês para viagens, materiais complementares e Trip Planner). Speak2Fluency está como Coming Soon.
- AI Resources: Professor IA (chat de prática em inglês) e GiseleAI by Speak2Co (Coming Soon, exclusivo do plano Signature).
- AI Pronunciation: em lições e materiais o aluno ouve a pronúncia nativa da IA, grava a própria voz e recebe feedback de Pronunciation, Stress, Intonation e Fluency.
- Planos: Free (degustação), Essential (cursos Beginner e Intermediate, plano de estudos completo), Premium (Product Lines e Professor IA ilimitado) e Signature (experiência VIP com GiseleAI). Troca de plano em "Minha assinatura" e na página Premium.
- Teste de nivelamento define o nível CEFR e alimenta o plano de estudos personalizado.
- Certificados ficam em "Meus certificados"; o ranking de fluência em "Ranking".

Se a pergunta for sobre reembolso, cobrança específica, problema de conta, parceria, feedback pessoal ou algo que você não sabe com certeza, responda com a primeira linha exatamente "ESCALATE" e depois uma frase avisando que a mensagem foi encaminhada para a Gisele.`;

/** Envia a mensagem do aluno e tenta responder automaticamente com a IA. */
export const sendFounderMessage = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z.object({ content: z.string().trim().min(2).max(2000) }).parse(input),
  )
  .handler(async ({ data, context }): Promise<FounderMessage[]> => {
    const { supabase, userId } = context;

    const history = await supabase
      .from("founder_messages")
      .select("role, content")
      .eq("user_id", userId)
      .order("created_at", { ascending: false })
      .limit(10);

    const { error: insertError } = await supabase
      .from("founder_messages")
      .insert({ user_id: userId, role: "student", content: data.content });
    if (insertError) throw new Error(insertError.message);

    let reply =
      "Recebemos sua mensagem! A Gisele vai responder por aqui em breve.";
    let escalate = true;

    const apiKey = process.env["LOVABLE_API_KEY"];
    if (apiKey) {
      try {
        const { createLovableAiGatewayProvider } = await import("@/lib/ai-gateway.server");
        const { generateText } = await import("ai");
        const gateway = createLovableAiGatewayProvider(apiKey);
        const priorTurns = (history.data ?? [])
          .slice()
          .reverse()
          .map((m) => `${m.role === "student" ? "Aluno" : "Speak2Co"}: ${m.content}`)
          .join("\n");
        const { text } = await generateText({
          model: gateway("google/gemini-3.6-flash"),
          system: KNOWLEDGE,
          prompt: `${priorTurns ? `Conversa anterior:\n${priorTurns}\n\n` : ""}Nova mensagem do aluno: ${data.content}`,
        });
        const clean = text.trim();
        escalate = clean.toUpperCase().startsWith("ESCALATE");
        const body = escalate ? clean.replace(/^escalate\s*/i, "").trim() : clean;
        if (body) reply = body;
      } catch (e) {
        console.error("[founder-chat]", e);
      }
    }

    const { error: replyError } = await supabase.from("founder_messages").insert({
      user_id: userId,
      role: "ai",
      content: reply,
      needs_founder: escalate,
    });
    if (replyError) throw new Error(replyError.message);

    const { data: all, error } = await supabase
      .from("founder_messages")
      .select(SELECT)
      .eq("user_id", userId)
      .order("created_at", { ascending: true });
    if (error) throw new Error(error.message);
    return (all ?? []) as FounderMessage[];
  });
