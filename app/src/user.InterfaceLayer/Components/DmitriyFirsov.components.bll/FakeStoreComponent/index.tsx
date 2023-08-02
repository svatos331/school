import { cloneElement } from "react";
import { useGetAllProductsQuery } from "business.InterfaceLayer/store/shared/entities/dmitriyFirsov.entities/redux/api";


const FakeStoreCompoent = ({ children }: any) => {

  const { data, isLoading } = useGetAllProductsQuery();


	return cloneElement(children, { data, isLoading });
};

export default FakeStoreCompoent;
