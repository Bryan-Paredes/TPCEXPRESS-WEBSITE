import { Button, Link } from "@nextui-org/react";
import { PackageSearch, Route } from "lucide-react";
import { SendServiceIcon, WhatsappIcon } from "./icons";

function HeaderButtons() {
  return (
    <div className="flex flex-col md:flex-row items-start gap-4 my-5">
      <Button
        as={Link}
        variant="ghost"
        size="sm"
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
        size="sm"
        variant="ghost"
        color="success"
        href="https://wa.me/50258644597"
        className="uppercase font-semibold"
        startContent={<WhatsappIcon size={20} />}
      >
        Whatsapp
      </Button>
      <Button
        as={Link}
        variant="ghost"
        size="sm"
        color="warning"
        href="/seguimiento"
        className="uppercase font-semibold hover:text-white"
        startContent={<PackageSearch size={20} />}
      >
        Rastrea tu guía
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
    </div>
  );
}

export { HeaderButtons, ServiceButton };
