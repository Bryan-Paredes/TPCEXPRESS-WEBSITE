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

      body: JSON.stringify(data),
      mode: 'cors',
    });

    if (!response.ok) {
      throw new Error(`Error al enviar el correo: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    throw new Error(`Error al enviar el correo: ${error}`);
  }
};



export const sendShip = async (data: SolicitudEnvio): Promise<{ success: boolean; message: string }> => {
  try {
    const response = await fetch('https://sistema.tpcxpress.com/api/solicitud', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_TOKEN}`
      },
      body: JSON.stringify(data),
    });


    if (!response.ok) {
      console.log(response.body);

      throw new Error(`Error al enviar el correo: ${response.status}`);
    }

    const resData = await response.json();
    console.log(resData);
    return resData;

  } catch (error) {
    console.log(error);

    throw new Error(`Error al enviar el correo: ${error}`);
  }
}