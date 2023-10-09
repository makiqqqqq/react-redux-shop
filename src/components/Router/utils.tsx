import { ProtectedRouteProps } from "@/components/Router/types.ts";
import { RootState } from "@/store";
import { ROUTES } from "@/utils/routes.tsx";
import { FC, Suspense } from "react";
import { useSelector } from "react-redux";
import { Route, Outlet, Navigate, RouteProps } from "react-router-dom";

export const ProtectedRouteOutlet: FC<ProtectedRouteProps> = ({ redirectTo = ROUTES.LOGIN }) => {
  const isAuth = useSelector((state: RootState) => state.user.accessToken);

  return isAuth ? <Outlet /> : <Navigate to={redirectTo} />;
};

export const PublicRouteOutlet: FC<ProtectedRouteProps> = ({ redirectTo = ROUTES.MAIN }) => {
  const isAuth = useSelector((state: RootState) => state.user.accessToken);

  return isAuth ? <Navigate to={redirectTo} /> : <Outlet />;
};

export const createRouter = ({ element, path, ...other }: RouteProps) => (
  <Route {...other} key={path} path={path} element={<Suspense fallback={<div>Loading...</div>}>{element}</Suspense>} />
);
