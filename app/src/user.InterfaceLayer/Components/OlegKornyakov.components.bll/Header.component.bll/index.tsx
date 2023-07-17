import ShopNom from "user.InterfaceLayer/Libraries/OlegKornyakov.library/UI_KIT/Atoms/ShopNow.atom/component/ShopNow.atom";
import HeaderWidget from "user.InterfaceLayer/Libraries/OlegKornyakov.library/Widgets/Header.widget/index";

const HeaderComponent = () => {
	return (
		<div>
			<HeaderWidget />
			{/* temp--open*/}
			<ShopNom arrowRight={true} /> 
			<ShopNom arrowRight={false} />
			{/* temp--close */}
		</div>
	);
};

export default HeaderComponent;
