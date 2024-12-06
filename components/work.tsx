import React from "react";
import { subtitle, title } from "./primitives";

export default function WorkPage() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 mt-6 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h5 className={subtitle({ class: "uppercase text-primary" })}>
          Nuestro Servicio
        </h5>
        <h1 className={title({ class: "font-bold" })}>Como Funciona?</h1>
      </div>
      <div className="grid grid-cols-3 gap-10 w-full itmes-center justify-center text-center mt-10">
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
