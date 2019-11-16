import React from "react";
import "./Partners.scss";
import Partner from "../../components/Partner/Partner";

import boconcept from "../../assets/images/partners/boconcept.png";
import boscoStudio from "../../assets/images/partners/bosco-studio.jpg";
import dha from "../../assets/images/partners/dha.jpg";
import doubleRoom from "../../assets/images/partners/double-room.jpg";
import elmax from "../../assets/images/partners/elmax.jpg";
import hoder from "../../assets/images/partners/hoder.jpg";
import krMeble from "../../assets/images/partners/kr-meble.jpg";
import kudoWnetrza from "../../assets/images/partners/kudo-wnetrza.jpg";
import maxfliz from "../../assets/images/partners/maxfliz.png";
import mera from "../../assets/images/partners/mera.png";
import muffin from "../../assets/images/partners/muffin.png";
import proAudio from "../../assets/images/partners/pro-audio.png";
import profit from "../../assets/images/partners/profit.png";
import stolarnieGalicyjskie from "../../assets/images/partners/stolarnie-galicyjskie.png";

const Partners = () => (
  <div className="section-partners">
    <h1 className="section-title">Partnerzy</h1>
    <div className="content" style={{ padding: "5rem 0" }}>
      <Partner link="https://krmeble.pl/" src={krMeble} alt="KR meble" />
      <Partner
        link="http://www.boscostudio.pl/"
        src={boscoStudio}
        alt="Bosco Studio"
      />
      <Partner link="" src={dha} alt="DHa" />
      <Partner link="https://www.maxfliz.pl/" src={maxfliz} alt="MAXFLIZ" />
      <Partner
        link="http://www.doubleroom.pl/"
        src={doubleRoom}
        alt="Double Room"
      />
      <Partner link="http://www.elmax.tychy.pl/" src={elmax} alt="elmax" />
      <Partner link="https://www.hoder.eu/" src={hoder} alt="hoder" />
      <Partner
        link="https://www.boconcept.com/pl-pl/"
        src={boconcept}
        alt="BoConcept"
      />
      <Partner link="" src={kudoWnetrza} alt="Kudo Wnetrza" />
      <Partner
        link="http://www.andrzejskomorowski.pl/"
        src={muffin}
        alt="muffin"
      />
      <Partner link="http://www.pro-audio.pl/" src={proAudio} alt="proaudio" />
      <Partner link="https://profit-sc.eu/" src={profit} alt="profit" />
      <Partner
        link="https://stolarniegalicyjskie.pl/"
        src={stolarnieGalicyjskie}
        alt="Stolarnie Galicyjskie"
      />
      <Partner
        link="https://www.facebook.com/PaniTapetka/"
        src="https://scontent.fktw1-1.fna.fbcdn.net/v/t1.0-9/s960x960/67430221_934601596891468_3885741592266407936_o.jpg?_nc_cat=105&_nc_oc=AQkCP7Rf_FxVWdUQ59c3KQXsQjoefnEToBdGOWeBdMgV8PuNwOMgiQYwn07ax3L9v24&_nc_ht=scontent.fktw1-1.fna&oh=4871c579608946d4cbf742a719c15f41&oe=5E4A0227"
        alt="Magdalena Rzepka"
      />
      <Partner link="https://mera.eu/" src={mera} alt="mera" />
    </div>
  </div>
);

export default Partners;
