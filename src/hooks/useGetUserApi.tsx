import { useGetUser } from "@/hooks/useGetUser.tsx";
import { AppDispatch } from "@/store";
import { useGetUsersQuery } from "@/store/user/userApi.ts";
import { userActions } from "@/store/user/userSlice.ts";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
export const useGetUserApi = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { user, accessToken } = useGetUser();
  const { setUser } = userActions;

  const userQuery = useGetUsersQuery(
    {
      accessToken: accessToken ?? "",
    },
    {
      skip: !accessToken,
    },
  );
  const { data, isLoading } = userQuery;

  useEffect(() => {
    if (data) {
      dispatch(
        setUser({
          user: data,
        }),
      );
    }
  }, [data]);

  return {
    user,
    isLoading,
  };
};
