import { bancos, tipoCuenta } from "@/config/site";
import { useCotizacionStore } from "@/stores/servicio";
import {
  Button,
  Divider,
  Form,
  Input,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import { Controller, useForm } from "react-hook-form";
import { PackageCheck } from "lucide-react";

export default function ShipSection() {
  const { origenQuote, servicioQuote, destinoQuote } = useCotizacionStore();

  const { handleSubmit, control } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <main className="px-8 sm:px-0">
      <h3 className="text-lg font-bold my-4">
        Servicio Solcitado:{" "}
        <span className="text-primary uppercase">{servicioQuote}</span>
      </h3>
      <Divider className="my-5" />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h3 className="uppercase font-bold">Información de Remitente</h3>
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
        <Divider className="my-5" />
        <h3 className="uppercase font-bold">Información de Destinatario</h3>
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
        <Divider className="my-5" />
        <h3 className="uppercase font-bold">Datos de Factura</h3>
        <Controller
          name="nit"
          control={control}
          render={({ field, fieldState: { invalid, error } }) => (
            <Input
              {...field}
              isRequired
              type="text"
              variant="bordered"
              label="NIT"
              isInvalid={invalid}
              errorMessage={error?.message}
              description={
                <p className="text-primary">
                  Debes ingresar número de NIT sin guiones o CF
                </p>
              }
            />
          )}
          rules={{
            required: "El campo es obligatorio",
          }}
        />
        <Controller
          name="nombreNit"
          control={control}
          render={({ field, fieldState: { invalid, error } }) => (
            <Input
              isRequired
              type="text"
              variant="bordered"
              label="Nombre"
              isInvalid={invalid}
              errorMessage={error?.message}
            />
          )}
          rules={{
            required: "Es campo es obligatorio",
          }}
        />
        {servicioQuote === "cod" && (
          <>
            <h3>Datos de Cuenta Bancaria</h3>
            <Controller
              name="banco"
              control={control}
              render={({ field, fieldState: { invalid, error } }) => (
                <Select
                  {...field}
                  isRequired
                  variant="bordered"
                  label="Banco"
                  value={field.value}
                  isInvalid={invalid}
                  errorMessage={error?.message}
                >
                  {bancos.map(({ label }) => (
                    <SelectItem key={label}>{label}</SelectItem>
                  ))}
                </Select>
              )}
              rules={{
                required: "Debes Seleccionar un Banco",
              }}
            />
            <Controller
              name="tipoCuenta"
              control={control}
              render={({ field, fieldState: { invalid, error } }) => (
                <Select
                  {...field}
                  isRequired
                  variant="bordered"
                  label="Tipo de Cuenta"
                  value={field.value}
                  isInvalid={invalid}
                  errorMessage={error?.message}
                >
                  {tipoCuenta.map(({ label }) => (
                    <SelectItem key={label}>{label}</SelectItem>
                  ))}
                </Select>
              )}
              rules={{
                required: "Debes Seleccionar un Tipo de Cuenta",
              }}
            />
            <Controller
              name="numeroCuenta"
              control={control}
              render={({ field, fieldState: { invalid, error } }) => (
                <Input
                  {...field}
                  isRequired
                  type="number"
                  variant="bordered"
                  label="Número de Cuenta"
                  isInvalid={invalid}
                  errorMessage={error?.message}
                  description={
                    <p className="text-primary">
                      Ingresa número de cuenta sin guiones
                    </p>
                  }
                />
              )}
              rules={{
                required: "Debe Ingresar un Número de Cuenta",
              }}
            />
            <Controller
              name="nombreCuenta"
              control={control}
              render={({ field, fieldState: { invalid, error } }) => (
                <Input
                  {...field}
                  isRequired
                  type="text"
                  variant="bordered"
                  label="Nombre de Cuenta"
                  isInvalid={invalid}
                  errorMessage={error?.message}
                />
              )}
              rules={{
                required: "Debe Ingresar Nombre de Cuenta",
              }}
            />
          </>
        )}
        <Button
          type="submit"
          variant="shadow"
          color="primary"
          className="my-5 uppercase text-white"
          endContent={<PackageCheck size={20} />}
        >
          Enviar Solicitud
        </Button>
      </Form>
    </main>
  );
}
