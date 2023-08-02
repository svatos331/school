import React from "react";

import { ProductPriceStyled } from "./styled/ProductPrice.styled";

const ProductPrice = ({ src }: { src: number }) => {
	return <ProductPriceStyled>$ {src}</ProductPriceStyled>;
};

export default ProductPrice;
