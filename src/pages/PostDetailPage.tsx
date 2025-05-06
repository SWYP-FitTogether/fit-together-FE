import { ScrollArea } from "@/components/ui/scroll-area";
import PostDetailActions from "@/features/postDetail/PostDetailActions";
import PostDetailComments from "@/features/postDetail/PostDetailComments";
import PostDetailContent from "@/features/postDetail/PostDetailContent";
import PostDetailHeader from "@/features/postDetail/PostDetailHeader";
import PostDetailNavigation from "@/features/postDetail/PostDetailNavigation";

const PostDetailPage = () => {
  // const postId = useParams<ParamsType>().postId;

  return (
    <div>
      <PostDetailNavigation />

      <ScrollArea className="flex flex-col gap-2 h-[calc(100dvh-113px)]">
        <div className="flex flex-col gap-5 p-5">
          <PostDetailHeader />
          <PostDetailContent />
        </div>

        <div className="flex flex-col gap-2">
          <PostDetailActions />

          <PostDetailComments />
        </div>
      </ScrollArea>
    </div>
  );
};

export default PostDetailPage;
