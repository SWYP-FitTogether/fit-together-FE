"use client";

import TertiaryButton from "@/components/TertiaryButton";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState, useRef, useEffect } from "react";
import BoardPostCard from "./BoardPostCard";
import BoardStartPost from "./BoardStartPost";
import { useInfinitePosts } from "@/hooks/useBoard";
import { TCategory } from "@/types/boardType";

interface IBoardTabsContentProps {
  value: TCategory;
}

const BoardTabsContent = ({ value }: IBoardTabsContentProps) => {
  const [sort, setSort] = useState<"latest" | "likes">("latest");
  const observerRef = useRef<HTMLDivElement | null>(null);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfinitePosts(value, sort);

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
      <div className="flex h-9 bg-gray-100 px-5">
        <TertiaryButton
          active={sort === "latest"}
          onClick={() => setSort("latest")}
        >
          최신순
        </TertiaryButton>
        <TertiaryButton
          active={sort === "likes"}
          onClick={() => setSort("likes")}
        >
          추천순
        </TertiaryButton>
      </div>

      <ScrollArea className="relative h-[calc(100dvh-195px)] px-5">
        {isLoading && <p>불러오는 중...</p>}
        {isError && <p>오류가 발생했습니다.</p>}
        {data?.pages.map((page) =>
          page.content.map((post) => (
            <BoardPostCard
              key={post.id}
              id={post.id}
              name={post.author.nickname}
              imgSrc={post.author.profileImageUrl}
              level={post.author.level}
              category={post.categoryDisplayName}
              title={post.title}
              time={post.createdAt}
              likeCount={post.likeCount}
              highfiveCount={0}
              commentCount={post.commentCount}
              description={post.contentSummary}
            />
          )),
        )}
        <BoardStartPost />

        {hasNextPage && (
          <div ref={observerRef} className="py-4 text-center text-gray-400">
            더 불러오는 중...
          </div>
        )}
      </ScrollArea>
    </>
  );
};

export default BoardTabsContent;
