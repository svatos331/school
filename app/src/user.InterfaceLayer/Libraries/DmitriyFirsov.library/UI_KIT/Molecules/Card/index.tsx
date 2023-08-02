import React, { useState } from "react";
import { Link } from "react-router-dom";

import * as ST from "./styled";
import Image from "../../Atoms/Image";
import { ReactComponent as FavoriteIcon } from "../../../assets/icons/heart.svg";

const Card = ({ item }: any) => {
	const [isFavorite, setFavorite] = useState(false);

	const handleFavorite = (event: any) => {
		event.preventDefault();
		event.stopPropagation();
		setFavorite(!isFavorite);
	};

	return (
		<ST.Card>
			<Link to={`product/${item.id}`}>
				<ST.CardWrapper>
					<ST.CardWrapperImg>
						<ST.CardFavorite onClick={handleFavorite}>
							<FavoriteIcon
								style={{ fill: isFavorite ? "#000" : "transparent" }}
							/>
						</ST.CardFavorite>
						<Image
							width="286"
							height="286"
							src={item.thumbnail}
							objectFit="contain"
						/>
					</ST.CardWrapperImg>
					<ST.CardContent>
						<p>{item.category}</p>
						<ST.CardTitle>{item.title}</ST.CardTitle>
						<p>{item.price} €</p>
					</ST.CardContent>
				</ST.CardWrapper>
			</Link>
		</ST.Card>
	);
};

export default Card;
