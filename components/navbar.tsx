import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-black/55 backdrop-blur-lg sticky top-0 w-full p-3">
      <nav className="flex justify-between">
        <section>
          <Link href="/">
            <img src="/logo.png" className="w-[30px] rounded-full" />
          </Link>
        </section>
        <section className="gap-3 flex">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
        </section>
      </nav>
    </header>
  );
}
