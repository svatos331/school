import React from "react";

import ShopNowAtom from "../../../Atoms/ShopNow.atom/component/ShopNow.atom";
import H3Atom from "../../../Atoms/h3.atom/component/h3.atom";
import { I2ShopNowSrc } from "../type/ShopNow.interface";
import { StyledShopNowMolecule } from "../styled/ShopNow.styled";

const ShopNowMolecule = ({
	ShopNowMoleculeSrc,
}: {
	ShopNowMoleculeSrc: I2ShopNowSrc;
}) => {
	return (
		<StyledShopNowMolecule>
			<H3Atom headerSrc={ShopNowMoleculeSrc.headerSrc} />
			<ShopNowAtom arrowRight={ShopNowMoleculeSrc.ArrowRight} linkSrc={ShopNowMoleculeSrc.headerSrc}/>
		</StyledShopNowMolecule>
	);
};

export default ShopNowMolecule;
