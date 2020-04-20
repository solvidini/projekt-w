import React, { useState, useEffect, useRef, useContext } from 'react';
import { withRouter } from 'react-router';
import './Layout.scss';
import Toolbar from '../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../components/Navigation/SideDrawer/SideDrawer';
import Footer from '../components/Footer/Footer';
import { LanguageContext } from '../context';
import LanguagePack from '../components/LanguagePack/LanguagePack';

const Layout = props => {
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

	const yOffset = () => {
		setScrollY(window.pageYOffset);
	};

	const xOffset = () => {
		setResizeX(window.pageXOffset);
	};

	useEffect(() => {
		const watchScroll = () => {
			window.addEventListener('scroll', yOffset);
		};
		const watchResize = () => {
			window.addEventListener('resize', xOffset);
		};

		watchResize();
		watchScroll();

		return () => {
			window.removeEventListener('scroll', yOffset);
			window.removeEventListener('resize', xOffset);
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
		setMinHeight({ minHeight: 'calc(100vh - ' + (footerHeight + toolbarHeight) + 'px)' });
	}, [resizeX]);

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
			{!sideDrawerIsVisible && props.location.pathname === '/' && (
				<LanguagePack
					moveUp={stickyToolbar}
					clicked={context.changeLanguage}
					show={showLanguages}
					showToggler={() => setShowLanguages(!showLanguages)}
					hideToggler={() => setShowLanguages(false)}
				/>
			)}
			<Toolbar
				sideDrawerToggleClicked={sideDrawerToggleHandler}
				sideDrawerIsVisible={sideDrawerIsVisible}
				sticky={stickyToolbar}
			/>
			<SideDrawer opened={sideDrawerIsVisible} closed={sideDrawerClosedHandler} />
			<div style={minHeight}>{props.children}</div>
			<Footer footerRef={footerRef} />
		</React.Fragment>
	);
};

export default withRouter(React.memo(Layout));
