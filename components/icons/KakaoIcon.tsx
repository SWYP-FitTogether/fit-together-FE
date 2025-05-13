import { cn } from "@/lib/utils";
import React from "react";

const KakaoIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cn("text-gray-600", className)}
      width="29"
      height="28"
      viewBox="0 0 29 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_725_6355)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.2408 0.275635C9.03264 0.275635 4.39124 3.87851 4.39124 8.32408C4.39124 11.0877 6.18663 13.5254 8.92032 14.9746L7.77005 19.1967C7.6681 19.5705 8.09319 19.8677 8.4192 19.6511L13.4615 16.3074C13.8866 16.3483 14.3192 16.3725 14.2408 16.3725C20.4853 16.3725 24.6088 12.7685 24.6088 8.32408C24.6088 3.87851 20.4853 0.275635 14.2408 0.275635Z"
          fill="black"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_725_6355"
          x="0.391235"
          y="0.275635"
          width="28.2177"
          height="27.4487"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_725_6355"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_725_6355"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default KakaoIcon;
