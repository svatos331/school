import React from "react";
import { Outlet } from "react-router-dom";
import PageContent from "user.InterfaceLayer/Libraries/DmitriyFirsov.library/UI_KIT/Atoms/PageContent";

const AuthLayout = () => {
	return (
    <PageContent>
      <Outlet />
    </PageContent>
  );
};

export default AuthLayout;
