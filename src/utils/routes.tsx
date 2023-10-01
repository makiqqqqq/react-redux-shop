import { lazy } from "react";
import { RouteProps } from "react-router-dom";

export const ROUTES = {
  MAIN: "/",
  ABOUT: "/about",
  LOGIN: "/login",
  CART: "/cart",
  MENU: "/menu",
};

const Main = lazy(() => import("@/pages/Main"));
const About = lazy(() => import("@/pages/About"));
const Login = lazy(() => import("@/pages/Login"));
const Cart = lazy(() => import("@/pages/Cart"));
const Menu = lazy(() => import("@/pages/Menu"));
const Product = lazy(() => import("@/pages/Product"));
const NotFound = lazy(() => import("@/pages/NotFound"));

export const ProtectedRoutes: RouteProps[] = [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/product/:id",
    element: <Product />,
  },
];

export const PublicRoutes: RouteProps[] = [
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];
