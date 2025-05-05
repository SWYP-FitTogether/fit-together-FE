import IndentIcon from "./icons/IndentIcon";
import LikeIcon from "./icons/LikeIcon";
import ProfileHeader from "./ProfileHeader";

interface ICommentProps {
  isReply?: boolean;
  comment: string;
  onLikeClick?: () => void;
  onAddCommentClick?: () => void;
}

const Comment = ({
  isReply,
  comment,
  onLikeClick,
  onAddCommentClick,
  name,
  level,
  imgSrc,
  imgAlt,
  isLoading
}: ICommentProps & React.ComponentProps<typeof ProfileHeader>) => {
  return (
    <div className="flex gap-1">
      {isReply && (
        <div className="flex justify-center items-center w-11 h-11">
          <IndentIcon className="w-6 h-6 text-gray-400" />
        </div>
      )}
      <div className="bg-transparent w-full flex flex-col gap-2">
        <div className="h-11 flex items-center">
          <ProfileHeader
            name={name}
            level={level}
            imgSrc={imgSrc}
            imgAlt={imgAlt}
            isLoading={isLoading}
          />
        </div>

        <div className="flex justify-between items-center gap-1">
          <p className="text-gray-700 text-body-1 h-[26px] grow">{comment}</p>
          <button
            className="w-[26px] h-[26px] flex justify-center items-center cursor-pointer hover:opacity-85 active:opacity-85"
            onClick={onLikeClick}
          >
            <LikeIcon className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        <button
          className="w-fit p-2 text-gray-500 text-button-2 cursor-pointer hover:opacity-80 active:opacity-80"
          onClick={onAddCommentClick}
        >
          답글달기
        </button>
      </div>
    </div>
  );
};

export default Comment;
