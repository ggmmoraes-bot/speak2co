import { useEffect, useMemo, useRef, useState } from "react";
import { CheckCircle2, RotateCcw, Volume2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { KidsUnit, KidsWord, QuickCheckQuestion } from "@/lib/speak2kids/curriculum";
import { passedQuickCheck } from "@/lib/speak2kids/progress";
import { cn } from "@/lib/utils";

/* ---------------- utilidades ---------------- */

function shuffle<T>(arr: T[], seed: number): T[] {
  const a = [...arr];
  let s = seed || 1;
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 9301 + 49297) % 233280;
    const j = Math.floor((s / 233280) * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Voz do próprio aparelho (Web Speech). Só aparece se houver voz em inglês instalada. */
export function useDeviceVoice() {
  const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null);
  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    const pick = () => setVoice(window.speechSynthesis.getVoices().find((v) => v.lang.startsWith("en")) ?? null);
    pick();
    window.speechSynthesis.addEventListener("voiceschanged", pick);
    return () => window.speechSynthesis.removeEventListener("voiceschanged", pick);
  }, []);
  const speak = (text: string) => {
    if (!voice) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.voice = voice;
    u.lang = voice.lang;
    u.rate = 0.85;
    window.speechSynthesis.speak(u);
  };
  return { available: !!voice, speak };
}

export function ListenButton({ text }: { text: string }) {
  const { available, speak } = useDeviceVoice();
  if (!available) return null;
  return (
    <button
      type="button"
      onClick={() => speak(text)}
      aria-label={`Listen: ${text}`}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-kids-sky/20 text-foreground hover:bg-kids-sky/40"
    >
      <Volume2 className="h-4 w-4" />
    </button>
  );
}

export function AudioNotice() {
  const { available } = useDeviceVoice();
  return (
    <p className="rounded-2xl bg-muted/50 px-4 py-2 text-xs text-muted-foreground">
      {available
        ? "🔊 O áudio usa a voz em inglês do seu aparelho. Nada é gravado."
        : "🔇 Áudio indisponível neste aparelho: leia as palavras em voz alta junto com um adulto. Nada é gravado."}
    </p>
  );
}

function DoneBanner({ onReset }: { onReset?: () => void }) {
  return (
    <div className="mt-4 flex items-center justify-between rounded-2xl bg-kids-mint/20 px-4 py-3 text-sm font-semibold text-foreground">
      <span>🌟 Great job!</span>
      {onReset && (
        <Button size="sm" variant="ghost" onClick={onReset}>
          <RotateCcw className="mr-1 h-4 w-4" /> Play again
        </Button>
      )}
    </div>
  );
}

const chip =
  "rounded-2xl border-2 px-4 py-3 text-base font-bold transition-all focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none";

/* ---------------- Flashcards ---------------- */

export function Flashcards({ words }: { words: KidsWord[] }) {
  const [flipped, setFlipped] = useState<string | null>(null);
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
      {words.map((w) => (
        <div key={w.en} className="flex flex-col items-center gap-2 rounded-3xl border-2 border-kids-sky/40 bg-card p-3 text-center">
          <button type="button" onClick={() => setFlipped(flipped === w.en ? null : w.en)} className="flex flex-col items-center">
            <span className="text-5xl" aria-hidden>{w.emoji}</span>
            <span className="mt-2 text-lg font-extrabold text-foreground">{w.en}</span>
            <span className="text-xs text-muted-foreground">{flipped === w.en ? w.pt : "Tap to see"}</span>
          </button>
          <ListenButton text={w.en} />
        </div>
      ))}
    </div>
  );
}

/* ---------------- Matching (tocar palavra e figura) ---------------- */

export function MatchGame({ words, onDone, seed = 1 }: { words: KidsWord[]; onDone?: () => void; seed?: number }) {
  const set = useMemo(() => shuffle(words, seed).slice(0, 5), [words, seed]);
  const pics = useMemo(() => shuffle(set, seed + 7), [set, seed]);
  const [sel, setSel] = useState<string | null>(null);
  const [matched, setMatched] = useState<string[]>([]);
  const [wrong, setWrong] = useState<string | null>(null);
  const done = matched.length === set.length;
  useEffect(() => { if (done) onDone?.(); }, [done]); // eslint-disable-line react-hooks/exhaustive-deps
  const tryPic = (en: string) => {
    if (!sel) return;
    if (sel === en) { setMatched((m) => [...m, en]); setSel(null); }
    else { setWrong(en); setTimeout(() => setWrong(null), 600); }
  };
  return (
    <div>
      <p className="mb-3 text-sm text-muted-foreground">Toque em uma palavra e depois na figura certa.</p>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-wrap gap-2">
          {set.map((w) => (
            <button key={w.en} type="button" disabled={matched.includes(w.en)} onClick={() => setSel(w.en)}
              className={cn(chip, matched.includes(w.en) ? "border-kids-mint bg-kids-mint/20 opacity-60" : sel === w.en ? "border-gold bg-gold/20" : "border-border bg-card")}>
              {w.en}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {pics.map((w) => (
            <button key={w.en} type="button" aria-label="picture" disabled={matched.includes(w.en)} onClick={() => tryPic(w.en)}
              className={cn(chip, "text-4xl", matched.includes(w.en) ? "border-kids-mint bg-kids-mint/20" : wrong === w.en ? "border-destructive bg-destructive/10" : "border-border bg-card")}>
              {w.emoji}
            </button>
          ))}
        </div>
      </div>
      {done && <DoneBanner onReset={() => setMatched([])} />}
    </div>
  );
}

/* ---------------- Counting ---------------- */

const NUM = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];

export function CountGame({ unit, onDone }: { unit: KidsUnit; onDone?: () => void }) {
  const rounds = useMemo(() => {
    const base = unit.n === 18 ? [{ en: "candle", emoji: "🕯️", pt: "" }] : unit.n === 4 ? [{ en: "balloon", emoji: "🎈", pt: "" }, { en: "star", emoji: "⭐", pt: "" }, { en: "apple", emoji: "🍎", pt: "" }] : unit.vocab.slice(0, 3);
    return [3, 5, 8].map((n, i) => ({ item: base[i % base.length], n }));
  }, [unit]);
  const [i, setI] = useState(0);
  const [msg, setMsg] = useState<string | null>(null);
  const r = rounds[i];
  const done = i >= rounds.length;
  useEffect(() => { if (done) onDone?.(); }, [done]); // eslint-disable-line react-hooks/exhaustive-deps
  if (done) return <DoneBanner onReset={() => setI(0)} />;
  const plural = (n: number) => (n === 1 ? r.item.en : `${r.item.en}s`);
  const opts = unit.n === 18
    ? [r.n - 1, r.n, r.n + 1].map((n) => `I am ${NUM[n]} years old.`)
    : unit.n === 6
      ? [`${NUM[r.n]} ${plural(r.n)}`, `${NUM[r.n]} ${r.item.en}`, `${NUM[r.n + 1]} ${plural(r.n + 1)}`]
      : [NUM[r.n - 1], NUM[r.n], NUM[r.n + 1]];
  const right = opts[unit.n === 6 ? 0 : 1];
  const shown = shuffle(opts, i + unit.n);
  return (
    <div>
      <p className="mb-2 text-lg font-bold">{unit.n === 18 ? "How old is she? Count the candles!" : `How many ${plural(2)}?`}</p>
      <div className="mb-4 flex flex-wrap gap-1 text-4xl" aria-label={`${r.n} items`}>{Array.from({ length: r.n }, (_, k) => <span key={k}>{r.item.emoji}</span>)}</div>
      <div className="flex flex-wrap gap-2">
        {shown.map((o) => (
          <button key={o} type="button" className={cn(chip, "border-border bg-card")}
            onClick={() => { if (o === right) { setMsg(null); setI(i + 1); } else setMsg("Oops! Count again 🙂"); }}>
            {o}
          </button>
        ))}
      </div>
      {msg && <p className="mt-2 text-sm font-semibold text-destructive">{msg}</p>}
    </div>
  );
}

/* ---------------- Sequencing ---------------- */

export function SequenceGame({ words, onDone }: { words: KidsWord[]; onDone?: () => void }) {
  const shuffled = useMemo(() => shuffle(words, 3), [words]);
  const [order, setOrder] = useState<string[]>([]);
  const [msg, setMsg] = useState<string | null>(null);
  const done = order.length === words.length;
  useEffect(() => { if (done) onDone?.(); }, [done]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div>
      <ol className="mb-3 flex min-h-12 flex-wrap gap-2 rounded-2xl border-2 border-dashed border-kids-sky/50 p-2">
        {order.map((en, k) => {
          const w = words.find((x) => x.en === en)!;
          return <li key={en} className="rounded-xl bg-kids-mint/20 px-3 py-2 text-sm font-bold">{k + 1}. {w.emoji} {w.en}</li>;
        })}
      </ol>
      <div className="flex flex-wrap gap-2">
        {shuffled.filter((w) => !order.includes(w.en)).map((w) => (
          <button key={w.en} type="button" className={cn(chip, "border-border bg-card text-sm")}
            onClick={() => {
              if (words[order.length].en === w.en) { setOrder([...order, w.en]); setMsg(null); }
              else setMsg("Hmm, what comes next in the day? Try again!");
            }}>
            {w.emoji} {w.en}
          </button>
        ))}
      </div>
      {msg && <p className="mt-2 text-sm font-semibold text-destructive">{msg}</p>}
      {done && <DoneBanner onReset={() => setOrder([])} />}
    </div>
  );
}

/* ---------------- Sort / drag & drop (arrastar ou tocar) ---------------- */

export function SortGame({ bins, pool, onDone }: { bins: { label: string; words: string[] }[]; pool?: string[]; onDone?: () => void }) {
  const free = bins.every((b) => b.words.length === 0);
  const items = useMemo(() => shuffle(free ? pool ?? [] : bins.flatMap((b) => b.words), 5), [bins, pool, free]);
  const [placed, setPlaced] = useState<Record<string, number>>({});
  const [sel, setSel] = useState<string | null>(null);
  const [msg, setMsg] = useState<string | null>(null);
  const done = items.length > 0 && Object.keys(placed).length === items.length;
  useEffect(() => { if (done) onDone?.(); }, [done]); // eslint-disable-line react-hooks/exhaustive-deps
  const drop = (word: string, bi: number) => {
    if (!free && !bins[bi].words.includes(word)) { setMsg("Not there! Try the other box 🙂"); return; }
    setMsg(null);
    setPlaced((p) => ({ ...p, [word]: bi }));
    setSel(null);
  };
  return (
    <div>
      <p className="mb-2 text-sm text-muted-foreground">Arraste cada palavra para a caixa certa — ou toque na palavra e depois na caixa.</p>
      <div className="mb-3 flex flex-wrap gap-2">
        {items.filter((w) => placed[w] === undefined).map((w) => (
          <button key={w} type="button" draggable onDragStart={(e) => e.dataTransfer.setData("text/plain", w)} onClick={() => setSel(w)}
            className={cn(chip, "cursor-grab text-sm", sel === w ? "border-gold bg-gold/20" : "border-border bg-card")}>
            {w}
          </button>
        ))}
      </div>
      <div className={cn("grid gap-3", bins.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2")}>
        {bins.map((b, bi) => (
          <div key={b.label} role="button" tabIndex={0}
            onClick={() => sel && drop(sel, bi)} onKeyDown={(e) => e.key === "Enter" && sel && drop(sel, bi)}
            onDragOver={(e) => e.preventDefault()} onDrop={(e) => drop(e.dataTransfer.getData("text/plain"), bi)}
            className="min-h-24 rounded-3xl border-2 border-dashed border-kids-pink/50 bg-kids-pink/5 p-3">
            <p className="mb-2 font-extrabold">{b.label}</p>
            <div className="flex flex-wrap gap-1">
              {items.filter((w) => placed[w] === bi).map((w) => <span key={w} className="rounded-xl bg-kids-mint/25 px-2 py-1 text-sm font-semibold">{w}</span>)}
            </div>
          </div>
        ))}
      </div>
      {msg && <p className="mt-2 text-sm font-semibold text-destructive">{msg}</p>}
      {done && <DoneBanner onReset={() => setPlaced({})} />}
    </div>
  );
}

/* ---------------- TPR (ação física) ---------------- */

export function TprGame({ prompts, onDone }: { prompts: string[]; onDone?: () => void }) {
  const [i, setI] = useState(0);
  const done = i >= prompts.length;
  useEffect(() => { if (done) onDone?.(); }, [done]); // eslint-disable-line react-hooks/exhaustive-deps
  if (done) return <DoneBanner onReset={() => setI(0)} />;
  return (
    <div className="text-center">
      <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">Action {i + 1} / {prompts.length}</p>
      <p className="my-4 text-3xl font-extrabold text-foreground">{prompts[i]}</p>
      <div className="flex justify-center gap-2">
        <ListenButton text={prompts[i]} />
        <Button className="rounded-full bg-kids-mint font-bold text-foreground hover:opacity-90" onClick={() => setI(i + 1)}>
          I did it! ✅
        </Button>
      </div>
    </div>
  );
}

/* ---------------- Point & Say / Bingo (quiz de seleção) ---------------- */

export function PointQuiz({ words, mode, onDone, seed = 2 }: { words: KidsWord[]; mode: "point" | "bingo"; onDone?: () => void; seed?: number }) {
  const rounds = useMemo(() => shuffle(words, seed).slice(0, 4), [words, seed]);
  const grid = useMemo(() => shuffle(words, seed + 3).slice(0, 9), [words, seed]);
  const [i, setI] = useState(0);
  const [said, setSaid] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const [marked, setMarked] = useState<string[]>([]);
  const done = i >= rounds.length;
  useEffect(() => { if (done) onDone?.(); }, [done]); // eslint-disable-line react-hooks/exhaustive-deps
  if (done) return <DoneBanner onReset={() => { setI(0); setMarked([]); }} />;
  const target = rounds[i];
  const options = mode === "bingo" ? (grid.some((g) => g.en === target.en) ? grid : [...grid.slice(0, 8), target]) : shuffle([target, ...words.filter((w) => w.en !== target.en).slice(0, 3)], i + seed);
  const next = () => { setI(i + 1); setSaid(false); setMsg(null); };
  return (
    <div>
      <p className="mb-3 text-lg font-bold">{mode === "bingo" ? <>Bingo! Find: <span className="text-gold">{target.en}</span></> : <>Point to: <span className="text-gold">{target.en}</span></>}</p>
      <div className={cn("grid gap-2", mode === "bingo" ? "grid-cols-3" : "grid-cols-2 sm:grid-cols-4")}>
        {options.map((w) => (
          <button key={w.en} type="button" aria-label={w.en}
            onClick={() => {
              if (w.en === target.en) { setMarked([...marked, w.en]); setMsg(mode === "point" ? "Yes! Now say it out loud 🗣️" : null); if (mode === "bingo") next(); }
              else setMsg("Try again!");
            }}
            className={cn(chip, "text-4xl", marked.includes(w.en) ? "border-kids-mint bg-kids-mint/20" : "border-border bg-card")}>
            {w.emoji}
          </button>
        ))}
      </div>
      {msg && <p className="mt-2 text-sm font-semibold">{msg}</p>}
      {mode === "point" && marked.includes(target.en) && (
        <div className="mt-3 flex items-center gap-2">
          <ListenButton text={target.en} />
          <Button size="sm" className="rounded-full bg-kids-sun font-bold text-foreground" onClick={() => { setSaid(true); next(); }} disabled={said}>
            I said “{target.en}”! ✅
          </Button>
        </div>
      )}
    </div>
  );
}

/* ---------------- Role-play guiado ---------------- */

export function RolePlay({ unit, onDone }: { unit: KidsUnit; onDone?: () => void }) {
  const turns = useMemo(() => unit.challengeFrames.map((f, k) => ({ puppet: unit.expressions[k % unit.expressions.length], frame: f })), [unit]);
  const [i, setI] = useState(0);
  const done = i >= turns.length;
  useEffect(() => { if (done) onDone?.(); }, [done]); // eslint-disable-line react-hooks/exhaustive-deps
  if (done) return <DoneBanner onReset={() => setI(0)} />;
  const t = turns[i];
  return (
    <div className="space-y-3">
      <div className="flex items-start gap-2"><span className="text-4xl" aria-hidden>🧸</span>
        <p className="rounded-3xl rounded-tl-none bg-kids-sky/15 px-4 py-3 font-bold">{t.puppet} <ListenButton text={t.puppet} /></p></div>
      <div className="flex items-start justify-end gap-2">
        <p className="rounded-3xl rounded-tr-none bg-gold/15 px-4 py-3 font-bold">Your turn: “{t.frame}”</p><span className="text-4xl" aria-hidden>🙂</span></div>
      <p className="text-xs text-muted-foreground">Complete a frase em voz alta. A voz não é gravada.</p>
      <Button className="rounded-full bg-kids-sun font-bold text-foreground" onClick={() => setI(i + 1)}>I said it! ✅</Button>
    </div>
  );
}

/* ---------------- Desenho + descrição ---------------- */

export function DrawDescribe({ unit, onDone }: { unit: KidsUnit; onDone?: () => void }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const drawing = useRef(false);
  const [color, setColor] = useState("var(--kids-pink)");
  const [drew, setDrew] = useState(false);
  const [said, setSaid] = useState<string[]>([]);
  const colors = ["var(--kids-pink)", "var(--kids-sky)", "var(--kids-mint)", "var(--kids-sun)", "var(--foreground)"];
  const pos = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    return [((e.clientX - r.left) / r.width) * 600, ((e.clientY - r.top) / r.height) * 360] as const;
  };
  const resolved = (c: string) => getComputedStyle(document.documentElement).getPropertyValue(c.slice(4, -1)).trim() || "#333";
  const done = drew && said.length >= Math.min(2, unit.challengeFrames.length);
  useEffect(() => { if (done) onDone?.(); }, [done]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        {colors.map((c) => <button key={c} type="button" aria-label="color" onClick={() => setColor(c)} className={cn("h-8 w-8 rounded-full border-2", color === c ? "border-gold" : "border-border")} style={{ background: c }} />)}
        <Button size="sm" variant="ghost" onClick={() => { const ctx = ref.current?.getContext("2d"); ctx?.clearRect(0, 0, 600, 360); }}>Clear</Button>
      </div>
      <canvas ref={ref} width={600} height={360} className="w-full touch-none rounded-3xl border-2 border-dashed border-kids-sky/50 bg-card"
        onPointerDown={(e) => { drawing.current = true; const ctx = ref.current!.getContext("2d")!; const [x, y] = pos(e); ctx.beginPath(); ctx.moveTo(x, y); ctx.strokeStyle = resolved(color); ctx.lineWidth = 6; ctx.lineCap = "round"; }}
        onPointerMove={(e) => { if (!drawing.current) return; const ctx = ref.current!.getContext("2d")!; const [x, y] = pos(e); ctx.lineTo(x, y); ctx.stroke(); setDrew(true); }}
        onPointerUp={() => (drawing.current = false)} onPointerLeave={() => (drawing.current = false)} />
      <p className="text-sm font-semibold">Agora descreva seu desenho em voz alta (toque em cada frase que você disse):</p>
      <div className="flex flex-wrap gap-2">
        {unit.challengeFrames.map((f) => (
          <button key={f} type="button" onClick={() => setSaid((s) => (s.includes(f) ? s : [...s, f]))}
            className={cn(chip, "text-sm", said.includes(f) ? "border-kids-mint bg-kids-mint/20" : "border-border bg-card")}>{f}</button>
        ))}
      </div>
      {!drew && <p className="text-xs text-muted-foreground">Desenhe algo na tela primeiro ✏️ (o desenho não é salvo).</p>}
      {done && <DoneBanner />}
    </div>
  );
}

/* ---------------- Sing & Say ---------------- */

export function SingAlong({ lines, onDone }: { lines: string[]; onDone?: () => void }) {
  const [sung, setSung] = useState<number[]>([]);
  const done = sung.length === lines.length;
  useEffect(() => { if (done) onDone?.(); }, [done]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <ul className="space-y-2">
      {lines.map((l, k) => (
        <li key={l} className="flex items-center gap-2">
          <ListenButton text={l} />
          <button type="button" onClick={() => setSung((s) => (s.includes(k) ? s : [...s, k]))}
            className={cn("flex-1 rounded-2xl px-4 py-2 text-left font-bold", sung.includes(k) ? "bg-kids-mint/20" : "bg-muted/40")}>
            🎵 {l} {sung.includes(k) && "✅"}
          </button>
        </li>
      ))}
      {done && <DoneBanner onReset={() => setSung([])} />}
    </ul>
  );
}

/* ---------------- Quick Check ---------------- */

export function QuickCheck({ questions, onPass }: { questions: QuickCheckQuestion[]; onPass: (correct: number) => void }) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const correct = questions.filter((q) => answers[q.id] === q.answer).length;
  const passed = passedQuickCheck(correct, questions.length);
  return (
    <div className="space-y-4">
      {questions.map((q, k) => (
        <div key={q.id} className="rounded-3xl border-2 border-border bg-card p-4">
          <p className="font-bold">{k + 1}. {q.prompt} <span className="ml-2 text-4xl align-middle">{q.emoji}</span></p>
          <div className="mt-2 flex flex-wrap gap-2">
            {q.options.map((o) => {
              const chosen = answers[q.id] === o;
              const state = submitted && chosen ? (o === q.answer ? "ok" : "bad") : null;
              return (
                <button key={o} type="button" disabled={submitted} onClick={() => setAnswers({ ...answers, [q.id]: o })}
                  className={cn(chip, "text-sm", state === "ok" ? "border-kids-mint bg-kids-mint/20" : state === "bad" ? "border-destructive bg-destructive/10" : chosen ? "border-gold bg-gold/20" : "border-border bg-background")}>
                  {state === "ok" && <CheckCircle2 className="mr-1 inline h-4 w-4" />}{state === "bad" && <XCircle className="mr-1 inline h-4 w-4" />}{o}
                </button>
              );
            })}
          </div>
        </div>
      ))}
      {!submitted ? (
        <Button disabled={Object.keys(answers).length < questions.length} className="rounded-full bg-gold font-bold text-primary-foreground"
          onClick={() => { setSubmitted(true); if (passedQuickCheck(questions.filter((q) => answers[q.id] === q.answer).length, questions.length)) onPass(questions.filter((q) => answers[q.id] === q.answer).length); }}>
          Check my answers
        </Button>
      ) : passed ? (
        <p className="rounded-2xl bg-kids-mint/20 px-4 py-3 font-bold">🎉 {correct}/{questions.length} — Awesome! A Part 2 — Communicate está liberada.</p>
      ) : (
        <div className="rounded-2xl bg-destructive/10 px-4 py-3">
          <p className="font-bold">{correct}/{questions.length} — Quase lá! Você precisa acertar pelo menos {Math.ceil(questions.length * 0.75)}. Revise os flashcards e tente de novo.</p>
          <Button size="sm" variant="outline" className="mt-2 rounded-full" onClick={() => { setAnswers({}); setSubmitted(false); }}>
            <RotateCcw className="mr-1 h-4 w-4" /> Try again
          </Button>
        </div>
      )}
    </div>
  );
}
