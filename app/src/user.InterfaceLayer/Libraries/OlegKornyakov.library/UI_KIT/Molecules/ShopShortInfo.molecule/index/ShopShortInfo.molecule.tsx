import React from "react";

import HeaderModule from "../modules/headerModule/index/Header.module";
import ShortInfoModule from "../modules/shortInfoModule/index/shortInfoModule";
import {
	ShopShortInfoStyled,
	ShopShortInfoStyledWrap,
} from "../styled/ShopShortInfo.styled";

const ShopShortInfoMolecule = () => {
	return (
		<ShopShortInfoStyled>
			<ShopShortInfoStyledWrap>
				<HeaderModule />
				<ShortInfoModule />
			</ShopShortInfoStyledWrap>
		</ShopShortInfoStyled>
	);
};
export default ShopShortInfoMolecule;
