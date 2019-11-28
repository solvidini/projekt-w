import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "./Offer.scss";

import OfferItem from "../../components/OfferItem/OfferItem";

import picture1 from "../../assets/images/projects/apartament_w_gliwicach/p1.jpg";
import picture2 from "../../assets/images/projects/apartament_w_warszawie/p1.jpg";
import picture3 from "../../assets/images/offer_key.jpg";

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
      title: "Projekt\xa0funkcjonalny (układ\xa0na\xa0rzucie\xa02D)"
    },
    {
      src: picture2,
      title: "Projekt\xa0koncepcyjno-wykonawczy z\xa0wizualizacjami\xa03D"
    },
    {
      src: picture3,
      title: "Projekt\xa0kompleksowy (realizacja\xa0pod\xa0klucz)"
    }
  ];
  return (
    <section className="section-offer">
      <h1 className="section-title">Oferta</h1>
      <p className="soon">W trakcie...</p>
      <div className="offers">
        <OfferItem
          source={images[0].src}
          alt="Projekt funkcjonalny (układ na rzucie 2D)"
          name={images[0].title}
          clicked={() => {
            setToggler(true);
            setPhotoIndex(0);
          }}
        />
        <OfferItem
          source={images[1].src}
          alt="Projekt koncepcyjno-wykonawczy z wizualizacjami 3D"
          name={images[1].title}
          clicked={() => {
            setToggler(true);
            setPhotoIndex(1);
          }}
        />
        <OfferItem
          source={images[2].src}
          alt="Projekt kompleksowy (realizacja pod klucz)"
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
              "Oferta " + (photoIndex + 1) + " - " + images[photoIndex].title
            }
          />
        )}
      </div>
    </section>
  );
};

export default Offer;
