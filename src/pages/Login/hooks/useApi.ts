import { useLoginMutation } from "@/store/user/userApi.ts";

export const useApi = () => {
  const [loginMutation, { ...loginMutationParams }] = useLoginMutation();

  return {
    loginMutation,
    loginMutationParams,
  };
};
