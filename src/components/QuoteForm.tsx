import { deliveryOptions, packageOptions } from "@/config/site";
import {
  Form,
  Input,
  RadioGroup,
  Radio,
  Select,
  SelectItem,
  Button,
  Alert,
} from "@nextui-org/react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import QuoteModal from "./QuoteModal";

export default function QuoteForm({ service }: { service: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState(null);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      origen: "",
      destino: "",
      envio: "",
      cantidad: "",
      peso: "",
      precio: "",
      pago: "",
    },
  });

  const onSubmit = (data: any) => {
    setFormData(data);
    setIsOpen(true);
  };

  return (
    <div>
      <Form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="origen"
          render={({ field, fieldState: { invalid, error } }) => (
            <Select
              {...field}
              isRequired
              validationBehavior="aria"
              label="Selecciona Origen"
              variant="bordered"
              value={field.value}
              errorMessage={error?.message}
              isInvalid={invalid}
            >
              {deliveryOptions.map(({ key, label }) => (
                <SelectItem key={label}>{label}</SelectItem>
              ))}
            </Select>
          )}
          rules={{ required: "Debes Seleccionar el Origen" }}
        />
        <Controller
          control={control}
          name="destino"
          render={({ field, fieldState: { invalid, error } }) => (
            <Select
              {...field}
              isRequired
              validationBehavior="aria"
              label="Selecciona Destino"
              variant="bordered"
              value={field.value}
              errorMessage={error?.message}
              isInvalid={invalid}
            >
              {deliveryOptions.map(({ key, label }) => (
                <SelectItem key={label}>{label}</SelectItem>
              ))}
            </Select>
          )}
          rules={{ required: "Debes Seleccionar el Destino" }}
        />
        <Controller
          control={control}
          name="envio"
          render={({ field, fieldState: { invalid, error } }) => (
            <Select
              {...field}
              isRequired
              validationBehavior="aria"
              label="Que Envías?"
              variant="bordered"
              value={field.value}
              errorMessage={error?.message}
              isInvalid={invalid}
            >
              {packageOptions.map(({ key, label }) => (
                <SelectItem key={label}>{label}</SelectItem>
              ))}
            </Select>
          )}
          rules={{ required: "Debes Seleccionar Qué Envias" }}
        />
        <Controller
          control={control}
          name="cantidad"
          render={({ field, fieldState: { invalid, error } }) => (
            <Input
              {...field}
              isRequired
              type="number"
              max={5}
              min={1}
              errorMessage={error?.message}
              validationBehavior="aria"
              isInvalid={invalid}
              label="Cantidad de Paquetes"
              name={field.name}
              variant="bordered"
            />
          )}
          rules={{
            min: { value: 1, message: "El valor debe ser mayor a 0" },
            max: { value: 5, message: "El valor debe ser menor a 5" },
            validate: (value) => {
              const numValue = Number(value);
              return !isNaN(numValue) || "Ingrese un valor valido";
            },
            required: "Debes Seleccionar la Cantidad de Paquetes",
          }}
        />
        <Controller
          control={control}
          name="peso"
          render={({ field, fieldState: { invalid, error } }) => (
            <Input
              {...field}
              isRequired
              type="number"
              max={10}
              min={1}
              errorMessage={error?.message}
              validationBehavior="aria"
              isInvalid={invalid}
              label="Peso Total (lbs)"
              name={field.name}
              variant="bordered"
              description={
                <p className="text-primary">El peso máximo es 10 lbs</p>
              }
            />
          )}
          rules={{
            min: { value: 1, message: "El valor debe ser mayor a 0 Lsb" },
            max: { value: 10, message: "El valor debe ser menor a 10 Lsb" },
            validate: (value) => {
              const numValue = Number(value);
              return !isNaN(numValue) || "Ingrese un valor valido";
            },
            required: "Debes Seleccionar el Peso Total",
          }}
        />
        <Controller
          control={control}
          name="precio"
          render={({ field, fieldState: { invalid, error } }) => (
            <Input
              {...field}
              isRequired
              type="text"
              errorMessage={error?.message}
              validationBehavior="aria"
              isInvalid={invalid}
              label="Precio de producto a cobrar Q"
              name="Precio"
              variant="bordered"
              {...(service === "estandar"
                ? {
                    description: (
                      <p className="text-primary">
                        Solicitamos el precio para calcular el costo del seguro
                      </p>
                    ),
                  }
                : {})}
            />
          )}
          rules={{
            min: { value: 1, message: "El valor debe ser mayor a 0" },
            validate: (value) => value !== "0",
            required: "Debes Seleccionar el Precio",
          }}
        />
        {service === "estandar" && (
          <Controller
            control={control}
            name="pago"
            render={({ field, fieldState: { invalid, error } }) => (
              <RadioGroup
                {...field}
                isRequired
                errorMessage={error?.message}
                validationBehavior="aria"
                isInvalid={invalid}
                label="Donde deseas pagar?"
                name="Pago"
                value={field.value}
                onValueChange={field.onChange}
              >
                <Radio value="origen">Origen</Radio>
                <Radio value="destino">Destino (+Q3.00)</Radio>
              </RadioGroup>
            )}
            rules={{
              required: "Debes Seleccionar el Pago",
            }}
          />
        )}
        <div className="flex justify-center items-center gap-5">
          <Button
            type="submit"
            color="success"
            variant="ghost"
            className="w-fit uppercase  my-5"
          >
            Ver Cotización
          </Button>
          <Button
            type="reset"
            variant="ghost"
            color="danger"
            className="w-fit uppercase"
          >
            Limpiar Formulario
          </Button>
        </div>
      </Form>

      <QuoteModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        formData={formData}
        service={service}
      />
    </div>
  );
}
