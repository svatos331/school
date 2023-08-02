import styled from "styled-components";

const defaultStyles = `
display: flex;
border-left: 1px solid black;
`;
const deafaultCell = `	
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 80px;
border-bottom: 1px solid black;`;

export const WhyChooseUsStyledLeft = styled.div`
	${defaultStyles}
	width: calc(50vw - 80px);
	padding-left: 80px;
	padding-top: 80px;
	border-top: 1px solid black;
	border-bottom: 1px solid black;
`;
export const WhyChooseUsStyledRight = styled.div`
	${defaultStyles}
	width: 50vw;
	flex-direction: column;
	justify-content: strech;
	align-items: flex-start;
	border-top: 1px solid black;
`;
export const WhyChooseUsStyledRightCell288 = styled.div`
	${deafaultCell}
	height: 288px;
`;
export const WhyChooseUsStyledRightCell322 = styled.div`
	${deafaultCell}
	height: 322px;
`;
export const WhyChooseUsStyledWrap = styled.div`
	display: flex;
	flex-direction: row;
	background-color: white;
`;

export const HeightWrap322 = styled.div`
	display: flex;
`;
export const HeightWrap288 = styled.div`
	display: flex;
`;
