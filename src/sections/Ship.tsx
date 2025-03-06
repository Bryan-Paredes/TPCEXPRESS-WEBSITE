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
  Checkbox,
  Chip,
} from "@nextui-org/react";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { BadgeCheck, PackageCheck } from "lucide-react";
import { sendShip } from "@/api/email";
import { toast, Toaster } from "sonner";
import confetti from "canvas-confetti";
import { useEffect, useState } from "react";
import HomeModal from "@/components/HomeModal";

interface ShipInputs {
  origenEnvio: string;
  nombreEnvio: string;
  numeroRemitente: string;
  correoRemitente: string;
  direccionRemitente: string;
  textRecoleccion?: string;
  origenDestino: string;
  nombreDestino: string;
  numeroDestino: string;
  correoDestino: string;
  direccionDestino: string;
  textDestino?: string;
  nit?: string;
  nombreNit?: string;
  banco?: string;
  tipoCuenta?: string;
  numeroCuenta?: string;
  nombreCuenta?: string;
  terms: boolean;
  total: number;
}

export default function ShipSection() {
  const { origenQuote, servicioQuote, destinoQuote, setTotal } =
    useCotizacionStore();

  const [openModal, setOpenModal] = useState(true);

  const {
    handleSubmit,
    control,
    setValue,
    formState: { isSubmitting },
  } = useForm<ShipInputs>({
    defaultValues: { origenEnvio: origenQuote, origenDestino: origenQuote },
  });

  useEffect(() => {
    setValue("origenEnvio", origenQuote);
    setValue("origenDestino", destinoQuote);
  }, [origenQuote, destinoQuote, setValue]);

  const onSubmit: SubmitHandler<ShipInputs> = async (data) => {
    try {
      toast.loading("Enviando tu solicitud...");
      const response = await sendShip(data);

      if (response.success) {
        toast.success("¡Mensaje enviado exitosamente!");
        confetti({ angle: 60 });
        setIsOpen(true);
      } else {
        toast.error("¡Ha ocurrido un error al enviar el mensaje!");
      }
    } catch (error) {
      toast.error("¡Ha ocurrido un error en la solicitud!");
    } finally {
    }
  };

  return (
    <main className="px-8 sm:px-0">
      <Toaster richColors position="top-right" />
      <div className="flex flex-col">
        <h3 className="text-lg font-bold my-4">
          Servicio Solcitado:{" "}
          <span className="text-primary uppercase">{servicioQuote}</span>
        </h3>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="total"
          control={control}
          render={({ field }) => (
            <Chip
              {...field}
              size="md"
              variant="dot"
              color="primary"
              className="text-lg font-black capitalize"
            >
              <span className="text-lg font-bold capitalize">Total: </span>
              <span className="text-primary font-bold">Q{setTotal}</span>
            </Chip>
          )}
        />
        <Divider className="my-5" />
        <h3 className="uppercase font-bold">Información de Remitente</h3>
        <Controller
          name="origenEnvio"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              isRequired
              isDisabled
              label="Origen"
              variant="bordered"
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
        <Controller
          name="origenDestino"
          control={control}
          defaultValue={origenQuote}
          render={({ field }) => (
            <Input
              isRequired
              isDisabled
              type="text"
              label="Destino"
              variant="bordered"
              value={destinoQuote}
            />
          )}
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
              {...field}
              isRequired
              type="text"
              variant="bordered"
              label="Nombre de Factura"
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
        <div className="flex items-center justify-center gap-2 my-3">
          <Controller
            control={control}
            name="terms"
            render={({ field, fieldState: { invalid } }) => (
              <Checkbox
                {...field}
                isRequired
                isInvalid={invalid}
                icon={<BadgeCheck />}
              >
                Acepto
              </Checkbox>
            )}
            rules={{
              required: "Debes Aceptar Términos de Servicio",
            }}
          />
          <a
            href="/terminos"
            className="text-primary font-bold hover:underline"
          >
            Términos de Servicio
          </a>
        </div>
        <Button
          isLoading={isSubmitting}
          type="submit"
          variant="shadow"
          color="primary"
          className="my-5 uppercase text-white"
          endContent={isSubmitting ? null : <PackageCheck size={20} />}
        >
          {isSubmitting ? "Enviando..." : "Enviar Solicitud"}
        </Button>
      </Form>
      <HomeModal isOpen={openModal} />
    </main>
  );
}
