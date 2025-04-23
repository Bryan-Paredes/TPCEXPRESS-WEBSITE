import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { BadgeCheck } from "lucide-react";

interface Props {
  isOpen: boolean;
  guia?: string | null;
}

export default function HomeModal({ isOpen, guia }: Props) {
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
            <p className="capitalize">
              Gracias por tu solicitud, tu numero de guia es:
            </p>
            <div className="border-1.5 border-primary rounded-md p-4 my-4">
              <h1 className="flex flex-col gap-2 items-center justify-center">
                Numero de Guia:
                <span className="text-primary font-bold">{guia ?? "N/A"}</span>
              </h1>
            </div>
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
