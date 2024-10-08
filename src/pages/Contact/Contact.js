import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import './Contact.scss';
import Map from '../../components/Map/Map';
import { LanguageContext } from '../../context';

const Contact = () => {
  const context = useContext(LanguageContext);
  return (
    <section className='section-contact'>
      <h1 className='section-title'>{context.dictionary.nav.contact}</h1>
      <div className='section-contact__content'>
        <div className='contact-details'>
          <div className='contact-details__row'>
            <div className='contact-details__name'>{context.dictionary.contact.write}:</div>
            <div className='contact-details__info'>
              <FontAwesomeIcon icon={faEnvelope} className='contact-details__icon' />
              <a href='mailto:biuro@projektw.pl'>biuro@projektw.pl</a>
            </div>
          </div>
          <div className='contact-details__row'>
            <div className='contact-details__name'>Sabina Masłowska-Moćko:</div>
            <div className='contact-details__info'>
              <FontAwesomeIcon icon={faPhoneAlt} className='contact-details__icon' />
              <a href='tel:+48608466901'>+48 608 466 901</a>
            </div>
            <div className='contact-details__info'>
              <FontAwesomeIcon icon={faEnvelope} className='contact-details__icon' />
              <a href='mailto:sabina@projektw.pl'>sabina@projektw.pl</a>
            </div>
          </div>
          <div className='contact-details__row'>
            <div className='contact-details__name'>Weronika Kędziora:</div>
            <div className='contact-details__info'>
              <FontAwesomeIcon icon={faPhoneAlt} className='contact-details__icon' />
              <a href='tel:+48602194398'>+48 602 194 398</a>
            </div>
            <div className='contact-details__info'>
              <FontAwesomeIcon icon={faEnvelope} className='contact-details__icon' />
              <a href='mailto:weronika@projektw.pl'>weronika@projektw.pl</a>
            </div>
          </div>
        </div>
      </div>
      <div className='contact-location'>
        <h3 className='contact-location__title'>{context.dictionary.contact.location}</h3>
        <div className='contact-location__info'>{context.dictionary.contact.locationInfo}</div>
        <div className='contact-location__map'>
          <Map />
        </div>
      </div>
    </section>
  );
};

export default Contact;
