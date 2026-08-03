import { createFileRoute } from "@tanstack/react-router";
import { createHmac, timingSafeEqual } from "crypto";

function verifySignature(params: {
  secret: string;
  signatureHeader: string | null;
  requestId: string | null;
  dataId: string | null;
}) {
  if (!params.signatureHeader) return false;
  const parts = Object.fromEntries(
    params.signatureHeader.split(",").map((p) => {
      const [k, ...rest] = p.split("=");
      return [(k ?? "").trim(), rest.join("=").trim()];
    }),
  ) as { ts?: string; v1?: string };
  if (!parts.ts || !parts.v1) return false;

  const manifest = `id:${(params.dataId ?? "").toLowerCase()};request-id:${params.requestId ?? ""};ts:${parts.ts};`;
  const expected = createHmac("sha256", params.secret).update(manifest).digest("hex");
  const a = Buffer.from(expected);
  const b = Buffer.from(parts.v1);
  return a.length === b.length && timingSafeEqual(a, b);
}

export const Route = createFileRoute("/api/public/webhooks/mercadopago")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const secret = process.env["MERCADOPAGO_WEBHOOK_SECRET"];
        if (!secret) return new Response("Not configured", { status: 503 });

        const url = new URL(request.url);
        const body = await request.text();
        let payload: { type?: string; action?: string; data?: { id?: string } } = {};
        try {
          payload = JSON.parse(body) as typeof payload;
        } catch {
          return new Response("Invalid body", { status: 400 });
        }

        const dataId = payload.data?.id ?? url.searchParams.get("data.id") ?? url.searchParams.get("id");
        const valid = verifySignature({
          secret,
          signatureHeader: request.headers.get("x-signature"),
          requestId: request.headers.get("x-request-id"),
          dataId,
        });
        if (!valid) return new Response("Invalid signature", { status: 401 });

        const topic = payload.type ?? payload.action ?? url.searchParams.get("type") ?? "";
        if (!dataId || !topic.includes("preapproval")) return new Response("ignored");

        const { getPreapproval } = await import("@/lib/mercadopago.server");
        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

        const preapproval = await getPreapproval(dataId);
        const userId = (preapproval.external_reference ?? "").split(":")[0];

        await supabaseAdmin
          .from("subscriptions")
          .update({
            status: preapproval.status,
            raw: JSON.parse(JSON.stringify(preapproval)),
          })
          .eq("preapproval_id", preapproval.id);

        if (userId) {
          const plan = preapproval.status === "authorized" ? "premium" : "free";
          await supabaseAdmin.from("profiles").update({ plan }).eq("id", userId);
        }

        return new Response("ok");
      },
    },
  },
});
