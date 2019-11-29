import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "./Offer.scss";

import OfferItem from "../../components/OfferItem/OfferItem";

import picture1 from "../../assets/images/offer_minimum.jpg";
import picture2 from "../../assets/images/offer_medium.jpg";
import picture3 from "../../assets/images/offer_full.jpg";

const customStyles = {
  content: {
    backgroundColor: "rgba(0,0,0,0.6)",
    fontSize: "1.6rem"
  }
};

const Offer = props => {
  const [toggler, setToggler] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const images = [
    {
      src: picture1,
      title: "OFERTA MINIMALNA",
      caption: "Projekt\xa0funkcjonalny (układ\xa0na\xa0rzucie\xa02D)"
    },
    {
      src: picture2,
      title: "OFERTA ŚREDNIA",
      caption: "Projekt\xa0koncepcyjno-wykonawczy z\xa0wizualizacjami\xa03D"
    },
    {
      src: picture3,
      title: "OFERTA PEŁNA",
      caption: "Projekt\xa0kompleksowy (realizacja\xa0pod\xa0klucz)"
    }
  ];
  return (
    <section className="section-offer">
      <h1 className="section-title">Oferta</h1>
      <div className="offers">
        <OfferItem
          source={images[0].src}
          alt="Projekt funkcjonalny (układ na rzucie 2D)"
          name={images[0].caption}
          title={images[0].title}
          clicked={() => {
            setToggler(true);
            setPhotoIndex(0);
          }}
        />
        <OfferItem
          source={images[1].src}
          alt="Projekt koncepcyjno-wykonawczy z wizualizacjami 3D"
          name={images[1].caption}
          title={images[1].title}
          clicked={() => {
            setToggler(true);
            setPhotoIndex(1);
          }}
        />
        <OfferItem
          source={images[2].src}
          alt="Projekt kompleksowy (realizacja pod klucz)"
          name={images[2].caption}
          title={images[2].title}
          clicked={() => {
            setToggler(true);
            setPhotoIndex(2);
          }}
        />
        {toggler && (
          <Lightbox
            mainSrc={images[photoIndex].src}
            nextSrc={images[(photoIndex + 1) % images.length].src}
            prevSrc={
              images[(photoIndex + images.length - 1) % images.length].src
            }
            onCloseRequest={() => setToggler(false)}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + images.length - 1) % images.length)
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % images.length)
            }
            reactModalStyle={customStyles}
            imageTitle={images[photoIndex].title}
            imageCaption={
              images[photoIndex].caption
            }
          />
        )}
      </div>
    </section>
  );
};

export default Offer;
