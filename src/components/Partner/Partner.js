import React from "react";
import "./Partner.scss";

const Partner = props => {
  let partner = null;

  if (props.link === "") {
    partner = (
      <div className="partner">
        <img className="partner__image" src={props.src} alt={props.alt} />
      </div>
    );
  } else {
    partner = (
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <div className="partner">
          <img className="partner__image" src={props.src} alt={props.alt} />
        </div>
      </a>
    );
  }

  return partner;
};

export default Partner;
