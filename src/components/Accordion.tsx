import { Accordion, AccordionItem } from "@nextui-org/react";

export default function AccordionComponent() {
  return (
    <section>
      <Accordion variant="splitted">
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title="¿Como solicito el servicio de Mensajería?"
        >
          <p>
            Debes Llenar nuestro formulario de cotización, si estas de acuerdo
            realiza el envío, al finalizar te llegará una notificación con un
            detalle de lo solicitado a tu correo electrónico, solo debes esperar
            a que nuestra área de atención al cliente te contacte para
            corroborar datos y finalizar la solicitud.
          </p>
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Accordion 2"
          title="¿Cuáles son los servicios de envío que ofrece TPC Express?"
        >
          <p>
            TPC EXPRESS ofrece 2 servicios de envío para satisfacer las
            necesidades de nuestros clientes. Esto incluye entrega con cobro de
            mercadería en el destino, servicios de paquetería estándar, así como
            opciones de envío personalizadas para adaptarse a diversos
            requerimientos logísticos (este último únicamente para empresas).
          </p>
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Accordion 3"
          title="¿Cómo puedo rastrear mi envío en TPC Express?"
        >
          <p>
            Para rastrear tu envío, debes llamar a nuestras oficinas al número
            2298-1217, con tu número de envio recibido en el detalle a tu correo
            electrónico, uno de nuestros agentes te dará la informacón
            necesaria.
          </p>
        </AccordionItem>
        <AccordionItem
          key="4"
          aria-label="Accordion 3"
          title="¿Cuánto tiempo toma la entrega de un paquete?"
        >
          <p>
            El tiempo estimado de entrega es de 24 a 48 horas, este puede variar
            por circunstancias externas a TPC EXPRESS.
          </p>
        </AccordionItem>
        <AccordionItem
          key="5"
          aria-label="Accordion 3"
          title="¿Cuáles son las medidas de seguridad para garantizar la integridad de los paquetes?"
        >
          <p>
            En TPC EXPRESS, nos comprometemos a garantizar la seguridad e
            integridad de los paquetes que manejamos. Implementamos medidas de
            seguridad rigurosas, como el seguimiento constante, sistemas de
            control de calidad y la capacitación continua de nuestro personal
            para garantizar que cada envío llegue de manera segura a su destino.
          </p>
        </AccordionItem>
        <AccordionItem
          key="6"
          aria-label="Accordion 3"
          title="¿Se ofrecen servicios de logîstica para empresas?"
        >
          <p>
            Sí, TPC EXPRESS ofrece soluciones de logística adaptadas a las
            necesidades de empresas. Nuestros servicios logísticos incluyen la
            gestión eficiente de la cadena de suministro, almacenamiento,
            distribución y servicios de cumplimiento. Podemos trabajar
            estrechamente con empresas para desarrollar soluciones logísticas
            personalizadas que optimicen sus operaciones.
          </p>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
