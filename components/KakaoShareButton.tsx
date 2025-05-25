"use client";

import { useEffect } from "react";
import SendIcon from "./icons/SendIcon";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Kakao: any;
  }
}

interface IKakaoShareButtonProps {
  imgUrl: string;
  title: string;
  description: string;
}

export default function KakaoShareButton({
  title,
  description,
  imgUrl,
}: IKakaoShareButtonProps) {
  useEffect(() => {
    if (!window.Kakao) {
      const script = document.createElement("script");
      script.src = "https://developers.kakao.com/sdk/js/kakao.min.js";
      script.async = true;
      script.onload = () => {
        if (window.Kakao && !window.Kakao.isInitialized()) {
          window.Kakao.init(`${process.env.NEXT_PUBLIC_KAKAO_APP_KEY}`);
        }
      };
      document.head.appendChild(script);
    } else if (!window.Kakao.isInitialized()) {
      window.Kakao.init(`${process.env.NEXT_PUBLIC_KAKAO_APP_KEY}`);
    }
  }, []);

  const handleKakaoShare = () => {
    if (!window.Kakao) return;

    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title,
        description,
        imageUrl: imgUrl || "/blankImg.png",
        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href,
        },
      },
      buttons: [
        {
          title: "웹에서 보기",
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
      ],
    });
  };

  return (
    <button
      onClick={handleKakaoShare}
      className="flex h-8 w-8 cursor-pointer items-center justify-center hover:opacity-80 active:opacity-80"
    >
      <SendIcon className="h-6 w-6 text-gray-500" />
    </button>
  );
}
