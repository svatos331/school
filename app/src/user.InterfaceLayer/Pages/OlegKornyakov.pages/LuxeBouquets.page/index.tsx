import React, { FC } from "react";

import HeaderComponent from "../../../Components/OlegKornyakov.components.bll/Header.component.bll/Header.component";
import ShopNowComponent from "../../../Components/OlegKornyakov.components.bll/ShopNow.component/ShopNow.component";
import InfoComponent from "../../../Components/OlegKornyakov.components.bll/Info.component/Info.component";

const LuxeBouquetsPage: FC = () => (
	<div>
		{" "}
		Oleg Kornyakov LuxeBouquetsPage page
		<HeaderComponent />
		<ShopNowComponent />
		<InfoComponent />
	</div>
);

export default LuxeBouquetsPage;
