import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Spinner from "./components/UI/Spinner/Spinner";
import Layout from "./containers/Layout/Layout";
import Home from "./components/Home/Home";

import project_1 from "./assets/images/projects/kompaktowy_apartament_w_katowicach/index";
import project_2 from "./assets/images/projects/dom_w_rzeszowie/index";

import "./App.scss";

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

const RealisationsComponent = props => (
  <React.Fragment>
    <Route
      path="/realisations"
      exact
      render={props => <Realisations {...props} />}
    />
    <Route
      path="realisations/1"
      render={props => (
        <Gallery
          {...props}
          images={project_1}
          name="Kompaktowy Apartament w&nbsp;Katowicach"
        />
      )}
    />
    {/* <Route
      path={`${props.match.url}/2`}
      render={props => (
        <Gallery {...props} images={project_2} name="Dom w&nbsp;Rzeszowie" />
      )}
    /> */}
  </React.Fragment>
);

function App() {
  return (
    <Layout>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route
            path="/realisations/:id"
            render={props => (
              <Gallery
                {...props}
                images={project_1}
                name="Kompaktowy Apartament w&nbsp;Katowicach"
              />
            )}
          />
          <Route
            exact
            path="/realisations"
            render={props => <Realisations {...props} />}
            // component={RealisationsComponent}
          />
          <Route
            exact
            path="/realisations-premium"
            render={props => <RealisationsPremium {...props} />}
          />
          <Route exact path="/projects" component={Projects} />
          <Route
            exact
            path="projects-premium"
            render={props => <ProjectsPremium {...props} />}
          />
          <Route exact path="/" component={Home} />
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
