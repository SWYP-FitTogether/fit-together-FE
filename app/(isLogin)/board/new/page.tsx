import PostWrapper from "@/features/postCreate/PostWrapper";

interface IPostCreatePageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const PostCreatePage = async (props: IPostCreatePageProps) => {
  const searchParams = await props.searchParams;

  return (
    <div>
      <PostWrapper searchParams={searchParams} />
    </div>
  );
};

export default PostCreatePage;
