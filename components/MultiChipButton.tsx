"use client";

import { ReactNode } from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";

interface IMultiChipButtonProps
  extends React.ComponentProps<typeof CheckboxPrimitive.Root> {
  children: ReactNode;
}

function MultiChipButton({
  className,
  children,
  ...props
}: IMultiChipButtonProps) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "flex h-16 w-fit cursor-pointer gap-3 rounded-base border border-gray-200 bg-gray-white p-5 text-body-1 font-semibold text-gray-600 hover:bg-gray-100 active:bg-gray-100 disabled:border-gray-200 disabled:bg-gray-200 disabled:text-gray-400 data-[state=checked]:border-main-primary data-[state=checked]:bg-main-primary data-[state=checked]:text-gray-black disabled:[&>svg]:text-gray-300 data-[state=checked]:[&>svg]:text-gray-600",
        className,
      )}
      {...props}
    >
      {children}
      <CheckIcon className="text-gray-400" />
    </CheckboxPrimitive.Root>
  );
}

export default MultiChipButton;
