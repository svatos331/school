import styled from "styled-components";

import { IconButton } from "../../Atoms/IconButton/styled";

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Wrapper = styled.span`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 30px;
  width: 100%;
`;

export const Row = styled.div`
  position: relative;
`;

export const Button = styled(IconButton)`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
`;