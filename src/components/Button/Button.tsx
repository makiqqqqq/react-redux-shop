import { FC } from "react";
import { clsx } from "clsx";
import { ButtonProps } from "./types.ts";
import { Button as FlowbiteButton } from "flowbite-react";

const Button: FC<ButtonProps> = ({ children, className, ...other }) => {
  return (
    <FlowbiteButton
      className={clsx(
        "w-full text-white bg-black hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center",
        className,
      )}
      {...other}
    >
      {children}
    </FlowbiteButton>
  );
};

export default Button;
