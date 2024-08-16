import React from "react";

export default function CardShop({ Image, Title, Price, Link }: any) {
  return (
    <a href={Link}>
      <article className="w-[400px] rounded-lg bg-neutral-900 hover:cursor-pointer hover:scale-105 transition-all duration-150 hover:bg-neutral-950 m-5">
        <img src={Image} className="w-full" alt={Title} />
        <div className="p-2 flex justify-between items-center">
          <h1 className="text-xl">{Title}</h1>
          <p className="text-green-500 font-extrabold">{Price}$</p>
        </div>
      </article>
    </a>
  );
}
