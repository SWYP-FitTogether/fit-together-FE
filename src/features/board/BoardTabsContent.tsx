import TertiaryButton from "@/components/TertiaryButton";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TabsContent } from "@/components/Tabs";
import { useState } from "react";
import BoardPostCard from "./BoardPostCard";

const POSTS = [
  {
    id: 1,
    title: "하루 만에 챌린지 완주하는 법",
    description: "성공적인 하루 루틴을 만들기 위한 팁을 공유합니다.",
    category: "챌린지",
    time: "2시간 전",
    likeCount: 12,
    commentCount: 4,
    highfiveCount: 7
  },
  {
    id: 2,
    title: "챌린지 후기: 7일간의 변화",
    description: "짧은 기간 동안 느낀 점과 결과를 솔직하게 담았어요.",
    category: "후기",
    time: "5시간 전",
    likeCount: 23,
    commentCount: 8,
    highfiveCount: 15
  },
  {
    id: 3,
    title: "타이머 앱 추천해주세요",
    description: "챌린지 할 때 사용할만한 타이머 앱 있으면 알려주세요!",
    category: "Q&A",
    time: "1일 전",
    likeCount: 5,
    commentCount: 10,
    highfiveCount: 2
  },
  {
    id: 4,
    title: "고민입니다. 이런 상황엔 어떻게 해야 할까요?",
    description: "피드백 주시면 감사하겠습니다. 생각이 많아지네요.",
    category: "토론",
    time: "3일 전",
    likeCount: 31,
    commentCount: 12,
    highfiveCount: 20
  },
  {
    id: 5,
    title: "자유롭게 수다 떨어요",
    description: "오늘 기분이 좋아서 그냥 이야기나 나누고 싶네요.",
    category: "자유",
    time: "30분 전",
    likeCount: 8,
    commentCount: 1,
    highfiveCount: 4
  }
];

interface IBoardTabsContentProps {
  value: string;
}

const BoardTabsContent = ({ value }: IBoardTabsContentProps) => {
  const [sort, setSort] = useState<"latest" | "recommended">("latest");

  return (
    <TabsContent value={value} className="flex flex-col flex-1">
      <div className="h-9 bg-gray-100 px-5 flex">
        <TertiaryButton active={sort === "latest"} onClick={() => setSort("latest")}>
          최신순
        </TertiaryButton>
        <TertiaryButton active={sort === "recommended"} onClick={() => setSort("recommended")}>
          추천순
        </TertiaryButton>
      </div>
      <ScrollArea className="px-5 h-[calc(100dvh-179px)]">
        {POSTS.map((post) => (
          <BoardPostCard key={post.id} name="닉네임" level={0} {...post} />
        ))}
      </ScrollArea>
    </TabsContent>
  );
};

export default BoardTabsContent;
