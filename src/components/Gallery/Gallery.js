import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "./Gallery.scss";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app

const customStyles = {
  content: {
    backgroundColor: "rgba(0,0,0,0.6)"
  }
};

const Gallery = props => {
  const [toggler, setToggler] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

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
    </article>
  );
};

export default Gallery;
