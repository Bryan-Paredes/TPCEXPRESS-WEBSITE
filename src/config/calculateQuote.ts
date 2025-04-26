export default function calculateQuote(costoProducto: number, pagaEnDestino: boolean, tipoServicio: string, ciudadOrigen: string, ciudadDestino: string): number {


    const ciudadesPerimetro = ['Mixco', 'Guatemala'] // 1=Mixco, 2=Guatemala

    const enPerimetro = ciudadesPerimetro.includes(ciudadOrigen) && ciudadesPerimetro.includes(ciudadDestino)

    // if (enPerimetro) {
    //     return Math.round(costoProducto * 1.1)
    // }


    // let totalCost: number;


    const isPayDestination = tipoServicio === 'COD' ? true : pagaEnDestino


    const cantidadPaquetes: number = 1 // Cantidad de paquetes
    const precioPorPaquete: number = enPerimetro ? 45 : 60; // Precio por paquete
    const costoSeguro: number = 0.03; // 3% seguro
    const cargoCostoDestino: number = 0.05; // 5% cargo al destino

    // Calculate base values
    const totalPorPaquete = cantidadPaquetes * precioPorPaquete;
    const seguro = costoProducto * costoSeguro;
    const cargoDestino = isPayDestination ? costoProducto * cargoCostoDestino : 0;



    // Calculate total for standard service
    const totalCost: number = totalPorPaquete + seguro + cargoDestino;


    return Math.round(totalCost)
}