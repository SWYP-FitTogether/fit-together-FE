import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { ButtonHTMLAttributes, ElementType, ReactNode } from "react";

const buttonVariants = cva(
  "w-fit flex items-center text-gray-600 cursor-pointer hover:opacity-80 active:opacity-80",
  {
    variants: {
      size: {
        M: "h-8 p-1 gap-1",
        S: "h-[23px] p-0.5 gap-[1.5px]"
      }
    }
  }
);

interface IIconTextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: "M" | "S";
  Icon: ElementType;
  children: ReactNode;
}

const IconTextButton = ({ size, Icon, children, className, ...props }: IIconTextButtonProps) => {
  return (
    <button className={cn(buttonVariants({ size }), className)} {...props}>
      <Icon className={cn("text-gray-500", size === "M" && "w-6 h-6", size === "S" && "w-4 h-4")} />
      <span className={cn(size === "M" && "text-subtitle-2", size === "S" && "text-caption-1")}>
        {children}
      </span>
    </button>
  );
};

export default IconTextButton;
