import React, { useContext } from 'react';

import './NavigationItems.scss';
import NavigationItem from './NavigationItem/NavigationItem';
import { LanguageContext } from '../../../context';

const NavigationItems = props => {
	const context = useContext(LanguageContext);
	return (
		<ul className="navigation-items">
			<li className="navigation-item">
				<NavigationItem link="/">{context.dictionary.nav.home}</NavigationItem>
			</li>
			<li className="navigation-item">
				<NavigationItem link="/studio">{context.dictionary.nav.studio}</NavigationItem>
			</li>
			<li className="navigation-dropdown">
				<span>{context.dictionary.nav.projects}&nbsp;</span>
				<i className="fas fa-caret-down"></i>
				<div className="navigation-dropdown__content">
					<NavigationItem link="/projects">{context.dictionary.nav.projects}</NavigationItem>
					<NavigationItem link="/projects-premium">{context.dictionary.nav.projectsPremium}</NavigationItem>
				</div>
			</li>
			<li className="navigation-dropdown">
				<span>{context.dictionary.nav.realisations}&nbsp;</span>
				<i className="fas fa-caret-down"></i>
				<div className="navigation-dropdown__content">
					<NavigationItem exact link="/realisations">
          {context.dictionary.nav.realisations}
					</NavigationItem>
					<NavigationItem exact link="/realisations-premium">
          {context.dictionary.nav.realisationsPremium}
					</NavigationItem>
				</div>
			</li>
			<li className="navigation-item">
				<NavigationItem link="/offer">{context.dictionary.nav.offer}</NavigationItem>
			</li>
			<li className="navigation-item">
				<NavigationItem link="/partners">{context.dictionary.nav.partners}</NavigationItem>
			</li>
			<li className="navigation-item">
				<NavigationItem link="/contact">{context.dictionary.nav.contact}</NavigationItem>
			</li>
			<li className="navigation-item mobile-only">
				<NavigationItem link="/projects">{context.dictionary.nav.projects}</NavigationItem>
			</li>
			<li className="navigation-item mobile-only">
				<NavigationItem link="/projects-premium">&nbsp;&rarr;&nbsp;Premium</NavigationItem>
			</li>
			<li className="navigation-item mobile-only">
				<NavigationItem exact link="/realisations">
        {context.dictionary.nav.realisations}
				</NavigationItem>
			</li>
			<li className="navigation-item mobile-only">
				<NavigationItem exact link="/realisations-premium">
					&nbsp;&rarr;&nbsp;Premium
				</NavigationItem>
			</li>
			<li className="navigation-item">
				<a
					target="_blank"
					rel="noopener noreferrer"
					className="navigation-icon"
					href="https://www.facebook.com/ProjektWPAW/"
				>
					<i className="fab fa-facebook-f"></i>
					<span className="mobile-only navigation-icon__text" style={{ textTransform: 'lowercase' }}>
						acebook
					</span>
				</a>
			</li>
		</ul>
	);
};

export default NavigationItems;
