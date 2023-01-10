import React, { useState } from "react";
import { useNavigate } from "react-router";
import Button from "../../components/Button/Button";
import classes from "./BeersContainer.module.css";

const BeersContainer = ({ data }) => {
  const navigate = useNavigate();

  const [showNavigateButton, setShowNavigateButton] = useState(false);

  const navigateToSingleBeer = (id) => {
    navigate(`/beer-preview/${id}`);
  };

  return (
    <div className={classes.container}>
      {data.map((card) => (
        <div
          key={card.id}
          className={classes.cardBox}
          onMouseEnter={() => setShowNavigateButton(card.id)}
          onMouseLeave={() => setShowNavigateButton(false)}
        >
          <div className={classes.cardImage}>
            <img src={`/images/${card.image}`} alt="beer" />
          </div>

          <div className={classes.cardText}>
            <h2 className={classes.cardTextTitle}>{card.name}</h2>
            <p className={classes.cardTextPrice}>${card.price}</p>
          </div>

          <div
            className={`${classes.cardPreview} ${
              showNavigateButton === card.id ? "show" : "hide"
            }`}
          >
            <Button
              onClick={() => navigateToSingleBeer(card.id)}
              className="primary"
            >
              VIEW
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BeersContainer;
