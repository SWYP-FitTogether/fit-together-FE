import { Tabs, TabsList, TabsTrigger } from "@/components/Tabs";
import BoardTabsContent from "./BoardTabsContent";

const TABS_LIST = [
  { value: "all", title: "전체" },
  { value: "challenge", title: "챌린지" },
  { value: "review", title: "후기" },
  { value: "infoShare", title: "정보공유" },
  { value: "qna", title: "Q&A" },
  { value: "discussion", title: "토론" },
  { value: "free", title: "자유" },
];

const BoardTabs = () => {
  return (
    <Tabs defaultValue="all">
      <TabsList>
        {TABS_LIST.map((tab) => (
          <TabsTrigger value={tab.value} key={tab.value}>
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {TABS_LIST.map((tab) => (
        <BoardTabsContent key={tab.value} value={tab.value} />
      ))}
    </Tabs>
  );
};

export default BoardTabs;
