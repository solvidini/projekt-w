import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

import './LanguagePack.scss';
import Backdrop from './../UI/Backdrop/Backdrop';

const LanguagePack = (props) => {
	const lpClasses = ['language-pack'];
	props.show ? lpClasses.push('language-pack--show') : lpClasses.push('language-pack--hide');
	props.moveUp && lpClasses.push('language-pack--moveUp');

	return (
		<React.Fragment>
			<Backdrop show={props.show} notVisible={true} clicked={props.showToggler} />
			<div className={lpClasses.join(' ')} title="PL / ENG">
				<div className="language-pack__toggler" onClick={props.showToggler}>
					<FontAwesomeIcon icon={faGlobe} className="language-pack__toggler-icon" />
				</div>
				<div className="language-pack__down" onClick={props.hideToggler}>
					<button className="language-pack__select" onClick={props.clicked} data-language="pl">
						Polski
					</button>
					<button className="language-pack__select" onClick={props.clicked} data-language="en">
						English
					</button>
				</div>
			</div>
		</React.Fragment>
	);
};

export default React.memo(LanguagePack);
