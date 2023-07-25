import React from "react";
import { Link } from "react-router-dom";

import Button from "../../../Atoms/Button/index/Button";
import * as ST from "../styled/styled";

type Props = {
	total: any;
	type: any;
};

const CartTotal = ({ total, type }: Props) => {
	return (
		<ST.total>
			<ST.block>
				<ST.title>ИТОГО:</ST.title>
				<ST.price> {total} ₽</ST.price>
			</ST.block>
			<Link to="/ivanKosteev/fishing/check">
				<Button
					desciption="Оформить заказ"
					handleAddToCart=""
					type={type}
				/>
			</Link>
		</ST.total>
	);
};

export default CartTotal;
