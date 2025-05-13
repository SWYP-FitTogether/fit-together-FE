export interface IBoardPostType {
  title: string;
  description: string;
  category: string;
  time: string;
  likeCount: number;
  commentCount: number;
  highfiveCount: number;
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
