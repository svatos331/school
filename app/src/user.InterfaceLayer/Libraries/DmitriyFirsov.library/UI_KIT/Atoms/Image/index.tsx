import React from "react";

import * as ST from "./styled";

const Image = ({ ...props }: any) => {
	return (
    <ST.Image
      { ...props }
    />
  );
};

export default Image;
