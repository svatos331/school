import styled from "styled-components";

export const Typography = styled.p<{color?: any, fontSize?: any}>`
  font-size: ${ props => props.fontSize };
  color: ${ props => props.color }
`;