import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex h-11 items-center justify-center gap-2 rounded-md border text-sm font-medium transition-[background-color,color,border-color,box-shadow,transform] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-45 motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-px",
  {
    variants: {
      variant: {
        primary:
          "border-foreground bg-foreground px-5 text-background shadow-[0_10px_30px_-18px_rgba(0,0,0,0.8)] hover:bg-foreground/88 hover:shadow-[0_14px_34px_-18px_rgba(0,0,0,0.75)]",
        secondary:
          "border-border bg-background/70 px-5 text-foreground backdrop-blur-md hover:border-foreground/35 hover:bg-surface-raised",
        ghost:
          "border-transparent bg-transparent px-3 text-muted hover:bg-surface-raised hover:text-foreground",
        icon:
          "size-11 border-border bg-background/70 p-0 text-muted backdrop-blur-md hover:border-foreground/30 hover:text-foreground",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant }), className)} {...props} />
  );
}

export { buttonVariants };
