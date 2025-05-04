import { cn } from "@/lib/utils";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";

interface ICheckBoxProps extends React.ComponentProps<typeof Checkbox> {
  id: string;
  label?: string;
}

const CheckBox = ({ id, label, ...props }: ICheckBoxProps) => {
  return (
    <div className="py-2 px-3 flex items-center w-fit h-11 gap-1">
      <div className="w-6 h-6 flex justify-center items-center p-[3px]">
        <Checkbox
          id={id}
          className="w-[18px] h-[18px] border-[1.5px] border-gray-400 data-[state=checked]:border-none data-[state=checked]:bg-main-secondary disabled:bg-gray-200 disabled:border-none"
          {...props}
        />
      </div>
      {label && (
        <Label
          htmlFor={id}
          className={cn("text-body-1 text-gray-700 h-[26px]", props.disabled && "text-gray-400")}
        >
          {label}
        </Label>
      )}
    </div>
  );
};

export default CheckBox;
