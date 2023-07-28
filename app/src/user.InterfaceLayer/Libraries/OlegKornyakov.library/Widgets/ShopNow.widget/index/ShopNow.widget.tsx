import React from "react";
import { UseQuery } from "@reduxjs/toolkit/dist/query/react/buildHooks";
import { QueryDefinition } from "@reduxjs/toolkit/dist/query";

import { ShopNowModule } from "../modules/ShopNowModule/index/ShopNowModule";
import ShopShortInfoMolecule from "../../../UI_KIT/Molecules/ShopShortInfo.molecule/index/ShopShortInfo.molecule";
import { ShopNowStyled } from "../styled/shopNowWidget.styled";

const ShopNowWidget = ({
	useGetTodoQuery,
}: {
	useGetTodoQuery: UseQuery<QueryDefinition<any, any, any, any>>;
}) => {
	const { data, isLoading } = useGetTodoQuery({
		authToken: "",
		params: { id: "" },
	});

	return (
		<>
			<ShopNowStyled>
				<ShopShortInfoMolecule />
				{!isLoading ? (
					<ShopNowModule ShopNowModuleSrc={{ data }} />
				) : (
					<p>Load...</p>
				)}
			</ShopNowStyled>
		</>
	);
};
export default ShopNowWidget;
