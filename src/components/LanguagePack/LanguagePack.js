import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

import './LanguagePack.scss';

const LanguagePack = ({ visible, moveUp, showToggler, languagePackRef, languageChange }) => {
  const lpClasses = ['language-pack'];
  visible ? lpClasses.push('language-pack--show') : lpClasses.push('language-pack--hide');
  moveUp && lpClasses.push('language-pack--moveUp');

  return (
    <div className={lpClasses.join(' ')} title='PL / ENG'>
      <div className='language-pack__toggler' onClick={showToggler} ref={languagePackRef}>
        <FontAwesomeIcon icon={faGlobe} className='language-pack__toggler-icon' />
      </div>
      <div className='language-pack__down'>
        <button className='language-pack__select' onClick={languageChange} data-language='pl'>
          Polski
        </button>
        <button className='language-pack__select' onClick={languageChange} data-language='en'>
          English
        </button>
      </div>
    </div>
  );
};

export default React.memo(LanguagePack);
