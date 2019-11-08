import React, { lazy, Suspense } from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import project_1 from './assets/images/kompaktowy_apartament_w_katowicach/index';
import project_2 from './assets/images/dom_w_rzeszowie/index';
import Spinner from './components/UI/Spinner/Spinner';

import './App.scss';

const Gallery = lazy(() => {
  return import('./components/Gallery/Gallery');
});

const Realisations = lazy(() => {
  return import('./components/Realisations/Realisations');
});

function App() {
  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/realisations/1" render={(props) => <Gallery {...props} images={project_1} name="Kompaktowy Apartament w Katowicach" />} />
          <Route path="/realisations/2" render={(props) => <Gallery {...props} images={project_2} name="Dom w Rzeszowie" />} />
          <Route path="/realisations" exact render={(props) => <Realisations {...props} />} />
          <Redirect from="/" to="/realisations" />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
