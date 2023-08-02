import React from "react";
import { useTranslation } from "react-i18next";

import * as ST from "./styled";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import Container from "../../UI_KIT/Atoms/Container";
import Card from "../../UI_KIT/Molecules/Card";
import { Showcase } from "../../UI_KIT/Molecules/Showcase.molecule/styled";
import { ReactComponent as Cross } from "../../assets/icons/cross.svg";
import Button from "../../UI_KIT/Atoms/Button";
import Typography from "../../UI_KIT/Atoms/Typography";

const WidgetSearch = ({
	isVisible,
	data,
	setSearchQuery,
	searchQuery,
	onClose,
}: any) => {
	const reset = (event: any) => {
		event.stopPropagation();
		setSearchQuery("");
	};

	const { t } = useTranslation();

	return (
		<React.Fragment>
			<ST.Search open={isVisible}>
				<Container>
					<ST.SearchForm>
						<ST.Wrapper>
							<ST.SearchFormLabel htmlFor="search-input">
								<SearchIcon />
							</ST.SearchFormLabel>

							<ST.SearchFormInput
								id="search-input"
								placeholder={ t("search.placeholder") }
								autoComplete="off"
								onChange={(event: any) => setSearchQuery(event.target.value)}
								value={searchQuery}
							/>

							{searchQuery ? (
								<ST.SearchReset onClick={reset}>
									<Cross />
								</ST.SearchReset>
							) : null}
						</ST.Wrapper>
					</ST.SearchForm>

					<ST.Content>
						{data.products.length ? (
							<React.Fragment>
								<Showcase>
									{data.products.map((item: any) => (
										<Card
											item={item}
											key={item.id}
										/>
									))}
								</Showcase>
								<Button>See all catalog</Button>
							</React.Fragment>
						) : (
							<Typography>Nothing was found for your query</Typography>
						)}
					</ST.Content>
				</Container>
			</ST.Search>
			<ST.Overlay
				open={isVisible}
				onClick={onClose}
			/>
		</React.Fragment>
	);
};

export default WidgetSearch;
