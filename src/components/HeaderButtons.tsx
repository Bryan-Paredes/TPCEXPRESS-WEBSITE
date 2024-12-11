import { Button } from "@nextui-org/react";
import { Route } from "lucide-react";
import { WhatsappIcon } from "./icons";

export default function HeaderButtons() {
  return (
    <div className="flex gap-4 items-center my-5">
      <Button
        variant="ghost"
        color="primary"
        className="uppercase font-semibold"
        startContent={<Route size={20} />}
      >
        Cotización
      </Button>
      <Button
        variant="ghost"
        color="success"
        className="uppercase font-semibold"
        startContent={<WhatsappIcon size={20} />}
      >
        Whatsapp
      </Button>
    </div>
  );
}
