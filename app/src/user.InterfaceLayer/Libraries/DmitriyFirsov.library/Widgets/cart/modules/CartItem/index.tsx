import React from "react";
import Image from "user.InterfaceLayer/Libraries/DmitriyFirsov.library/UI_KIT/Atoms/Image";
import CartCounter from "user.InterfaceLayer/Libraries/DmitriyFirsov.library/UI_KIT/Molecules/CartCounter.molucele";
import IconButton from "user.InterfaceLayer/Libraries/DmitriyFirsov.library/UI_KIT/Atoms/IconButton";
import Typography from "user.InterfaceLayer/Libraries/DmitriyFirsov.library/UI_KIT/Atoms/Typography";

import { ReactComponent as CrossIcon } from "../../../../assets/icons/cross.svg";
import * as ST from "./styled";

const CartItem = ({ item, remove }: any) => {
	return (
		<ST.CartItem>
			<Image
				width="128"
				height="128"
				src={item.thumbnail}
				objectFit="cover"
			/>
			<ST.CartItemContent>
				<ST.CartItemRow>
					<Typography fontSize="20px"> {item.title} </Typography>
					<IconButton onClick={() => remove(item.id)}>
						<CrossIcon />
					</IconButton>
				</ST.CartItemRow>
				<ST.CartItemRow>
					<CartCounter id={item.id} quantity={ item.quantity } />
					<Typography fontSize="24px">{item.price} €</Typography>
				</ST.CartItemRow>
			</ST.CartItemContent>
		</ST.CartItem>
	);
};

export default CartItem;
