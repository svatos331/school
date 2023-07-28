import React from "react";
import H1Atom from "user.InterfaceLayer/Libraries/OlegKornyakov.library/UI_KIT/Atoms/h1.atom/component/h1.atom";
import PItalicAtom from "user.InterfaceLayer/Libraries/OlegKornyakov.library/UI_KIT/Atoms/pItalicAtom/component/pItalic.atom";

import { HeaderStyled } from "../styled/header.styled";

const HeaderModule = () => {
	return (
		<HeaderStyled>
			<H1Atom />
			<PItalicAtom
				pSrc={
					"Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our Online Flower Delivery Service"
				}
			/>
		</HeaderStyled>
	);
};

export default HeaderModule;
