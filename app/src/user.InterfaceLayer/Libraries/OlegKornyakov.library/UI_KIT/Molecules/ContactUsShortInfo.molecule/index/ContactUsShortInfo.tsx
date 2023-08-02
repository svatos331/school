import React from "react";

import H3Atom from "../../../Atoms/h3.atom/component/h3.atom";
import { ICUSI } from "../type/ContactUsShortInfo.interface";
import CUSIP from "../../../Atoms/CUSIP.atom/CUSIP.atom";
import {
	MainWrap,
	HeaderWrap,
	BodyWrap,
} from "../styled/ContactUsShortInfo.styled";

const ContactUsShortInfo = ({ CUSISrc }: { CUSISrc: ICUSI }) => {
	return (
		<MainWrap>
			<HeaderWrap>
				<H3Atom headerSrc={CUSISrc.headerSrc} />
			</HeaderWrap>
			<BodyWrap>
				<CUSIP
					CUSIPSrc={{ IconSrc: CUSISrc.firstIcon, pSrc: CUSISrc.firstPSrc }}
				/>
				<CUSIP
					CUSIPSrc={{ IconSrc: CUSISrc.secondIcon, pSrc: CUSISrc.secondPSrc }}
				/>
			</BodyWrap>
		</MainWrap>
	);
};

export default ContactUsShortInfo;
