import React from "react";

import { ProductH5Styled } from "./styled/ProductH5.styled";

const ProductH5 = ({ header }: { header: string }) => {
	return <ProductH5Styled>{header}</ProductH5Styled>;
};

export default ProductH5;
