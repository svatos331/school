import React from "react";

import * as ST from "./styled";
import TitleLevel3 from "../../UI_KIT/Atoms/TitleLevel3";
import AuthForm from "../../UI_KIT/Molecules/AuthForm";

const Authorization = ({ value, setValue, handleSubmit }: any) => {
	return (
    <ST.Authorization>
      <ST.Content>
        <TitleLevel3>Authorization</TitleLevel3>
        <ST.Text>
          Please enter your username and password from your account to log in, or register
        </ST.Text>
        <AuthForm handleSubmit={handleSubmit} value={value} setValue={setValue} />
      </ST.Content>
    </ST.Authorization>
  );
};

export default Authorization;
