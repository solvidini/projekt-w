import React from "react";

import "./Home.scss";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import realisation_1 from "../../assets/images/realisations-premium/penthouse_w_katowicach/index";
import realisation_2 from "../../assets/images/realisations-premium/dom_w_tychach/index";
import project_1 from '../../assets/images/projects/kompaktowy_apartament_w_katowicach/index';

const Home = props => {
  const content = [
    {
      title: realisation_1.name,
      background: realisation_1.images[38].src
    },
    {
      title: realisation_2.name,
      background: realisation_2.images[7].src
    },
    {
      title: project_1.name,
      background: project_1.images[14].src
    }
  ];
  return (
    <Slider className="slider-wraper" autoplay={3000} infinite={true} duration={2000}>
      {content.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          
          style={{
            background: `url(${item.background}) no-repeat center center`
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
