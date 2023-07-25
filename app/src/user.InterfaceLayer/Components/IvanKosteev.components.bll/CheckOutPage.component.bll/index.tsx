import { clearCart } from "business.InterfaceLayer/store/shared/entities/ivanKosteev.entities/todo.entity/redux/slice/CartSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import CheckOutWidget from "user.InterfaceLayer/Libraries/IvanKosteev.library/Widgets/CheckOut/index";
import { useNavigate } from "react-router-dom";

import { payment, delivery } from "./const";

const CheckOutComponent: React.FC = () => {
	const [selectedPayment, setSelectedPayment] = useState("");
	const [selectedDelivery, setSelectedDelivery] = useState("");
	const dispatch = useDispatch();

	const navigate = useNavigate();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const order = {
			selectedPayment,
			selectedDelivery,
			items: JSON.parse(localStorage.getItem("cart") || "[]"),
			total: JSON.parse(localStorage.getItem("total") || "0"),
			quantity: JSON.parse(localStorage.getItem("quantity") || "0"),
		};
		// сохранение информации о заказе в localStorage или отправка на сервер
		localStorage.setItem(
			"orders",
			JSON.stringify([
				...JSON.parse(localStorage.getItem("orders") || "[]"),
				order,
			])
		);
		dispatch(clearCart());
		navigate("/ivanKosteev/fishing/account");
	};

	return (
		<>
			<CheckOutWidget
				selectedPayment={selectedPayment}
				selectedDelivery={selectedDelivery}
				setSelectedDelivery={setSelectedDelivery}
				setSelectedPayment={setSelectedPayment}
				handleSubmit={handleSubmit}
				delivery={delivery}
				payment={payment}
			/>
		</>
	);
};

export default CheckOutComponent;
