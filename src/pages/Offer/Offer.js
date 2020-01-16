import React, { useState, useContext } from 'react';
import Lightbox from 'react-image-lightbox';
import './Offer.scss';

import OfferItem from '../../components/OfferItem/OfferItem';

import picture1 from '../../assets/images/offer_minimum.jpg';
import picture2 from '../../assets/images/offer_medium.jpg';
import picture3 from '../../assets/images/offer_full.jpg';
import { LanguageContext } from '../../context';

const customStyles = {
	content: {
		backgroundColor: 'rgba(0,0,0,0.6)',
		fontSize: '1.6rem',
	},
};

const Offer = props => {
	const context = useContext(LanguageContext);
	const [toggler, setToggler] = useState(false);
	const [photoIndex, setPhotoIndex] = useState(0);

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
					clicked={() => {
						setToggler(true);
						setPhotoIndex(0);
					}}
				/>
				<OfferItem
					source={images[1].src}
					alt={context.dictionary.offer.conceptual}
					name={images[1].title}
					clicked={() => {
						setToggler(true);
						setPhotoIndex(1);
					}}
				/>
				<OfferItem
					source={images[2].src}
					alt={context.dictionary.offer.comprehensive}
					name={images[2].title}
					clicked={() => {
						setToggler(true);
						setPhotoIndex(2);
					}}
				/>
				{toggler && (
					<Lightbox
						mainSrc={images[photoIndex].src}
						nextSrc={images[(photoIndex + 1) % images.length].src}
						prevSrc={images[(photoIndex + images.length - 1) % images.length].src}
						onCloseRequest={() => setToggler(false)}
						enableZoom={false}
						onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
						onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
						reactModalStyle={customStyles}
						imageTitle={images[photoIndex].title}
						imageCaption={images[photoIndex].caption}
					/>
				)}
			</div>
		</section>
	);
};

export default Offer;
