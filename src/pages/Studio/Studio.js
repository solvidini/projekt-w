import React, { useContext } from 'react';
import './Studio.scss';
import { LanguageContext } from '../../context';

const Studio = () => {
	const context = useContext(LanguageContext);
	return (
		<section className="section-studio">
			<h1 className="section-title">{context.dictionary.nav.studio}</h1>
			<p className="soon">{context.dictionary.soon}.</p>
		</section>
	);
};

export default Studio;
