import React from "react";

import { BookACallButtonAtomStyled } from "./styled/bookACallButtonAtom.styled";

const BookACallButtonAtom = ({ buttonSrc }: { buttonSrc: string }) => {
	return <BookACallButtonAtomStyled>{buttonSrc}</BookACallButtonAtomStyled>;
};
export default BookACallButtonAtom;
