import { useCotizacionStore } from "@/stores/servicio";
import { Button, Form, Input, Textarea } from "@nextui-org/react";
import { Controller, useForm } from "react-hook-form";

export default function ShipSection() {
  const { origenQuote, servicioQuote, destinoQuote } = useCotizacionStore();

  const { handleSubmit, control } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  console.log(origenQuote);

  return (
    <main className="px-8 sm:px-0">
      <h3 className="text-lg font-bold my-4">
        Servicio Solcitado:{" "}
        <span className="text-primary uppercase">{servicioQuote}</span>
      </h3>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h3>Información de Remitente</h3>
        <Controller
          name="origenEnvio"
          control={control}
          defaultValue={origenQuote}
          render={({ field }) => (
            <Input
              {...field}
              isRequired
              isDisabled
              // isDisabled={origenQuote ? true : false}
              label="Origen"
              variant="bordered"
              value={origenQuote}
            />
          )}
        />
        <Controller
          name="nombreEnvio"
          control={control}
          render={({ field, fieldState: { invalid, error } }) => (
            <Input
              {...field}
              isRequired
              type="text"
              label="Nombre Completo"
              variant="bordered"
              isInvalid={invalid}
              errorMessage={error?.message}
            />
          )}
          rules={{
            required: "Debes Ingresar Nombre Completo",
          }}
        />
        <Controller
          name="numeroRemitente"
          control={control}
          render={({ field, fieldState: { invalid, error } }) => (
            <Input
              {...field}
              isRequired
              type="number"
              label="Número Teléfono"
              variant="bordered"
              isInvalid={invalid}
              errorMessage={error?.message}
            />
          )}
          rules={{
            required: "Debe ingresar su número",
            validate: (value) => {
              if (!/^\d{8}$/.test(value)) {
                return "El número debe tener 8 dígitos";
              }
              return true;
            },
          }}
        />
        <Controller
          name="correoRemitente"
          control={control}
          render={({ field, fieldState: { invalid, error } }) => (
            <Input
              {...field}
              isRequired
              type="email"
              label="Correo Electrónico"
              variant="bordered"
              isInvalid={invalid}
              errorMessage={error?.message}
            />
          )}
          rules={{
            required: "Debe ingresar su correo",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Direccion de correo electrónico NO válida",
            },
          }}
        />
        <Controller
          name="direccionRemitente"
          control={control}
          render={({ field, fieldState: { invalid, error } }) => (
            <Input
              {...field}
              isRequired
              type="text"
              label="Dirección de Recoleccón"
              variant="bordered"
              isInvalid={invalid}
              errorMessage={error?.message}
            />
          )}
          rules={{
            required: "Debe ingresar dirección para recolección",
          }}
        />
        <Controller
          name="textRecoleccion"
          control={control}
          render={({ field }) => (
            <Textarea
              {...field}
              isClearable
              label="Especficaciones para recoleccion"
              variant="bordered"
            />
          )}
        />
        <h3>Información de Destinatario</h3>
        <Input
          isRequired
          isDisabled={destinoQuote ? true : false}
          type="text"
          label="Destino"
          variant="bordered"
          value={destinoQuote}
        />
        <Controller
          name="nombreDestino"
          control={control}
          render={({ field, fieldState: { invalid, error } }) => (
            <Input
              {...field}
              isRequired
              type="text"
              label="Nombre Completo"
              variant="bordered"
              isInvalid={invalid}
              errorMessage={error?.message}
            />
          )}
          rules={{
            required: "Debes Ingresar Nombre Completo",
          }}
        />
        <Controller
          name="numeroDestino"
          control={control}
          render={({ field, fieldState: { invalid, error } }) => (
            <Input
              {...field}
              isRequired
              type="number"
              label="Número Teléfono"
              variant="bordered"
              isInvalid={invalid}
              errorMessage={error?.message}
            />
          )}
          rules={{
            required: "Debe ingresar su número",
            validate: (value) => {
              if (!/^\d{8}$/.test(value)) {
                return "El número debe tener 8 dígitos";
              }
              return true;
            },
          }}
        />
        <Controller
          name="correoDestino"
          control={control}
          render={({ field, fieldState: { invalid, error } }) => (
            <Input
              {...field}
              isRequired
              type="email"
              label="Correo Electrónico"
              variant="bordered"
              isInvalid={invalid}
              errorMessage={error?.message}
            />
          )}
          rules={{
            required: "Debe ingresar su correo",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Direccion de correo electrónico NO válida",
            },
          }}
        />
        <Controller
          name="direccionDestino"
          control={control}
          render={({ field, fieldState: { invalid, error } }) => (
            <Input
              {...field}
              isRequired
              type="text"
              label="Dirección de Destino"
              variant="bordered"
              isInvalid={invalid}
              errorMessage={error?.message}
            />
          )}
          rules={{
            required: "Debe ingresar dirección para la entrega",
          }}
        />
        <Controller
          name="textDestino"
          control={control}
          render={({ field }) => (
            <Textarea
              {...field}
              isClearable
              label="Especficaciones para recoleccion"
              variant="bordered"
            />
          )}
        />
        <Button type="submit">Enviar</Button>
      </Form>
    </main>
  );
}
