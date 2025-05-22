export interface IntentoEntrega {
    fotoUrl: string;
    descripcion: string;
    createdAt: string;
}

export enum EstadoGuia {
  SIN_RECOLLECTAR = "SIN_RECOLLECTAR",
  RECOLECTADO = "RECOLECTADO",
  EN_RUTA = "EN_RUTA",
  ENTREGADO = "ENTREGADO",
  DEVOLUCION = "DEVOLUCION",
  DEVOLUCION_ENTREGADO = "DEVOLUCION_ENTREGADO",
  ANULADA = "ANULADA",
  LIQUIDADO = "LIQUIDADO"
}

export interface GuiaSeguimiento {
    id: string;
    numeroGuia: string;
    estado: EstadoGuia;
    fechaRecoleccion: string | null;
    fechaEntrega: string | null;
    createdAt: string;
    solicitud: {
        ciudadOrigen: string;
        ciudadDestino: string;
        direccionRemitente: string;
        direccionDestinatario: string;
    };
    entrega: {
        createdAt: string;
        fotoComprobante: string;
        nombreRecibe: string;
    } | null;
    mensajero: {
        id: string;
    }
    intentosEntregas?: IntentoEntrega[];
}