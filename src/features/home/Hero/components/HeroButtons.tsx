"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { heroConfig } from "@/config";

export function HeroButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="flex flex-col sm:flex-row gap-4"
    >
      <button className="bg-[#8646F4] border border-[#8646F4] px-8 py-3 text-sm uppercase tracking-widest hover:bg-[#A073EE] transition-colors flex items-center justify-center">
        {heroConfig.buttons.primary.label}
        <ArrowRight className="ml-2 h-4 w-4" />
      </button>
      <button className="border border-[#8646F4]/50 px-8 py-3 text-sm uppercase tracking-widest text-[#A073EE] hover:border-[#8646F4] hover:text-white transition-colors">
        {heroConfig.buttons.secondary.label}
      </button>
    </motion.div>
  );
}
