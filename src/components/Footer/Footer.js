import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

import './Footer.scss';
import NavigationItem from '../Navigation/NavigationItems/NavigationItem/NavigationItem';
import { LanguageContext } from '../../context';

const Footer = ({ footerRef }) => {
  const currentDate = new Date().getFullYear();
  const context = useContext(LanguageContext);

  return (
    <footer className='footer' name='section-contact' ref={footerRef}>
      <div className='footer__info'>
        <div className='footer__info-item'>
          <h4>{context.dictionary.footer.studio}</h4>
          <span>Żniwna 1</span>
          <span>43-100 Tychy ({context.dictionary.poland})</span>
        </div>
        <div className='footer__info-item'>
          <h4>{context.dictionary.footer.contact}</h4>
          <a href='mailto:biuro@projektw.pl'>biuro@projektw.pl</a>
          <a href='tel:+48608466901'>+48 608 466 901</a>
          <a href='tel:+48602194398'>+48 602 194 398</a>
        </div>
        <div className='footer__info-item'>
          <h4>{context.dictionary.footer.nav}</h4>
          <nav className='footer__nav'>
            <div className='footer__nav-item'>
              <NavigationItem link='/'>{context.dictionary.nav.home}</NavigationItem>
              <NavigationItem link='/realisations'>{context.dictionary.nav.realisations}</NavigationItem>
              <NavigationItem link='/projects'>{context.dictionary.nav.projects}</NavigationItem>
              <NavigationItem link='/offer'>{context.dictionary.nav.offer}</NavigationItem>
            </div>
            <div className='footer__nav-item'>
              <NavigationItem link='/studio'>{context.dictionary.nav.studio}</NavigationItem>
              <NavigationItem link='/contact'>{context.dictionary.nav.contact}</NavigationItem>
              <NavigationItem link='/partners'>{context.dictionary.nav.partners}</NavigationItem>
            </div>
          </nav>
        </div>
        <div className='footer__info-item'>
          <h4>{context.dictionary.footer.followUs}</h4>
          <div className='footer__media'>
            <a target='_blank' rel='noopener noreferrer' href='https://www.facebook.com/ProjektWPAW/'>
              <FontAwesomeIcon icon={faFacebookF} className='footer__icon' />
            </a>
            <a target='_blank' rel='noopener noreferrer' href='https://www.instagram.com/projekt__w/'>
              <FontAwesomeIcon icon={faInstagram} className='footer__icon' />
            </a>
          </div>
        </div>
      </div>
      <div className='footer__languages'>
        <button className='footer__languages-button' onClick={context.changeLanguage} data-language='pl'>
          Polski
        </button>
        <button className='footer__languages-button' onClick={context.changeLanguage} data-language='en'>
          English
        </button>
      </div>
      <div className='footer__copyright'>
        <div className='footer__copyright-item'>
          <span className='no-wrap'>
            Projekt W &nbsp;&copy; <b>{currentDate}</b>
          </span>{' '}
          <span className='no-wrap'>{context.dictionary.footer.allRights}</span>
        </div>
        <div className='footer__copyright-item creator no-wrap'>
          {context.dictionary.footer.siteMadeBy}{' '}
          <a target='_blank' rel='noopener noreferrer' href='https://front-up.pro'>
            &ndash;Front Up&ndash;
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
