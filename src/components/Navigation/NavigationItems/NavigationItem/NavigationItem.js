import React from "react";
import { NavLink } from "react-router-dom";

import "./NavigationItem.scss";

const NavigationItem = props => {
  return (
    <NavLink
      className="navigation-item__link"
      to={props.link}
      exact={props.exact}
      activeClassName="navigation-item--active"
    >
      {props.children}
    </NavLink>
  );
};

export default NavigationItem;
