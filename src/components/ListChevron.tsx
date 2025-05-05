import NextIcon from "./icons/NextIcon";

interface IListChevronProps {
  title: string;
  onClick?: () => void;
}

const ListChevron = ({ title, onClick }: IListChevronProps) => {
  return (
    <div
      className="h-16 flex items-center gap-2 px-4 py-5 border border-gray-200 bg-gray-white rounded-base hover:shadow-drop active:shadow-drop cursor-pointer"
      onClick={onClick}
    >
      <p className="h-[22px] text-headline-3 text-gray-700 grow">{title}</p>
      <NextIcon className="w-6 h-6 text-gray-500" />
    </div>
  );
};

export default ListChevron;
