import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.scss";
import Spinner from "./components/UI/Spinner/Spinner";
import ScrollToTop from "./hoc/ScrollToTop";
import Layout from "./Layout/Layout";

//PAGES NOT LAZY LOADED
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Studio from "./pages/Studio/Studio";
import Offer from "./pages/Offer/Offer";

//PROJECTS IMPORT
import project_1 from "./assets/images/projects/kompaktowy_apartament_w_katowicach/index";
import project_2 from "./assets/images/projects/dom_w_rzeszowie/index";
import project_3 from "./assets/images/projects/apartament_w_gliwicach/index";
//PREMIUM PROJECTS IMPORT
import projectPremium_1 from "./assets/images/projects-premium/dom_w_ogrodziencu/index";
import projectPremium_2 from "./assets/images/projects-premium/dom_w_katowicach/index";
import projectPremium_3 from "./assets/images/projects-premium/dom_w_bedzinie/index";
import projectPremium_4 from "./assets/images/projects-premium/dom_prowansalski_w_tychach/index";
import projectPremium_5 from "./assets/images/projects-premium/apartament_w_myslowicach/index";
//REALISATIONS IMPORT
import realisation_1 from "./assets/images/realisations/mieszkania_pod_wynajem_katowice_nasypowa/index";
import realisation_2 from "./assets/images/realisations/pokoj_stasia/index";
import realisation_3 from "./assets/images/realisations/mieszkanie_na_poddaszu_tychy/index";
import realisation_4 from "./assets/images/realisations/mieszkania_pod_wynajem_atal_park_katowice/index";
import realisation_5 from "./assets/images/realisations/dom_w_ledzinach/index";
import realisation_6 from "./assets/images/realisations/artesmed_katowice/index";
import realisation_7 from "./assets/images/realisations/mieszkania_pod_wynajem_katowice_mikolowska/index";
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

const realisationsArray = [realisation_1, realisation_2,realisation_3, realisation_4, realisation_5, realisation_6, realisation_7];
const realisationsPremiumArray = [realisationPremium_1, realisationPremium_2];
const projectsArray = [project_1, project_2, project_3];
const projectsPremiumArray = [projectPremium_1, projectPremium_2, projectPremium_3, projectPremium_4, projectPremium_5];

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
            <Route exact path="/studio" component={Studio} />
            <Route exact path="/offer" component={Offer} />
            <Route exact path="/contact" component={Contact} />
            <Route
              exact
              path="/partners"
              render={props => <Partners {...props} />}
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
