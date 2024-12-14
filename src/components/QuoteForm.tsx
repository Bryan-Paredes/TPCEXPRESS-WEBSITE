import { deliveryOptions, packageOptions } from "@/config/site";
import {
  Form,
  Input,
  RadioGroup,
  Radio,
  Select,
  SelectItem,
  Button,
} from "@nextui-org/react";
import { useState } from "react";

export default function QuoteForm({ service }: { service: string }) {
  const [isSelected, setIsSelected] = useState("");

  return (
    <div>
      <Form className="flex flex-col gap-2">
        <Select
          isRequired
          label="Selecciona Origen"
          name="Origen"
          radius="lg"
          variant="bordered"
        >
          {deliveryOptions.map(({ key, label }) => (
            <SelectItem key={key}>{label}</SelectItem>
          ))}
        </Select>
        <Select
          isRequired
          label="Selecciona Destino"
          name="Destino"
          radius="lg"
          variant="bordered"
        >
          {deliveryOptions.map(({ key, label }) => (
            <SelectItem key={key}>{label}</SelectItem>
          ))}
        </Select>
        <Select
          isRequired
          label="Que Envías?"
          name="Envío"
          radius="lg"
          variant="bordered"
        >
          {packageOptions.map(({ key, label }) => (
            <SelectItem key={key}>{label}</SelectItem>
          ))}
        </Select>
        <Input
          isRequired
          isClearable
          max={5}
          min={1}
          type="number"
          label="Cantidad de Paquetes"
          name="Cantidad"
          variant="bordered"
        />
        <Input
          isRequired
          isClearable
          max={10}
          min={1}
          type="number"
          label="Peso Total (lbs)"
          name="Peso"
          variant="bordered"
        />
        <Input
          isRequired
          isClearable
          type="text"
          label="Precio de producto a cobrar Q"
          name="Peso"
          variant="bordered"
          {...(service === "estandar"
            ? {
                description: (
                  <p className="text-red-500">
                    Solicitamos el precio para calcular el costo del seguro
                  </p>
                ),
              }
            : {})}
        />
        {service === "estandar" && (
          <RadioGroup
            isRequired
            label="Donde deseas pagar?"
            name="Pago"
            value={isSelected}
            onValueChange={setIsSelected}
          >
            <Radio value="pago-origen">Origen</Radio>
            <Radio value="pago-destino">Destino (+Q3.00)</Radio>
          </RadioGroup>
        )}
        <Button
          type="submit"
          color="primary"
          variant="solid"
          className="w-fit uppercase text-white my-5"
        >
          Cotizar
        </Button>
      </Form>
    </div>
  );
}
