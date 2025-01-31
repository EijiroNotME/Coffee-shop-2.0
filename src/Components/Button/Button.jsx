import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

export const buttonStyles = cva(["transition-colors"], {
  variants: {
    variant: {
      default: [
        "text-color-heading",
        "bg-transparent",
        "hover:text-accent-default",
      ],
      highlight: [
        "text-color-heading",
        "bg-accent-default",
        "hover:bg-accent-hover",
      ],
    },
    size: {
      default: ["rounded", "p-2"],
      icon: [
        "rounded-full",
        "w-12",
        "h-12",
        "flex",
        "items-center",
        "justify-center",
        "p-2.5",
      ],
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export function Button({
  variant = "default",
  size = "default",
  className,
  ...props
}) {
  return (
    <button
      {...props}
      className={twMerge(buttonStyles({ variant, size }), className)}
    />
  );
}
