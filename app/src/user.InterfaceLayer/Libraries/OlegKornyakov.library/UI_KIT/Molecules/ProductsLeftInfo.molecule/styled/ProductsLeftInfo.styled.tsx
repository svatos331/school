import styled from "styled-components";

export const ProductsLeftStyledWrap = styled.div<{imgsrc: string}>`
	display: flex;
	justify-content: center;
    align-items: center;
	height: 50vw;
	width: 50vw;
	background-repeat: no-repeat;
	background-size: cover;
	background-image: url('${({ imgsrc }) => (imgsrc)}');
`;
