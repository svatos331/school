import React from "react";

import H3Atom from "../../../Atoms/h3.atom/component/h3.atom";
import BookACallButtonAtom from "../../../Atoms/BookACallButton.atom/bookACallButton.atom";
import BookACallInputAtom from "../../../Atoms/BookACallInput.atom/bookACallInput.atom";
import {
	UnicP,
	ToContactUsWrapCenter,
	ToContactUsWrap,
	InputWrap,
} from "../styled/ContactUs.styled";

const ContactUsMolecule = () => {
	return (
		<ToContactUsWrapCenter>
			<ToContactUsWrap>
				<H3Atom headerSrc={"To Contact Us"} />
				<UnicP>we will call you back</UnicP>
				<InputWrap>
					<BookACallInputAtom srcValue={"+380 XX XXX XX XX"} />
					<BookACallButtonAtom buttonSrc={"BOOK A CALL"} />
				</InputWrap>
			</ToContactUsWrap>
		</ToContactUsWrapCenter>
	);
};

export default ContactUsMolecule;
