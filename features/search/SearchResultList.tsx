"use client";

import { useRef, useEffect } from "react";
import { ISearchRequest } from "@/types/search";
import { useInfiniteSearch } from "@/hooks/useSearch";
import BoardPostCard from "../board/BoardPostCard";

interface Props {
  searchParams: ISearchRequest;
}

const SearchResultList = ({ searchParams }: Props) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteSearch(searchParams);

  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!observerRef.current || !hasNextPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      { threshold: 1.0 },
    );

    observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [observerRef, hasNextPage, fetchNextPage]);

  if (status === "pending") return <p>로딩 중...</p>;
  if (status === "error") return <p>에러가 발생했습니다</p>;

  return (
    <div className="flex flex-col gap-2 px-2 py-4">
      {data.pages.map((page) =>
        page.content.map((post) => (
          <BoardPostCard
            key={post.id}
            id={post.id}
            userHighfiveCount={post.userHighfiveCount}
            name={post.author.nickname}
            thumbnailUrl={post.thumbnailUrl}
            imgSrc={post.author.profileImageUrl}
            level={post.author.level}
            category={post.categoryDisplayName}
            title={post.title}
            time={post.createdAt}
            likeCount={post.likeCount}
            highfiveCount={post.highfiveCount}
            commentCount={post.commentCount}
            description={post.contentSummary}
          />
        )),
      )}
      <div ref={observerRef} />
      {isFetchingNextPage && <p>다음 페이지 불러오는 중...</p>}
    </div>
  );
};

export default SearchResultList;
