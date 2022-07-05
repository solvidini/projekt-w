import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';

import './Creation.scss';
import { LanguageContext } from '../../context';

const Creation = ({ to, source, name }) => {
  const context = useContext(LanguageContext);
  const [yOffset, setYOffset] = useState(window.scrollY);

  return (
    <div className='creations__item'>
      <NavLink
        to={to}
        onMouseDown={() => {
          setYOffset(window.scrollY);
        }}
        onTouchStart={() => {
          setYOffset(window.scrollY);
        }}
        state={{ yOffset }}
      >
        <div className='creations__item-discover'>{context.dictionary.discover}</div>
        <img className='creations__item-image' src={source} alt={name} />
        <div className='creations__item-text'>{name}</div>
      </NavLink>
    </div>
  );
};

export default Creation;
