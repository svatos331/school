import React from "react";

interface IProduct {
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

import * as ST from "./styled";
import Card from "../../UI_KIT/Molecules/Card";
import Preloader from "../../UI_KIT/Atoms/Preloader";

const Showcase = ({ data, isLoading }: any) => {

	if(isLoading) return <Preloader />;

	return (
    <ST.Showcase>
      <ST.ShowcaseContainer>
        {data?.products.map((card: IProduct) => (
          <Card item={ card } key={card.id} />
        ))}
      </ST.ShowcaseContainer>
    </ST.Showcase>
  );
};

export default Showcase;
