export enum METHODS {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

export enum ENDPOINTS {
  LOGIN = "/auth/login",
  REGISTER = "/users/",
  GET_USER = "/auth/profile",
}

export enum ACTION_NAME {
  user = "user",
}

export enum ACTION_TYPE {
  register = "register",
  login = "login",
  get = "get",
}

export type QueryPath = Record<ACTION_NAME, Record<ACTION_TYPE, { url: ENDPOINTS; method: METHODS }>>;
