import React, { useState, useEffect, useRef } from "react";

import "./Layout.scss";
import Toolbar from "../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../components/Navigation/SideDrawer/SideDrawer";
import Footer from '../components/Footer/Footer';

const Layout = props => {
  const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [stickyToolbar, setStickyToolbar] = useState(false);
  const toolbarRef = useRef(null);
  const toolbarSmallRef = useRef(null);

  const yOffset = () => {
    setScrollY(window.pageYOffset);
  };

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener("scroll", yOffset);
    };
    watchScroll();
    return () => {
      window.removeEventListener("scroll", yOffset);
    };
  });

  useEffect(() => {
    const toolbarHeight = toolbarRef.current
      ? toolbarRef.current.offsetHeight - toolbarSmallRef.current.offsetHeight
      : 90;

    if (scrollY > toolbarHeight) {
      setStickyToolbar(true);
    } else {
      setStickyToolbar(false);
    }
  }, [setStickyToolbar, scrollY]);

  const sideDrawerToggleHandler = () => {
    setSideDrawerIsVisible(!sideDrawerIsVisible);
  };

  const sideDrawerClosedHandler = () => {
    setSideDrawerIsVisible(false);
  };

  return (
    <React.Fragment>
      <div className="toolbar-height" ref={toolbarRef}>
        <div className="toolbar-height--small" ref={toolbarSmallRef}></div>
      </div>
      <Toolbar
        sideDrawerToggleClicked={sideDrawerToggleHandler}
        sideDrawerIsVisible={sideDrawerIsVisible}
        sticky={stickyToolbar}
      />
      <SideDrawer
        opened={sideDrawerIsVisible}
        closed={sideDrawerClosedHandler}
      />
      {props.children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
