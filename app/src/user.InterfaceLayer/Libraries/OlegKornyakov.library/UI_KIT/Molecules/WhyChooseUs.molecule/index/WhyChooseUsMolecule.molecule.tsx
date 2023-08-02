import React from "react";

import H2Atom from "../../../Atoms/h3.atom/component/h3.atom";
import H3Atom from "../../../Atoms/h3.atom/component/h3.atom";
import PDefault from "../../../Atoms/pDefault.atom/component/pDefault.atom";
import {
	WhyChooseUsStyledLeft,
	WhyChooseUsStyledRight,
	WhyChooseUsStyledRightCell288,
	WhyChooseUsStyledRightCell322,
	WhyChooseUsStyledWrap,
} from "../styled/WhyChooseUs.styled";

const WhyChooseUsMolecule = () => {
	return (
		<WhyChooseUsStyledWrap>
			<WhyChooseUsStyledLeft>
				<H2Atom headerSrc={"Why choose us?"} />
			</WhyChooseUsStyledLeft>
			<WhyChooseUsStyledRight>
				<WhyChooseUsStyledRightCell322>
					<H3Atom headerSrc={"Stylish bouquets by florists"} />
					<PDefault
						pSrc={
							"At our floral studio, our professional florists craft the most elegant and stylish bouquets using only the freshest and highest quality materials available. We stay up-to-date with the latest floral design trends and offer unique arrangements that are sure to impress. Let us brighten up your day with our stunning bouquets and same-day delivery service."
						}
					/>
				</WhyChooseUsStyledRightCell322>
				<WhyChooseUsStyledRightCell288>
					<H3Atom headerSrc={"On-time delivery"} />
					<PDefault
						pSrc={
							"Never miss a moment with our on-time flower delivery service. Our couriers will deliver your bouquet personally, without boxes, to ensure it arrives in perfect condition. Trust us to deliver your thoughtful gift reliably."
						}
					/>
				</WhyChooseUsStyledRightCell288>
				<WhyChooseUsStyledRightCell288>
					<H3Atom headerSrc={"Safe payment"} />
					<PDefault
						pSrc={
							"You can feel secure when placing an order with us, as we use industry-standard security measures to protect your payment information. Your transaction will be safe and hassle-free, so you can shop with confidence."
						}
					/>
				</WhyChooseUsStyledRightCell288>
				<WhyChooseUsStyledRightCell322>
					<H3Atom headerSrc={"Subscription by your needs"} />
					<PDefault
						pSrc={
							"With our subscription service tailored to your specific needs, you can enjoy the convenience of having beautiful bouquets delivered straight to your door at regular intervals. Our flexible service is perfect for busy individuals or those who want to ensure they always have fresh flowers on hand. You'll save time and money with this hassle-free solution to your floral needs."
						}
					/>
				</WhyChooseUsStyledRightCell322>
			</WhyChooseUsStyledRight>
		</WhyChooseUsStyledWrap>
	);
};

export default WhyChooseUsMolecule;
