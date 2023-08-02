import React from "react";

import { PDefaultStyled } from "../styled/pDefault.styled";

const PDefault = ({ pSrc }: { pSrc: string }) => {
	return <PDefaultStyled >{pSrc}</PDefaultStyled>;
};
export default PDefault;
