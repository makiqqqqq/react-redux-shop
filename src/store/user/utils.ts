import { ENDPOINTS, METHODS, QueryPath } from "@/utils/types.ts";

export const userQueryParams: QueryPath = {
  user: {
    register: {
      url: ENDPOINTS.REGISTER,
      method: METHODS.GET,
    },
    login: {
      url: ENDPOINTS.LOGIN,
      method: METHODS.POST,
    },
  },
};
