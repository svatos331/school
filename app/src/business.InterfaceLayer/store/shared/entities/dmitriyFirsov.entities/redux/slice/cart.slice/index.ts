import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IProduct {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	rating: {
		rate: number;
		count: number;
	};
	quantity: number
}

type ProductResponse = {
  goods: IProduct[]
};

const initialState: ProductResponse = {
	goods: []
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart(state, action: PayloadAction<IProduct>) {
			state.goods.push({
				...action.payload,
				quantity: 1
			});
		},

    removeFromCart(state, { payload }) {
      state.goods = state.goods
        .filter(item => item.id !== payload);
    },

		incrementQuantity(state, { payload }) {
			const product: any = state.goods
				.find(item => item.id === payload);
			product.quantity++;

		},

		decrementQuantity(state, { payload }) {
			const product: any = state.goods
				.find(item => item.id === payload);
			product.quantity--;
		}
	},
});

export const {
	addToCart,
	removeFromCart,
	incrementQuantity,
	decrementQuantity
} = cartSlice.actions;
export default cartSlice.reducer;