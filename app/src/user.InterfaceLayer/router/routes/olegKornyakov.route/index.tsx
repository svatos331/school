import React, { lazy, Suspense } from "react";
import { RouteObject } from "react-router-dom";

import RoutesPaths from "../../routesPaths";
import Error from "../../../Components/general.components/Error";
import MainLayout from "../../../Layouts/OlegKornyakov.layouts/Main.layout";
import olegKornyakovRoutesPaths from "./olegKornyakov.routesPaths";
import Loader from "../../../Components/general.components/Loader";
import LuxeBouquetsPage from "../../../Pages/OlegKornyakov.pages/LuxeBouquets.page";

const LastPage = lazy(
	() => import("../../../Pages/OlegKornyakov.pages/Last.page")
);

const MainPage = lazy(
	() => import("../../../Pages/OlegKornyakov.pages/Main.page")
);

const olegKornyakovRoutes: RouteObject[] = [
	{
		path: RoutesPaths.OLEG_KORNYAKOV,
		element: <MainLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: (
					<Suspense fallback={<Loader />}>
						<MainPage />
					</Suspense>
				),
				errorElement: <Error />,
			},
			{
				path: olegKornyakovRoutesPaths.LAST,
				element: (
					<Suspense fallback={<Loader />}>
						<LastPage />
					</Suspense>
				),
				errorElement: <Error />,
			},
			{
				path: olegKornyakovRoutesPaths.LUXE,
				element: (
					<Suspense fallback={<Loader />}>
						<LuxeBouquetsPage />
					</Suspense>
				),
				errorElement: <Error />,
			},
			{
				path: RoutesPaths.NOT_FOUND,
				element: <div>страницы нет</div>,
			},
		],
	},
];

export default olegKornyakovRoutes;
