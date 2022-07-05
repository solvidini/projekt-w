import React, { lazy, Suspense, useContext } from 'react';
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';

import './App.scss';
import Spinner from './components/UI/Spinner/Spinner';
import ScrollToTop from './hoc/ScrollToTop';
import Layout from './Layout/Layout';
import { LanguageContext } from './context';

//PROJECTS IMPORT
import project_1 from './assets/images/projects/apartament_w_gliwicach/index';
import project_6 from './assets/images/projects/kompaktowy_apartament_w_katowicach_park_bazantow/index';
import project_3 from './assets/images/projects/apartament_w_warszawie/index';
import project_4 from './assets/images/projects/dom_w_rzeszowie/index';
import project_5 from './assets/images/projects/kompaktowy_apartament_w_katowicach/index';
import project_2 from './assets/images/projects/apartament_w_katowicach_park_bazantow/index';
import project_7 from './assets/images/projects/apartament_w_czestochowie/index';
import project_8 from './assets/images/projects/dom_w_czeladzi/index';
import project_9 from './assets/images/projects/dom_w_zabudowie_szeregowej_w_katowicach/index';
import project_10 from './assets/images/projects/apartament_w_dabrowie_gorniczej/index';
import project_11 from './assets/images/projects/dom_w_zabudowie_szeregowej_w_myslowicach/index';
import project_12 from './assets/images/projects/mieszkanie_pod_wynajem_katowice_gliwicka/index';
import project_13 from './assets/images/projects/mieszkanie_pod_wynajem_katowice_gliwicka_2/index';
import project_14 from './assets/images/projects/mieszkanie_pod_wynajem_w_katowicach/index';
import project_15 from './assets/images/projects/mieszkanie_w_katowicach/index';
import project_16 from './assets/images/projects/apartament_sokolska_tower/index';
import project_17 from './assets/images/projects/apartament_sokolska_tower_2/index';
import project_18 from './assets/images/projects/apartament_w_bedzinie/index';
import project_19 from './assets/images/projects/dom_w_katowicach/index';
import project_20 from './assets/images/projects/dom_w_katowicach_2/index';
import project_21 from './assets/images/projects/mieszkanie_w_kamienicy_z_lat_60_w_tychach/index';
import project_22 from './assets/images/projects/mieszkanie_w_katowicach_2/index';
//PREMIUM PROJECTS IMPORT
import projectPremium_1 from './assets/images/projects-premium/dom_w_ogrodziencu/index';
import projectPremium_2 from './assets/images/projects-premium/dom_w_katowicach/index';
import projectPremium_3 from './assets/images/projects-premium/dom_w_bedzinie/index';
import projectPremium_4 from './assets/images/projects-premium/dom_prowansalski_w_tychach/index';
import projectPremium_5 from './assets/images/projects-premium/apartament_w_myslowicach/index';
import projectPremium_6 from './assets/images/projects-premium/apartament_w_katowicach/index';
import projectPremium_7 from './assets/images/projects-premium/apartament_w_katowicach_w_stylu_hampton/index';
import projectPremium_8 from './assets/images/projects-premium/dom_w_orzeszu/index';
import projectPremium_9 from './assets/images/projects-premium/apartament_w_kamienicy_w_krakowie/index';
import projectPremium_10 from './assets/images/projects-premium/apartament_w_katowicach_park_bazantow/index';
import projectPremium_11 from './assets/images/projects-premium/apartament_w_katowicach_park_bazantow_2/index';
import projectPremium_12 from './assets/images/projects-premium/apartament_w_katowicach_pierwsza_dzielnica/index';
import projectPremium_13 from './assets/images/projects-premium/dom_w_iserlohn_niemcy/index';
//REALISATIONS IMPORT
import realisation_1 from './assets/images/realisations/artesmed_katowice/index';
import realisation_2 from './assets/images/realisations/pokoj_stasia/index';
import realisation_3 from './assets/images/realisations/mieszkanie_na_poddaszu_tychy/index';
import realisation_4 from './assets/images/realisations/mieszkania_pod_wynajem_atal_park_katowice/index';
import realisation_5 from './assets/images/realisations/dom_w_ledzinach/index';
import realisation_6 from './assets/images/realisations/mieszkanie_pod_wynajem_katowice_nasypowa_1/index';
import realisation_7 from './assets/images/realisations/mieszkanie_pod_wynajem_katowice_nasypowa_2/index';
import realisation_8 from './assets/images/realisations/mieszkanie_pod_wynajem_katowice_mikolowska_1/index';
import realisation_9 from './assets/images/realisations/mieszkanie_pod_wynajem_katowice_mikolowska_2/index';
import realisation_10 from './assets/images/realisations/centrum_medyczne_gabos/index';
import realisation_11 from './assets/images/realisations/mieszkanie_w_katowicach/index';
//PREMIUM REALISATIONS IMPORT
import realisationPremium_1 from './assets/images/realisations-premium/penthouse_w_katowicach/index';
import realisationPremium_2 from './assets/images/realisations-premium/dom_w_tychach/index';

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
  realisation_5,
  realisation_8,
  realisation_10,
  realisation_11,
  realisation_2,
  realisation_6,
  realisation_9,
  realisation_3,
  realisation_4,
  realisation_7,
  realisation_1,
];
const realisationsPremiumArray = [realisationPremium_1, realisationPremium_2];
const projectsArray = [
  project_4,
  project_3,
  project_17,
  project_19,
  project_20,
  project_21,
  project_22,
  project_1,
  project_16,
  project_11,
  project_18,
  project_5,
  project_9,
  project_13,
  project_6,
  project_7,
  project_8,
  project_10,
  project_12,
  project_14,
  project_2,
  project_15,
];
const projectsPremiumArray = [
  projectPremium_9,
  projectPremium_10,
  projectPremium_11,
  projectPremium_12,
  projectPremium_13,
  projectPremium_3,
  projectPremium_7,
  projectPremium_1,
  projectPremium_2,
  projectPremium_4,
  projectPremium_5,
  projectPremium_6,
  projectPremium_8,
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
              path='/realisations-premium'
              element={
                <Creations
                  to='/realisations-premium'
                  creationsArray={realisationsPremiumArray}
                  title={context.dictionary.nav.realisationsPremium}
                />
              }
            />
            <Route
              path='/realisations-premium/:id'
              element={<GalleryPreparer to='/realisations-premium/*' creationsArray={realisationsPremiumArray} />}
            />
            <Route
              path='/projects'
              element={
                <Creations to='/projects' creationsArray={projectsArray} title={context.dictionary.nav.projects} />
              }
            />
            <Route path='/projects/:id' element={<GalleryPreparer to='/projects/*' creationsArray={projectsArray} />} />
            <Route
              path='/projects-premium'
              element={
                <Creations
                  to='/projects-premium'
                  creationsArray={projectsPremiumArray}
                  title={context.dictionary.nav.projectsPremium}
                />
              }
            />
            <Route
              path='/projects-premium/:id'
              element={<GalleryPreparer to='/projects-premium/*' creationsArray={projectsPremiumArray} />}
            />
            <Route path='/' element={<Home />} />
            <Route path='*' element={<Home />} />
          </Routes>
        </Suspense>
      </Layout>
    </ScrollToTop>
  );
};

export default App;
