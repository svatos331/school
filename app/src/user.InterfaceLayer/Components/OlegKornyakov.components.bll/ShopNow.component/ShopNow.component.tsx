import React from "react";

import { useGetTodoQuery } from "../../../../business.InterfaceLayer/store/shared/entities/OlegKornyakov.entities/shopNow.entity/redux/api";
import ShopNowWidget from "../../../Libraries/OlegKornyakov.library/Widgets/ShopNow.widget/index/ShopNow.widget";
import "../../../Libraries/OlegKornyakov.library/constants/fonts/fonts.constant.css";

const ShopNowComponent = () => {
	return (
		<>
			<ShopNowWidget useGetTodoQuery={useGetTodoQuery} />
		</>
	);
};

export default ShopNowComponent;