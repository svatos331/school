import React from "react";
import { Link } from "react-router-dom";
import {
	rightArrow,
	leftArrow,
} from "user.InterfaceLayer/Libraries/OlegKornyakov.library/assets/icons/Arrows";

import { ShopNowStyled } from "../styled/ShopNow.styled";

const ShopNowAtom = ({ arrowRight, linkSrc }: { arrowRight: boolean, linkSrc:string }) => {
	return (
		<ShopNowStyled>
			{arrowRight ? (
				<>
					<Link
						to={`/olegKornyakov/LuxeBouquetsPage/category/${linkSrc}`}
						className="shopNow__Link"
					>
						Shop now
					</Link>
					{rightArrow}
				</>
			) : (
				<>
					{leftArrow}
					<Link
						to={`/olegKornyakov/LuxeBouquetsPage/category/${linkSrc}`}
						className="shopNow__Link"
					>
						Shop now
					</Link>
				</>
			)}
		</ShopNowStyled>
	);
};
export default ShopNowAtom;
