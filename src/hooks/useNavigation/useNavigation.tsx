import { useCallback } from "react";
import { useNavigate } from "react-router";

export const useNavigation = () => {
  const navigate = useNavigate();

  const navigateTo = useCallback((path: string) => navigate(path), []);

  const back = useCallback(() => navigate(-1), []);

  return {
    navigateTo,
    back,
  };
};
