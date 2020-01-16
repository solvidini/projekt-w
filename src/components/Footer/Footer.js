import React, { useContext } from 'react';

import './Footer.scss';
import NavigationItem from '../Navigation/NavigationItems/NavigationItem/NavigationItem';
import { LanguageContext } from '../../context';

const Footer = props => {
	const currentDate = new Date().getFullYear();
	const context = useContext(LanguageContext);

	return (
		<footer className="footer" name="section-contact" ref={props.footerRef}>
			<div className="footer__info">
				<div className="footer__info__item">
					<h4>{context.dictionary.footer.studio}</h4>
					<span>Żniwna 1</span>
					<span>43-100 Tychy ({context.dictionary.poland})</span>
				</div>
				<div className="footer__info__item">
					<h4>{context.dictionary.footer.contact}</h4>
					<a href="mailto:biuro@projektw.pl">biuro@projektw.pl</a>
					<a href="tel:+48608466901">+48 608 466 901</a>
					<a href="tel:+48602194398">+48 602 194 398</a>
				</div>
				<div className="footer__info__item">
					<h4>{context.dictionary.footer.nav}</h4>
					<nav className="footer__nav">
						<div className="footer__nav__item">
							<NavigationItem exact link="/">
              {context.dictionary.nav.home}
							</NavigationItem>
							<NavigationItem link="/studio">{context.dictionary.nav.studio}</NavigationItem>
							<NavigationItem link="/offer">{context.dictionary.nav.offer}</NavigationItem>
							<NavigationItem link="/partners">{context.dictionary.nav.partners}</NavigationItem>
							<NavigationItem link="/contact">{context.dictionary.nav.contact}</NavigationItem>
						</div>
						<div className="footer__nav__item">
							<NavigationItem link="/projects">{context.dictionary.nav.projects}</NavigationItem>
							<NavigationItem link="/projects-premium">&nbsp;&rarr;&nbsp;Premium</NavigationItem>
							<NavigationItem link="/realisations">{context.dictionary.nav.realisations}</NavigationItem>
							<NavigationItem link="/realisations-premium">&nbsp;&rarr;&nbsp;Premium</NavigationItem>
						</div>
					</nav>
				</div>
				<div className="footer__info__item">
					<h4>{context.dictionary.footer.followUs}</h4>
					<a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/ProjektWPAW/">
						<i className="fab fa-facebook footer__icon"></i>
					</a>
				</div>
			</div>
			<div className="footer__languages">
				<button className="footer__languages__button" onClick={context.changeLanguage} data-language="pl">
					Polski
				</button>
				<button className="footer__languages__button" onClick={context.changeLanguage} data-language="en">
					English
				</button>
			</div>
			<div className="footer__copyright">
				<div className="footer__copyright__item">
					<span className="no-wrap">
						Projekt W &nbsp;&copy; <b>{currentDate}</b>
					</span>{' '}
					<span className="no-wrap">{context.dictionary.footer.allRights}</span>
				</div>
				<div className="footer__copyright__item creator no-wrap">
					{context.dictionary.footer.siteMadeBy}{' '}
					<a target="_blank" rel="noopener noreferrer" href="http://samuelk.pl">
						&ndash;Samuel Kędziora&ndash;
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
