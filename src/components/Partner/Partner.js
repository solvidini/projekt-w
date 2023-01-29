import React from 'react';
import './Partner.scss';

const Partner = ({ link = '', src, alt }) => {
  let partner = null;

  if (link === '') {
    partner = (
      <div className='partner'>
        <img className='partner__image' src={src} alt={alt} />
      </div>
    );
  } else {
    partner = (
      <a href={link} target='_blank' rel='noopener noreferrer'>
        <div className='partner'>
          <img className='partner__image' src={src} alt={alt} />
        </div>
      </a>
    );
  }

  return partner;
};

export default Partner;
