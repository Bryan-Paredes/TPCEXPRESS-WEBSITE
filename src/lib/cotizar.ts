import type { CotizarAPIResponse } from "@/types/cotizador";

const baseUrl = import.meta.env.DEV
  ? "http://localhost:3000"
  : "https://sistema.tpcxpress.com";

interface CotizarRequestBody {
  municipioOrigenId: string;
  municipioDestinoId: string;
}

export async function obtenerCotizacion({
  municipioOrigenId,
  municipioDestinoId,
}: CotizarRequestBody): Promise<CotizarAPIResponse> {
  try {
    const res = await fetch(`${baseUrl}/api/website/cotizar`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ municipioOrigenId, municipioDestinoId }),
    });
    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Error al obtener municipios");
    }

    return data as CotizarAPIResponse;
  } catch (err) {
    console.error(err);
    throw new Error(err instanceof Error ? err.message : "Error desconocido");
  }
}
