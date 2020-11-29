import React, { useContext } from 'react';
import './Offer.scss';

import OfferItem from '../../components/OfferItem/OfferItem';

import picture1 from '../../assets/images/offer_minimum.jpg';
import picture2 from '../../assets/images/offer_medium.jpg';
import picture3 from '../../assets/images/offer_full.jpg';
import { LanguageContext } from '../../context';

const Offer = props => {
	const context = useContext(LanguageContext);

	const images = [
		{
			src: picture1,
			caption: context.dictionary.offer.title + ' 1',
			title: context.dictionary.offer.functional,
		},
		{
			src: picture2,
			caption: context.dictionary.offer.title + ' 2',
			title: context.dictionary.offer.conceptual,
		},
		{
			src: picture3,
			caption: context.dictionary.offer.title + ' 3',
			title: context.dictionary.offer.comprehensive,
		},
	];
	return (
		<section className="section-offer">
			<h1 className="section-title">{context.dictionary.nav.offer}</h1>
			<div className="offers">
				<OfferItem
					source={images[0].src}
					alt={context.dictionary.offer.functional}
					name={images[0].title}
				/>
				<OfferItem
					source={images[1].src}
					alt={context.dictionary.offer.conceptual}
					name={images[1].title}
				/>
				<OfferItem
					source={images[2].src}
					alt={context.dictionary.offer.comprehensive}
					name={images[2].title}
				/>
			</div>
		</section>
	);
};

export default Offer;
