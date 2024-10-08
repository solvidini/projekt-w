import React, { useContext } from 'react';
import './Partners.scss';
import { LanguageContext } from '../../context';
import Partner from '../../components/Partner/Partner';

import boconcept from '../../assets/images/partners/boconcept.png';
import boscoStudio from '../../assets/images/partners/bosco-studio.png';
import dha from '../../assets/images/partners/dha.png';
import doubleRoom from '../../assets/images/partners/double-room.png';
import elmax from '../../assets/images/partners/elmax.jpg';
import hoder from '../../assets/images/partners/hoder.jpg';
import kudoWnetrza from '../../assets/images/partners/kudo-wnetrza.png';
import maxfliz from '../../assets/images/partners/maxfliz.png';
import mera from '../../assets/images/partners/mera.png';
import proAudio from '../../assets/images/partners/pro-audio.png';
import profit from '../../assets/images/partners/profit.png';
import stolarnieGalicyjskie from '../../assets/images/partners/stolarnie-galicyjskie.png';
import magdalenaRzepka from '../../assets/images/partners/magdalena-rzepka.png';
import fizia from '../../assets/images/partners/fizia.png';
import muffin from '../../assets/images/partners/muffin.png';
import button from '../../assets/images/partners/button.png';
import wonderwall from '../../assets/images/partners/wonderwall.png';
import gibon from '../../assets/images/partners/gibon.png';
import styloweMetry from '../../assets/images/partners/stylowe-metry.png';

const Partners = () => {
  const context = useContext(LanguageContext);

  return (
    <div className='section-partners'>
      <h1 className='section-title'>{context.dictionary.nav.partners}</h1>
      <div className='content' style={{ padding: '5rem 0' }}>
        <Partner link='http://www.boscostudio.pl/' src={boscoStudio} alt='Bosco Studio' />
        <Partner link='http://www.elmax.tychy.pl/' src={elmax} alt='elmax' />
        <Partner link='https://www.maxfliz.pl/' src={maxfliz} alt='MAXFLIZ' />
        <Partner link='http://www.doubleroom.pl/' src={doubleRoom} alt='Double Room' />

        <Partner link='https://www.hoder.eu/' src={hoder} alt='hoder' />
        <Partner link='https://www.boconcept.com/pl-pl/' src={boconcept} alt='BoConcept' />
        <Partner src={styloweMetry} alt='Stylowe Metry' />
        <Partner link='https://mera.eu/' src={mera} alt='mera' />
        <Partner link='https://pracownia-button.pl/' src={button} alt='Button' />
        <Partner src={kudoWnetrza} alt='Kudo Wnetrza' />
        <Partner link='http://www.pro-audio.pl/' src={proAudio} alt='proaudio' />
        <Partner link='https://profit-sc.eu/' src={profit} alt='profit' />
        <Partner src={muffin} alt='muffin' />
        <Partner link='https://stolarniegalicyjskie.pl/' src={stolarnieGalicyjskie} alt='Stolarnie Galicyjskie' />
        <Partner link='https://www.facebook.com/PaniTapetka/' src={magdalenaRzepka} alt='Magdalena Rzepka' />
        <Partner link='http://www.fizia.pl/' src={fizia} alt='Fizia' />
        <Partner link='https://wonderwall-studio.pl/' src={wonderwall} alt='Wonderwall' />
        <Partner src={dha} alt='DHa' />
        <Partner link='http://meblegibon.pl/' src={gibon} alt='Gibon' />
      </div>
    </div>
  );
};

export default Partners;
