import type { Database } from "@/integrations/supabase/types";

type EventInsert = Database["public"]["Tables"]["subscription_events"]["Insert"];

export type SubscriptionEventType =
  | "checkout_created"
  | "subscription_authorized"
  | "subscription_pending"
  | "subscription_paused"
  | "subscription_cancelled"
  | "subscription_renewed"
  | "webhook_received"
  | "webhook_rejected"
  | "webhook_ignored"
  | "plan_updated";

export function eventTypeFromStatus(status: string | null | undefined): SubscriptionEventType {
  switch (status) {
    case "authorized":
      return "subscription_authorized";
    case "paused":
      return "subscription_paused";
    case "cancelled":
      return "subscription_cancelled";
    case "pending":
      return "subscription_pending";
    default:
      return "webhook_received";
  }
}

/** Best-effort audit log: never let logging break the payment flow. */
export async function logSubscriptionEvent(event: EventInsert) {
  try {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    await supabaseAdmin.from("subscription_events").insert(event);
  } catch (error) {
    console.error("[subscription_events] failed to log event", error);
  }
}
