"use client";

import React, { useEffect, useRef } from "react";
import MyHistoryTabContentWrapper from "./MyHistoryTabContentWrapper";
import { useGetCommentsHistory } from "@/hooks/useProfile";
import MyHistoryPageCommentCard from "./MyHistoryPageCommentCard";

const CommentsHistoryContent = () => {
  const observerRef = useRef<HTMLDivElement | null>(null);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useGetCommentsHistory();

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
    <MyHistoryTabContentWrapper value="mycomments">
      {isLoading && <p>불러오는 중...</p>}
      {isError && <p>오류가 발생했습니다.</p>}
      {data?.pages.map((page) =>
        page.content.map((item) => (
          <MyHistoryPageCommentCard
            key={item.id}
            title={"타이틀"}
            comment={item.content}
          />
        )),
      )}
      {hasNextPage && (
        <div ref={observerRef} className="py-4 text-center text-gray-400">
          더 불러오는 중...
        </div>
      )}
    </MyHistoryTabContentWrapper>
  );
};

export default CommentsHistoryContent;
