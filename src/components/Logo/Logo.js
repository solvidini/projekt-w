import React from "react";

import "./Logo.scss";
import logoText from "../../assets/images/logo-text.png";
import logoSmall from "../../assets/images/logo-small.png";

const logo = props => {
  let logoUrl = logoText;
  let additionalStyles = {padding: "1rem 0"};

  if (props.small) {
    logoUrl = logoSmall;
    additionalStyles = {padding: ".2rem 0"};
  }

  return (
    <div className="logo">
      <img className="logo__image" style={additionalStyles} src={logoUrl} alt="Logo" />
    </div>
  );
};

export default logo;
