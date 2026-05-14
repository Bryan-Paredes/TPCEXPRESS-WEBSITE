const BASE_URL =
  import.meta.env.API_BASE_URL ||
  import.meta.env.INTERNAL_PDF_API_BASE_URL ||
  (import.meta.env.DEV
    ? "http://localhost:3003"
    : "https://tpc-app-api.vercel.app");

const PDF_API_BASE_URL = `${BASE_URL}/api/internal/pdf/guia`;

export async function obtenerPdfGuia(numeroGuia: string): Promise<Response> {
  const internalPdfKey = import.meta.env.INTERNAL_PDF_KEY?.trim();

  if (!internalPdfKey) {
    throw new Error("Missing INTERNAL_PDF_KEY environment variable");
  }

  return fetch(`${PDF_API_BASE_URL}/${encodeURIComponent(numeroGuia)}`, {
    headers: {
      Authorization: `Internal ${internalPdfKey}`,
    },
  });
}
