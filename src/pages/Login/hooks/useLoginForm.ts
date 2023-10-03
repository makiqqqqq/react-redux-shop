import { useNavigation } from "@/hooks/useNavigation/useNavigation.tsx";
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
  const { LoginSchema, zodResolverLogin } = useValidate();
  const form = useForm<LoginSchemaType>({ defaultValues, resolver: zodResolverLogin() });
  const dispatch = useDispatch<AppDispatch>();
  const { loginMutation, loginMutationParams } = useApi();
  const { addTokens } = userActions;
  const { navigateTo } = useNavigation();

  type LoginSchemaType = z.infer<typeof LoginSchema>;

  const onSubmit = async (data: LoginForm) => {
    const result = await loginMutation(data);
    if ("error" in result) {
      alert("error");
    } else {
      dispatch(
        addTokens({
          accessToken: loginMutationParams.data.accessToken,
          refreshToken: loginMutationParams.data.refreshToken,
        }),
      );
      navigateTo(ROUTES.MAIN);
    }
  };

  return {
    form,
    handleSubmit: form.handleSubmit(onSubmit),
    isLoading: loginMutationParams.isLoading,
  };
};
