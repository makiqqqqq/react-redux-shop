import Input from "@/components/Input";
import { Controller, FieldValues, Path } from "react-hook-form";
import { InputControllerProps } from "./types.ts";

const InputController = <T extends FieldValues>({ name, control, ...other }: InputControllerProps<T>) => {
  return (
    <Controller
      name={name as unknown as Path<T>}
      control={control}
      render={({ field, fieldState }) => {
        return (
          <>
            <Input label={name} {...field} {...other} />
            {fieldState.error?.ref?.name === name && (
              <span className="text-red-600 text-sm">{fieldState.error.message}</span>
            )}
          </>
        );
      }}
    />
  );
};

export default InputController;
