import Link from "next/link";

interface IMyHistoryPageCommentCardProps {
  postId: number;
  title: string;
  comment: string;
}

const MyHistoryPageCommentCard = ({
  postId,
  title,
  comment,
}: IMyHistoryPageCommentCardProps) => {
  return (
    <Link
      href={`/board/${postId}`}
      className="flex w-[335px] cursor-pointer flex-col px-2 py-5"
    >
      <p className="h-[22px] overflow-hidden text-headline-3 text-ellipsis whitespace-nowrap text-gray-black">
        {title}
      </p>
      <p className="h-[22px] overflow-hidden text-body-2 text-ellipsis whitespace-nowrap text-gray-600">
        {comment}
      </p>
    </Link>
  );
};

export default MyHistoryPageCommentCard;
