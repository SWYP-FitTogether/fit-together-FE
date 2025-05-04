import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";
import AddIcon from "./icons/AddIcon";

const buttonVariants = cva(
  "flex justify-center items-center gap-1 w-full bg-main-primary text-gray-600 rounded-base text-button-2 hover:bg-main-secondary active:bg-main-secondary cursor-pointer disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed",
  {
    variants: {
      size: {
        L: "h-14",
        S: "h-12"
      }
    },
    defaultVariants: {
      size: "L"
    }
  }
);

interface IPrimaryIconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: "L" | "S";
  className?: string;
  children: ReactNode;
}

const PrimaryIconButton = ({ size, className, children, ...props }: IPrimaryIconButtonProps) => {
  return (
    <button className={cn(buttonVariants({ size }), className)} {...props}>
      <AddIcon className={cn("w-5 h-5", props.disabled && "text-gray-400")} />
      {children}
    </button>
  );
};

export default PrimaryIconButton;
