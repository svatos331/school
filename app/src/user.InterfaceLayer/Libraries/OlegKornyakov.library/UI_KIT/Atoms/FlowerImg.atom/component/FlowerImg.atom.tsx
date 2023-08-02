import React from "react";

import { StyledImg } from "../styled/FlowerImg.styled";
import { IFlowerImg } from "../type/FlowerImg.interface";

const FlowerImg = ({ FlowerImgSrc }: { FlowerImgSrc: IFlowerImg }) => {
	return (
		<StyledImg
			src={FlowerImgSrc.src}
			alt={FlowerImgSrc.alt}
		/>
	);
};
export default FlowerImg;
