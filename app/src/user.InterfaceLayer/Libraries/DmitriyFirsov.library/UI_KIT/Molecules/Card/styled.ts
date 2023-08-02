import styled from "styled-components";

import { Typography } from "../../Atoms/Typography/styled";
import { IconButton } from "../../Atoms/IconButton/styled";

export const CardTitle = styled(Typography)`
  font-weight: 500;
  margin-bottom: auto;
  transition: all 0.3s ease-in-out;
`;

export const CardFavorite = styled(IconButton)`
  padding: 1px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`;

export const Card = styled.article`
  position: relative;
  border: 1px solid transparent;
  transition: all 0.3s ease-in-out;
  &:hover {
    ${ CardTitle } {
      text-decoration: underline;
    }
    ${ CardFavorite } {
      opacity: 1;
    }
    border-color: #000;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 16px;
`;

export const CardWrapperImg = styled.div`
  margin-bottom: 20px;
`;

export const CardContent = styled.div`
  flex: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
