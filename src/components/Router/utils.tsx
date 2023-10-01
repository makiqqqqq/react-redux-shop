import { ProtectedRouteProps } from "@/components/Router/types.ts";
import { ROUTES } from "@/utils/routes.tsx";
import { FC, Suspense } from "react";
import { Route, Outlet, Navigate, RouteProps } from "react-router-dom";

export const ProtectedRouteOutlet: FC<ProtectedRouteProps> = ({ isAuth, redirectTo = ROUTES.LOGIN }) => {
  return isAuth ? <Outlet /> : <Navigate to={redirectTo} />;
};

export const createRouter = ({ element, path, ...other }: RouteProps) => (
  <Route {...other} key={path} path={path} element={<Suspense fallback={<div>Loading...</div>}>{element}</Suspense>} />
);
