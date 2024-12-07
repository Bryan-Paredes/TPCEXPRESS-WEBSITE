import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { QuoteIcon, WhatssAppIcon } from "@/components/icons";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { Image } from "@nextui-org/image";

export default function HeroPage() {
  return (
    <section className="flex flex-col items-start justify-center gap-4 bg-background-vector bg-cover py-8 md:py-10">
      <div className="flex items-center justify-evenly gap-2 bg-background-vector">
        <div className="flex flex-col items-start justify-start">
          <h1 className={title({ size: "lg", class: "mb-10" })}>
            De{" "}
            <span className={title({ color: "yellow", size: "xl" })}>
              Puerta a Puerta
            </span>{" "}
            Rápido y Seguro
          </h1>
          <div className={subtitle({ class: "text-subtitle" })}>
            Garantizamos envíos rápidos y seguros en todo Guatemala. ¡Confía en
            nosotros para que tus paquetes lleguen siempre a tiempo!
          </div>
        </div>
        <div>
          <Image
            src="/background.webp"
            alt="Backgrund"
            width={800}
            height={300}
            className="hidden rounded-lg md:flex"
            loading="lazy"
          />
        </div>
      </div>

      <div className="flex gap-3">
        <Button
          as={Link}
          className={buttonStyles({
            color: "primary",
            radius: "lg",
            variant: "ghost",
            class: "text-md font-semibold",
          })}
          href={siteConfig.navItems[1].href}
          startContent={<QuoteIcon size={20} />}
        >
          Cotizador
        </Button>
        <Button
          as={Link}
          className={buttonStyles({
            color: "success",
            variant: "ghost",
            radius: "lg",
            class: "text-md font-semibold",
          })}
          href={siteConfig.links.whatssapp}
          startContent={<WhatssAppIcon size={20} />}
        >
          WhatsApp
        </Button>
      </div>
    </section>
  );
}
