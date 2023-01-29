import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavigationItem.scss';

const NavigationItem = ({ link, children }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? 'navigation-item__link navigation-item--active' : 'navigation-item__link'
      }
      to={link}
    >
      {children}
    </NavLink>
  );
};

export default NavigationItem;
