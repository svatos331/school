import React from "react";
import { RouteObject } from "react-router-dom";

import RoutesPaths from "./routesPaths";
import CheckAuth from "./services/Components/CheckAuth";
import Error from "../Components/general.components/Error";
import svyatoslavZhilinRoutes from "./routes/svyatoslavZhilin.route";
import ivanKosteevRoutes from "./routes/ivanKosteev.route";

const mainRouter: RouteObject[] = [
	// Свтослава путь

	{
		path: RoutesPaths.MAIN,
		element: <CheckAuth />,
		errorElement: <Error />,
		children: [...svyatoslavZhilinRoutes, ...ivanKosteevRoutes],
	},
];

export default mainRouter;
