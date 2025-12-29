"use client";

import Link from "next/link";
import Image from "next/image";

export function NavbarLogo() {
  return (
    <Link href="/" className="flex items-center gap-2 text-white font-bold text-xl tracking-tight">
      <Image src="/xdevs.jpeg" alt="THE xDEVS" width={40} height={40} className="rounded" />
      <span>THE <span className="text-[#8646F4]">xDEVS</span></span>
    </Link>
  );
}
