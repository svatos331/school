import React from "react";
import { Link } from "react-router-dom";

const AppLink = ({ children, to }: any) => {
	return (
    <Link to={ to }>
      { children }
    </Link>
  );
};

export default AppLink;
