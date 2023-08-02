import styled from "styled-components";
import Colors from "user.InterfaceLayer/Libraries/DmitriyFirsov.library/constants/colors";

import { IconButton } from "../../Atoms/IconButton/styled";

export const ProductCounter = styled.div`
  display: flex;
  align-items: center;
  border-radius: 66px;
  background: ${ Colors.PRIMARY_FONT_COLOR };
`;

export const CounterButton = styled(IconButton)`
  width: 46px;
  height: 46px;
  font-size: 24px;
  color: ${ Colors.WHITE };
  &:disabled {
    pointer-events: none;
  }
`;

export const CounterInput = styled.input`
  font-size: 16px;
  width: 20px;
  border: none;
  background: transparent;
  color: ${ Colors.WHITE };
  text-align: center;
`;