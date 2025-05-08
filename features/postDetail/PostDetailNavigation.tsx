import { MainNavigation } from "@/components/Navigation";
import ProgressBar from "@/components/ProgressBar";

const PostDetailNavigation = () => {
  return (
    <>
      <MainNavigation type="main" level={0} />
      <div className="flex w-full items-center justify-center py-2">
        <ProgressBar withIndicator max={200} value={80} />
      </div>
    </>
  );
};

export default PostDetailNavigation;
