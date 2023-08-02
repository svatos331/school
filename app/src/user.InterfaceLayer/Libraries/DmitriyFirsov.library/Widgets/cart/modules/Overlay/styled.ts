import styled from "styled-components";

export const Overlay = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  opacity: ${ props => props.open ? "1" : "0" };
  pointer-events: ${ props => props.open ? "all" : "none" };
  transition: opacity 0.3s ease-in-out;
`;
