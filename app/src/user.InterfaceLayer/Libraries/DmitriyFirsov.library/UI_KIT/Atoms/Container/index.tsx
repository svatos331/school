import React, { FC } from "react";

import * as ST from "./styled";

const Container: FC<any> = ({ children, ...props }) => {
	return <ST.Container { ...props }>
    { children }
  </ST.Container>;
};

export default Container;
