export function formatearFechaGT(fecha: string | Date): string {
    const fechaObj = new Date(fecha);

    return fechaObj.toLocaleDateString("es-GT", {
        weekday: "long",    // lunes, martes, etc. (opcional)
        day: "2-digit",     // 01, 02, etc.
        month: "long",      // enero, febrero, etc.
        year: "numeric",    // 2025
        // hour: "2-digit",    // 13
        // minute: "2-digit",  // 05
        // hour12: true        // formato de 12 horas con AM/PM
    });
}