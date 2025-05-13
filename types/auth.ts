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
