import React from "react";

import * as ST from "./styled";

const Overlay = ({ open, onClick }: any) => (
  <ST.Overlay open={open} onClick={onClick} />
);

export default Overlay;
