import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";
import AddIcon from "./icons/AddIcon";

const buttonVariants = cva(
  "w-full rounded-base cursor-pointer disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed",
  {
    variants: {
      size: {
        L: "h-14",
        M: "h-12"
      },
      variant: {
        primary:
          "bg-gray-black text-button-1 text-main-primary hover:bg-gray-700 active:bg-gray-700",
        primaryIcon:
          "flex justify-center items-center gap-1 bg-main-primary text-button-2 text-gray-600 hover:bg-main-secondary active:bg-main-secondary",
        secondary:
          "bg-gray-100 text-button-1 text-gray-600 hover:border hover:border-gray-200 hover:shadow-drop active:border active:border-gray-200 active:shadow-drop"
      }
    },
    defaultVariants: {
      size: "L"
    }
  }
);

interface ISecondaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: "L" | "M";
  variant: "primary" | "primaryIcon" | "secondary";
  className?: string;
  children: ReactNode;
}

const Button = ({ size, variant, className, children, ...props }: ISecondaryButtonProps) => {
  return (
    <button className={cn(buttonVariants({ size, variant }), className)} {...props}>
      {variant === "primaryIcon" && (
        <AddIcon className={cn("w-5 h-5", props.disabled && "text-gray-400")} />
      )}
      {children}
    </button>
  );
};

export default Button;
