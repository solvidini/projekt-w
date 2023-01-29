import React, { useContext } from 'react';

import './NavigationItems.scss';
import NavigationItem from './NavigationItem/NavigationItem';
import { LanguageContext } from '../../../context';

const NavigationItems = ({ clicked = () => { } }) => {
  const context = useContext(LanguageContext);

  return (
    <ul className='navigation-list'>
      <li className='navigation-item' onClick={clicked}>
        <NavigationItem link='/'>{context.dictionary.nav.home}</NavigationItem>
      </li>
      <li className='navigation-item' onClick={clicked}>
        <NavigationItem link='/realisations'>{context.dictionary.nav.realisations}</NavigationItem>
      </li>
      <li className='navigation-item' onClick={clicked}>
        <NavigationItem link='/projects'>{context.dictionary.nav.projects}</NavigationItem>
      </li>
      <li className='navigation-item' onClick={clicked}>
        <NavigationItem link='/studio'>{context.dictionary.nav.studio}</NavigationItem>
      </li>
      <li className='navigation-item' onClick={clicked}>
        <NavigationItem link='/contact'>{context.dictionary.nav.contact}</NavigationItem>
      </li>
      <li className='navigation-item' onClick={clicked}>
        <NavigationItem link='/offer'>{context.dictionary.nav.offer}</NavigationItem>
      </li>
      <li className='navigation-item' onClick={clicked}>
        <NavigationItem link='/partners'>{context.dictionary.nav.partners}</NavigationItem>
      </li>
    </ul>
  );
};

export default NavigationItems;
