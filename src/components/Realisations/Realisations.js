import React from 'react';
import { NavLink } from 'react-router-dom';

import project_1 from '../../assets/images/kompaktowy_apartament_w_katowicach/index';
import project_2 from '../../assets/images/dom_w_rzeszowie/index';
import './Realisations.scss';

const Realisations = (props) => {

    return (
        <div>
            <h1 style={{ textAlign: 'center', color: 'blue' }}>Realizacje projektów</h1>
            <div className="Realisations">
                <div className="ImageContainer" >
                    <NavLink to="/realisations/1">
                        <img className="Image" src={project_1[0].src} alt={props.name} />
                        <div className="ImageText" >Kompaktowy Apartament w Katowicach</div>
                    </NavLink>
                </div>
                <div className="ImageContainer" >
                    <NavLink to="/realisations/2">
                        <img className="Image" src={project_2[0].src} alt={props.name} />
                        <div className="ImageText" >Dom w Rzeszowie</div>
                    </NavLink>
                </div>
            </div>
        </div >
    );
};

export default Realisations;