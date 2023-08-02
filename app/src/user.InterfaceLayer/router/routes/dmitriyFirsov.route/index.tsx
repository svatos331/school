import React, { Suspense, lazy } from "react";
import { RouteObject } from "react-router-dom";
import AuthLayout from "user.InterfaceLayer/Layouts/DmitriyFirsov.layouts/Auth.layout";
import Private from "user.InterfaceLayer/Components/DmitriyFirsov.components.bll/Private.component.bll";

import RoutesPaths from "../../routesPaths";
import Error from "../../../Components/general.components/Error";
import MainLayout from "../../../Layouts/DmitriyFirsov.layouts/Main.layout";
import Loader from "../../../Components/general.components/Loader";
import dmitriyFirsovRoutesPaths from "./dmitriyFirsov.routesPaths";

const HomePage = lazy(
  () => import("../../../Pages/DmitriyFirsov.pages/Home.page")
);

const CatalogPage = lazy(
  () => import("../../../Pages/DmitriyFirsov.pages/Catalog.page")
);

const ProductPage = lazy(
  () => import("../../../Pages/DmitriyFirsov.pages/Product.page")
);

const ProfilePage = lazy(
  () => import("../../../Pages/DmitriyFirsov.pages/Profile.page")
);
const AuthPage = lazy(
  () => import("../../../Pages/DmitriyFirsov.pages/Auth.page")
);

const dmitriyFirsovRoutes: RouteObject[] = [
  {
    path: RoutesPaths.DMITRIY_FIRSOV,
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={ <Loader /> }>
            <HomePage />
          </Suspense>
        )
      },
      {
        path: dmitriyFirsovRoutesPaths.CATALOG,
        element: (
          <Suspense fallback={<Loader />}>
            <CatalogPage />
          </Suspense>
        )
      },
      {
        path: dmitriyFirsovRoutesPaths.PRODUCT,
        element: (
          <Suspense fallback={<Loader />}>
            <ProductPage />
          </Suspense>
        )
      },
      {
        element: <Private />,
        children: [
          {
            index: true,
            path: dmitriyFirsovRoutesPaths.PROFILE,
            element: (
              <Suspense fallback={<Loader />}>
                <ProfilePage />
              </Suspense>
            )
          },
        ]
      }
    ]
  },
  {
    path: `${ RoutesPaths.DMITRIY_FIRSOV }/auth`,
    element: <AuthLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={ <Loader /> }>
            <AuthPage />
          </Suspense>
        )
      }
    ]
  }
];

export default dmitriyFirsovRoutes;