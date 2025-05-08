interface IRecommendListProps {
  category: string;
  title: string;
}

const RecommendList = ({ category, title }: IRecommendListProps) => {
  return (
    <div className="flex gap-2 px-2 py-3">
      <p className="text-caption-1 text-gray-500">{category}</p>
      <p className="grow text-subtitle-2 text-gray-black">{title}</p>
    </div>
  );
};

export default RecommendList;
