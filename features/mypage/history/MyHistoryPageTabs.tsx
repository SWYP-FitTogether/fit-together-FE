import { Tabs, TabsList, TabsTrigger } from "@/components/Tabs";
import PostsHistoryContent from "./PostsHistoryContent";
import { useState } from "react";
import CommentsHistoryContent from "./CommentsHistoryContent";
import BookmarksContent from "./BookmarksContent";

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
      {selectedTab === "mycomments" && <CommentsHistoryContent />}
      {selectedTab === "scraps" && <BookmarksContent />}
    </Tabs>
  );
};

export default MyHistoryPageTabs;
