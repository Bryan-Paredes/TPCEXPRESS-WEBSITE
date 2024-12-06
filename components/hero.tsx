import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { Chip } from "@nextui-org/chip";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { QuoteIcon, WhatssAppIcon } from "@/components/icons";
import { Button } from "@nextui-org/button";

export default function HeroPage() {
  return (
    <section className="bg-hero-pattern flex flex-col items-start justify-center gap-4 py-8 md:py-10">
      <div className="grid grid-cols-2 justify-between gap-2">
        <div className="flex flex-col items-start justify-start">
          <h1
            className={`${title({ size: "lg", class: "font-black max-w-md text-left" })}`}
          >
            De{" "}
            <span
              className={`${title({ color: "yellow", size: "lg", class: "text-6xl font-black" })}`}
            >
              Puerta a Puerta
            </span>{" "}
            Rápido y Seguro
          </h1>
          <div className={subtitle({ class: "mt-5 max-w-lg text-xs" })}>
            En TPC Express, garantizamos envíos rápidos y seguros en todo
            Guatemala. ¡Confía en nosotros para que tus paquetes lleguen siempre
            a tiempo!
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/background.webp"
            alt=""
            className="w-fit h-full object-cover"
          />
        </div>
      </div>

      <div className="flex gap-3">
        <Button
          as="a"
          className={buttonStyles({
            color: "primary",
            radius: "lg",
            variant: "ghost",
            class: "text-md font-semibold",
          })}
          href={siteConfig.navItems[2].href}
          startContent={<QuoteIcon size={20} />}
        >
          Cotizador
        </Button>
        <Button
          as="a"
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

      {/* <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
          <span>
            <Chip color="primary">Hola mundo</Chip>
          </span>
        </Snippet>
      </div> */}
    </section>
  );
}
