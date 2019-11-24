import React from "react";
import { NavLink } from "react-router-dom";

import "./OfferItem.scss";

const OfferItem = props => {
  return (
    <div className="offer__item">
        <NavLink to={props.to}>
          <div className="offer__item__example">
            Przykład&nbsp;projektu
          </div>
        </NavLink>
        <img className="offer__item__image" src={props.source} alt={props.name} />
        <div className="offer__item__text">{props.name}</div>
    </div>
  );
};

export default OfferItem;
