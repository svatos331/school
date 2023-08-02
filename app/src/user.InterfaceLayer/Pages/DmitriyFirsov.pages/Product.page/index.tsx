import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductQuery } from "business.InterfaceLayer/store/shared/entities/dmitriyFirsov.entities/redux/api";
import DetailCard from "user.InterfaceLayer/Libraries/DmitriyFirsov.library/Widgets/detailCard";
import { Preloader } from "user.InterfaceLayer/Libraries/DmitriyFirsov.library/UI_KIT/Atoms/Preloader/styled";

const ProductPage = () => {
  const { id } = useParams();

  // const state = useAppSelector(state => state);

  const { data, isLoading } = useGetProductQuery<any>(id);

  if(isLoading) return <Preloader />;

	return (
    <>
      <DetailCard item={ data } />
    </>
  );
};

export default ProductPage;
