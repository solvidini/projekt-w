import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.scss";
import Spinner from "./components/UI/Spinner/Spinner";
import ScrollToTop from "./hoc/ScrollToTop";
import Layout from "./Layout/Layout";

//PAGES NOT LAZY LOADED
import Home from "./pages/Home/Home";
import Contact from './pages/Contact/Contact';
import Lab from './pages/Lab/Lab';
import Offer from './pages/Offer/Offer';

//PROJECTS IMPORT
import project_1 from "./assets/images/projects/kompaktowy_apartament_w_katowicach/index";
import project_2 from "./assets/images/projects/dom_w_rzeszowie/index";
//PREMIUM PROJECTS IMPORT
import projectPremium_1 from "./assets/images/projects-premium/dom_w_ogrodziencu/index";
//REALISATIONS IMPORT

//PREMIUM REALISATIONS IMPORT
import realisationPremium_1 from "./assets/images/realisations-premium/penthouse_w_katowicach/index";
import realisationPremium_2 from "./assets/images/realisations-premium/dom_w_tychach/index";

//PAGES AND COMPONENTS LAZY LOADED
const Gallery = lazy(() => {
  return import("./components/Gallery/Gallery");
});

const Partners = lazy(() => {
  return import("./pages/Partners/Partners");
});

const Realisations = lazy(() => {
  return import("./pages/Creations/Realisations");
});

const RealisationsPremium = lazy(() => {
  return import("./pages/Creations/RealisationsPremium");
});

const Projects = lazy(() => {
  return import("./pages/Creations/Projects");
});

const ProjectsPremium = lazy(() => {
  return import("./pages/Creations/ProjectsPremium");
});

const realisationsArray = [];
const realisationsPremiumArray = [realisationPremium_1, realisationPremium_2];
const projectsArray = [project_1, project_2];
const projectsPremiumArray = [projectPremium_1];

const RealisationsPaths = props => {
  const id = props.match.params.id - 1;
  const url = props.match.url;
  if (!realisationsArray[id]) return <Redirect to="/" />;
  return (
    <React.Fragment>
      <Route
        path={url}
        render={props => (
          <Gallery
            {...props}
            images={realisationsArray[id].images}
            name={realisationsArray[id].name}
          />
        )}
      />
    </React.Fragment>
  );
};

const RealisationsPremiumPaths = props => {
  const id = props.match.params.id - 1;
  const url = props.match.url;
  if (!realisationsPremiumArray[id]) return <Redirect to="/" />;
  return (
    <React.Fragment>
      <Route
        path={url}
        render={props => (
          <Gallery
            {...props}
            images={realisationsPremiumArray[id].images}
            name={realisationsPremiumArray[id].name}
          />
        )}
      />
    </React.Fragment>
  );
};

const ProjectsPaths = props => {
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

const ProjectsPremiumPaths = props => {
  const id = props.match.params.id - 1;
  const url = props.match.url;
  if (!projectsPremiumArray[id]) return <Redirect to="/" />;
  return (
    <React.Fragment>
      <Route
        path={url}
        render={props => (
          <Gallery
            {...props}
            images={projectsPremiumArray[id].images}
            name={projectsPremiumArray[id].name}
          />
        )}
      />
    </React.Fragment>
  );
};

function App() {
  return (
    <ScrollToTop>
      <Layout>
        <Suspense fallback={<Spinner />}>
          <Switch>
          <Route exact path="/lab" component={Lab} />
          <Route exact path="/offer" component={Offer} />
          <Route exact path="/contact" component={Contact} />
          <Route
              exact
              path="/partners"
              render={props => (
                <Partners
                  {...props}
                />
              )}
            />
            <Route
              exact
              path="/realisations"
              render={props => (
                <Realisations
                  {...props}
                  realisationsArray={realisationsArray}
                />
              )}
            />
            <Route path="/realisations/:id" component={RealisationsPaths} />
            <Route
              exact
              path="/realisations-premium"
              render={props => (
                <RealisationsPremium
                  {...props}
                  realisationsPremiumArray={realisationsPremiumArray}
                />
              )}
            />
            <Route
              path="/realisations-premium/:id"
              component={RealisationsPremiumPaths}
            />
            <Route
              exact
              path="/projects"
              render={props => (
                <Projects {...props} projectsArray={projectsArray} />
              )}
            />
            <Route path="/projects/:id" component={ProjectsPaths} />
            <Route
              exact
              path="/projects-premium"
              render={props => (
                <ProjectsPremium
                  {...props}
                  projectsPremiumArray={projectsPremiumArray}
                />
              )}
            />
            <Route
              path="/projects-premium/:id"
              component={ProjectsPremiumPaths}
            />
            <Route exact path="/" component={Home} />
            {/* <Route component={Home} /> */}
          </Switch>
        </Suspense>
      </Layout>
    </ScrollToTop>
  );
}

export default App;
