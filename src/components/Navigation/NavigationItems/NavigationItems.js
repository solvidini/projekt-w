import React from "react";

import "./NavigationItems.scss";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = props => (
  <ul className="navigation-items">
    <NavigationItem exact link="/">
      Home
    </NavigationItem>
    <NavigationItem exact link="lab">Pracownia</NavigationItem>
    <li className="navigation-dropdown">
      <span>Projekty</span>
      <div className="navigation-dropdown__content">
        <NavigationItem exact link="projects">Projekty</NavigationItem>
        <NavigationItem exact link="projects-premium">
          Projekty Premium
        </NavigationItem>
      </div>
    </li>
    <li className="navigation-dropdown">
      <span>Realizacje</span>
      <div className="navigation-dropdown__content">
        <NavigationItem exact link="realisations">Realizacje</NavigationItem>
        <NavigationItem exact link="realisations-premium">
          Realizacje Premium
        </NavigationItem>
      </div>
    </li>
    <NavigationItem link="offer">Oferta</NavigationItem>
    <NavigationItem link="partners">Partnerzy</NavigationItem>
    <NavigationItem link="contact">Kontakt</NavigationItem>
  </ul>
);

export default NavigationItems;
