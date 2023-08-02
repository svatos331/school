import React from "react";
import { useParams } from "react-router-dom";

import HeaderComponent from "../../../../../Components/OlegKornyakov.components.bll/Header.component.bll/Header.component";
import ProductsComponent from "../../../../../Components/OlegKornyakov.components.bll/Products.component.bll/Products.component";

const LuxeBouquetsPageCategory = () => {
	const { id } = useParams();

	return (
		<div>
			{/* temp */}
			{id} Oleg Kornyakov LuxeBouquetsPage page
			{id == "Fresh Flowers" ? "true" : "false"}
			<HeaderComponent />
			{/* temp */}
			<ProductsComponent  id={id}/>
		</div>
	);
};

export default LuxeBouquetsPageCategory;
