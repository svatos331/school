import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { todoApi } from "./shared/entities/svyatoslavZhilin.entities/todo.entity/redux/api";
import { todoReducer } from "./shared/entities/svyatoslavZhilin.entities/todo.entity/redux/slice";
import cartReducer from "./shared/entities/dmitriyFirsov.entities/redux/slice/cart.slice";
import reducerPaths from "./reducerPaths";
import { fakeStoreApi } from "./shared/entities/dmitriyFirsov.entities/redux/api";
import cartSidebarReducer from "./shared/entities/dmitriyFirsov.entities/redux/slice/cartSidebar.slice";
import { authApi } from "./shared/entities/dmitriyFirsov.entities/redux/api/auth.api";
import authReducer from "./shared/entities/dmitriyFirsov.entities/redux/slice/auth.slice";

const allSliceReducersReducer = combineReducers({
	[todoApi.reducerPath]: todoApi.reducer,
	[reducerPaths.todo]: todoReducer,

	[fakeStoreApi.reducerPath]: fakeStoreApi.reducer,
	cart: cartReducer,
	cartSidebar: cartSidebarReducer,
	[authApi.reducerPath]: authApi.reducer,
	auth: authReducer
});

export const store = configureStore({
	reducer: allSliceReducersReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(todoApi.middleware).concat(fakeStoreApi.middleware)
			.concat(authApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
