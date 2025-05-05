interface ICategoryTime {
  type: "categoryTime";
  category: string;
  time: string;
}

interface IComment {
  type: "comment";
  comment: string;
}

interface IBase {
  type: "categoryTime" | "comment";
  title: string;
}

type ListProps = IBase & (ICategoryTime | IComment);

const List = (props: ListProps) => {
  const { title, type } = props;
  return (
    <div className="flex flex-col px-2 py-5 gap-2 border border-gray-200 bg-gray-white">
      <p className="text-headline-3 text-gray-black h-5">{title}</p>
      {type === "categoryTime" && (
        <div className="flex h-[17px] items-center gap-1 w-full">
          <span className="text-caption-1 text-gray-500">{props.category}</span>
          <div className="w-[3px] h-[3px] rounded-full bg-gray-200" />
          <span className="text-caption-2 text-gray-400">{props.time}</span>
        </div>
      )}
      {type === "comment" && <p className="text-body-2 h-[22px] text-gray-600">{props.comment}</p>}
    </div>
  );
};

export default List;
