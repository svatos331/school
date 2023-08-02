import styled from "styled-components";

import Colors from "../../constants/colors";
import { Typography } from "../../UI_KIT/Atoms/Typography/styled";

export const Authorization = styled.div`
  min-height: 100vh;
  display: grid;
  background: ${ Colors.PRIMARY_BG_COLOR };
`;

export const Content = styled.div`
  place-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  max-width: 488px;
`;

export const Text = styled(Typography)`
  text-align: center;
  margin-bottom: 40px;
`;