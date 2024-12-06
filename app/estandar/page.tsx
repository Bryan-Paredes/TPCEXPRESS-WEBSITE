import CoverageModal from "@/components/coverageModal";
import { MotorBikeIcon, PointIcon, SendServiceIcon } from "@/components/icons";
import { subtitle, title } from "@/components/primitives";
import TableComponent from "@/components/table";
import { Button } from "@nextui-org/button";
import Link from "next/link";

export default function EstandarPage() {
  return (
    <div>
      <h1 className={title({ class: "uppercase font-bold" })}>
        De que se trata?
      </h1>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 my-10 p-4">
        <MotorBikeIcon size={200} className="text-primary" />
        <div className="flex flex-col gap-2">
          <p className="flex items-center justify-start gap-2">
            <PointIcon size={25} className="text-primary" />
            Servicio de paquetería regular.
          </p>
          <p className="flex items-center justify-start gap-2">
            <PointIcon size={25} className="text-primary" /> Puedes cancelar en
            origen, o destino (+Q3.00).
          </p>
          <p className="flex items-center justify-start gap-2">
            <PointIcon size={25} className="text-primary" />
            Plazo de entrega 24 a 48 horas.
          </p>
          <p className="flex items-center justify-start gap-2">
            <PointIcon size={25} className="text-primary" />
            Se cobra 1% de seguro (Sobre el valor de la mercadería), en caso de
            siniestro tu producto esta cubierto.
          </p>
        </div>
      </div>
      <div className="my-12">
        <h3 className={subtitle({ class: "uppercase font-semibold" })}>
          Como Funciona?
        </h3>
        <p>
          Llenas nuestro formulario para realizar tu envío, recibiras una
          confirmación y detalle de tu pedido vía Correo Electrónico, nuestro
          equipo se pondrá en contacto para confirmar el servicio y listo.
        </p>
        <CoverageModal />
      </div>
      <div>
        <h3
          className={subtitle({ class: "uppercase font-semibold text-center" })}
        >
          Condiciones:
        </h3>
        <div className="flex flex-col gap-2 my-5 p-4">
          <p className="flex items-center justify-start gap-2">
            <PointIcon size={25} className="text-primary" />
            Peso de 1 - 10 Lbs.
          </p>
          <p className="flex items-center justify-start gap-2">
            <PointIcon size={25} className="text-primary" />
            Debes tener cuenta bancaria válida y activa
          </p>
          <p className="flex items-center justify-start gap-2">
            <PointIcon size={25} className="text-primary" />
            Se cobran Q3.00 si deseas que el envio se cobre en el destino.
          </p>
          <p className="flex items-center justify-start gap-2">
            <PointIcon size={25} className="text-primary" />2 Intentos de
            Entrega.
          </p>
          <p className="flex items-center justify-start gap-2">
            <PointIcon size={25} className="text-primary" />
            Recargo por peso adicional.
          </p>
          <p className="flex items-center justify-start gap-2">
            <PointIcon size={25} className="text-primary" />
            Puedes cancelar el servicio (Antes de que sea recolectado) sin
            penalización.
          </p>
          <p className="flex items-center justify-start gap-2">
            <PointIcon size={25} className="text-primary" />
            <a
              href="/terms"
              className=" underline underline-offset-2 hover:text-primary"
            >
              Aplican Terminos y Condiciones
            </a>
          </p>
        </div>
      </div>
      <div>
        <TableComponent serviceName={"Estandar"} serviceComision={"N/A"} />
      </div>
      <div className="flex items-center justify-center my-10">
        <Button
          as={Link}
          size="lg"
          variant="solid"
          color="primary"
          radius="lg"
          href="/quote"
          startContent={<SendServiceIcon size={50} />}
        >
          Solicitar Servicio
        </Button>
      </div>
    </div>
  );
}
