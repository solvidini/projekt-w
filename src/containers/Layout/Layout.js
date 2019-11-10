import React, { useState, useEffect, useRef } from "react";

import "./Layout.scss";

const Layout = props => {
  const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [stickyToolbar, setStickyToolbar] = useState(false);

  return (
    <React.Fragment>
      <div className="lol">TOOLBAR</div>
      {props.children}
    </React.Fragment>
  );
};

export default Layout;
