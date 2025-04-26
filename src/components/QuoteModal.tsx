import doc from "@/config/pdf";
import {
  Button,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { PdfIcon } from "./icons";
import { useCotizacionStore } from "@/stores/servicio";

export default function QuoteModal({ isOpen, setIsOpen }: any) {
  const {
    tipoServicio,
    ciudadOrigen,
    ciudadDestino,
    tipoPaquete,
    costoProducto,
    dondePaga,
    costoServicio,
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
                  {ciudadOrigen}
                </p>
                <p className="uppercase font-bold">
                  <span className="text-primary">Destino: </span>
                  {ciudadDestino}
                </p>
                <p className="uppercase font-bold">
                  <span className="text-primary">Envío: </span>
                  {tipoPaquete}
                </p>
                {/* <p className="uppercase font-bold">
                  <span className="text-primary">Paquetes: </span>
                  {cantidadPaquetesQuote}
                </p>
                <p className="font-bold">
                  <span className="text-primary uppercase">Peso: </span>
                  {pesoQuote} lbs
                </p>
                <p className="uppercase font-bold">
                  <span className="text-primary">Precio: </span>Q
                  {precioProductoQuote}
                </p> */}

                {tipoServicio === "ESTANDAR" && (
                  <p className="uppercase font-bold">
                    <span className="text-primary">Pago en Destino: </span>
                    {dondePaga ? "Si" : "NO"}
                  </p>
                )}

                {tipoServicio === "COD" && (
                  <p className="uppercase font-bold">
                    <span className="text-primary">Costo Producto: </span>Q
                    {costoProducto}
                  </p>
                )}

                <p className="uppercase font-bold text-xl text-green-600">
                  <span className="">Costo de Servicio: </span>
                  <span>Q{costoServicio}</span>
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
