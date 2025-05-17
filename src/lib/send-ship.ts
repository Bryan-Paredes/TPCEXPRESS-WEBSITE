import type { SolicitudEnvio } from "@/types/solicitudEnvio";

export const sendShip = async (data: SolicitudEnvio): Promise<{ success: boolean; message: string, guia?: { guia: { numeroGuia: string, estado: string } } }> => {
    try {
        const response = await fetch('https://sistema.tpcxpress.com/api/website', {
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