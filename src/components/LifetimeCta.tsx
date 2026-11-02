import { ShoppingBag } from "lucide-react";

/**
 * Label for the lifetime catalog CTA buttons.
 * - Primary (Speak2Co All Access): infinity symbol to emphasize lifetime,
 *   with the Portuguese translation underneath in a smaller font.
 * - Individual products: gold shopping-bag icon + "Buy".
 */
export function LifetimeCta({ primary }: { primary: boolean }) {
  if (!primary) {
    return (
      <span className="flex items-center justify-center gap-2">
        <ShoppingBag aria-hidden="true" className="h-4 w-4" />
        <span>Buy</span>
      </span>
    );
  }
  return (
    <span className="flex flex-col items-center justify-center leading-tight">
      <span className="flex items-center gap-1.5">
        <span aria-hidden="true" className="text-lg font-black">
          ∞
        </span>
        <span>Get lifetime access</span>
      </span>
      <span className="text-[10px] font-medium tracking-wide opacity-80 normal-case">
        Obtenha acesso vitalício
      </span>
    </span>
  );
}
