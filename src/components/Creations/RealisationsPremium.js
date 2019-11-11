import React from "react";

import Realisation from "./Creation/Creation";
import "./Creations.scss";

import project_1 from "../../assets/images/projects/kompaktowy_apartament_w_katowicach/index";
import project_2 from "../../assets/images/projects/dom_w_rzeszowie/index";

const RealisationsPremium = props => {
  return (
    <section className="section-creations">
      <h1 className="section-creations__title">
        Realizacje Premium
      </h1>
      <div className="creations">
        <Realisation
          to="/premium-realisations/1"
          name="Kompaktowy Apartament w&nbsp;Katowicach"
          source={project_1[0].tn}
        />
      </div>
    </section>
  );
};

export default RealisationsPremium;
