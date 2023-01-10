import React from "react";
import Button from "../Button/Button";
import classes from "./BeerPreview.module.css";

const BeerPreview = ({ data }) => {
  return (
    <div className={classes.root}>
      <div className={classes.beerPreviewImage}>
        <img src={`/images/${data.image}`} alt="beer" />
      </div>

      <div className={classes.beerPreviewInfoBox}>
        <span
          className={classes.beerPreviewInfoText}
        >{`${data.size}ml ${data.percentage}%`}</span>

        <h2 className={classes.beerPreviewTitle}>{data.name}</h2>

        <p className={classes.beerPreviewDescription}>{data.description}</p>
        <span className={classes.beerPreviewPrice}>{`$${data.price}`}</span>

        <Button className={`${classes.beerPreviewPriceBtn} primary`}>
          ADD TO CART
        </Button>
      </div>
    </div>
  );
};

export default BeerPreview;
