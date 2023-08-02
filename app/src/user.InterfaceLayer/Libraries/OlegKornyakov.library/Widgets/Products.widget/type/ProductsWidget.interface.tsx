import { UseQuery } from "@reduxjs/toolkit/dist/query/react/buildHooks";
import { QueryDefinition } from "@reduxjs/toolkit/dist/query";
export interface IProductsWidget {
	useGetTodoQuery: UseQuery<QueryDefinition<any, any, any, any>>;
	id: string | undefined;
}
