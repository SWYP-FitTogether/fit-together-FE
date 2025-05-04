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
        default: "px-3 hover:bg-gray-100 active:bg-gray-100 border border-gray-200 w-11 h-11",
        click: "px-4 bg-main-primary hover:opacity-85 active:opacity-85"
      }
    }
  }
);

interface IDefaultProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "default";
}

interface IClickProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "click";
  count: number;
  maxCount: number;
}

type IHighfiveButtonProps = IDefaultProps | IClickProps;

const HighfiveButton = (props: IHighfiveButtonProps) => {
  const { variant, className } = props;
  return (
    <button
      className={cn(
        buttonVariants({ variant }),
        variant === "click" &&
          props.count === props.maxCount &&
          "bg-gradation cursor-not-allowed hover:opacity-100 active:opacity-100",
        className
      )}
      {...props}
    >
      {variant === "default" && <ClapIcon className="text-gray-500 w-5 h-5" />}
      {variant === "click" && (
        <div className="flex gap-1 items-center">
          <span className="text-gray-700 text-button-2">{props.count}</span>
          <ClappedIcon className="text-gray-600 w-5 h-5" />
        </div>
      )}
    </button>
  );
};

export default HighfiveButton;
