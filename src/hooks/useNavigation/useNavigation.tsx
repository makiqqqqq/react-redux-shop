import { ROUTES } from "@/utils/routes.tsx";
import { useCallback } from "react";
import { useNavigate } from "react-router";

export const useNavigation = () => {
  const navigate = useNavigate();

  const navigateTo = useCallback((path: ROUTES) => navigate(path), []);

  const back = useCallback(() => navigate(-1), []);

  return {
    navigateTo,
    back,
  };
};
