import React, { lazy, Suspense, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.scss';
import Spinner from './components/UI/Spinner/Spinner';
import ScrollToTop from './hoc/ScrollToTop';
import Layout from './Layout/Layout';
import { LanguageContext } from './context';

//PROJECTS IMPORT
import project_3 from './assets/images/projects/apartament_w_warszawie/index';
import project_4 from './assets/images/projects/dom_w_rzeszowie/index';
import project_19 from './assets/images/projects/dom_w_katowicach/index';
import projectPremium_1 from './assets/images/projects/dom_w_ogrodziencu/index';
import projectPremium_2 from './assets/images/projects/dom_w_katowicach/index';
import projectPremium_3 from './assets/images/projects/dom_w_bedzinie/index';
import projectPremium_4 from './assets/images/projects/dom_prowansalski_w_tychach/index';
import projectPremium_5 from './assets/images/projects/apartament_w_myslowicach/index';
import projectPremium_6 from './assets/images/projects/apartament_w_katowicach/index';
import projectPremium_7 from './assets/images/projects/apartament_w_katowicach_w_stylu_hampton/index';
import projectPremium_9 from './assets/images/projects/apartament_w_kamienicy_w_krakowie/index';
import projectPremium_12 from './assets/images/projects/apartament_w_katowicach_pierwsza_dzielnica/index';
import projectPremium_13 from './assets/images/projects/dom_w_iserlohn_niemcy/index';
//REALISATIONS IMPORT
import realisation_5 from './assets/images/realisations/dom_w_ledzinach/index';
import realisation_10 from './assets/images/realisations/centrum_medyczne_gabos/index';
import realisationPremium_1 from './assets/images/realisations/penthouse_w_katowicach/index';
import realisationPremium_2 from './assets/images/realisations/dom_w_tychach/index';
import realisation_1 from './assets/images/realisations/apartament_w_katowicach_park_bazantow/index';
import realisation_2 from './assets/images/realisations/apartament_w_kamienicy_w_tychach/index';
import realisation_3 from './assets/images/realisations/apartament_w_stylu_hamptons_katowice_park_bazantow/index';
import realisation_4 from './assets/images/realisations/apartament_w_tychach_nowy_magistrat/index';
import realisation_6 from './assets/images/realisations/dom_w_katowicach/index';
import realisation_7 from './assets/images/realisations/penthouse_w_katowicach_2/index';

//PAGES NOT LAZY LOADED
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Studio from './pages/Studio/Studio';
import Offer from './pages/Offer/Offer';

//PAGES AND COMPONENTS LAZY LOADED
const GalleryPreparer = lazy(() => {
  return import('./components/Gallery/GalleryPreparer');
});

const Partners = lazy(() => {
  return import('./pages/Partners/Partners');
});

const Creations = lazy(() => {
  return import('./pages/Creations/Creations');
});

const realisationsArray = [
  realisation_1,
  realisation_2,
  realisation_3,
  realisation_4,
  realisation_6,
  realisation_7,
  realisationPremium_1,
  realisationPremium_2,
  realisation_5,
  realisation_10,
];
const projectsArray = [
  projectPremium_9,
  projectPremium_12,
  projectPremium_13,
  projectPremium_3,
  projectPremium_7,
  projectPremium_1,
  projectPremium_2,
  projectPremium_4,
  projectPremium_5,
  projectPremium_6,
  project_4,
  project_3,
  project_19,
];

console.log("Thanks for image lightbox to: 'https://www.npmjs.com/package/react-image-lightbox'");

const App = () => {
  const context = useContext(LanguageContext);

  return (
    <ScrollToTop>
      <Layout>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path='/studio' element={<Studio />} />
            <Route path='/offer' element={<Offer />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/partners' element={<Partners />} />
            <Route
              path='/realisations'
              element={
                <Creations
                  to='/realisations'
                  creationsArray={realisationsArray}
                  title={context.dictionary.nav.realisations}
                />
              }
            />
            <Route
              path='/realisations/:id'
              element={<GalleryPreparer to='/realisations/*' creationsArray={realisationsArray} />}
            />
            <Route
              path='/projects'
              element={
                <Creations to='/projects' creationsArray={projectsArray} title={context.dictionary.nav.projects} />
              }
            />
            <Route path='/projects/:id' element={<GalleryPreparer to='/projects/*' creationsArray={projectsArray} />} />
            <Route path='/' element={<Home />} />
            <Route path='*' element={<Home />} />
          </Routes>
        </Suspense>
      </Layout>
    </ScrollToTop>
  );
};

export default App;
