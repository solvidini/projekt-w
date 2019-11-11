import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Spinner from "./components/UI/Spinner/Spinner";
import Layout from "./containers/Layout/Layout";
import Home from "./components/Home/Home";
import "./App.scss";

import project_1 from "./assets/images/projects/kompaktowy_apartament_w_katowicach/index";
import project_2 from "./assets/images/projects/dom_w_rzeszowie/index";

const Gallery = lazy(() => {
  return import("./components/Gallery/Gallery");
});

const Realisations = lazy(() => {
  return import("./components/Creations/Realisations");
});

const RealisationsPremium = lazy(() => {
  return import("./components/Creations/RealisationsPremium");
});

const Projects = lazy(() => {
  return import("./components/Creations/Projects");
});

const ProjectsPremium = lazy(() => {
  return import("./components/Creations/ProjectsPremium");
});

const projectsArray = [project_1, project_2];
const projectsPremiumArray = [];
const realisationsArray = [];
const realisationsPremiumArray = [];

const RealisationsPaths = props => {
  const id = props.match.params.id - 1;
  const url = props.match.url;
  if (!projectsArray[id]) return <Redirect to="/" />;
  return (
    <React.Fragment>
      <Route
        path={url}
        render={props => (
          <Gallery
            {...props}
            images={projectsArray[id].images}
            name={projectsArray[id].name}
          />
        )}
      />
    </React.Fragment>
  );
};

function App() {
  return (
    <Layout>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route
            exact
            path="/realisations"
            render={props => <Realisations {...props} />}
          />
          <Route path="/realisations/:id" component={RealisationsPaths} />
          <Route
            exact
            path="/realisations-premium"
            render={props => <RealisationsPremium {...props} />}
          />
          <Route
            exact
            path="/projects"
            render={props => <Projects {...props} />}
          />
          <Route
            exact
            path="/projects-premium"
            render={props => <ProjectsPremium {...props} />}
          />
          <Route exact path="/" component={Home} />
          <Route component={Home} />
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
