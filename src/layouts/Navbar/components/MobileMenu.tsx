"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { navLinks, mobileMenuAnimationConfig } from "../config";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={mobileMenuAnimationConfig.initial}
      animate={mobileMenuAnimationConfig.animate}
      exit={mobileMenuAnimationConfig.exit}
      className="md:hidden bg-[#030014]"
    >
      <div className="container mx-auto px-4 py-8">
        <nav className="flex flex-col space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#918EA0] hover:text-[#A073EE] py-2 text-2xl font-light"
              onClick={onClose}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="border border-[#8646F4] px-5 py-3 text-sm uppercase tracking-widest text-[#A073EE] hover:bg-[#8646F4] hover:text-white transition-colors w-full mt-4 text-center"
            onClick={onClose}
          >
            Contact
          </Link>
        </nav>
      </div>
    </motion.div>
  );
}
