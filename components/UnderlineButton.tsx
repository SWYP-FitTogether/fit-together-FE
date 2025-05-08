"use client";

import { ButtonHTMLAttributes, ElementType, ReactNode } from "react";
import NextIcon from "./icons/NextIcon";
import { cn } from "@/lib/utils";

interface IUnderlineButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  Icon?: ElementType;
  children: ReactNode;
}

const UnderlineButton = ({
  children,
  Icon = NextIcon,
  className,
  ...props
}: IUnderlineButtonProps) => {
  return (
    <button
      className={cn(
        "flex h-7 w-fit cursor-pointer items-center gap-1 border-b border-b-gray-500 text-gray-600 hover:border-b-gray-600 active:border-b-gray-600 disabled:cursor-not-allowed disabled:border-b-gray-400 disabled:text-gray-400",
        className,
      )}
      {...props}
    >
      <p className="text-button-2">{children}</p>
      <Icon
        className={cn(
          "h-4 w-4 text-gray-600",
          props.disabled && "text-gray-400",
        )}
      />
    </button>
  );
};

export default UnderlineButton;
