import PostCreateContent from "@/features/postCreate/PostCreateContent";
import PostCreateImages from "@/features/postCreate/PostCreateImages";
import PostCreateNavigation from "@/features/postCreate/PostCreateNavigation";

interface IPostCreatePageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const PostCreatePage = async (props: IPostCreatePageProps) => {
  const searchParams = await props.searchParams;

  return (
    <div>
      <PostCreateNavigation />
      <PostCreateContent searchParams={searchParams} />
      <PostCreateImages
        images={[
          { id: "1" },
          { id: "2" },
          { id: "3" },
          { id: "4" },
          { id: "5" },
          { id: "6" },
        ]}
      />
    </div>
  );
};

export default PostCreatePage;
