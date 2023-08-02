import styled from "styled-components";
import Colors from "user.InterfaceLayer/Libraries/DmitriyFirsov.library/constants/colors";

export const TextField = styled.input`
	--color: #555;
	font-size: 20px;
	line-height: 110%;
	width: 100%;
	padding: 16px;
	border-radius: 4px;
	border: none;
	background: transparent;
	box-shadow: inset 0 0 0 2px ${Colors.PRIMARY_FONT_COLOR};
	&::-webkit-input-placeholder {
		transition: var(--transition, opacity 0.2s ease);
	}

	&::-moz-placeholder {
		transition: var(--transition);
	}

	&:-moz-placeholder {
		transition: var(--transition);
	}

	&:-ms-input-placeholder {
		transition: var(--transition);
	}

	&:focus::-webkit-input-placeholder {
		opacity: 0;
	}

	&:focus::-moz-placeholder {
		opacity: 0;
	}

	&:focus:-moz-placeholder {
		opacity: 0;
	}

	&:focus:-ms-input-placeholder {
		opacity: 0;
	}
`;
