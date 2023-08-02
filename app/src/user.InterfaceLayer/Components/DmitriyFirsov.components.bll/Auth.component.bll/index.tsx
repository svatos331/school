import React, { useState } from "react";
import { useAppDispatch } from "business.InterfaceLayer/store/services/hooks/redux";
import { useLoginMutation } from "business.InterfaceLayer/store/shared/entities/dmitriyFirsov.entities/redux/api/auth.api";
import { setCredentials } from "business.InterfaceLayer/store/shared/entities/dmitriyFirsov.entities/redux/slice/auth.slice";
import { useLocation, useNavigate } from "react-router-dom";
import Authorization from "user.InterfaceLayer/Libraries/DmitriyFirsov.library/Widgets/Authrization";
// import Preloader from "user.InterfaceLayer/Libraries/DmitriyFirsov.library/UI_KIT/Atoms/Preloader";

const AuthComponent = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const fromPage = location.state?.from?.pathname || "/dmitriyFirsov";
	const dispatch = useAppDispatch();

	const [value , setValue] = useState({
		username: "",
		password: ""
	});

	const [login, ] = useLoginMutation();

	const handleSubmit = async (event: any) => {
		// username: "atuny0",
		// password: "9uQFF1Lh",
		event.preventDefault();
		try {
			const data = await login(value).unwrap();
			// eslint-disable-next-line no-console
			console.log("Submit", data);
			dispatch(setCredentials({...data}));
			navigate(fromPage, { replace: true });
		} catch (error) {
			if(error) {
				// eslint-disable-next-line no-console
				console.log("Error...");
			}
		}
	};

	// if(isLoading) return <Preloader />;
	

	return <Authorization handleSubmit={handleSubmit} value={ value } setValue={ setValue } />;
};

export default AuthComponent;
