import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const useValidate = () => {
  const RegisterSchema = z.object({
    name: z.string().min(2).max(30),
    email: z.string().email().min(5).max(100),
    password: z.string().min(3).max(20),
  });

  const zodResolverRegister = () => zodResolver(RegisterSchema);

  return {
    RegisterSchema,
    zodResolverRegister,
  };
};
