"use client";

import { motion } from "framer-motion";

interface TestimonialPaginationProps {
  current: number;
  total: number;
}

export function TestimonialPagination({
  current,
  total,
}: TestimonialPaginationProps) {
  return (
    <div className="mt-8 flex items-center">
      <div className="text-[#A073EE] text-sm mr-4">
        {current + 1} / {total}
      </div>
      <div className="flex-1 h-px bg-[#8646F4]/30 relative">
        <motion.div
          className="h-px bg-[#8646F4] absolute top-0 left-0"
          initial={{ width: "0%" }}
          animate={{
            width: `${((current + 1) / total) * 100}%`,
          }}
          transition={{ duration: 0.3 }}
        ></motion.div>
      </div>
    </div>
  );
}
