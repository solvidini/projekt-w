import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import './Creation.scss';
import { LanguageContext } from '../../context';

const Creation = props => {
	const context = useContext(LanguageContext);
	return (
		<div className="creations__item">
			<NavLink to={props.to}>
				<div className="creations__item-discover">{context.dictionary.discover}</div>
				<img className="creations__item-image" src={props.source} alt={props.name} />
				<div className="creations__item-text">{props.name}</div>
			</NavLink>
		</div>
	);
};

export default Creation;
