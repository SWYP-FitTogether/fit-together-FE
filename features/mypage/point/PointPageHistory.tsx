import React from "react";
import PointHistoryItem from "./PointHistoryItem";
import { ScrollArea } from "@/components/ui/scroll-area";

const PointPageHistory = () => {
  return (
    <div className="flex flex-col gap-5 p-5">
      <h3 className="text-headline-3 text-gray-black">포인트 획득 이력</h3>

      <ScrollArea className="flex h-[calc(100dvh-495.6px)] flex-col gap-3">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <PointHistoryItem key={item} />
        ))}
      </ScrollArea>
    </div>
  );
};

export default PointPageHistory;
