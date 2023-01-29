import React from 'react';

import './DrawerToggle.scss';

const DrawerToggle = ({ sideDrawerIsVisible, clicked }) => {
  const iconClasses = ['drawer-toggle__icon'];
  if (sideDrawerIsVisible) {
    iconClasses.push('drawer-toggle__icon--active');
  }

  return (
    <div onClick={clicked} className='drawer-toggle__button'>
      <div className={iconClasses.join(' ')}>&nbsp;</div>
    </div>
  );
};

export default DrawerToggle;
