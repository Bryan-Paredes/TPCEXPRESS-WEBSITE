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

export default function QuoteModal({
  formData,
  isOpen,
  setIsOpen,
  service,
}: any) {
  return (
    <>
      <Modal isOpen={isOpen} backdrop="blur">
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1 uppercase font-bold">
              Esta es tu cotización
            </ModalHeader>
            <ModalBody>
              {formData && (
                <>
                  <p className="uppercase font-bold">
                    <span className="text-primary">Origen: </span>
                    {formData["origen"]}
                  </p>
                  <p className="uppercase font-bold">
                    <span className="text-primary">Destino: </span>
                    {formData["destino"]}
                  </p>
                  <p className="uppercase font-bold">
                    <span className="text-primary">Envío: </span>
                    {formData["queEnvias"]}
                  </p>
                  <p className="uppercase font-bold">
                    <span className="text-primary">Cantidad: </span>
                    {formData["cantidadPaquetes"]}
                  </p>
                  <p className="font-bold">
                    <span className="text-primary uppercase">Peso: </span>
                    {formData["peso"]} lbs
                  </p>
                  <p className="uppercase font-bold">
                    <span className="text-primary">Precio: </span>Q
                    {formData["precioProducto"]}
                  </p>

                  {service === "estandar" && (
                    <p className="uppercase font-bold">
                      <span className="text-primary">Tipo de Pago: </span>
                      {formData["dondePaga"]}
                    </p>
                  )}

                  <p className="uppercase font-bold text-xl text-green-600">
                    <span className="">Total: </span>
                    <span>
                      Q
                      {calculateQuote(
                        formData["cantidadPaquetes"],
                        formData["precioProducto"],
                        service === "estandar" && formData["pago"] === "destino"
                      )}
                    </span>
                  </p>
                </>
              )}
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
