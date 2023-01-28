import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

import './Home.scss';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import realisation_1 from '../../assets/images/realisations/penthouse_w_katowicach/index';
import realisation_2 from '../../assets/images/realisations/dom_w_tychach/index';
import { LanguageContext } from '../../context';

const Home = () => {
  const context = useContext(LanguageContext);
  const content = [
    {
      title:
        context.language === 'pl'
          ? realisation_2.name
          : context.language === 'en'
          ? realisation_2.enName
          : realisation_2.name,
      background: realisation_2.images[7],
    },
    {
      title:
        context.language === 'pl'
          ? realisation_1.name
          : context.language === 'en'
          ? realisation_1.enName
          : realisation_1.name,
      background: realisation_1.images[20],
    },
    {
      title:
        context.language === 'pl'
          ? realisation_1.name
          : context.language === 'en'
          ? realisation_1.enName
          : realisation_1.name,
      background: realisation_1.images[10],
    },
    {
      title:
        context.language === 'pl'
          ? realisation_1.name
          : context.language === 'en'
          ? realisation_1.enName
          : realisation_1.name,
      background: realisation_1.images[38],
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
          >
            <div className='slider-content__text'>
              <h2 className='slider-content__text__title'>{item.title}</h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Home;
