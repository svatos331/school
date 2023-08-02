import styled from "styled-components";

export const CartItem = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 16px;
`;

export const CartItemContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 15px;
`;

export const CartItemRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:first-child {
    align-items: flex-start;
  }
`;