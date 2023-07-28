import React from "react";
import AtomLink from "user.InterfaceLayer/Libraries/OlegKornyakov.library/UI_KIT/Atoms/HeaderLink.atom/component/Link.atom";

import { I2Links } from "../type/twoLinks.interface";
import { LinksContainer, BorderWrap } from "../styled/twoLinks.styled";

const TwoLinks = ({ TwoLinks }: { TwoLinks: I2Links }) => (
	<LinksContainer>
		<BorderWrap>
			<AtomLink atomlinkSource={TwoLinks.FirstLink} />
		</BorderWrap>
		<AtomLink atomlinkSource={TwoLinks.SecondLink} />
	</LinksContainer>
);

export default TwoLinks;
