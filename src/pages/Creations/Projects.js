import React from "react";

import Project from "../../components/Creation/Creation";
import "./Creations.scss";

const Projects = props => {
  return (
    <section className="section-creations">
      <h1 className="section-title">Projekty</h1>
      <div className="creations">
        {props.projectsArray.length ?
        props.projectsArray.map((project, index) => (
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

export default Projects;
