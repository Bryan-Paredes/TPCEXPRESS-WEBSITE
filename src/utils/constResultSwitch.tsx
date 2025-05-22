import { EstadoGuia } from "@/types/seguimiento";
import { CheckCircle, Clock, Package, PackageOpen, Truck } from "lucide-react";

export const getStatusIcon = (status: string) => {
  switch (status) {
    case "ENTREGADO":
      return <CheckCircle className="h-6 w-6 text-green-500" />;
    case "EN_RUTA":
      return <Truck className="h-6 w-6 text-blue-500" />;
    case "RECOLECTADO":
      return <Package className="h-6 w-6 text-yellow-500" />;
    case "SIN_RECOLLECTAR":
      return <PackageOpen className="h-6 w-6 text-gray-500" />;
    case "DEVOLUCION":
      return <Package className="h-6 w-6 text-red-500" />;
    default:
      return <Clock className="h-6 w-6 text-gray-500" />;
  }
};

export const getStatusColor = (status: string) => {
  switch (status) {
    case "Entregado":
      return "bg-green-500";
    case "En Ruta":
      return "bg-blue-500";
    case "Recolección de Paquete":
      return "bg-yellow-500";
    case "Paquete Creado":
      return "bg-gray-500";
    default:
      return "bg-gray-500";
  }
};

// Función para mostrar el estado de forma amigable
export const getFriendlyStatus = (status: EstadoGuia) => {
  switch (status) {
    case EstadoGuia.SIN_RECOLLECTAR:
      return "Sin Recolectar";
    case EstadoGuia.RECOLECTADO:
      return "Recolectado";
    case EstadoGuia.EN_RUTA:
      return "En Ruta";
    case EstadoGuia.ENTREGADO:
      return "Entregado";
    default:
      // Convierte a Capitalizado y reemplaza guiones bajos por espacios
      return status
        .toLowerCase()
        .split("_")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
  }
};
