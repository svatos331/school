import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import reducerPaths from "../../../../../../reducerPaths";
import url from "../../services/url";
import httpMethods from "../../../../../http/httpMethods";
import { todoFromDtoServiceArray } from "../../services/dto/from.dto";
import validateStatus from "../../../../../../services/utils/validateStatus";

export interface Props {
	authToken: string;
	params: { id: string | undefined };
}

export const ProductsApi = createApi({
	reducerPath: `${reducerPaths.categories}/api`,
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.REACT_APP_API_URL_OLEG_KORNYAKOV_LOCAL_JSON,
	}),
	tagTypes: [`${reducerPaths.categories}TAG`],

	endpoints: (build) => ({
		getTodo: build.query<any, Props>({
			query: ({ authToken, params }) => ({
				url: url.categories,
				method: httpMethods.GET,
				headers: {
					Authorization: `Bearer ${authToken}`,
				},
				params: params,
				validateStatus,
			}),
			providesTags: [`${reducerPaths.categories}TAG`],
			transformResponse: todoFromDtoServiceArray,
		}),
		// postTodo: build.mutation<any, Props>({
		// 	query: ({ authToken, params }) => ({
		// 		url: url.shopNow,
		// 		method: httpMethods.POST,
		// 		headers: {
		// 			Authorization: `Bearer ${authToken}`,
		// 		},
		// 		params: params,
		// 		validateStatus,
		// 	}),
		// 	invalidatesTags: [`${reducerPaths.shopNow}TAG`],
		// 	transformResponse: todoFromDtoServiceArray,
		// }),
	}),
});

export const { useGetTodoQuery } = ProductsApi;
