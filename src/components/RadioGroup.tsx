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
      className={cn("flex flex-col w-fit gap-0", className)}
      {...props}
    />
  );
}

interface IRadioButtonProps extends React.ComponentProps<typeof RadioGroupItem> {
  id: string;
  label?: string;
}

function RadioButton({ label, id, className, ...props }: IRadioButtonProps) {
  return (
    <div className={cn("p-2 flex items-center h-11 gap-1", label && "px-3")}>
      <div className="w-6 h-6 p-0.5">
        <RadioGroupItem
          id={id}
          className={cn(
            "w-5 h-5 border-[1.5px] border-gray-400 data-[state=checked]:border-main-secondary [&>span>svg]:fill-main-secondary [&>span>svg]:text-main-secondary [&>span>svg]:w-3 [&>span>svg]:h-3 disabled:bg-gray-200 disabled:border-none disabled:opacity-100",
            className
          )}
          {...props}
        />
      </div>
      {label && (
        <Label
          htmlFor={id}
          className={cn(
            "h-[26px] text-gray-700 text-body-1 grow",
            props.disabled && "text-gray-400"
          )}
        >
          {label}
        </Label>
      )}
    </div>
  );
}

export { RadioGroup, RadioButton };
