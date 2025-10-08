import doc from "@/config/pdf";
import {
  Button,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Spinner,
} from "@nextui-org/react";
import { PdfIcon } from "./icons";
import { useCotizacionStore } from "@/stores/servicio";
import { formatearQuetzal } from "@/utils/formatearQuetzal";

export default function QuoteModal({ isOpen, setIsOpen }: any) {
  const {
    tipoServicio,
    ciudadOrigenNombre,
    ciudadDestinoNombre,
    tipoPaquete,
    cantidadPaquetes,
    costoProducto,
    dondePaga,
    costoServicio,
    isCalculatingQuote,
  } = useCotizacionStore();

  return (
    <>
      <Modal isOpen={isOpen} backdrop="blur">
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1 uppercase font-bold">
              Esta es tu cotización
            </ModalHeader>
            <ModalBody>
              <>
                <p className="uppercase font-bold">
                  <span className="text-primary">Origen: </span>
                  {ciudadOrigenNombre}
                </p>
                <p className="uppercase font-bold">
                  <span className="text-primary">Destino: </span>
                  {ciudadDestinoNombre}
                </p>
                <p className="uppercase font-bold">
                  <span className="text-primary">Envío: </span>
                  {tipoPaquete}
                </p>
                <p className="uppercase font-bold">
                  <span className="text-primary">Cantidad de Paquetes: </span>
                  {cantidadPaquetes}
                </p>

                {/* {tipoServicio === "ESTANDAR" && (
                  <p className="uppercase font-bold">
                    <span className="text-primary">Pago en Destino: </span>
                    {dondePaga ? "Si" : "NO"}
                  </p>
                )} */}

                {tipoServicio === "COD" && (
                  <p className="uppercase font-bold">
                    <span className="text-primary">Costo Producto: </span>Q
                    {costoProducto}
                  </p>
                )}

                <p className="uppercase font-bold text-lg text-green-600 flex items-center gap-2">
                  <span className="">Costo de Servicio: </span>
                  <span className="flex items-center gap-2">
                    {isCalculatingQuote ? (
                      <div className="flex items-center gap-2">
                        <Spinner size="sm" color="success" />
                        <span className="text-sm text-gray-500">
                          Calculando...
                        </span>
                      </div>
                    ) : (
                      formatearQuetzal(costoServicio ? costoServicio : 0)
                    )}
                  </span>
                </p>
              </>
            </ModalBody>
            <ModalFooter>
              <Button
                isDisabled
                as={Link}
                startContent={<PdfIcon />}
                onPress={() => doc.save("quote.pdf")}
                color="secondary"
              >
                soon
              </Button>
              <Button
                as={Link}
                variant="light"
                color="warning"
                href="/envio"
                className="uppercase"
              >
                Realiza Envío
              </Button>
              <Button
                variant="light"
                color="danger"
                className="uppercase"
                onPress={() => setIsOpen(false)}
              >
                Cerrar
              </Button>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </>
  );
}
