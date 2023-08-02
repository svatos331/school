import React, { FC, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Portal from "user.InterfaceLayer/Components/general.components/ModalWindows/services/Portal";
import { useAppDispatch, useAppSelector } from "business.InterfaceLayer/store/services/hooks/redux";
import { closeCart, openCart } from "business.InterfaceLayer/store/shared/entities/dmitriyFirsov.entities/redux/slice/cartSidebar.slice";
import dmitriyFirsovRoutesPaths from "user.InterfaceLayer/router/routes/dmitriyFirsov.route/dmitriyFirsov.routesPaths";
import SearchComponent from "user.InterfaceLayer/Components/DmitriyFirsov.components.bll/Search.component.bll";

import * as ST from "./styled";
import Nav from "./modules/Nav";
import Typography from "../../UI_KIT/Atoms/Typography";
import IconButton from "../../UI_KIT/Atoms/IconButton";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as ShoppingCart } from "../../assets/icons/cart.svg";
import { ReactComponent as PersonIcon } from "../../assets/icons/person.svg";
import Cart from "../cart";

interface IStyles {
	position: string;
	color: string;
}

const Header: FC = () => {
	const { t, i18n } = useTranslation();

	const location = useLocation();
	const dispatch = useAppDispatch();

	useEffect(() => {
		if(location.pathname === "/dmitriyFirsov") {
			setStyles({position: "absolute", color: "#FFF"});
		} else {
			setStyles({position: "static", color: "#000"});
		}
	}, [location]);

	const [isVisible, setIsVisible] = useState(false);
	const [styles, setStyles] = useState<IStyles>({
		position: "",
		color: ""
	});

	const handleClose = () => dispatch(closeCart());
	const onClose = () => setIsVisible(false);

	const goods = useAppSelector(state => state.cart.goods);

	return (
		<ST.Header position={ styles.position } color={ styles.color }>
			<ST.HeaderContainer>
				<Nav />
				<Typography
					fontSize="2rem"
				>
					{t("home.logo")}
				</Typography>
				<ST.HeaderActions>
					<div>
						<IconButton onClick={() => setIsVisible(true)}>
							<SearchIcon />
						</IconButton>
						<SearchComponent onClose={ onClose } isVisible={isVisible} />
					</div>
					<React.Fragment>
						<IconButton onClick={() => dispatch(openCart()) }>
							<ST.HeaderButtonContent
								data-goods={ goods.length }
								isVisible={ goods.length ? true : false }
							>
								<ShoppingCart />
							</ST.HeaderButtonContent>
						</IconButton>

						<Portal>
							<Cart
								onClose={ handleClose }
							/>
						</Portal>

					</React.Fragment>
					<Link to={ dmitriyFirsovRoutesPaths.PROFILE }>
						<PersonIcon />
					</Link>
					<ST.Locales>
						<ST.LocalesButton>
							{ t("home.locales") }
						</ST.LocalesButton>
						<ST.FlyoutMenu>
							<ST.FlyoutMenuList>
								<ST.FlyoutMenuItem>
									<ST.LocalesButton onClick={() => i18n.changeLanguage("ru")}>
										Русский
									</ST.LocalesButton>
								</ST.FlyoutMenuItem>
								<ST.FlyoutMenuItem>
									<ST.LocalesButton onClick={() => i18n.changeLanguage("en")}>
										English
									</ST.LocalesButton>
								</ST.FlyoutMenuItem>
							</ST.FlyoutMenuList>
						</ST.FlyoutMenu>
					</ST.Locales>
				</ST.HeaderActions>
			</ST.HeaderContainer>
		</ST.Header>
	);
};

export default Header;
