import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

import './NavigationItems.scss';
import NavigationItem from './NavigationItem/NavigationItem';
import { LanguageContext } from '../../../context';

const NavigationItems = (props) => {
   const { isToolbarSticky = false, clicked = () => {} } = props;
   const context = useContext(LanguageContext);

   const dropdownContentStyles = isToolbarSticky ? { top: '100%' } : { bottom: 0 };

   return (
      <ul className="navigation-list">
         <li className="navigation-item" onClick={clicked}>
            <NavigationItem link="/">{context.dictionary.nav.home}</NavigationItem>
         </li>
         <li className="navigation-item" onClick={clicked}>
            <NavigationItem link="/studio">{context.dictionary.nav.studio}</NavigationItem>
         </li>
         <li className="navigation-item navigation-item--dropdown">
            <span>
               {context.dictionary.nav.projects}&nbsp;
               <FontAwesomeIcon icon={faCaretDown} />
            </span>
            <div
               className="navigation-item navigation-item--dropdown__content"
               style={dropdownContentStyles}
            >
               <NavigationItem link="/projects">{context.dictionary.nav.projects}</NavigationItem>
               <NavigationItem link="/projects-premium">
                  {context.dictionary.nav.projectsPremium}
               </NavigationItem>
            </div>
         </li>
         <li className="navigation-item navigation-item--dropdown">
            <span>
               {context.dictionary.nav.realisations}&nbsp;
               <FontAwesomeIcon icon={faCaretDown} />
            </span>
            <div
               className="navigation-item navigation-item--dropdown__content"
               style={dropdownContentStyles}
            >
               <NavigationItem exact link="/realisations">
                  {context.dictionary.nav.realisations}
               </NavigationItem>
               <NavigationItem exact link="/realisations-premium">
                  {context.dictionary.nav.realisationsPremium}
               </NavigationItem>
            </div>
         </li>
         <li className="navigation-item" onClick={clicked}>
            <NavigationItem link="/offer">{context.dictionary.nav.offer}</NavigationItem>
         </li>
         <li className="navigation-item" onClick={clicked}>
            <NavigationItem link="/partners">{context.dictionary.nav.partners}</NavigationItem>
         </li>
         <li className="navigation-item" onClick={clicked}>
            <NavigationItem link="/contact">{context.dictionary.nav.contact}</NavigationItem>
         </li>
         <li className="navigation-item mobile-only" onClick={clicked}>
            <NavigationItem link="/projects">{context.dictionary.nav.projects}</NavigationItem>
         </li>
         <li className="navigation-item mobile-only" onClick={clicked}>
            <NavigationItem link="/projects-premium">&nbsp;&rarr;&nbsp;Premium</NavigationItem>
         </li>
         <li className="navigation-item mobile-only" onClick={clicked}>
            <NavigationItem exact link="/realisations">
               {context.dictionary.nav.realisations}
            </NavigationItem>
         </li>
         <li className="navigation-item mobile-only" onClick={clicked}>
            <NavigationItem exact link="/realisations-premium">
               &nbsp;&rarr;&nbsp;Premium
            </NavigationItem>
         </li>
         <li className="navigation-item" onClick={clicked}>
            <a
               target="_blank"
               rel="noopener noreferrer"
               className="navigation-item__link navigation-item__link--icon"
               href="https://www.facebook.com/ProjektWPAW/"
            >
               <FontAwesomeIcon icon={faFacebookF} />
            </a>
         </li>
      </ul>
   );
};

export default NavigationItems;
