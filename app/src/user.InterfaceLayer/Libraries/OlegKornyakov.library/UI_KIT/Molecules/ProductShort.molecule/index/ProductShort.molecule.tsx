import React from "react";

import { IProductShort } from "../type/ProductShort.interface";
import ProductH5 from "../../../Atoms/ProductH5/productH5";
import ProductPrice from "../../../Atoms/productPrice.atom/ProductPrice";
import { ProfuctShortStyledWrap } from "../styled/ProfuctShort.styled";

const ProductShort = ({ ProductShort }: { ProductShort: IProductShort }) => {
	return (
		<ProfuctShortStyledWrap imgsrc={ProductShort.imgsrc}>
			<ProductH5 header={ProductShort.header} />
			<ProductPrice src={ProductShort.price} />
		</ProfuctShortStyledWrap>
	);
};

export default ProductShort;
