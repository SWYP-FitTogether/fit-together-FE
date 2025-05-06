import { MainNavigation } from "@/components/Navigation";
import ProgressBar from "@/components/ProgressBar";

const BoardNavigation = () => {
  return (
    <>
      <MainNavigation type="main" level={0} />
      <div className="flex justify-center items-center w-full py-2">
        <ProgressBar withIndicator max={200} value={80} />
      </div>
    </>
  );
};

export default BoardNavigation;
