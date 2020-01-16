import React, { useContext } from "react";

import Realisation from "../../components/Creation/Creation";
import "./Creations.scss";
import { LanguageContext } from "../../context";

const RealisationsPremium = props => {
	const context = useContext(LanguageContext);
	return (
    <section className="section-creations">
      <h1 className="section-title">{context.dictionary.nav.realisationsPremium}</h1>
      <div className="creations">
      {props.realisationsPremiumArray.length ?
        props.realisationsPremiumArray.map((realisation, index) => (
          <Realisation
            key={realisation.name + index}
            to={props.match.url + "/" + (index + 1)}
            name={context.language === "pl" ? realisation.name : context.language === "en" ? realisation.enName : realisation.name}
            source={realisation.exhibit}
          />
        ))
        : <div className="no-creations">{context.dictionary.noProjects}</div>}
      </div>
      <div className="photos-signature">
        Photos by: <a href="http://www.andrzejskomorowski.pl/">Andrzej Jmuffin Skomorowski</a>
      </div>
    </section>
  );
};

export default RealisationsPremium;
