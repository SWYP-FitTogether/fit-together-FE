export interface IGetProfileResponse {
  id: number;
  nickname: string;
  profileImageUrl: string;
  level: number;
  points: number;
  pointsToNextLevel: number;
  totalPointsForNextLevel: number;
}

export interface PointHistoryItem {
  id: number;
  points: number;
  actionType: string;
  actionTypeDisplayName: string;
  timestamp: string;
  positive: boolean;
}

export interface IGetPointHistoryResponse {
  content: PointHistoryItem[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  first: boolean;
  last: boolean;
}
