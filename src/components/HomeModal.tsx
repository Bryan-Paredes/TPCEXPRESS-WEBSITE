import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import {
  ArrowDown,
  BadgeCheck,
  CircleArrowDown,
  FileDown,
  Loader2,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface Props {
  isOpen: boolean;
  guia?: string | null;
}

export default function HomeModal({ isOpen, guia }: Props) {
  const [loading, setLoading] = useState(false);

  const handleDownloadGuia = async (guia: string) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://sistema.tpcxpress.com/api/pdf?guia=${guia}`
      );

      if (!res.ok) return new Response(res.statusText, { status: res.status });

      const blob = await res.blob();

      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = url;
      link.download = `guia-${guia}.pdf`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.log(error);
      toast.error("¡Ha ocurrido un error al descargar el guia!");
    } finally {
      setLoading(false);
    }
  };

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
            <p className="capitalize text-center">
              Gracias por tu solicitud, nos contactaremos contigo.
            </p>
            <div className="border-1.5 border-primary rounded-md p-4 my-4">
              <h1 className="flex flex-col gap-2 items-center justify-center">
                Numero de Guia:
                <span className="text-primary font-bold">{guia ?? "N/A"}</span>
              </h1>
            </div>
            <p className="flex flex-col gap-2 items-center text-center font-bold">
              <span>Recuerda descargar la guia con el botón de abajo</span>
              <CircleArrowDown size={20} className="animate-bounce" />
            </p>
          </ModalBody>
          <ModalFooter className="flex flex-col sm:flex-row items-start justify-center ">
            <Button
              variant="solid"
              disabled={loading}
              endContent={
                loading ? (
                  <Loader2 size={22} className="animate-spin" />
                ) : (
                  <FileDown size={22} />
                )
              }
              onPress={() => handleDownloadGuia(guia!)}
            >
              {loading ? "Descargando..." : "Generar Guia"}
            </Button>
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
