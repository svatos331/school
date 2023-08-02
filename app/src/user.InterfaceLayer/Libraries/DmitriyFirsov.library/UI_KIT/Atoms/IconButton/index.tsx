import React, { FC } from "react";

import { Props } from "./type";
import * as ST from "./styled";

const IconButton: FC<Props> = ({ children, onClick, props }) => {
  
  return (
    <ST.IconButton
      onClick={onClick}
      { ...props }
    > 
      { children }
    </ST.IconButton>
  );
};

export default IconButton;