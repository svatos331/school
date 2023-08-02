import React from "react";

import ProductShort from "../../../../../OlegKornyakov.library/UI_KIT/Molecules/ProductShort.molecule/index/ProductShort.molecule";
import { IproductArray } from "./type/productArray.interface";
import { ProductsArrayStyled } from "./styled/productsArray.styled";

const ProductsArrayModule = ({ data }: { data: IproductArray }) => {
	return (
		<ProductsArrayStyled>
			{data.products.map((_item: any, i: number) => (
				<ProductShort
					key={i}
					ProductShort={{
						header: data.products[i].name,
						price: data.products[i].price,
						imgsrc: data.products[i].imgsrc,
					}}
				/>
			))}
		</ProductsArrayStyled>
	);
};
export default ProductsArrayModule;
