import styled from "styled-components";
import Colors from "user.InterfaceLayer/Libraries/DmitriyFirsov.library/constants/colors";

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  padding: 16px 50px;
  color: ${ Colors.WHITE };
  background: ${ Colors.PRIMARY_FONT_COLOR };
  border: 1px solid ${ Colors.PRIMARY_FONT_COLOR };
  transition: all 0.3s ease-in-out;
  text-transform: uppercase;
  @media (any-hover: hover) {
   &:hover {
    background: ${ Colors.WHITE };
    border-color: ${ Colors.PRIMARY_FONT_COLOR };
    color: ${ Colors.PRIMARY_FONT_COLOR };
   }
  }
`;