import React from "react";

import CategoryPageH1 from "../../../Atoms/CategoryPageH1.atom/CategoryPageH1.atom";
import { IProductsLeftInfo } from "../type/ProductsLeftInfo.interface";
import { ProductsLeftStyledWrap } from "../styled/ProductsLeftInfo.styled";

const ProductsLeftInfoMolecule = ({ src }: { src: IProductsLeftInfo }) => {
	return (
		<ProductsLeftStyledWrap imgsrc={src.imgsrc} >
			<CategoryPageH1 header={src.header} />
		</ProductsLeftStyledWrap>
	);
};

export default ProductsLeftInfoMolecule;
