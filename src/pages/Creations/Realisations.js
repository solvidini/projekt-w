import React from "react";

import Realisation from "../../components/Creation/Creation";
import "./Creations.scss";

const Realisations = props => {
  return (
    <section className="section-creations">
      <h1 className="section-title">Realizacje</h1>
      <div className="creations">
        {props.realisationsArray.length ? (
          props.realisationsArray.map((realisation, index) => (
            <Realisation
              key={realisation.name + index}
              to={props.match.url + "/" + (index + 1)}
              name={realisation.name}
              source={realisation.exhibit}
            />
          ))
        ) : (
          <div className="no-creations">Brak realizacji</div>
        )}
      </div>
    </section>
  );
};

export default Realisations;
