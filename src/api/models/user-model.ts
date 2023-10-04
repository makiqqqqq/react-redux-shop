export type GetUserRequestParams = {
  accessToken: string;
};

export type GetUserResponseParams = {
  id: number;
  email: string;
  password: string;
  name: string;
  role: string;
  avatar: string;
};
