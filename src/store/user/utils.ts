import { ENDPOINTS, METHODS, QueryPath } from "@/utils/types.ts";

export const userQueryParams: QueryPath = {
  user: {
    register: {
      url: ENDPOINTS.REGISTER,
      method: METHODS.POST,
    },
    login: {
      url: ENDPOINTS.LOGIN,
      method: METHODS.POST,
    },
    get: {
      url: ENDPOINTS.GET_USER,
      method: METHODS.GET,
    },
  },
};
