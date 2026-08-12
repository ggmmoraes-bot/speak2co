import { jsPDF } from "jspdf";
import { drawPdfLogo, getLogoDataUrl, PDF_BRAND_MARGIN } from "@/lib/pdf-logo";
import { FONT_FILES, loadUnicodeFont } from "@/lib/beginner-course-pdf";
import type { CourseUnit } from "@/lib/curriculum/types";

const NAVY: [number, number, number] = [0, 26, 51];
const GOLD: [number, number, number] = [193, 154, 60];
const TEXT: [number, number, number] = [35, 35, 40];
const MUTED: [number, number, number] = [110, 110, 118];
const UNICODE_FONT = "DejaVuSans";

export type VocabularyPdfOptions = {
  units: CourseUnit[];
  courseTitle: string;
  subtitle: string;
  fileName: string;
};

/**
 * Caderno de vocabulário: todas as palavras de cada unidade com IPA,
 * tradução, definição em inglês e exemplo de uso.
 */
export async function exportVocabularyToPdf(options: VocabularyPdfOptions) {
  const { units, courseTitle, subtitle, fileName } = options;
  const doc = new jsPDF({ unit: "pt", format: "a4", orientation: "portrait" });
  const [logo, fonts] = await Promise.all([getLogoDataUrl(), loadUnicodeFont()]);

  let FONT = "helvetica";
  if (fonts) {
    for (const { style, file } of FONT_FILES) {
      doc.addFileToVFS(file, fonts[style]!);
      doc.addFont(file, UNICODE_FONT, style);
    }
    FONT = UNICODE_FONT;
  }
  const safe = (value: string) =>
    FONT === UNICODE_FONT ? value : value.replace(/[^\u0000-\u024F\u2010-\u203A]/g, "");
  const text = (value: string, x: number, y: number, opts?: Parameters<typeof doc.text>[3]) =>
    doc.text(safe(value), x, y, opts);
  const split = (value: string, w: number) => doc.splitTextToSize(safe(value), w) as string[];

  const width = doc.internal.pageSize.getWidth();
  const height = doc.internal.pageSize.getHeight();
  const margin = PDF_BRAND_MARGIN;
  const contentWidth = width - margin * 2;

  /* -------------------------------- Capa -------------------------------- */
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
  doc.setFontSize(24);
  doc.setTextColor(255, 255, 255);
  for (const line of split(`${courseTitle} — Vocabulary Book`, contentWidth - 60)) {
    text(line, width / 2, coverY, { align: "center" });
    coverY += 28;
  }

  doc.setFont(FONT, "normal");
  doc.setFontSize(12);
  doc.setTextColor(...GOLD);
  text(subtitle, width / 2, coverY + 4, { align: "center" });

  const totalTerms = units.reduce((sum, u) => sum + u.discover.vocabulary.length, 0);
  doc.setFontSize(10.5);
  doc.setTextColor(210, 210, 218);
  text(
    `${units.length} unidades · ${totalTerms} palavras com IPA, tradução, definição em inglês e exemplo.`,
    width / 2,
    coverY + 40,
    { align: "center" },
  );

  doc.setFontSize(9);
  doc.setTextColor(180, 180, 190);
  text(`Gerado em ${new Date().toLocaleDateString("pt-BR")} · speak2co`, width / 2, height - 56, {
    align: "center",
  });

  /* ---------------------------- Chrome das páginas ---------------------------- */
  const headerHeight = 76;
  const footerTop = height - 58;
  let currentUnit = "";

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
    text(`${courseTitle} · Vocabulary${currentUnit ? ` · ${currentUnit}` : ""}`, textX, 50);

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

  newPage();

  for (const unit of units) {
    currentUnit = `Unit ${unit.number}`;
    ensure(70);
    doc.setFillColor(...NAVY);
    doc.roundedRect(margin, y - 14, contentWidth, 34, 6, 6, "F");
    doc.setFont(FONT, "bold");
    doc.setFontSize(11.5);
    doc.setTextColor(255, 255, 255);
    text(`Unit ${unit.number} — ${unit.title}`, margin + 12, y + 6);
    doc.setFont(FONT, "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(...GOLD);
    text(unit.code, width - margin - 12, y + 6, { align: "right" });
    y += 34;

    for (const v of unit.discover.vocabulary) {
      ensure(58);
      doc.setFont(FONT, "bold");
      doc.setFontSize(11);
      doc.setTextColor(...TEXT);
      text(v.term, margin, y);
      const termWidth = doc.getTextWidth(safe(v.term));
      doc.setFont(FONT, "normal");
      doc.setFontSize(9);
      doc.setTextColor(...MUTED);
      text(v.ipa, margin + termWidth + 10, y);
      doc.setFont(FONT, "bold");
      doc.setFontSize(9.5);
      doc.setTextColor(...GOLD);
      text(v.pt, width - margin, y, { align: "right" });
      y += 15;

      para(v.definition, { size: 9.5, indent: 10, color: TEXT });
      para(`“${v.example}”`, { size: 9.5, style: "italic", indent: 10, color: MUTED });
      para(v.examplePt, { size: 9, indent: 10, color: MUTED, gap: 6 });

      doc.setDrawColor(232, 232, 238);
      doc.setLineWidth(0.4);
      doc.line(margin, y - 2, width - margin, y - 2);
      y += 8;
    }
    y += 10;
  }

  doc.save(fileName);
}
