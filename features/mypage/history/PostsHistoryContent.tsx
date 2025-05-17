"use client";

import React, { useEffect, useRef } from "react";
import MyHistoryTabContentWrapper from "./MyHistoryTabContentWrapper";
import MyHistoryPagePostCard from "./MyHistoryPagePostCard";
import { useGetPostsHistory } from "@/hooks/useProfile";

const PostsHistoryContent = () => {
  const observerRef = useRef<HTMLDivElement | null>(null);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useGetPostsHistory();

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
    <MyHistoryTabContentWrapper value="myposts">
      {isLoading && <p>불러오는 중...</p>}
      {isError && <p>오류가 발생했습니다.</p>}
      {data?.pages.map((page) =>
        page.content.map((item) => (
          <MyHistoryPagePostCard
            key={item.id}
            title={item.title}
            description={item.contentSummary}
            category={item.category}
            time={item.createdAt}
            commentCount={item.commentCount}
            highfiveCount={item.highfiveCount}
            likeCount={item.likeCount}
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

export default PostsHistoryContent;
