"use client";

import { cn } from "@/lib/utils";
import { Label } from "./ui/label";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { RadioGroupItem } from "./ui/radio-group";

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("flex w-fit flex-col gap-0", className)}
      {...props}
    />
  );
}

interface IRadioButtonProps
  extends React.ComponentProps<typeof RadioGroupItem> {
  id: string;
  label?: string;
}

function RadioButton({ label, id, className, ...props }: IRadioButtonProps) {
  return (
    <div className={cn("flex h-11 items-center gap-1 p-2", label && "px-3")}>
      <div className="h-6 w-6 p-0.5">
        <RadioGroupItem
          id={id}
          className={cn(
            "h-5 w-5 border-[1.5px] border-gray-400 disabled:border-none disabled:bg-gray-200 disabled:opacity-100 data-[state=checked]:border-main-secondary [&>span>svg]:h-3 [&>span>svg]:w-3 [&>span>svg]:fill-main-secondary [&>span>svg]:text-main-secondary",
            className,
          )}
          {...props}
        />
      </div>
      {label && (
        <Label
          htmlFor={id}
          className={cn(
            "h-[26px] grow text-body-1 text-gray-700",
            props.disabled && "text-gray-400",
          )}
        >
          {label}
        </Label>
      )}
    </div>
  );
}

export { RadioGroup, RadioButton };
