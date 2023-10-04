import { FC } from "react";
import { AvatarBlockProps } from "./types.ts";
import profileImage from "@/assets/profile.jpg";
const AvatarBlock: FC<AvatarBlockProps> = ({ email, avatar, name }) => {
  return (
    <div className="flex items-start flex-col p-2 gap-2">
      <img className="h-16 w-16 rounded-full" src={avatar ?? profileImage} alt="profileImage" />
      <div>
        <div>
          <p className="text-xl">{name}</p>
        </div>
        <div className="text-base text-gray-500">{email}</div>
      </div>
    </div>
  );
};

export default AvatarBlock;
