import React from 'react';

import './LanguagePack.scss';

const LanguagePack = props => {
	return (
		<div className="language-pack" style={props.moveUp ? { top: '4.5rem' } : null}>
			<div className="language-pack__toggler">
				<i className="fas fa-globe"></i>
			</div>
			<div className="language-pack__down">
				<button className="language-pack__select" onClick={props.clicked} data-language="pl">
					Polski
				</button>
				<button className="language-pack__select" onClick={props.clicked} data-language="en">
					English
				</button>
			</div>
		</div>
	);
};

export default LanguagePack;
