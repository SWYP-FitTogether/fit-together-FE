import { ReactNode } from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";

interface IMultiChipButtonProps extends React.ComponentProps<typeof CheckboxPrimitive.Root> {
  children: ReactNode;
}

function MultiChipButton({ className, children, ...props }: IMultiChipButtonProps) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "w-fit h-16 flex gap-3 p-5 bg-gray-white text-body-1 font-semibold border border-gray-200 text-gray-600 rounded-base hover:bg-gray-100 data-[state=checked]:bg-main-primary data-[state=checked]:border-main-primary data-[state=checked]:text-gray-black data-[state=checked]:[&>svg]:text-gray-600 disabled:border-gray-200 disabled:bg-gray-200 disabled:text-gray-400 disabled:[&>svg]:text-gray-300",
        className
      )}
      {...props}
    >
      {children}
      <CheckIcon className="text-gray-400" />
    </CheckboxPrimitive.Root>
  );
}

export default MultiChipButton;
