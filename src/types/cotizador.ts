export interface CotizarAPIResponse {
    success: boolean;
    data: Data;
}

export interface Data {
    origen: Destino;
    destino: Destino;
    costo: string;
    moneda: string;
}

export interface Destino {
    municipio: string;
    grupo: string;
}
