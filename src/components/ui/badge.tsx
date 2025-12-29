"use client";

import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline";
}

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  const variants = {
    default:
      "bg-[#191625] backdrop-blur-sm px-3 py-1 text-xs uppercase tracking-widest text-[#A073EE] border border-[#8646F4]/30",
    outline:
      "border border-[#8646F4]/50 px-3 py-1 text-xs uppercase tracking-widest text-[#A073EE]",
  };

  return (
    <div
      className={cn("inline-block", variants[variant], className)}
      {...props}
    >
      {children}
    </div>
  );
}
