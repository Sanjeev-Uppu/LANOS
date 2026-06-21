import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

// ─────────────────────────────────────────────────────────────
// Lanos Button — brand variants built on the navy/royal/azure/
// steel/ice token system defined in theme.css. Kept restrained:
// short transitions, no heavy motion, since this fires everywhere.
// ─────────────────────────────────────────────────────────────
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold cursor-pointer transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-azure focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Azure → Royal gradient, lifts + glows on hover. Main CTA.
        default:
          "bg-[linear-gradient(135deg,var(--azure),var(--royal))] text-white shadow-[0_8px_24px_-10px_rgba(28,137,244,0.55)] hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-10px_rgba(28,137,244,0.7)] active:translate-y-0",

        // Deep navy solid, for secondary emphasis on light sections.
        navy:
          "bg-[var(--navy)] text-[var(--ice)] shadow-[0_8px_20px_-10px_rgba(4,31,62,0.6)] hover:bg-[var(--royal)] hover:-translate-y-0.5 active:translate-y-0",

        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",

        // Clean outline, fills with azure tint on hover.
        outline:
          "border border-[color:var(--royal)]/30 bg-transparent text-[color:var(--navy)] shadow-sm hover:border-[color:var(--azure)]/60 hover:bg-[color:var(--azure)]/8 hover:-translate-y-0.5",

        // White pill, for use on dark/navy sections.
        secondary:
          "bg-white text-[color:var(--navy)] shadow-sm border border-[color:var(--royal)]/15 hover:bg-[color:var(--ice)] hover:-translate-y-0.5",

        // Translucent azure, for use on dark/navy sections as a quieter CTA.
        ghost:
          "bg-[color:var(--azure)]/0 text-[color:var(--navy)] hover:bg-[color:var(--azure)]/10 hover:text-[color:var(--royal)]",

        // Translucent azure on dark backgrounds specifically (navbar, hero on navy).
        "ghost-dark":
          "bg-[color:var(--azure)]/14 text-[var(--ice)] border border-[color:var(--azure)]/30 hover:bg-[color:var(--azure)]/22 hover:-translate-y-0.5",

        link: "text-[color:var(--azure)] underline-offset-4 hover:underline hover:text-[color:var(--royal)] shadow-none rounded-none",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-8 px-3.5 text-xs",
        lg: "h-12 px-7 text-[15px]",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };