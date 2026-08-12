import { jsPDF } from "jspdf";
import { drawPdfLogo, getLogoDataUrl, PDF_BRAND_MARGIN } from "@/lib/pdf-logo";
import {
  BEGINNER_UNITS,
  SPEAKING_LABEL,
  WRITTEN_LABEL,
  type BeginnerLesson,
} from "@/lib/beginner-course";
import { unitToPdfLesson } from "@/lib/curriculum/unit-pdf";

const NAVY: [number, number, number] = [0, 26, 51];
const GOLD: [number, number, number] = [193, 154, 60];
const TEXT: [number, number, number] = [35, 35, 40];
const MUTED: [number, number, number] = [110, 110, 118];

const UNICODE_FONT = "DejaVuSans";
export const FONT_FILES: { style: "normal" | "bold" | "italic"; file: string }[] = [
  { style: "normal", file: "DejaVuSans.ttf" },
  { style: "bold", file: "DejaVuSans-Bold.ttf" },
  { style: "italic", file: "DejaVuSans-Oblique.ttf" },
];
const FONT_CDN = "https://cdn.jsdelivr.net/npm/dejavu-fonts-ttf@2.37.3/ttf/";

let fontCache: Record<string, string> | null = null;

/** Fontes padrão do jsPDF não têm glifos de IPA; carregamos uma fonte Unicode. */
export async function loadUnicodeFont(): Promise<Record<string, string> | null> {
  if (fontCache) return fontCache;
  if (typeof window === "undefined") return null;
  try {
    const entries = await Promise.all(
      FONT_FILES.map(async ({ style, file }) => {
        const response = await fetch(FONT_CDN + file);
        if (!response.ok) throw new Error("font fetch failed");
        const bytes = new Uint8Array(await response.arrayBuffer());
        let binary = "";
        for (let i = 0; i < bytes.length; i += 8192) {
          binary += String.fromCharCode(...bytes.subarray(i, i + 8192));
        }
        return [style, btoa(binary)] as const;
      }),
    );
    fontCache = Object.fromEntries(entries);
    return fontCache;
  } catch {
    return null;
  }
}

export type CoursePdfOptions = {
  lessons: BeginnerLesson[];
  courseTitle: string;
  subtitle: string;
  intro: string;
};

/**
 * Desenha um curso completo (capa, sumário e lições) em um documento jsPDF.
 * Compartilhado pelos cursos Beginner e Intermediate.
 */
export async function renderCoursePdf(doc: jsPDF, options: CoursePdfOptions) {
  const { lessons, courseTitle, subtitle } = options;
  const [logo, fonts] = await Promise.all([getLogoDataUrl(), loadUnicodeFont()]);


  let FONT = "helvetica";
  if (fonts) {
    for (const { style, file } of FONT_FILES) {
      doc.addFileToVFS(file, fonts[style]!);
      doc.addFont(file, UNICODE_FONT, style);
    }
    FONT = UNICODE_FONT;
  }
  /** Sem fonte Unicode, remove glifos que a fonte padrão não desenha (IPA). */
  const safe = (value: string) =>
    FONT === UNICODE_FONT ? value : value.replace(/[^\u0000-\u024F\u2010-\u203A]/g, "");
  const text = (
    value: string,
    x: number,
    yPos: number,
    options?: Parameters<typeof doc.text>[3],
  ) => doc.text(safe(value), x, yPos, options);
  const split = (value: string, w: number) => doc.splitTextToSize(safe(value), w) as string[];

  const width = doc.internal.pageSize.getWidth();
  const height = doc.internal.pageSize.getHeight();
  const margin = PDF_BRAND_MARGIN;
  const contentWidth = width - margin * 2;


  /* ------------------------------- Capa ------------------------------- */
  doc.setFillColor(...NAVY);
  doc.rect(0, 0, width, height, "F");
  doc.setDrawColor(...GOLD);
  doc.setLineWidth(1.2);
  doc.rect(24, 24, width - 48, height - 48);

  const hero = drawPdfLogo(doc, logo, { variant: "hero", align: "center", top: 96 });
  let coverY = hero ? hero.y + hero.size + 40 : 190;
  if (!hero) {
    doc.setFont(FONT, "bold");
    doc.setFontSize(26);
    doc.setTextColor(255, 255, 255);
    text("Speak2Co", width / 2, 150, { align: "center" });
  }

  doc.setFont(FONT, "normal");
  doc.setFontSize(10);
  doc.setTextColor(...GOLD);
  text("ENGLISH FOR EVERY OPPORTUNITY", width / 2, coverY, { align: "center" });

  coverY += 54;
  doc.setFont(FONT, "bold");
  doc.setFontSize(26);
  doc.setTextColor(255, 255, 255);
  text(courseTitle, width / 2, coverY, { align: "center" });

  coverY += 26;
  doc.setFont(FONT, "normal");
  doc.setFontSize(12);
  doc.setTextColor(...GOLD);
  text(subtitle, width / 2, coverY, { align: "center" });

  coverY += 34;
  doc.setFontSize(10.5);
  doc.setTextColor(210, 210, 218);
  const intro = options.intro;

  for (const line of split(intro, contentWidth - 60)) {
    text(line, width / 2, coverY, { align: "center" });
    coverY += 16;
  }

  doc.setFontSize(9);
  doc.setTextColor(180, 180, 190);
  text(
    `Gerado em ${new Date().toLocaleDateString("pt-BR")} · speak2co`,
    width / 2,
    height - 56,
    { align: "center" },
  );

  /* --------------------------- Chrome das páginas --------------------------- */
  const headerHeight = 76;
  const footerTop = height - 58;
  let currentLesson = "";

  const drawPageChrome = () => {
    doc.setFillColor(...NAVY);
    doc.rect(0, 0, width, headerHeight, "F");
    const box = drawPdfLogo(doc, logo, { variant: "header", align: "left", top: 8 });
    const textX = box ? box.x + box.size + 14 : margin;
    doc.setFont(FONT, "bold");
    doc.setFontSize(13);
    doc.setTextColor(255, 255, 255);
    text("Speak2Co", textX, 34);
    doc.setFont(FONT, "normal");
    doc.setFontSize(9);
    doc.setTextColor(...GOLD);
    text(`${courseTitle}${currentLesson ? ` · ${currentLesson}` : ""}`, textX, 50);

    doc.setDrawColor(220, 220, 226);
    doc.setLineWidth(0.5);
    doc.line(margin, footerTop, width - margin, footerTop);
    doc.setFont(FONT, "normal");
    doc.setFontSize(8);
    doc.setTextColor(...MUTED);
    text("Speak2Co · English for Every Opportunity", margin, footerTop + 20);
    text(`${doc.getNumberOfPages()}`, width - margin, footerTop + 20, { align: "right" });
  };

  let y = 0;
  const newPage = () => {
    doc.addPage();
    drawPageChrome();
    y = headerHeight + 34;
  };
  const ensure = (needed: number) => {
    if (y + needed > footerTop - 16) newPage();
  };

  const para = (
    body: string,
    opts: {
      size?: number;
      style?: "normal" | "bold" | "italic";
      color?: [number, number, number];
      indent?: number;
      gap?: number;
    } = {},
  ) => {
    const size = opts.size ?? 10;
    const lh = size + 4;
    const indent = opts.indent ?? 0;
    doc.setFont(FONT, opts.style ?? "normal");
    doc.setFontSize(size);
    doc.setTextColor(...(opts.color ?? TEXT));
    for (const line of split(body, contentWidth - indent)) {
      ensure(lh);
      text(line, margin + indent, y);
      y += lh;
    }
    y += opts.gap ?? 0;
  };

  const sectionTitle = (title: string) => {
    ensure(46);
    doc.setDrawColor(...GOLD);
    doc.setLineWidth(1);
    doc.line(margin, y - 10, width - margin, y - 10);
    doc.setFont(FONT, "bold");
    doc.setFontSize(12.5);
    doc.setTextColor(...NAVY);
    text(title, margin, y + 6);
    y += 24;
  };

  /* ------------------------------ Sumário ------------------------------ */
  newPage();
  doc.setFont(FONT, "bold");
  doc.setFontSize(16);
  doc.setTextColor(...NAVY);
  text("Sumário", margin, y);
  y += 24;
  for (const lesson of lessons) {
    ensure(16);
    doc.setFont(FONT, "bold");
    doc.setFontSize(10);
    doc.setTextColor(...TEXT);
    text(`Lesson ${lesson.number} — ${lesson.title}`, margin, y);
    doc.setFont(FONT, "normal");
    doc.setTextColor(...MUTED);
    text(lesson.titlePt, width - margin, y, { align: "right" });
    y += 16;
  }

  /* ------------------------------- Lições ------------------------------- */
  for (const lesson of lessons) {
    currentLesson = `Lesson ${lesson.number}`;
    newPage();

    doc.setFont(FONT, "bold");
    doc.setFontSize(18);
    doc.setTextColor(...NAVY);
    text(`Lesson ${lesson.number} — ${lesson.title}`, margin, y);
    y += 22;
    para(lesson.titlePt, { size: 11, color: GOLD, gap: 4 });
    para(`Objetivo: ${lesson.goal}`, { size: 10, color: MUTED, gap: 12 });

    if (lesson.warmUp.length) {
      sectionTitle("Warm-up");
      lesson.warmUp.forEach((item, i) => para(`${i + 1}. ${item}`, { indent: 6 }));
      y += 8;
    }

    if (lesson.vocabulary.length) {
      sectionTitle("Vocabulary");
      for (const v of lesson.vocabulary) {
        ensure(44);
        para(`${v.en}  ${v.ipa}`, { style: "bold", size: 10.5 });
        para(v.pt, { color: MUTED, size: 9.5, indent: 6 });
        para(`“${v.example}” — ${v.examplePt}`, { style: "italic", size: 9.5, indent: 6, gap: 6 });
      }
      y += 4;
    }

    if (lesson.verbs.length) {
      sectionTitle("Verbs");
      for (const verb of lesson.verbs) {
        ensure(40);
        para(`${verb.infinitive} ${verb.ipa} — ${verb.pt}`, { style: "bold", size: 10.5 });
        para(verb.explanation, { size: 9.5, indent: 6 });
        para(verb.conjugation.join(" · "), { size: 9.5, color: MUTED, indent: 6, gap: 6 });
      }
      y += 4;
    }

    if (lesson.grammar.length) {
      sectionTitle("Grammar");
      for (const g of lesson.grammar) {
        ensure(48);
        para(g.title, { style: "bold", size: 10.5 });
        for (const ex of g.examples) para(`• ${ex}`, { size: 9.5, indent: 6 });
        para(`Quando usar: ${g.when}`, { size: 9.5, indent: 6 });
        para(`Estrutura: ${g.structure}`, { size: 9.5, indent: 6 });
        for (const m of g.mistakes)
          para(`Erro comum: ${m}`, { size: 9.5, color: GOLD, style: "italic", indent: 6 });
        y += 8;
      }
    }

    if (lesson.expressions.length) {
      sectionTitle("Expressions");
      for (const e of lesson.expressions) {
        ensure(34);
        para(e.situation, { size: 9.5, color: MUTED });
        para(e.en, { style: "bold", size: 10.5, indent: 6 });
        para(e.pt, { size: 9.5, color: MUTED, indent: 6, gap: 6 });
      }
      y += 4;
    }

    if (lesson.dialogue.length) {
      sectionTitle("Conversation");
      for (const line of lesson.dialogue) {
        ensure(28);
        para(`${line.who}: ${line.en}`, { size: 10, style: "bold" });
        para(line.pt, { size: 9.5, color: MUTED, indent: 12, gap: 4 });
      }
      y += 6;
    }

    if (lesson.pronunciation.length) {
      sectionTitle("Pronunciation Lab");
      for (const p of lesson.pronunciation) {
        ensure(34);
        para(`Som ${p.sound}`, { style: "bold", size: 10.5 });
        para(p.tip, { size: 9.5, indent: 6 });
        para(p.words.join(" · "), { size: 9.5, color: MUTED, indent: 6, gap: 6 });
      }
      y += 4;
    }

    if (lesson.written.length) {
      sectionTitle("Written Exercises");
      lesson.written.forEach((ex, i) => {
        ensure(30);
        para(`${i + 1}. [${WRITTEN_LABEL[ex.type]}] ${ex.prompt}`, { size: 10 });
        para(`Resposta: ${ex.answer}`, { size: 9.5, color: MUTED, indent: 10, gap: 4 });
      });
      y += 6;
    }

    if (lesson.speaking.length) {
      sectionTitle("Speaking Practice");
      lesson.speaking.forEach((ex, i) => {
        ensure(28);
        para(`${i + 1}. [${SPEAKING_LABEL[ex.type]}] ${ex.prompt}`, { size: 10 });
        if (ex.phrase) para(`“${ex.phrase}”`, { size: 9.5, style: "italic", indent: 10, gap: 4 });
      });
      y += 6;
    }

    if (lesson.quiz.length) {
      sectionTitle("Quiz");
      lesson.quiz.forEach((q, i) => {
        ensure(40);
        para(`${i + 1}. ${q.question}`, { size: 10, style: "bold" });
        q.options.forEach((opt, oi) =>
          para(`${String.fromCharCode(97 + oi)}) ${opt}`, { size: 9.5, indent: 10 }),
        );
        para(`Resposta: ${q.answer}`, { size: 9.5, color: GOLD, indent: 10, gap: 6 });
      });
    }

    sectionTitle("Review");
    para(lesson.review.summary, { size: 10, gap: 6 });
    if (lesson.review.grammar.length) {
      para("Gramática", { style: "bold", size: 10 });
      for (const g of lesson.review.grammar) para(`• ${g}`, { size: 9.5, indent: 6 });
    }
    if (lesson.review.vocabulary.length) {
      para("Vocabulário", { style: "bold", size: 10 });
      for (const v of lesson.review.vocabulary) para(`• ${v}`, { size: 9.5, indent: 6 });
    }
    if (lesson.review.mistakes.length) {
      para("Erros a evitar", { style: "bold", size: 10 });
      for (const m of lesson.review.mistakes)
        para(`• ${m}`, { size: 9.5, indent: 6, color: GOLD });
    }
  }

}

/**
 * PDF único e completo do Beginner English Course (Método Speak2Co):
 * capa, sumário e as 30 unidades (Discover + Communicate) com todas as seções.
 */
export async function exportBeginnerCourseToPdf(
  lessons: BeginnerLesson[] = BEGINNER_UNITS.map(unitToPdfLesson),
) {
  const doc = new jsPDF({ unit: "pt", format: "a4", orientation: "portrait" });
  await renderCoursePdf(doc, {
    lessons,
    courseTitle: "Beginner English Course",
    subtitle: "Método Speak2Co · Plano Essential",
    intro:
      `${lessons.length} unidades progressivas com warm-up, vocabulário com IPA, verbos, gramática por ` +
      "exemplos, expressões, diálogos, laboratório de pronúncia, exercícios escritos e falados, quiz e revisão.",
  });
  doc.save("speak2co-beginner-english-course.pdf");
}
