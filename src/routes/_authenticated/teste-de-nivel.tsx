import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  ListChecks,
  PenLine,
  Sparkles,
  Trash2,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FeatureGate } from "@/components/FeatureGate";
import {
  CEFR_ORDER,
  getCefrStage,
  LEVEL_DESCRIPTIONS,
  PLACEMENT_QUESTIONS,
  WRITING_PROMPT,
} from "@/lib/placement-content";
import {
  deletePlacementTest,
  finishPlacementTest,
  listPlacementTests,
  startPlacementTest,
  type PlacementTest,
} from "@/lib/placement.functions";

export const Route = createFileRoute("/_authenticated/teste-de-nivel")({
  head: () => ({
    meta: [
      { title: "Teste de nivelamento — Speak2Co" },
      {
        name: "description",
        content:
          "Descubra seu nível de inglês no quadro CEFR (A1 a C1) com 20 questões e uma redação avaliada pela IA da Speak2Co.",
      },
      { property: "og:title", content: "Teste de nivelamento — Speak2Co" },
      {
        property: "og:description",
        content: "20 questões + redação avaliada pela IA para descobrir seu nível de inglês.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <FeatureGate
      feature="placement_test"
      title="Teste de nivelamento CEFR"
      benefit="Descubra seu nível de inglês (A1 a C1) com 20 questões e uma redação avaliada pela IA."
      requiredPlan="Speak2Co All Access"
    >
      <PlacementPage />
    </FeatureGate>
  ),
});

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

const CEFR_LEVELS = [
  {
    code: "A1",
    name: "Beginner",
    description:
      "Consegue compreender e utilizar expressões familiares e frases muito simples para necessidades básicas.",
  },
  {
    code: "A2",
    name: "Elementary",
    description:
      "Consegue compreender frases e expressões frequentes relacionadas a informações pessoais, rotina, compras, trabalho e situações do cotidiano.",
  },
  {
    code: "B1",
    name: "Intermediate",
    description:
      "Consegue compreender os pontos principais de textos e situações familiares e se comunicar em situações do dia a dia, viagens, trabalho e estudos.",
  },
  {
    code: "B2",
    name: "Upper Intermediate",
    description:
      "Consegue compreender ideias principais de textos mais complexos, comunicar-se com maior fluência e interagir com falantes de inglês com relativa naturalidade.",
  },
  {
    code: "C1",
    name: "Advanced",
    description:
      "Consegue compreender textos longos e complexos, expressar-se com fluência e utilizar o idioma de forma eficaz para fins sociais, acadêmicos e profissionais.",
  },
  {
    code: "C2",
    name: "Proficient",
    description:
      "Consegue compreender praticamente tudo o que ouve ou lê e expressar-se de maneira espontânea, precisa e altamente fluente.",
  },
];

/** Explicação oficial do quadro CEFR, do A1 ao C2. */
function CefrExplainer() {
  return (
    <section className="mt-10 rounded-2xl border border-gold/30 bg-card/50 p-6 backdrop-blur">
      <p className="text-xs tracking-widest text-muted-foreground uppercase">Referência oficial</p>
      <h2 className="mt-1 text-xl font-semibold">
        <span className="text-foreground">CEFR</span>{" "}
        <span className="text-gold">— Common European Framework of Reference for Languages</span>
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        O CEFR é o quadro europeu comum de referência para línguas. Ele organiza a proficiência em
        seis níveis, do A1 ao C2, e é o padrão usado pela Speak2Co para definir seu nível e sua
        trilha de estudos.
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {CEFR_LEVELS.map((level) => (
          <article
            key={level.code}
            className="rounded-xl border border-border bg-background/40 p-4 transition hover:border-gold/50"
          >
            <div className="flex items-baseline gap-2">
              <span className="badge-gold rounded-full px-2.5 py-0.5 text-xs font-semibold text-gold">
                {level.code}
              </span>
              <span className="text-sm font-semibold text-foreground">{level.name}</span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              {level.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function PlacementPage() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const fetchTests = useServerFn(listPlacementTests);
  const startTest = useServerFn(startPlacementTest);
  const finishTest = useServerFn(finishPlacementTest);
  const removeTest = useServerFn(deletePlacementTest);

  const [activeTestId, setActiveTestId] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [writing, setWriting] = useState("");
  const [step, setStep] = useState(0);
  const [starting, setStarting] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<PlacementTest | null>(null);

  const { data: tests } = useQuery<PlacementTest[]>({
    queryKey: ["placement-tests"],
    queryFn: () => fetchTests(),
  });

  const history = useMemo(() => (tests ?? []).filter((t) => t.completed), [tests]);
  const latest = history[0] ?? null;
  const total = PLACEMENT_QUESTIONS.length;
  const isWritingStep = step === total;
  const question = PLACEMENT_QUESTIONS[step];
  const answeredCount = Object.keys(answers).length;

  async function handleStart() {
    try {
      setStarting(true);
      const test = await startTest({});
      setActiveTestId(test.id);
      setAnswers({});
      setWriting("");
      setStep(0);
      setResult(null);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Não foi possível iniciar o teste.");
    } finally {
      setStarting(false);
    }
  }

  async function handleFinish() {
    if (!activeTestId) return;
    if (writing.trim().length < 20) {
      toast.error("Escreva pelo menos algumas frases em inglês antes de finalizar.");
      return;
    }
    try {
      setSubmitting(true);
      const test = await finishTest({
        data: { testId: activeTestId, answers, writingAnswer: writing },
      });
      setResult(test);
      setActiveTestId(null);
      if (test.planUpdated) {
        toast.success("Seu plano de estudos foi reajustado para o novo nível.");
      }
      await queryClient.invalidateQueries({ queryKey: ["placement-tests"] });
      await queryClient.invalidateQueries({ queryKey: ["profile"] });
      await queryClient.invalidateQueries({ queryKey: ["study-plan"] });
      await queryClient.invalidateQueries({ queryKey: ["plan-versions"] });
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Não foi possível avaliar seu teste.");
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete(testId: string) {
    try {
      await removeTest({ data: { testId } });
      await queryClient.invalidateQueries({ queryKey: ["placement-tests"] });
      if (result?.id === testId) setResult(null);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Não foi possível excluir o resultado.");
    }
  }

  const shown = result ?? latest;

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <Button asChild variant="ghost" size="sm" className="mb-6 -ml-2 rounded-full">
          <Link to="/painel">
            <ArrowLeft className="mr-1 h-4 w-4" /> Voltar ao painel
          </Link>
        </Button>

        <header className="flex flex-wrap items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-gold/40 bg-card/60 text-gold">
            <GraduationCap className="h-7 w-7" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold text-gold">Teste de nivelamento</h1>
            <p className="text-sm text-muted-foreground">
              20 questões de gramática, vocabulário e leitura + uma redação curta. A IA confirma seu
              nível no quadro CEFR (A1 a C1).
            </p>
          </div>
        </header>

        <CefrExplainer />

        {!activeTestId && (
          <section className="mt-10 rounded-2xl border border-border bg-card/60 p-6 backdrop-blur">
            {shown ? (
              <ResultView test={shown} />
            ) : (
              <div>
                <h2 className="text-lg font-semibold text-foreground">Faça seu teste de inglês</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Leva cerca de 10 minutos. Ao final, seu nível é salvo no perfil e usado para
                  personalizar o plano de estudos, os exercícios diários e o AI Teacher.
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <InfoCard icon={<ListChecks className="h-4 w-4" />} label="20 questões" value="A1 → C1" />
                  <InfoCard icon={<PenLine className="h-4 w-4" />} label="Redação" value="4 a 6 frases" />
                  <InfoCard icon={<Sparkles className="h-4 w-4" />} label="Avaliação" value="IA + CEFR" />
                </div>
              </div>
            )}
            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                onClick={handleStart}
                disabled={starting}
                className="rounded-full bg-gold font-semibold text-primary-foreground hover:opacity-90"
              >
                {starting ? "Preparing..." : shown ? "Retake test" : "Start test"}
              </Button>
              {shown && (
                <Button
                  variant="outline"
                  className="rounded-full"
                  onClick={() => navigate({ to: "/meu-plano" })}
                >
                  Ver meu plano de estudos
                </Button>
              )}
            </div>
          </section>
        )}

        {activeTestId && (
          <section className="mt-10 rounded-2xl border border-border bg-card/60 p-6 backdrop-blur">
            <div className="flex items-center justify-between text-xs tracking-widest text-muted-foreground uppercase">
              <span>{isWritingStep ? "Redação" : `Questão ${step + 1} de ${total}`}</span>
              <span>{answeredCount}/{total} respondidas</span>
            </div>
            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-gold transition-all"
                style={{ width: `${((step + (isWritingStep ? 1 : 0)) / (total + 1)) * 100}%` }}
              />
            </div>

            {isWritingStep ? (
              <div className="mt-6">
                <p className="text-sm font-medium text-foreground">{WRITING_PROMPT}</p>
                <Textarea
                  value={writing}
                  onChange={(event) => setWriting(event.target.value)}
                  placeholder="Write your answer in English..."
                  rows={8}
                  className="mt-3"
                />
                <p className="mt-2 text-xs text-muted-foreground">
                  {writing.trim().split(/\s+/).filter(Boolean).length} palavras
                </p>
              </div>
            ) : question ? (
              <div className="mt-6">
                <p className="text-xs tracking-wide text-muted-foreground uppercase">
                  {question.level} · {question.skill}
                </p>
                <p className="mt-2 text-base font-medium text-foreground">{question.prompt}</p>
                <div className="mt-4 grid gap-2">
                  {question.options.map((option, index) => {
                    const selected = answers[question.id] === index;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() =>
                          setAnswers((current) => ({ ...current, [question.id]: index }))
                        }
                        className={`rounded-xl border px-4 py-3 text-left text-sm transition ${
                          selected
                            ? "border-gold bg-gold/10 text-foreground"
                            : "border-border bg-background/40 text-foreground/80 hover:border-gold/50"
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : null}

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
              <Button
                variant="ghost"
                className="rounded-full"
                disabled={step === 0}
                onClick={() => setStep((s) => Math.max(0, s - 1))}
              >
                <ArrowLeft className="mr-1 h-4 w-4" /> Anterior
              </Button>
              {isWritingStep ? (
                <Button
                  onClick={handleFinish}
                  disabled={submitting}
                  className="rounded-full bg-gold font-semibold text-primary-foreground hover:opacity-90"
                >
                  {submitting ? "Avaliando com a IA..." : "Finalizar e ver meu nível"}
                </Button>
              ) : (
                <Button
                  onClick={() => setStep((s) => Math.min(total, s + 1))}
                  disabled={question ? answers[question.id] === undefined : false}
                  className="rounded-full bg-gold font-semibold text-primary-foreground hover:opacity-90"
                >
                  Próxima <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              )}
            </div>
          </section>
        )}

        <section className="mt-12">
          <h2 className="text-xs tracking-widest text-muted-foreground uppercase">
            Histórico de testes
          </h2>
          {history.length === 0 ? (
            <p className="mt-4 text-sm text-muted-foreground">
              Você ainda não concluiu nenhum teste de nivelamento.
            </p>
          ) : (
            <ul className="mt-4 grid gap-3">
              {history.map((test) => (
                <li
                  key={test.id}
                  className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-card/60 p-4"
                >
                  <div>
                    <p className="font-semibold text-foreground">
                      Nível {test.level ?? "—"}
                      <span className="ml-2 text-sm font-normal text-muted-foreground">
                        {test.correct_count}/{test.total_questions} acertos · {test.score ?? 0}%
                      </span>
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {formatDate(test.completed_at ?? test.created_at)}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="rounded-full" onClick={() => setResult(test)}>
                      Ver resultado
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full"
                      onClick={() => handleDelete(test.id)}
                      aria-label="Excluir resultado"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
}

function InfoCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-background/40 p-4">
      <div className="flex items-center gap-2 text-gold">
        {icon}
        <span className="text-xs tracking-wide uppercase">{label}</span>
      </div>
      <p className="mt-1 text-sm font-semibold text-foreground">{value}</p>
    </div>
  );
}

function ResultView({ test }: { test: PlacementTest }) {
  const feedback = test.feedback;
  const stage = getCefrStage(test.level);
  return (
    <div>
      <p className="text-xs tracking-widest text-muted-foreground uppercase">Seu resultado</p>
      <div className="mt-2 flex flex-wrap items-end gap-4">
        <span className="text-5xl font-bold text-gold">{test.level ?? "—"}</span>
        <span className="pb-2 text-sm text-muted-foreground">
          {test.correct_count}/{test.total_questions} acertos · {test.score ?? 0}%
        </span>
      </div>
      {stage && (
        <div className="mt-4 rounded-xl border border-gold/40 bg-gold/10 p-4">
          <p className="text-xs tracking-widest text-gold uppercase">Estágio Speak2Co</p>
          <p className="mt-1 text-lg font-semibold text-foreground">
            {stage.name} <span className="text-muted-foreground">({stage.range})</span>
          </p>
          <p className="mt-1 text-sm text-foreground/80">{stage.headline}</p>
        </div>
      )}
      {test.level && (
        <p className="mt-3 text-sm text-foreground/80">{LEVEL_DESCRIPTIONS[test.level]}</p>
      )}

      <div className="mt-4 flex gap-1">
        {CEFR_ORDER.map((level) => (
          <div
            key={level}
            className={`flex-1 rounded-lg border px-2 py-1.5 text-center text-xs ${
              level === test.level
                ? "border-gold bg-gold/15 font-semibold text-gold"
                : "border-border text-muted-foreground"
            }`}
          >
            {level}
          </div>
        ))}
      </div>


      {feedback && (
        <div className="mt-6 grid gap-4">
          <p className="text-sm text-foreground/80">{feedback.summary}</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <FeedbackList title="Pontos fortes" items={feedback.strengths} />
            <FeedbackList title="Focar agora" items={feedback.focus} />
          </div>
          <div className="rounded-xl border border-border bg-background/40 p-4">
            <p className="text-xs tracking-wide text-muted-foreground uppercase">Sua redação</p>
            <p className="mt-2 text-sm text-foreground/80">{feedback.writingFeedback}</p>
            <p className="mt-3 text-xs tracking-wide text-muted-foreground uppercase">
              Versão modelo em inglês
            </p>
            <p className="mt-1 text-sm text-foreground/90 italic">{feedback.writingRewrite}</p>
          </div>
          <FeedbackList title="Próximos passos" items={feedback.nextSteps} />
        </div>
      )}
    </div>
  );
}

function FeedbackList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-xl border border-border bg-background/40 p-4">
      <p className="text-xs tracking-wide text-muted-foreground uppercase">{title}</p>
      <ul className="mt-2 grid gap-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm text-foreground/80">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
