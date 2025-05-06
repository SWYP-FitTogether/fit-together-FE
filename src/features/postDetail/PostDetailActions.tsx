import BookmarkIcon from "@/components/icons/BookmarkIcon";
import CommentIcon from "@/components/icons/CommentIcon";
import LikeIcon from "@/components/icons/LikeIcon";
import SendIcon from "@/components/icons/SendIcon";
import IconTextButton from "@/components/IconTextButton";

const PostDetailActions = () => {
  return (
    <div className="flex px-5 py-2 justify-between">
      <div className="flex gap-1">
        <IconTextButton size="M" Icon={LikeIcon} children={"Text"} className="text-gray-500" />
        <IconTextButton size="M" Icon={CommentIcon} children={"Text"} className="text-gray-500" />
        <button className="w-8 h-8 flex justify-center items-center cursor-pointer hover:opacity-80 active:opacity-80">
          <SendIcon className="w-6 h-6 text-gray-500" />
        </button>
      </div>

      <button className="w-8 h-8 flex justify-center items-center cursor-pointer hover:opacity-80 active:opacity-80">
        <BookmarkIcon className="w-6 h-6 text-gray-500" />
      </button>
    </div>
  );
};

export default PostDetailActions;
