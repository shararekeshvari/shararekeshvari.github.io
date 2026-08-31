import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-md border text-sm font-medium transition-[background-color,color,border-color,box-shadow,transform] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-45 active:translate-y-px",
  {
    variants: {
      variant: {
        primary:
          "border-accent bg-accent px-5 text-ink shadow-[0_0.75rem_2.25rem_color-mix(in_srgb,var(--accent)_24%,transparent)] hover:border-accent-strong hover:bg-accent-strong",
        secondary:
          "border-border bg-surface-raised/72 px-5 text-foreground backdrop-blur-md hover:border-accent/45 hover:bg-surface-raised",
        ghost:
          "border-transparent bg-transparent px-3 text-muted hover:bg-surface-raised hover:text-foreground",
        icon:
          "size-11 border-border bg-surface-raised/72 p-0 text-muted backdrop-blur-md hover:border-accent/45 hover:text-foreground",
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
