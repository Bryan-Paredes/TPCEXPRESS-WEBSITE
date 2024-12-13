"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { coverage } from "@/config/site";
import { PointIcon } from "./icons";

export default function CoverageModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        radius="lg"
        variant="ghost"
        color="primary"
        onPress={onOpen}
        className="my-5"
      >
        Mira nuestra cobertura
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 uppercase font-bold">
                Cobertura de Servicio
              </ModalHeader>
              <ModalBody>
                {coverage.map(({ label }) => (
                  <li
                    key={label}
                    className="list-none flex items-center justify-start gap-2"
                  >
                    <span>
                      <PointIcon size={20} className="text-primary" />
                    </span>
                    {label}
                  </li>
                ))}
              </ModalBody>
              <ModalFooter>
                <Button
                  radius="lg"
                  color="danger"
                  variant="light"
                  onPress={onClose}
                >
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
