import AccordionSection from "@/components/accordion";
import { title } from "@/components/primitives";
import SelectComponent from "@/components/selectItem";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Textarea } from "@nextui-org/input";
import { Checkbox } from "@nextui-org/checkbox";
import { SendIcon } from "@/components/icons";

export default function ContactPage() {
  return (
    <section className="text-center">
      <div className="items-start justify-between my-10 max-w-3xl mx-auto w-full">
        <div className="flex flex-col gap-3 items-start justify-start">
          <h1 className={title({ class: "text-center mb-6 font-semibold" })}>
            Contactanos
          </h1>
        </div>
        <div>
          <form className="flex flex-col gap-3">
            <Input
              type="text"
              label="Nombre Completo"
              radius="lg"
              variant="bordered"
              isRequired
              isClearable
            />
            <Input
              type="email"
              label="Correo Electrónico"
              radius="lg"
              variant="bordered"
              isRequired
              isClearable
            />
            <Input
              type="text"
              label="Numero de Telefono"
              radius="lg"
              variant="bordered"
              isRequired
              isClearable
            />
            <SelectComponent />
            <Textarea
              label="Mensaje"
              radius="lg"
              variant="bordered"
              isRequired
            />
            <Checkbox radius="lg" color="primary" isRequired>
              Acepto los Términos y Condiciones
            </Checkbox>
            <Button
              radius="lg"
              variant="ghost"
              color="primary"
              className="uppercase"
              endContent={<SendIcon size={20} />}
            >
              Enviar
            </Button>
          </form>
        </div>
      </div>
      <AccordionSection />
    </section>
  );
}
