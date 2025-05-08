"use client";

import { ICarouselImgs } from "@/types/type";
import Indicator from "./Indicator";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Image from "next/image";

interface ICarouselImg {
  images: ICarouselImgs[];
  onImageClick?: (image: ICarouselImgs) => void;
}

const CarouselImg = ({ images, onImageClick }: ICarouselImg) => {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {images.map((item, index) => (
          <CarouselItem
            key={item.id}
            onClick={() => onImageClick?.(item)}
            className="relative h-[335px] w-[335px] cursor-pointer rounded-base"
          >
            <Image
              src={item.src || `/blankImg.png`}
              alt={item.alt || "Carousel 이미지"}
              className="object-cover"
              fill
            />
            <Indicator
              startNum={index + 1}
              endNum={images.length}
              type="BG"
              className="absolute top-3 right-3"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default CarouselImg;
