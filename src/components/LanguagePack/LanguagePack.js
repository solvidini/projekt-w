import React from 'react';

import './LanguagePack.scss';
import Backdrop from './../UI/Backdrop/Backdrop';

const LanguagePack = props => {
	console.log(props.show);
	const lpClasses = ['language-pack'];
	props.show ? lpClasses.push('language-pack--show') : lpClasses.push('language-pack--hide');
	props.moveUp && lpClasses.push('language-pack--moveUp');

	return (
		<React.Fragment>
			<Backdrop show={props.show} notVisible={true} clicked={props.showToggler}/>
			<div className={lpClasses.join(' ')} title="PL / ENG">
				<div className="language-pack__toggler" onClick={props.showToggler}>
					<i className="fas fa-globe language-pack__toggler__icon"></i>
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
