import Link from "next/link";
import React from "react";

export default function _not_found() {
  return (
    <main>
      <section className="flex items-center justify-center h-screen text-center">
        <section>
          <h1 className="text-2xl">Oppss.. Hey, acá no hay nada..</h1>
          <p className="p-2">
            En este lugar no hay nada, por favor ve al{" "}
            <Link href="/" className="text-blue-500">
              Inicio
            </Link>
          </p>
        </section>
      </section>
    </main>
  );
}
