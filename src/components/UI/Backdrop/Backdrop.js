import React from 'react';

import './Backdrop.scss';

const Backdrop = ({ show, notVisible, clicked }) =>
  show ? <div className={notVisible ? 'backdrop' : 'backdrop backdrop--visible'} onClick={clicked}></div> : null;

export default Backdrop;
