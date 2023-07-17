import TwoLinks from "../../../UI_KIT/Molecules/TwoLinks.molecule/index/twoLinks.molecule";
import "../styled/headerWidget.widget.css"
const HeaderWidget = () => {
	// eslint-disable-next-line no-console
	const twoLinks = [
		{
			FirstLink: { src: "shop", name: "Shop" },
			SecondLink: { src: "Contact", name: "Contact" },
		},
		{
			FirstLink: { src: "sing in", name: "Sing In" },
			SecondLink: { src: "cart", name: "Cart" },
		},
	];
	return (
		<header className="header">
			<TwoLinks TwoLinks={twoLinks[0]} />
			<TwoLinks TwoLinks={twoLinks[1]} />
		</header>
	);
};

export default HeaderWidget;
