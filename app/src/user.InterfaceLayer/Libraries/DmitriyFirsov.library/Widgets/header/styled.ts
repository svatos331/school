import styled from "styled-components";

import Container from "../../UI_KIT/Atoms/Container";
import Colors from "../../constants/colors";
import { IconButton } from "../../UI_KIT/Atoms/IconButton/styled";

export const Header = styled.header<{position?: string, color?: string}>`
  position: ${ props => props.position };
  top: 0;
  left: 0;
  z-index: 9;
  width: 100%;
  padding: 40px 0;
  color: ${ props => props.color };
`;

export const HeaderContainer = styled(Container)`
   display: grid;
   grid-template-columns: 1fr auto 1fr;
   align-items: center;
`;

export const HeaderActions = styled.div`
  justify-self: end;
  display: flex;
  gap: 20px;
`;

export const HeaderButtonContent = styled.span<{ isVisible: boolean }>`
  position: relative;
  &::after {
    position: absolute;
    bottom: 80%;
    left: 80%;
    width: 20px;
    height: 20px;
    display: ${ props => props.isVisible ? "flex" : "none" };
    justify-content: center;
    align-items: center;
    background: ${ Colors.SECONDARY_BG_COLOR };
    border-radius: 50%;
    content: attr(data-goods);
  }
`;

export const FlyoutMenu = styled.div`
  position: absolute;
  right: 0;
  z-index: 9;
  background: ${ Colors.PRIMARY_BG_COLOR };
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`;

export const Locales = styled.div`
  position: relative;
  &:hover ${ FlyoutMenu } {
    opacity: 1;
    pointer-events: all;
  }
`;

export const LocalesButton = styled(IconButton)`
  font-size: 16px;
`;

export const FlyoutMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
`;

export const FlyoutMenuItem = styled.li`
  color: ${ Colors.PRIMARY_FONT_COLOR };
`;