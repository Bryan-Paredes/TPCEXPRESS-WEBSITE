import { sendEmail } from "@/api/email";
import { interestArea } from "@/config/site";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Link,
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

export default async function FormComponent() {
  const { control, handleSubmit } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      const response = await sendEmail(data);
      if (response.success) {
        toast.success("¡Mensaje enviado exitosamente!");
        confetti({ angle: 60 });
      } else {
        toast.error("¡Ha ocurrido un error al enviar el mensaje!");
      }
    } catch (error) {
      toast.error("¡Ha ocurrido un error en la solicitud!");
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
          control={control}
          name="name"
          render={({ field, fieldState: { invalid, error } }) => (
            <Input
              {...field}
              isRequired
              isClearable
              type="text"
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
          control={control}
          name="email"
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
            required: "Debes Ingresar Correo Electrónico",
          }}
        />
        <Controller
          control={control}
          name="phone"
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
            />
          )}
          rules={{
            required: "Debes Ingresar Número de Teléfono",
          }}
        />
        <Controller
          control={control}
          name="interes"
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
          control={control}
          name="message"
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
              Aceptar
              <Link href="/terminos" underline="hover" className="ml-2">
                Términos de Servicio
              </Link>
            </Checkbox>
          )}
          rules={{
            required: "Debes Aceptar Términos de Servicio",
          }}
        />
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
