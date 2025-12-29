"use client";

import Link from "next/link";
import Image from "next/image";

export function FooterLogo() {
  return (
    <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight">
      <Image src="/xdevs.jpeg" alt="THE xDEVS" width={36} height={36} className="rounded" />
      <span>THE <span className="text-[#8646F4]">xDEVS</span></span>
    </Link>
  );
}
