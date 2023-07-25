import React, { useState } from "react";
import Title from "user.InterfaceLayer/Libraries/IvanKosteev.library/UI_KIT/Atoms/Title/index";
import CardList from "user.InterfaceLayer/Libraries/IvanKosteev.library/Widgets/CardList/index";
import { useGetAllFishingQuery } from "business.InterfaceLayer/store/shared/entities/ivanKosteev.entities/todo.entity/redux/api";
import { addItem } from "business.InterfaceLayer/store/shared/entities/ivanKosteev.entities/todo.entity/redux/slice/CartSlice";
import { useDispatch } from "react-redux";

import * as ST from "../styled";

const MainComponent = () => {
	const {
		data: products,
		error,
		isLoading,
	} = useGetAllFishingQuery({
		authToken: "",
		params: {
			name: "",
			image: "",
			price: 0,
			category: "",
			desciption: "",
			id: "",
		},
	});

	const dispatch = useDispatch();
	const handleAddToCart = (item: any) => {
		dispatch(addItem(item));
	};

	const [selectedCategory, setSelectedCategory] = useState("Все");

	const handleCategoryClick = (category: string) => {
		setSelectedCategory(category);
	};

	const filteredProducts =
		selectedCategory === "Все"
			? products
			: products?.filter(
					(product: any) => product.category === selectedCategory
			  );

	return (
		<ST.container>
			<ST.div>
				<Title title="Каталог" />
				<CardList
					error={error}
					isLoading={isLoading}
					handleAddToCart={handleAddToCart}
					handleCategoryClick={handleCategoryClick}
					filteredProducts={filteredProducts}
					selectedCategory={selectedCategory}
				/>
			</ST.div>
		</ST.container>
	);
};

export default MainComponent;
