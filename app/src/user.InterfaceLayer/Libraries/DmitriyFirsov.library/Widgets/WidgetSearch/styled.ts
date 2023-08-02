import styled from "styled-components";

import Colors from "../../constants/colors";
import { TextField } from "../../UI_KIT/Atoms/TextField/styled";
import { IconButton } from "../../UI_KIT/Atoms/IconButton/styled";

export const Search = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 55;
  width: 100%;
  height: 80vh;
  background: ${ Colors.PRIMARY_BG_COLOR };
  color: ${ Colors.PRIMARY_FONT_COLOR };
  transform: ${ props => props.open ? "translateY(0)" : "translateY(-100%)" };
  transition: transform 0.3s ease-in-out;
`;

export const Overlay = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 44;
  background: rgba(0, 0, 0, 0.6);
  opacity: ${ props => props.open ? "1" : "0" };
  transition: opacity 0.3s ease-in-out;
  pointer-events: ${ props => props.open ? "all" : "none" };
  
`;

export const SearchForm = styled.form`
  width: 100%;
  padding: 48px 0;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
`;

export const SearchFormInput = styled(TextField)`
  padding-left: 40px;
`;

export const SearchFormLabel = styled.label`
  position: absolute;
  display: flex;
  left: 10px;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const SearchReset = styled(IconButton)`
  position: absolute;
  right: 10px;
  height: 100%;
`;

export const Content = styled.div`
  padding: 0 0 40px 0;
  overflow-y: auto;
`;

export const NotFound = styled.div`
  display: flex;
  justify-content: center;
`;