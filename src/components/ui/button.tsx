"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", children, ...props },
    ref
  ) => {
    const baseStyles =
      "uppercase tracking-widest transition-all duration-300 flex items-center justify-center";

    const variants = {
      primary: "bg-[#8646F4] text-white hover:bg-[#A073EE]",
      secondary:
        "border border-[#8646F4]/50 text-[#A073EE] hover:border-[#8646F4] hover:text-white",
      outline: "border border-[#8646F4] hover:bg-[#8646F4] hover:text-white",
      ghost: "text-[#918EA0] hover:text-white hover:bg-white/5",
    };

    const sizes = {
      sm: "px-4 py-2 text-xs",
      md: "px-6 py-3 text-sm",
      lg: "px-8 py-4 text-sm",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
