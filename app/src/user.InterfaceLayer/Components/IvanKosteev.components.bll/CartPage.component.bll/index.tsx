import React from "react";
import Title from "user.InterfaceLayer/Libraries/IvanKosteev.library/UI_KIT/Atoms/Title/index";
import CartList from "user.InterfaceLayer/Libraries/IvanKosteev.library/Widgets/CartList/index";

import * as ST from "../styled";

const CartComponent = () => {
	return (
		<ST.container>
			<Title title="Корзина" />

			<CartList />
		</ST.container>
	);
};

export default CartComponent;
