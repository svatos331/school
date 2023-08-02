import React from "react";

import { CategoryPageH1Styled } from "./styled/CategoryPageH1.styled";

const CategoryPageH1 = ({ header }: { header: string | undefined }) => {
	return <CategoryPageH1Styled className="h2">{header}</CategoryPageH1Styled>;
};
export default CategoryPageH1;
