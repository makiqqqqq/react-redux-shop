import { AvatarSliderProps } from "@/components/Slider/types.ts";
import Button from "@/components/Button";
import { FC, useEffect, useState } from "react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi2";

const Slider: FC<AvatarSliderProps> = ({ slidesPerView = 1, slides, setSelectedImage }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const visibleSlides = slides?.slice(currentSlideIndex, currentSlideIndex + slidesPerView);

  const handlePrev = () => {
    setCurrentSlideIndex((prevIndex: number) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentSlideIndex((prevIndex: number) => (prevIndex + slidesPerView) % slides.length);
  };

  useEffect(() => {
    const currentSlideSrc = slides.at(currentSlideIndex)?.src;
    if (setSelectedImage && currentSlideSrc) {
      setSelectedImage(currentSlideSrc);
    }
  }, [currentSlideIndex]);

  return (
    <div className="w-full flex justify-center gap-2 items-center">
      <Button
        pill
        onClick={handlePrev}
        className="bg-transparent text-primaryText w-1 hover:bg-transparent focus:ring-offset-[-5px] focus-visible:ring-offset-[-5px]"
      >
        <HiOutlineArrowLeft className="h-6 w-6" />
      </Button>
      {visibleSlides?.map((slide) => (
        <img width={100} height={100} src={slide.src} alt="avatar" key={slide.src} />
      ))}
      <Button
        pill
        onClick={handleNext}
        className="bg-transparent text-primaryText w-1 hover:bg-transparent focus:ring-offset-[-5px] focus-visible:ring-offset-[-5px]"
      >
        <HiOutlineArrowRight className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default Slider;
