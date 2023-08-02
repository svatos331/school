import React from "react";

import { IProductsWidget } from "./type/ProductsWidget.interface";
import ProductsLeftInfoMolecule from "../../UI_KIT/Molecules/ProductsLeftInfo.molecule/index/ProductsLeftInfo.molecule";
import ProductsArrayModule from "./modules/productsArray.module/productsArray.module";
import { ProductsStyledWrap } from "./styled/Products.styled";

const ProductsWidget = ({ src }: { src: IProductsWidget }) => {
	const { data, isLoading } = src.useGetTodoQuery({
		authToken: "",
		params: { id: src.id },
	});

	return (
		<>
			{!isLoading ? (
				<ProductsStyledWrap>
					<ProductsLeftInfoMolecule
						src={{ header: data[0].id, imgsrc: data[0].imgsrc }}
					/>
					<ProductsArrayModule data={{ products: data[0].products }} />
				</ProductsStyledWrap>
			) : (
				<p>Load</p>
			)}
		</>
	);
};
export default ProductsWidget;
