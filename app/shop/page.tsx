"use client";

import React from "react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import CardShop from "@/components/card_shop";

export default function StorePage() {
  const cape = useQuery(api.cape.get);
  return (
    <section>
      <main>
        <section className="flex justify-center items-center h-[80vh]">
          <div className="bg-gradient-to-br from-purple-500 to-indigo-500 md:w-[500px] w-full rounded-lg p-4">
            <h1 className="text-3xl font-bold max-w-[500px] text-center">
              ¡Bienvenido!, acá podras comprar los cosmeticos de Coldified.
            </h1>
          </div>
        </section>
        <section className="grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 md:w-[80%] w-full mx-auto gap-4">
          {cape?.map(({ _id, image, link, price, title }) => (
            <CardShop Image={image} Title={title} Price={price} Link={link} />
          ))}
          <h1 className="text-center opacity-50 mb-4">
            No hay más productos..
          </h1>
        </section>
      </main>
    </section>
  );
}
