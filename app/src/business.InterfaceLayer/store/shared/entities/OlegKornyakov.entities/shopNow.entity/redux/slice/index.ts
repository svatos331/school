import { createSlice } from "@reduxjs/toolkit";

import reducerPaths from "../../../../../../reducerPaths";

export enum IShopNowEnum {
	header = "header",
	src = "src",
	arrowRight = "arrowRight",
}

export interface IShopNowType {
	[IShopNowEnum.header]: string;
	[IShopNowEnum.src]: string;
	[IShopNowEnum.arrowRight]: boolean;
}

export const initialShopNowState: IShopNowType = {
	[IShopNowEnum.header]: "",
	[IShopNowEnum.src]: "",
	[IShopNowEnum.arrowRight]: true,
};

export const shopNowSlice = createSlice({
	name: reducerPaths.shopNow,
	initialState: initialShopNowState,
	reducers: {
		undefined() {
			return initialShopNowState;
		},
	},
});

export const shopNowActions = shopNowSlice.actions;
export const shopNowReducer = shopNowSlice.reducer;
