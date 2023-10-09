import { createRouter, ProtectedRouteOutlet, PublicRouteOutlet } from "@/components/Router/utils.tsx";
import UserLayouts from "@/layouts/UserLayouts";
import { ProtectedRoutes, PublicRoutes } from "@/utils/routes.tsx";
import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route
        element={
          <UserLayouts>
            <ProtectedRouteOutlet />
          </UserLayouts>
        }
      >
        {ProtectedRoutes.map(createRouter)}
      </Route>
      <Route element={<PublicRouteOutlet />}>{PublicRoutes.map(createRouter)}</Route>
    </Routes>
  );
};

export default Router;
