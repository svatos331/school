import React from "react";

import { H3Styled } from "../styled/h3.styled";

const H3Atom = ({ headerSrc }: { headerSrc: string }) => {
	return <H3Styled >{headerSrc}</H3Styled>;
};
export default H3Atom;
