import { MainNavigation } from "@/components/Navigation";
import ProgressBar from "@/components/ProgressBar";
import BoardTabs from "@/features/board/BoardTabs";

const BoardPage = () => {
  return (
    <div>
      <MainNavigation type="main" level={0} />
      <div className="flex justify-center items-center w-full py-2">
        <ProgressBar withIndicator max={200} value={80} />
      </div>

      <div>
        <BoardTabs />
      </div>
    </div>
  );
};

export default BoardPage;
