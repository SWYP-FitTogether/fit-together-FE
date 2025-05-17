export interface IGetProfileResponse {
  id: number;
  nickname: string;
  profileImageUrl: string;
  level: number;
  points: number;
  pointsToNextLevel: number;
  totalPointsForNextLevel: number;
}
