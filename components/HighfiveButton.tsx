"use client";

import { cva } from "class-variance-authority";
import ClapIcon from "./icons/ClapIcon";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";
import ClappedIcon from "./icons/ClappedIcon";

const buttonVariants = cva(
  "cursor-pointer py-2 rounded-full shadow-drop flex justify-center items-center",
  {
    variants: {
      variant: {
        default:
          "px-3 hover:bg-gray-100 active:bg-gray-100 border border-gray-200 w-11 h-11",
        click: "px-4 bg-main-primary hover:opacity-85 active:opacity-85",
      },
    },
  },
);

interface IDefaultProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "default";
}

interface IClickProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "click";
  count: number;
  maxcount: number;
}

type IHighfiveButtonProps = IDefaultProps | IClickProps;

const HighfiveButton = (props: IHighfiveButtonProps) => {
  const { variant, className } = props;
  return (
    <button
      className={cn(
        buttonVariants({ variant }),
        variant === "click" &&
          props.count === props.maxcount &&
          "cursor-not-allowed bg-gradation hover:opacity-100 active:opacity-100",
        className,
      )}
      {...props}
    >
      {variant === "default" && <ClapIcon className="h-5 w-5 text-gray-500" />}
      {variant === "click" && (
        <div className="flex items-center gap-1">
          <span className="text-button-2 text-gray-700">{props.count}</span>
          <ClappedIcon className="h-5 w-5 text-gray-600" />
        </div>
      )}
    </button>
  );
};

export default HighfiveButton;
