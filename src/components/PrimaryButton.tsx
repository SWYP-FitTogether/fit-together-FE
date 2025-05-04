import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";

const buttonVariants = cva(
  "w-full bg-gray-black rounded-base text-button-1 hover:bg-gray-700 active:bg-gray-700 cursor-pointer disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed",
  {
    variants: {
      size: {
        L: "h-14 text-main-primary",
        S: "h-12 text-main-primary"
      }
    },
    defaultVariants: {
      size: "L"
    }
  }
);

interface IPrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: "L" | "S";
  className?: string;
  children: ReactNode;
}

const PrimaryButton = ({ size, className, children, ...props }: IPrimaryButtonProps) => {
  return (
    <button className={cn(buttonVariants({ size }), className)} {...props}>
      {children}
    </button>
  );
};

export default PrimaryButton;
