import { useRegisterMutation } from "@/store/user/userApi.ts";

export const useApi = () => {
  const [registerMutation, { ...registerMutationParams }] = useRegisterMutation();

  return {
    registerMutation,
    registerMutationParams,
  };
};
