import React from 'react';

import './Home.scss';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import realisation_1 from '../../assets/images/realisations-premium/penthouse_w_katowicach/index';
import realisation_2 from '../../assets/images/realisations-premium/dom_w_tychach/index';
import realisation_3 from '../../assets/images/realisations/mieszkanie_pod_wynajem_katowice_nasypowa_1/index';

const Home = props => {
	const content = [
		{
			title: realisation_2.name,
			background: realisation_2.images[7].src,
		},
		{
			title: realisation_1.name,
			background: realisation_1.images[20].src,
		},
		{
			title: realisation_3.name,
			background: realisation_3.images[9].src,
		},
		{
			title: realisation_1.name,
			background: realisation_1.images[10].src,
		},
		{
			title: realisation_1.name,
			background: realisation_1.images[38].src,
		},
	];
	return (
		<Slider className="slider-wraper" autoplay={4000} infinite={true}>
			{content.map((item, index) => (
				<div
					key={item.title + index}
					className="slider-content"
					style={{
						background: `url(${item.background}) no-repeat center center`,
					}}
				>
					<div className="slider-content__text">
						<h2 className="slider-content__text__title">{item.title}</h2>
					</div>
				</div>
			))}
		</Slider>
	);
};

export default Home;
