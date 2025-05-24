"use client";

import React, { useEffect, useRef } from "react";
import { useGetUserPostsHistory } from "@/hooks/useProfile";
import { useRouter } from "next/navigation";
import MyHistoryPagePostCard from "../mypage/history/MyHistoryPagePostCard";
import { SubNavigation } from "@/components/Navigation";
import { ScrollArea } from "@/components/ui/scroll-area";

interface IUserPostsHistoryContentProps {
  id: number;
}

const UserPostsHistoryContent = ({ id }: IUserPostsHistoryContentProps) => {
  const observerRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useGetUserPostsHistory(id);

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
    <>
      <SubNavigation
        onBack={() => router.back()}
        title="작성글 목록"
        type="mypageDetail"
        page="board"
      />

      <ScrollArea className="h-[calc(100dvh-60px)]">
        {isLoading && <p>불러오는 중...</p>}
        {isError && <p>오류가 발생했습니다.</p>}
        {data?.pages.map((page) =>
          page.content.map((item) => (
            <MyHistoryPagePostCard
              key={item.id}
              title={item.title}
              description={item.contentSummary}
              category={item.categoryDisplayName}
              time={item.createdAt}
              commentCount={item.commentCount}
              highfiveCount={item.highfiveCount}
              likeCount={item.likeCount}
              onContentClick={() => router.push(`/board/${item.id}`)}
            />
          )),
        )}
        {hasNextPage && (
          <div ref={observerRef} className="py-4 text-center text-gray-400">
            더 불러오는 중...
          </div>
        )}
      </ScrollArea>
    </>
  );
};

export default UserPostsHistoryContent;
