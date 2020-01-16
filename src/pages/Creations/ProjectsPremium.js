import React, { useContext } from "react";

import Project from "../../components/Creation/Creation";
import "./Creations.scss";
import { LanguageContext } from "../../context";

const ProjectsPremium = props => {
  const context = useContext(LanguageContext);
  console.log(context.language);
	return (
    <section className="section-creations">
      <h1 className="section-title">{context.dictionary.nav.projectsPremium}</h1>
      <div className="creations">
      {props.projectsPremiumArray.length ?
        props.projectsPremiumArray.map((project, index) => (
          <Project
            key={project.name + index}
            to={props.match.url + "/" + (index + 1)}
            name={context.language === "pl" ? project.name : context.language === "en" ? project.enName : project.name}
            source={project.exhibit}
          />
        ))
        : <div className="no-creations">{context.dictionary.noProjects}</div>}
      </div>
    </section>
  );
};

export default ProjectsPremium;
