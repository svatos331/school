import { createSlice } from "@reduxjs/toolkit";

interface CartState {
	items: CartItem[];
	total: number;
}

interface CartItem {
	id: string;
	quantity: number;
	name: string;
	price: number;
	image: string;
}

const initialState: CartState = {
	items: [],
	total: 0,
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItem: (state, action) => {
			const { id, name, price, image } = action.payload;
			const existingItem = state.items.find((item) => item.id === id);
			if (existingItem) {
				existingItem.quantity += 1;
			} else {
				const newItem = { id, name, price, image, quantity: 1 };
				state.items.push(newItem);
			}
			state.total += price;
		},
		removeItem: (state, action) => {
			const { id, price, quantity } = action.payload;
			state.items = state.items.filter((item) => item.id !== id);
			state.total -= price * quantity;
		},
		updateQuantity: (state, action) => {
			const { id, quantity } = action.payload;
			const item = state.items.find((item) => item.id === id);
			if (item) {
				const priceDiff = item.price * (quantity - item.quantity);
				item.quantity = quantity;
				state.total += priceDiff;
			}
		},
		clearCart: (state) => {
			state.items = [];
			state.total = 0;
		},
		updateTotal(state) {
			state.total = state.items.reduce(
				(acc, item) => acc + item.price * item.quantity,
				0
			);
		},
	},
});

export const { addItem, removeItem, updateQuantity, clearCart, updateTotal } =
	cartSlice.actions;
export const cartReducer = cartSlice.reducer;
