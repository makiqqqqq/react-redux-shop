import { RootState } from "@/store";
import { useSelector } from "react-redux";

export const useGetUser = () => {
  const { user, accessToken } = useSelector((s: RootState) => s.user);

  return {
    user,
    accessToken,
  };
};
