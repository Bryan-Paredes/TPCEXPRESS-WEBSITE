import { Alert } from "@nextui-org/react";
import { BellRing } from "lucide-react";

export default function AlertUI({ title }: any) {
  return (
    <Alert
      variant="flat"
      color="primary"
      icon={<BellRing size={18} />}
      title={title}
      description=""
      className="p-0"
    />
  );
}
