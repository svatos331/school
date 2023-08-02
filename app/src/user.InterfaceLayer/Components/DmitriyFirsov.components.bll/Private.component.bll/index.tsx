import React from "react";
import { useAppSelector } from "business.InterfaceLayer/store/services/hooks/redux";
import { useLocation, Navigate, Outlet } from "react-router-dom";

const Private = () => {
  const isAuth = useAppSelector(state => state.auth.credentials);
  const location = useLocation();

  if(!isAuth) {
    return <Navigate to="/dmitriyFirsov/auth" state={{ from: location }} replace />;
  }

	return <Outlet />;
};

export default Private;
