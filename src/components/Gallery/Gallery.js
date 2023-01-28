import React, { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Lightbox from 'react-image-lightbox';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import './Gallery.scss';
import { LanguageContext } from '../../context';

const customStyles = {
  content: {
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
};

const Gallery = ({ images, url, name = '', reference = null }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const context = useContext(LanguageContext);
  const [toggler, setToggler] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  if (!images) return navigate('/');

  const getReturnUrl = () => {
    const currentUrl = url;
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
    navigate(getReturnUrl(), { state: location.state });
  };

  const thumbnails = images.map((image, index) => {
    return (
      <div
        key={index}
        className='gallery__thumbnail'
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
        <img className='gallery__thumbnail-image' src={image} alt={context.dictionary.gallery.photo} />
      </div>
    );
  });

  const renderReference = () => {
    if (reference) {
      const nameOfReference = /projects/gi.test(reference)
        ? context.dictionary.gallery.projectsRef
        : context.dictionary.gallery.realisationsRef;
      return (
        <div className='reference'>
          <NavLink className='reference__link' to={reference}>
            ({nameOfReference})
          </NavLink>
        </div>
      );
    }
    return null;
  };

  const renderLightbox = () => {
    if (toggler) {
      return (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setToggler(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
          reactModalStyle={customStyles}
        />
      );
    }
    return null;
  };

  return (
    <article className='project'>
      <h1 className='project-title'>{name}</h1>
      {renderReference()}
      <div className='gallery'>{thumbnails}</div>
      {renderLightbox()}
      <div title={context.dictionary.gallery.back} className='return' onClick={goBack}>
        <FontAwesomeIcon icon={faArrowLeft} style={{ color: '#141414' }} />
      </div>
    </article>
  );
};

export default Gallery;
