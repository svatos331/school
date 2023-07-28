import React from "react";

import { ButtonStyled } from "./styled/button.styled";

const ButtonAtom = ({ buttonSrc }: { buttonSrc: string }) => {
	return <ButtonStyled>{buttonSrc}</ButtonStyled>;
};
export default ButtonAtom;
