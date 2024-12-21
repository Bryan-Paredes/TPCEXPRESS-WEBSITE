import { Button, Link } from "@nextui-org/react";
import { Route } from "lucide-react";
import { SendServiceIcon, WhatsappIcon } from "./icons";

function HeaderButtons() {
  return (
    <div className="flex gap-4 items-center my-5">
      <Button
        as={Link}
        variant="ghost"
        color="primary"
        href="/quote"
        className="uppercase font-semibold"
        startContent={<Route size={20} />}
      >
        Cotización
      </Button>
      <Button
        as={Link}
        isExternal
        variant="ghost"
        color="success"
        href="https://wa.me/50258644597"
        className="uppercase font-semibold"
        startContent={<WhatsappIcon size={20} />}
      >
        Whatsapp
      </Button>
    </div>
  );
}

function ServiceButton() {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-center my-5 mx-auto">
      <Button
        as={Link}
        size="lg"
        variant="solid"
        color="primary"
        radius="lg"
        className="text-white"
        href="/quote"
        startContent={<Route size={30} />}
      >
        Cotización
      </Button>
      <Button
        as={Link}
        size="lg"
        variant="solid"
        color="primary"
        radius="lg"
        href="/envio"
        className="text-white"
        startContent={<SendServiceIcon size={50} />}
      >
        Solicitar Servicio
      </Button>
    </div>
  );
}

export { HeaderButtons, ServiceButton };
