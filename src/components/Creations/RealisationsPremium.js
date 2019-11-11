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
          to={props.match.url + "/1"}
          name={project_1.name}
          source={project_1.images[0].tn}
        />
      </div>
    </section>
  );
};

export default RealisationsPremium;
