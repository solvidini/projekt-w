import React from "react";

import Project from "../../components/Creation/Creation";
import "./Creations.scss";

const ProjectsPremium = props => {
  return (
    <section className="section-creations">
      <h1 className="section-title">Projekty Premium</h1>
      <div className="creations">
      {props.projectsPremiumArray.length ?
        props.projectsPremiumArray.map((project, index) => (
          <Project
            key={project.name + index}
            to={props.match.url + "/" + (index + 1)}
            name={project.name}
            source={project.exhibit}
          />
        ))
        : <div className="no-creations">Brak projektów</div>}
      </div>
    </section>
  );
};

export default ProjectsPremium;
