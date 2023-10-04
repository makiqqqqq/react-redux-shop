import { Dispatch, SetStateAction } from "react";

export type SliderItem = {
  src: string;
};

export type AvatarSliderProps = {
  slidesPerView?: number;
  setSelectedImage?: Dispatch<SetStateAction<string>>;
  slides: SliderItem[];
};
