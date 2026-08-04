import { jsPDF } from "jspdf";
import {
  drawPdfLogo,
  getLogoDataUrl,
  getTravelLogoDataUrl,
  PDF_BRAND_MARGIN,
  PDF_TRAVEL_LOGO_ALIAS,
} from "@/lib/pdf-logo";
import type { TravelResourceContent } from "@/lib/speak2travel-resources";

const NAVY: [number, number, number] = [0, 26, 51];
const GOLD: [number, number, number] = [193, 154, 60];
const TEXT: [number, number, number] = [35, 35, 40];
const MUTED: [number, number, number] = [110, 110, 118];

/**
 * PDF de estudo do Material Complementar do Speak2Travel.
 * Marca: logomarca oficial Speak2Co em destaque no topo (capa e cabeçalhos)
 * e logomarca do Speak2Travel destacada na capa e no rodapé das páginas.
 */
export async function exportTravelMaterialToPdf(resource: TravelResourceContent) {
  const [logo, travelLogo] = await Promise.all([getLogoDataUrl(), getTravelLogoDataUrl()]);

  const doc = new jsPDF({ unit: "pt", format: "a4", orientation: "portrait" });
  const width = doc.internal.pageSize.getWidth();
  const height = doc.internal.pageSize.getHeight();
  const margin = PDF_BRAND_MARGIN;
  const contentWidth = width - margin * 2;

  const drawTravelBadge = (size: number, x: number, y: number) => {
    if (!travelLogo) return false;
    doc.addImage(travelLogo, "PNG", x, y, size, size, PDF_TRAVEL_LOGO_ALIAS, "NONE");
    return true;
  };

  /* ---------------------------- Capa ---------------------------- */
  doc.setFillColor(...NAVY);
  doc.rect(0, 0, width, height, "F");
  doc.setDrawColor(...GOLD);
  doc.setLineWidth(1.2);
  doc.rect(24, 24, width - 48, height - 48);

  const heroBox = drawPdfLogo(doc, logo, { variant: "hero", align: "center", top: 64 });
  let coverY = heroBox ? heroBox.y + heroBox.size + 34 : 150;
  if (!heroBox) {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(26);
    doc.setTextColor(255, 255, 255);
    doc.text("Speak2Co", width / 2, 120, { align: "center" });
  }

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(...GOLD);
  doc.text("ENGLISH FOR EVERY OPPORTUNITY", width / 2, coverY, { align: "center" });

  coverY += 46;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(215, 215, 220);
  doc.text("Material Complementar — Speak2Travel", width / 2, coverY, { align: "center" });

  coverY += 32;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(24);
  doc.setTextColor(255, 255, 255);
  for (const line of doc.splitTextToSize(resource.title, contentWidth) as string[]) {
    doc.text(line, width / 2, coverY, { align: "center" });
    coverY += 28;
  }

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(...GOLD);
  for (const line of doc.splitTextToSize(resource.subtitle, contentWidth - 40) as string[]) {
    doc.text(line, width / 2, coverY, { align: "center" });
    coverY += 16;
  }

  coverY += 14;
  doc.setFontSize(10);
  doc.setTextColor(205, 205, 212);
  for (const line of doc.splitTextToSize(resource.description, contentWidth - 60) as string[]) {
    doc.text(line, width / 2, coverY, { align: "center" });
    coverY += 15;
  }

  // Logomarca do Speak2Travel em destaque na capa.
  const badgeSize = 150;
  const badgeY = Math.min(height - 150 - badgeSize, Math.max(coverY + 24, height * 0.55));
  if (!drawTravelBadge(badgeSize, (width - badgeSize) / 2, badgeY)) {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.setTextColor(...GOLD);
    doc.text("Speak2Travel", width / 2, badgeY + 40, { align: "center" });
  }

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(180, 180, 190);
  doc.text(
    `Gerado em ${new Date().toLocaleDateString("pt-BR")} · speak2co`,
    width / 2,
    height - 56,
    { align: "center" },
  );

  /* ------------------------- Páginas de conteúdo ------------------------- */
  const headerHeight = 76;
  const footerTop = height - 58;

  const drawPageChrome = () => {
    doc.setFillColor(...NAVY);
    doc.rect(0, 0, width, headerHeight, "F");
    const box = drawPdfLogo(doc, logo, { variant: "header", align: "left", top: 8 });
    const textX = box ? box.x + box.size + 14 : margin;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.setTextColor(255, 255, 255);
    doc.text("Speak2Co", textX, 34);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(...GOLD);
    doc.text(`Speak2Travel · ${resource.title}`, textX, 50);

    // Rodapé com a logomarca do Speak2Travel.
    const footSize = 26;
    doc.setDrawColor(220, 220, 226);
    doc.setLineWidth(0.5);
    doc.line(margin, footerTop, width - margin, footerTop);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(...MUTED);
    doc.text("Speak2Co · English for Every Opportunity", margin, footerTop + 20);
    if (!drawTravelBadge(footSize, width - margin - footSize, footerTop + 6)) {
      doc.text("Speak2Travel", width - margin, footerTop + 20, { align: "right" });
    }
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

  newPage();

  // Como praticar
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.setTextColor(...NAVY);
  doc.text("Como praticar", margin, y);
  y += 18;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(...TEXT);
  resource.howTo.forEach((step, i) => {
    for (const line of doc.splitTextToSize(`${i + 1}. ${step}`, contentWidth) as string[]) {
      ensure(14);
      doc.text(line, margin, y);
      y += 14;
    }
  });
  y += 12;

  for (const group of resource.groups) {
    ensure(60);
    doc.setDrawColor(...GOLD);
    doc.setLineWidth(1);
    doc.line(margin, y - 12, width - margin, y - 12);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.setTextColor(...NAVY);
    doc.text(group.title, margin, y + 4);
    y += 20;

    if (group.subtitle) {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(...MUTED);
      doc.text(group.subtitle, margin, y);
      y += 14;
    }
    if (group.intro) {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor(...TEXT);
      for (const line of doc.splitTextToSize(group.intro, contentWidth) as string[]) {
        ensure(14);
        doc.text(line, margin, y);
        y += 14;
      }
    }
    y += 6;

    for (const item of group.items) {
      ensure(38);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10.5);
      doc.setTextColor(...TEXT);
      for (const line of doc.splitTextToSize(item.en, contentWidth) as string[]) {
        ensure(14);
        doc.text(line, margin, y);
        y += 14;
      }
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor(...MUTED);
      for (const line of doc.splitTextToSize(item.pt, contentWidth) as string[]) {
        ensure(13);
        doc.text(line, margin, y);
        y += 13;
      }
      if (item.note) {
        doc.setFont("helvetica", "italic");
        doc.setFontSize(9);
        doc.setTextColor(...GOLD);
        for (const line of doc.splitTextToSize(item.note, contentWidth) as string[]) {
          ensure(12);
          doc.text(line, margin, y);
          y += 12;
        }
      }
      y += 8;
    }
    y += 10;
  }

  doc.save(`speak2travel-${resource.id}.pdf`);
}
