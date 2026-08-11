import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { Loader2, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useAccess, hasFeature, FEATURE_KEYS } from "@/lib/entitlements";
import { createGiseleThread, type GiseleFocus } from "@/lib/gisele.functions";

/**
 * Atalho "Ask GiseleAI" dentro dos sub-produtos.
 * Só aparece para quem tem o plano Signature (feature gisele_ai).
 */
export function AskGiseleButton({
  focus,
  contextNote,
  label = "Ask GiseleAI",
  className,
  variant = "outline",
  size = "sm",
}: {
  focus: GiseleFocus;
  contextNote?: string;
  label?: string;
  className?: string;
  variant?: "outline" | "secondary" | "ghost" | "default";
  size?: "sm" | "default";
}) {
  const { data: access } = useAccess();
  const navigate = useNavigate();
  const createFn = useServerFn(createGiseleThread);
  const [loading, setLoading] = useState(false);

  if (!access || !hasFeature(access, FEATURE_KEYS.giseleAi)) return null;

  async function start() {
    try {
      setLoading(true);
      const thread = await createFn({ data: { focus, contextNote } });
      await navigate({ to: "/gisele/$threadId", params: { threadId: thread.id } });
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Não foi possível abrir a mentoria.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Button
      type="button"
      size={size}
      variant={variant}
      onClick={start}
      disabled={loading}
      className={`gap-1 rounded-full text-xs ${className ?? ""}`}
    >
      {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4 text-gold" />}
      {label}
    </Button>
  );
}
