import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const useValidate = () => {
  const LoginSchema = z.object({
    email: z.string().email().min(4).max(50),
    password: z.string().min(3).max(20),
  });

  const zodResolverLogin = () => zodResolver(LoginSchema);

  return {
    LoginSchema,
    zodResolverLogin,
  };
};
