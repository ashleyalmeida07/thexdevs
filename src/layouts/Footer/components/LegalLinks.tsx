"use client";

import { legalLinks } from "../config";

export function LegalLinks() {
  return (
    <div className="flex gap-6">
      {legalLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="text-[#918EA0] hover:text-[#A073EE] transition-colors text-sm"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
