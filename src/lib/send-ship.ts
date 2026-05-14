import type { SolicitudEnvio } from "@/types/solicitudEnvio";

const baseUrl = import.meta.env.DEV
  ? "http://localhost:3000"
  : "https://sistema.tpcxpress.com";

export const sendShip = async (
  data: SolicitudEnvio,
): Promise<{
  success: boolean;
  message: string;
  guia?: { guia: { numeroGuia: string; estado: string } };
}> => {
  try {
    const response = await fetch(`${baseUrl}/api/website`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: `Error al enviar el correo: ${result.message}`,
      };
    }

    return {
      success: true,
      message: `Mensaje enviado exitosamente`,
      guia: result,
    };
  } catch (error) {
    throw new Error(`Error al enviar el correo: ${error}`);
  }
};
