import React from "react";
import EmptyCart from "user.InterfaceLayer/Libraries/IvanKosteev.library/UI_KIT/Molecules/EmpryCart/index";
import CartItems from "user.InterfaceLayer/Libraries/IvanKosteev.library/UI_KIT/Molecules/CartItems/index";
import { useAppSelector } from "business.InterfaceLayer/store/services/hooks/redux";
import { useDispatch, useSelector } from "react-redux";
import {
	clearCart,
	removeItem,
	updateQuantity,
	updateTotal,
} from "business.InterfaceLayer/store/shared/entities/ivanKosteev.entities/todo.entity/redux/slice/CartSlice";
import CartTotal from "user.InterfaceLayer/Libraries/IvanKosteev.library/UI_KIT/Molecules/CartTotal/index";

import * as ST from "../styled/styled";

const CartList = () => {
	const dispatch = useDispatch();
	const { items, total } = useSelector((state: any) => state.cart);

	const handleRemoveItem = (itemId: any) => {
		dispatch(removeItem({ id: itemId }));
		dispatch(updateTotal());
	};

	const handleUpdateQuantityPlus = (itemId: any, quantity: any) => {
		dispatch(updateQuantity({ id: itemId, quantity }));
	};

	const handleUpdateQuantityMinus = (itemId: any, quantity: any) => {
		dispatch(updateQuantity({ id: itemId, quantity }));
		if (quantity === 0) {
			dispatch(removeItem({ id: itemId }));
			dispatch(updateTotal());
		}
	};

	const handleClearCart = () => {
		dispatch(clearCart());
	};

	return (
		<ST.block>
			<ST.btn onClick={() => handleClearCart()}>Очистить корзину</ST.btn>
			<ST.cart>
				<ST.cart__block>
					{items.length === 0 ? (
						<EmptyCart
							link="/ivanKosteev/fishing"
							paragragh="Ваша корзина пуста"
							span="Начните покупку"
						/>
					) : (
						items.map((item: any, index: number) => (
							<CartItems
								id={item.id}
								key={index}
								name={item.name}
								image={item.image}
								price={item.price}
								quantity={item.quantity}
								handleRemoveItem={() => handleRemoveItem(item.id)}
								handleUpdateQuantityMinus={() =>
									handleUpdateQuantityMinus(item.id, item.quantity - 1)
								}
								handleUpdateQuantityPlus={() =>
									handleUpdateQuantityPlus(item.id, item.quantity + 1)
								}
							/>
						))
					)}
				</ST.cart__block>

				<CartTotal
					total={total}
					type=""
				/>
			</ST.cart>
		</ST.block>
	);
};

export default CartList;
