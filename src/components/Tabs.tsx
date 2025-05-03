import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

function Tabs({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root data-slot="tabs" className={cn("flex flex-col", className)} {...props} />
  );
}

function TabsList({ ...props }: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <ScrollArea className="w-full whitespace-nowrap">
      <TabsPrimitive.List
        data-slot="tabs-list"
        className={cn(
          "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
          "bg-transparent w-fit h-[46px] px-5 py-0 border-b border-gray-200 rounded-none"
        )}
        {...props}
      />
      <ScrollBar orientation="horizontal" className="h-1.5 [&>div]:bg-gray-200" />
    </ScrollArea>
  );
}

function TabsTrigger({ ...props }: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "w-fit h-[46px] text-center text-button-1 text-gray-500 rounded-none p-3 border-transparent",
        "data-[state=active]:border-b-2 data-[state=active]:border-gray-black data-[state=active]:text-gray-black"
      )}
      {...props}
    />
  );
}

function TabsContent({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
