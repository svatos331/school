import { styled } from "styled-components";

import { Button } from "../../UI_KIT/Atoms/Button/styled";

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
`;

export const CardHeader = styled.div`
  grid-column: 1 / -1;
`;

export const ButtonContent = styled.span`
  margin-left: 10px;
`;

export const Col = styled.div`
  grid-column: span 6;
  place-self: center;
`;

export const DetailCard = styled.div`
  max-width: 408px;
`;

export const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 28px 0;
`;

export const DetailButton = styled(Button)`
  width: 100%;
  margin-bottom: 50px;
`;
