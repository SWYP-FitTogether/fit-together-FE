"use client";

import { SubNavigation } from "@/components/Navigation";
import MyHistoryPageTabs from "@/features/mypage/history/MyHistoryPageTabs";
import { useRouter } from "next/router";

const MyHistoryPage = () => {
  const router = useRouter();
  return (
    <div>
      <SubNavigation
        onBack={() => router.push("/mypage")}
        title="내 글 / 댓글 / 스크랩"
        type="mypageDetail"
        page="mypage"
      />

      <MyHistoryPageTabs />
    </div>
  );
};

export default MyHistoryPage;
