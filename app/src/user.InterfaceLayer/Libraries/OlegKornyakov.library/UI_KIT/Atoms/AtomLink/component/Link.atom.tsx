import { ILink } from "../type/linkAtom.interface";
import { Link } from "react-router-dom";
import '../styled/link.atom.css'
import'../../../../constants/fonts/fonts.constant.css'
const AtomLink = ({ atomlinkSource }: { atomlinkSource: ILink }) => (
	<Link className="link" to={`/LuxeBouquetsPage/${atomlinkSource.src}`}>{atomlinkSource.name}</Link>
);

export default AtomLink;
