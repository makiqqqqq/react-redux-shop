import { FieldValues, UseFormReturn } from "react-hook-form";

export type AuthWrapperProps<T extends FieldValues> = {
  handleSubmit: () => void;
  isLoading: boolean;
  isRegister?: boolean;
  setSelectedImage?: () => void;
  form: UseFormReturn<T>;
};
