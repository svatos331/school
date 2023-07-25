import React from "react";
import CheckMethod from "user.InterfaceLayer/Libraries/IvanKosteev.library/UI_KIT/Molecules/CheckOut.molecule/index";
import CartTotal from "user.InterfaceLayer/Libraries/IvanKosteev.library/UI_KIT/Molecules/CartTotal/index";
import EmptyCart from "user.InterfaceLayer/Libraries/IvanKosteev.library/UI_KIT/Molecules/EmpryCart/index";
import Title from "user.InterfaceLayer/Libraries/IvanKosteev.library/UI_KIT/Atoms/Title/index";

import * as ST from "../styled/styled";

interface CheckOutWidgetProps {
	delivery: any;
	payment: any;
	handleSubmit: any;
	selectedPayment: any;
	selectedDelivery: any;
	setSelectedPayment: any;
	setSelectedDelivery: any;
}

const CheckOutWidget: React.FC<CheckOutWidgetProps> = ({
	delivery,
	payment,
	handleSubmit,
	selectedPayment,
	selectedDelivery,
	setSelectedPayment,
	setSelectedDelivery,
}: CheckOutWidgetProps) => {
	return (
		<>
			<EmptyCart
				link="/ivanKosteev/fishing/cart"
				paragragh=""
				span="Вернуться к корзине"
			/>
			<Title title="Оформление заказа" />

			<form onSubmit={handleSubmit}>
				<ST.container>
					<ST.block>
						<CheckMethod
							selectedPayment={selectedPayment}
							selectedDelivery={selectedDelivery}
							setSelectedDelivery={setSelectedDelivery}
							setSelectedPayment={setSelectedPayment}
							delivery={delivery}
							payment={payment}
						/>
					</ST.block>

					<CartTotal
						type="submit"
						total="1231"
					/>
				</ST.container>
			</form>
		</>
	);
};

export default CheckOutWidget;
