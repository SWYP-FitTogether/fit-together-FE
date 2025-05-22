export interface IBoardPostType {
  id: number;
  title: string;
  description: string;
  category: string;
  time: string;
  likeCount: number;
  commentCount: number;
  highfiveCount: number;
  thumbnailUrl: string;
}

export type TCategory =
  | "ALL"
  | "CHALLENGE"
  | "REVIEW"
  | "INFORMATION"
  | "QNA"
  | "DISCUSSION";

export interface IPostAuthor {
  id: number;
  nickname: string;
  email: string;
  profileImageUrl: string;
  level: number;
}

export interface IPost {
  id: number;
  title: string;
  contentSummary: string;
  category: TCategory;
  categoryDisplayName: string;
  createdAt: string;
  updatedAt: string | null;
  likeCount: number;
  viewCount: number;
  commentCount: number;
  highfiveCount: number;
  thumbnailUrl: string;
  author: IPostAuthor;
}

export interface IPostResponse {
  content: IPost[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  first: boolean;
  last: boolean;
}

export interface IPostDetailResponse {
  id: number;
  title: string;
  content: string;
  category: TCategory;
  categoryDisplayName: string;
  createdAt: string;
  updatedAt: string;
  likeCount: number;
  viewCount: number;
  commentCount: number;
  author: IPostAuthor;
  imageUrls: string[];
  isBookmarked: boolean;
}

export interface IComment {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string | null;
  isDeleted: boolean;
  authorId: number;
  authorEmail: string;
  authorNickname: string;
  authorProfileImageUrl: string;
  authorLevel: number;
  postId: number;
  postTitle: string;
  parentId: number | null;
  replyCount: number;
  replies: IComment[];
}

export interface ICommentListResponse {
  content: IComment[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  first: boolean;
  last: boolean;
}

export interface IAddCommentResponse {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string | null;
  authorId: number;
  authorNickname: string;
  authorProfileImageUrl: string;
  authorLevel: number;
  parentId: number | null;
  replyCount: number;
  replies: IComment[];
  deleted: boolean;
}

export interface IPostPostRequest {
  title: string;
  content: string;
  category: TCategory;
  images: File[];
}

export interface IPostHifiveResponse {
  success: boolean;
  remainingCount: number;
}
