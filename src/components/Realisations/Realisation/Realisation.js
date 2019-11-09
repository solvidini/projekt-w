import React from "react";
import { NavLink } from "react-router-dom";

import "./Realisation.scss";

const Realisation = props => {
  return (
    <div className="realisations__item">
      <NavLink to={props.to}>
        <img className="realisations__item__image" src={props.source} alt={props.name} />
        <div className="realisations__item__text">{props.name}</div>
      </NavLink>
    </div>
  );
};

export default Realisation;
