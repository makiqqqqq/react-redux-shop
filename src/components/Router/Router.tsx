import { createRouter, ProtectedRouteOutlet } from "@/components/Router/utils.tsx";
import UserLayouts from "@/layouts/UserLayouts";
import { ProtectedRoutes, PublicRoutes } from "@/utils/routes.tsx";
import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route
        element={
          <UserLayouts>
            <ProtectedRouteOutlet isAuth={true} />
          </UserLayouts>
        }
      >
        {ProtectedRoutes.map(createRouter)}
      </Route>
      {PublicRoutes.map(createRouter)}
    </Routes>
  );
};

export default Router;
