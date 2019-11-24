import React from "react";

import Realisation from "../../components/Creation/Creation";
import "./Creations.scss";

const RealisationsPremium = props => {
  return (
    <section className="section-creations">
      <h1 className="section-title">Realizacje Premium</h1>
      <div className="creations">
      {props.realisationsPremiumArray.length ?
        props.realisationsPremiumArray.map((realisation, index) => (
          <Realisation
            key={realisation.name + index}
            to={props.match.url + "/" + (index + 1)}
            name={realisation.name}
            source={realisation.exhibit}
          />
        ))
        : <div className="no-creations">Brak realizacji</div>}
      </div>
      <div className="photos-signature">
        Photos by: <a href="http://www.andrzejskomorowski.pl/">Andrzej Jmuffin Skomorowski</a>
      </div>
    </section>
  );
};

export default RealisationsPremium;
