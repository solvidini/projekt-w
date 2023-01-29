import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

import './Home.scss';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import p1 from '../../assets/images/home/p1.jpg';
import p2 from '../../assets/images/home/p2.jpg';
import p3 from '../../assets/images/home/p3.jpg';
import p4 from '../../assets/images/home/p4.jpg';
import p5 from '../../assets/images/home/p5.jpg';
import p6 from '../../assets/images/home/p6.jpg';
import p7 from '../../assets/images/home/p7.jpg';

const Home = () => {
  const content = [
    {
      background: p5,
    },
    {
      background: p6,
    },
    {
      background: p1,
    },
    {
      background: p2,
    },
    {
      background: p3,
    },
    {
      background: p4,
    },
    {
      background: p7,
    },
  ];
  return (
    <div className='home'>
      <div className='home__media'>
        <div className='home__item'>
          <a
            className='home__link'
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.facebook.com/ProjektWPAW/'
          >
            <FontAwesomeIcon icon={faFacebookF} className='home__icon' />
          </a>
        </div>
        <div className='home__item'>
          <a
            className='home__link'
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.instagram.com/projekt__w/'
          >
            <FontAwesomeIcon icon={faInstagram} className='home__icon' />
          </a>
        </div>
      </div>
      <Slider className='slider-wraper' autoplay={4000} infinite={true}>
        {content.map((item, index) => (
          <div
            key={item.title + index}
            className='slider-content'
            style={{
              background: `url(${item.background}) no-repeat center center`,
            }}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Home;
