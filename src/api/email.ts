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
    });

    if (!response.ok) {
      throw new Error(`Error al enviar el correo: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    throw new Error(`Error al enviar el correo: ${error}`);
  }
};

export const sendShip = async (data: {
  origenEnvio: string;
  nombreEnvio: string;
  numeroRemitente: string;
  correoRemitente: string;
  direccionRemitente: string;
  textRecoleccion?: string;
  origenDestino: string;
  nombreDestino: string;
  numeroDestino: string;
  correoDestino: string;
  direccionDestino: string;
  textDestino?: string;
  nit?: string;
  nombreNit?: string;
  banco?: string;
  tipoCuenta?: string;
  numeroCuenta?: string;
  nombreCuenta?: string;
  terms: boolean;
}): Promise<{ success: boolean; message: string }> => {
  try {
    const response = await fetch('https://email-server-tpcexpress.onrender.com/sendEnvio', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Error al enviar el correo: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    throw new Error(`Error al enviar el correo: ${error}`);
  }
}