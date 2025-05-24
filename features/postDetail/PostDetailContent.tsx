import CarouselImg from "@/components/CarouselImg";
import ImageZoom from "@/components/ImageZoom";
import { useRef } from "react";

interface IPostDetailContentProps {
  title: string;
  content: string;
  images: string[];
}

const PostDetailContent = ({
  title,
  content,
  images,
}: IPostDetailContentProps) => {
  const imgs = images.map((v, i) => ({ id: i, src: v }));
  const buttonRef = useRef<HTMLButtonElement>(null);
  return (
    <>
      <div className="flex flex-col gap-2">
        <h2 className="text-headline-2 text-gray-black">{title}</h2>
        <p className="text-body-1 text-gray-700">{content}</p>
      </div>
      <CarouselImg
        images={imgs}
        onImageClick={() => buttonRef.current?.click()}
      />
      <ImageZoom imgs={imgs}>
        <button className="hidden" ref={buttonRef} />
      </ImageZoom>
    </>
  );
};

export default PostDetailContent;
