import React, { useEffect, useState } from "react";

import Orders from "../const";

const OrderHistory: React.FC = () => {
	const [orders, setOrders] = useState<any>([]);

	useEffect(() => {
		const orderData = localStorage.getItem("orders");
		if (orderData) {
			setOrders(JSON.parse(orderData));
		}
	}, []);

	return <Orders orders={orders} />;
};

export default OrderHistory;
