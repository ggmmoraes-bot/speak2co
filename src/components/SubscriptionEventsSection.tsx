import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { getMySubscriptionEvents } from "@/lib/subscriptions.functions";
import type { SubscriptionEventView } from "@/lib/subscription-simulation";


const EVENT_LABEL: Record<string, { label: string; icon: string; tone: string }> = {
  checkout_created: { label: "Checkout criado", icon: "🧾", tone: "text-muted-foreground" },
  subscription_pending: { label: "Aguardando pagamento", icon: "⏳", tone: "text-muted-foreground" },
  subscription_authorized: { label: "Assinatura aprovada", icon: "✅", tone: "text-accent" },
  subscription_renewed: { label: "Renovação confirmada", icon: "🔁", tone: "text-accent" },
  subscription_paused: { label: "Assinatura pausada", icon: "⏸️", tone: "text-muted-foreground" },
  subscription_cancelled: { label: "Assinatura cancelada", icon: "🚫", tone: "text-destructive" },
  plan_updated: { label: "Plano atualizado", icon: "⭐", tone: "text-accent" },
  webhook_received: { label: "Notificação recebida", icon: "📩", tone: "text-muted-foreground" },
  webhook_ignored: { label: "Notificação ignorada", icon: "➖", tone: "text-muted-foreground" },
  webhook_rejected: { label: "Notificação recusada", icon: "⚠️", tone: "text-destructive" },
};

function formatDateTime(value: string) {
  return new Date(value).toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function SubscriptionEventsSection() {
  const fetchEvents = useServerFn(getMySubscriptionEvents);
  const { data, isPending } = useQuery({
    queryKey: ["subscription-events"],
    queryFn: () => fetchEvents(),
  });

  const events = data?.events ?? [];

  return (
    <section className="mt-12">
      <h2 className="text-xl font-semibold text-foreground">Histórico de eventos da assinatura</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Registro de tudo o que o Mercado Pago notificou: criação, aprovação, renovação e cancelamento —
        incluindo o momento exato em que o Premium foi liberado.
      </p>

      {isPending ? (
        <p className="mt-5 text-sm text-muted-foreground">Carregando eventos...</p>
      ) : events.length === 0 ? (
        <p className="mt-5 rounded-xl border border-border bg-card p-5 text-sm text-muted-foreground">
          Nenhum evento registrado ainda. Assim que um checkout for iniciado ou o Mercado Pago enviar
          uma notificação, ela aparece aqui.
        </p>
      ) : (
        <ol className="mt-5 space-y-3">
          {events.map((event) => {
            const meta = EVENT_LABEL[event.event_type] ?? {
              label: event.event_type,
              icon: "•",
              tone: "text-muted-foreground",
            };
            return (
              <li key={event.id} className="rounded-xl border border-border bg-card p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className={`flex items-center gap-2 font-semibold ${meta.tone}`}>
                    <span aria-hidden="true">{meta.icon}</span>
                    {meta.label}
                  </p>
                  <time className="text-xs text-muted-foreground" dateTime={event.created_at}>
                    {formatDateTime(event.created_at)}
                  </time>
                </div>
                {event.message && (
                  <p className="mt-2 text-sm text-muted-foreground">{event.message}</p>
                )}
                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                  {event.status && <span>Situação: {event.status}</span>}
                  {event.amount != null && (
                    <span>
                      Valor:{" "}
                      {Number(event.amount).toLocaleString("pt-BR", {
                        style: "currency",
                        currency: event.currency ?? "BRL",
                      })}
                    </span>
                  )}
                  {event.next_payment_date && (
                    <span>Próxima cobrança: {formatDateTime(event.next_payment_date)}</span>
                  )}
                  {event.preapproval_id && <span>ID: {event.preapproval_id}</span>}
                </div>
              </li>
            );
          })}
        </ol>
      )}
    </section>
  );
}
