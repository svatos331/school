import { useAppSelector } from "business.InterfaceLayer/store/services/hooks/redux";
import React from "react";
// import { useLoginMutation } from "business.InterfaceLayer/store/shared/entities/dmitriyFirsov.entities/redux/api/auth.api";
import Profile from "user.InterfaceLayer/Libraries/DmitriyFirsov.library/Widgets/profile";

const ProfileComponent = () => {

	const user = useAppSelector(state => state.auth.credentials);

	return <Profile user={user} />;
};

export default ProfileComponent;
