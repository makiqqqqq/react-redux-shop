import { capitalizeFirstLetter } from "@/helpers";
import { FC } from "react";
import { InputProps } from "./types.ts";
import { Label, TextInput } from "flowbite-react";
import { clsx } from "clsx";

const Input: FC<InputProps> = ({ label, className, ...props }) => {
  return (
    <div>
      {!!label && (
        <Label
          htmlFor={props.name}
          value={capitalizeFirstLetter(label)}
          className="block mb-2 text-sm font-medium text-gray-900"
        />
      )}
      <TextInput
        className={clsx(
          "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full",
          className,
        )}
        {...props}
      />
    </div>
  );
};

export default Input;
