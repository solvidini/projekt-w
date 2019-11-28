import React from "react";

import "./OfferItem.scss";

const OfferItem = props => {
  return (
    <div className="offer__item" onClick={props.clicked}>
      <img className="offer__item__image" src={props.source} alt={props.name} />
      <div className="offer__item__text">{props.name}</div>
    </div>
  );
};

export default OfferItem;
