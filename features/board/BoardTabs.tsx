"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tabs";
import BoardTabsContent from "./BoardTabsContent";
import { TCategory } from "@/types/boardType";
import { useEffect, useState } from "react";
import { firstLogin } from "@/utils/auth";

const TABS_LIST: { value: TCategory; title: string }[] = [
  { value: "ALL", title: "전체" },
  { value: "CHALLENGE", title: "챌린지" },
  { value: "REVIEW", title: "후기" },
  { value: "INFORMATION", title: "정보공유" },
  { value: "QNA", title: "Q&A" },
  { value: "DISCUSSION", title: "토론" },
];

const BoardTabs = () => {
  const [selectedTab, setSelectedTab] = useState<TCategory>("ALL");

  useEffect(() => {
    firstLogin().catch((err) => {
      console.error(err);
    });
  }, []);

  return (
    <Tabs
      value={selectedTab}
      onValueChange={(v) => setSelectedTab(v as TCategory)}
    >
      <TabsList>
        {TABS_LIST.map((tab) => (
          <TabsTrigger value={tab.value} key={tab.value}>
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {TABS_LIST.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          {selectedTab === tab.value && <BoardTabsContent value={tab.value} />}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default BoardTabs;
