import { MainNavigation } from "@/components/Navigation";
import ProgressBar from "@/components/ProgressBar";
import BoardTabs from "@/features/board/BoardTabs";

const BoardPage = () => {
  return (
    <div>
      <MainNavigation type="main" level={0} />
      <ProgressBar withIndicator max={200} value={80} />
      <div>
        <BoardTabs />
      </div>
    </div>
  );
};

export default BoardPage;
