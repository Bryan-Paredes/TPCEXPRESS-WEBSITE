export const sendEmail = async (data: {
  name: string;
  email: string;
  phone: string;
  interes: string;
  message: string;
  terms: boolean;
}): Promise<{ success: boolean; message: string }> => {
  try {
    const response = await fetch('http://localhost:3000/sendContact', {
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
    throw error;
  }
};
