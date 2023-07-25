import React from "react";
import Logo from "user.InterfaceLayer/Libraries/IvanKosteev.library/UI_KIT/Atoms/Logo/index/Logo";
import ButtonLK from "user.InterfaceLayer/Libraries/IvanKosteev.library/UI_KIT/Atoms/ButtonLK/index";
import Category from "user.InterfaceLayer/Libraries/IvanKosteev.library/UI_KIT/Molecules/Category.molecule/index/Category";

import * as ST from "../../../constants/container/styled";
import * as FR from "../styled/styled";

const Footer = () => {
	return (
		<ST.container>
			<FR.footer>
				<Logo desciption="Рыболовный магазин" />
				<Category />
				<ButtonLK desciption="Личный кабинет" />
			</FR.footer>
		</ST.container>
	);
};

export default Footer;
