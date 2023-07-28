import React from "react";

import { H2Styled } from "../styled/h2.styled";

const H2Atom = ({ headerSrc }: { headerSrc: string }) => {
	return <H2Styled >{headerSrc}</H2Styled>;
};
export default H2Atom;
