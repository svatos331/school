import AtomLink from "user.InterfaceLayer/Libraries/OlegKornyakov.library/UI_KIT/Atoms/AtomLink/component/Link.atom";
import { I2Links } from "../type/twoLinks.interface";
import "../styled/twoLinks.molecule.css";

const TwoLinks = ({ TwoLinks }: { TwoLinks: I2Links }) => (
	<table className="links">
		<tr>
			<th>
				<AtomLink atomlinkSource={TwoLinks.FirstLink} />
			</th>

			<th>
				<AtomLink atomlinkSource={TwoLinks.SecondLink} />
			</th>
		</tr>
	</table>
);

export default TwoLinks;
