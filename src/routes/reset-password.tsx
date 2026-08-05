import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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

const passwordSchema = z.string().min(6, "A senha precisa ter ao menos 6 caracteres").max(72);

function ResetPasswordPage() {
  const navigate = useNavigate();
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
      toast.error("As senhas não coincidem.");
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password: parsed.data });
    setLoading(false);
    if (error) {
      toast.error("Não foi possível redefinir a senha. Solicite um novo link.");
      return;
    }
    toast.success("Senha atualizada com sucesso!");
    navigate({ to: "/painel", replace: true });
  }

  return (
    <main className="surface-navy flex min-h-screen flex-col items-center justify-center px-6 py-16">
      <Link to="/" className="mb-8">
        <img src={logo.url} alt="Logo Speak2Co" className="glow-gold h-24 w-24 rounded-full object-cover" />
      </Link>

      <div className="w-full max-w-md rounded-3xl border border-border bg-card/70 p-8 backdrop-blur">
        <h1 className="text-center text-2xl font-semibold">Redefinir senha</h1>
        <p className="mt-2 text-center text-sm text-muted-foreground">
          {ready
            ? "Escolha uma nova senha para acessar sua conta."
            : "Abra esta página pelo link enviado ao seu e-mail para redefinir a senha."}
        </p>

        <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="new-password">Nova senha</Label>
            <Input
              id="new-password"
              type="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="confirm-password">Confirmar nova senha</Label>
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
            Salvar nova senha
          </Button>
        </form>

        <div className="mt-6 text-center text-sm">
          <Link to="/auth" className="text-gold underline-offset-4 hover:underline">
            Voltar para o login
          </Link>
        </div>
      </div>
    </main>
  );
}
