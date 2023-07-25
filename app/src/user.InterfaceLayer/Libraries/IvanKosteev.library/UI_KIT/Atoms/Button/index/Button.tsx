import React from "react";

import * as ST from "../styled/styled";

type Props = {
	desciption: string;
	handleAddToCart: any;
	type: any;
};

const Button = ({ desciption, handleAddToCart, type }: Props) => (
	<ST.Button
		type={type}
		onClick={handleAddToCart}
	>
		{desciption}
	</ST.Button>
);

export default Button;