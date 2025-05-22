export function calcularFechaEstimadaEntrega(fechaCreacion: string | Date): string {
    const fecha = new Date(fechaCreacion);
    fecha.setDate(fecha.getDate() + 2);
    return fecha.toLocaleDateString("es-GT", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "2-digit",
    });
}