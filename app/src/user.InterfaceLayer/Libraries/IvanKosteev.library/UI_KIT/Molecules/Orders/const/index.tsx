import React from "react";

import SubTitle from "../../../Atoms/SubTitle/index";
import OrderBlock from "../../OrderBlock/index";

type Props = {
	orders: any;
};

const Orders = ({ orders }: Props) => {
	return (
		<>
			<SubTitle title="Мои заказы" />
			{orders.length === 0 ? (
				<p>Заказов пока нет</p>
			) : (
				orders.map((order: any) => (
					<OrderBlock
						key={order.id}
						name={order.name}
						image={order.image}
						price={order.price}
						data={order.data}
						quantity={order.quantity}
					/>
				))
			)}
		</>
	);
};

export default Orders;
