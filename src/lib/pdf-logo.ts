import travelLogoAsset from "@/assets/speak2travel.asset.json";
import logoAsset from "@/assets/speak2co-logo.asset.json";

let cached: string | null = null;
let pending: Promise<string | null> | null = null;

/**
 * Carrega a logomarca oficial e remove o fundo preto (deixa transparente)
 * para que ela possa ser aplicada sobre o azul marinho dos PDFs.
 */
async function buildLogoDataUrl(): Promise<string | null> {
  if (typeof window === "undefined") return null;
  try {
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.src = logoAsset.url;
    await new Promise<void>((resolve, reject) => {
      image.onload = () => resolve();
      image.onerror = () => reject(new Error("logo load failed"));
    });

    // Alta resolução: usa o maior lado nativo da arte (mínimo 1024, máximo 2048)
    // para que a logo permaneça nítida na impressão (>= 300 DPI nos tamanhos usados).
    const natural = Math.max(image.naturalWidth || 0, image.naturalHeight || 0);
    const size = Math.min(2048, Math.max(1024, natural));
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.clearRect(0, 0, size, size);
    ctx.drawImage(image, 0, 0, size, size);

    const data = ctx.getImageData(0, 0, size, size);
    const pixels = data.data;
    for (let i = 0; i < pixels.length; i += 4) {
      const luminance =
        0.299 * (pixels[i] ?? 0) + 0.587 * (pixels[i + 1] ?? 0) + 0.114 * (pixels[i + 2] ?? 0);
      if (luminance < 42) {
        pixels[i + 3] = 0;
      } else if (luminance < 70) {
        // Borda suave: evita halo escuro serrilhado sobre o fundo marinho.
        pixels[i + 3] = Math.round(((luminance - 42) / 28) * 255);
      }
    }
    ctx.putImageData(data, 0, 0);
    // PNG sem perdas mantém as bordas do emblema nítidas.
    return canvas.toDataURL("image/png");
  } catch {
    return null;
  }
}

export async function getLogoDataUrl(): Promise<string | null> {
  if (cached) return cached;
  if (!pending) {
    pending = buildLogoDataUrl().then((result) => {
      cached = result;
      return result;
    });
  }
  return pending;
}

/* ---------------------------------------------------------------------------
 * Padrão da marca em PDFs
 * Mesma margem, proporção e alinhamento em qualquer formato/orientação.
 * ------------------------------------------------------------------------- */

export const PDF_BRAND_MARGIN = 48;

/** Alias único para embutir a logo uma só vez por documento. */
const PDF_LOGO_ALIAS = "speak2co-logo";

type LogoVariant = "hero" | "header" | "footer";

const VARIANT_RATIO: Record<LogoVariant, number> = {
  hero: 0.115,
  header: 0.085,
  footer: 0.035,
};

const VARIANT_RANGE: Record<LogoVariant, [number, number]> = {
  hero: [72, 104],
  header: [52, 72],
  footer: [22, 32],
};

type MinimalDoc = {
  internal: { pageSize: { getWidth(): number; getHeight(): number } };
  addImage(
    data: string,
    format: string,
    x: number,
    y: number,
    w: number,
    h: number,
    alias?: string,
    compression?: string,
  ): unknown;
};

/** Tamanho padronizado da logo, proporcional ao lado maior da página. */
export function pdfLogoSize(doc: MinimalDoc, variant: LogoVariant): number {
  const width = doc.internal.pageSize.getWidth();
  const height = doc.internal.pageSize.getHeight();
  const reference = Math.max(width, height);
  const [min, max] = VARIANT_RANGE[variant];
  return Math.min(max, Math.max(min, reference * VARIANT_RATIO[variant]));
}

/**
 * Desenha a logomarca oficial com margens e alinhamento padronizados.
 * Retorna a caixa ocupada para posicionar o conteúdo ao lado/abaixo.
 */
export function drawPdfLogo(
  doc: MinimalDoc,
  logo: string | null,
  options: {
    variant: LogoVariant;
    align?: "left" | "center" | "right";
    top?: number;
    bottom?: number;
  },
): { x: number; y: number; size: number } | null {
  if (!logo) return null;
  const { variant, align = "left" } = options;
  const size = pdfLogoSize(doc, variant);
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  const x =
    align === "center"
      ? (pageWidth - size) / 2
      : align === "right"
        ? pageWidth - PDF_BRAND_MARGIN - size
        : PDF_BRAND_MARGIN;

  const y =
    options.bottom !== undefined
      ? pageHeight - options.bottom - size
      : (options.top ?? PDF_BRAND_MARGIN);

  // alias reaproveita o mesmo objeto de imagem em todas as páginas;
  // compression "NONE" preserva a resolução original (sem re-encode com perda).
  doc.addImage(logo, "PNG", x, y, size, size, PDF_LOGO_ALIAS, "NONE");
  return { x, y, size };
}

/* ---------------------------------------------------------------------------
 * Logomarca do Speak2Travel (subproduto) para uso secundário nos PDFs.
 * ------------------------------------------------------------------------- */

let travelCached: string | null = null;
let travelPending: Promise<string | null> | null = null;

async function buildTravelLogoDataUrl(): Promise<string | null> {
  if (typeof window === "undefined") return null;
  try {
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.src = travelLogoAsset.url;
    await new Promise<void>((resolve, reject) => {
      image.onload = () => resolve();
      image.onerror = () => reject(new Error("travel logo load failed"));
    });
    const natural = Math.max(image.naturalWidth || 0, image.naturalHeight || 0);
    const size = Math.min(1536, Math.max(768, natural));
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(image, 0, 0, size, size);
    return canvas.toDataURL("image/png");
  } catch {
    return null;
  }
}

export async function getTravelLogoDataUrl(): Promise<string | null> {
  if (travelCached) return travelCached;
  if (!travelPending) {
    travelPending = buildTravelLogoDataUrl().then((result) => {
      travelCached = result;
      return result;
    });
  }
  return travelPending;
}

export const PDF_TRAVEL_LOGO_ALIAS = "speak2travel-logo";
