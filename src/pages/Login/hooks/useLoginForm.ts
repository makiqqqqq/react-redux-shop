import { useNavigation } from "@/hooks/useNavigation.tsx";
import { useApi } from "@/pages/Login/hooks/useApi.ts";
import { useValidate } from "@/pages/Login/hooks/useValidate.ts";
import { LoginForm } from "@/pages/Login/types.ts";
import { AppDispatch } from "@/store";
import { userActions } from "@/store/user/userSlice.ts";
import { ROUTES } from "@/utils/routes.tsx";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { z } from "zod";

const defaultValues: LoginForm = {
  email: "john@mail.com",
  password: "changeme",
};

export const useLoginForm = () => {
  type LoginSchemaType = z.infer<typeof LoginSchema>;

  const { LoginSchema, zodResolverLogin } = useValidate();
  const form = useForm<LoginSchemaType>({ defaultValues, resolver: zodResolverLogin() });
  const dispatch = useDispatch<AppDispatch>();
  const { loginMutation, loginMutationParams } = useApi();
  const { addTokens } = userActions;
  const { navigateTo } = useNavigation();

  const onSubmit = async (data: LoginSchemaType) => {
    try {
      const result = await loginMutation(data);
      if ("data" in result) {
        dispatch(
          addTokens({
            accessToken: result.data.access_token,
            refreshToken: result.data.refresh_token,
          }),
        );
        navigateTo(ROUTES.MAIN);
      } else if ("error" in result) {
        console.error("Error:", result.error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return {
    form,
    handleSubmit: form.handleSubmit(onSubmit),
    isLoading: loginMutationParams.isLoading,
  };
};
