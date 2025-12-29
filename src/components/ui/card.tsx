"use client";

import { type HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "hover" | "bordered";
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    const variants = {
      default: "border-2 border-[#8646F4]/30 bg-[#191625] backdrop-blur-sm p-8",
      hover:
        "border-2 border-[#8646F4]/30 bg-[#191625] backdrop-blur-sm p-8 hover:border-[#8646F4]/60 hover:bg-[#1C192C] transition-all duration-300",
      bordered: "border-2 border-[#8646F4]/30 p-8",
    };

    return (
      <div ref={ref} className={cn(variants[variant], className)} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export { Card };
