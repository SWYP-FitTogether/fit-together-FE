"use client";

import { cn } from "@/lib/utils";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";

interface ICheckBoxProps extends React.ComponentProps<typeof Checkbox> {
  id: string;
  label?: string;
}

const CheckBox = ({ id, label, ...props }: ICheckBoxProps) => {
  return (
    <div className="flex h-11 w-fit items-center gap-1 px-3 py-2">
      <div className="flex h-6 w-6 items-center justify-center p-[3px]">
        <Checkbox
          id={id}
          className="h-[18px] w-[18px] border-[1.5px] border-gray-400 disabled:border-none disabled:bg-gray-200 disabled:opacity-100 data-[state=checked]:border-none data-[state=checked]:bg-main-secondary"
          {...props}
        />
      </div>
      {label && (
        <Label
          htmlFor={id}
          className={cn(
            "h-[26px] text-body-1 text-gray-700",
            props.disabled && "text-gray-400",
          )}
        >
          {label}
        </Label>
      )}
    </div>
  );
};

export default CheckBox;
