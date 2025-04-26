import type { SolicitudEnvio } from "@/types/solicitudEnvio";
import { API_TOKEN } from "astro:env/client";

export const sendEmail = async (data: {
  name: string;
  email: string;
  phone: string;
  interes: string;
  message: string;
  terms: boolean;
}): Promise<{ success: boolean; message: string }> => {
  try {


    const response = await fetch('https://email-server-tpcexpress.onrender.com/sendContact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'no-cors',
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Error al enviar el correo: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    throw new Error(`Error al enviar el correo: ${error}`);
  }
};



export const sendShip = async (data: SolicitudEnvio): Promise<{ success: boolean; message: string, guia?: { guia: { numeroGuia: string, estado: string } } }> => {
  try {
    const response = await fetch('http://localhost:3000/api/website', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json()


    if (!response.ok) {
      return {
        success: false,
        message: `Error al enviar el correo: ${result.message}`,
      }
    }

    return {
      success: true,
      message: `Mensaje enviado exitosamente`,
      guia: result
    }

  } catch (error) {
    console.log(error);

    throw new Error(`Error al enviar el correo: ${error}`);
  }
}