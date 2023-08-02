import styled from "styled-components";

export const ProfuctShortStyledWrap = styled.div<{imgsrc: string}>`
	display: flex;
	height: 25vw;
	width: 25vw;
	background-repeat: no-repeat;
	background-size: cover;
	background-image: url('${({ imgsrc }) => (imgsrc)}');
    align-items: center;
    flex-direction: column;
    justify-content: flex-end;
`;
