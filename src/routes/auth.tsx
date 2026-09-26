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
import { useT } from "@/lib/i18n";
import { LanguageSelector } from "@/components/LanguageSelector";
import logo from "@/assets/speak2co-logo.asset.json";

export const Route = createFileRoute("/auth")({
  
  head: () => ({
    meta: [
      { title: "Entrar ou criar conta — Speak2Co" },
      {
        name: "description",
        content:
          "Acesse a Speak2Co com e-mail, Google ou Apple e comece seu plano de inglês personalizado com AI Teacher.",
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


function AuthPage() {
  const navigate = useNavigate();
  const t = useT();
  const emailSchema = z.string().trim().email(t("auth.err.email")).max(255);
  const passwordSchema = z.string().min(6, t("auth.err.password")).max(72);
  const nameSchema = z.string().trim().min(2, t("auth.err.name")).max(100);
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
      const msg = error.message.toLowerCase();
      if (msg.includes("not confirmed")) {
        toast.error(t("auth.err.notConfirmed"));
        void supabase.auth.resend({
          type: "signup",
          email: parsed.data.email,
          options: { emailRedirectTo: window.location.origin },
        });
        return;
      }
      toast.error(t("auth.err.invalid"));
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
    if (error) {
      setLoading(false);
      if (error.message.toLowerCase().includes("already registered")) {
        toast.error(t("auth.err.exists"));
        return;
      }
      toast.error(error.message);
      return;
    }
    // E-mail já cadastrado: o Supabase devolve um usuário sem identidades.
    if (data.user && (data.user.identities?.length ?? 0) === 0) {
      setLoading(false);
      toast.error(t("auth.err.exists"));
      return;
    }
    if (data.session) {
      setLoading(false);
      navigate({ to: "/painel", replace: true });
      return;
    }
    // Com confirmação automática ativa, entramos direto após o cadastro.
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email: parsed.data.email,
      password: parsed.data.password,
    });
    setLoading(false);
    if (!signInError) {
      navigate({ to: "/painel", replace: true });
      return;
    }
    setSent(true);
  }


  async function handleForgotPassword() {
    const parsed = emailSchema.safeParse(email);
    if (!parsed.success) {
      toast.error(t("auth.err.resetEmail"));
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.resetPasswordForEmail(parsed.data, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    setLoading(false);
    if (error) {
      toast.error(t("auth.err.resetFail"));
      return;
    }
    toast.success(t("auth.resetSent"));
  }

  async function handleOAuth(provider: "google" | "apple") {
    setLoading(true);
    const result = await lovable.auth.signInWithOAuth(provider, {
      redirect_uri: window.location.origin,
    });
    if (result.error) {
      setLoading(false);
      toast.error(t("auth.err.oauth"));
      return;
    }
    if (result.redirected) return;
    navigate({ to: "/painel", replace: true });
  }

  return (
    <main className="surface-navy relative flex min-h-screen flex-col items-center justify-center px-6 py-16">
      <div className="absolute top-4 right-4 z-20 sm:top-6 sm:right-6">
        <LanguageSelector />
      </div>
      <Link to="/" className="mb-8">
        <img src={logo.url} alt="Logo Speak2Co" className="glow-gold h-28 w-28 rounded-full object-cover" />
      </Link>

      <div className="w-full max-w-md rounded-3xl border border-border bg-card/70 p-8 backdrop-blur">
        <h1 className="text-center text-2xl font-semibold">
          {t("auth.welcome")} <span className="text-foreground">Speak</span><span className="text-gold">2Co</span>

        </h1>

        <p className="mt-2 text-center text-sm text-muted-foreground">
          English for Every Opportunity
        </p>

        {sent ? (
          <p className="mt-8 text-center text-sm text-muted-foreground">
            {t("auth.confirmSent", { email })}
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
                {t("auth.google")}
              </Button>
              <Button
                type="button"
                variant="outline"
                disabled={loading}
                onClick={() => handleOAuth("apple")}
                className="rounded-full border-primary/40 bg-transparent text-foreground hover:bg-secondary"
              >
                {t("auth.apple")}
              </Button>
            </div>

            <div className="my-6 flex items-center gap-3 text-xs tracking-widest text-muted-foreground uppercase">
              <span className="h-px flex-1 bg-border" /> {t("auth.or")} <span className="h-px flex-1 bg-border" />
            </div>

            <Tabs defaultValue="signin">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="signin">{t("auth.tabSignIn")}</TabsTrigger>
                <TabsTrigger value="signup">{t("auth.tabSignUp")}</TabsTrigger>
              </TabsList>

              <TabsContent value="signin">
                <form onSubmit={handleSignIn} className="mt-6 grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="signin-email">{t("auth.email")}</Label>
                    <Input
                      id="signin-email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="signin-password">{t("auth.password")}</Label>
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
                    {t("buttons.signIn")}
                  </Button>
                  <button
                    type="button"
                    onClick={handleForgotPassword}
                    disabled={loading}
                    className="text-gold mt-1 text-center text-sm underline-offset-4 hover:underline"
                  >
                    {t("auth.forgotPassword")}
                  </button>
                </form>
              </TabsContent>

              <TabsContent value="signup">
                <form onSubmit={handleSignUp} className="mt-6 grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="signup-name">{t("auth.fullName")}</Label>
                    <Input
                      id="signup-name"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="signup-email">{t("auth.email")}</Label>
                    <Input
                      id="signup-email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="signup-password">{t("auth.password")}</Label>
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
                    {t("auth.createAccount")}
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
