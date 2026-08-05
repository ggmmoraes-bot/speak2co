import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import logo from "@/assets/speak2co-logo.asset.json";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Entrar ou criar conta — Speak2Co" },
      {
        name: "description",
        content:
          "Acesse a Speak2Co com e-mail, Google ou Apple e comece seu plano de inglês personalizado com professor de IA.",
      },
      { property: "og:title", content: "Entrar ou criar conta — Speak2Co" },
      {
        property: "og:description",
        content: "Login e cadastro de alunos Speak2Co: e-mail, Google ou Apple.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AuthPage,
});

const emailSchema = z.string().trim().email("Informe um e-mail válido").max(255);
const passwordSchema = z.string().min(6, "A senha precisa ter ao menos 6 caracteres").max(72);
const nameSchema = z.string().trim().min(2, "Informe seu nome completo").max(100);

function AuthPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate({ to: "/painel", replace: true });
    });
  }, [navigate]);

  async function handleSignIn(e: React.FormEvent) {
    e.preventDefault();
    const parsed = z.object({ email: emailSchema, password: passwordSchema }).safeParse({ email, password });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]!.message);
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword(parsed.data);
    setLoading(false);
    if (error) {
      toast.error("Não foi possível entrar. Verifique e-mail e senha.");
      return;
    }
    navigate({ to: "/painel", replace: true });
  }

  async function handleSignUp(e: React.FormEvent) {
    e.preventDefault();
    const parsed = z
      .object({ full_name: nameSchema, email: emailSchema, password: passwordSchema })
      .safeParse({ full_name: name, email, password });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]!.message);
      return;
    }
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email: parsed.data.email,
      password: parsed.data.password,
      options: {
        emailRedirectTo: window.location.origin,
        data: { full_name: parsed.data.full_name },
      },
    });
    setLoading(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    if (data.session) {
      navigate({ to: "/painel", replace: true });
      return;
    }
    setSent(true);
  }

  async function handleForgotPassword() {
    const parsed = emailSchema.safeParse(email);
    if (!parsed.success) {
      toast.error("Informe seu e-mail no campo acima para redefinir a senha.");
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.resetPasswordForEmail(parsed.data, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    setLoading(false);
    if (error) {
      toast.error("Não foi possível enviar o e-mail de redefinição. Tente novamente.");
      return;
    }
    toast.success("Enviamos um link de redefinição para o seu e-mail.");
  }

  async function handleOAuth(provider: "google" | "apple") {
    setLoading(true);
    const result = await lovable.auth.signInWithOAuth(provider, {
      redirect_uri: window.location.origin,
    });
    if (result.error) {
      setLoading(false);
      toast.error("Não foi possível conectar com esse provedor.");
      return;
    }
    if (result.redirected) return;
    navigate({ to: "/painel", replace: true });
  }

  return (
    <main className="surface-navy flex min-h-screen flex-col items-center justify-center px-6 py-16">
      <Link to="/" className="mb-8">
        <img src={logo.url} alt="Logo Speak2Co" className="glow-gold h-28 w-28 rounded-full object-cover" />
      </Link>

      <div className="w-full max-w-md rounded-3xl border border-border bg-card/70 p-8 backdrop-blur">
        <h1 className="text-center text-2xl font-semibold">
          Welcome to <span className="text-foreground">Speak</span><span className="text-gold">2Co</span>

        </h1>

        <p className="mt-2 text-center text-sm text-muted-foreground">
          English for Every Opportunity
        </p>

        {sent ? (
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Enviamos um e-mail de confirmação para <strong className="text-foreground">{email}</strong>.
            Confirme o cadastro para acessar sua conta.
          </p>
        ) : (
          <>
            <div className="mt-8 grid gap-3">
              <Button
                type="button"
                variant="outline"
                disabled={loading}
                onClick={() => handleOAuth("google")}
                className="rounded-full border-primary/40 bg-transparent text-foreground hover:bg-secondary"
              >
                Continuar com Google
              </Button>
              <Button
                type="button"
                variant="outline"
                disabled={loading}
                onClick={() => handleOAuth("apple")}
                className="rounded-full border-primary/40 bg-transparent text-foreground hover:bg-secondary"
              >
                Continuar com Apple
              </Button>
            </div>

            <div className="my-6 flex items-center gap-3 text-xs tracking-widest text-muted-foreground uppercase">
              <span className="h-px flex-1 bg-border" /> ou <span className="h-px flex-1 bg-border" />
            </div>

            <Tabs defaultValue="signin">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="signin">Entrar</TabsTrigger>
                <TabsTrigger value="signup">Criar conta</TabsTrigger>
              </TabsList>

              <TabsContent value="signin">
                <form onSubmit={handleSignIn} className="mt-6 grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="signin-email">E-mail</Label>
                    <Input
                      id="signin-email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="signin-password">Senha</Label>
                    <Input
                      id="signin-password"
                      type="password"
                      autoComplete="current-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={loading}
                    className="bg-gold text-primary-foreground glow-gold mt-2 rounded-full font-semibold hover:opacity-90"
                  >
                    Entrar
                  </Button>
                  <button
                    type="button"
                    onClick={handleForgotPassword}
                    disabled={loading}
                    className="text-gold mt-1 text-center text-sm underline-offset-4 hover:underline"
                  >
                    Esqueci minha senha
                  </button>
                </form>
              </TabsContent>

              <TabsContent value="signup">
                <form onSubmit={handleSignUp} className="mt-6 grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="signup-name">Nome completo</Label>
                    <Input
                      id="signup-name"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="signup-email">E-mail</Label>
                    <Input
                      id="signup-email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="signup-password">Senha</Label>
                    <Input
                      id="signup-password"
                      type="password"
                      autoComplete="new-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={loading}
                    className="bg-gold text-primary-foreground glow-gold mt-2 rounded-full font-semibold hover:opacity-90"
                  >
                    Criar minha conta
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </>
        )}
      </div>
    </main>
  );
}
