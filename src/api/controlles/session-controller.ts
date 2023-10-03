import { LoginRequestParams } from "@/api/models/session-model.ts";
import { client } from "@/core/api.ts";

export const loginApi = async ({ password, email }: LoginRequestParams) => {
  return await client.post("/auth/login", {
    email,
    password,
  });
};
