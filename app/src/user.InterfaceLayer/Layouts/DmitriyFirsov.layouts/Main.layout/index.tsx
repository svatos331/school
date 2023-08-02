import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "user.InterfaceLayer/Libraries/DmitriyFirsov.library/Widgets/header";
import PageContent from "user.InterfaceLayer/Libraries/DmitriyFirsov.library/UI_KIT/Atoms/PageContent";


const MainLayout: FC = () => (

  <React.Fragment>
    <Header />
    <PageContent>
      <Outlet />
    </PageContent>
  </React.Fragment>
);

export default MainLayout;
