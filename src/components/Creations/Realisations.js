import React from "react";

import Realisation from "./Creation/Creation";
import "./Creations.scss";

import project_1 from "../../assets/images/projects/kompaktowy_apartament_w_katowicach/index";
import project_2 from "../../assets/images/projects/dom_w_rzeszowie/index";

const Realisations = props => {
  return (
    <section className="section-creations">
      <h1 className="section-creations__title">
        Realizacje
      </h1>
      <div className="creations">
        <Realisation
          to="/realisations/1"
          name="Kompaktowy Apartament w&nbsp;Katowicach"
          source={project_1[0].tn}
        />
        <Realisation
          to={props.match.url + "/2"}
          name="Dom w&nbsp;Rzeszowie"
          source={project_2[0].tn}
        />
        <Realisation
          to="/realisations/1"
          name="Kompaktowy Apartament w&nbsp;Katowicach"
          source={project_1[0].tn}
        />
        <Realisation
          to="/realisations/2"
          name="Dom w&nbsp;Rzeszowie"
          source={project_2[0].tn}
        />
        <Realisation
          to="/realisations/1"
          name="Kompaktowy Apartament w&nbsp;Katowicach"
          source={project_1[0].tn}
        />
      </div>
    </section>
  );
};

export default Realisations;
