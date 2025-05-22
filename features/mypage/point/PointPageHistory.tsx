"use client";

import React, { useEffect, useRef } from "react";
import PointHistoryItem from "./PointHistoryItem";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useGetPointHistory } from "@/hooks/useProfile";

const PointPageHistory = () => {
  const observerRef = useRef<HTMLDivElement | null>(null);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useGetPointHistory();

  useEffect(() => {
    if (!observerRef.current || !hasNextPage) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      {
        rootMargin: "100px",
      },
    );

    observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  return (
    <div className="flex flex-col gap-5 p-5">
      <h3 className="text-headline-3 text-gray-black">포인트 획득 이력</h3>

      <ScrollArea className="flex h-[calc(100dvh-495.6px)] flex-col gap-3">
        {isLoading && <p>불러오는 중...</p>}
        {isError && <p>오류가 발생했습니다.</p>}
        {data?.pages.map((page) =>
          page.content.map((item) => (
            <PointHistoryItem key={item.id} {...item} />
          )),
        )}
        {hasNextPage && (
          <div ref={observerRef} className="py-4 text-center text-gray-400">
            더 불러오는 중...
          </div>
        )}
      </ScrollArea>
    </div>
  );
};

export default PointPageHistory;
