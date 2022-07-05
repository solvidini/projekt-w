import React, { useState, useEffect, useRef, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import './Layout.scss';
import Toolbar from '../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../components/Navigation/SideDrawer/SideDrawer';
import Footer from '../components/Footer/Footer';
import { LanguageContext } from '../context';
import LanguagePack from '../components/LanguagePack/LanguagePack';

const Layout = ({ children }) => {
  const context = useContext(LanguageContext);
  const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);
  const [showLanguages, setShowLanguages] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [resizeX, setResizeX] = useState(0);
  const [stickyToolbar, setStickyToolbar] = useState(false);
  const [minHeight, setMinHeight] = useState({});
  const toolbarRef = useRef(null);
  const toolbarSmallRef = useRef(null);
  const footerRef = useRef(null);
  const languagePackRef = useRef(null);
  const location = useLocation();

  const yOffset = () => {
    setScrollY(window.scrollY);
  };

  const xOffset = () => {
    setResizeX(window.scrollX);
  };

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener('scroll', yOffset);
    };
    const watchResize = () => {
      window.addEventListener('resize', xOffset);
    };
    const languagePackClosedDetector = () => {
      window.addEventListener('click', languagePackClosedHandler);
    };

    watchResize();
    watchScroll();
    languagePackClosedDetector();

    return () => {
      window.removeEventListener('scroll', yOffset);
      window.removeEventListener('resize', xOffset);
      window.removeEventListener('click', languagePackClosedHandler);
    };
  }, []);

  useEffect(() => {
    const toolbarHeight = toolbarRef.current
      ? toolbarRef.current.offsetHeight - toolbarSmallRef.current.offsetHeight
      : 90;

    if (scrollY > toolbarHeight) {
      setStickyToolbar(true);
    } else {
      setStickyToolbar(false);
    }
  }, [scrollY]);

  useEffect(() => {
    const footerHeight = footerRef.current ? footerRef.current.offsetHeight : 200;
    const toolbarHeight = toolbarRef.current ? toolbarRef.current.offsetHeight : 90;
    setMinHeight({
      minHeight: 'calc(100vh - ' + (footerHeight + toolbarHeight) + 'px)',
    });
  }, [resizeX]);

  const sideDrawerToggleHandler = () => {
    setSideDrawerIsVisible(!sideDrawerIsVisible);
  };

  const sideDrawerClosedHandler = () => {
    setSideDrawerIsVisible(false);
  };

  const languagePackToggleHandler = () => {
    setShowLanguages(!showLanguages);
  };

  const languagePackClosedHandler = (e) => {
    if (languagePackRef.current) {
      if (!languagePackRef.current.contains(e.target)) {
        setShowLanguages(false);
      }
    }
  };

  return (
    <React.Fragment>
      <div className='toolbar-height' ref={toolbarRef}>
        <div className='toolbar-height--small' ref={toolbarSmallRef}></div>
      </div>
      {!sideDrawerIsVisible && location.pathname === '/' && (
        <LanguagePack
          visible={showLanguages}
          moveUp={stickyToolbar}
          showToggler={languagePackToggleHandler}
          languagePackRef={languagePackRef}
          languageChange={context.changeLanguage}
        />
      )}
      <Toolbar
        sideDrawerToggleClicked={sideDrawerToggleHandler}
        sideDrawerIsVisible={sideDrawerIsVisible}
        sticky={stickyToolbar}
      />
      <SideDrawer opened={sideDrawerIsVisible} closed={sideDrawerClosedHandler} />
      <div style={minHeight}>{children}</div>
      <Footer footerRef={footerRef} />
    </React.Fragment>
  );
};

export default React.memo(Layout);
