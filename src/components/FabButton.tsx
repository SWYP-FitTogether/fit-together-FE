import { ButtonHTMLAttributes } from "react";
import NotePencilIcon from "./icons/NotePencilIcon";
import { cn } from "@/lib/utils";

const FabButton = ({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={cn(
        "w-14 h-14 rounded-full bg-gray-black flex justify-center items-center cursor-pointer hover:bg-gray-700 active:bg-gray-700",
        className
      )}
      {...props}
    >
      <NotePencilIcon className="text-main-primary" />
    </button>
  );
};

export default FabButton;
