import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useT } from "@/lib/i18n";
import { LanguageSelector } from "@/components/LanguageSelector";
import logo from "@/assets/speak2co-logo.asset.json";

export const Route = createFileRoute("/reset-password")({
  head: () => ({
    meta: [
      { title: "Redefinir senha — Speak2Co" },
      {
        name: "description",
        content: "Crie uma nova senha para acessar sua conta Speak2Co e continuar seu plano de inglês personalizado.",
      },
      { property: "og:title", content: "Redefinir senha — Speak2Co" },
      { property: "og:description", content: "Defina uma nova senha de acesso à sua conta Speak2Co." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ResetPasswordPage,
});


function ResetPasswordPage() {
  const navigate = useNavigate();
  const t = useT();
  const passwordSchema = z.string().min(6, t("auth.err.password")).max(72);
  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY" || event === "SIGNED_IN") setReady(true);
    });
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) setReady(true);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = passwordSchema.safeParse(password);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]!.message);
      return;
    }
    if (password !== confirm) {
      toast.error(t("reset.mismatch"));
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password: parsed.data });
    setLoading(false);
    if (error) {
      const msg = error.message.toLowerCase();
      if (msg.includes("different from the old password") || msg.includes("same_password")) {
        toast.error(t("reset.same"));
      } else if (msg.includes("should be at least") || msg.includes("weak")) {
        toast.error(t("reset.weak"));
      } else if (
        msg.includes("session") ||
        msg.includes("expired") ||
        msg.includes("token") ||
        msg.includes("not found")
      ) {
        toast.error(t("reset.expired"));
      } else {
        toast.error(error.message);
      }
      return;
    }
    toast.success(t("reset.success"));
    navigate({ to: "/painel", replace: true });
  }

  return (
    <main className="surface-navy relative flex min-h-screen flex-col items-center justify-center px-6 py-16">
      <div className="absolute top-4 right-4 z-20 sm:top-6 sm:right-6">
        <LanguageSelector />
      </div>
      <Link to="/" className="mb-8">
        <img src={logo.url} alt="Logo Speak2Co" className="glow-gold h-24 w-24 rounded-full object-cover" />
      </Link>

      <div className="w-full max-w-md rounded-3xl border border-border bg-card/70 p-8 backdrop-blur">
        <h1 className="text-center text-2xl font-semibold">{t("reset.title")}</h1>
        <p className="mt-2 text-center text-sm text-muted-foreground">
          {ready
            ? t("reset.ready")
            : t("reset.notReady")}
        </p>

        <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="new-password">{t("reset.new")}</Label>
            <Input
              id="new-password"
              type="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="confirm-password">{t("reset.confirm")}</Label>
            <Input
              id="confirm-password"
              type="password"
              autoComplete="new-password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />
          </div>
          <Button
            type="submit"
            disabled={loading || !ready}
            className="bg-gold text-primary-foreground glow-gold mt-2 rounded-full font-semibold hover:opacity-90"
          >
            {t("reset.save")}
          </Button>
        </form>

        <div className="mt-6 text-center text-sm">
          <Link to="/auth" className="text-gold underline-offset-4 hover:underline">
            {t("reset.back")}
          </Link>
        </div>
      </div>
    </main>
  );
}
