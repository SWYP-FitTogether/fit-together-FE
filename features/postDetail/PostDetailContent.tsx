import CarouselImg from "@/components/CarouselImg";

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
  return (
    <>
      <div className="flex flex-col gap-2">
        <h2 className="text-headline-2 text-gray-black">{title}</h2>
        <p className="text-body-1 text-gray-700">{content}</p>
      </div>
      <CarouselImg images={imgs} />
    </>
  );
};

export default PostDetailContent;
