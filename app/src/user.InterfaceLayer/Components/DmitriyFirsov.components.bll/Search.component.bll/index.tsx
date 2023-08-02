import useDebounce from "business.InterfaceLayer/store/services/hooks/debounce";
import { useSearchProductsQuery } from "business.InterfaceLayer/store/shared/entities/dmitriyFirsov.entities/redux/api";
import React, { useState } from "react";
import WidgetSearch from "user.InterfaceLayer/Libraries/DmitriyFirsov.library/Widgets/WidgetSearch";

const SearchComponent = ({ isVisible, onClose }: any) => {

  const [searchQuery, setSearchQuery] = useState<string>("");
  const debouncedSearchValue = useDebounce(searchQuery, 1000);

  const { data, isLoading } = useSearchProductsQuery(
    debouncedSearchValue ? debouncedSearchValue : null
  );

  if(isLoading) return <p>Loading</p>;

	return <WidgetSearch
    isVisible={ isVisible }
    data={ data }
    isLoading={isLoading}
    setSearchQuery={ setSearchQuery }
    searchQuery={ searchQuery }
    onClose={ onClose }
  />;
};

export default SearchComponent;
