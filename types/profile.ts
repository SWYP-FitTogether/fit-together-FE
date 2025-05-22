import { IOnboardInfo, TAgeRange, TGender, TInterests } from "./auth";
import { IComment, IPost } from "./boardType";

export interface IGetProfileResponse {
  id: number;
  nickname: string;
  profileImageUrl: string;
  level: number;
  points: number;
  pointsToNextLevel: number;
  totalPointsForNextLevel: number;
  totalPosts: number;
  totalComments: number;
  totalLikesReceived: number;
}

export interface PointHistoryItem {
  id: number;
  points: number;
  actionType: string;
  actionTypeDisplayName: string;
  timestamp: string;
  positive: boolean;
}

export interface IPageInfo {
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  first: boolean;
  last: boolean;
}

export interface IGetPointHistoryResponse extends IPageInfo {
  content: PointHistoryItem[];
}

export interface IGetPostsHistoryResponse extends IPageInfo {
  content: IPost[];
}

export interface IGetCommentsHistoryResponse extends IPageInfo {
  content: IComment[];
}

export interface IGetBookmarksResponse extends IPageInfo {
  content: IPost[];
}

export interface IEditProfileInfoRequest extends IOnboardInfo {
  nickname: string;
}

export interface IGetOnboardingInfoResponse {
  gender: TGender;
  ageRange: TAgeRange;
  interests: TInterests[];
}
