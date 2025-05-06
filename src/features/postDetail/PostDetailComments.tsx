import Comment from "@/components/Comment";
import ProfileHeader from "@/components/ProfileHeader";
import PostDetailAddComment from "./PostDetailAddComment";

const COMMENTS = [
  { id: 1, content: "정말 좋은 글이에요!", isReply: false },
  { id: 2, content: "많은 도움이 됐습니다, 감사합니다.", isReply: false },
  { id: 3, content: "질문이 있는데요, 이 부분 좀 더 설명 가능할까요?", isReply: false },
  { id: 4, content: "저도 궁금했어요!", isReply: true },
  { id: 5, content: "동의합니다. 저도 그렇게 생각해요.", isReply: false },
  { id: 6, content: "맞아요. 특히 저 부분이 인상 깊었어요.", isReply: true },
  { id: 7, content: "다음 글도 기대할게요!", isReply: false }
];

const PostDetailComments = () => {
  return (
    <div className="flex flex-col gap-3 p-5">
      {COMMENTS.map((comment) => (
        <Comment
          key={comment.id}
          isReply={comment.isReply}
          comment={comment.content}
          profileHeader={<ProfileHeader name="닉네임" level={0} date="MM월 DD일" />}
        />
      ))}

      <PostDetailAddComment />
    </div>
  );
};

export default PostDetailComments;
