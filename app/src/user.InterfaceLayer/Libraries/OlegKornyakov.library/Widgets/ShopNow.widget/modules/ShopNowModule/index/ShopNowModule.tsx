import React from "react";
import FlowerImg from "user.InterfaceLayer/Libraries/OlegKornyakov.library/UI_KIT/Atoms/FlowerImg.atom/component/FlowerImg.atom";
import ShopNowMolecule from "user.InterfaceLayer/Libraries/OlegKornyakov.library/UI_KIT/Molecules/ShopNow.molecule/index/ShopNow.molecule";

import { I2ShopNowModuleSrc } from "../type/ShopNowModule.interface";
import { ShopNowStyledModule } from "../styled/ShopNowModule.styled";

const ShopNowModule = ({
	ShopNowModuleSrc,
}: {
	ShopNowModuleSrc: I2ShopNowModuleSrc;
}) => {
	const returnWithDirection = (i: number) => {
		return ShopNowModuleSrc.data[i].arrowRight ? (
			<ShopNowStyledModule>
				<ShopNowMolecule
					ShopNowMoleculeSrc={{
						headerSrc: ShopNowModuleSrc.data[i].header,
						ArrowRight: ShopNowModuleSrc.data[i].arrowRight,
					}}
				/>
				<FlowerImg
					FlowerImgSrc={{
						src: ShopNowModuleSrc.data[i].src,
						alt: ShopNowModuleSrc.data[i].alt,
					}}
				/>
			</ShopNowStyledModule>
		) : (
			<ShopNowStyledModule>
				<FlowerImg
					FlowerImgSrc={{
						src: ShopNowModuleSrc.data[i].src,
						alt: ShopNowModuleSrc.data[i].alt,
					}}
				/>
				<ShopNowMolecule
					ShopNowMoleculeSrc={{
						headerSrc: ShopNowModuleSrc.data[i].header,
						ArrowRight: ShopNowModuleSrc.data[i].arrowRight,
					}}
				/>
			</ShopNowStyledModule>
		);
	};

	return (
		<div>
			{ShopNowModuleSrc.data.map((item, i) => (
				<div key={i}> {returnWithDirection(i)}</div>
			))}
		</div>
	);
};

export { ShopNowModule };
