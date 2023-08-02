import styled from "styled-components";

export const Image = styled.img<{
  objectFit?: string,
  maxW?: string
}>`
  display: flex;
  object-fit: ${ ({ objectFit }) => objectFit };
  max-width: ${ ({ maxW }) => maxW };
`;
