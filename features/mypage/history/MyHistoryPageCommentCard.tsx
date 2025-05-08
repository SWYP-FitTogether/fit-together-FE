interface IMyHistoryPageCommentCardProps {
  title: string;
  comment: string;
}

const MyHistoryPageCommentCard = ({
  title,
  comment,
}: IMyHistoryPageCommentCardProps) => {
  return (
    <div className="flex w-[335px] flex-col px-2 py-5">
      <p className="h-[22px] overflow-hidden text-headline-3 text-ellipsis whitespace-nowrap text-gray-black">
        {title}
      </p>
      <p className="h-[22px] overflow-hidden text-body-2 text-ellipsis whitespace-nowrap text-gray-600">
        {comment}
      </p>
    </div>
  );
};

export default MyHistoryPageCommentCard;
