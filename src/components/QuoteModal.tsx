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
    origenQuote,
    destinoQuote,
    queEnviasQuote,
    cantidadPaquetesQuote,
    pesoQuote,
    precioProductoQuote,
    dondePagaQuote,
    servicioQuote,
  } = useCotizacionStore();

  console.log(origenQuote);

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
                  {origenQuote}
                </p>
                <p className="uppercase font-bold">
                  <span className="text-primary">Destino: </span>
                  {destinoQuote}
                </p>
                <p className="uppercase font-bold">
                  <span className="text-primary">Envío: </span>
                  {queEnviasQuote}
                </p>
                <p className="uppercase font-bold">
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
                </p>

                {servicioQuote === "estandar" && (
                  <p className="uppercase font-bold">
                    <span className="text-primary">Tipo de Pago: </span>
                    {dondePagaQuote}
                  </p>
                )}

                <p className="uppercase font-bold text-xl text-green-600">
                  <span className="">Total: </span>
                  <span>
                    Q
                    {calculateQuote(
                      Number(cantidadPaquetesQuote),
                      Number(precioProductoQuote),
                      servicioQuote === "estandar" &&
                        dondePagaQuote === "destino"
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
