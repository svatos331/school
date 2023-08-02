import React, { useState } from "react";

import * as ST from "./styled";
import TextField from "../../Atoms/TextField";
import Button from "../../Atoms/Button";
import { ReactComponent as CrossedEye } from "../../../assets/icons/crossed_eye.svg";
import { ReactComponent as Eye } from "../../../assets/icons/eye.svg";

const AuthForm = ({ value, setValue, handleSubmit }: any) => {
  const [isShow, setIsShow] = useState("password");

  function handleType(event: any) {
    event.stopPropagation();
    setIsShow(
      isShow === "text" ? "password" : "text"
    );
  }

	return (
		<ST.AuthForm onSubmit={ handleSubmit }>
			<ST.Wrapper>
				<TextField
					placeholder="Your E-Mail"
					onChange={ (event: any) => {
            setValue({...value, username: event.target.value});
          } }
					value={value.username}
					type="text"
				/>
				<ST.Row>
					<TextField
						type={ isShow }
						placeholder="Password"
						value={value.password}
						onChange={(event: any) => {
							setValue({ ...value, password: event.target.value });
						}}
					/>
          <ST.Button
            onClick={ handleType }
            type="button"
          >
            {isShow === "text" ? (
              <Eye />
            ) : <CrossedEye />}
          </ST.Button>
				</ST.Row>
			</ST.Wrapper>

			<Button>Log-in</Button>
		</ST.AuthForm>
	);
};

export default AuthForm;
