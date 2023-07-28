import styled from "styled-components";

const defaultStyles = `width: 50vw;
display: flex;
padding: 80px;
border-left: 1px solid black;
`;

export const AboutUsStyledLeft = styled.div`
	${defaultStyles}
`;
export const AboutUsStyledRight = styled.div`
	${defaultStyles}
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`;
export const AboutUsStyledWrap = styled.div`
	display: flex;
	flex-direction: row;
	height: 581px;
    background-color: white;
`;
