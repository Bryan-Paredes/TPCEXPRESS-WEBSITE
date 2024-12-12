import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <section className="container">
      <div className="flex flex-col items-end justify-center mt-14">
        <h1 className="font-bold text-4xl">Nuestros Servicios</h1>
        <h5 className="uppercase text-primary">Que Ofrecemos?</h5>
      </div>
      <main className="gap-3 grid grid-cols-12 grid-rows-1 my-14">
        <Card
          isFooterBlurred
          className="w-full h-[320px] col-span-12 sm:col-span-5"
        >
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Mas Seguro
            </p>
            <h4 className="text-white font-medium text-2xl">Servicio COD</h4>
          </CardHeader>
          <Image
            removeWrapper
            loading="lazy"
            alt="Card example background"
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover brightness-[80%] dark:brightness-[65%]"
            src="/services/serviceEstandar.webp"
          />
          <CardFooter className="absolute bg-white/45 backdrop-blur-md bottom-0 z-10 justify-between dark:bg-black/50">
            <div className="flex flex-grow gap-2 items-center">
              <Image
                loading="lazy"
                alt="Breathing app icon"
                className="rounded-xl w-9 h-8 "
                src="/logo.webp"
              />
              <div className="flex flex-col">
                {/* <p className="text-tiny text-white/60">Breathing App</p>
                <p className="text-tiny text-white/60">
                  Get a good night's sleep.
                </p> */}
              </div>
            </div>
            <Button
              as={"a"}
              color="primary"
              radius="lg"
              variant="shadow"
              size="md"
              href="/cod"
              className="text-white"
              endContent={<ArrowRight size={22} />}
            >
              Mas Informacíon
            </Button>
          </CardFooter>
        </Card>
        <Card
          isFooterBlurred
          className="w-full h-[320px] col-span-12 sm:col-span-7"
        >
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Mas Rápido
            </p>
            <h4 className="text-white font-medium text-2xl">
              Servicio Estandar
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover brightness-[80%] dark:brightness-[65%]"
            src="/services/servicesCod.webp"
          />
          <CardFooter className="absolute bg-white/45 backdrop-blur-md bottom-0 z-10 dark:bg-black/40">
            <div className="flex flex-grow gap-2 items-center">
              <Image
                loading="lazy"
                alt="Breathing app icon"
                className="rounded-xl w-9 h-8 "
                src="/logo.webp"
              />
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">Breathing App</p>
                <p className="text-tiny text-white/60">
                  Get a good night's sleep.
                </p>
              </div>
            </div>
            <Button
              as={"a"}
              variant="shadow"
              color="primary"
              radius="lg"
              size="md"
              href="/estandar"
              className="text-white"
              endContent={<ArrowRight size={22} />}
            >
              Mas Informacíon
            </Button>
          </CardFooter>
        </Card>
      </main>
    </section>
  );
}
