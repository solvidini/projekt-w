import React from "react";

import Realisation from "./Realisation/Realisation";
import "./Realisations.scss";

import project_1 from "../../assets/images/kompaktowy_apartament_w_katowicach/index";
import project_2 from "../../assets/images/dom_w_rzeszowie/index";

const Realisations = props => {
  return (
    <section className="section-realisations">
      <h1 className="section-realisations__title">
        Realizacje projektów
      </h1>
      <div className="realisations">
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
        <Realisation
          to="/realisations/2"
          name="Dom w&nbsp;Rzeszowie"
          source={project_2[0].tn}
        />
      </div>
    </section>
  );
};

export default Realisations;
