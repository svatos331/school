import React from "react";
import ImgAuthor from "user.InterfaceLayer/Libraries/OlegKornyakov.library/UI_KIT/Atoms/ImgAuthor.atom/component/ImgAuthor.atom";
import PAuthor from "user.InterfaceLayer/Libraries/OlegKornyakov.library/UI_KIT/Atoms/pAtom/component/pAuthor.atom";

import { ShortInfoStyled } from "../styled/shortInfo.styled";

const ShortInfoModule = () => {
	return (
		<ShortInfoStyled>
			<ImgAuthor />
			<PAuthor />
		</ShortInfoStyled>
	);
};
export default ShortInfoModule;
