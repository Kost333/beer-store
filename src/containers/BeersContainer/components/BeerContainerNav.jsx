import React from "react";
import Button from "../../../components/Button/Button";
import Container from "../../../components/Container/Container";
import classes from "./BeerContainerNav.module.css";

const navigationList = [
	{
		name: "ALL",
		id: -1,
	},
	{
		name: "LATEST",
		id: 1,
	},
	{
		name: "FEATURED",
		id: 2,
	},
	{
		name: "SALE",
		id: 3,
	},
];

const BeerContainerNav = ({ activeCategoryId, onChange = () => {} }) => {
	return (
		<div className={classes.beerContainerNavBg}>
			<Container>
				<div className={classes.beerContainerNav}>
					<div className={classes.beerContainerNavBtnContainer}>
						{navigationList.map((category) => (
							<Button
								key={category.id}
								className={`outlet ${classes.beerContainerNavBtn} ${
									activeCategoryId === category.id && "active"
								}`}
								onClick={() => onChange(category.id)}
							>
								{category.name}
							</Button>
						))}
					</div>

					<div>
						<div className={classes.beerContainerNavFilter}>FILTER OPTIONS</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default BeerContainerNav;
