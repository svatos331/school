import React from "react";

import { useGetTodoQuery } from "../../../../business.InterfaceLayer/store/shared/entities/svyatoslavZhilin.entities/todo.entity/redux/api";

const Component1 = () => {
	const { data } = useGetTodoQuery({ authToken: "", params: { id: "1" } });

	// eslint-disable-next-line no-console
	console.log(321, data);

	return (
		<div>
			<div>11</div>
		</div>
	);
};

export default Component1;
