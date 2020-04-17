import React, { lazy, Suspense, useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

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
//PREMIUM PROJECTS IMPORT
import projectPremium_1 from './assets/images/projects-premium/dom_w_ogrodziencu/index';
import projectPremium_2 from './assets/images/projects-premium/dom_w_katowicach/index';
import projectPremium_3 from './assets/images/projects-premium/dom_w_bedzinie/index';
import projectPremium_4 from './assets/images/projects-premium/dom_prowansalski_w_tychach/index';
import projectPremium_5 from './assets/images/projects-premium/apartament_w_myslowicach/index';
import projectPremium_6 from './assets/images/projects-premium/apartament_w_katowicach/index';
import projectPremium_7 from './assets/images/projects-premium/apartament_w_katowicach_w_stylu_hampton/index';
import projectPremium_8 from './assets/images/projects-premium/dom_w_orzeszu/index';
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
const Gallery = lazy(() => {
	return import('./components/Gallery/Gallery');
});

const Partners = lazy(() => {
	return import('./pages/Partners/Partners');
});

const Realisations = lazy(() => {
	return import('./pages/Creations/Realisations');
});

const RealisationsPremium = lazy(() => {
	return import('./pages/Creations/RealisationsPremium');
});

const Projects = lazy(() => {
	return import('./pages/Creations/Projects');
});

const ProjectsPremium = lazy(() => {
	return import('./pages/Creations/ProjectsPremium');
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
	project_1,
	project_3,
	project_11,
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
	projectPremium_3,
	projectPremium_7,
	projectPremium_1,
	projectPremium_2,
	projectPremium_4,
	projectPremium_5,
	projectPremium_6,
	projectPremium_8,
];

const RealisationsPaths = props => {
	const context = useContext(LanguageContext);
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
						yOffset={window.pageYOffset}
						images={realisationsArray[id].images}
						name={context.language === 'pl' ? realisationsArray[id].name : realisationsArray[id].enName}
					/>
				)}
			/>
		</React.Fragment>
	);
};

const RealisationsPremiumPaths = props => {
	const context = useContext(LanguageContext);
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
						yOffset={window.pageYOffset}
						images={realisationsPremiumArray[id].images}
						name={context.language === 'pl' ? realisationsPremiumArray[id].name : realisationsPremiumArray[id].enName}
					/>
				)}
			/>
		</React.Fragment>
	);
};

const ProjectsPaths = props => {
	const context = useContext(LanguageContext);
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
						yOffset={window.pageYOffset}
						images={projectsArray[id].images}
						name={context.language === 'pl' ? projectsArray[id].name : projectsArray[id].enName}
					/>
				)}
			/>
		</React.Fragment>
	);
};

const ProjectsPremiumPaths = props => {
	const context = useContext(LanguageContext);
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
						yOffset={window.pageYOffset}
						images={projectsPremiumArray[id].images}
						name={context.language === 'pl' ? projectsPremiumArray[id].name : projectsPremiumArray[id].enName}
					/>
				)}
			/>
		</React.Fragment>
	);
};

console.log('Thanks for image lightbox to: \'https://www.npmjs.com/package/react-image-lightbox\'');

function App() {
	return (
		<ScrollToTop>
			<Layout>
				<Suspense fallback={<Spinner />}>
					<Switch>
						<Route exact path="/studio" component={Studio} />
						<Route exact path="/offer" component={Offer} />
						<Route exact path="/contact" component={Contact} />
						<Route exact path="/partners" render={props => <Partners {...props} />} />
						<Route
							exact
							path="/realisations"
							render={props => <Realisations {...props} realisationsArray={realisationsArray} />}
						/>
						<Route path="/realisations/:id" component={RealisationsPaths} />
						<Route
							exact
							path="/realisations-premium"
							render={props => (
								<RealisationsPremium {...props} realisationsPremiumArray={realisationsPremiumArray} />
							)}
						/>
						<Route path="/realisations-premium/:id" component={RealisationsPremiumPaths} />
						<Route
							exact
							path="/projects"
							render={props => <Projects {...props} projectsArray={projectsArray} />}
						/>
						<Route path="/projects/:id" component={ProjectsPaths} />
						<Route
							exact
							path="/projects-premium"
							render={props => <ProjectsPremium {...props} projectsPremiumArray={projectsPremiumArray} />}
						/>
						<Route path="/projects-premium/:id" component={ProjectsPremiumPaths} />
						<Route exact path="/" component={Home} />
						<Redirect to="/" />
					</Switch>
				</Suspense>
			</Layout>
		</ScrollToTop>
	);
}

export default App;
