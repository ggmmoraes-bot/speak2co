import { createFileRoute } from "@tanstack/react-router";

// Diagnóstico temporário: valida a credencial do Mercado Pago sem expor o token.
export const Route = createFileRoute("/api/public/mp-health")({
  server: {
    handlers: {
      GET: async () => {
        const token = process.env["MERCADOPAGO_ACCESS_TOKEN"]?.trim();
        if (!token) return Response.json({ ok: false, reason: "missing" });
        const res = await fetch("https://api.mercadopago.com/users/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const body = await res.text();
        let site: string | null = null;
        try {
          site = (JSON.parse(body) as { site_id?: string }).site_id ?? null;
        } catch {
          site = null;
        }
        return Response.json({
          ok: res.ok,
          status: res.status,
          site,
          tokenLength: token.length,
          hint: res.ok ? null : body.slice(0, 200),
        });
      },
    },
  },
});
