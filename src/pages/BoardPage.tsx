import BoardNavigation from "@/features/board/BoardNavigation";
import BoardTabs from "@/features/board/BoardTabs";

const BoardPage = () => {
  return (
    <div>
      <BoardNavigation />

      <div>
        <BoardTabs />
      </div>
    </div>
  );
};

export default BoardPage;
