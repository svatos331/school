import React from "react";

import H2Atom from "../../../Atoms/h3.atom/component/h3.atom";
import H4Atom from "../../../Atoms/h4.atom/component/h4.atom";
import H3Atom from "../../../Atoms/h3.atom/component/h3.atom";
import PDefault from "../../../Atoms/pDefault.atom/component/pDefault.atom";
import ButtonAtom from "../../../Atoms/Button.atom/button.atom";
import {
	AboutUsStyledLeft,
	AboutUsStyledRight,
	AboutUsStyledWrap,
} from "../styled/AboutUs.styled";

const AboutUsMolecule = () => {
	return (
		<AboutUsStyledWrap>
			<AboutUsStyledLeft>
				<H2Atom headerSrc={"About Us"} />
			</AboutUsStyledLeft>
			<AboutUsStyledRight>
				<H4Atom headerSrc={"OUR STORY"} />
				<H3Atom headerSrc={"Kyiv LuxeBouquets"} />
				<PDefault
					pSrc={
						"We are a modern local floral studio, which specializes in the design and delivery of unique bouquets. We have the best florists who carefully select each look, our studio cooperates directly with farms for growing different flowers, so we always have fresh flowers, which are collected by our florists in exquisite bouquets. We have a collection of fresh bouquets, collections of dried bouquets, house plants, as well as fragrant candles from luxury brands to create the perfect atmosphere. Make someone's day amazing by sending flowers, plants and gifts the same or next day. Ordering flowers online has never been easier."
					}
				/>
				<ButtonAtom buttonSrc={"LERN MORE"} />
			</AboutUsStyledRight>
		</AboutUsStyledWrap>
	);
};

export default AboutUsMolecule;
