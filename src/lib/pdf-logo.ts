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

    const size = 512;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    ctx.drawImage(image, 0, 0, size, size);

    const data = ctx.getImageData(0, 0, size, size);
    const pixels = data.data;
    for (let i = 0; i < pixels.length; i += 4) {
      const luminance =
        0.299 * (pixels[i] ?? 0) + 0.587 * (pixels[i + 1] ?? 0) + 0.114 * (pixels[i + 2] ?? 0);
      if (luminance < 42) {
        pixels[i + 3] = 0;
      }
    }
    ctx.putImageData(data, 0, 0);
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

  doc.addImage(logo, "PNG", x, y, size, size);
  return { x, y, size };
}
