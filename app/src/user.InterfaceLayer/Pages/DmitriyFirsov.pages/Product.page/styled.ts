import styled from "styled-components";

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 12px;
`;

export const Col = styled.div`
  grid-column: span 6;
  place-self: center;
`;