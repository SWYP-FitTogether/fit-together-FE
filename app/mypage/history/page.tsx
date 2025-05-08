import { SubNavigation } from "@/components/Navigation";
import MyHistoryPageTabs from "@/features/mypage/history/MyHistoryPageTabs";

const MyHistoryPage = () => {
  return (
    <div>
      <SubNavigation title="내 글 / 댓글 / 스크랩" type="mypageDetail" />

      <MyHistoryPageTabs />
    </div>
  );
};

export default MyHistoryPage;
