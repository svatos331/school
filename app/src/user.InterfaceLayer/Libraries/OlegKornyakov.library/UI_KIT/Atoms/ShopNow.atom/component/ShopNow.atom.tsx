// import '../styled/h2.styled.css'
import'../../../../constants/fonts/fonts.constant.css'

import { Link } from 'react-router-dom';
import { rightArrow, leftArrow } from 'user.InterfaceLayer/Libraries/OlegKornyakov.library/assets/icons/Arrows';
const ShopNom = ({arrowRight}:{arrowRight:boolean}) => {
    return <Link to='/LuxeBouquetsPage/fresh-flowers' className="h2"> Shop now{arrowRight? rightArrow: leftArrow}</Link>
};
export default ShopNom