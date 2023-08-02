import React from "react";
import { useTranslation } from "react-i18next";

import * as ST from "./styled";
import Typography from "../../UI_KIT/Atoms/Typography";
import bg from "./bg.jpg";

const MainCarousel = () => {
	const { t } = useTranslation();

	return (
		<ST.MainCarousel>
			<ST.MainCarouselContent
				style={{
					backgroundImage: `url(${ bg })`
				}}
			>
				<Typography fontSize="48px" color="#FFF">
					{ t("home.h1") }
				</Typography>
			</ST.MainCarouselContent>
		</ST.MainCarousel>
	);
};

export default MainCarousel;
