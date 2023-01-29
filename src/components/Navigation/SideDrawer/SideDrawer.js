import React, { Fragment } from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.scss';
import Backdrop from '../../UI/Backdrop/Backdrop';

const SideDrawer = ({ opened, closed }) => {
  let sideDrawerClasses = ['side-drawer', 'side-drawer--closed'];
  if (opened) {
    sideDrawerClasses = ['side-drawer', 'side-drawer--opened'];
  }

  return (
    <Fragment>
      <Backdrop show={opened} clicked={closed} />
      <div className={sideDrawerClasses.join(' ')}>
        <nav className='side-drawer__nav'>
          <NavigationItems clicked={closed} opened={opened} />
        </nav>
      </div>
    </Fragment>
  );
};

export default SideDrawer;
