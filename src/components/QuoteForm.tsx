import { deliveryOptions, packageOptions } from "@/config/site";
import {
  Form,
  Input,
  Select,
  SelectItem,
  Button,
  Switch,
} from "@nextui-org/react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import QuoteModal from "./QuoteModal";
import { useCotizacionStore } from "@/stores/servicio";
import { FormQuoteValues } from "@/lib/formValues";

export default function QuoteForm() {
  const [isOpen, setIsOpen] = useState(false);

  const { control, handleSubmit, reset } = useForm({
    defaultValues: FormQuoteValues,
  });

  const { servicioQuote, submitFormQuote, resetFormQuote } =
    useCotizacionStore();

  const onSubmit = (data: any) => {
    submitFormQuote(data);
    setIsOpen(true);
  };

  return (
    <div>
      <Form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="origenQuote"
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
              {deliveryOptions.map(({ label }) => (
                <SelectItem key={label}>{label}</SelectItem>
              ))}
            </Select>
          )}
          rules={{ required: "Debes Seleccionar el Origen" }}
        />
        <Controller
          control={control}
          name="destinoQuote"
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
              {deliveryOptions.map(({ label }) => (
                <SelectItem key={label}>{label}</SelectItem>
              ))}
            </Select>
          )}
          rules={{ required: "Debes Seleccionar el Destino" }}
        />
        <Controller
          control={control}
          name="queEnviasQuote"
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
                <SelectItem key={key}>{label}</SelectItem>
              ))}
            </Select>
          )}
          rules={{ required: "Debes Seleccionar Qué Envias" }}
        />
        <Controller
          control={control}
          name="cantidadPaquetesQuote"
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
              label="Cantidad de Paquetes"
              name={field.name}
              variant="bordered"
              description={
                <p className="text-primary">El máximo es 10 paquetes</p>
              }
            />
          )}
          rules={{
            min: { value: 1, message: "El valor debe ser mayor a 0" },
            max: { value: 10, message: "El valor debe ser menor a 10" },
            validate: (value) => {
              const numValue = Number(value);
              return !isNaN(numValue) || "Ingrese un valor valido";
            },
            required: "Debes Seleccionar la Cantidad de Paquetes",
          }}
        />
        <Controller
          control={control}
          name="pesoQuote"
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
          name="precioProductoQuote"
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
              {...(servicioQuote === "estandar"
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
        {servicioQuote === "estandar" && (
          <Controller
            control={control}
            name="dondePagaQuote"
            render={({ field }) => (
              <div className="flex items-center justify-center gap-2">
                <label>Desea pagar en destino? (+Q3.00)</label>
                <Switch {...field} aria-label="dondePagaQuote" />
              </div>
            )}
          />
        )}
        <div className="flex flex-col sm:flex-row justify-center items-start sm:items-center sm:gap-3">
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
            onPress={() => {
              resetFormQuote();
              reset();
            }}
          >
            Limpiar Formulario
          </Button>
        </div>
      </Form>

      <QuoteModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
