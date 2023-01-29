import React, { lazy, Suspense, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.scss';
import Spinner from './components/UI/Spinner/Spinner';
import ScrollToTop from './hoc/ScrollToTop';
import Layout from './Layout/Layout';
import { LanguageContext } from './context';

//PROJECTS IMPORT
import { projectsArray } from './assets/images/projects/index.ts';

//REALISATIONS IMPORT
import { realisationsArray } from './assets/images/realisations/index.ts';

//PAGES NOT LAZY LOADED
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Studio from './pages/Studio/Studio';
import Offer from './pages/Offer/Offer';

//PAGES AND COMPONENTS LAZY LOADED
const GalleryPreparer = lazy(() => import('./components/Gallery/GalleryPreparer'));

const Partners = lazy(() => import('./pages/Partners/Partners'));

const Creations = lazy(() => import('./pages/Creations/Creations'));

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
