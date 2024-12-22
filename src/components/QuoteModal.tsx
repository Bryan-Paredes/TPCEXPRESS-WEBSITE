import calculateQuote from "@/config/calculateQuote";
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
    origen,
    destino,
    queEnvias,
    cantidadPaquetes,
    peso,
    precioProducto,
    dondePaga,
    servicio,
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
                  {origen}
                </p>
                <p className="uppercase font-bold">
                  <span className="text-primary">Destino: </span>
                  {destino}
                </p>
                <p className="uppercase font-bold">
                  <span className="text-primary">Envío: </span>
                  {queEnvias}
                </p>
                <p className="uppercase font-bold">
                  <span className="text-primary">Cantidad: </span>
                  {cantidadPaquetes}
                </p>
                <p className="font-bold">
                  <span className="text-primary uppercase">Peso: </span>
                  {peso} lbs
                </p>
                <p className="uppercase font-bold">
                  <span className="text-primary">Precio: </span>Q
                  {precioProducto}
                </p>

                {servicio === "estandar" && (
                  <p className="uppercase font-bold">
                    <span className="text-primary">Tipo de Pago: </span>
                    {dondePaga}
                  </p>
                )}

                <p className="uppercase font-bold text-xl text-green-600">
                  <span className="">Total: </span>
                  <span>
                    Q
                    {calculateQuote(
                      Number(cantidadPaquetes),
                      Number(precioProducto),
                      servicio === "estandar" && dondePaga === "destino"
                    )}
                  </span>
                </p>
              </>
            </ModalBody>
            <ModalFooter>
              <Button
                isDisabled
                isIconOnly
                as={Link}
                startContent={<PdfIcon />}
                onPress={() => doc.save("quote.pdf")}
                color="secondary"
              />
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
