import React from "react";

import "./Home.scss";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import project_1 from "../../assets/images/kompaktowy_apartament_w_katowicach/index";

const Home = props => {
  const content = [
    {
      title: "Slajd 1",
      description:
        "Laboris elit do culpa incididunt amet dolor do veniam. Labore commodo qui ut deserunt cillum proident consequat pariatur deserunt. Elit "
    },
    {
      title: "Slajd 2",
      description:
        "Laboris elit do culpa incididunt amet dolor do veniam. Labore commodo qui ut deserunt cillum proident consequat pariatur deserunt. Elit commodo amet consequat cupidatat consequat veniam proident ipsum cillum magna. Dolor est ullamco "
    },
    {
      title: "Slajd 3",
      description:
        "Laboris elit do culpa incididunt amet dolor do veniam. Labore commodo qui ut deserunt cillum proident consequat pariatur deserunt. Elit commodo amet consequat cupidatat consequat veniam proident ipsum cillum magna. "
    },
    {
      title: "Slajd 4",
      description:
        "Laboris elit do culpa incididunt amet dolor do veniam. Labore commodo qui ut deserunt cillum proident consequat pariatur deserunt. "
    }
  ];
  return (
    <Slider className="slider-wraper" autoplay={3000}>
      {content.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          style={{
            background: `url(${project_1[index].src}) no-repeat center center`
          }}
        >
          <div className="slider-content__text">
            <h2 className="slider-content__text__title">{item.title}</h2>
            <p className="slider-content__text__description">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Home;
