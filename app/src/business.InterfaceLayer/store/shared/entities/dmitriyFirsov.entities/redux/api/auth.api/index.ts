import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
	reducerPath: "userApi",
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.REACT_APP_DUMMY_JSON_API
	}),

	endpoints: (build) => ({
		login: build.mutation({
			query: credentials => ({
				url: "auth/login",
				method: "POST",
				body: credentials,
			}),
		}),
	}),
});

export const { useLoginMutation } = authApi;
