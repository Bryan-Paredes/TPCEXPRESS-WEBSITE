import React from "react";
import { subtitle, title } from "@/components/primitives";

export default function WorkPage() {
  return (
    <section className="mt-6 flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg justify-center text-center">
        <h5 className={subtitle({ class: "uppercase text-primary" })}>
          Nuestro Servicio
        </h5>
        <h1 className={title({ class: "font-bold" })}>Como Funciona?</h1>
      </div>
      <div className="itmes-center mt-10 grid w-full grid-cols-3 justify-center gap-10 text-center">
        <div>
          <p>Image</p>
          <h3>Titulo</h3>
          <p>Descripcion</p>
        </div>
        <div>
          <p>Image</p>
          <h3>Titulo</h3>
          <p>Descripcion</p>
        </div>
        <div>
          <p>Image</p>
          <h3>Titulo</h3>
          <p>Descripcion</p>
        </div>
        <div>
          <p>Image</p>
          <h3>Titulo</h3>
          <p>Descripcion</p>
        </div>
      </div>
    </section>
  );
}
