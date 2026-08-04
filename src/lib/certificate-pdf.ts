import { jsPDF } from "jspdf";
import { drawPdfLogo, getLogoDataUrl } from "@/lib/pdf-logo";

export type CertificatePdfInput = {
  studentName: string;
  title: string;
  subtitle: string;
  detail: string | null;
  issuedAt: string | null;
  code: string;
  signatureText?: string;
  signatureCaption?: string;
};

export const DEFAULT_SIGNATURE_TEXT = "S2co";
export const DEFAULT_SIGNATURE_CAPTION = "Speak2Co - Academic Team";

const NAVY: [number, number, number] = [15, 26, 51];
const GOLD: [number, number, number] = [193, 154, 60];
const GRAY: [number, number, number] = [90, 90, 90];

export async function exportCertificateToPdf(input: CertificatePdfInput) {
  const logo = await getLogoDataUrl();
  const doc = new jsPDF({ unit: "pt", format: "a4", orientation: "landscape" });
  const width = doc.internal.pageSize.getWidth();
  const height = doc.internal.pageSize.getHeight();

  doc.setFillColor(...NAVY);
  doc.rect(0, 0, width, height, "F");

  doc.setDrawColor(...GOLD);
  doc.setLineWidth(2);
  doc.rect(28, 28, width - 56, height - 56);
  doc.setLineWidth(0.6);
  doc.rect(38, 38, width - 76, height - 76);

  const logoBox = drawPdfLogo(doc, logo, {
    variant: "hero",
    align: "center",
    top: 52,
  });
  if (!logoBox) {
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(26);
    doc.text("Speak2Co", width / 2, 96, { align: "center" });
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.setTextColor(...GOLD);
    doc.text("English for Every Opportunity", width / 2, 116, { align: "center" });
  }

  doc.setFont("helvetica", "normal");
  doc.setFontSize(13);
  doc.setTextColor(230, 230, 230);
  const introY = logoBox ? logoBox.y + logoBox.size + 38 : 186;
  doc.text("Certificamos que", width / 2, introY, { align: "center" });


  doc.setFont("helvetica", "bold");
  doc.setFontSize(30);
  doc.setTextColor(255, 255, 255);
  doc.text(input.studentName, width / 2, introY + 32, { align: "center" });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(13);
  doc.setTextColor(230, 230, 230);
  const lines = doc.splitTextToSize(
    `concluiu com êxito o requisito do ${input.title} — ${input.subtitle}.`,
    width - 220,
  ) as string[];
  let y = introY + 72;
  for (const line of lines) {
    doc.text(line, width / 2, y, { align: "center" });
    y += 20;
  }

  if (input.detail) {
    doc.setTextColor(...GOLD);
    doc.setFontSize(12);
    doc.text(input.detail, width / 2, y + 12, { align: "center" });
  }

  const dateLabel = new Date(input.issuedAt ?? Date.now()).toLocaleDateString("pt-BR");

  const signatureText = (input.signatureText ?? DEFAULT_SIGNATURE_TEXT).trim();
  const signatureCaption = (input.signatureCaption ?? DEFAULT_SIGNATURE_CAPTION).trim();

  // Assinatura manuscrita em itálico
  if (signatureText) {
    doc.setFont("times", "italic");
    doc.setFontSize(34);
    doc.setTextColor(...GOLD);
    doc.text(signatureText, width / 2, height - 128, { align: "center" });
  }

  doc.setDrawColor(...GOLD);
  doc.setLineWidth(1);
  doc.line(width / 2 - 110, height - 118, width / 2 + 110, height - 118);
  if (signatureCaption) {
    doc.setFont("helvetica", "normal");
    doc.setTextColor(220, 220, 220);
    doc.setFontSize(11);
    doc.text(signatureCaption, width / 2, height - 100, { align: "center" });
  }

  doc.setFontSize(9);
  doc.setTextColor(...GRAY);
  doc.setTextColor(170, 170, 170);
  doc.text(`Emitido em ${dateLabel}`, 60, height - 56);
  doc.text(`Código de verificação: ${input.code}`, width - 60, height - 56, { align: "right" });

  doc.save(`speak2co-certificado-${input.code}.pdf`);
}
