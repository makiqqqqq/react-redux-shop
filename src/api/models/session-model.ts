export type LoginRequestParams = {
  email: string;
  password: string;
};

export type LoginResponseParams = {
  access_token: string;
  refresh_token: string;
};

export type RegisterRequestParams = {
  name: string;
  avatar: string;
} & LoginRequestParams;
