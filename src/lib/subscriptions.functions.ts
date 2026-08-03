import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { z } from "zod";

const planKeySchema = z.object({ planKey: z.enum(["monthly", "yearly"]), origin: z.string().url().max(300) });

export const getMySubscription = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data, error } = await context.supabase
      .from("subscriptions")
      .select(
        "id, status, plan_label, amount, currency, init_point, next_payment_date, created_at, updated_at",
      )
      .eq("user_id", context.userId)
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();
    if (error) throw new Error(error.message);

    const { data: profile } = await context.supabase
      .from("profiles")
      .select("plan")
      .eq("id", context.userId)
      .maybeSingle();

    return { subscription: data, plan: profile?.plan ?? "free" };
  });

export const startMercadoPagoCheckout = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data) => planKeySchema.parse(data))
  .handler(async ({ data, context }) => {
    const { createPreapproval, MP_PLANS } = await import("@/lib/mercadopago.server");
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const email = (context.claims as { email?: string } | null)?.email;
    if (!email) throw new Error("Não foi possível identificar seu e-mail de cobrança.");

    const externalReference = `${context.userId}:${crypto.randomUUID()}`;
    const preapproval = await createPreapproval({
      planKey: data.planKey,
      payerEmail: email,
      externalReference,
      backUrl: `${data.origin}/premium`,
    });

    const plan = MP_PLANS[data.planKey];
    const { error } = await supabaseAdmin.from("subscriptions").insert({
      user_id: context.userId,
      provider: "mercadopago",
      preapproval_id: preapproval.id,
      external_reference: externalReference,
      status: preapproval.status ?? "pending",
      plan_label: plan.label,
      amount: plan.amount,
      currency: "BRL",
      init_point: preapproval.init_point ?? null,
      raw: JSON.parse(JSON.stringify(preapproval)),
    });
    if (error) throw new Error(error.message);

    if (!preapproval.init_point) throw new Error("O Mercado Pago não retornou o link de pagamento.");
    return { checkoutUrl: preapproval.init_point };
  });
