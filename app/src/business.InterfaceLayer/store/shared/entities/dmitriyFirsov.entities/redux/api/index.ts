import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface IProduct {
	// id: number;
	// title: string;
	// price: number;
	// description: string;
	// category: string;
	// image: string;
	// rating: {
	// 	rate: number;
	// 	count: number;
	// };
	id: number;
	title: string;
	description: string;
	price: 549;
	discountPercentage: 12.96;
	rating: 4.69;
	stock: 94;
	brand: string;
	category: string;
	thumbnail: string;
	images: string[];
}

type ProductResponse = IProduct[];

export const fakeStoreApi = createApi({
	reducerPath: "fake.store/api",
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.REACT_APP_DUMMY_JSON_API,
	}),

	endpoints: (build) => ({
		getAllProducts: build.query<ProductResponse, void>({
			query: () => "products/category/laptops",
		}),

		getProduct: build.query<IProduct, any>({
			query: (id) => `products/${id}`,
		}),

		searchProducts: build.query<ProductResponse, any>({
			query: searchQuery => `products/search?q=${ searchQuery }`
		})
	}),
});

export const {
	useGetAllProductsQuery,
	useGetProductQuery,
	useSearchProductsQuery
} = fakeStoreApi;
