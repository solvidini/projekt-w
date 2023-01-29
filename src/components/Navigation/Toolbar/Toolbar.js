import React from 'react';

import './Toolbar.scss';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import Logo from '../../Logo/Logo';
import { NavLink } from 'react-router-dom';

const Toolbar = ({ sticky, sideDrawerIsVisible, sideDrawerToggleClicked }) => {
  const toolbarClasses = ['toolbar'];

  if (sticky) {
    toolbarClasses.push('toolbar--sticky');
  }

  if (sideDrawerIsVisible) {
    toolbarClasses.push('toolbar--transparent');
  }

  return (
    <div className={toolbarClasses.join(' ')}>
      {!sideDrawerIsVisible && (
        <NavLink className='toolbar__link-home' to='/'>
          <Logo small={sticky} />
        </NavLink>
      )}
      <DrawerToggle sideDrawerIsVisible={sideDrawerIsVisible} clicked={sideDrawerToggleClicked} />
      <nav className='toolbar__nav desktop-only'>
        <NavigationItems isToolbarSticky={sticky} />
      </nav>
    </div>
  );
};

export default Toolbar;
