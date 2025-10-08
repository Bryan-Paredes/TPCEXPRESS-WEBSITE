export interface MunicipiosAPIResponse {
    success: boolean;
    data: Datum[];
}

export interface Datum {
    id: string;
    nombre: string;
}
