"use client";

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
    <div className="flex flex-col gap-2 border border-gray-200 bg-gray-white px-2 py-5">
      <p className="h-5 text-headline-3 text-gray-black">{title}</p>
      {type === "categoryTime" && (
        <div className="flex h-[17px] w-full items-center gap-1">
          <span className="text-caption-1 text-gray-500">{props.category}</span>
          <div className="h-[3px] w-[3px] rounded-full bg-gray-200" />
          <span className="text-caption-2 text-gray-400">{props.time}</span>
        </div>
      )}
      {type === "comment" && (
        <p className="h-[22px] text-body-2 text-gray-600">{props.comment}</p>
      )}
    </div>
  );
};

export default List;
