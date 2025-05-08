"use client";

import { cn } from "@/lib/utils";
import { Label } from "./ui/label";
import { ScrollArea } from "./ui/scroll-area";
import { Select, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import * as SelectPrimitive from "@radix-ui/react-select";
import { IDropdownItem } from "@/types/type";

function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border bg-popover text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
          position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          className,
        )}
        position={position}
        {...props}
      >
        <SelectPrimitive.Viewport
          className={cn(
            "p-1",
            position === "popper" &&
              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1",
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

interface IDropdownProps extends React.ComponentProps<typeof Select> {
  id: string;
  label?: string;
  placeholder?: string;
  items: IDropdownItem[];
}

const Dropdown = ({
  id,
  placeholder,
  label,
  items,
  ...props
}: IDropdownProps) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <Label htmlFor={id} className="h-[19px] text-caption-1 text-gray-600">
          {label}
        </Label>
      )}
      <Select {...props}>
        <SelectTrigger
          id={id}
          className="w-full rounded-base border border-gray-200 bg-gray-white p-4 text-body-1 focus-visible:border-main-secondary focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 disabled:bg-gray-200 data-[disabled]:opacity-100 data-[placeholder]:text-gray-500 data-[disabled]:data-[placeholder]:text-gray-400 data-[size=default]:h-[58px] data-[state=open]:border-main-secondary focus:data-[state=open]:border-main-secondary [&>svg]:h-6 [&>svg]:w-6 [&>svg]:text-gray-600 [&>svg]:opacity-1000 disabled:[&>svg]:text-gray-300 data-[state=open]:[&>svg]:rotate-180"
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <ScrollArea className="max-h-[232px]">
            {items.map((item) => (
              <SelectItem
                key={item.value}
                className="h-[58px] p-4 text-body-1 text-gray-400 focus:bg-gray-100 focus:font-semibold focus:text-gray-700 data-[state=checked]:bg-gray-100 data-[state=checked]:text-base data-[state=checked]:font-semibold data-[state=checked]:text-gray-700"
                value={item.value}
              >
                {item.title}
              </SelectItem>
            ))}
          </ScrollArea>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Dropdown;
