import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

function SingleChipGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return <RadioGroupPrimitive.Root data-slot="radio-group" className={className} {...props} />;
}

interface ISingleChipButtonProps extends React.ComponentProps<typeof RadioGroupPrimitive.Item> {
  children: ReactNode;
}

function SingleChipButton({ children, className, ...props }: ISingleChipButtonProps) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        "w-fit h-16 px-8 py-5 text-body-1 font-semibold bg-gray-white hover:bg-gray-100 active:bg-gray-100 text-gray-600 cursor-pointer border border-gray-200 rounded-base data-[state=checked]:bg-main-primary data-[state=checked]:border-main-primary data-[state=checked]:text-gray-black disabled:border-gray-200 disabled:bg-gray-200 disabled:text-gray-400",
        className
      )}
      {...props}
    >
      {children}
    </RadioGroupPrimitive.Item>
  );
}

export { SingleChipGroup, SingleChipButton };
