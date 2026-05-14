export const prerender = false;

import type { APIRoute } from "astro";
import { obtenerPdfGuia } from "@/lib/obtener-pdf-guia";

export const GET: APIRoute = async ({ url }) => {
  const numeroGuia = url.searchParams.get("guia")?.trim();

  if (!numeroGuia) {
    return new Response(JSON.stringify({ message: "Missing guia number" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  let upstreamResponse: Response;

  try {
    upstreamResponse = await obtenerPdfGuia(numeroGuia);
  } catch (error) {
    return new Response(
      JSON.stringify({
        message:
          error instanceof Error ? error.message : "Error downloading PDF",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }

  if (!upstreamResponse.ok) {
    const errorBody = await upstreamResponse.text();

    if (upstreamResponse.status === 401) {
      return new Response(
        JSON.stringify({
          message:
            "Unauthorized by upstream API. Revisa INTERNAL_PDF_KEY y API_BASE_URL.",
          upstreamError: errorBody || undefined,
        }),
        {
          status: 401,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    }

    return new Response(
      errorBody || JSON.stringify({ message: "Error downloading PDF" }),
      {
        status: upstreamResponse.status,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }

  const pdfBuffer = await upstreamResponse.arrayBuffer();

  return new Response(pdfBuffer, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename=\"${numeroGuia}.pdf\"`,
    },
  });
};
