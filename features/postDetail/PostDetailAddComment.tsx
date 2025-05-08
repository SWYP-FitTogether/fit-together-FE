import Button from "@/components/Button";
import TextArea from "@/components/TextArea";

const PostDetailAddComment = () => {
  return (
    <div className="flex flex-col gap-2">
      <TextArea placeholder="댓글을 입력해 주세요." />
      <Button size="M" variant="secondary">
        댓글 등록하기
      </Button>
    </div>
  );
};

export default PostDetailAddComment;
