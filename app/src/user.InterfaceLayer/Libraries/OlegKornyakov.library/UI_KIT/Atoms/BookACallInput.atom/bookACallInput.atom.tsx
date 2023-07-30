import React from "react";

import { BookACallInputAtomStyled } from "./styled/bookACallInputAtom.styled";

const BookACallInputAtom = ({srcValue}:{srcValue:string}) => {
	return (
		<BookACallInputAtomStyled
			type="text"
			value={srcValue}
		/>
	);
};
export default BookACallInputAtom;
