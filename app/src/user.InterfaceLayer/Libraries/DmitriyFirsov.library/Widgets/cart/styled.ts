import styled from "styled-components";

import Colors from "../../constants/colors";

export const Cart = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: 550px;
  height: 100%;
  padding: 32px;
  transform: ${ props => props.open ? "translateX(0)" : "translateX(100%)" };
  transition: transform 0.3s ease-in-out;
  background: ${ Colors.WHITE };
  display: flex;
  flex-direction: column;
`;

export const CartHeader = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;

export const Heading = styled.span`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 0 auto 0 0;
`;

export const CartGoodsContainer = styled.div`
  display: grid;
  flex: auto;
  overflow-y: auto;
`;

export const CartEmpty = styled.div`
  display: flex;
  justify-content: center;
`;

export const CartList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  margin: 50px 0 30px 0;
`;

export const CartTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const CartFooter = styled.div`
  justify-self: center;
`;