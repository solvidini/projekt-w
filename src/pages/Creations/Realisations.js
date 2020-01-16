import React, { useContext } from "react";

import Realisation from "../../components/Creation/Creation";
import "./Creations.scss";
import { LanguageContext } from "../../context";

const Realisations = props => {
	const context = useContext(LanguageContext);
	return (
    <section className="section-creations">
      <h1 className="section-title">{context.dictionary.nav.realisations}</h1>
      <div className="creations">
        {props.realisationsArray.length ? (
          props.realisationsArray.map((realisation, index) => (
            <Realisation
              key={realisation.name + index}
              to={props.match.url + "/" + (index + 1)}
              name={context.language === "pl" ? realisation.name : context.language === "en" ? realisation.enName : realisation.name}
              source={realisation.exhibit}
            />
          ))
        ) : (
          <div className="no-creations">{context.dictionary.noProjects}</div>
        )}
      </div>
    </section>
  );
};

export default Realisations;
