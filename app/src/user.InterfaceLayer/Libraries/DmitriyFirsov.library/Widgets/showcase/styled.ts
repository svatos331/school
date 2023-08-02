import styled from "styled-components";

import Container from "../../UI_KIT/Atoms/Container";

export const Showcase = styled.div`
  padding: 40px 0;
`;

export const ShowcaseContainer = styled(Container)`
  --col: 4;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  gap: 20px;
`;