import Comment from "@/components/Comment";
import ProfileHeader from "@/components/ProfileHeader";
import { IComment } from "@/types/boardType";

interface ICommentItemProps {
  comment: IComment;
  authorId: number;
}

export function CommentItem({ comment, authorId }: ICommentItemProps) {
  return (
    <div>
      <Comment
        isReply={comment.parentId !== null}
        comment={comment.content}
        profileHeader={
          <ProfileHeader
            isMy={false}
            isOwner={authorId === comment.authorId}
            imgSrc={comment.authorProfileImageUrl}
            name={comment.authorNickname}
            level={comment.authorLevel}
            date={comment.createdAt}
          />
        }
      />

      {comment.replies && comment.replies.length > 0 && (
        <div>
          {comment.replies.map((reply) => (
            <CommentItem authorId={authorId} key={reply.id} comment={reply} />
          ))}
        </div>
      )}
    </div>
  );
}
