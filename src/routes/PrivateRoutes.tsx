import { lazy } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { checkPathMatch, paths } from "./helpers";

const AccountSettingsPage = lazy(() => import("pages/AccountSettingsPage"));

const PrivateRoutes = () => {
  const location = useLocation();
  const isMatch = checkPathMatch(location.pathname, paths);

  return (
    <Routes>
      <Route path={paths.home} element={<AccountSettingsPage />} />
      <Route
        path="*"
        element={!isMatch ? <Navigate to={paths.home} /> : null}
      />
    </Routes>
  );
};

export default PrivateRoutes;
