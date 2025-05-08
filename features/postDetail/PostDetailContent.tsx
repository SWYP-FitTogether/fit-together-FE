import CarouselImg from "@/components/CarouselImg";

const PostDetailContent = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h2 className="text-headline-2 text-gray-black">제목입니다.</h2>
        <p className="text-body-1 text-gray-700">내용입니다.</p>
      </div>
      <CarouselImg images={[{ id: 1 }, { id: 2 }, { id: 3 }]} />
    </>
  );
};

export default PostDetailContent;
