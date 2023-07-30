import React, { FC } from "react";

import HeaderComponent from "../../../Components/OlegKornyakov.components.bll/Header.component.bll/Header.component";
import ShopNowComponent from "../../../Components/OlegKornyakov.components.bll/ShopNow.component/ShopNow.component";
import InfoComponent from "../../../Components/OlegKornyakov.components.bll/Info.component/Info.component";
import ContactComponent from "../../../Components/OlegKornyakov.components.bll/ContactInfo.component.bll/ContactInfo.component";

const LuxeBouquetsPage: FC = () => (
	<div>
		{" "}
		Oleg Kornyakov LuxeBouquetsPage page
		<HeaderComponent />
		<ShopNowComponent />
		<InfoComponent />
		<ContactComponent />
	</div>
);

export default LuxeBouquetsPage;
