import { Tabs, TabsList, TabsTrigger } from "@/components/Tabs";
import MyHistoryPagePostCard from "@/features/mypage/history/MyHistoryPagePostCard";
import MyHistoryPageCommentCard from "./MyHistoryPageCommentCard";
import MyHistoryTabContentWrapper from "./MyHistoryTabContentWrapper";
import PostsHistoryContent from "./PostsHistoryContent";
import { useState } from "react";

const TABS = [
  { value: "myposts", title: "내 글" },
  { value: "mycomments", title: "내 댓글" },
  { value: "scraps", title: "스크랩" },
];

type TabsType = "myposts" | "mycomments" | "scraps";

const MyHistoryPageTabs = () => {
  const [selectedTab, setSelectedTab] = useState<TabsType>("myposts");

  return (
    <Tabs
      defaultValue={selectedTab}
      onValueChange={(v) => setSelectedTab(v as TabsType)}
    >
      <TabsList className="w-full px-5">
        {TABS.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value} className="w-1/3">
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {selectedTab === "myposts" && <PostsHistoryContent />}

      <MyHistoryTabContentWrapper value="mycomments">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <MyHistoryPageCommentCard
            key={item}
            title="타이틀을 입력해 주세요타이틀을 입력해 주세요타이틀을 입력해 주세요"
            comment="댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용"
          />
        ))}
      </MyHistoryTabContentWrapper>
      <MyHistoryTabContentWrapper value="scraps">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <MyHistoryPagePostCard
            key={item}
            isProfile
            name="닉네임"
            level={0}
            title="타이틀을 입력해 주세요타이틀을 입력해 주세요타이틀을 입력해 주세요타이틀을 입력해 주세요"
            description="내용을 입력해 주세요내용을 입력해 주세요내용을 입력해 주세요내용을 입력해 주세요"
            category="카테고리"
            time="시간"
            commentCount={0}
            highfiveCount={0}
            likeCount={0}
          />
        ))}
      </MyHistoryTabContentWrapper>
    </Tabs>
  );
};

export default MyHistoryPageTabs;
