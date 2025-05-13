export interface IKakaoLoginRequest {
  code: string;
  redirectUri: string;
}
export interface IKakaoLoginResponse {
  accessToken: string;
  tokenType: string;
  email: string;
  nickname: string;
  newUser: boolean;
}

export type TGender = "MALE" | "FEMALE";
export type TAgeRange =
  | "TEENS"
  | "TWENTIES"
  | "THIRTIES"
  | "FORTIES"
  | "FIFTIES"
  | "SIXTIES_PLUS";
export type TInterests =
  | "WEIGHT_MANAGEMENT"
  | "DIET_MANAGEMENT"
  | "EXERCISE"
  | "HEALTH_INFO"
  | "MEDICATION"
  | "COMMUNITY";

export interface IOnboardInfo {
  gender: TGender;
  ageRange: TAgeRange;
  interests: TInterests[];
}
