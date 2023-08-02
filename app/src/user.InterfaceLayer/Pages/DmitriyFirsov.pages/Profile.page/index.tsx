import React from "react";
import ProfileComponent from "user.InterfaceLayer/Components/DmitriyFirsov.components.bll/Profile.component.bll";
import TitleLevel2 from "user.InterfaceLayer/Libraries/DmitriyFirsov.library/UI_KIT/Atoms/TitleLivel2";

import * as ST from "./styled";

const ProfilePage = () => {
	return (
    <ST.Row>
      <TitleLevel2>History of orders</TitleLevel2>
      <ProfileComponent />
    </ST.Row>
  );
};

export default ProfilePage;
