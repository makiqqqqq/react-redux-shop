import { useNavigation } from "@/hooks/useNavigation/useNavigation.tsx";
import { useApi } from "@/pages/Register/hooks/useApi.ts";
import { useValidate } from "@/pages/Register/hooks/useValidate.ts";
import { RegisterForm } from "@/pages/Register/types.ts";
import { ROUTES } from "@/utils/routes.tsx";
import { useForm } from "react-hook-form";
import { z } from "zod";

const defaultValues: RegisterForm = {
  name: "",
  email: "",
  password: "",
};

export const useRegisterForm = () => {
  const { RegisterSchema, zodResolverRegister } = useValidate();
  const form = useForm<RegisterSchemaType>({ defaultValues, resolver: zodResolverRegister() });
  const { registerMutation, registerMutationParams } = useApi();
  const { navigateTo } = useNavigation();

  type RegisterSchemaType = z.infer<typeof RegisterSchema>;

  const onSubmit = async (data: RegisterForm) => {
    const result = await registerMutation(data);
    if ("error" in result) {
      alert("error");
    } else {
      navigateTo(ROUTES.LOGIN);
    }
  };

  console.log(form.formState.errors);

  return {
    form,
    handleSubmit: form.handleSubmit(onSubmit),
    isLoading: registerMutationParams.isLoading,
  };
};
