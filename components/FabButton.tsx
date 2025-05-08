"use client";

import { ButtonHTMLAttributes } from "react";
import NotePencilIcon from "./icons/NotePencilIcon";
import { cn } from "@/lib/utils";

const FabButton = ({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={cn(
        "flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-gray-black hover:bg-gray-700 active:bg-gray-700",
        className,
      )}
      {...props}
    >
      <NotePencilIcon className="text-main-primary" />
    </button>
  );
};

export default FabButton;
