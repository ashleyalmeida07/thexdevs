"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const shadcnButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[#8646F4] text-white hover:bg-[#A073EE]",
        destructive:
          "bg-red-600 text-white hover:bg-red-600/90",
        outline:
          "border border-[#8646F4]/50 bg-transparent text-[#A073EE] hover:bg-[#8646F4]/10 hover:text-white",
        secondary:
          "bg-[#191625] text-white hover:bg-[#1C192C]",
        ghost: "hover:bg-[#191625] hover:text-white",
        link: "text-[#A073EE] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ShadcnButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof shadcnButtonVariants> {
  asChild?: boolean
}

const ShadcnButton = React.forwardRef<HTMLButtonElement, ShadcnButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(shadcnButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
ShadcnButton.displayName = "ShadcnButton"

export { ShadcnButton, shadcnButtonVariants }
