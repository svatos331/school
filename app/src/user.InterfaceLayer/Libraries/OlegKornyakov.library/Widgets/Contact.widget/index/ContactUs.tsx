import React from "react";

import ContactUsMolecule from "../../../UI_KIT/Molecules/ContactUs.molecule/index/ContactUs.molecule";
import { ContactUsLeftContainer } from "../styled/ContactUs.styled";
import ShortInfo from "../modules/ShortInfo.module/index/ShortInfo.module";

const ContactWidget = () => {
	return (
		<>
			<ContactUsLeftContainer>
				<ContactUsMolecule />
				<ShortInfo />
			</ContactUsLeftContainer>
		</>
	);
};

export default ContactWidget;
