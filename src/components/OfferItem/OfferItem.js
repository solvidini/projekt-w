import React from 'react';

import './OfferItem.scss';

const OfferItem = ({ clicked, source, name }) => {
  return (
    <div className='offer__item' onClick={clicked}>
      <img className='offer__item-image' src={source} alt={name} />
      <div className='offer__item-text'>{name}</div>
    </div>
  );
};

export default OfferItem;
