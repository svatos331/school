import React, { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "business.InterfaceLayer/store/services/hooks/redux";
import { addToCart } from "business.InterfaceLayer/store/shared/entities/dmitriyFirsov.entities/redux/slice/cart.slice";
import { openCart } from "business.InterfaceLayer/store/shared/entities/dmitriyFirsov.entities/redux/slice/cartSidebar.slice";

import * as ST from "./styled";
import Typography from "../../UI_KIT/Atoms/Typography";
import CartCounter from "../../UI_KIT/Molecules/CartCounter.molucele";
import Image from "../../UI_KIT/Atoms/Image";
import Button from "../../UI_KIT/Atoms/Button";
import Container from "../../UI_KIT/Atoms/Container";
import { ReactComponent as ArrowBack } from "../../assets/icons/arrow_back.svg";

const DetailCard: FC<any> = ({ item }) => {

	const [added, setAdded] = useState(false);
	const dispatch = useAppDispatch();
	const goods = useAppSelector(state => state.cart.goods);
	const navigate = useNavigate();

	const add = () => {
		if(!added) {
			dispatch(addToCart(item));
			dispatch(openCart());
		}
	};

	useEffect(() => {
		setAdded(
			goods.some(i => i.id === item.id)
		);
	}, [goods]);

	return (
		<ST.Row>
			<ST.CardHeader>
				<Container>
					<Button onClick={ () => navigate(-1) }>
						<ArrowBack />
						<ST.ButtonContent>
							To back page
						</ST.ButtonContent>
					</Button>
				</Container>
			</ST.CardHeader>
			<ST.Col>
				<Image
					width="400"
					height="400"
					src={item.images[2]}
					objectFit="contain"
				/>
			</ST.Col>
			<ST.Col>
				<Container>
					<ST.DetailCard>
						<Typography fontSize={"48px"}>
							{item.title}
						</Typography>
						<ST.DetailRow>
							<CartCounter
								id={ item.id }
								quantity={ item.quantity }
							/>
							{item.price} €
						</ST.DetailRow>
						<ST.DetailButton onClick={ add }>
							{added ? "Added to cart" : "Add to shopping cart"}
						</ST.DetailButton>
						<Typography>{item.description}</Typography>
					</ST.DetailCard>
				</Container>
			</ST.Col>
		</ST.Row>
	);
};

export default DetailCard;
