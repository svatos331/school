import React from "react";

import * as ST from "./styled";
import TitleLevel3 from "../../UI_KIT/Atoms/TitleLevel3";
import Button from "../../UI_KIT/Atoms/Button";
import Avatar from "../../UI_KIT/Atoms/Avatar";
import Image from "../../UI_KIT/Atoms/Image";
import avatar from "./avatar.jpg";

const Profile = ({ user }: any) => {
  
	return (
    <ST.Profile>
      <TitleLevel3>Profile</TitleLevel3>
      <Avatar>
        <Image
          width="226"
          height="226"
          src={ user.image ? user.image : avatar }
          objectFit="cover"
        />
      </Avatar>
      <p> { user.firstName } { user.lastName } </p>
      <p> { user.email } </p>
      <Button>
        Logout
      </Button>
    </ST.Profile>
  );
};

export default Profile;
