import { useState } from "react";
import { initializePaddle, getPaddlePriceId } from "@/lib/paddle";
import { supabase } from "@/integrations/supabase/client";

/** Abre o checkout internacional (cartão) do provedor de pagamentos. */
export function usePaddleCheckout() {
  const [loading, setLoading] = useState(false);

  const openCheckout = async (priceId: string) => {
    setLoading(true);
    try {
      const { data: auth } = await supabase.auth.getUser();
      const user = auth.user;
      if (!user) throw new Error("Faça login para assinar.");

      await initializePaddle();
      const paddlePriceId = await getPaddlePriceId(priceId);

      window.Paddle.Checkout.open({
        items: [{ priceId: paddlePriceId, quantity: 1 }],
        customer: user.email ? { email: user.email } : undefined,
        customData: { userId: user.id },
        settings: {
          displayMode: "overlay",
          variant: "one-page",
          allowLogout: false,
          successUrl: `${window.location.origin}/checkout-sucesso`,
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return { openCheckout, loading };
}
