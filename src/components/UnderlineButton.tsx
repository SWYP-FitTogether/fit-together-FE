import { ButtonHTMLAttributes, ReactNode } from "react";
import NextIcon from "./icons/NextIcon";
import { cn } from "@/lib/utils";

interface IUnderlineButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const UnderlineButton = ({ children, className, ...props }: IUnderlineButtonProps) => {
  return (
    <button
      className={cn(
        "flex gap-1 w-fit h-7 items-center border-b border-b-gray-500 text-gray-600 hover:border-b-gray-600 active:border-b-gray-600 cursor-pointer disabled:text-gray-400 disabled:border-b-gray-400 disabled:cursor-not-allowed",
        className
      )}
      {...props}
    >
      <p className="text-button-2">{children}</p>
      <NextIcon className={cn("w-4 h-4 text-gray-600", props.disabled && "text-gray-400")} />
    </button>
  );
};

export default UnderlineButton;
