import React from "react";
import Title from "user.InterfaceLayer/Libraries/IvanKosteev.library/UI_KIT/Atoms/Title/index";
import AccountBlock from "user.InterfaceLayer/Libraries/IvanKosteev.library/Widgets/AccountBlock/index";

const AccountComponent: React.FC = () => {
	return (
		<>
			<Title title="Личный кабинет" />
			<AccountBlock />
		</>
	);
};

export default AccountComponent;
