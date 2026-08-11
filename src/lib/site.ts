/** Domínio oficial da plataforma. Usado em metadados, canonical e links absolutos. */
export const SITE_URL = "https://speak2co.lovable.app";

/** Monta uma URL absoluta no domínio oficial. */
export function siteUrl(path = "/") {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
