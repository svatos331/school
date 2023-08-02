import { createSlice } from "@reduxjs/toolkit";
import { LocalStorageMethodEnum, localStorageService } from "general.services/utils/local-storage.service";

// interface ICredentials {
// 	id: number;
// 	username: string;
// 	email: string;
// 	firstName: string;
// 	lastName: string;
// 	gender: string;
// 	image: string;
// 	token: string;
// }

const localData = localStorageService(LocalStorageMethodEnum.GET, { key: "user" });

const initialState = {
	credentials: localData ? JSON.parse(localData) : null,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setCredentials(state, { payload }) {
      // eslint-disable-next-line no-console
      console.log("Slice", payload);
			state.credentials = payload;
      const localData = JSON.stringify(payload);
      localStorageService(LocalStorageMethodEnum.SET, {key: "user", data: localData});
		},

		logOut(state) {
			state.credentials = null;
		},
	},
});

export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;
