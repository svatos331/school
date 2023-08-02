import React, { FC } from "react";

import { IProps } from "./type";
import * as ST from "./styled";

const Button: FC<IProps> = ({ children, onClick }) => {
	return (
    <ST.Button onClick={ onClick }>
      { children }
    </ST.Button>
  );
};

export default Button;
