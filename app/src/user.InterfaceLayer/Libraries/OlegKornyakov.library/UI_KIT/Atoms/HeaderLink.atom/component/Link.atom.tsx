import React from "react";
import { Link } from "react-router-dom";

import { ILink } from "../type/linkAtom.interface";
import { StyledLink } from "../styled/link.styled";

const AtomLink = ({ atomlinkSource }: { atomlinkSource: ILink }) => (
	<StyledLink>
		<Link to={`/LuxeBouquetsPage/${atomlinkSource.src}`}>
			{atomlinkSource.name}
		</Link>
	</StyledLink>
);

export default AtomLink;
