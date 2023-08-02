import React, { FC } from "react";

// import { Props, } from "./type";
import * as ST from "./styled";

interface Props {
  children?: React.ReactNode
	fontSize?: string
	color?: string
};

const Typography: FC<Props> = ({ children, color, fontSize }) => {

	return (
		<ST.Typography
			color={ color }
			fontSize={ fontSize }
		>
			{ children }
		</ST.Typography>
	);
};

export default Typography;
