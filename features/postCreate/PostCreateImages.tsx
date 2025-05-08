import SquareImg from "@/components/SquareImg";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface IPostCreateImagesProps {
  images: { id: string; src?: string; alt?: string }[];
}

const PostCreateImages = ({ images }: IPostCreateImagesProps) => {
  return (
    <div className="flex flex-col gap-[5px] p-5 pt-0">
      <p className="h-[19px] text-caption-1 text-gray-500">총 {images.length}장</p>
      <ScrollArea>
        <div className="flex gap-2">
          {images.map((image) => (
            <SquareImg key={image.id} imgSrc={image.src} imgAlt={image.alt} isIcon />
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="h-2 [&>div]:bg-gray-200" />
      </ScrollArea>
    </div>
  );
};

export default PostCreateImages;
