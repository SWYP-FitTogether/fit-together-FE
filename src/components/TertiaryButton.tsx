import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ITertiaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  children: ReactNode;
}

const TertiaryButton = ({ active, children, className, ...props }: ITertiaryButtonProps) => {
  return (
    <button
      className={cn(
        "w-fit h-9 p-2 text-[14px] font-bold text-gray-500 cursor-pointer hover:text-gray-700 active:text-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed",
        active && "text-gray-700",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default TertiaryButton;
