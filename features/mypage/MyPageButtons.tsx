import ListChevron from "@/components/ListChevron";
import React from "react";

const MyPageButtons = () => {
  return (
    <div className="flex flex-col gap-3 p-5">
      <ListChevron title="내 정보 수정하기" />
      <ListChevron title="획득 포인트" />
      <ListChevron title="내 글 / 댓글 / 스크랩" />
    </div>
  );
};

export default MyPageButtons;
