import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";

export default function QuoteModal({ formData }: any, service: string) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        radius="lg"
        variant="solid"
        color="primary"
        onPress={onOpen}
        className="my-5 text-white"
      >
        Ver Cotización
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 uppercase font-bold">
                Revisa tu Cotización!
              </ModalHeader>
              <ModalBody>
                {formData && (
                  <>
                    <ul className="list-none flex items-center justify-start gap-2">
                      <li>
                        Origen: <p className=""> {formData["origen"]} </p>
                      </li>
                    </ul>
                    <p>Origen: {formData["origen"]}</p>
                    <p>Destino: {formData["destino"]}</p>
                    <p>Envio: {formData["envio"]}</p>
                    <p>Cantidad: {formData["cantidad"]}</p>
                    <p>Peso: {formData["peso"]}</p>
                    <p>Precio: {formData["precio"]}</p>
                    {service === "estandar" && <p>Pago: {formData["pago"]}</p>}
                  </>
                )}
              </ModalBody>
              <ModalFooter>
                <Button variant="light" color="danger" onPress={onClose}>
                  Cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
