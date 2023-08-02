import styled, { keyframes } from "styled-components";
import Colors from "user.InterfaceLayer/Libraries/DmitriyFirsov.library/constants/colors";

const loading = keyframes`
  0% {
    transform: rotate(0turn);
  }
  100% {
    transform: rotate(1turn);
  }
`;

export const Preloader = styled.div`
	position: fixed;
	top: 0;
	left: 0;
  z-index: 999;
  display: grid;
	width: 100%;
	height: 100%;
	background: rgba(85, 85, 85, 0.6);
	&::after {
		place-self: center;
		content: "";
		display: block;
		width: 48px;
		height: 48px;
		border: 4px solid ${ Colors.WHITE };
		border-top-color: ${ Colors.PRIMARY_FONT_COLOR };
		border-radius: 50%;
		animation: ${ loading } 0.8s ease-out infinite;
	}
`;
