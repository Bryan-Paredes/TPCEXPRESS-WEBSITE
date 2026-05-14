import type { MunicipiosAPIResponse } from "@/types/municipios";

const baseUrl = import.meta.env.DEV
  ? "http://localhost:3000"
  : "https://sistema.tpcxpress.com";

export async function getMunicipios(): Promise<MunicipiosAPIResponse> {
  try {
    const res = await fetch(`${baseUrl}/api/website/municipios`, {
      method: "GET",
    });
    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Error al obtener municipios");
    }

    return data as MunicipiosAPIResponse;
  } catch (err) {
    console.error(err);
    throw new Error(err instanceof Error ? err.message : "Error desconocido");
  }
}
