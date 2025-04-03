export function formatMonto(value: string): string {
    // Reemplazar comas por puntos y eliminar caracteres no numéricos excepto el punto
    value = value.replace(/,/g, '.').replace(/[^0-9.]/g, '');

    // Evitar múltiples puntos decimales
    const parts = value.split('.');
    if (parts.length > 2) {
        value = parts[0] + '.' + parts.slice(1).join('');
    }

    // Convertir a número flotante
    const monto = parseFloat(value);

    // Si el valor es NaN o vacío, devolver "0.00"
    return isNaN(monto) ? '' : monto.toFixed(2);
}
