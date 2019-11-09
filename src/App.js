import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Spinner from "./components/UI/Spinner/Spinner";
import Layout from "./containers/Layout/Layout";
import Footer from "./components/Footer/Footer";

import project_1 from "./assets/images/kompaktowy_apartament_w_katowicach/index";
import project_2 from "./assets/images/dom_w_rzeszowie/index";

import "./App.scss";

const Gallery = lazy(() => {
  return import("./components/Gallery/Gallery");
});

const Realisations = lazy(() => {
  return import("./components/Realisations/Realisations");
});

function App() {
  return (
    <Layout>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route
            path="/realisations/1"
            render={props => (
              <React.Fragment>
                <Gallery
                  {...props}
                  images={project_1}
                  name="Kompaktowy Apartament w&nbsp;Katowicach"
                />
                <Footer />
              </React.Fragment>
            )}
          />
          <Route
            path="/realisations/2"
            render={props => (
              <React.Fragment>
                <Gallery
                  {...props}
                  images={project_2}
                  name="Dom w&nbsp;Rzeszowie"
                />
                <Footer />
              </React.Fragment>
            )}
          />
          <Route
            path="/realisations"
            exact
            render={props => <Realisations {...props} />}
          />
          <Redirect from="/" to="/realisations" />
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
