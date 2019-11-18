import React from "react";
import "./Contact.scss";
import GoogleMap from "../../components/GoogleMap/GoogleMap";

const Contact = () => {
  return (
    <div className="section-contact">
      <h1 className="section-title">Kontakt</h1>
      <div className="section-contact__content">
        <div className="contact-details">
          <div className="contact-details__row">
            <i className="far fa-envelope"></i>&nbsp;&nbsp;Napisz do nas:&nbsp;&nbsp;
            <a href="mailto:biuro@projektw.pl">biuro@projektw.pl</a>
          </div>
          <div className="contact-details__row">
            <i className="fas fa-phone-alt"></i>&nbsp;&nbsp;Sabina Masłowska:&nbsp;&nbsp;
            <a href="tel:+48608466901">+48 608 466 901</a>
          </div>
          <div className="contact-details__row">
            <i className="fas fa-phone-alt"></i>&nbsp;&nbsp;Weronika Kędziora:&nbsp;&nbsp;
            <a href="tel:+48602194398">+48 602 194 398</a>
          </div>
        </div>
        <div className="google-map">
          <h3 className="google-map__title">Lokalizacja pracowni</h3>
          <GoogleMap />
        </div>
      </div>
    </div>
  );
};

export default Contact;
