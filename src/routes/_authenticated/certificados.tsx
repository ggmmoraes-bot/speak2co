import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getCertificates, type Certificate } from "@/lib/certificates.functions";
import {
  DEFAULT_SIGNATURE_CAPTION,
  DEFAULT_SIGNATURE_TEXT,
  exportCertificateToPdf,
} from "@/lib/certificate-pdf";

const STORAGE_KEY = "speak2co:certificate-signature";

export const Route = createFileRoute("/_authenticated/certificados")({
  head: () => ({
    meta: [
      { title: "Meus certificados — Speak2Co" },
      {
        name: "description",
        content:
          "Emita certificados Speak2Co por nível CEFR, entrevistas do Speak2Hire, prática diária e conversação com o Professor IA.",
      },
      { property: "og:title", content: "Meus certificados — Speak2Co" },
      {
        property: "og:description",
        content: "Acompanhe seus marcos e baixe certificados em PDF na Speak2Co.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CertificadosPage,
});

function CertificadosPage() {
  const fetchCertificates = useServerFn(getCertificates);
  const { data, isLoading } = useQuery({
    queryKey: ["certificates"],
    queryFn: () => fetchCertificates(),
  });

  const [signatureText, setSignatureText] = useState(DEFAULT_SIGNATURE_TEXT);
  const [signatureCaption, setSignatureCaption] = useState(DEFAULT_SIGNATURE_CAPTION);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (!saved) return;
      const parsed = JSON.parse(saved) as {
        signatureText?: string;
        signatureCaption?: string;
      };
      if (typeof parsed.signatureText === "string") setSignatureText(parsed.signatureText);
      if (typeof parsed.signatureCaption === "string")
        setSignatureCaption(parsed.signatureCaption);
    } catch {
      /* ignore */
    }
  }, []);

  const persist = (next: { signatureText: string; signatureCaption: string }) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* ignore */
    }
  };

  const certificates = data?.certificates ?? [];
  const unlocked = certificates.filter((c) => c.unlocked).length;

  return (
    <main className="surface-navy min-h-screen px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <Button asChild variant="outline" className="rounded-full">
          <Link to="/painel">Voltar ao painel</Link>
        </Button>

        <h1 className="mt-8 text-3xl font-semibold sm:text-4xl">
          Meus <span className="text-gold">certificados</span>
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {isLoading
            ? "Carregando seus marcos..."
            : `${unlocked} de ${certificates.length} certificados liberados.`}
        </p>

        <section className="mt-8 rounded-2xl border border-border bg-card/60 p-6 backdrop-blur">
          <h2 className="text-lg font-semibold text-gold">Configurações do certificado</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Personalize a assinatura manuscrita e a linha de identificação impressas no PDF.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="signature-text">Assinatura (itálico manuscrito)</Label>
              <Input
                id="signature-text"
                value={signatureText}
                maxLength={40}
                placeholder={DEFAULT_SIGNATURE_TEXT}
                onChange={(e) => {
                  setSignatureText(e.target.value);
                  persist({ signatureText: e.target.value, signatureCaption });
                }}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="signature-caption">Texto abaixo da linha</Label>
              <Input
                id="signature-caption"
                value={signatureCaption}
                maxLength={80}
                placeholder={DEFAULT_SIGNATURE_CAPTION}
                onChange={(e) => {
                  setSignatureCaption(e.target.value);
                  persist({ signatureText, signatureCaption: e.target.value });
                }}
              />
            </div>
          </div>

          <div className="mt-5 rounded-xl border border-gold/30 bg-background/40 px-5 py-4 text-center">
            <p className="font-serif text-2xl italic text-gold">
              {signatureText || DEFAULT_SIGNATURE_TEXT}
            </p>
            <div className="mx-auto mt-1 h-px w-56 bg-gold/60" />
            <p className="mt-2 text-xs text-muted-foreground">
              {signatureCaption || DEFAULT_SIGNATURE_CAPTION}
            </p>
          </div>

          <Button
            variant="outline"
            className="mt-4 rounded-full"
            onClick={() => {
              setSignatureText(DEFAULT_SIGNATURE_TEXT);
              setSignatureCaption(DEFAULT_SIGNATURE_CAPTION);
              persist({
                signatureText: DEFAULT_SIGNATURE_TEXT,
                signatureCaption: DEFAULT_SIGNATURE_CAPTION,
              });
            }}
          >
            Restaurar padrão
          </Button>
        </section>

        <div className="mt-8 grid gap-5">
          {certificates.map((certificate) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
              studentName={data?.studentName ?? "Aluno Speak2Co"}
              signatureText={signatureText}
              signatureCaption={signatureCaption}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

function CertificateCard({
  certificate,
  studentName,
  signatureText,
  signatureCaption,
}: {
  certificate: Certificate;
  studentName: string;
  signatureText: string;
  signatureCaption: string;
}) {
  const percent = Math.round(certificate.progress * 100);

  return (
    <article className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs tracking-widest text-muted-foreground uppercase">
            {certificate.subtitle}
          </p>
          <h2 className="mt-1 text-xl font-semibold text-gold">{certificate.title}</h2>
        </div>
        <span
          className={`rounded-full border px-3 py-1 text-xs font-semibold ${
            certificate.unlocked
              ? "border-gold/50 text-gold"
              : "border-border text-muted-foreground"
          }`}
        >
          {certificate.unlocked ? "Liberado" : "Em progresso"}
        </span>
      </div>

      <p className="mt-3 text-sm text-muted-foreground">{certificate.description}</p>

      <div className="mt-4">
        <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
          <div className="h-full rounded-full bg-gold" style={{ width: `${percent}%` }} />
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          {certificate.detail ?? certificate.goalLabel} · {percent}%
        </p>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <Button
          disabled={!certificate.unlocked}
          onClick={() =>
            void exportCertificateToPdf({
              studentName,
              title: certificate.title,
              subtitle: certificate.subtitle,
              detail: certificate.detail,
              issuedAt: certificate.issuedAt,
              code: certificate.code,
              signatureText,
              signatureCaption,
            })
          }
          className="bg-gold text-primary-foreground glow-gold rounded-full font-semibold hover:opacity-90"
        >
          Baixar certificado em PDF
        </Button>
        {certificate.unlocked ? (
          <span className="text-xs text-muted-foreground">Código: {certificate.code}</span>
        ) : null}
      </div>
    </article>
  );
}
