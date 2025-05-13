import Footer from "@/components/Footer";
import { ScrollArea } from "@/components/ui/scroll-area";
import PostDetail from "@/features/postDetail/PostDetail";
import PostDetailNavigation from "@/features/postDetail/PostDetailNavigation";

interface IPostDetailPageProps {
  params: Promise<{ postId: string }>;
}

const PostDetailPage = async ({ params }: IPostDetailPageProps) => {
  const postId = (await params).postId;
  return (
    <div>
      <PostDetailNavigation />

      <ScrollArea className="flex h-[calc(100dvh-113px)] flex-col gap-2">
        <PostDetail postId={postId} />
        <Footer />
      </ScrollArea>
    </div>
  );
};

export default PostDetailPage;
