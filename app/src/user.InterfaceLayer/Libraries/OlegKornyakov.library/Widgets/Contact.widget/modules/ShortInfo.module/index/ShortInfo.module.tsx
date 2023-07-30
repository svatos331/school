import React from "react";

import ContactUsShortInfo from "../../../../../../../Libraries/OlegKornyakov.library/UI_KIT/Molecules/ContactUsShortInfo.molecule/index/ContactUsShortInfo";
import {
	phoneIcon,
	locationIcon,
} from "../../../../../../../Libraries/OlegKornyakov.library/assets/icons/ShortInfoIcons";
import { MainWrap, RightWrap } from "../styled/ShortInfo.styled";

const ShortInfo = () => {
	return (
		<MainWrap>
			<ContactUsShortInfo
				CUSISrc={{
					headerSrc: "Phone",
					firstPSrc: "+380980099777",
					secondPSrc: "+380980099111",
					firstIcon: phoneIcon,
					secondIcon: phoneIcon,
				}}
			/>
			<RightWrap>
				<ContactUsShortInfo
					CUSISrc={{
						headerSrc: "Address",
						firstPSrc: "opening hours: 8 to 11 p.m.",
						secondPSrc: "15/4 Khreshchatyk Street, Kyiv ",
						firstIcon: undefined,
						secondIcon: locationIcon,
					}}
				/>
			</RightWrap>
		</MainWrap>
	);
};

export default ShortInfo;
