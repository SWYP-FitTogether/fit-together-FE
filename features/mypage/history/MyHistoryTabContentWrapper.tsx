import { TabsContent } from "@/components/Tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ReactNode } from "react";

interface IMyHistoryTabContentWrapperProps {
  value: string;
  children: ReactNode;
}

const MyHistoryTabContentWrapper = ({
  value,
  children,
}: IMyHistoryTabContentWrapperProps) => {
  return (
    <TabsContent value={value}>
      <ScrollArea className="flex h-[calc(100dvh-106px)] flex-col p-5">
        {children}
      </ScrollArea>
    </TabsContent>
  );
};

export default MyHistoryTabContentWrapper;
