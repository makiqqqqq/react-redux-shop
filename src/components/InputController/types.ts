import { TextInputProps } from "flowbite-react";
import { Control, FieldValues } from "react-hook-form";

export type InputControllerProps<T extends FieldValues> = TextInputProps & {
  name: string;
  control: Control<T, object>;
};
