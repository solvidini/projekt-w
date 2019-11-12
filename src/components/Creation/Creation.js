import React from "react";
import { NavLink } from "react-router-dom";

import "./Creation.scss";

const Creation = props => {
  return (
    <div className="creations__item">
      <NavLink to={props.to}>
        <img className="creations__item__image" src={props.source} alt={props.name} />
        <div className="creations__item__text">{props.name}</div>
      </NavLink>
    </div>
  );
};

export default Creation;
