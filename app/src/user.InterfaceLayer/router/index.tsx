import React from "react";
import { RouteObject } from "react-router-dom";

import svyatoslavZhilinRoutes from "./routes/svyatoslavZhilin.route";
import RoutesPaths from "./routesPaths";
import CheckAuth from "./services/Components/CheckAuth";
import Error from "../Components/general.components/Error";
import dmitriyFirsovRoutes from "./routes/dmitriyFirsov.route";

const mainRouter: RouteObject[] = [
	{
		path: RoutesPaths.MAIN,
		element: <CheckAuth />,
		errorElement: <Error />,
		children: [...svyatoslavZhilinRoutes, ...dmitriyFirsovRoutes],
	},
];

export default mainRouter;
