import React, { FC } from "react";
import { Link, Outlet } from "react-router-dom";

const MainLayout: FC = () => (
	<div>
		<div>
			<Link to={"/olegKornyakov/last"}>last</Link>
		</div>
		<div>
			<Link to={"/olegKornyakov"}>main</Link>
		</div>
		<div>
			<Link to={"/olegKornyakov/LuxeBouquetsPage"}>LuxeBouquets</Link>
		</div>
		OlegKornyakovMainLayout <Outlet />
	</div>
);

export default MainLayout;
