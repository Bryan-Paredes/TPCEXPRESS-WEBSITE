import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { BadgeCheck } from "lucide-react";

export default function HomeModal({ isOpen }: any) {
  return (
    <>
      <Modal isOpen={isOpen} backdrop="opaque">
        <ModalContent>
          <ModalHeader className="flex flex-col gap-2 items-center justify-center">
            <BadgeCheck
              size={56}
              color="green"
              className="animate-drip-expand"
            />
            <h3 className="text-lg font-bold">¡Listo!</h3>
          </ModalHeader>
          <ModalBody className="mx-auto">
            <p>Gracias por tu solicitud, te responderemos en breve!</p>
          </ModalBody>
          <ModalFooter>
            <a href="/quote">
              <Button color="warning" variant="bordered" href="/quote">
                Nueva Solicitud
              </Button>
            </a>
            <a href="/">
              <Button color="primary" href="/" className="uppercase">
                Inicio
              </Button>
            </a>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
