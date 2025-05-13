"use client";

import { useKakaoLogin } from "@/hooks/useAuth";
import { useEffect } from "react";

export default function KakaoCallback() {
  const { mutate, isPending } = useKakaoLogin();
  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code") ?? "";
    const redirectUri = `${process.env.NEXT_PUBLIC_BASE_URL}/login/oauth2/code/kakao`;
    mutate({ code, redirectUri });
  }, [mutate]);

  if (isPending) return <p>카카오 로그인 중입니다...</p>;
}
