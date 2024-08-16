import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer>
      <nav className="flex justify-between py-20 bg-neutral-950 opacity-50">
        <h1 className="m-2">coldi page</h1>
        <div className="flex gap-2">
          <Link href="https://www.github.com/NopAngel/">
            <img src="/icons/github.svg" />
          </Link>
          <Link href="https://x.com/c8ldi">
            <img src="/icons/twitter.svg" />
          </Link>
          <Link href="https://www.youtube.com/channel/UCiMcmhdA1yX_5THetoe5uNQ">
            <img src="/icons/youtube.svg" />
          </Link>

          <Link href="https://www.twitch.tv/coldified">
            <img src="/icons/twitch.svg" />
          </Link>
        </div>
        <h1 className="m-2">@Copyright 2024 - 2025</h1>
      </nav>
    </footer>
  );
}
