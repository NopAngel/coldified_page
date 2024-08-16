import React from "react";
import { Button } from "./ui/button";
import { Spotlight } from "./ui/spotlight";
import Link from "next/link";

export default function Hero() {
  const newData = new Date();
  const year = newData.getFullYear();
  return (
    <section>
      <div>
        <section className="h-screen flex justify-center items-center banner_main">
          <div>
            <div>
              <Spotlight
                fill="#fff"
                className="-translate-y-[80%] left-0 translate-x-5"
              />
              <Spotlight fill="purple" className="-translate-y-[80%] left-0" />
            </div>
          </div>
          <div>
            <h1 className="text-4xl p-6 rounded-full flex items-center font-bold hover:scale-110 transition-all">
              <span>¡Obten las Capas de Lunar Client!</span>
              <div className="p-1 px-2 bg-green-500/55 border-[1px] border-green-700 rounded-full text-xs cursor-pointer -translate-y-2">
                Coldified version.
              </div>
            </h1>
            <div className="flex justify-center">
              <Link href="/shop">
                <Button className="bg-white text-black w-[300px] hover:bg-white border-2 border-b-4 border-slate-200 ">
                  <span>Ver Capas</span>
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="p-3 flex h-screen items-center justify-center">
          <div className="bg-neutral-900 rounded-md w-[600px]">
            <div className="banner w-[100%] h-[100px] rounded-lg"></div>
            <section className="p-2">
              <img
                src="/logo.png"
                className="w-[50px] rounded-full"
                alt="Coldified Avatar"
              />
              <h1 className="text-xl font-semibold anim_text">Coldified.</h1>
              <p className="p-2 text-neutral-400">
                Coldified jugador profesional de PVP en 1.9+
              </p>
              <section>
                <h1 className="text-xl text-center mb-1">Redes Sociales</h1>
                <nav className="flex justify-center gap-2 *:bg-neutral-800 *:p-2 *:rounded-full">
                  <Link href="https://x.com/c8ldi">
                    <img src="/icons/twitter.svg" />
                  </Link>
                  <Link href="https://www.youtube.com/channel/UCiMcmhdA1yX_5THetoe5uNQ">
                    <img src="/icons/youtube.svg" />
                  </Link>

                  <Link href="https://www.twitch.tv/coldified">
                    <img src="/icons/twitch.svg" />
                  </Link>
                </nav>
              </section>
            </section>
            <footer className="bg-neutral-950 p-3 text-xs opacity-20">
              <span>@Copyright {year} - Coldified</span>
            </footer>
          </div>
        </section>
      </div>
    </section>
  );
}
