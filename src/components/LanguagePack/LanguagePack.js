import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

import './LanguagePack.scss';

const LanguagePack = (props) => {
  const lpClasses = ['language-pack'];
  props.visible
    ? lpClasses.push('language-pack--show')
    : lpClasses.push('language-pack--hide');
  props.moveUp && lpClasses.push('language-pack--moveUp');

  return (
      <div className={lpClasses.join(' ')} title="PL / ENG">
        <div
          className="language-pack__toggler"
          onClick={props.showToggler}
          ref={props.languagePackRef}
        >
          <FontAwesomeIcon
            icon={faGlobe}
            className="language-pack__toggler-icon"
          />
        </div>
        <div className="language-pack__down">
          <button
            className="language-pack__select"
            onClick={props.languageChange}
            data-language="pl"
          >
            Polski
          </button>
          <button
            className="language-pack__select"
            onClick={props.languageChange}
            data-language="en"
          >
            English
          </button>
        </div>
      </div>
  );
};

export default React.memo(LanguagePack);
