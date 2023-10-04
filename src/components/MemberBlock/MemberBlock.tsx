import { FC } from "react";
import { MemberBlockProps } from "./types.ts";
const MemberBlock: FC<MemberBlockProps> = ({ isRegister, redirectTo }) => {
  return (
    <div>
      <p className="text-secondaryText">
        {isRegister ? "Already a member?" : "Not a Member?"}
        <span
          onClick={redirectTo}
          className="cursor-pointer pl-1 text-primaryText hover:text-secondaryText font-medium"
        >
          {isRegister ? " Sign in" : " Sign up"}
        </span>
      </p>
    </div>
  );
};

export default MemberBlock;
