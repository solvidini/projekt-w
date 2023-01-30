import React, { useContext } from 'react';
import './Studio.scss';
import { LanguageContext } from '../../context';
import p2 from '../../assets/images/studio/p2.jpeg'

const Studio = () => {
	const context = useContext(LanguageContext);

	return (
		<section className='section-studio'>
			<h1 className='section-title'>{context.dictionary.nav.studio}</h1>
			<div className='studio__description'>
				{context.language === 'pl' ? (
					<>
						<p className='studio__paragraph'>
							<span className='studio__highlight'>Projekt W Pracownia Architektury Wnętrz</span> jest dumnie prowadzona
							przez kobiety, które wnoszą do&nbsp;projektowania unikalne i&nbsp;pełne pasji podejście. Tworzą wnętrza
							dostosowane do&nbsp;indywidualizmu, osobowości i&nbsp;sposobu życia Klienta. Wyróżniają się funkcjonalnością,
							oryginalnością i&nbsp;starannym doborem materiałów i&nbsp;detali.
						</p>
						<p className='studio__paragraph'>
							Proces twórczy, który łączy architektów wnętrz z&nbsp;Klientem jest niezwykle istotny dla&nbsp;osiągnięcia wyjątkowych
							rezultatów. Realizacje są&nbsp;fascynującą przygodą, której efektem są&nbsp;magiczne wnętrza, dopracowane w
							najdrobniejszym szczególe. Zrealizowany projekt powinien służyć Klientowi przez wiele lat&nbsp;i&nbsp;zapewnić
							mu poczucie komfortu i&nbsp;swobody.
						</p>
						<p className='studio__paragraph'>
							Założona w 2014 roku, Pracownia <span className='studio__highlight'>Projekt W</span> zdobyła zaufanie wielu
							Klientów indywidualnych, inwestycyjnych oraz&nbsp;biznesowych. Pełne zaangażowanie zespołu gwarantuje realizację wnętrza,
							wykraczającą ponad oczekiwania Klienta.
						</p>
					</>
				) : (<>
					<p className='studio__paragraph'>
						<span className='studio__highlight'>Projekt W Interior Design Studio</span> is proudly run by women who bring a unique and passionate approach to design. They create interiors adapted to the individuality, personality and way of life of the client. They are distinguished by functionality, originality and careful selection of materials and details.
					</p>
					<p className='studio__paragraph'>
						The creative process that connects interior designers with the client is extremely important to achieve exceptional results. The projects are a fascinating adventure, the effect of which is magical interiors, refined to the smallest detail. The completed project should serve the client for many years and provide him with a sense of comfort and freedom.
					</p>
					<p className='studio__paragraph'>
						Established in 2014, the <span className='studio__highlight'>Projekt W</span> studio has won the trust of many individual, investment and business clients. The full commitment of the team guarantees the implementation of the interior, exceeding the customer's expectations.
					</p>
				</>)}
				<img className='studio__photo' src={p2} alt='Studio' />
			</div>
			<h3 className='studio__team-title'>{context.dictionary.studio.team}</h3>
			<div className='studio__team'>
				<div>
					<div className='studio__team-name'>Weronika Kędziora</div>
					<div className='studio__team-profession'>{context.dictionary.studio.architect} | CEO</div>
				</div>
				<div>
					<div className='studio__team-name'>Sabina Masłowska-Moćko</div>
					<div className='studio__team-profession'>{context.dictionary.studio.architect} | CEO</div>
				</div>
				<div>
					<div className='studio__team-name'>Wiktoria Spruch</div>
					<div className='studio__team-profession'>{context.dictionary.studio.assistant}</div>
				</div>
				<div>
					<div className='studio__team-name'>Agata Szynderska</div>
					<div className='studio__team-profession'>STUDIO MANAGER | {context.dictionary.studio.logistics}</div>
				</div>
			</div>
		</section>
	);
};

export default Studio;
