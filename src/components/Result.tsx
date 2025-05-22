import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CheckCircle,
  Clock,
  MapPin,
  ArrowRight,
  Calendar,
  XCircle,
  Info,
  Camera,
  ClipboardCheck,
  User,
} from "lucide-react";
import {
  EstadoGuia,
  type GuiaSeguimiento,
  type IntentoEntrega,
} from "@/types/seguimiento";
import { motion, AnimatePresence } from "framer-motion";
import { calcularFechaEstimadaEntrega } from "@/utils/calcularFechaEntrega";
import { formatearFechaGT } from "@/utils/formatearFecha";
import {
  getFriendlyStatus,
  getStatusColor,
  getStatusIcon,
} from "@/utils/constResultSwitch";

// Esta es una versión simplificada para mostrar cómo se vería el resultado
export function TrackingResult({ guia }: { guia: GuiaSeguimiento | null }) {
  return (
    <AnimatePresence>
      {guia && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          <Card className="border-0 shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-white">
                  <h2 className="text-xl font-bold">Guía: {guia.numeroGuia}</h2>
                  <p className="text-purple-100">Seguimiento de tu envío</p>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                  {getStatusIcon(guia.estado)}
                  <span className="font-medium text-gray-800">
                    {getFriendlyStatus(guia.estado)}
                  </span>
                </div>
              </div>
            </div>
            <CardContent className="p-6 w-full border border-gray-100 rounded-b-lg">
              <div className="w-full flex gap-6 mb-8 items-center justify-center">
                <div className="w-full flex flex-col items-center p-4 bg-purple-50 dark:bg-black dark:border dark:border-gray-100 rounded-xl">
                  <div className="bg-purple-100 p-3 rounded-full mb-3">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <p className="text-sm text-gray-500 dark:text-white mb-1">
                    Origen
                  </p>
                  <p className="font-semibold text-center hidden sm:block">
                    {guia.solicitud.ciudadOrigen}
                  </p>
                  <span className="text-sm text-muted-foreground text-center">
                    {guia.solicitud.direccionRemitente}
                  </span>
                </div>
                <ArrowRight size={60} color="orange" />
                <div
                  className="w-full flex flex-col items-center p-4 bg-blue-50 dark:bg-black dark:border dark:border-gray-100
                 rounded-xl"
                >
                  <div className="bg-blue-100 p-3 rounded-full mb-3">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <p className="text-sm text-gray-500 dark:text-white mb-1">
                    Destino
                  </p>
                  <p className="font-semibold text-center hidden sm:block">
                    {guia.solicitud.ciudadDestino}
                  </p>
                  <span className="text-sm text-muted-foreground text-center">
                    {guia.solicitud.direccionDestinatario}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-evenly gap-4 mb-8 p-4 bg-gradient-to-r from-purple-50 to-indigo-50 dark:bg-gradient-to-r dark:from-yellow-700 dark:to-orange-700 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="bg-white p-2 rounded-full shadow-sm">
                    <Calendar className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-300">
                      Entrega estimada
                    </p>
                    <p className="font-semibold">
                      {calcularFechaEstimadaEntrega(guia.createdAt)}
                    </p>
                  </div>
                </div>

                {guia.fechaEntrega && (
                  <div className="flex items-center gap-3">
                    <div className="bg-white p-2 rounded-full shadow-sm">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Entregado el</p>
                      <p className="font-semibold">
                        {formatearFechaGT(guia.fechaEntrega)}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <Tabs defaultValue="history" className="w-full">
                <TabsList className="grid w-full grid-cols-3 overflow-hidden mb-6 bg-gray-100 dark:bg-black p-1 rounded-lg">
                  <TabsTrigger
                    value="history"
                    className="data-[state=active]:bg-gray-300 data-[state=active]:text-orange-700 data-[state=active]:shadow-sm rounded-md py-3 font-medium text-base"
                  >
                    Historial
                  </TabsTrigger>
                  <TabsTrigger
                    value="intentos"
                    className="data-[state=active]:bg-gray-300 data-[state=active]:text-orange-700 data-[state=active]:shadow-sm rounded-md py-3 font-medium text-base"
                  >
                    Intentos
                  </TabsTrigger>
                  <TabsTrigger
                    value="entregas"
                    className="data-[state=active]:bg-gray-300 data-[state=active]:text-orange-700 data-[state=active]:shadow-sm rounded-md py-3 font-medium text-base"
                  >
                    Entregas
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="history" className="mt-0">
                  <div className="space-y-0">
                    {/* Evento: Paquete Creado */}
                    <div className="relative pl-8 pb-8">
                      {/* Línea vertical */}
                      <div className="absolute left-3.5 top-3 h-full w-0.5 bg-gray-200 "></div>
                      {/* Punto de estado */}
                      <div
                        className={`absolute left-0 top-0 h-7 w-7 rounded-full flex items-center justify-center ${getStatusColor(
                          "Paquete Creado"
                        )}`}
                      >
                        <div className="h-3 w-3 bg-white rounded-full"></div>
                      </div>
                      <div className="bg-gray-50 dark:bg-black dark:border dark:border-gray-200 p-4 rounded-lg shadow-sm">
                        <div className="flex items-center gap-2 mb-2">
                          {getStatusIcon("SIN_RECOLLECTAR")}
                          <h3 className="font-semibold text-gray-800 dark:text-white">
                            Paquete Creado
                          </h3>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-white text-sm">
                          <Clock className="h-4 w-4 text-gray-400" />
                          <span>{formatearFechaGT(guia.createdAt)}</span>
                        </div>
                      </div>
                    </div>
                    {/* Evento: Recolección de Paquete */}
                    {guia.fechaRecoleccion && (
                      <div className="relative pl-8 pb-8">
                        <div className="absolute left-3.5 top-3 h-full w-0.5 bg-gray-200"></div>
                        <div
                          className={`absolute left-0 top-0 h-7 w-7 rounded-full flex items-center justify-center ${getStatusColor(
                            "Recolección de Paquete"
                          )}`}
                        >
                          <div className="h-3 w-3 bg-white rounded-full"></div>
                        </div>
                        <div className="bg-gray-50 dark:bg-black dark:border dark:border-gray-200 p-4 rounded-lg shadow-sm">
                          <div className="flex items-center gap-2 mb-2">
                            {getStatusIcon("RECOLECTADO")}
                            <h3 className="font-semibold text-gray-800 dark:text-white">
                              Recolección de Paquete
                            </h3>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600 dark:text-white text-sm">
                            <Clock className="h-4 w-4 text-gray-400" />
                            <span>
                              {formatearFechaGT(guia.fechaRecoleccion)}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                    {guia.mensajero.id && (
                      <div className="relative pl-8 pb-8">
                        <div className="absolute left-3.5 top-3 h-full w-0.5 bg-gray-200"></div>
                        <div
                          className={`absolute left-0 top-0 h-7 w-7 rounded-full flex items-center justify-center ${getStatusColor(
                            "En Ruta"
                          )}`}
                        >
                          <div className="h-3 w-3 bg-white rounded-full"></div>
                        </div>
                        <div className="bg-gray-50 dark:bg-black dark:border dark:border-gray-200 p-4 rounded-lg shadow-sm">
                          <div className="flex items-center gap-2 mb-2">
                            {getStatusIcon("EN_RUTA")}
                            <h3 className="font-semibold text-gray-800 dark:text-white">
                              En Ruta
                            </h3>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600 dark:text-white text-sm">
                            <Clock className="h-4 w-4 text-gray-400" />
                            <span>Paquete en ruta para ser entregado</span>
                          </div>
                          {guia.intentosEntregas &&
                            guia.intentosEntregas.length > 0 && (
                              <span className="text-sm text-red-600 font-medium">
                                ({guia.intentosEntregas?.length} intentos de
                                entrega)
                              </span>
                            )}
                        </div>
                      </div>
                    )}
                    {/* Evento: Entregado */}
                    {guia.fechaEntrega && (
                      <div className="relative pl-8 pb-8">
                        <div
                          className={`absolute left-0 top-0 h-7 w-7 rounded-full flex items-center justify-center ${getStatusColor(
                            "Entregado"
                          )}`}
                        >
                          <div className="h-3 w-3 bg-white rounded-full"></div>
                        </div>
                        <div className="bg-gray-50 dark:bg-black dark:border dark:border-gray-200 p-4 rounded-lg shadow-sm">
                          <div className="flex items-center gap-2 mb-2">
                            {getStatusIcon("ENTREGADO")}
                            <h3 className="font-semibold text-gray-800 dark:text-white">
                              Entregado
                            </h3>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600 dark:text-white text-sm">
                            <Clock className="h-4 w-4 text-gray-400" />
                            <span>{formatearFechaGT(guia.fechaEntrega)}</span>
                          </div>
                        </div>
                      </div>
                    )}
                    {guia.estado === EstadoGuia.DEVOLUCION && (
                      <div className="relative pl-8 pb-8">
                        <div
                          className={`absolute left-0 top-0 h-7 w-7 rounded-full flex items-center justify-center ${getStatusColor(
                            "Devolución"
                          )}`}
                        >
                          <div className="h-3 w-3 bg-white rounded-full"></div>
                        </div>
                        <div className="bg-gray-50 dark:bg-black dark:border dark:border-gray-200 p-4 rounded-lg shadow-sm">
                          <div className="flex items-center gap-2 mb-2">
                            {getStatusIcon("DEVOLUCION")}
                            <h3 className="font-semibold text-gray-800 dark:text-white">
                              Devolución
                            </h3>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600 dark:text-white text-sm">
                            <Clock className="h-4 w-4 text-gray-400" />
                            <span>Paquete en proceso de devolución</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="intentos" className="mt-0">
                  {guia.intentosEntregas && guia.intentosEntregas.length > 0 ? (
                    <div className="space-y-4">
                      {guia.intentosEntregas.map(
                        (attempt: IntentoEntrega, index: number) => (
                          <div
                            key={index}
                            className="bg-red-100 border-2 border-red-200 dark:bg-black p-5 rounded-xl"
                          >
                            <div className="flex items-center gap-3 mb-3">
                              <div className="bg-white p-2 rounded-full shadow-sm">
                                <XCircle className="h-5 w-5 text-red-500" />
                              </div>
                              <div>
                                <h3 className="font-semibold text-gray-800 dark:text-white">
                                  Intento de entrega {index + 1}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                  {formatearFechaGT(attempt.createdAt)}
                                </p>
                              </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                              <div className="bg-white dark:bg-gray-300 p-3 rounded-lg shadow-sm">
                                <p className="text-sm text-gray-500 mb-1">
                                  Motivo
                                </p>
                                <p className="font-medium text-red-700">
                                  {attempt.descripcion}
                                </p>
                              </div>
                              <div className="bg-white dark:bg-gray-300 p-3 rounded-lg shadow-sm">
                                <p className="text-sm text-gray-500 mb-1">
                                  Notas
                                </p>
                                <p className="font-medium dark:text-gray-800">
                                  {attempt.descripcion || "Sin notas"}
                                </p>
                              </div>
                              <div className="bg-white dark:bg-gray-300 p-4 rounded-lg shadow-sm">
                                <div className="flex items-center gap-2 mb-3">
                                  <Camera className="h-4 w-4 text-red-600" />
                                  <p className="font-medium text-gray-700">
                                    Comprobante fotográfico
                                  </p>
                                </div>
                                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600 flex items-center justify-center">
                                  {attempt.fotoUrl ? (
                                    <img
                                      src={
                                        attempt.fotoUrl || "/placeholder.svg"
                                      }
                                      alt="Comprobante de intento de entrega"
                                      width={150}
                                      height={150}
                                      decoding="async"
                                      loading="lazy"
                                      className="max-w-full h-auto rounded-lg"
                                    />
                                  ) : (
                                    <div className="text-center p-4">
                                      <p className="text-gray-500">
                                        No hay comprobante disponible
                                      </p>
                                    </div>
                                  )}
                                </div>
                                <p className="text-xs text-gray-500 text-center mt-2">
                                  Imagen capturada durante el intento de entrega
                                </p>
                              </div>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  ) : (
                    <div className="bg-gray-50 p-6 rounded-xl text-center">
                      <div className="inline-flex items-center justify-center bg-gray-100 p-3 rounded-full mb-3">
                        <Info className="h-6 w-6 text-gray-500" />
                      </div>
                      <h3 className="text-lg font-medium text-gray-700 mb-2">
                        No hay intentos de entrega registrados
                      </h3>
                      <p className="text-gray-500">
                        Este envío no ha tenido intentos de entrega fallidos
                        hasta el momento.
                      </p>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="entregas" className="mt-0">
                  {guia.fechaEntrega ? (
                    <div className="bg-green-50 border border-green-200 dark:bg-black dark:border-gray-600 p-6 rounded-xl">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <ClipboardCheck className="h-5 w-5 text-green-600" />
                        Entrega Registrada
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="flex items-center gap-2 mb-2">
                              <Calendar className="h-4 w-4 text-green-600" />
                              <p className="font-medium text-gray-700">
                                Fecha de entrega
                              </p>
                            </div>
                            <p className="text-gray-800">
                              {formatearFechaGT(guia.fechaEntrega)}
                            </p>
                          </div>

                          <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="flex items-center gap-2 mb-2">
                              <User className="h-4 w-4 text-green-600" />
                              <p className="font-medium text-gray-700">
                                Recibido por
                              </p>
                            </div>
                            <p className="text-gray-800">
                              {guia.entrega?.nombreRecibe}
                            </p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="flex items-center gap-2 mb-3">
                              <Camera className="h-4 w-4 text-green-600" />
                              <p className="font-medium text-gray-700">
                                Foto de entrega
                              </p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex items-center justify-center">
                              <img
                                decoding="async"
                                loading="lazy"
                                src={guia.entrega?.fotoComprobante || ""}
                                alt="Foto de entrega"
                                width={300}
                                height={200}
                                className="max-w-full h-auto rounded-lg"
                              />
                            </div>
                            <p className="text-xs text-gray-500 text-center mt-2">
                              Imagen capturada durante la entrega
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-gray-50 p-6 rounded-xl text-center">
                      <div className="inline-flex items-center justify-center bg-gray-100 p-3 rounded-full mb-3">
                        <Info className="h-6 w-6 text-gray-500" />
                      </div>
                      <h3 className="text-lg font-medium text-gray-700 mb-2">
                        No hay registro de entrega
                      </h3>
                      <p className="text-gray-500">
                        Este envío aún no ha sido entregado.
                      </p>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
