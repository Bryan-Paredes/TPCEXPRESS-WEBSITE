import type { GuiaSeguimiento } from "@/types/seguimiento";


const baseUrl = import.meta.env.DEV ? 'http://localhost:3000' : 'https://sistema.tpcxpress.com';


export async function getGuiaTracking(guia: string): Promise<GuiaSeguimiento> {
    try {
        const res = await fetch(`${baseUrl}/api/website/guia?guia=${guia}`, {
            method: 'GET',
        });
        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.error || 'Guía no encontrada');
        }

        return data as GuiaSeguimiento;

    } catch (err) {
        console.error(err);
        throw new Error(err instanceof Error ? err.message : 'Error desconocido');
    }
}