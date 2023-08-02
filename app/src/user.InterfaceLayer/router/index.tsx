import React from "react";
import { RouteObject } from "react-router-dom";

import olegKornyakovRoutes from "./routes/olegKornyakov.route";
import svyatoslavZhilinRoutes from "./routes/svyatoslavZhilin.route";
import RoutesPaths from "./routesPaths";
import CheckAuth from "./services/Components/CheckAuth";
import Error from "../Components/general.components/Error";

const mainRouter: RouteObject[] = [
	{
		path: RoutesPaths.MAIN,
		element: <CheckAuth />,
		errorElement: <Error />,
		children: [...svyatoslavZhilinRoutes, ...olegKornyakovRoutes],
	},
];

export default mainRouter;
