import React from "react";

import HeaderComponent from "../../../../../Components/OlegKornyakov.components.bll/Header.component.bll/Header.component";
import ShopNowComponent from "../../../../../Components/OlegKornyakov.components.bll/ShopNow.component/ShopNow.component";

const LuxeBouquetsPageProduct= ({name}:{name:string}) => (
	<div>
		{/* temp */}
		{name}
		Oleg Kornyakov LuxeBouquetsPage page
		<HeaderComponent />
		<ShopNowComponent />
		{/* temp */}
	</div>
);

export default LuxeBouquetsPageProduct;
