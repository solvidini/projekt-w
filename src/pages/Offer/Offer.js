import React from 'react';
import './Offer.scss';

import OfferItem from '../../components/OfferItem/OfferItem';

import picture1 from '../../assets/images/projects/kompaktowy_apartament_w_katowicach/p1.jpg';
import picture2 from '../../assets/images/projects/kompaktowy_apartament_w_katowicach/p5.jpg';
import picture3 from '../../assets/images/projects/kompaktowy_apartament_w_katowicach/p12.jpg';


const Offer = () =>  (
    <section className="section-offer">
        <h1 className="section-title">Oferta</h1>
        <div className="offers">
            <OfferItem to="/" source={picture1} alt="Projekt funkcjonalny układ na rzucie 2D" name="Projekt&nbsp;funkcjonalny &ndash; układ&nbsp;na&nbsp;rzucie&nbsp;2D" />
            <OfferItem to="/" source={picture2} alt="Projekt koncepcyjno-wykonawczy z wizualizacjami 3D" name="Projekt&nbsp;koncepcyjno-wykonawczy z&nbsp;wizualizacjami&nbsp;3D" />
            <OfferItem to="/" source={picture3} alt="Projekt funkcjonalny układ na rzucie 2D" name="Projekt&nbsp;kompleksowy &ndash; realizacja&nbsp;pod&nbsp;klucz" />
        </div>
    </section>
);

export default Offer;