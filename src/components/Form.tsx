// import { sendEmail } from "@/api/email";
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
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { toast, Toaster } from "sonner";
import confetti from "canvas-confetti";

interface FormInputs {
  name: string;
  email: string;
  phone: string;
  interes: string;
  message: string;
  terms: boolean;
}

export default function FormComponent() {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    console.log(data);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("¡Mensaje enviado exitosamente!");
        confetti({ angle: 60 });
      } else {
        toast.error("¡Ha ocurrido un error al enviar el mensaje!");
      }
    } catch (error) {
      toast.error("¡Ha ocurrido un error en la solicitud!");
    } finally {
    }
  };

  return (
    <section className="">
      <Toaster richColors position="top-right" />
      <Form
        onSubmit={handleSubmit(onSubmit)}
        className="flex gap-4
      "
      >
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState: { invalid, error } }) => (
            <Input
              {...field}
              isRequired
              label="Nombre Completo"
              name="name"
              variant="bordered"
              errorMessage={error?.message}
              isInvalid={invalid}
            />
          )}
          rules={{
            required: "Debes Ingresar Nombre Completo",
          }}
        />
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState: { invalid, error } }) => (
            <Input
              {...field}
              isRequired
              isClearable
              type="email"
              label="Correo Electrónico"
              name="email"
              variant="bordered"
              errorMessage={error?.message}
              isInvalid={invalid}
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
          name="phone"
          control={control}
          render={({ field, fieldState: { invalid, error } }) => (
            <Input
              {...field}
              isRequired
              isClearable
              type="number"
              label="Número de Teléfono"
              name="phone"
              variant="bordered"
              errorMessage={error?.message}
              isInvalid={invalid}
              description={
                <p className="text-primary">
                  Ingresa número de teléfono sin guiones
                </p>
              }
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
          name="interes"
          control={control}
          render={({ field, fieldState: { invalid, error } }) => (
            <Select
              {...field}
              isRequired
              label="Area de Interes"
              name="interes"
              variant="bordered"
              errorMessage={error?.message}
              isInvalid={invalid}
            >
              {interestArea.map(({ label }) => {
                return (
                  <SelectItem key={label} value={label}>
                    {label}
                  </SelectItem>
                );
              })}
            </Select>
          )}
          rules={{
            required: "Debes Ingresar Area de Interes",
          }}
        />
        <Controller
          name="message"
          control={control}
          render={({ field, fieldState: { invalid, error } }) => (
            <Textarea
              {...field}
              isRequired
              isClearable
              label="Mensaje"
              name="message"
              variant="bordered"
              errorMessage={error?.message}
              isInvalid={invalid}
            />
          )}
          rules={{
            required: "Debes Ingresar Mensaje",
          }}
        />
        <div className="flex items-center justify-center gap-2">
          <Controller
            name="terms"
            control={control}
            render={({
              field: { value, onChange, ...field },
              fieldState: { invalid },
            }) => (
              <Checkbox
                {...field}
                isRequired
                isInvalid={invalid}
                isSelected={value}
                onValueChange={onChange}
                icon={<BadgeCheck />}
                className="my-5"
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
          type="submit"
          color="primary"
          variant="solid"
          isLoading={isSubmitting}
          startContent={isSubmitting ? null : <Send />}
          className="w-fit uppercase text-white"
        >
          {isSubmitting ? "Enviando..." : "Enviar"}
        </Button>
      </Form>
    </section>
  );
}
