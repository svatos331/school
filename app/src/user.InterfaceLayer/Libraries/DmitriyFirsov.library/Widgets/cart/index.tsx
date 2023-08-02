import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
	useAppSelector,
	useAppDispatch,
} from "business.InterfaceLayer/store/services/hooks/redux";
import { removeFromCart } from "business.InterfaceLayer/store/shared/entities/dmitriyFirsov.entities/redux/slice/cart.slice";

import * as ST from "./styled";
import TitleLevel3 from "../../UI_KIT/Atoms/TitleLevel3";
import IconButton from "../../UI_KIT/Atoms/IconButton";
import { ReactComponent as CrossIcon } from "../../assets/icons/cross.svg";
import CartItem from "./modules/CartItem";
import Typography from "../../UI_KIT/Atoms/Typography";
import Button from "../../UI_KIT/Atoms/Button";
import Overlay from "./modules/Overlay";

const Cart = ({ onClose }: any) => {
	const { t } = useTranslation();
	const goods = useAppSelector(state => state.cart.goods);
	const open = useAppSelector(state => state.cartSidebar.open);
	const dispatch = useAppDispatch();
	const [totalPrice, setTotalPrice] = useState(0);


	const [products, setProducts] = useState<any>([]);

	function remove(id: number) {
		dispatch(removeFromCart(id));
	}

	useEffect(() => {

		const total = () => {
			return goods.map(item => {
				return {
					...item,
					price: item.price * item.quantity
				};
			});
		};
		setProducts(total());

		setTotalPrice(
			total().reduce((sum: number, item: any) => {
				return item.price + sum;
			}, 0)
		);
	}, [goods]);

	return (
		<React.Fragment>
			<ST.Cart open={open}>
				<ST.CartHeader>
					<IconButton onClick={onClose}>
						<CrossIcon />
					</IconButton>

					<ST.Heading>
						<TitleLevel3>
							{ t("cart.title") }
						</TitleLevel3>
						{goods.length ? (
							<p>{goods.length} { t("cart.quantity") } </p>
						) : null}
					</ST.Heading>
				</ST.CartHeader>

				{goods.length ? (
					<React.Fragment>
						<ST.CartGoodsContainer>
							<ST.CartList>
								{products.map((item: any) => (
									<CartItem
										remove={remove}
										item={item}
										key={item.id}
									/>
								))}
							</ST.CartList>
						</ST.CartGoodsContainer>

						<ST.CartFooter>
							<ST.CartTotal>
								<Typography fontSize="32px">
									{ t("cart.total") }:
								</Typography>
								<Typography fontSize="32px">
									{ totalPrice } €
								</Typography>
							</ST.CartTotal>
							<Button>
								{ t("cart.order") }
							</Button>
						</ST.CartFooter>
					</React.Fragment>
				) : (
					<ST.CartEmpty>
						{ t("cart.empty") }
					</ST.CartEmpty>
				)}
			</ST.Cart>

			<Overlay
				open={open}
				onClick={onClose}
			/>
		</React.Fragment>
	);
};

export default Cart;
