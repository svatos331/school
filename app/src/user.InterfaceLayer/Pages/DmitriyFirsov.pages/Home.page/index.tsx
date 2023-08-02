import React from "react";
import FakeStoreCompoent from "user.InterfaceLayer/Components/DmitriyFirsov.components.bll/FakeStoreComponent";
import MainCarousel from "user.InterfaceLayer/Libraries/DmitriyFirsov.library/Widgets/main.carusel";
import Showcase from "user.InterfaceLayer/Libraries/DmitriyFirsov.library/Widgets/showcase";

const index = () => {
	return (
    <React.Fragment>
      <MainCarousel />
      <FakeStoreCompoent>
        <Showcase />
      </FakeStoreCompoent>
    </React.Fragment>
  );
};

export default index;
