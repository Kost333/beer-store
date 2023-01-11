import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cartSlice";
import { changeLayoutText, dropLayoutText } from "../../store/layout/layoutSlice";
import Button from "../Button/Button";
import classes from "./BeerPreview.module.css";

const BeerPreview = ({ data }) => {
	const dispatch = useDispatch();
	const items = useSelector((state) => state.cart.items);

	const existingItemsCount = items.find((item) => item.id === data.id)?.count;

	const handleAddToCart = () => {
		dispatch(addItemToCart(data));
	};

	useEffect(() => {
		dispatch(changeLayoutText(data.name, data.title));

		return () => {
			dispatch(dropLayoutText());
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className={classes.root}>
			<div className={classes.beerPreviewImage}>
				<img src={`/images/${data.image}`} alt="beer" />
			</div>

			<div className={classes.beerPreviewInfoBox}>
				<span className={classes.beerPreviewInfoText}>{`${data.size}ml ${data.percentage}%`}</span>

				<h2 className={classes.beerPreviewTitle}>{data.name}</h2>

				<p className={classes.beerPreviewDescription}>{data.description}</p>
				<span className={classes.beerPreviewPrice}>{`$${data.price}`}</span>

				<div className={classes.beerPreviewActionsSection}>
					{existingItemsCount > 0 && (
						<span className={classes.beerPreviewExistingItemsCount}>{existingItemsCount}</span>
					)}

					<Button className="primary" onClick={handleAddToCart}>
						ADD TO CART
					</Button>
				</div>
			</div>
		</div>
	);
};

export default BeerPreview;
