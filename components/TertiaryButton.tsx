"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ITertiaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  children: ReactNode;
}

const TertiaryButton = ({
  active,
  children,
  className,
  ...props
}: ITertiaryButtonProps) => {
  return (
    <button
      className={cn(
        "h-9 w-fit cursor-pointer p-2 text-gray-500 hover:text-gray-700 active:text-gray-700 disabled:cursor-not-allowed disabled:text-gray-400",
        active && "text-gray-700",
        className,
      )}
      {...props}
    >
      <p className="text-button-2">{children}</p>
    </button>
  );
};

export default TertiaryButton;
