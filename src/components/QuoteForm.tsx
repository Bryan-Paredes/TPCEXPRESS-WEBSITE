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
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import QuoteModal from "./QuoteModal";
import { useCotizacionStore } from "@/stores/servicio";
import { formatMonto } from "@/config/formatMonto";

interface QuoteFormValues {
  tipoServicio: string;
  ciudadOrigen: string;
  ciudadDestino: string;
  tipoPaquete: string;
  costoProducto: string;
  dondePaga: boolean;
  costoServicio: string;
}

export default function QuoteForm() {
  const [isOpen, setIsOpen] = useState(false);

  const { control, handleSubmit, reset } = useForm<QuoteFormValues>();

  const { tipoServicio, submitFormQuote, resetFormQuote, calculateQuote } =
    useCotizacionStore();

  const onSubmit: SubmitHandler<QuoteFormValues> = (data) => {
    const { costoProducto, costoServicio, ...rest } = data;

    const newCost = Number(costoProducto);
    const newTotal = Number(costoServicio);

    submitFormQuote({
      costoProducto: newCost,
      costoServicio: newTotal,
      cantidadPaquetes: 1,
      ...rest,
    });
    calculateQuote();
    setIsOpen(true);
  };

  return (
    <div>
      <Form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="ciudadOrigen"
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
          name="ciudadDestino"
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
          name="tipoPaquete"
          render={({ field, fieldState: { invalid, error } }) => (
            <Select
              {...field}
              isRequired
              validationBehavior="aria"
              label="Tipo de Paquete a Enviar"
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
          name="costoProducto"
          render={({ field, fieldState: { invalid, error } }) => (
            <Input
              {...field}
              isRequired
              type="text"
              errorMessage={error?.message}
              validationBehavior="aria"
              isInvalid={invalid}
              label={
                tipoServicio === "COD"
                  ? "Costo Producto a Cobrar"
                  : "Costo Producto a Enviar"
              }
              name="Precio"
              variant="bordered"
              onChange={(e) => {
                const rawValue = e.target.value.replace(/[^0-9.]/g, "");
                field.onChange(rawValue);
              }}
              onBlur={(e) => {
                field.onChange(formatMonto(e.target.value));
              }}
              value={field.value}
              {...(tipoServicio === "ESTANDAR"
                ? {
                    description: (
                      <>
                        <p className="text-primary">
                          Solicitamos el precio para calcular el costo del
                          seguro
                        </p>
                        <p className="text-primary">
                          Si desea ingresar un monto con decimal ponga un punto
                          (.) en lugar de una coma (,)
                        </p>
                      </>
                    ),
                  }
                : {
                    description: (
                      <p className="text-primary">
                        Si desea ingresar un monto con decimal ponga un punto
                        (.) en lugar de una coma (,)
                      </p>
                    ),
                  })}
            />
          )}
          rules={{
            min: { value: 1, message: "El valor debe ser mayor a 0" },
            validate: (value) => value !== "0",
            required: "Debes Seleccionar el Precio",
          }}
        />
        {tipoServicio === "ESTANDAR" && (
          <Controller
            control={control}
            name="dondePaga"
            render={({ field }) => (
              <>
                <div className="flex items-center justify-center gap-2">
                  <label>Desea pagar en destino? (+5%)</label>
                  <Switch {...field} aria-label="dondePagaQuote" />
                </div>
                <span className="text-xs text-primary">
                  El 5% se calcula en base a el precio del producto
                </span>
              </>
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
