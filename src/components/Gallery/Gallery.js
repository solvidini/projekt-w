import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Lightbox from "react-image-lightbox";
import "./Gallery.scss";

const customStyles = {
  content: {
    backgroundColor: "rgba(0,0,0,0.6)"
  }
};

const Gallery = props => {
  const [toggler, setToggler] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  if (!props.images) return <Redirect to="/" />;

  const getReturnUrl = () => {
    const currentUrl = props.match.url;
    let howManyToLeave = 1;
    for (let i=1; i<currentUrl.length; i++) {
      if(currentUrl[i] === '/') {
        break;
      }
      howManyToLeave++;
    }
    const returnUrl = currentUrl.slice(0,howManyToLeave);
    return returnUrl;
  }

  const goBack = () => {
    const returnUrl = getReturnUrl();
    props.history.push(returnUrl, props.yOffset);
  }

  const thumbnails = props.images.map((image, index) => {
    return (
      <div
        key={index}
        className="gallery__thumbnail"
        onClick={() => {
          setPhotoIndex(index);
          setToggler(true);
        }}
      >
        <div className="gallery__thumbnail__curtain"></div>
        <img
          className="gallery__thumbnail__image"
          src={image.tn}
          alt="Zdjecie z realizacji"
        />
      </div>
    );
  });

  const images = props.images;

  return (
    <article className="project">
      <h1 className="project__title">{props.name}</h1>
      <div className="gallery">{thumbnails}</div>
      {toggler && (
        <Lightbox
          mainSrc={images[photoIndex].src}
          nextSrc={images[(photoIndex + 1) % images.length].src}
          prevSrc={images[(photoIndex + images.length - 1) % images.length].src}
          onCloseRequest={() => setToggler(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
          reactModalStyle={customStyles}
        />
      )}
      <div title="Powrót" className="return" onClick={() => goBack()}><i className="fas fa-arrow-left"></i></div>
    </article>
  );
};

export default Gallery;
