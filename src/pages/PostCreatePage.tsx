import PostCreateContent from "@/features/postCreate/PostCreateContent";
import PostCreateImages from "@/features/postCreate/PostCreateImages";
import PostCreateNavigation from "@/features/postCreate/PostCreateNavigation";

const PostCreatePage = () => {
  return (
    <div>
      <PostCreateNavigation />
      <PostCreateContent />
      <PostCreateImages
        images={[{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }, { id: "5" }, { id: "6" }]}
      />
    </div>
  );
};

export default PostCreatePage;
