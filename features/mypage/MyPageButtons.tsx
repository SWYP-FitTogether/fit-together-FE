"use client";

import ListChevron from "@/components/ListChevron";
import { useRouter } from "next/navigation";
import React from "react";

const MyPageButtons = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-3 p-5">
      <ListChevron
        title="내 정보 수정하기"
        onClick={() => router.push("/mypage/edit")}
      />
      <ListChevron
        title="획득 포인트"
        onClick={() => router.push("/mypage/point")}
      />
      <ListChevron
        title="내 글 / 댓글 / 스크랩"
        onClick={() => router.push("/mypage/history")}
      />
    </div>
  );
};

export default MyPageButtons;
