import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "k.kakaocdn.net",
      "img1.kakaocdn.net",
      "mybucket-fit.s3.ap-northeast-2.amazonaws.com",
    ],
  },
};

export default nextConfig;
