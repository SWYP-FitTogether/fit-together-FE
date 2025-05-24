"use client";

import { ICarouselImgs } from "@/types/type";
import Indicator from "./Indicator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";

interface ICarouselImg {
  images: ICarouselImgs[];
  onImageClick?: (image: ICarouselImgs) => void;
}

const ImageZoomCarousel = ({ images, onImageClick }: ICarouselImg) => {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {images.map((item, index) => (
          <CarouselItem
            key={item.id}
            onClick={() => onImageClick?.(item)}
            className="relative flex w-[375px] items-center"
          >
            <Image
              src={item.src || `/blankImg.png`}
              alt={item.alt || "Carousel 이미지"}
              width={375}
              height={0}
              className="h-auto w-full object-cover"
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
      <CarouselPrevious className={"left-2"} />
      <CarouselNext className="right-2" />
    </Carousel>
  );
};

export default ImageZoomCarousel;
