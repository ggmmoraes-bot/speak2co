import { createFileRoute } from "@tanstack/react-router";

/** Diagnóstico temporário do checkout Mercado Pago. */
export const Route = createFileRoute("/api/public/mp-diag")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url);
        if (url.searchParams.get("key") !== "s2c-diag") return new Response("no", { status: 404 });
        const token = process.env["MERCADOPAGO_ACCESS_TOKEN"]?.trim();
        if (!token) return Response.json({ error: "sem token" });

        const base = {
          reason: "Speak2Co Essential Anual",
          external_reference: "diag-1",
          payer_email: "teste.diag@example.com",
          back_url: "https://speak2co.lovable.app/checkout-sucesso",
          auto_recurring: {
            frequency: 12,
            frequency_type: "months",
            transaction_amount: 430.8,
            currency_id: "BRL",
          },
          status: "pending",
        };
        const variants: Array<{ name: string; body: Record<string, unknown> }> = [
          { name: "sem notification_url", body: base },
          {
            name: "notification_url sem query",
            body: { ...base, notification_url: "https://speak2co.lovable.app/api/public/webhooks/mercadopago" },
          },
          {
            name: "notification_url com token",
            body: {
              ...base,
              notification_url: `https://speak2co.lovable.app/api/public/webhooks/mercadopago?token=${encodeURIComponent(process.env["MERCADOPAGO_WEBHOOK_TOKEN"] ?? "x")}`,
            },
          },
        ];

        const results: unknown[] = [];
        for (const v of variants) {
          const r = await fetch("https://api.mercadopago.com/preapproval", {
            method: "POST",
            headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
            body: JSON.stringify(v.body),
          });
          results.push({ variant: v.name, status: r.status, body: (await r.text()).slice(0, 400) });
        }
        return Response.json({ results });
      },
    },
  },
});
