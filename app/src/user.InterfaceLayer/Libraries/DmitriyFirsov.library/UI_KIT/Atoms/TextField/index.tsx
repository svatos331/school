import React, { FC } from "react";

import * as ST from "./styled";
// import { IProps } from "./type";

const TextField: FC<any> = ({ props, placeholder, type, onChange }) => {
	return (
    <ST.TextField
      onChange={onChange}
      type={ type }
      { ...props }
      placeholder={placeholder}
    />
  );
};

export default TextField;
