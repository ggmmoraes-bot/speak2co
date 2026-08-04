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
