import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Lightbox from 'react-image-lightbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import './Gallery.scss';
import { LanguageContext } from '../../context';

const customStyles = {
	content: {
		backgroundColor: 'rgba(0,0,0,0.6)',
	},
};

const Gallery = (props) => {
	const context = useContext(LanguageContext);
	const [toggler, setToggler] = useState(false);
	const [photoIndex, setPhotoIndex] = useState(0);
	const images = props.images;

	if (!images) return <Redirect to="/" />;

	const getReturnUrl = () => {
		const currentUrl = props.match.url;
		let howManyToLeave = 1;
		for (let i = 1; i < currentUrl.length; i++) {
			if (currentUrl[i] === '/') {
				break;
			}
			howManyToLeave++;
		}
		const returnUrl = currentUrl.slice(0, howManyToLeave);
		return returnUrl;
	};

	const goBack = () => {
		const returnUrl = getReturnUrl();
		props.history.push(returnUrl, props.yOffset);
	};

	const thumbnails = images.map((image, index) => {
		return (
			<div
				key={index}
				className="gallery__thumbnail"
				onClick={() => {
					setPhotoIndex(index);
					setToggler(true);
				}}
			>
				<div
					className={
						context.language === 'pl'
							? 'gallery__thumbnail-curtain gallery__thumbnail-curtain--pl'
							: 'gallery__thumbnail-curtain gallery__thumbnail-curtain--en'
					}
				></div>
				<img className="gallery__thumbnail-image" src={image.tn} alt={context.dictionary.gallery.photo} />
			</div>
		);
	});

	return (
		<article className="project">
			<h1 className="project-title">{props.name}</h1>
			<div className="gallery">{thumbnails}</div>
			{toggler && (
				<Lightbox
					mainSrc={images[photoIndex].src}
					nextSrc={images[(photoIndex + 1) % images.length].src}
					prevSrc={images[(photoIndex + images.length - 1) % images.length].src}
					onCloseRequest={() => setToggler(false)}
					onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
					onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
					reactModalStyle={customStyles}
				/>
			)}
			<div title={context.dictionary.gallery.back} className="return" onClick={() => goBack()}>
				<FontAwesomeIcon icon={faArrowLeft} />
			</div>
		</article>
	);
};

export default Gallery;
