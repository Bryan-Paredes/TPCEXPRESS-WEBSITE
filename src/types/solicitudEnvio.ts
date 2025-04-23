export interface SolicitudEnvio {
    tipoServicio: string;
    costoProducto: number;
    cantidadPaquetes: number;
    ciudadOrigen: string;
    nombreRemitente: string;
    correoRemitente: string;
    telefonoRemitente: string;
    direccionRemitente: string;
    obsRemitente: string;
    ciudadDestino: string;
    nombreDestinatario: string;
    correoDestinatario: string;
    telefonoDestinatario: string;
    direccionDestinatario: string;
    obsDestinatario: string;
    nit: string;
    nombreFactura: string;
    banco?: string;
    tipoCuenta?: string;
    numeroCuenta?: string;
    nombreCuenta?: string;
    terminos: boolean;
}