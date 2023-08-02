import React from "react";

import { useGetTodoQuery } from "../../../../business.InterfaceLayer/store/shared/entities/OlegKornyakov.entities/products.entity/redux/api";
import "../../../Libraries/OlegKornyakov.library/constants/fonts/fonts.constant.css";
import ProductsWidget from "../../../Libraries/OlegKornyakov.library/Widgets/Products.widget/Products.widget";

const ProductsComponent = ({ id }: { id: string | undefined }) => {

	return (
		<>
			<ProductsWidget src={{ useGetTodoQuery: useGetTodoQuery, id: id }} />
		</>
	);
};

export default ProductsComponent;
