"use client";

import Link from "next/link";
import { navLinks } from "../config";

interface DesktopNavProps {
  onContactClick?: () => void;
}

export function DesktopNav({ onContactClick }: DesktopNavProps) {
  return (
    <>
      <nav className="hidden md:flex items-center space-x-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-[#918EA0] hover:text-[#A073EE] transition-colors text-sm uppercase tracking-widest"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="hidden md:block">
        <Link
          href="#contact"
          className="border border-[#8646F4] px-5 py-2 text-sm uppercase tracking-widest text-[#A073EE] hover:bg-[#8646F4] hover:text-white hover:border-[#8646F4] transition-colors"
        >
          Contact
        </Link>
      </div>
    </>
  );
}
