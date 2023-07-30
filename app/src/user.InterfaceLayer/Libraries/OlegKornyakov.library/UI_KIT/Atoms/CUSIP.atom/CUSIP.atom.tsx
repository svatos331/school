import React from "react";

import { ICUSIP } from "./type/CUSIP.interface";
import { CUSIPWrap, StyledIcon, StyledP } from "./styled/CUSIP.styled";

const CUSIP = ({ CUSIPSrc }: { CUSIPSrc: ICUSIP }) => {
	return (
		<CUSIPWrap>
			<StyledIcon>{CUSIPSrc.IconSrc && CUSIPSrc.IconSrc}</StyledIcon>
			<StyledP>{CUSIPSrc.pSrc}</StyledP>
		</CUSIPWrap>
	);
};

export default CUSIP;
