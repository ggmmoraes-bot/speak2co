import { jsPDF } from "jspdf";

type WeeklyFocus = { week: number; title: string; activities: string[] };

export type PlanPdfInput = {
  createdAt: string;
  reasonLabel: string;
  summary: string;
  weeklyFocus: WeeklyFocus[];
  milestones?: string[];
  lockedWeeks?: number[];
};

const NAVY: [number, number, number] = [15, 26, 51];
const GOLD: [number, number, number] = [193, 154, 60];
const GRAY: [number, number, number] = [70, 70, 70];

export function exportPlanVersionToPdf(input: PlanPdfInput) {
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 48;
  const maxWidth = pageWidth - margin * 2;
  let y = 0;

  const dateLabel = new Date(input.createdAt).toLocaleString("pt-BR");

  // Header band
  doc.setFillColor(...NAVY);
  doc.rect(0, 0, pageWidth, 96, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.text("Speak2Co", margin, 44);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(...GOLD);
  doc.text("English for Every Opportunity", margin, 64);
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(10);
  doc.text(`${input.reasonLabel} — ${dateLabel}`, margin, 82);

  y = 130;

  const ensureSpace = (needed: number) => {
    if (y + needed > pageHeight - margin) {
      doc.addPage();
      y = margin;
    }
  };

  const heading = (text: string) => {
    ensureSpace(34);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.setTextColor(...NAVY);
    doc.text(text, margin, y);
    y += 8;
    doc.setDrawColor(...GOLD);
    doc.setLineWidth(1.2);
    doc.line(margin, y, margin + 60, y);
    y += 16;
  };

  const body = (text: string, indent = 0) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10.5);
    doc.setTextColor(...GRAY);
    const lines = doc.splitTextToSize(text, maxWidth - indent) as string[];
    for (const line of lines) {
      ensureSpace(16);
      doc.text(line, margin + indent, y);
      y += 15;
    }
  };

  heading("Resumo do plano");
  body(input.summary);
  y += 10;

  heading("Semanas");
  for (const week of input.weeklyFocus ?? []) {
    ensureSpace(46);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11.5);
    doc.setTextColor(...NAVY);
    const locked = input.lockedWeeks?.includes(week.week) ? " (travada)" : "";
    const titleLines = doc.splitTextToSize(
      `Semana ${week.week}${locked} — ${week.title}`,
      maxWidth,
    ) as string[];
    for (const line of titleLines) {
      ensureSpace(16);
      doc.text(line, margin, y);
      y += 15;
    }
    y += 2;
    for (const activity of week.activities ?? []) {
      body(`•  ${activity}`, 12);
    }
    y += 12;
  }

  if (input.milestones && input.milestones.length > 0) {
    heading("Marcos de evolução");
    for (const milestone of input.milestones) {
      body(`✓  ${milestone}`, 12);
    }
  }

  // Footer page numbers
  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i += 1) {
    doc.setPage(i);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(150, 150, 150);
    doc.text(`Speak2Co · ${dateLabel} · página ${i} de ${pageCount}`, margin, pageHeight - 24);
  }

  const stamp = new Date(input.createdAt).toISOString().slice(0, 10);
  doc.save(`speak2co-plano-${stamp}.pdf`);
}
