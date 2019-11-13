import React from "react";

import "./NavigationItems.scss";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = props => (
  <ul className="navigation-items">
    <li className="navigation-item">
      <NavigationItem link="/">Home</NavigationItem>
    </li>
    <li className="navigation-item">
      <NavigationItem link="/lab">Pracownia</NavigationItem>
    </li>
    <li className="navigation-item mobile-only">
      <NavigationItem link="/projects">Projekty</NavigationItem>
    </li>
    <li className="navigation-item mobile-only">
      <NavigationItem link="/projects-premium">
        Projekty&nbsp;Premium
      </NavigationItem>
    </li>
    <li className="navigation-item mobile-only">
      <NavigationItem exact link="/realisations">
        Realizacje
      </NavigationItem>
    </li>
    <li className="navigation-item mobile-only">
      <NavigationItem exact link="/realisations-premium">
        Realizacje&nbsp;Premium
      </NavigationItem>
    </li>
    <li className="navigation-dropdown">
      <span>Projekty</span>
      <div className="navigation-dropdown__content">
        <NavigationItem link="/projects">Projekty</NavigationItem>
        <NavigationItem link="/projects-premium">
          Projekty&nbsp;Premium
        </NavigationItem>
      </div>
    </li>
    <li className="navigation-dropdown">
      <span>Realizacje</span>
      <div className="navigation-dropdown__content">
        <NavigationItem exact link="/realisations">
          Realizacje
        </NavigationItem>
        <NavigationItem exact link="/realisations-premium">
          Realizacje&nbsp;Premium
        </NavigationItem>
      </div>
    </li>
    <li className="navigation-item">
      <NavigationItem link="/offer">Oferta</NavigationItem>
    </li>
    <li className="navigation-item">
      <NavigationItem link="/partners">Partnerzy</NavigationItem>
    </li>
    <li className="navigation-item">
      <NavigationItem link="/contact">Kontakt</NavigationItem>
    </li>
    <li className="navigation-item">
      <a
        className="navigation-icon"
        href="https://www.facebook.com/ProjektWPAW/"
      >
        <i className="fab fa-facebook-f"></i><span className="mobile-only navigation-icon__text" style={{textTransform: "lowercase"}}>acebook</span>
      </a>
    </li>
  </ul>
);

export default NavigationItems;
