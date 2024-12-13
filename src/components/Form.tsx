import { interestArea } from "@/config/site";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import { BadgeCheck, Send } from "lucide-react";

export default function FormComponent() {
  const handlerSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  return (
    <section className="">
      <Form
        onSubmit={handlerSubmit}
        method="post"
        className="flex gap-4
      "
      >
        <Input
          isRequired
          isClearable
          type="text"
          label="Nombre Completo"
          name="name"
          variant="bordered"
        />
        <Input
          isRequired
          isClearable
          type="email"
          label="Correo Electrónico"
          name="email"
          variant="bordered"
        />
        <Input
          isRequired
          isClearable
          type="number"
          label="Número de Teléfono"
          name="phone"
          variant="bordered"
        />
        <Select
          isRequired
          label="Area de Interes"
          name="interes"
          variant="bordered"
        >
          {interestArea.map(({ label }) => {
            return <SelectItem value={label}>{label}</SelectItem>;
          })}
        </Select>
        <Textarea
          isRequired
          isClearable
          label="Mensaje"
          name="message"
          variant="bordered"
        />
        <Checkbox isRequired icon={<BadgeCheck />}>
          Aceptar el Término de Servicio
        </Checkbox>
        <Button
          type="submit"
          color="primary"
          variant="solid"
          startContent={<Send />}
          className="w-fit uppercase text-white"
        >
          Enviar
        </Button>
      </Form>
    </section>
  );
}
