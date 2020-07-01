import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhoneAlt,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

import './Contact.scss';
import GoogleMap from '../../components/GoogleMap/GoogleMap';
import { LanguageContext } from '../../context';

const Contact = () => {
  const context = useContext(LanguageContext);
  return (
    <section className="section-contact">
      <h1 className="section-title">
        {context.dictionary.nav.contact}
      </h1>
      <div className="section-contact__content">
        <div className="contact-details">
          <div className="contact-details__row">
            <FontAwesomeIcon icon={faEnvelope} />
            &nbsp;&nbsp;{context.dictionary.contact.write}:&nbsp;&nbsp;
            <a href="mailto:biuro@projektw.pl">biuro@projektw.pl</a>
          </div>
          <div className="contact-details__row">
            <FontAwesomeIcon icon={faPhoneAlt} />
            &nbsp;&nbsp;Sabina Masłowska:&nbsp;&nbsp;
            <a href="tel:+48608466901">+48 608 466 901</a>
          </div>
          <div className="contact-details__row">
            <FontAwesomeIcon icon={faPhoneAlt} />
            &nbsp;&nbsp;Weronika Kędziora:&nbsp;&nbsp;
            <a href="tel:+48602194398">+48 602 194 398</a>
          </div>
        </div>
      </div>
      <div className="contact-location">
        <h3 className="contact-location__title">
          {context.dictionary.contact.location}
        </h3>
        <div className="contact-location__map">
          <GoogleMap />
        </div>
      </div>
    </section>
  );
};

export default Contact;
