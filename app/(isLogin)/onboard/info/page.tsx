"use client";

import Button from "@/components/Button";
import Pagination from "@/components/Pagination";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const INFO = [
  {
    image: "/info1.png",
    header: ["다양한 사람들과", "건강을 주제로", "자유롭게 소통하세요!"],
  },
  {
    image: "/info2.png",
    header: ["소통하고 인증하며", "얻은 경험치로", "LEVEL UP!"],
  },
  {
    image: "/info3.png",
    header: ["건강은", "'관리'가 아닌 '즐거움'", "핏 투게더에서 누리세요!"],
  },
];

const OnboardInfoPage = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <div
      className="flex h-dvh flex-col items-center justify-between p-5"
      style={{
        backgroundImage: "linear-gradient(to bottom, #FBFFDE, #FFFFFF)",
      }}
    >
      <Carousel className="w-full" setApi={setApi}>
        <CarouselContent>
          {INFO.map((info, index) => (
            <CarouselItem key={index}>
              <div className="flex flex-col items-center justify-center gap-[5px]">
                <div className="w-full text-center text-[28px] font-bold">
                  {info.header.map((text) => (
                    <p key={text}>{text}</p>
                  ))}
                </div>
                <Image src={info.image} alt="" width={335} height={420} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>

      <div className="flex w-full flex-col items-center justify-center gap-4">
        <Pagination total={count} current={current} />
        <Button
          variant="primary"
          onClick={() => router.push("/onboard/add")}
          size="L"
          disabled={count !== current}
        >
          이용 시작하기
        </Button>
      </div>
    </div>
  );
};

export default OnboardInfoPage;
