import styled from "styled-components";

export const IconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: color 0.3s ease-out;
  &:hover {
    color: #AC8F78;
  }
  &:disabled {
    pointer-events: none;
    opacity: 0.6;
  }
`;