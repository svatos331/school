import React from "react";
import Logo from "user.InterfaceLayer/Libraries/IvanKosteev.library/UI_KIT/Atoms/Logo/index/Logo";
import Category from "user.InterfaceLayer/Libraries/IvanKosteev.library/UI_KIT/Molecules/Category.molecule/index/Category";
import Profile from "user.InterfaceLayer/Libraries/IvanKosteev.library/UI_KIT/Molecules/Profile.molecule/index/Profile";

import * as ST from "../styled/styled";

const Navbar = () => {
	return (
		<ST.header>
			<Logo desciption="Рыболовный магазин" />
			<Category />
			<Profile />
		</ST.header>
	);
};

export default Navbar;
