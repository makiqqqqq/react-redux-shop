import { AvatarSliderProps } from "@/components/AuthAvatarBlock/types.ts";
import { avatarSlides } from "@/components/AuthAvatarBlock/utils.ts";
import Slider from "@/components/Slider/Slider.tsx";
import { FC } from "react";

const AuthAvatarBlock: FC<AvatarSliderProps> = ({ setSelectedImage }) => {
  return (
    <div className="flex items-center flex-col gap-2">
      <Slider slides={avatarSlides} setSelectedImage={setSelectedImage} />
      <p className="text-base font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center">
        Choose your avatar
      </p>
    </div>
  );
};

export default AuthAvatarBlock;
